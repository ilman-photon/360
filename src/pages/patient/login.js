import AuthLayout from "../../components/templates/authLayout";
import Cookies from "universal-cookie";
import { Api } from "../api/api";
import Login from "../../components/organisms/Login/login";
import { useEffect } from "react";

const loginProps = {
  OnLoginClicked: function (postbody, router, callback) {
    const api = new Api();
    const cookies = new Cookies();
    api
      .login(postbody)
      .then(function (response) {
        cookies.set("username", postbody.username, { path: "/patient" });
        //Alternative 1
        const isRememberMe =
          cookies.get("rememberMe", { path: "/patient" }) === "true";
        const usernameCookie = cookies.get("username", { path: "/patient" });
        const isNotNeedMfa =
          isRememberMe && usernameCookie === postbody.username;

        //Alternative 2
        //const isNotNeedMfa = response.isRememberMe

        if (isNotNeedMfa) {
          cookies.set("authorized", true, { path: "/patient" });
        } else {
          cookies.set("mfa", true, { path: "/patient" });
        }
        const hostname = window.location.origin;
        window.location.href = isNotNeedMfa
          ? `${hostname}/patient`
          : `${hostname}/patient/mfa`;
        /**
         * TODO navigate to mfa router.push("/patient/mfa/");
         */
        callback({ status: "success" });
      })
      .catch(function (err) {
        const isLockedAccount = err.ResponseCode === 2004;
        const description = isLockedAccount
          ? "Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account."
          : "Invalid Username or Password";
        callback({
          status: "failed",
          message: {
            description,
          },
        });
      });
  },
  OnGuestClicked: function () {
    // This is intentional
  },
  OnCreateAccountClicked: function (router) {
    router.push("/patient/auth/create-account");
  },
  OnForgotPasswordClicked: function (router) {
    router.push("/patient/forgot-password");
  },
};

export default function AuthPage() {
  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get("mfa")) {
      cookies.remove("mfa", { path: "/patient" });
    }
    if (cookies.get("authorized")) {
      cookies.remove("authorized", { path: "/patient" });
    }
  });

  return <Login {...loginProps} />;
}

AuthPage.getLayout = function getLayout(page) {
  const backgroundImage = "/login-bg.png";
  return (
    <AuthLayout showMobileImage={true} imageSrc={backgroundImage}>
      {page}
    </AuthLayout>
  );
};
