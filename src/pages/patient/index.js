import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import { Provider, useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import AppointmentCard from "../../components/molecules/Dashboard/appointmentCard";
import Prescriptions from "../../components/molecules/Dashboard/prescriptions";
import FilterHeading from "../../components/molecules/FilterHeading/filterHeading";
import AppointmentLayout from "../../components/templates/appointmentLayout";
import store from "../../store/store";
import { useRouter } from "next/router";
import { Api } from "../api/api";
import {
  setFilterBy,
  setFilterData,
  setIsFilterApplied,
  setProviderListData,
} from "../../store/appointment";
import {
  getMondayOfCurrentWeek,
  getSaturdayOfCurrentWeek,
  parseInsuranceCarrier,
  parseProviderListData,
  parsePurposeOfVisit,
} from "../../utils/appointment";
import FilterResultHeading from "../../components/molecules/FilterResultHeading/filterResultHeading";
import { Box } from "@mui/system";
import ModalCancelScheduling from "../../components/organisms/ScheduleAppointment/ModalCancelScheduling/modalCancelScheduling";
import { fetchAllPayers } from "../../store/provider";
import { getCity } from "../../utils/getCity";
import CustomModal from "../../components/molecules/CustomModal/customModal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { colors } from "../../styles/theme";
import { appointmentParser } from "../../utils/appointmentsModel";
import { onCallGetPrescriptionData } from "../../utils/prescription";
import Navbar from "../../components/molecules/Navbar/Navbar";

export async function getStaticProps() {
  return {
    props: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  };
}
export default function HomePage({ googleApiKey }) {
  const [filterSuggestionData, setFilterSuggestionData] = React.useState({});
  const [prescriptionData, setPrescriptionData] = React.useState({});
  const [appointmentData, setAppointmentData] = React.useState({});
  const [isOpenCancel, setIsOpenCancel] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [currentCity, setCurrentCity] = React.useState("");
  const [modalSuccessCancel, setModalSuccessCancel] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [currentCoordinate, setCurrentCoordinate] = React.useState({
    lat: 0,
    lng: 0,
  });

  const insuranceCarrierList = useSelector((state) => state.provider.list);
  const filterData = useSelector((state) => state.appointment.filterData);

  const isDesktop = useMediaQuery("(min-width: 900px)");
  const { coords, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  const router = useRouter();
  const dispatch = useDispatch();

  const isAdmin = () => {
    return JSON.parse(localStorage.getItem("userData")).userType === "admin";
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

  //Call API for submitFilter
  async function onCallSubmitFilterAPI(requestData) {
    const selectedAppointmentType = filterSuggestionData?.purposeOfVisit?.find(
      (element) => element.title === requestData.purposeOfVisit
    );
    const startDateRequest = getMondayOfCurrentWeek(requestData.date);
    const endDateRequest = getSaturdayOfCurrentWeek(requestData.date);
    const postBody = {
      appointmentType: {
        code: selectedAppointmentType?.id || "ALL",
      },
      currentDate: startDateRequest,
      numDays: 6,
      days: ["ALL"],
      prefTime: "ALL",
    };
    const api = new Api();
    api
      .submitFilter(requestData.location, postBody)
      .then(async function (response) {
        const parseProviderData = await parseProviderListData(
          response,
          postBody.currentDate,
          endDateRequest,
          googleApiKey,
          currentCoordinate
        );
        if (response?.offices?.length > 0) {
          dispatch(setProviderListData(parseProviderData?.listOfProvider));
        } else {
          dispatch(setProviderListData([]));
        }
        dispatch(setFilterBy(parseProviderData.filterbyData));
      })
      .catch(function () {
        dispatch(setProviderListData([]));
      })
      .finally(function () {
        router.push("/patient/appointment");
      });
  }

  function onCalledAllPrescription() {
    onCallGetPrescriptionData()
      .then(function (response) {
        const prescriptionDataTemp = { ...response };
        if (response?.glasses?.length > 0) {
          prescriptionDataTemp["glasses"] = [response.glasses[0]];
        }
        if (response?.contacts?.length > 0) {
          prescriptionDataTemp["contacts"] = [response.contacts[0]];
        }
        setPrescriptionData(prescriptionDataTemp);
      })
      .catch(function () {
        //Handle error getAllPrescriptions
      });
  }

  //Call API for getAllAppointment
  function onCalledGetAllAppointment() {
    const api = new Api();
    api
      .getUpcomingAppointment()
      .then(function (response) {
        const upcomingAppointment = [];
        response.entities.map((data) => {
          const mappedData = appointmentParser(
            data,
            filterSuggestionData.purposeOfVisit
          );
          upcomingAppointment.push(mappedData);
        });
        setAppointmentData(upcomingAppointment);
      })
      .catch(function () {
        //Handle error getAllAppointment
      });
  }

  function onViewPrescriptions(index) {
    router.push(`/patient/prescription`);
  }

  const fetchCurrentLocation = () => {
    if (coords) {
      setCurrentCity("");
      getCity(googleApiKey, coords, setCurrentCity, setCurrentCoordinate);
    }
  };

  useEffect(() => {
    const cookies = new Cookies();
    if (!cookies.get("authorized")) {
      router.push("/patient/login");
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated, router]);

  useEffect(() => {
    if (isAuthenticated && !isAdmin()) {
      onCalledAllPrescription();
      dispatch(fetchAllPayers());
      // onCalledGetAllAppointment();
    }
    const userStorageData = JSON.parse(localStorage.getItem("userProfile"));
    if (userStorageData) {
      let firstName = userStorageData?.firstName || "";
      if (firstName) {
        firstName = firstName[0].toUpperCase() + firstName.substring(1);
        setUsername(firstName);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  useEffect(() => {
    onCalledGetAllAppointment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterSuggestionData.purposeOfVisit]);

  useEffect(() => {
    onCalledGetAppointmentTypesAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [insuranceCarrierList]);

  function onSearchProvider(data) {
    dispatch(setFilterData(data));
    dispatch(setIsFilterApplied(true));
    onCallSubmitFilterAPI(data);
  }

  const handleClickCancel = () => {
    setIsOpenCancel(true);
  };

  const handleClose = () => {
    setIsOpenCancel(false);
  };

  const handleCancelSchedule = (data) => {
    const api = new Api();
    const cancelReason =
      data.cancelSchedule === "other" ? data.cancelOther : data.cancelSchedule;
    const postBody = {
      current: {
        state: appointmentData[0].appointmentInfo.state.state,
        subState: appointmentData[0].appointmentInfo.state.subState.subState,
      },
      target: {
        state: "CANCELLED",
        subState: "NONE",
      },
      reason: cancelReason,
      code: 2,
    };
    api
      .cancelAppointment(appointmentData[0].appointmentId, postBody)
      .then(() => {
        onCalledGetAllAppointment();
        setModalSuccessCancel(true);
        setIsOpenCancel(false);
      })
      .catch(() => {
        setIsOpenCancel(false);
      });
  };

  const onViewAppointment = () => {
    router.push("/patient/appointments");
  };

  const onClickReschedule = ({
    appointmentInfo,
    providerInfo = { address: {} },
    appointmentId,
  }) => {
    if (appointmentId) {
      router.push(`/patient/appointments/${appointmentId}/reschedule`);
    }
  };

  return (
    <>
      {isAuthenticated && !isAdmin() && (
        <Stack sx={{ width: "100%" }}>
          {isDesktop ? (
            <>
              <Navbar isDashboard={true} />
              <FilterHeading
                isDesktop={isDesktop}
                isTablet={false}
                onSearchProvider={onSearchProvider}
                isGeolocationEnabled={isGeolocationEnabled}
                filterData={filterData}
                purposeOfVisitData={filterSuggestionData.purposeOfVisit}
                insuranceCarrierData={filterSuggestionData.insuranceCarrier}
                title={`${username}, Welcome to your dashboard`}
                subtitle={"Search for a doctor"}
                isFixed={false}
                currentCity={currentCity}
                onChangeLocation={fetchCurrentLocation}
                isDashboard={true}
              />
            </>
          ) : (
            <Box
              sx={{
                marginTop: "-25px",
                display: "flex",
                width: "100%",
                zIndex: "9",
              }}
            >
              <FilterResultHeading
                isDesktop={false}
                isTablet={false}
                filterData={filterData}
                onSearchProvider={onSearchProvider}
                isGeolocationEnabled={isGeolocationEnabled}
                purposeOfVisitData={filterSuggestionData.purposeOfVisit}
                insuranceCarrierData={filterSuggestionData.insuranceCarrier}
                filter={[]}
                onActivFilter={() => {
                  //this is intentional
                }}
                appliedFilter={[]}
                title={`${username}, Welcome to your dashboard`}
                subtitle={"Search for a doctor"}
              />
            </Box>
          )}
          <Grid
            container
            columns={5}
            spacing={3}
            p={3}
            sx={{
              paddingTop: isDesktop ? "30px" : "46px",
              paddingRight: { xs: "16px !important", md: "24px !important" },
              flexDirection: !isDesktop ? "column-reverse" : "unset",
              "@media print": {
                paddingTop: "30px !important",
              },
            }}
          >
            <Grid
              item
              xs={5}
              sm={5}
              md={2}
              sx={{
                paddingLeft: { xs: "16px !important", md: "24px !important" },
              }}
            >
              <Prescriptions
                prescriptionData={prescriptionData}
                onViewPrescriptions={onViewPrescriptions}
                renderRirstOnly={true}
              />
            </Grid>
            <Grid
              item
              xs={5}
              sm={5}
              md={3}
              sx={{
                paddingLeft: { xs: "16px !important", md: "24px !important" },
              }}
            >
              <AppointmentCard
                appointmentData={appointmentData}
                OnClickCancel={handleClickCancel}
                onViewAppointment={onViewAppointment}
                onClickReschedule={onClickReschedule}
              />
            </Grid>
          </Grid>
          <CustomModal
            buttonText={"OK"}
            onClickButton={() => {
              setModalSuccessCancel(false);
            }}
            open={modalSuccessCancel}
            sx={{
              "& .MuiPaper-root": {
                top: { xs: "0", md: "87px" },
                position: { xs: "relative", md: "absolute" },
              },
            }}
          >
            <Box display={"flex"} gap={"12px"}>
              <CheckCircleIcon sx={{ color: colors.green }}></CheckCircleIcon>
              <Typography sx={{ color: colors.darkGreen, fontSize: "22px" }}>
                You’ve successfully cancelled this appointment
              </Typography>
            </Box>
          </CustomModal>
          <ModalCancelScheduling
            isOpen={isOpenCancel}
            OnClickCancel={handleClose}
            OnCancelClicked={handleCancelSchedule}
          />
        </Stack>
      )}
    </>
  );
}

HomePage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout
        pageTitle="EyeCare Patient Portal - Dashboard"
        currentActivePage={"dashboard"}
      >
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
