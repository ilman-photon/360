import * as React from "react";
import { useRouter } from "next/router";
import MfaLayout from "../../components/templates/mfaLayout";
import SetMultiFactorAuthentication from "../../components/organisms/MultiFactorAuthentication/setMultiFactorAuthentication";
import MultiFactorAuthentication from "../../components/organisms/MultiFactorAuthentication/multiFactorAuthentication";
import constants from "../../utils/constants";
import SecurityQuestion from "../../components/organisms/SecurityQuestion/securityQuestion";
import { Box, Typography } from "@mui/material";
import Cookies from "universal-cookie";
import AccountTitleHeading from "../../components/atoms/AccountTitleHeading/accountTitleHeading";
import FormMessage from "../../components/molecules/FormMessage/formMessage";
import { Api } from "../api/api";
import { useTranslation } from "next-i18next";
import { formatPhoneNumber } from "../../utils/phoneFormatter";
import { Provider } from "react-redux";
import store from "../../store/store";

export async function getServerSideProps(context) {
  const cookies = new Cookies(context.req.headers.cookie);
  const isStepTwo = cookies.get("isStay") == "stay";

  if (!cookies.get("mfa")) {
    return {
      redirect: {
        destination: "/patient/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      isStepTwo,
    },
  };
}

export default function MfaPage({ isStepTwo }) {
  const api = new Api();
  const cookies = new Cookies();
  const router = useRouter();
  const username = cookies.get("username", { path: "/patient" });
  const ip = cookies.get("ip", { path: "/patient" });
  const [componentName, setComponentName] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [successSubmit, setSuccessSubmit] = React.useState(false);
  const [otpValidation, setOTPValidation] = React.useState("");
  const [securityQuestionList, setSecurityQuestionList] = React.useState([]);
  const [communicationMethod, setCommunicationMethod] = React.useState({});
  const { t } = useTranslation("translation", { keyPrefix: "mfaPage" });
  const { MFA_TEST_ID } = constants.TEST_ID;
  const onBackButtonEvent = (e) => {
    e.preventDefault();
    onBackToLoginClicked();
  };

  React.useEffect(() => {
    if (Object.keys(communicationMethod).length == 0) {
      const postBody = {
        username,
      };
      api
        .getUserData(postBody)
        .then((response) => {
          const method = response.communicationMethod;
          if (method.phone) {
            method.phone = formatPhoneNumber(method.phone, true);
          }
          setCommunicationMethod(method);
        })
        .catch(() => {
          // This is intentional
        });
    }
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);
    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
    };
  });

  React.useEffect(() => {
    return () => {
      cookies.remove("isStay");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTempValidation = (response) => {
    if (process.env.ENV_NAME !== "prod" && response && response.mfaCode) {
      setOTPValidation(response.mfaCode);
    }
  };

  function onConfirmClicked(communication, callback) {
    const deviceId = ip.replace(/\./g, "");
    const postBody = {
      username,
      deviceId,
      communication,
    };
    api
      .sendMfaCode(postBody)
      .then((response) => {
        setTempValidation(response);
        setComponentName(constants.MFA_COMPONENT_NAME);
        cookies.set("isStay", "stay", { path: "/patient" });
      })
      .catch((err) => {
        if (err.ResponseCode === 4004) {
          callback({
            status: "failed",
            isEndView: true,
            message: {
              description: err.ResponseType,
            },
          });
        }
      });
  }

  function onBackToLoginClicked() {
    cookies.remove("mfa", { path: "/patient" });
    cookies.remove("username", { path: "/patient" });
    cookies.remove("ip", { path: "/patient" });
    cookies.remove("mfaAccessToken", { path: "/patient" });
    router.push("/patient/login");
  }

  function redirectToDashboard() {
    const hostname = window.location.origin;
    window.location.href = `${hostname}/patient`;

    cookies.set("authorized", true, { path: "/patient" });
    cookies.remove("mfa", { path: "/patient" });
    !rememberMe && cookies.remove("mfaAccessToken", { path: "/patient" });
  }

  function onSubmitClicked(inputMfaCode, callback) {
    const postBody = {
      username,
      rememberMe,
      otp: inputMfaCode,
    };
    api
      .submitMfaCode(postBody)
      .then((response) => {
        if (response.mfaAccessToken) {
          cookies.set("mfaAccessToken", response.mfaAccessToken, {
            path: "/patient",
          });
        }

        const securityQuestions = cookies.get("securityQuestions");
        if (securityQuestions.length === 0) {
          onShowSecurityQuestionForm();
        } else {
          redirectToDashboard();
        }
      })
      .catch((err) => {
        if (err.ResponseCode !== constants.ERROR_CODE.NETWORK_ERR) {
          if (err.ResponseCode === 4003) {
            callback({
              status: "failed",
              isEndView: true,
              message: {
                title: t("mfaLockTitle"),
                description: t("mfaLockDescription"),
              },
            });
          } else {
            callback({
              status: "failed",
              message: {
                title: t("mfaFailedTitle"),
                description: t("mfaFailedDescription"),
              },
            });
          }
        }
      });
  }

  function onResendCodeClicked(callback) {
    const deviceId = ip.replace(/\./g, "");
    const postBody = {
      username,
      deviceId,
      codeType: "resendCode",
    };
    api
      .sendMfaCode(postBody)
      .then((response) => {
        setTempValidation(response);
        callback({
          status: "success",
        });
      })
      .catch((err) => {
        if (err.ResponseCode !== constants.ERROR_CODE.NETWORK_ERR) {
          if (err.ResponseCode === 4001) {
            callback({
              status: "failed",
              isEndView: true,
              message: {
                description: err.ResponseType,
              },
            });
          }
        }
      });
  }

  function onSetRememberMe(value) {
    setRememberMe(value);
  }

  function onShowSecurityQuestionForm() {
    api
      .getSecurityQuestion()
      .then(function (response) {
        setSecurityQuestionList(
          mappingSecurityQuestionList(response.SetUpSecurityQuestions)
        );
        setComponentName(constants.SQ_COMPONENT_NAME);
      })
      .catch(function () {
        console.error("Something went wrong");
      });
  }

  function onSubmitSecurityQuestionClicked(data, callback) {
    const questionAnswer = {};
    for (let i = 0; i < data.answer.length; i++) {
      questionAnswer[data.question[i]] = data.answer[i];
    }

    const postBody = {
      username: cookies.get("username", { path: "/patient" }),
      SecurityQuestions: [questionAnswer],
    };
    api
      .submitSecurityQuestion(postBody)
      .then(function () {
        setSuccessSubmit(true);
        setTimeout(() => {
          redirectToDashboard();
        }, 3000);
      })
      .catch(function (err) {
        if (err.ResponseCode !== constants.ERROR_CODE.NETWORK_ERR) {
          callback({
            status: "failed",
            message: "Failed to sumbit the security question.",
          });
        }
      });
  }

  function mappingSecurityQuestionList(securityQuestionList = []) {
    const questionList = [];
    securityQuestionList = securityQuestionList[0]
      ? securityQuestionList[0]
      : {};
    for (const [key] of Object.entries(securityQuestionList)) {
      questionList.push(key);
    }
    return questionList;
  }

  if (componentName === constants.MFA_COMPONENT_NAME || isStepTwo) {
    return (
      <>
        <MultiFactorAuthentication
          onSubmitClicked={onSubmitClicked}
          onResendCodeClicked={onResendCodeClicked}
          onBackToLoginClicked={onBackToLoginClicked}
          rememberMe={rememberMe}
          setRememberMe={onSetRememberMe}
          testIds={MFA_TEST_ID}
        />
        {otpValidation ? (
          <Typography
            aria-hidden={"true"}
            style={{ display: "none" }}
            data-testid={"loc_validationMFA"}
          >
            {otpValidation}
          </Typography>
        ) : null}
      </>
    );
  } else if (componentName === constants.SQ_COMPONENT_NAME) {
    return (
      <Box
        sx={{
          marginTop: "-15px",
          ["@media (max-width: 992px)"]: {
            marginTop: "-25px",
          },
        }}
      >
        {!successSubmit ? (
          <Box sx={{ background: "#FAFAFA" }}>
            <AccountTitleHeading
              title={"Set-up Security Questions"}
              sx={{
                textAlign: "left",
                paddingLeft: "16px",
              }}
            />
            :
            <Box
              sx={{
                paddingTop: "65px",
                maxWidth: "75.1%",
                minWidth: 686,
                margin: "auto",
                background: "#fff",
                borderWidth: "0px 1px",
                borderColor: "#F3F3F3",
                borderStyle: "solid",
                ["@media (max-width: 992px)"]: {
                  paddingTop: "45px",
                  maxWidth: "100%",
                  minWidth: "100%",
                },
              }}
            >
              <SecurityQuestion
                onClickedSubmitButton={onSubmitSecurityQuestionClicked}
                onClickedSkipButton={redirectToDashboard}
                securityQuestionList={securityQuestionList}
                testIds={MFA_TEST_ID}
              />
            </Box>
          </Box>
        ) : (
          <FormMessage
            success={true}
            sx={{
              borderRadius: "0px",
              justifyContent: "center",
              backgroundColor: "#04844B",
            }}
          >
            Security questions set up successfully
          </FormMessage>
        )}
      </Box>
    );
  } else {
    return (
      <SetMultiFactorAuthentication
        onConfirmClicked={onConfirmClicked}
        onBackToLoginClicked={onBackToLoginClicked}
        rememberMe={rememberMe}
        setRememberMe={onSetRememberMe}
        data={communicationMethod}
        testIds={MFA_TEST_ID}
      />
    );
  }
}

MfaPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <MfaLayout>{page}</MfaLayout>
    </Provider>
  );
};
