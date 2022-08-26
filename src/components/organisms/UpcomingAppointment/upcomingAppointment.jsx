import { Box, Stack, Typography, Link } from "@mui/material";
import ProviderProfile from "../../molecules/ProviderProfile/providerProfile";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import styles from "./styles.module.scss";
import AppointmentButton from "../../atoms/AppointmentButton/appointmentButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export default function UpcomingAppointment() {
  return (
    <Box className={styles.upcomingAppointments}>
      <Stack spacing={{ xs: 2, lg: 3.5 }}>
        <Typography variant="h2" className={styles.title}>
          Upcoming appointments
        </Typography>
        <Box
          className={[styles.itemContainer, styles.calendarContainer].join(" ")}
        >
          <Typography variant="subtitle2" className={styles.date}>
            Saturday, Sep 21, 2022, AT 8:30 AM EST
          </Typography>
          <AppointmentButton icon={<CalendarTodayIcon />}>
            Add to calendar
          </AppointmentButton>
          <Typography variant="subtitle2" className={styles.purpose}>
            Purpose of Visit
          </Typography>
          <Typography variant="body2">Eye exam</Typography>
        </Box>
        <Box className={styles.itemContainer}>
          <ProviderProfile variant={"appointment"} showPosition phoneLink />
          <Box className={styles.getDirectionLink}>
            <DirectionsOutlinedIcon></DirectionsOutlinedIcon>
            <Link className={styles.getDirectionLinkText}>Get directions</Link>
          </Box>
          <Box className={styles.buttonContainer}>
            <AppointmentButton icon={<CancelOutlinedIcon />}>
              Cancel
            </AppointmentButton>
            <AppointmentButton icon={<CalendarTodayIcon />}>
              Reschedule
            </AppointmentButton>
          </Box>
        </Box>
        <Box className={styles.patientContainer}>
          <Typography variant="h3" className={styles.patientTitle}>
            Patient Information
          </Typography>
          <Typography variant="subtitle2" className={styles.patientName}>
            Name
          </Typography>
          <Typography variant="body2">Mary Jane Smith</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
