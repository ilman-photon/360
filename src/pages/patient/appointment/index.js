import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import FilterHeading from "../../../components/molecules/FilterHeading/filterHeading";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
const constants = require("../../../utils/constants");
import React, { useState } from "react";
import FilterResult from "../../../components/molecules/FilterResult/filterResult";

export default function Appointment() {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const [isFilterApplied, setFilterApplied] = useState(false);

  function onSearchProvider() {
    setFilterApplied(true);
  }

  return (
    <Box>
      <FilterHeading
        isDesktop={isDesktop}
        onSearchProvider={onSearchProvider}
      />
      {isDesktop && isFilterApplied ? (
        <Box
          sx={{
            paddingTop: "151px",
            marginLeft: "24px",
            width: "1778px",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "1128px 700px",
              gridTemplateRows: "auto",
              gridTemplateAreas: `"scheduleSection mapsSection"`,
            }}
          >
            <Box sx={{ gridArea: "scheduleSection", maxWidth: "1128px" }}>
              <FilterResult />
            </Box>
            <Box sx={{ gridArea: "mapsSection", background: "#F4F4F4" }}>
              {/* Map */}
            </Box>
          </Box>
        </Box>
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
