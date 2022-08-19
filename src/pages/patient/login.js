import AuthLayout from "../../components/templates/authLayout";
import Cookies from "universal-cookie";
import { Api } from "../api/api";
import { Login as LoginComponent } from "../../components/organisms/Login/login";
import { useEffect } from "react";

function getUserData(username, callback) {
  const api = new Api();
  const cookies = new Cookies();
  const postBody = {
    username,
  };
  api
    .getUserData(postBody)
    .then((response) => {
      const mfaAccessToken = response.mfaAccessToken || "";
      const mfaAccessTokenCookie = cookies.get("mfaAccessToken", {
        path: "/patient",
      });

      if (mfaAccessToken === mfaAccessTokenCookie) {
        callback(true);
      } else {
        callback(false);
      }
    })
    .catch(() => {
      callback(false);
    });
}

const loginProps = {
  OnLoginClicked: function (postbody, _router, callback) {
    const api = new Api();
    const cookies = new Cookies();
    api
      .login(postbody)
      .then(function (response) {
        const IdleTimeOut = response.IdleTimeOut * 1000 || 1200 * 1000;
        cookies.set("IdleTimeOut", IdleTimeOut, { path: "/patient" });
        cookies.set("username", postbody.username, { path: "/patient" });
        getUserData(postbody.username, (isNotNeedMfa) => {
          if (isNotNeedMfa) {
            cookies.set("authorized", true, { path: "/patient" });
          } else {
            cookies.set("mfa", true, { path: "/patient" });
          }
          const hostname = window.location.origin;
          window.location.href = isNotNeedMfa
            ? `${hostname}/patient/account/profile-info`
            : `${hostname}/patient/mfa`;
          callback({ status: "success" });
        });
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
