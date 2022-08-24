import * as React from "react";
import Cookies from "universal-cookie";
import MapsWrapper from "../../../components/organisms/Google/Maps/mapsWrapper";
import { logoutProps } from "../../../utils/authetication";

export async function getStaticProps() {
  return {
    props: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  };
}

export default function AppointmentsPage({ googleApiKey }) {
  return (
    <section>
      <MapsWrapper apiKey={googleApiKey} />
    </section>
  );
}
