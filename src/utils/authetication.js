import Cookies from "universal-cookie";
import { Api } from "../pages/api/api";

export const logoutProps = {
  OnLogoutClicked: function (router) {
    const api = new Api();
    const cookies = new Cookies();
    const postbody = {
      username: cookies.get("username"),
      refreshToken: cookies.get("refreshToken")
    };

    api
      .logout(postbody)
      .then(function () {
        const cookies = new Cookies();
        cookies.remove("authorized", { path: "/patient" });
        cookies.remove("username", { path: "/patient" });
        cookies.remove("ip", { path: "/patient" });
        cookies.remove("mfaAccessToken", { path: "/patient" });
        cookies.remove("securityQuestions", { path: "/patient" });
        cookies.remove("accessToken", { path: "/patient" });
        cookies.remove("refreshToken", { path: "/patient" });
        router.push("/patient/login");
      })
      .catch(() => {
        //this is intentional
      });
  },
};
