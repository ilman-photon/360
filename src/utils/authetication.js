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
  localStorage.removeItem("userData");
};

export const logoutProps = {
  OnLogoutClicked: function (router) {
    const api = new Api();
    const postbody = {
      username: cookies.get("username"),
      refreshToken: cookies.get("refreshToken"),
    };

    api
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
