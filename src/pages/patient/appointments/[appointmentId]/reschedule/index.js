import { Box, Stack } from "@mui/material";
import AppointmentLayout from "../../../../../components/templates/appointmentLayout";
import styles from "./styles.module.scss";
import AppointmentLocation from "../../../../../components/organisms/ScheduleAppointment/appointmentLocation";
import AppointmentDetails from "../../../../../components/organisms/ScheduleAppointment/appointmentDetails";
import { Provider, useSelector } from "react-redux";
import { useRouter } from "next/router";
import store from "../../../../../store/store";
import React from "react";

export default function RescheduleAppointments() {
  const router = useRouter();

  const appointmentScheduleData = useSelector((state) => {
    return state.appointment.appointmentSchedule;
  });

  React.useEffect(() => {
    if (!appointmentScheduleData.providerInfo.providerId) {
      router.replace("/patient/appointment");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointmentScheduleData]);

  const OnEditClicked = () => {
    router.push("/patient/appointment?reschedule=true");
  };

  return (
    <div className={styles.reschedulePageContainer}>
      <div className={styles.backButtonWrapper}>
        <Box maxWidth={952} px={3} py={5} m="auto" backgroundColor="white">
          <Stack spacing={2}>
            <div className={styles.sectionTitle}>Reschedule Appointment</div>
            <AppointmentLocation
              providerData={appointmentScheduleData.providerInfo}
              OnEditClicked={OnEditClicked}
            />
            <AppointmentDetails
              appointmentData={appointmentScheduleData.appointmentInfo}
              OnEditClicked={OnEditClicked}
            />
          </Stack>
        </Box>
      </div>
    </div>
  );
}

RescheduleAppointments.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout
        currentActivePage={"Reschedule appointments"}
        backTitle="Back to appointments"
        onBackClicked={"/patient/appointments"}
      >
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
