import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import FilterHeading from "../../../components/molecules/FilterHeading/filterHeading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Box from "@mui/material/Box";
const constants = require("../../../utils/constants");
import React, { useEffect, useState } from "react";
import FilterResult from "../../../components/molecules/FilterResult/filterResult";
import CloseIcon from "@mui/icons-material/Close";
import { DayAvailability } from "../../../components/molecules/DayAvailability/DayAvailability";
import ProviderProfile from "../../../components/molecules/ProviderProfile/providerProfile";
import { useGeolocated } from "react-geolocated";
import EmptyResult from "../../../components/molecules/FilterResult/emptyResult";
export default function Appointment() {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const [isFilterApplied, setFilterApplied] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [dataFilter, setDataFilter] = React.useState([]);

  function onSearchProvider(data) {
    setFilterApplied(true);
    setDataFilter(data);
  }

  const handleClose = () => {
    setOpen(false);
  };

  function onViewAllAvailability() {
    //TO DO: set data for view days schedule
    setOpen(true);
  }

  const { coords, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    if (dataFilter.location === "Use my current location") {
      setDataFilter({
        ...dataFilter,
        location: "",
        coords: { lat: coords?.latitude, long: coords?.longitude },
      });
    }
    console.log(dataFilter, "data Filter");
  }, [dataFilter, coords]);

  function onRenderDialogView() {
    return (
      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{ height: "51px" }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ width: "265px" }}>
              <ProviderProfile
                variant={"viewschedule"}
                isDayAvailableView={true}
              />
            </Box>
            <DayAvailability />
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <Box>
      {!isFilterApplied || isDesktop ? (
        <FilterHeading
          isDesktop={isDesktop}
          onSearchProvider={onSearchProvider}
          isGeolocationEnabled={isGeolocationEnabled}
        />
      ) : (
        <></>
      )}
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
              {dataFilter.location !== "Jakarta" ? (
                <FilterResult
                  onClickViewAllAvailability={onViewAllAvailability}
                />
              ) : (
                <EmptyResult
                  message={
                    "No results found. Please try again with a different search criteria."
                  }
                />
              )}
            </Box>
            <Box sx={{ gridArea: "mapsSection", background: "#F4F4F4" }}>
              {/* Map */}
            </Box>
          </Box>
        </Box>
      ) : (
        <></>
      )}
      {onRenderDialogView()}
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
