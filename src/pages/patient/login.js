import AuthLayout from "../../components/templates/authLayout";
import Login from "../../components/organisms/Login/login";
import Cookies from "universal-cookie";
import { Api } from "../api/api";

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
  return (
    <AuthLayout
      showMobileImage={true}
      imageSrc={
        "https://c4.wallpaperflare.com/wallpaper/930/115/679/panda-4k-high-quality-hd-wallpaper-preview.jpg"
      }
    >
      {page}
    </AuthLayout>
  );
};
