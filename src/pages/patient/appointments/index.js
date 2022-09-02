import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import UpcomingAppointment from "../../../components/organisms/UpcomingAppointment/upcomingAppointment";
import { Box } from "@mui/material";
import PastAppointment from "../../../components/organisms/PastAppointment/pastAppointment";
import styles from "./styles.module.scss";
import AccountTitleHeading from "../../../components/atoms/AccountTitleHeading/accountTitleHeading";
import { Api } from "../../api/api";
import { useEffect, useState } from "react";
export default function Appointments() {
  const [appointments, setAppointments] = useState();

  const getAppointments = () => {
    const api = new Api();
    !appointments &&
      api.getAllAppointment().then((response) => {
        setAppointments(response);
      });
  };

  useEffect(() => {
    getAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointments]);

  return (
    <Box className={styles.container}>
      <AccountTitleHeading
        title={"Appointments"}
        sx={{
          textAlign: "left",
          paddingLeft: "15vw",
        }}
      />
      {appointments && (
        <UpcomingAppointment data={appointments.appointmentList[0]} />
      )}
      {appointments && <PastAppointment data={appointments.appointmentList} />}
    </Box>
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
