import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import UpcomingAppointments from "../../../components/organisms/UpcomingAppointments/upcomingAppointments";
import { Box } from "@mui/material";

export default function Appointments() {
  return (
    <Box>
      <UpcomingAppointments></UpcomingAppointments>
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
