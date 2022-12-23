import AuthLayout from "../../../components/templates/authLayout";
import Cookies from "universal-cookie";
import { Api } from "../../api/api";
import { Login as LoginComponent } from "../../../components/organisms/Login/login";
import { useEffect } from "react";
import constants from "../../../utils/constants";
import { removeAuthCookies } from "../../../utils/authetication";
import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../store/user";
import store from "../../../store/store";
import FloatingMessage from "../../../components/molecules/FloatingMessage/floatingMessage";
import { setLoginMessage } from "../../../store";

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
          userType: "patient",
          username: postbody.username,
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
      callback(response.ecpPatientId || "-");
    })
    .catch(() => {
      callback("-");
    });
}

export const loginProps = {
  OnLoginClicked: function (postbody, _router, callback, dispatch) {
    api
      .login(postbody)
      .then(function (response) {
        cookies.set("accessToken", response.access_token, { path: "/patient" });
        cookies.set("refreshToken", response.refresh_token, {
          path: "/patient",
        });

        if (response.patientType === "admin") {
          cookies.set("username", postbody.username, { path: "/patient" });
          cookies.set("authorized", true, { path: "/patient" });
          localStorage.setItem(
            "userProfile",
            JSON.stringify({
              title: 0,
              firstName: postbody.username,
              lastName: "",
              nickName: "",
              dob: "",
              age: "",
              sex: 0,
              address: [],
              smokingHistory: [],
              contactPrefrence: true,
              contactInformation: {
                phones: [
                  {
                    type: 3,
                    number: "",
                  },
                ],
                emails: [
                  {
                    type: 1,
                    email: "",
                  },
                ],
                noEmail: false,
                contactPreferenceDetail: {
                  phone: false,
                  text: false,
                  email: false,
                },
              },
              patientDetails: {
                isFlagNew: false,
                isFlagInCollection: false,
                isFlagBadCheck: false,
                isFlagDeceased: false,
                isFlagChartless: true,
              },
            })
          );
          const adminData = {
            userType: response.patientType,
          };
          localStorage.setItem("userData", JSON.stringify(adminData));
          _router.push("/patient/admin/locked-accounts");
        } else {
          cookies.set("username", postbody.username, { path: "/patient" });
          const IdleTimeOut = response.IdleTimeOut * 1000 || 1200 * 1000;
          const securityQuestions = response.isSecurityQuestionsSetUp;
          cookies.set("IdleTimeOut", IdleTimeOut, { path: "/patient" });
          cookies.set("securityQuestions", securityQuestions, {
            path: "/patient",
          });
          cookies.set(
            "isSecurityQuestionsSkipped",
            response.isSecurityQuestionsSkipped,
            {
              path: "/patient",
            }
          );
          getUserData(postbody, async (isNotNeedMfa) => {
            if (isNotNeedMfa) {
              cookies.set("authorized", true, { path: "/patient" });
            } else {
              cookies.set("mfa", true, { path: "/patient" });
            }

            try {
              const userStorageData = JSON.parse(
                localStorage.getItem("userData")
              );
              if (userStorageData) {
                const response = await dispatch(
                  fetchUser({ patientId: userStorageData.patientId })
                );
                response?.payload &&
                  localStorage.setItem(
                    "userProfile",
                    JSON.stringify(response.payload)
                  );
              }

              _router.push(isNotNeedMfa ? "/patient/" : "/patient/mfa/");
              callback({ status: "success" });
            } catch (error) {
              console.error("something went wrong when logging in: ", error);
            }
          });
        }
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

export default function LoginPage() {
  const loginMessage = useSelector((state) => state.index.loginMessage);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    removeAuthCookies();
  });
  const dispatch = useDispatch();

  return (
    <>
      <FloatingMessage
        text={loginMessage}
        autoHideDuration={100000}
        onOpen={loginMessage !== null}
        sx={{
          top: {
            xs: "85px",
          },
        }}
        onClose={(openFloatingMsg) => {
          dispatch(setLoginMessage(null));
        }}
      />
      <LoginComponent {...loginProps} dispatch={dispatch} />
    </>
  );
}

LoginPage.getLayout = function getLayout(page) {
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
