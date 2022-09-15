import { Box, Stack, Typography, Link } from "@mui/material";
import ProviderProfile from "../../molecules/ProviderProfile/providerProfile";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import styles from "./styles.module.scss";
import AppointmentButton from "../../atoms/AppointmentButton/appointmentButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { formatAppointmentDate } from "../../../utils/dateFormatter";

export default function UpcomingAppointment({
  data = {
    appointmentInfo: {},
    providerInfo: {},
    patientInfo: {},
  },
  onRescheduleClicked = () => {
    // This is intentional
  },
}) {
  const getProviderLocation = () => {
    if (!data.providerInfo.location) return "#";
    return `https://www.google.com/maps/search/?api=1&query=${data.providerInfo.location.latitude},${data.providerInfo.location.longitude}`;
  };
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
            {formatAppointmentDate(data.appointmentInfo.date)}
          </Typography>
          <AppointmentButton icon={<CalendarTodayIcon />}>
            Add to calendar
          </AppointmentButton>
          <Typography variant="subtitle2" className={styles.purpose}>
            Purpose of Visit
          </Typography>
          <Typography variant="body2">
            {data.appointmentInfo.appointmentType}
          </Typography>
        </Box>
        <Box className={styles.itemContainer}>
          <ProviderProfile
            variant={"appointment"}
            showPosition
            phoneLink
            isDayAvailableView={true}
            providerData={data.providerInfo}
          />
          <Box className={styles.getDirectionLink}>
            <DirectionsOutlinedIcon></DirectionsOutlinedIcon>
            <Link
              className={styles.getDirectionLinkText}
              href={getProviderLocation()}
              target="_blank"
            >
              Get directions
            </Link>
          </Box>
          <Box className={styles.buttonContainer}>
            <AppointmentButton icon={<CancelOutlinedIcon />}>
              Cancel
            </AppointmentButton>
            <AppointmentButton
              icon={<CalendarTodayIcon />}
              onClick={() => onRescheduleClicked(data)}
            >
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
          <Typography variant="body2">{data.patientInfo.name}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
