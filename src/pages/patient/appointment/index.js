import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import FilterHeading from "../../../components/molecules/FilterHeading/filterHeading";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  CircularProgress,
  Stack,
  useMediaQuery,
  DialogTitle,
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
  setActiveFilterBy,
  setFilterBy,
  setFilterData,
  setIsFilterApplied,
  setProviderListData,
} from "../../../store/appointment";
import { useRouter } from "next/router";
import {
  setRangeDateData,
  getProvideOverlay,
  parsePurposeOfVisit,
  parseInsuranceCarrier,
  getMondayOfCurrentWeek,
  parseProviderListData,
  getSaturdayOfCurrentWeek,
  updateProviderTimeSchedule,
} from "../../../utils/appointment";
import { Api } from "../../api/api";
import { TEST_ID } from "../../../utils/constants";
import { fetchAllPayers } from "../../../store/provider";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { useTranslation } from "next-i18next";
import { getCity } from "../../../utils/getCity";

export async function getStaticProps() {
  return {
    props: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  };
}

export default function Appointment({ googleApiKey }) {
  const isDesktop = useMediaQuery("(min-width: 760px)");
  const isMobile = useMediaQuery("(max-width: 759px)");
  const isTablet = useMediaQuery("(max-width: 1440px)");
  const [filterSuggestionData, setFilterSuggestionData] = useState({});
  const [open, setOpen] = React.useState(false);
  const [activeTabs, setActiveTabs] = useState(0);
  const [showMaps, setShowMaps] = useState(false);
  const [rangeDate, setRangeDate] = useState({ startDate: "", endDate: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [providerDataOverview, setProviderDataOverview] = useState({});
  const [tempProviderDataOverview, setTempProviderDataOverview] = useState({});
  const [rangeDateOverview, setRangeDateOverview] = useState({
    startDate: "",
    endDate: "",
  });
  const [tempRangeDateOverview, setTempRangeDateOverview] = useState({
    startDate: "",
    endDate: "",
  });
  const [isReschedule, setIsReschedule] = useState(false);
  const [currentCity, setCurrentCity] = useState("");
  const [currentCoordinate, setCurrentCoordinate] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [firstLoad, setFirstLoad] = useState(true);
  const [filterProviderData, setFilterProviderData] = useState([]);
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const [isActiveSearchProvider, setActiveSearchProvider] = useState(true);

  const router = useRouter();
  const dispatch = useDispatch();

  const insuranceCarrierList = useSelector((state) => state.provider.list);
  const filterData = useSelector((state) => state.appointment.filterData);
  const filterBy = useSelector((state) => state.appointment.filterBy);
  const activeFilterBy = useSelector(
    (state) => state.appointment.activeFilterBy
  );
  const providerListData = useSelector(
    (state) => state.appointment.providerListData
  );
  const { t, ready } = useTranslation("translation", {
    keyPrefix: "appointment",
  });
  useEffect(() => {
    if (providerListData && providerListData.length > 0) {
      setRangeDateOverview(setRangeDateData(providerListData));
      if (firstLoad) {
        setRangeDate(setRangeDateData(providerListData));
        setFirstLoad(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(providerListData)]);

  const googleConfiguration = {
    googleMapsApiKey: googleApiKey,
    libraries: ["places"],
  };
  const { isLoaded } = useLoadScript(googleConfiguration);

  const isFilterApplied = useSelector(
    (state) => state.appointment.isFilterApplied
  );

  useEffect(() => {
    if (!window.google) return;
    const distanceService = new google.maps.DistanceMatrixService();
    const orig = { lat: -6.8770974, lng: 107.6108204 };
    const dest = { lat: -6.8769662, lng: 107.6109715 };
    distanceService.getDistanceMatrix(
      {
        origins: [orig],
        destinations: [dest],
        travelMode: "DRIVING",
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      },
      (_response, status) => {
        if (status != "OK") {
          alert("Error was: " + status);
        }
      }
    );
  }, [isLoaded]);

  useEffect(() => {
    if (router.query.reschedule && filterSuggestionData?.purposeOfVisit) {
      setIsReschedule(true);
      onCallSubmitFilterAPI(filterData, [], false, true);
      dispatch(setIsFilterApplied(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, filterSuggestionData, filterData]);

  function onSearchProvider(data) {
    dispatch(setActiveFilterBy([]));
    dispatch(setFilterData(data));
    onCallSubmitFilterAPI(data, [], false, true);
    dispatch(setIsFilterApplied(true));

    /**
     * Bugs Fixing EPP-10368
     */
    setActiveSearchProvider(true);
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
    setProviderDataOverview(tempProviderDataOverview);
    setTempProviderDataOverview({});

    setRangeDateOverview(tempRangeDateOverview);
    setTempRangeDateOverview({});
  };

  function onCalledGetAppointmentTypesAPI() {
    const api = new Api();
    api
      .getAppointmentTypes()
      .then(function (response) {
        const filterSuggestion = {
          purposeOfVisit: parsePurposeOfVisit(response?.entities || []),
          insuranceCarrier: parseInsuranceCarrier(insuranceCarrierList),
        };
        setFilterSuggestionData(filterSuggestion);
      })
      .catch(function () {
        //Handle error getsuggestion
      });
  }

  function onFilterByApplied(filterApplied, providerData) {
    let filterResult = [];

    if (filterProviderData.length > 0) {
      filterResult = [...filterProviderData];
    } else {
      filterResult = [...providerData];
    }
    /**
     * Filter Data Based on Filter selected
     */
    filterResult = filterResult.filter((payload) => {
      const { filters } = payload;
      /** Check Availability */
      return filterApplied.find((ft) => {
        return (
          filters.gender === ft.name ||
          (ft.name === "Available Today" && filters.isAvailableToday) ||
          filters.language?.indexOf(ft.name) > -1
        );
      });
    });

    if (filterApplied.length == 0) {
      if (filterProviderData.length > 0) {
        dispatch(setProviderListData(filterProviderData));
      } else {
        onCallSubmitFilterAPI(filterData, [], false, true);
      }
      setFilterProviderData([]);
    } else {
      //Set default data
      if (filterProviderData.length == 0) {
        setFilterProviderData([...providerData]);
      }
      dispatch(setProviderListData(filterResult));
    }
  }

  function callbackSubmitFilterIsOverlay({
    parseProviderData,
    startDateRequest,
    endDateRequest,
    rangeDateFilter,
  }) {
    const providerOverview = getProvideOverlay(
      providerDataOverview,
      parseProviderData?.listOfProvider,
      startDateRequest,
      endDateRequest
    );

    setRangeDateOverview(rangeDateFilter);
    setProviderDataOverview(providerOverview);
  }

  function callbackSubmitFilterIsResetProvider({
    parseProviderData,
    startDateRequest,
    endDateRequest,
    rangeDateFilter,
  }) {
    const providerTemp = updateProviderTimeSchedule(
      providerListData,
      parseProviderData?.listOfProvider,
      startDateRequest,
      endDateRequest
    );
    dispatch(setProviderListData(providerTemp));
    setRangeDate(rangeDateFilter);
  }

  function callbackSubmitFilterElse({
    response,
    parseProviderData,
    rangeDateFilter,
  }) {
    if (response?.offices?.length > 0) {
      dispatch(setProviderListData(parseProviderData?.listOfProvider));
      setRangeDate(rangeDateFilter);
    } else {
      dispatch(setProviderListData([]));
      setRangeDate(rangeDateFilter);
    }
    dispatch(setFilterBy(parseProviderData.filterbyData));
  }

  function catchSubmitFilterIsOverlay({
    startDateRequest,
    endDateRequest,
    rangeDateFilter,
  }) {
    const providerOverview = getProvideOverlay(
      providerDataOverview,
      [],
      startDateRequest,
      endDateRequest
    );
    setRangeDateOverview(rangeDateFilter);
    setProviderDataOverview(providerOverview);
  }

  function catchSubmitFilterIsNotResetNotOverlay({
    startDateRequest,
    endDateRequest,
    rangeDateFilter,
  }) {
    const providerTemp = updateProviderTimeSchedule(
      providerListData,
      [],
      startDateRequest,
      endDateRequest
    );
    dispatch(setProviderListData(providerTemp));
    setRangeDate(rangeDateFilter);
  }

  function onCallSubmitFilterAPI(
    requestData,
    _activeFilterByData = [],
    isOverlay = false,
    isResetProvider = false
  ) {
    const startDateRequest = getMondayOfCurrentWeek(requestData.date);
    const endDateRequest = getSaturdayOfCurrentWeek(requestData.date);

    const rangeDateFilter = {
      startDate: startDateRequest,
      endDate: endDateRequest,
    };

    if (!isOverlay) {
      setIsLoading(true);
    }
    const api = new Api();
    api
      .submitFilter(requestData.location, requestData, filterSuggestionData)
      .then(async function (response) {
        const parseProviderData = await parseProviderListData(
          response,
          startDateRequest,
          endDateRequest,
          googleApiKey,
          currentCoordinate
        );

        if (isOverlay) {
          callbackSubmitFilterIsOverlay({
            parseProviderData,
            startDateRequest,
            endDateRequest,
            rangeDateFilter,
          });
        } else if (!isResetProvider && providerListData.length > 0) {
          callbackSubmitFilterIsResetProvider({
            parseProviderData,
            startDateRequest,
            endDateRequest,
            rangeDateFilter,
          });
        } else {
          callbackSubmitFilterElse({
            response,
            parseProviderData,
            rangeDateFilter,
          });
        }
      })
      .catch(function () {
        if (!isResetProvider) {
          if (isOverlay) {
            catchSubmitFilterIsOverlay({
              startDateRequest,
              endDateRequest,
              rangeDateFilter,
            });
          } else {
            catchSubmitFilterIsNotResetNotOverlay({
              startDateRequest,
              endDateRequest,
              rangeDateFilter,
            });
          }
        } else if (!isOverlay) {
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
      location: filterData.location,
      date: date,
      purposeOfVisit: filterData.purposeOfVisit,
      insuranceCarrier: filterData.insuranceCarrier,
    };
  }

  function onNextScheduleClicked(type, nextDate) {
    const postBody = getPostbodyForSubmit(nextDate);
    onCallSubmitFilterAPI(postBody, activeFilterBy, type === "overlay");
  }

  function onPrevScheduleClicked(type, prevDate) {
    const postBody = getPostbodyForSubmit(prevDate);
    onCallSubmitFilterAPI(postBody, activeFilterBy, type === "overlay");
  }

  function onViewAllAvailability(providerData) {
    setProviderDataOverview(providerData);
    setTempProviderDataOverview(providerData);
    setTempRangeDateOverview(rangeDateOverview);
    setOpen(true);
  }

  const appointmentInfo = useSelector(
    (state) => state.appointment.appointmentSchedule.appointmentInfo
  );

  const handleDayClicked = (appointment, providerData) => {
    const appointmentInfoObj = {
      ...appointmentInfo,
      appointmentType: appointment.appointmentCode,
      appointmentTypeCode: appointment.appointmentTypeCode,
      timeZone: appointment.timeZone,
      date: appointment.dateTime,
      providerTemplate: {
        _id: providerData.providerTemplateId,
      },
      office: providerData.office,
      provider: {
        _id: providerData.providerId,
      },
    };
    const providerInfoObj = providerData;

    dispatch(
      editAppointmentScheduleData({
        key: "appointmentInfo",
        value: appointmentInfoObj,
      })
    );

    dispatch(
      editAppointmentScheduleData({
        key: "providerInfo",
        value: providerInfoObj,
      })
    );

    router.push(
      `/patient/schedule-appointment${isReschedule ? "?reschedule=true" : ""}`
    );
  };

  const { coords, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  const fetchCurrentLocation = () => {
    if (coords) {
      setCurrentCity("");
      getCity(googleApiKey, coords, setCurrentCity);
    }
  };

  React.useEffect(() => {
    dispatch(fetchAllPayers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (coords) {
      setCurrentCoordinate(coords);
    }
  }, [coords]);

  useEffect(() => {
    onCalledGetAppointmentTypesAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [insuranceCarrierList]);

  function currentlocText() {
    return (
      <>
        , -or-{" "}
        <NearMeOutlinedIcon
          sx={{ width: "18px", height: "18px", color: "#008294" }}
        />{" "}
        <span style={{ color: "#008294", textDecoration: "underline" }}>
          Use my current location
        </span>{" "}
        to see results
      </>
    );
  }

  function getBaseEmptyText() {
    return (
      <>
        {t("baseText")}
        {!isGeolocationEnabled ? currentlocText() : null}
      </>
    );
  }

  function onRenderDialogView() {
    return (
      <div>
        <Dialog
          fullScreen={!isDesktop}
          open={open}
          data-testid={TEST_ID.APPOINTMENT_TEST_ID.DIALOG_VIEW_ALL.container}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          aria-label={open ? "View all availability dialog window open" : ""}
          role={"alertdialog"}
        >
          <Box sx={{ height: "51px" }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "#000000",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          {!isDesktop && (
            <DialogTitle
              aria-label="View all availability dialog window open"
              sx={{ padding: 0 }}
              aria-hidden={true}
            />
          )}
          <DialogContent>
            <Box sx={{ width: "290px" }}>
              <ProviderProfile
                isCard
                variant={"viewschedule"}
                isDayAvailableView={true}
                isShownPhoneAndRating={false}
                providerData={providerDataOverview}
                imageSize={"small"}
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
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        {!showMaps ? (
          <Box sx={{ width: !isTablet ? "1128px" : "unset", m: 3 }}>
            {providerListData.length > 0 ? (
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
                onActivFilter={handleActiveFilter}
                appliedFilter={activeFilterBy}
                onGetDirection={getDirection}
                currentDateIndex={currentDateIndex}
                setCurrentDateIndex={setCurrentDateIndex}
              />
            ) : (
              <EmptyResult
                isEmpty={isFilterApplied}
                message={
                  isFilterApplied ? t("noResultMessage") : getBaseEmptyText()
                }
              />
            )}
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
  }

  function renderCircularProgress() {
    return (
      <Stack
        flexDirection="row"
        marginTop={"60px"}
        sx={{ alignSelf: "center", width: isMobile ? "auto" : "100%" }}
      >
        <CircularProgress />
      </Stack>
    );
  }

  function getWidthStyle() {
    if (!isTablet) {
      if (providerListData.length == 0) {
        return "65%";
      } else {
        return "auto";
      }
    } else {
      return "unset";
    }
  }

  function renderMapsOrLoading() {
    return isLoaded ? (
      <GMaps
        apiKey={googleApiKey}
        providerListData={providerListData}
        OnTimeClicked={handleDayClicked}
      />
    ) : (
      <CircularProgress />
    );
  }

  const handleActiveFilter = (filter) => {
    dispatch(setActiveFilterBy([...filter]));
    onFilterByApplied(filter, providerListData);
  };

  function renderFilterResultTabletView() {
    if (isTablet) {
      return !isLoading ? (
        <Stack flexDirection="row" width="100%">
          {renderFilterResultTabletViewUI()}
        </Stack>
      ) : (
        renderCircularProgress()
      );
    } else {
      return !isLoading ? (
        <Stack
          flexDirection="row"
          width="100%"
          data-testid={"container-result"}
          sx={{
            height: "calc(100vh - 215px)",
            maxWidth: "1923px",
          }}
        >
          <Box sx={{ width: getWidthStyle(), m: 3 }}>
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
                onActivFilter={handleActiveFilter}
                appliedFilter={activeFilterBy}
                currentDateIndex={currentDateIndex}
                setCurrentDateIndex={setCurrentDateIndex}
              />
            ) : (
              <EmptyResult
                isEmpty={isFilterApplied}
                message={
                  isFilterApplied ? t("noResultMessage") : getBaseEmptyText()
                }
              />
            )}
          </Box>
          <Box sx={{ background: "#F4F4F4", flex: 1 }}>
            {renderMapsOrLoading()}
          </Box>
        </Stack>
      ) : (
        renderCircularProgress()
      );
    }
  }

  function renderFilterResultDesktopView() {
    return (
      <Box
        display="flex"
        flex={1}
        sx={{
          alignSelf: !isLoading ? "none" : "center",
          justifyContent: "center",
        }}
      >
        {renderFilterResultTabletView()}
      </Box>
    );
  }

  function renderFilterResultMobileView() {
    return !isLoading ? (
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
        onActivFilter={handleActiveFilter}
        appliedFilter={activeFilterBy}
        isLoading={isLoading}
        currentCity={currentCity}
        isGeolocationEnabled={isGeolocationEnabled}
        onChangeLocation={fetchCurrentLocation}
        currentDateIndex={currentDateIndex}
        setCurrentDateIndex={setCurrentDateIndex}
        isActiveSearchProvider={isActiveSearchProvider}
        setActiveSearchProvider={setActiveSearchProvider}
      />
    ) : (
      renderCircularProgress()
    );
  }

  function renderFilterResult() {
    if (isDesktop) {
      return renderFilterResultDesktopView();
    } else if (!isDesktop && isFilterApplied) {
      return renderFilterResultMobileView();
    }
  }

  return (
    <>
      {ready && (
        <Stack sx={{ width: "100%" }}>
          {!isFilterApplied || isDesktop ? (
            <>
              <FilterHeading
                isDesktop={!isMobile}
                isTablet={isTablet}
                onSearchProvider={onSearchProvider}
                onSwapButtonClicked={onSwapButtonClicked}
                isGeolocationEnabled={isGeolocationEnabled}
                filterData={filterData}
                purposeOfVisitData={filterSuggestionData.purposeOfVisit}
                insuranceCarrierData={filterSuggestionData.insuranceCarrier}
                isFixed={false}
                currentCity={currentCity}
                onChangeLocation={fetchCurrentLocation}
                googleApiKey={googleApiKey}
              />
            </>
          ) : (
            <></>
          )}
          {renderFilterResult()}
          {onRenderDialogView()}
        </Stack>
      )}
    </>
  );
}

Appointment.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout
        pageTitle="Schedule Appointment - Search Page"
        currentActivePage={"appointment"}
      >
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
