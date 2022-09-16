import { Box, Stack, Typography, Link } from "@mui/material";
import ProviderProfile from "../../molecules/ProviderProfile/providerProfile";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import styles from "./styles.module.scss";
import AppointmentButton from "../../atoms/AppointmentButton/appointmentButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import moment from "moment";
import "moment-timezone";

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
  const fullDate = () => {
    const date = new Date(data.appointmentInfo.date);
    if (!date) return "-";
    const momentDate = new moment(date);
    return momentDate
      .tz("America/New_York")
      .format("dddd, MMM DD, YYYY [at] h:mm z");
  };

  function minHours(numOfHours, date = new Date()) {
    date.setTime(date.getTime() - numOfHours * 60 * 60 * 1000);

    return date;
  }

  const getProviderLocation = () => {
    if (!data.providerInfo.location) return "#";
    return `https://www.google.com/maps/search/?api=1&query=${data.providerInfo.location.latitude},${data.providerInfo.location.longitude}`;
  };

  const visitDate = new Date(data.appointmentInfo.date);
  const isHideButtons = visitDate < minHours(4);

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
            {fullDate()}
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
          {!isHideButtons ? (
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
          ) : null}
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
