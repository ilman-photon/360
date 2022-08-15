import AuthLayout from "../../components/templates/authLayout";
import Cookies from "universal-cookie";
import { Api } from "../api/api";
import Login from "../../components/organisms/Login/login";

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

        isNotNeedMfa && cookies.set("authorized", true, { path: "/patient" });
        const hostname = window.location.origin;
        window.location.href = isNotNeedMfa
          ? `${hostname}/patient`
          : `${hostname}/patient/mfa`;
        //router.push("/patient/mfa/");
        callback({ status: "success" });
      })
      .catch(function (err) {
        const isLockedAccount = err.ResponseCode === 2004;
        const title = isLockedAccount ? "Account Locked" : "";
        const description = isLockedAccount
          ? "Too many login attempts. Your account is locked. Please contact customer support to unlock your account"
          : "Invalid Username or Password";
        callback({
          status: "failed",
          message: {
            title,
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
