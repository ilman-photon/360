import * as React from "react";
import { useRouter } from "next/router";
import MfaLayout from "../../components/templates/mfaLayout";
import SetMultiFactorAuthentication from "../../components/organisms/MultiFactorAuthentication/setMultiFactorAuthentication";
import MultiFactorAuthentication from "../../components/organisms/MultiFactorAuthentication/multiFactorAuthentication";
import Cookies from "universal-cookie";

export default function MfaPage() {
  const router = useRouter();
  const [confirm, setConfirm] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);
  const [mfaCode, setMfaCode] = React.useState("");

  //just mock
  const [submitCounter, setSubmitCounter] = React.useState(0);
  const [requestCounter, setRequestCounter] = React.useState(0);

  function onConfirmClicked() {
    setMfaCode("1234");
    setConfirm(true);
  }

  function onBackToLoginClicked() {
    router.push("/patient/login");
  }

  function redirectToDashboard() {
    const cookies = new Cookies();
    const hostname = window.location.origin;
    window.location.href = `${hostname}/patient`;
    cookies.set("authorized", true, { path: "/patient" });
  }

  function onSubmitClicked(inputMfaCode, callback) {
    //just fo check the functionality
    console.log(inputMfaCode === mfaCode);
    if (inputMfaCode === mfaCode) {
      setSubmitCounter(0);
      redirectToDashboard();
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
      setMfaCode("4321");
      setRequestCounter(requestCounter + 1);
    }
  }

  function onSetRememberMe(value) {
    setRememberMe(value);
  }

  if (confirm) {
    return (
      <MultiFactorAuthentication
        onSubmitClicked={onSubmitClicked}
        onResendCodeClicked={onResendCodeClicked}
        onBackToLoginClicked={onBackToLoginClicked}
        rememberMe={rememberMe}
        setRememberMe={onSetRememberMe}
      />
    );
  } else {
    return (
      <SetMultiFactorAuthentication
        onConfirmClicked={onConfirmClicked}
        onBackToLoginClicked={onBackToLoginClicked}
        rememberMe={rememberMe}
        setRememberMe={onSetRememberMe}
        data={{
          email: "m********@yahoo.com",
          phone: "(8***)***-***31",
        }}
      />
    );
  }
}

MfaPage.getLayout = function getLayout(page) {
  return <MfaLayout>{page}</MfaLayout>;
};
