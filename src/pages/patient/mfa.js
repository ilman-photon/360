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

  const api = new Api();
  const data = api.getCommunicationMethod(cookies.get("username"));

  return {
    props: {
      communicationMethod: await data
        .then((response) => {
          return response;
        })
        .catch(() => {
          return {};
        }),
    },
  };
}

export default function MfaPage(props) {
  const api = new Api();
  const cookies = new Cookies();
  const router = useRouter();
  const [componentName, setComponentName] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [mfaCode, setMfaCode] = React.useState("");
  const [successSubmit, setSuccessSubmit] = React.useState(false);
  const [securityQuestionList, setSecurityQuestionList] = React.useState([]);

  //just mock
  const [submitCounter, setSubmitCounter] = React.useState(0);
  const [requestCounter, setRequestCounter] = React.useState(0);

  function onConfirmClicked() {
    api
      .requestCode()
      .then((response) => {
        setMfaCode(response);
        setConfirm(true);
      })
      .catch(() => {});
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
    api.setRemeberMe(rememberMe);
    cookies.set("authorized", true, { path: "/patient" });
  }

  function onSubmitClicked(inputMfaCode, callback) {
    //TODO: Call service

    if (inputMfaCode === mfaCode) {
      onShowSecurityQuestionForm();
    } else {
      if (submitCounter > 2) {
        callback({
          status: "failed",
          isEndView: true,
          message: {
            title: "Too many attempts.",
            description:
              "Please try setting up multi factor authentication after 30 minutes.",
          },
        });
      } else {
        setSubmitCounter(submitCounter + 1);
        callback({
          status: "failed",
          message: {
            title: "Incorrect Code.",
            description: "Please try again.",
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
        .catch(() => {});
    }
  }

  function onSetRememberMe(value) {
    setRememberMe(value);
  }

  function onShowSecurityQuestionForm() {
    const api = new Api();
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
    const api = new Api();
    api
      .submitSecurityQuestion()
      .then(function (response) {
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
          marginTop: "-10px",
        }}
      >
        {!successSubmit ? (
          <Box>
            <AccountTitleHeading title={"Set-up Security Questions"} />:
            <Box
              sx={{
                paddingTop: "80px",
                maxWidth: 1400,
                minWidth: 686,
                margin: "auto",
                background: "#fff",
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
        data={props.communicationMethod}
      />
    );
  }
}

MfaPage.getLayout = function getLayout(page) {
  return <MfaLayout>{page}</MfaLayout>;
};
