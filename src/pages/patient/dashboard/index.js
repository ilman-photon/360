import * as React from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { Grid } from "@mui/material";
import AppointmentCard from "../../../components/molecules/Dashboard/appointmentCard";
import Prescriptions from "../../../components/molecules/Dashboard/prescriptions";
import AppointmentLayout from "../../../components/templates/appointmentLayout";

export default function Dashboard() {
  return (
    <Grid container columns={5} spacing={3} p={3}>
      <Grid item xs={5} sm={5} md={2}>
        <Prescriptions />
      </Grid>
      <Grid item xs={5} sm={5} md={3}>
        <AppointmentCard />
      </Grid>
    </Grid>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout currentActivePage={"dashboard"}>
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
