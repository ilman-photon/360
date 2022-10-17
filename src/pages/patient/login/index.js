import AuthLayout from "../../../components/templates/authLayout";
import Cookies from "universal-cookie";
import { Api } from "../../api/api";
import { Login as LoginComponent } from "../../../components/organisms/Login/login";
import { useEffect } from "react";
import constants from "../../../utils/constants";
import { removeAuthCookies } from "../../../utils/authetication";
import Provider from "../../../store/provider";

const api = new Api();
const cookies = new Cookies();

function getUserData(postbody, callback) {
  const post = {
    username: postbody.username,
  };
  api
    .getUserData(post)
    .then((response) => {
      getPatientId(postbody, (patientId) => {
        const mfaAccessToken =
          cookies.get("mfaAccessToken", { path: "/patient" }) || "";
        const isHasMfaAccessToken =
          mfaAccessToken === patientId.replace(/-/g, "");
        const userData = {
          communicationMethod: response.communicationMethod,
          patientId,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        !isHasMfaAccessToken &&
          cookies.remove("mfaAccessToken", { path: "/patient" });
        callback(isHasMfaAccessToken);
      });
    })
    .catch((err) => {
      if (api.responseCodeValidation(err)) {
        callback(false);
      }
    });
}

function getPatientId(postBody, callback) {
  api
    .getPatientId(postBody)
    .then((response) => {
      callback(response.ecpPatientId || "");
    })
    .catch(() => {
      callback(false);
    });
}

export const loginProps = {
  OnLoginClicked: function (postbody, _router, callback) {
    api
      .login(postbody)
      .then(function (response) {
        const IdleTimeOut = response.IdleTimeOut * 1000 || 1200 * 1000;
        const securityQuestions = response.isSecurityQuestionsSetUp;
        cookies.set("IdleTimeOut", IdleTimeOut, { path: "/patient" });
        cookies.set("username", postbody.username, { path: "/patient" });
        cookies.set("accessToken", response.access_token, { path: "/patient" });
        cookies.set("refreshToken", response.refresh_token, {
          path: "/patient",
        });
        cookies.set("securityQuestions", securityQuestions, {
          path: "/patient",
        });

        getUserData(postbody, (isNotNeedMfa) => {
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
          callback({
            status: "failed",
            message: isLockedAccount
              ? {
                  title: "errorLoginLockedTitle",
                  description: "errorLoginLockedMessage",
                }
              : {
                  description: "errorFailedLogin",
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    removeAuthCookies();
  });

  return <LoginComponent {...loginProps} />;
}

login.getLayout = function getLayout(page) {
  const backgroundImage = "/login-bg.png";
  return (
    <Provider store={store}>
      <AuthLayout
        showMobileImage={true}
        imageSrc={backgroundImage}
        title={"Patient Login"}
      >
        {page}
      </AuthLayout>
    </Provider>
  );
};
