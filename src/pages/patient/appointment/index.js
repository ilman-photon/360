import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import FilterHeading from "../../../components/molecules/FilterHeading/filterHeading";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
const constants = require("../../../utils/constants");
export default function Appointment() {
  const isDesktop = useMediaQuery("(min-width: 992px)");

  return (
    <Box>
      <FilterHeading isDesktop={isDesktop} />
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
