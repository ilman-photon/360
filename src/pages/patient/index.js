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
  setAppointmentSchedule,
  setFilterBy,
  setFilterData,
  setIsFilterApplied,
  setProviderListData,
} from "../../store/appointment";
import {
  parseInsuranceCarrier,
  parsePurposeOfVisit,
  getMondayOfCurrentWeek,
  getSaturdayOfCurrentWeek,
  parseProviderListData,
} from "../../utils/appointment";
import FilterResultHeading from "../../components/molecules/FilterResultHeading/filterResultHeading";
import { Box } from "@mui/system";
import ModalCancelScheduling from "../../components/organisms/ScheduleAppointment/ModalCancelScheduling/modalCancelScheduling";
import { fetchAllPayers } from "../../store/provider";
import { getCity } from "../../utils/getCity";
import CustomModal from "../../components/molecules/CustomModal/customModal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { colors } from "../../styles/theme";

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
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const [currentCity, setCurrentCity] = React.useState("");
  const [locationChange, setLocationChange] = React.useState(false);
  const [modalSuccessCancel, setModalSuccessCancel] = React.useState(false);

  const insuranceCarrierList = useSelector((state) => state.provider.list);
  const filterData = useSelector((state) => state.appointment.filterData);
  const userData = useSelector((state) => state.user.userData);
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const { coords, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });
  const router = useRouter();
  const dispatch = useDispatch();

  function onCalledGetAppointmentTypesAPI() {
    const api = new Api();
    api
      .getAppointmentTypes()
      .then(function (response) {
        const filterSuggestion = {
          purposeOfVisit: parsePurposeOfVisit(response?.entities || []),
          insuranceCarrier: parseInsuranceCarrier(insuranceCarrierList),
        };
        console.log(filterSuggestion);
        setFilterSuggestionData(filterSuggestion);
      })
      .catch(function () {
        //Handle error getsuggestion
      });
  }

  //Call API for submitFilter
  function onCallSubmitFilterAPI(requestData) {
    const selectedAppointmentType = filterSuggestionData?.purposeOfVisit?.find(
      (element) => element.title === requestData.purposeOfVisit
    );
    const startDateRequest = getMondayOfCurrentWeek(requestData.date);
    const endDateRequest = getSaturdayOfCurrentWeek(requestData.date);
    const postBody = {
      appointmentType: {
        code: selectedAppointmentType?.id || " ",
      },
      currentDate: startDateRequest,
      numDays: 6,
      days: ["ALL"],
      prefTime: "ALL",
    };
    const api = new Api();
    api
      .submitFilter(requestData.location, postBody)
      .then(function (response) {
        const parseProviderData = parseProviderListData(
          response,
          postBody.currentDate,
          endDateRequest
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

  //Call API for getAllPrescriptions
  function onCalledGetAllPrescriptionsAPI() {
    const api = new Api();
    api
      .getAllPrescriptions()
      .then(function (response) {
        const prescriptionDataTemp = {
          glasses:
            response.prescriptions?.glasses &&
            response.prescriptions?.glasses.length > 0
              ? [response.prescriptions?.glasses[0]]
              : [],
          contacts:
            response.prescriptions?.contacts &&
            response.prescriptions?.contacts.length > 0
              ? [response.prescriptions?.contacts[0]]
              : [],
          medications:
            response.prescriptions?.medications &&
            response.prescriptions?.medications.length > 0
              ? response.prescriptions?.medications
              : [],
        };
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
      .getAllAppointment()
      .then(function (response) {
        const today = new Date();
        const upcomingAppointments = [];
        const appointmentList = response.appointmentList || [];
        for (const appointment of appointmentList) {
          const visitDate = new Date(appointment.appointmentInfo.date);

          const daysAway = visitDate.getTime() - today.getTime();
          const totalDays = Math.ceil(daysAway / (1000 * 3600 * 24));
          if (totalDays >= 0) {
            upcomingAppointments.push(appointment);
          }
        }
        setAppointmentData(upcomingAppointments);
      })
      .catch(function () {
        //Handle error getAllAppointment
      });
  }

  function onViewPrescriptions(index) {
    router.push(`/patient/prescription`);
  }

  useEffect(() => {
    if (coords) {
      getCity(googleApiKey, coords, setCurrentCity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords, locationChange]);

  useEffect(() => {
    const cookies = new Cookies();
    if (!cookies.get("authorized")) {
      router.push("/patient/login");
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [setIsAuthenticated, router]);

  useEffect(() => {
    onCalledGetAllPrescriptionsAPI();
    onCalledGetAllAppointment();
    dispatch(fetchAllPayers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    console.log(isOpenCancel, "vs");
    setIsOpenCancel(true);
  };

  const handleClose = () => {
    setIsOpenCancel(false);
  };

  const handleCancelSchedule = () => {
    setIsOpenCancel(false);
    setModalSuccessCancel(true);
  };

  const onViewAppointment = () => {
    router.push("/patient/appointments");
  };

  const onClickReschedule = ({
    appointmentInfo,
    providerInfo = { address: {} },
  }) => {
    const dataFilter = {
      purposeOfVisit: appointmentInfo.appointmentType,
      date: new Date(appointmentInfo.date),
      insuranceCarrier: Array.isArray(appointmentInfo.insuranceCarrier)
        ? appointmentInfo.insuranceCarrier[0]
        : appointmentInfo.insuranceCarrier,
      location: providerInfo.address.city,
    };

    const appointmentSchedule = {
      providerInfo: providerInfo,
      patientInfo: userData,
      appointmentInfo: appointmentInfo,
    };
    dispatch(setFilterData(dataFilter));
    dispatch(setAppointmentSchedule(appointmentSchedule));

    router.push("/patient/appointments/1/reschedule");
  };

  return (
    <>
      {!isAuthenticated && (
        <Stack sx={{ width: "100%" }}>
          {isDesktop ? (
            <FilterHeading
              isDesktop={isDesktop}
              isTablet={false}
              onSearchProvider={onSearchProvider}
              isGeolocationEnabled={isGeolocationEnabled}
              filterData={filterData}
              purposeOfVisitData={filterSuggestionData.purposeOfVisit}
              insuranceCarrierData={filterSuggestionData.insuranceCarrier}
              title={"John, Welcome to your dashboard"}
              subtitle={"Search for a doctor"}
              isFixed={false}
              currentCity={currentCity}
              onChangeLocation={() => setLocationChange(true)}
            />
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
                purposeOfVisitData={filterSuggestionData.purposeOfVisit}
                insuranceCarrierData={filterSuggestionData.insuranceCarrier}
                filter={[]}
                onActivFilter={() => {
                  //this is intentional
                }}
                appliedFilter={[]}
                title={"John, Welcome to your dashboard"}
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
              flexDirection: !isDesktop ? "column-reverse" : "unset",
              "@media print": {
                paddingTop: "30px !important",
              },
            }}
          >
            <Grid item xs={5} sm={5} md={2}>
              <Prescriptions
                prescriptionData={prescriptionData}
                onViewPrescriptions={onViewPrescriptions}
              />
            </Grid>
            <Grid item xs={5} sm={5} md={3}>
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
      <AppointmentLayout currentActivePage={"dashboard"}>
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
