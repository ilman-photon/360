import AuthLayout from "../../components/templates/authLayout";
import Login from "../../components/organisms/Login/login";
import Cookies from "universal-cookie";
import { Api } from "../api/api";

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "set-cookie",
    `authorized=false; path=/; samesite=lax; httponly;`
  );
  return {
    props: {},
  };
}

const loginProps = {
  OnLoginClicked: function (postbody, router, callback) {
    const api = new Api();
    api
      .login(postbody)
      .then(function (response) {
        console.log(response);
        router.push("/");
        console.log("success");
        callback({ status: "success" });
      })
      .catch(function (err) {
        console.log(err);
        callback({
          status: "failed",
          message: {
            title: "",
            description: "Invalid Username or Password",
          },
        });
      });
  },
  OnGuestClicked: function () {},
  OnCreateAccountClicked: function (router) {
    router.push("/patient/create-account");
  },
  OnForgotPasswordClicked: function (router) {
    router.push("/patient/forgot-password");
  },
};

export default function AuthPage() {
  return <Login {...loginProps} />;
}

AuthPage.getLayout = function getLayout(page) {
  return <AuthLayout showMobileImage={true}>{page}</AuthLayout>;
};
