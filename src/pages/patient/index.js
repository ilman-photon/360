import {
  Collapse,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import HealthRecordCard from "../../components/molecules/Dashboard/healthRecordCard";
import TestLabReportCard from "../../components/molecules/Dashboard/testLabReportCard";
import PayMyBillCard from "../../components/molecules/Dashboard/payMyBillCard";
import EducationMaterialCard from "../../components/molecules/Dashboard/educationMaterialCard";
import ModalConfirmation from "../../components/organisms/ScheduleAppointment/ScheduleConfirmation/modalConfirmation";
import { handleCreateAppointment } from "./schedule-appointment";
import { resetShareData, setShowToastMessage } from "../../store/share";
import { addToCalendar } from "../../utils/addToCalendar";
import { useLogin } from "../../utils/customHook";

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
    latitude: 0,
    longitude: 0,
  });
  const [postMessage, setPostMessage] = React.useState({
    isShow: false,
    message: "",
  });
  const [isOpen, setIsOpen] = React.useState(false);

  useLogin(false);

  const insuranceCarrierList = useSelector((state) => state.provider.list);
  const filterData = useSelector((state) => state.appointment.filterData);

  const isDesktop = useMediaQuery("(min-width: 900px)");
  const showNavBar = useMediaQuery("(min-width: 600px)");
  const { coords, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const isAdmin = () => {
    return JSON.parse(localStorage.getItem("userData"))?.userType === "admin";
  };

  function onCalledGetAppointmentTypesAPI() {
    const api = new Api();
    api
      .getAppointmentTypes(false)
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
    const startDateRequest = getMondayOfCurrentWeek(requestData.date);
    const endDateRequest = getSaturdayOfCurrentWeek(requestData.date);
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
    onCallGetPrescriptionData(false)
      .then(function (response) {
        const prescriptionDataTemp = { ...response };
        if (response?.glasses?.length > 0) {
          prescriptionDataTemp["glasses"] = response.glasses;
        }
        if (response?.contacts?.length > 0) {
          prescriptionDataTemp["contacts"] = response.contacts;
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
      .getUpcomingAppointment(false)
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

  function onViewPrescriptions() {
    router.push(`/patient/prescription`);
  }

  const fetchCurrentLocation = () => {
    if (coords) {
      setCurrentCity("");
      getCity(googleApiKey, coords, setCurrentCity);
    }
  };

  useEffect(() => {
    if (coords) {
      setCurrentCoordinate(coords);
    }
  }, [coords]);

  useEffect(() => {
    if (!cookies.get("authorized")) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIsAuthenticated, router]);

  useEffect(() => {
    if (isAuthenticated && !isAdmin()) {
      onCalledAllPrescription();
      dispatch(fetchAllPayers());
    }
    if (isAdmin()) {
      router.push("/patient/admin/locked-accounts");
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
    !isAdmin() && isAuthenticated && onCalledGetAllAppointment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterSuggestionData.purposeOfVisit]);

  useEffect(() => {
    !isAdmin() && onCalledGetAppointmentTypesAPI();
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

  const onClickReschedule = ({ appointmentId }) => {
    if (appointmentId) {
      router.push(`/patient/appointments/${appointmentId}/reschedule`);
    }
  };

  function onHandleSuccessShare({ message }) {
    setPostMessage({
      isShow: true,
      message,
    });

    //hide post message
    setTimeout(() => {
      setPostMessage({
        isShow: false,
        message: "",
      });
      dispatch(setShowToastMessage(false));
      dispatch(resetShareData());
    }, 5000);
  }

  function renderFirstColumn() {
    const prescriptionUI = (
      <Grid
        item
        xs={5}
        sm={5}
        lg={2}
        sx={{
          paddingLeft: { xs: "16px !important", md: "24px !important" },
        }}
      >
        <Prescriptions
          prescriptionData={prescriptionData}
          onViewPrescriptions={onViewPrescriptions}
          renderRirstOnly={true}
          onHandleSuccessShare={onHandleSuccessShare}
        />
      </Grid>
    );
    const appointmentUI = (
      <Grid
        item
        xs={5}
        sm={5}
        lg={3}
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
    );

    if (isDesktop) {
      return [prescriptionUI, appointmentUI];
    } else {
      return [appointmentUI, prescriptionUI];
    }
  }

  const appointmentScheduleData = useSelector((state) => {
    return state.appointment.appointmentSchedule;
  });

  const pendingAppointment =
    cookies.get("dashboardState", { path: "/patient" }) === "true" &&
    appointmentScheduleData?.appointmentInfo?.appointmentType;

  const showModalConfirmation =
    cookies.get("showModalConfirmation", { path: "/patient" }) === "true" &&
    appointmentScheduleData?.appointmentInfo?.appointmentType;

  useEffect(() => {
    if (pendingAppointment) {
      const userStorageData =
        JSON.parse(localStorage.getItem("userProfile")) || {};
      handleCreateAppointment(
        false,
        userStorageData.dob,
        "",
        appointmentScheduleData,
        () => {
          setIsOpen(true);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingAppointment]);

  useEffect(() => {
    if (showModalConfirmation) {
      setIsOpen(true);
      cookies.remove("showModalConfirmation", { path: "/patient" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModalConfirmation]);

  const scheduleConfirmPopup = () => {
    const userStorageData = JSON.parse(localStorage.getItem("userProfile"));
    return (
      <ModalConfirmation
        isLoggedIn={true}
        patientData={{
          name: userStorageData?.name,
          firstName: userStorageData?.firstName,
          lastName: userStorageData?.lastName,
          dob: userStorageData?.dob,
          phoneNumber: userStorageData?.mobile,
          email: userStorageData?.email,
          preferredCommunication: userStorageData?.preferredCommunication,
        }}
        providerData={appointmentScheduleData.providerInfo}
        appointmentData={appointmentScheduleData.appointmentInfo}
        isOpen={isOpen}
        OnSetIsOpen={() => {
          cookies.remove("dashboardState", { path: "/patient" });
          cookies.remove("showModalConfirmation", { path: "/patient" });
        }}
        OnOkClicked={() => {
          setIsOpen(false);
        }}
        isDesktop={isDesktop}
        onAddToCalendarClicked={addToCalendar}
      />
    );
  };

  function scollToTop() {
    if (window) {
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      {isAuthenticated && !isAdmin() && (
        <Stack sx={{ width: "100%" }}>
          {showNavBar && <Navbar isDashboard={true} />}
          {isDesktop ? (
            <>
              {postMessage?.isShow && scollToTop()}
              <Collapse in={postMessage?.isShow} unmountOnExit>
                <Box
                  sx={{
                    background: colors.foundationGreen,
                    p: "28px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      width: 22,
                      height: 22,
                      color: "white",
                      mr: "12px",
                    }}
                  />
                  <Typography
                    variant="libreH4"
                    sx={{ fontWeight: 500, color: "white" }}
                    role="alert"
                  >
                    {postMessage?.message}
                  </Typography>
                  <IconButton
                    sx={{
                      position: "absolute",
                      right: "28px",
                    }}
                    onClick={() => {}}
                    aria-label="Close option"
                  >
                    <CloseIcon sx={{ color: "white" }} />
                  </IconButton>
                </Box>
              </Collapse>
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
                zIndex: "2",
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
              maxWidth: "1553px",
              alignSelf: "center",
              paddingTop: isDesktop ? "30px" : "46px",
              paddingRight: { xs: "16px !important", md: "24px !important" },
              flexDirection: {
                lg: "unset",
              },
              "@media print": {
                paddingTop: "30px !important",
              },
            }}
          >
            {renderFirstColumn()}
            <Grid
              item
              xs={5}
              sm={5}
              md={2}
              sx={{
                paddingLeft: { xs: "16px !important", md: "24px !important" },
              }}
            >
              <PayMyBillCard />
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
              <EducationMaterialCard />
            </Grid>
            <Grid
              item
              xs={5}
              sm={5}
              md={2}
              sx={{
                paddingLeft: { xs: "16px !important", md: "24px !important" },
              }}
            >
              <HealthRecordCard onHandleSuccessShare={onHandleSuccessShare} />
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
              <TestLabReportCard />
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
            choosenAppointment={appointmentData[0]}
            appointmentData={appointmentData[0]?.appointmentInfo}
            onRescheduleClicked={onClickReschedule}
          />
          {scheduleConfirmPopup()}
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
