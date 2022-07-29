import * as React from "react";
import Cookies from "universal-cookie";
import BaseHeader from "../../components/organisms/BaseHeader/baseHeader";
import { Api } from "../api/api";

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req.headers.cookie);

  if (!cookies.get("authorized")) {
    return {
      redirect: {
        destination: "/patient/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const logoutProps = {
  OnLogoutClicked: function (router) {
    const api = new Api();

    const postbody = {
      username: "user1",
    };

    api
      .logout(postbody)
      .then(function (response) {
        console.log(response);
        const cookies = new Cookies();
        cookies.remove("authorized", { path: "/patient" });
        router.push("patient/login");
        console.log("log out success", response);
      })
      .catch(function (err) {
        console.log("log out failed", err);
      });
  },
};

export default function HomePage() {
  return <BaseHeader {...logoutProps} />;
}
