import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import FilterHeading from "../../../components/molecules/FilterHeading/filterHeading";
import { CircularProgress, Grid, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import FilterResult from "../../../components/molecules/FilterResult/filterResult";
import GMaps from "../../../components/organisms/Google/Maps/gMaps";
import { useLoadScript } from "@react-google-maps/api";

export async function getStaticProps() {
  return {
    props: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  };
}
export default function Appointment({ googleApiKey }) {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const [isFilterApplied, setFilterApplied] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleApiKey,
  });

  function onSearchProvider() {
    setFilterApplied(true);
  }

  return (
    <Box display="flex" flex={1}>
      <FilterHeading
        isDesktop={isDesktop}
        onSearchProvider={onSearchProvider}
      />
      {isDesktop && isFilterApplied ? (
        <Grid
          container
          sx={{
            display: "flex",
            flex: 1,
            pt: 17,
            maxHeight: "calc(100vh - 80px)",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              m: 3,
              overflow: "auto",
              height: "100%",
            }}
          >
            <FilterResult />
          </Box>
          <Box
            sx={{
              background: "#F4F4F4",
              display: "flex",
              flex: 1,
            }}
          >
            {/* Map */}
            {isLoaded ? <GMaps apiKey={googleApiKey} /> : <CircularProgress />}
          </Box>
        </Grid>
      ) : (
        <></>
      )}
    </Box>
  );
}

Appointment.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout currentActivePage={"appointment"}>
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
