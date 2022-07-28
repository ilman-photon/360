import AuthLayout from "../../components/templates/authLayout";
import Login from "../../components/organisms/Login/login";
import { Api } from "../api/api";
import Cookies from "universal-cookie";

const loginProps = {
  OnLoginClicked: function (postbody, router) {
    const api = new Api();
    api.client
      .post("https://patientlogin.mocklab.io/user/login", postbody)
      .then(function (response) {
        console.log(response);
        if (response && response.status === 200) {
          const cookies = new Cookies();
          cookies.set("authorized", "true", { path: "/" });
          router.push("/");
          console.log("success");
        }
      })
      .catch(function () {
        console.log("failed");
      });
  },
  OnGuestClicked: function () {},
  OnCreateAccountClicked: function (router) {
    router.push("/patient/auth/create-account");
  },
  OnForgotPasswordClicked: function (router) {
    router.push("/forgot-password");
  },
};
export default function LoginPage() {
  return <Login {...loginProps} />;
}

LoginPage.getLayout = function getLayout(page) {
  return <AuthLayout showMobileImage={true}>{page}</AuthLayout>;
};
