import AuthLayout from "../../components/templates/authLayout";
import Cookies from "universal-cookie";
import { Api } from "../api/api";
import dynamic from "next/dynamic";

//Prevent html being match between server and client
const Login = dynamic(() => import("../../components/organisms/Login/login"), {
  ssr: false,
});
const loginProps = {
  OnLoginClicked: function (postbody, router, callback) {
    const api = new Api();
    const cookies = new Cookies();
    api
      .login(postbody)
      .then(function (response) {
        //router.push("/patient");
        const hostname = window.location.origin;
        window.location.href = `${hostname}/patient`;
        cookies.set("authorized", true, { path: "/patient" });
        callback({ status: "success" });
      })
      .catch(function (err) {
        console.log(err);
        const isLockedAccount = err.ResponseCode === 2004;
        const isInvalidCredentials = err.ResponseCode === 2001;
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
  OnGuestClicked: function () {},
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
