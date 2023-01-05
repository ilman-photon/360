import Cookies from "universal-cookie";
import { Api } from "../pages/api/api";
import { resetFilterData } from "../store/appointment";

const cookies = new Cookies();

const removedCookies = [
  "authorized",
  "username",
  "mfa",
  "securityQuestions",
  "accessToken",
  "refreshToken",
  "isStay",
  "IdleTimeOut",
  "isSecurityQuestionStep",
  "mfaPreferredMode",
  "prevPage",
];

const removedLocalStorage = ["userData", "userProfile"];

export const removeAuthCookies = (dispatch = null) => {
  removedCookies.forEach((key) => {
    cookies.remove(key, { path: "/patient" });
  });

  removedLocalStorage.forEach((key) => {
    localStorage.removeItem(key);
  });

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
  try {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      return "admin" === userData.userType?.toLowerCase();
    }
  } catch (err) {
    return false;
  }
}
