import Cookies from "universal-cookie";
import { Api } from "../pages/api/api";

const cookies = new Cookies();

export const removeAuthCookies = () => {
  cookies.remove("authorized", { path: "/patient" });
  cookies.remove("username", { path: "/patient" });
  cookies.remove("mfa", { path: "/patient" });
  cookies.remove("securityQuestions", { path: "/patient" });
  cookies.remove("accessToken", { path: "/patient" });
  cookies.remove("refreshToken", { path: "/patient" });
  cookies.remove("isStay", { path: "/patient" });
  cookies.remove("IdleTimeOut", { path: "/patient" });
  cookies.remove("isSecurityQuestionStep", { path: "/patient" });
  cookies.remove("mfaPreferredMode", { path: "/patient" });
  localStorage.removeItem("userData");
};

export const logoutProps = {
  OnLogoutClicked: async function (router) {
    const api = new Api();
    const postbody = {
      username: cookies.get("username"),
      refreshToken: cookies.get("refreshToken"),
      patientType: JSON.parse(localStorage.getItem("userData")).userType,
    };

    return api
      .logout(postbody)
      .then(function () {
        removeAuthCookies();
        router.push("/patient/login");
      })
      .catch(() => {
        //this is intentional
      });
  },
};
