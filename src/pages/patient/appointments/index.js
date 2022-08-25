import * as React from "react";
import Cookies from "universal-cookie";
import GMaps from "../../../components/organisms/Google/Maps/gMaps";
// import MapsWrapper from "../../../components/organisms/Google/Maps/mapsWrapper";
import { logoutProps } from "../../../utils/authetication";
import { useLoadScript } from "@react-google-maps/api";

export async function getStaticProps() {
  return {
    props: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  };
}

export default function AppointmentsPage({ googleApiKey }) {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: googleApiKey
  // });

  // return isLoaded ? <GMaps apiKey={googleApiKey} /> : null;
  return <GMaps apiKey={googleApiKey} />;
}
