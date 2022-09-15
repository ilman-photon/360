import AppointmentLayout from "../../../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../../../store/store";
import { Box } from "@mui/material";
import styles from "../../styles.module.scss";
import { Api } from "../../../../api/api";
import { useEffect, useState } from "react";
import DetailAppointment from "../../../../../components/organisms/DetailAppointment/detailAppointment";

export default function AppointmentDetails() {
  const [appointments, setAppointments] = useState();

  const getAppointments = () => {
    const api = new Api();
    !appointments &&
      api
        .getAllAppointment()
        .then((response) => {
          setAppointments(response);
        })
        .catch(function () {
          //Handle error getAppointments
        });
  };

  useEffect(() => {
    getAppointments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointments]);

  return (
    <Box className={styles.container}>
      {appointments && (
        <DetailAppointment data={appointments.appointmentList[0]} />
      )}
    </Box>
  );
}

AppointmentDetails.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout
        currentActivePage={"appointments"}
        backTitle={"Back to Appointments"}
      >
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
