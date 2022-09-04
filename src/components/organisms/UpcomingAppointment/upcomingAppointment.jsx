import { Box, Stack, Typography, Link } from "@mui/material";
import ProviderProfile from "../../molecules/ProviderProfile/providerProfile";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import styles from "./styles.module.scss";
import AppointmentButton from "../../atoms/AppointmentButton/appointmentButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import moment from "moment";

export default function UpcomingAppointment({ data }) {
  const date = data.appointmentInfo.date;
  const timezone = date.substring(date.length - 3);
  const momentDate = new moment(date);
  const formatedDate = momentDate.format("dddd, MMM DD, YYYY");
  const time = momentDate.format("h:mm A");
  const fullDate = `${formatedDate}, AT ${time} ${timezone}`;
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
            {fullDate}
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
              href={`https://www.google.com/maps/search/?api=1&query=${data.providerInfo.location.latitude},${data.providerInfo.location.longitude}`}
            >
              Get directions
            </Link>
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
          <Typography variant="body2">{data.patientInfo.name}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
