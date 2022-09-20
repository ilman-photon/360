import AppointmentLayout from "../../../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../../../store/store";
import { Box } from "@mui/material";
import styles from "../../styles.module.scss";
import { Api } from "../../../../api/api";
import { useEffect, useState } from "react";
export default function AppointmentDetails() {
  const [appointments, setAppointments] = useState();

  const getAppointmentDetails = () => {
    const api = new Api();
    !appointments &&
      api
        .getAppointmentDetails()
        .then((response) => {
          setAppointments(response);
        })
        .catch(function () {
          //Handle error getAppointments
        });
  };

  useEffect(() => {
    getAppointmentDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointments]);

  return (
    <Box className={styles.container}>
      {/* {appointments && (
        <DetailAppointment data={parseAppointmentDetails(appointments)} />
      )} */}
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
