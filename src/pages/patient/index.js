import { Grid, Stack, useMediaQuery } from "@mui/material";
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
  setFilterData,
  setIsFilterApplied,
  setProviderListData,
} from "../../store/appointment";
import { parseSuggestionData } from "../../utils/appointment";
import FilterResultHeading from "../../components/molecules/FilterResultHeading/filterResultHeading";
import { Box } from "@mui/system";

export async function getServerSideProps({ req }) {
  const cookies = new Cookies(req.headers.cookie);

  if (!cookies.get("authorized")) {
    return {
      redirect: {
        destination: "/patient/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function HomePage() {
  const [filterSuggestionData, setFilterSuggestionData] = React.useState({});
  const [prescriptionData, setPrescriptionData] = React.useState({});
  const [appointmentData, setAppointmentData] = React.useState({});
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
    };
    const api = new Api();
    api
      .submitFilter(postBody)
      .then(function (response) {
        if (
          response?.listOfProvider.length > 0 &&
          postBody.locationName !== "Jakarta"
        ) {
          dispatch(setProviderListData(response?.listOfProvider));
        } else {
          dispatch(setProviderListData([]));
        }
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
        setPrescriptionData(response.prescriptions);
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
        setAppointmentData(response.appointmentList);
      })
      .catch(function () {
        //Handle error getAllAppointment
      });
  }

  function onViewPrescriptions() {
    //TO DO: will navigate to prescription view page
  }

  useEffect(() => {
    onCalledgetSugestionAPI();
    onCalledGetAllPrescriptionsAPI();
    onCalledGetAllAppointment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSearchProvider(data) {
    dispatch(setFilterData(data));
    dispatch(setIsFilterApplied(true));
    onCallSubmitFilterAPI(data);
  }

  const onViewAppointment = () => {
    router.push("/patient/appointments");
  };

  return (
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
        />
      ) : (
        <Box
          sx={{
            marginTop: "-25px",
            display: "flex",
            position: "fixed",
            width: "100%",
            zIndex: "9",
          }}
        >
          <FilterResultHeading
            isDesktop={false}
            isTablet={false}
            filterData={filterData}
            onSearchProvider={onSearchProvider}
            purposeOfVisitData={filterSuggestionData.purposeOfVisitData}
            insuranceCarrierData={filterSuggestionData.insuranceCarrierData}
            filter={[]}
            onActivFilter={() => {}}
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
          paddingTop: isDesktop ? "220px" : "185px",
          flexDirection: !isDesktop ? "column-reverse" : "unset",
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
            onViewAppointment={onViewAppointment}
          />
        </Grid>
      </Grid>
    </Stack>
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
