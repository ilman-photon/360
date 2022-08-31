import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import FilterHeading from "../../../components/molecules/FilterHeading/filterHeading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
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
import FilterResultHeading from "../../../components/molecules/FilterResultHeading/filterResultHeading";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { colors } from "../../../styles/theme";
import FilterResultContainer from "../../../components/molecules/FilterResultContainer/filterResultContainer";
export default function Appointment() {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const [isFilterApplied, setFilterApplied] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [dataFilter, setDataFilter] = React.useState([]);
  const [activeTabs, setActiveTabs] = useState(0);

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
          fullScreen={!isDesktop}
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
                isShownPhoneAndRating={false}
              />
            </Box>
            <DayAvailability isDesktop={isDesktop} />
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  function renderFilterResultDesktopView() {
    return (
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
            {/* Handle the empty result after integrate services */}
            {dataFilter.location !== "Jakarta" ? (
              <FilterResult
                onClickViewAllAvailability={onViewAllAvailability}
                isDesktop={isDesktop}
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
    );
  }

  function renderFilterResultMobileView() {
    return (
      <Box
        sx={{
          marginTop: "-25px",
          height: "calc(100vh - 56px)",
          display: "flex",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            zIndex: "9",
          }}
        >
          <FilterResultHeading isDesktop={isDesktop} filterData={dataFilter} />
          <Stack
            direction={"row"}
            alignItems={"center"}
            height={"56px"}
            sx={{ backgroundColor: "#fff" }}
          >
            <ArrowBackIosIcon
              sx={{
                marginLeft: "22px",
              }}
            />
            <Box
              sx={{
                margin: "0 auto",
              }}
            >
              <CalendarTodayIcon
                sx={{
                  width: "15px",
                  height: "15px",
                  color: colors.darkGreen,
                }}
              />
              <Typography
                variant={"bodyRegular"}
                sx={{
                  color: "#303030",
                  marginLeft: "13px",
                  ["@media (max-width: 992px)"]: {
                    fontWeight: "600",
                  },
                }}
              >
                Wed, Sep 24
              </Typography>
            </Box>
            <ArrowForwardIosIcon
              sx={{
                marginRight: "15px",
              }}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            paddingTop: "160px",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <FilterResultContainer
            activeTabs={activeTabs}
            setActiveTabs={setActiveTabs}
            onClickViewAllAvailability={onViewAllAvailability}
            filterData={dataFilter}
          />
        </Box>
      </Box>
    );
  }

  function renderFilterResult() {
    if (isDesktop && isFilterApplied) {
      return renderFilterResultDesktopView();
    } else if (!isDesktop && isFilterApplied) {
      return renderFilterResultMobileView();
    }
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
      {renderFilterResult()}
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
