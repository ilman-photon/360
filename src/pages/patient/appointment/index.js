import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { Box } from "@mui/material";
import FilterHeading from "../../../components/molecules/FilterHeading/filterHeading";

export default function Appointment() {
  return (
    <Box>
      <FilterHeading />
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
