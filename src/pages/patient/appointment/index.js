import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import FilterHeading from "../../../components/molecules/FilterHeading/filterHeading";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  CircularProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
import GMaps from "../../../components/organisms/Google/Maps/gMaps";
import { useLoadScript } from "@react-google-maps/api";
import {
  editAppointmentScheduleData,
  setFilterData,
} from "../../../store/appointment";
import { useRouter } from "next/router";
import { parseSuggestionData } from "../../../utils/appointment";
import { Api } from "../../api/api";

export async function getStaticProps() {
  return {
    props: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  };
}

export default function Appointment({ googleApiKey }) {
  const isDesktop = useMediaQuery("(min-width: 834px)");
  const isTablet = useMediaQuery("(max-width: 1440px)");
  const [filterSuggestionData, setFilterSuggestionData] = useState({});
  const [providerListData, setProviderListData] = useState([]);
  const [isFilterApplied, setFilterApplied] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [dataFilter, setDataFilter] = React.useState([]);
  const [activeTabs, setActiveTabs] = useState(0);
  const [showMaps, setShowMaps] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const filterData = useSelector((state) => state.appointment.filterData);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleApiKey,
  });

  function onSearchProvider(data) {
    console.log({ data });
    dispatch(setFilterData(data));
    setFilterApplied(true);
    setDataFilter(data);
    onCallSubmitFilterAPI(data);
  }

  function onSwapButtonClicked() {
    setShowMaps(!showMaps);
  }

  const handleClose = () => {
    setOpen(false);
  };

  //Call API for getSuggestion
  function onCalledgetSugestionAPI() {
    const api = new Api();
    api
      .getSugestion()
      .then(function (response) {
        const filterSuggestion = {
          ...filterSuggestionData,
          ...parseSuggestionData(response),
        };
        setFilterSuggestionData(filterSuggestion);
      })
      .catch(function () {
        //Handle error getsuggestion
      });
  }

  //Call API for submitFilter
  function onCallSubmitFilterAPI(requestData) {
    const postBody = {
      location: {
        latitude: coords?.latitude,
        longitude: coords?.longitude,
      },
      locationName: requestData.location,
      date: requestData.date,
      appointmentType: requestData.purposeOfVisit,
      insuranceCarrier: requestData.insuranceCarrier,
      filterBy: [],
    };
    const api = new Api();
    api
      .submitFilter(postBody)
      .then(function (response) {
        console.log("list of prov", { response });
        setProviderListData(response?.listOfProvider);
      })
      .catch(function () {
        //Handle error getsuggestion
      });
  }

  function onNextScheduleClicked(type) {}

  function onPrevScheduleClicked(type) {}

  function onViewAllAvailability(providerData) {
    //TO DO: set data for view days schedule]
    setOpen(true);
  }

  const appointmentInfo = useSelector(
    (state) => state.appointment.appointmentSchedule.appointmentInfo
  );
  const providerInfo = useSelector(
    (state) => state.appointment.appointmentSchedule.providerInfo
  );

  const handleDayClicked = (appointmentDate, providerData) => {
    console.log("day clicked", appointmentDate, providerData);
    dispatch(
      editAppointmentScheduleData({
        key: "appointmentInfo",
        value: {
          ...appointmentInfo,
          date: appointmentDate,
        },
      })
    );

    dispatch(
      editAppointmentScheduleData({
        key: "providerInfo",
        value: {
          ...providerInfo,
          ...providerData,
        },
      })
    );

    router.push("/patient/schedule-appointment");
  };
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

  useEffect(() => {
    onCalledgetSugestionAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                isDayAvailableView={true}
                isShownPhoneAndRating={false}
                providerData={providerListData[0]}
              />
            </Box>
            <DayAvailability
              isDesktop={isDesktop}
              OnDayClicked={(e) => {
                handleDayClicked(e, providerListData[0]);
              }}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  function renderFilterResultTabletView() {
    if (isTablet) {
      return (
        <Stack flexDirection="row" width="100%">
          {!showMaps ? (
            <Box sx={{ width: "1128px", m: 3 }}>
              <FilterResult
                onClickViewAllAvailability={onViewAllAvailability}
                OnDayClicked={handleDayClicked}
                isDesktop={isDesktop}
                providerList={providerListData}
                onNextScheduleClicked={onNextScheduleClicked}
                onPrevScheduleClicked={onPrevScheduleClicked}
              />
            </Box>
          ) : (
            <Box
              sx={{
                background: "#F4F4F4",
                width: "100%",
                height: "calc(100vh - 215px)",
              }}
            >
              {isLoaded ? (
                <GMaps
                  apiKey={googleApiKey}
                  providerListData={providerListData}
                  OnTimeClicked={handleDayClicked}
                />
              ) : (
                <CircularProgress />
              )}
            </Box>
          )}
        </Stack>
      );
    } else {
      return (
        <Stack flexDirection="row" width="100%">
          <Box sx={{ width: "1128px", m: 3 }}>
            {dataFilter.location !== "Jakarta" ? (
              <FilterResult
                onClickViewAllAvailability={onViewAllAvailability}
                OnDayClicked={handleDayClicked}
                isDesktop={isDesktop}
                providerList={providerListData}
              />
            ) : (
              <EmptyResult
                message={
                  "No results found. Please try again with a different search criteria."
                }
              />
            )}
          </Box>
          <Box sx={{ background: "#F4F4F4", flex: 1 }}>
            {isLoaded ? (
              <GMaps
                apiKey={googleApiKey}
                providerListData={providerListData}
                OnTimeClicked={handleDayClicked}
              />
            ) : (
              <CircularProgress />
            )}
          </Box>
        </Stack>
      );
    }
  }

  function renderFilterResultDesktopView() {
    return (
      <Box
        display="flex"
        flex={1}
        sx={{
          paddingTop: "135px",
        }}
      >
        {renderFilterResultTabletView()}
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
          <FilterResultHeading
            isDesktop={isDesktop}
            filterData={dataFilter}
            onSearchProvider={onSearchProvider}
            purposeOfVisitData={filterSuggestionData.purposeOfVisit}
            insuranceCarrierData={filterSuggestionData.insuranceCarrier}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            height={"56px"}
            sx={{ backgroundColor: "#fff" }}
          >
            <ArrowBackIosIcon
              sx={{
                marginLeft: "22px",
                cursor: "pointer",
              }}
              onClick={() => {
                onPrevScheduleClicked("day");
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
                cursor: "pointer",
              }}
              onClick={() => {
                onNextScheduleClicked("day");
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
            providerList={providerListData}
            OnDayClicked={handleDayClicked}
            googleApiKey={googleApiKey}
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
    <Stack sx={{ width: "100%" }}>
      {!isFilterApplied || isDesktop ? (
        <>
          <FilterHeading
            isDesktop={isDesktop}
            isTablet={isTablet}
            onSearchProvider={onSearchProvider}
            onSwapButtonClicked={onSwapButtonClicked}
            isGeolocationEnabled={isGeolocationEnabled}
            filterData={filterData}
            purposeOfVisitData={filterSuggestionData.purposeOfVisit}
            insuranceCarrierData={filterSuggestionData.insuranceCarrier}
          />
        </>
      ) : (
        <></>
      )}
      {renderFilterResult()}
      {onRenderDialogView()}
    </Stack>
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
