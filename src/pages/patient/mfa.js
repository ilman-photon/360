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
      redirectToDashboard();
    } else {
      callback({
        status: "failed",
        isLock: false,
        message: {
          title: "Incorrect Code.",
          description: "Please try again.",
        },
      });
    }
  }

  function onResendCodeClicked(callback) {
    callback({
      status: "failed",
      message: {
        title: "Code sent multiple times.",
        description: "Please try again after 30 minutes.",
      },
    });
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
