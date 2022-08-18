import * as React from "react";
import { useRouter } from "next/router";
import MfaLayout from "../../components/templates/mfaLayout";
import SetMultiFactorAuthentication from "../../components/organisms/MultiFactorAuthentication/setMultiFactorAuthentication";
import MultiFactorAuthentication from "../../components/organisms/MultiFactorAuthentication/multiFactorAuthentication";
import constants from "../../utils/constants";
import SecurityQuestion from "../../components/organisms/SecurityQuestion/securityQuestion";
import { Box } from "@mui/material";
import Cookies from "universal-cookie";
import AccountTitleHeading from "../../components/atoms/AccountTitleHeading/accountTitleHeading";
import FormMessage from "../../components/molecules/FormMessage/formMessage";
import { Api } from "../api/api";
import { useTranslation } from "next-i18next";

export async function getServerSideProps(context) {
  const cookies = new Cookies(context.req.headers.cookie);

  if (!cookies.get("mfa")) {
    return {
      redirect: {
        destination: "/patient/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function MfaPage() {
  const api = new Api();
  const cookies = new Cookies();
  const router = useRouter();
  const [componentName, setComponentName] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [mfaCode, setMfaCode] = React.useState("");
  const [successSubmit, setSuccessSubmit] = React.useState(false);
  const [securityQuestionList, setSecurityQuestionList] = React.useState([]);
  const [communicationMethod, setCommunicationMethod] = React.useState({});
  const { t } = useTranslation("translation", { keyPrefix: "mfaPage" });
  //just mock
  const [submitCounter, setSubmitCounter] = React.useState(0);
  const [requestCounter, setRequestCounter] = React.useState(0);

  React.useEffect(() => {
    if (Object.keys(communicationMethod).length == 0) {
      const data = api.getCommunicationMethod(
        cookies.get("username", { path: "/patient" })
      );
      data
        .then((response) => {
          setCommunicationMethod(response);
        })
        .catch(() => {
          // This is intentional
        });
    }
  });

  function onConfirmClicked() {
    api
      .requestCode()
      .then((response) => {
        setMfaCode(response);
        setConfirm(true);
      })
      .catch(() => {
        // This is intentional
      });
    setComponentName(constants.MFA_COMPONENT_NAME);
  }

  function onBackToLoginClicked() {
    router.push("/patient/login");
  }

  function redirectToDashboard() {
    const hostname = window.location.origin;
    window.location.href = `${hostname}/patient`;
    //Alternative 1
    rememberMe && cookies.set("rememberMe", rememberMe, { path: "/patient" });
    //Alternative 2
    cookies.set("authorized", true, { path: "/patient" });
    cookies.remove("mfa", { path: "/patient" });
  }

  function onSubmitClicked(inputMfaCode, callback) {
    if (inputMfaCode === mfaCode) {
      onShowSecurityQuestionForm();
    } else {
      if (submitCounter > 2) {
        callback({
          status: "failed",
          isEndView: true,
          message: {
            title: t("mfaLockTitle"),
            description: t("mfaLockDescription"),
          },
        });
      } else {
        setSubmitCounter(submitCounter + 1);
        callback({
          status: "failed",
          message: {
            title: t("mfaFailedTitle"),
            description: t("Please try again."),
          },
        });
      }
    }
  }

  function onResendCodeClicked(callback) {
    if (requestCounter > 2) {
      callback({
        status: "failed",
        isEndView: true,
        message: {
          description:
            "Code sent multiple times. Please try again after 30 minutes.",
        },
      });
    } else {
      api
        .requestNewCode()
        .then((response) => {
          setMfaCode(response);
          setRequestCounter(requestCounter + 1);
        })
        .catch(() => {
          // This is intentional
        });
    }
  }

  function onSetRememberMe(value) {
    setRememberMe(value);
  }

  function onShowSecurityQuestionForm() {
    api
      .getSecurityQuestion()
      .then(function (response) {
        setSecurityQuestionList(response.securityQuestionList);
        setComponentName(constants.SQ_COMPONENT_NAME);
      })
      .catch(function () {
        console.error("Something went wrong");
      });
  }

  function onSubmitSecurityQuestionClicked(callback) {
    api
      .submitSecurityQuestion()
      .then(function () {
        setSuccessSubmit(true);
        setTimeout(() => {
          redirectToDashboard();
        }, 3000);
      })
      .catch(function () {
        callback({
          status: "failed",
          message: {
            title: "Code sent multiple times.",
            description: "Please try again after 30 minutes.",
          },
        });
      });
  }

  if (componentName === constants.MFA_COMPONENT_NAME) {
    return (
      <MultiFactorAuthentication
        onSubmitClicked={onSubmitClicked}
        onResendCodeClicked={onResendCodeClicked}
        onBackToLoginClicked={onBackToLoginClicked}
        rememberMe={rememberMe}
        setRememberMe={onSetRememberMe}
      />
    );
  } else if (componentName === constants.SQ_COMPONENT_NAME) {
    return (
      <Box
        sx={{
          marginTop: "-15px",
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
                },
              }}
            >
              <SecurityQuestion
                onClickedSubmitButton={onSubmitSecurityQuestionClicked}
                onClickedSkipButton={redirectToDashboard}
                securityQuestionList={securityQuestionList}
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
      />
    );
  }
}

MfaPage.getLayout = function getLayout(page) {
  return <MfaLayout>{page}</MfaLayout>;
};
