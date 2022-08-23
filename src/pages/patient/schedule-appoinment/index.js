import AccountLayout from "../../../components/templates/accountLayout";
import ScheduleAppointment from "../../../components/organisms/ScheduleAppointment/scheduleAppointment";
import AppointmentLocation from "../../../components/organisms/ScheduleAppointment/appointmentLocation";
import AppointmentDetails from "../../../components/organisms/ScheduleAppointment/appointmentDetails";

import { Box, Grid, Tab, Tabs, useMediaQuery } from "@mui/material";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";

export default function ScheduleAppointmentPage() {
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <section>
      <Grid container spacing={isDesktop ? 2 : 0}>
        <Grid item xs={12} md={8}>
          <ScheduleAppointment />
        </Grid>
        <Grid item xs={12} md={4}>
          <AppointmentLocation />
          <AppointmentDetails />
        </Grid>
      </Grid>
    </section>
  );
}

ScheduleAppointmentPage.getLayout = function getLayout(page) {
  return <Provider store={store}>{page}</Provider>;
};
