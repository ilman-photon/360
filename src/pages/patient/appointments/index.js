import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import UpcomingAppointment from "../../../components/organisms/UpcomingAppointment/upcomingAppointment";
import { Box } from "@mui/material";
import PastAppointment from "../../../components/organisms/PastAppointment/pastAppointment";
import styles from "./styles.module.scss";
import AccountTitleHeading from "../../../components/atoms/AccountTitleHeading/accountTitleHeading";
import { Api } from "../../api/api";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  setAppointmentSchedule,
  setFilterData,
} from "../../../store/appointment";
import { setUserAppointmentData } from "../../../store/user";
export default function Appointments() {
  const appointments = useSelector((state) => state.user.userAppointmentData);
  const userData = useSelector((state) => state.user.userData);

  const router = useRouter();
  const dispatch = useDispatch();

  const getAppointments = () => {
    const api = new Api();
    !appointments.length > 0 &&
      api
        .getAllAppointment()
        .then((response) => {
          dispatch(setUserAppointmentData(response.appointmentList));
          // setAppointments(response);
        })
        .catch(function () {
          //Handle error getAppointments
        });
  };

  useEffect(() => {
    console.log("apponzs", appointments.length);
    if (appointments.length === 0) {
      getAppointments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointments]);

  const onRescheduleClicked = ({
    appointmentInfo,
    providerInfo = { address: {} },
  }) => {
    const filterData = {
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
    dispatch(setFilterData(filterData));
    dispatch(setAppointmentSchedule(appointmentSchedule));

    router.push("/patient/appointments/1/reschedule");
  };

  return (
    <>
      <Box className={styles.container}>
        <AccountTitleHeading
          title={"Appointments"}
          sx={{
            textAlign: "left",
            paddingLeft: "15vw",
          }}
        />
        {appointments && (
          <UpcomingAppointment
            data={appointments[0]}
            onRescheduleClicked={onRescheduleClicked}
          />
        )}
        {appointments && <PastAppointment data={appointments} />}
      </Box>
    </>
  );
}

Appointments.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout currentActivePage={"appointments"}>
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
