import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import UpcomingAppointment from "../../../components/organisms/UpcomingAppointment/upcomingAppointment";
import { Box } from "@mui/material";
import PastAppointment from "../../../components/organisms/PastAppointment/pastAppointment";
import styles from "./styles.module.scss";

export default function Appointments() {
  return (
    <Box className={styles.container}>
      <UpcomingAppointment />
      <PastAppointment />
    </Box>
  );
}

Appointments.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout currentActivePage={"appointments"}>
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
