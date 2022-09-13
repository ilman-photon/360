import { Box, Button, Stack, Typography } from "@mui/material";
import { colors } from "../../../../../styles/theme";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AppointmentLayout from "../../../../../components/templates/appointmentLayout";
import styles from "./styles.module.scss";
import AppointmentLocation from "../../../../../components/organisms/ScheduleAppointment/appointmentLocation";
import AppointmentDetails from "../../../../../components/organisms/ScheduleAppointment/appointmentDetails";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function RescheduleAppointments() {
  const router = useRouter();

  const appointmentScheduleData = useSelector((state) => {
    return state.appointment.appointmentSchedule;
  });

  const OnBackToAppointments = () => {
    router.push("/patient/appointments");
  };

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
    <AppointmentLayout
      currentActivePage={"Reschedule appointments"}
      backTitle="Back to appointments"
    >
      {page}
    </AppointmentLayout>
  );
};
