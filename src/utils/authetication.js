import Cookies from "universal-cookie";
import { Api } from "../pages/api/api";

export const logoutProps = {
  OnLogoutClicked: function (router) {
    const api = new Api();

    const postbody = {
      username: "user1",
    };

    api
      .logout(postbody)
      .then(function () {
        const cookies = new Cookies();
        cookies.remove("authorized", { path: "/patient" });
        cookies.remove("username", { path: "/patient" });
        cookies.remove("ip", { path: "/patient" });
        cookies.remove("securityQuestions", { path: "/patient" });
        router.push("/patient/login");
      })
      .catch(() => {
        //this is intentional
      });
  },
};
