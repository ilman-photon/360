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
        <Button
          sx={{
            mb: { xs: 1, md: 7 },
          }}
          onClick={OnBackToAppointments}
          aria-label={"Back"}
          aria-hidden={"false"}
        >
          <ArrowBackIosNewIcon
            sx={{
              width: 16,
              height: 16,
              p: "2px",
              fill: "black",
              opacity: 0.54,
              mr: "4px",
            }}
          />
          <Typography
            variant="bodyRegularSemiBold"
            sx={{ color: colors.teal, textTransform: "none" }}
          >
            Back to appointments
          </Typography>
        </Button>

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
    <AppointmentLayout currentActivePage={"Reschedule appointments"}>
      {page}
    </AppointmentLayout>
  );
};
