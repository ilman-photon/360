import AppointmentLayout from "../../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../../store/store";
import UpcomingAppointment from "../../../../components/organisms/UpcomingAppointment/upcomingAppointment";
import { Box, Typography, Stack } from "@mui/material";
import PastAppointment from "../../../../components/organisms/PastAppointment/pastAppointment";
import styles from "../styles.module.scss";
import AccountTitleHeading from "../../../../components/atoms/AccountTitleHeading/accountTitleHeading";
import { Api } from "../../../api/api";
import { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import DetailAppointment from "../../../../components/organisms/DetailAppointment/detailAppointment";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
export default function Appointments() {
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

Appointments.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout currentActivePage={"appointments"}>
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
