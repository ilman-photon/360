import * as React from "react";
import Cookies from "universal-cookie";
import BaseHeader from "../../components/organisms/BaseHeader/baseHeader";
import { logoutProps } from "../../utils/authetication";

export async function getServerSideProps({ req }) {
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

export default function HomePage() {
  return <BaseHeader {...logoutProps} />;
}
