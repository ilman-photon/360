import AuthLayout from "../../../components/templates/authLayout";
import Cookies from "universal-cookie";
import { Api } from "../../api/api";
import { Login as LoginComponent } from "../../../components/organisms/Login/login";
import { useEffect } from "react";
import constants from "../../../utils/constants";

function getUserData(username, callback) {
  const api = new Api();

  const postBody = {
    username,
  };
  api
    .getUserData(postBody)
    .then((response) => {
      const mfaAccessToken = response.mfaAccessToken || "";
      const isHasMfaAccessToken = mfaAccessToken !== "";
      callback(isHasMfaAccessToken);
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
        const securityQuestions = response.SecurityQuestions || [];
        cookies.set("IdleTimeOut", IdleTimeOut, { path: "/patient" });
        cookies.set("username", postbody.username, { path: "/patient" });
        cookies.set("accessToken", response.access_token, { path: "/patient" });
        cookies.set("refreshToken", response.refresh_token, {
          path: "/patient",
        });
        cookies.set("securityQuestions", securityQuestions, {
          path: "/patient",
        });
        getUserData(postbody.username, (isNotNeedMfa) => {
          if (isNotNeedMfa) {
            cookies.set("authorized", true, { path: "/patient" });
          } else {
            cookies.set("mfa", true, { path: "/patient" });
          }
          const hostname = window.location.origin;
          window.location.href = isNotNeedMfa
            ? `${hostname}/patient/`
            : `${hostname}/patient/mfa`;
          callback({ status: "success" });
        });
      })
      .catch(function (err) {
        if (err.ResponseCode !== constants.ERROR_CODE.NETWORK_ERR) {
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
        }
      });
  },
  OnCreateAccountClicked: function (router) {
    router.push("/patient/auth/create-account");
  },
  OnForgotPasswordClicked: function (router) {
    router.push("/patient/forgot-password");
  },
  onAppointmentClicked: "/patient/sync",
};

export default function login() {
  const api = new Api();
  const cookies = new Cookies();
  cookies.remove("isStay", { path: "/patient" });

  const removeCookies = () => {
    if (cookies.get("mfa")) {
      cookies.remove("mfa", { path: "/patient" });
    }
    if (cookies.get("authorized")) {
      cookies.remove("authorized", { path: "/patient" });
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!cookies.get("ip")) {
      api
        .getIpAddress()
        .then((ip) => {
          cookies.set("ip", ip, { path: "/patient" });
          removeCookies();
        })
        .catch(() => {
          removeCookies();
        });
    } else {
      removeCookies();
    }
  });

  return <LoginComponent {...loginProps} />;
}

login.getLayout = function getLayout(page) {
  const backgroundImage = "/login-bg.png";
  return (
    <AuthLayout
      showMobileImage={true}
      imageSrc={backgroundImage}
      title={"Patient Login"}
    >
      {page}
    </AuthLayout>
  );
};
