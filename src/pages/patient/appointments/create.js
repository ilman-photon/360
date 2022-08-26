import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import FilterHeading from "../../../components/molecules/FilterHeading/filterHeading";
import { useMediaQuery, Box, Grid, CircularProgress } from "@mui/material";
import GMaps from "../../../components/organisms/Google/Maps/gMaps";
import { useLoadScript } from "@react-google-maps/api";

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
  const isDesktop = useMediaQuery("(min-width: 992px)");

  return (
    <Box display="flex" flex={1}>
      <FilterHeading isDesktop={isDesktop} />
      <Grid container sx={{ pt: 17 }} display="flex" flex={1}>
        <Grid item xs={6} display="flex" flex={1} flexDirection="column">
          Filter Result content here
        </Grid>
        <Grid item xs={6} display="flex" flex={1}>
          {isLoaded ? <GMaps apiKey={googleApiKey} /> : <CircularProgress />}
        </Grid>
      </Grid>
    </Box>
  );
}

CreateAppointmentPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout currentActivePage={"appointment"}>
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
