import * as React from "react";
import GMaps from "../../../components/organisms/Google/Maps/gMaps";
import { useLoadScript } from "@react-google-maps/api";
import { CircularProgress } from "@mui/material";

export async function getStaticProps() {
  return {
    props: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  };
}

export default function CreateAppointmentPage({ googleApiKey }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleApiKey,
  });

  return isLoaded ? <GMaps apiKey={googleApiKey} /> : <CircularProgress />;
}
