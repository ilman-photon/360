import Cookies from "universal-cookie";
import { Api } from "../pages/api/api";
import { resetFilterData } from "../store/appointment";

const cookies = new Cookies();

export const removeAuthCookies = (dispatch = null) => {
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
  cookies.remove("prevPage", { path: "/patient" });
  localStorage.removeItem("userData");
  if (dispatch) {
    dispatch(resetFilterData());
  }
};

export const logoutProps = {
  OnLogoutClicked: async function (
    router,
    dispatch = null,
    newUsername = null
  ) {
    const api = new Api();
    const postbody = {
      username: newUsername === null ? cookies.get("username") : newUsername,
      refreshToken: cookies.get("refreshToken"),
      patientType: JSON.parse(localStorage.getItem("userData")).userType,
    };

    return api
      .logout(postbody)
      .then(function () {
        removeAuthCookies(dispatch);
        router.push("/patient/login");
      })
      .catch(() => {
        //this is intentional
      });
  },
};

export function isAdminUser() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData) {
    return "admin" === userData.userType?.toLowerCase();
  }
  return false;
}
