import AuthLayout from "../../components/templates/authLayout";
import Cookies from "universal-cookie";
import { Api } from "../api/api";
import { Login as LoginComponent } from "../../components/organisms/Login/login";
import { useEffect } from "react";

const loginProps = {
  OnLoginClicked: function (postbody, _router, callback) {
    const api = new Api();
    api
      .login(postbody)
      .then(function () {
        const hostname = window.location.origin;
        window.location.href = isNotNeedMfa
          ? `${hostname}/patient`
          : `${hostname}/patient/mfa`;
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

export default function login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const cookies = new Cookies();
    if (cookies.get("mfa")) {
      cookies.remove("mfa", { path: "/patient" });
    }
    if (cookies.get("authorized")) {
      cookies.remove("authorized", { path: "/patient" });
    }
  });

  return <LoginComponent {...loginProps} />;
}

login.getLayout = function getLayout(page) {
  const backgroundImage = "/login-bg.png";
  return (
    <AuthLayout showMobileImage={true} imageSrc={backgroundImage}>
      {page}
    </AuthLayout>
  );
};
