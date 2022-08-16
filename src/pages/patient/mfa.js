import * as React from "react";
import { useRouter } from "next/router";
import MfaLayout from "../../components/templates/mfaLayout";
import SetMultiFactorAuthentication from "../../components/organisms/MultiFactorAuthentication/setMultiFactorAuthentication";
import MultiFactorAuthentication from "../../components/organisms/MultiFactorAuthentication/multiFactorAuthentication";
import Cookies from "universal-cookie";
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

  return {
    props: {},
  };
}

export default function MfaPage() {
  const api = new Api();
  const cookies = new Cookies();
  const router = useRouter();
  const [confirm, setConfirm] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);
  const [mfaCode, setMfaCode] = React.useState("");
  const [communicationMethod, setCommunicationMethod] = React.useState({});

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
        .catch(() => {});
    }
  });

  function onConfirmClicked() {
    api
      .requestCode()
      .then((response) => {
        setMfaCode(response);
        setConfirm(true);
      })
      .catch(() => {});
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
    //api.setRemeberMe(rememberMe);
    cookies.set("authorized", true, { path: "/patient" });
    cookies.remove("mfa", { path: "/patient" });
  }

  function onSubmitClicked(inputMfaCode, callback) {
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
        data={communicationMethod}
      />
    );
  }
}

MfaPage.getLayout = function getLayout(page) {
  return <MfaLayout>{page}</MfaLayout>;
};
