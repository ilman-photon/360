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
import GMaps from "../../../components/organisms/Google/Maps/gMaps";
import { useLoadScript } from "@react-google-maps/api";
import {
  editAppointmentScheduleData,
  setFilterData,
  setIsFilterApplied,
  setProviderListData,
} from "../../../store/appointment";
import { useRouter } from "next/router";
import {
  parseSuggestionData,
  setRangeDateData,
  getProvideOverlay,
} from "../../../utils/appointment";
import { Api } from "../../api/api";
import ModalConfirmation from "../../../components/organisms/ScheduleAppointment/ModalScheduling/modalConfirmation";
import Cookies from "universal-cookie";
import { formatAppointmentDate } from "../../../utils/dateFormatter";
import { TEST_ID } from "../../../utils/constants";

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
  const [open, setOpen] = React.useState(false);
  const [dataFilter, setDataFilter] = React.useState([]);
  const [activeTabs, setActiveTabs] = useState(0);
  const [showMaps, setShowMaps] = useState(false);
  const [rangeDate, setRangeDate] = useState({ startDate: "", endDate: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [filterBy, setFilterBy] = useState([]);
  const [providerDataOverview, setProviderDataOverview] = useState({});
  const [rangeDateOverview, setRangeDateOverview] = useState({
    startDate: "",
    endDate: "",
  });
  const [activeFilterBy, setActiveFilterBy] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const filterData = useSelector((state) => state.appointment.filterData);

  const providerListData = useSelector(
    (state) => state.appointment.providerListData
  );

  useEffect(() => {
    if (providerListData) {
      setRangeDate(setRangeDateData(providerListData));
      setRangeDateOverview(setRangeDateData(providerListData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providerListData]);

  const pendingAppointment =
    cookies.get("dashboardState", { path: "/patient" }) === "true";

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleApiKey,
  });

  const isFilterApplied = useSelector(
    (state) => state.appointment.isFilterApplied
  );

  function onSearchProvider(data) {
    dispatch(setFilterData(data));
    setDataFilter(data);
    onCallSubmitFilterAPI(data);
    dispatch(setIsFilterApplied(true));
  }

  function onSwapButtonClicked() {
    setShowMaps(!showMaps);
  }

  function getDirection(providerCordinate) {
    window.open(
      `https://maps.google.com?q=${providerCordinate.latitude},${providerCordinate.longitude}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const handleClose = () => {
    setOpen(false);
    setProviderDataOverview({});
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
  function onCallSubmitFilterAPI(
    requestData,
    activeFilterBy = [],
    isOverlay = false
  ) {
    const postBody = {
      location: {
        latitude: coords?.latitude,
        longitude: coords?.longitude,
      },
      locationName: requestData.location,
      date: requestData.date,
      appointmentType: requestData.purposeOfVisit,
      insuranceCarrier: requestData.insuranceCarrier,
      filterBy: activeFilterBy,
    };
    console.log(postBody);
    if (!isOverlay) {
      setIsLoading(true);
    }
    const api = new Api();
    api
      .submitFilter(postBody)
      .then(function (response) {
        if (isOverlay) {
          const providerOverview = getProvideOverlay(
            providerDataOverview.providerId,
            response.listOfProvider
          );
          setRangeDateOverview(setRangeDateData(response?.listOfProvider));
          setProviderDataOverview(providerOverview);
        } else {
          if (
            response?.listOfProvider.length > 0 &&
            postBody.locationName !== "Jakarta"
          ) {
            dispatch(setProviderListData(response?.listOfProvider));
          } else {
            dispatch(setProviderListData([]));
          }
          setFilterBy(response.filterbyData);
        }
      })
      .catch(function () {
        if (!isOverlay) {
          dispatch(setProviderListData([]));
        }
      })
      .finally(function () {
        if (!isOverlay) {
          setIsLoading(false);
        }
      });
  }

  function getPostbodyForSubmit(date) {
    return {
      locationName: dataFilter.location,
      date: date,
      appointmentType: dataFilter.purposeOfVisit,
      insuranceCarrier: dataFilter.insuranceCarrier,
    };
  }

  function onNextScheduleClicked(type, date) {
    console.log(type, " + ", date);
    const postBody = getPostbodyForSubmit(date);
    onCallSubmitFilterAPI(postBody, activeFilterBy, type === "overlay");
  }

  function onPrevScheduleClicked(type, date) {
    console.log(type, " + ", date);
    const postBody = getPostbodyForSubmit(date);
    onCallSubmitFilterAPI(postBody, activeFilterBy, type === "overlay");
  }

  function onViewAllAvailability(providerData) {
    setProviderDataOverview(providerData);
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
  }, [dataFilter, coords]);

  useEffect(() => {
    onCalledgetSugestionAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const isLogin = cookies.get("authorized", { path: "/patient" }) === "true";
    setIsLoggedIn(isLogin);
  }, []);

  function onRenderDialogView() {
    return (
      <div>
        <Dialog
          fullScreen={!isDesktop}
          open={open}
          data-testid={TEST_ID.APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.container}
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
            <Box sx={{ width: "290px" }}>
              <ProviderProfile
                variant={"viewschedule"}
                isDayAvailableView={true}
                isShownPhoneAndRating={false}
                providerData={providerDataOverview}
                imageSize={!isDesktop ? "small" : "large"}
              />
            </Box>
            <DayAvailability
              isDesktop={isDesktop}
              OnDayClicked={(e) => {
                handleDayClicked(e, providerDataOverview);
              }}
              scheduleData={providerDataOverview?.availability}
              rangeDate={rangeDateOverview}
              onNextScheduleClicked={onNextScheduleClicked}
              onPrevScheduleClicked={onPrevScheduleClicked}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  function renderFilterResultTabletViewUI() {
    if (providerListData.length > 0) {
      return (
        <Box
          sx={{
            width: "100%",
          }}
        >
          {!showMaps ? (
            <Box sx={{ width: !isTablet ? "1128px" : "unset", m: 3 }}>
              <FilterResult
                onClickViewAllAvailability={onViewAllAvailability}
                OnDayClicked={handleDayClicked}
                isDesktop={isDesktop}
                isTablet={isTablet}
                providerList={providerListData}
                onNextScheduleClicked={onNextScheduleClicked}
                onPrevScheduleClicked={onPrevScheduleClicked}
                rangeDate={rangeDate}
                filter={filterBy}
                onActivFilter={(filter) => {
                  setActiveFilterBy([...filter]);
                  onCallSubmitFilterAPI(dataFilter, filter);
                }}
                appliedFilter={activeFilterBy}
                onGetDirection={getDirection}
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
        </Box>
      );
    } else {
      return (
        <EmptyResult
          message={
            "No results found. Please try again with a different search criteria."
          }
        />
      );
    }
  }

  function renderFilterResultTabletView() {
    if (isTablet) {
      return !isLoading ? (
        <Stack flexDirection="row" width="100%">
          {renderFilterResultTabletViewUI()}
        </Stack>
      ) : (
        <CircularProgress />
      );
    } else {
      return !isLoading ? (
        <Stack flexDirection="row" width="100%">
          <Box sx={{ width: !isTablet ? "1128px" : "unset", m: 3 }}>
            {providerListData.length > 0 ? (
              <FilterResult
                onNextScheduleClicked={onNextScheduleClicked}
                onPrevScheduleClicked={onPrevScheduleClicked}
                onClickViewAllAvailability={onViewAllAvailability}
                OnDayClicked={handleDayClicked}
                isDesktop={isDesktop}
                isTablet={isTablet}
                providerList={providerListData}
                rangeDate={rangeDate}
                filter={filterBy}
                onActivFilter={(filter) => {
                  setActiveFilterBy([...filter]);
                  onCallSubmitFilterAPI(dataFilter, filter);
                }}
                appliedFilter={activeFilterBy}
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
      ) : (
        <CircularProgress />
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
      <FilterResult
        onClickViewAllAvailability={onViewAllAvailability}
        OnDayClicked={handleDayClicked}
        isDesktop={isDesktop}
        isTablet={isTablet}
        providerList={providerListData}
        rangeDate={rangeDate}
        onSearchProvider={onSearchProvider}
        filterData={filterData}
        purposeOfVisitData={filterSuggestionData.purposeOfVisit}
        insuranceCarrierData={filterSuggestionData.insuranceCarrier}
        activeTabs={activeTabs}
        setActiveTabs={setActiveTabs}
        googleApiKey={googleApiKey}
        onNextScheduleClicked={onNextScheduleClicked}
        onPrevScheduleClicked={onPrevScheduleClicked}
        filter={filterBy}
        onActivFilter={(filter) => {
          setActiveFilterBy([...filter]);
          onCallSubmitFilterAPI(dataFilter, filter);
        }}
        appliedFilter={activeFilterBy}
      />
    );
  }

  function renderFilterResult() {
    if (isDesktop && isFilterApplied) {
      return renderFilterResultDesktopView();
    } else if (!isDesktop && isFilterApplied) {
      return renderFilterResultMobileView();
    }
  }

  const appointmentScheduleData = useSelector((state) => {
    return state.appointment.appointmentSchedule;
  });

  const scheduleConfirmPopup = () => {
    return (
      <ModalConfirmation
        isLoggedIn={isLoggedIn}
        patientData={appointmentScheduleData.patientInfo}
        providerData={appointmentScheduleData.providerInfo}
        isOpen={isOpen}
        OnSetIsOpen={(idx) => {
          setIsOpen(idx);
          cookies.remove("dashboardState", { path: "/patient" });
        }}
        isDesktop={isDesktop}
      />
    );
  };

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
      {pendingAppointment && scheduleConfirmPopup()}
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
