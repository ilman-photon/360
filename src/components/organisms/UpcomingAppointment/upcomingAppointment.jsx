import { Box, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import moment from "moment-timezone";
import AppointmentButton from "../../atoms/AppointmentButton/appointmentButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { StyledButton } from "../../atoms/Button/button";
import AppointmentInformation from "../../molecules/AppointmentInformation/appointmentInformation";

const constants = require("../../../utils/constants");

export function UpcomingAppointmentCard({
  data,
  onRescheduleClicked,
  onCancelClicked,
}) {
  const renderedDate = () => {
    const date = new Date(data.appointmentInfo.date);
    if (!date) return "-";
    const momentDate = new moment(date);
    return momentDate.tz("America/New_York").format("dddd, MMM DD - h:mmA z");
  };

  function minHours(numOfHours, date = new Date()) {
    date.setTime(date.getTime() - numOfHours * 60 * 60 * 1000);

    return date;
  }

  const visitDate = new Date(data.appointmentInfo.date);
  const isHideButtons = visitDate < minHours(4);
  return (
    <Box className={styles.upcomingAppointmentsContainer}>
      <Box className={styles.upcomingAppointmentDetail}>
        <Typography className={styles.appointmentTitle} variant="h3">
          Eye Exam
        </Typography>
        <Box className={styles.dateContainer}>
          <Typography className={styles.date} variant="subtitle1">
            {renderedDate()}
          </Typography>
          <Box className={styles.subTitleWrapper}>
            <Typography variant="subtitle1">Visit Purpose: </Typography>
            <Typography variant="body2">
              {data.appointmentInfo.appointmentType}
            </Typography>
          </Box>
        </Box>
        <Box className={styles.addToCalendarContainer}>
          <AppointmentButton icon={<CalendarTodayIcon />}>
            Add to calendar
          </AppointmentButton>
        </Box>

        <AppointmentInformation data={data}></AppointmentInformation>

        {!isHideButtons && (
          <Box className={styles.viewDetails}>
            <Box className={styles.buttonContainer}>
              <AppointmentButton
                icon={<CancelOutlinedIcon />}
                onClick={() => onCancelClicked(data)}
              >
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
        )}
      </Box>
    </Box>
  );
}

export function NoAppointment() {
  return (
    <Box>
      <Box className={styles.noAppointmentTitle}>
        <Typography variant="body2" className={styles.noAppointmentTitleText}>
          You have no upcoming appointments
        </Typography>
      </Box>
      <Box className={styles.noAppointmentButtonContainer}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          type="button"
          size={constants.SMALL}
          gradient={false}
        >
          Schedule Appointment Now
        </StyledButton>
      </Box>
    </Box>
  );
}

export default function UpcomingAppointment({
  data,
  onRescheduleClicked,
  onCancelClicked,
}) {
  const isHasValue = data.length !== 0;
  return (
    <Box className={styles.upcomingAppointment}>
      <Typography variant="h2" className={styles.title}>
        Upcoming Appointments
      </Typography>

      {isHasValue ? (
        data.map((item, index) => {
          return (
            <UpcomingAppointmentCard
              data={item}
              key={index}
              onRescheduleClicked={onRescheduleClicked}
              onCancelClicked={onCancelClicked}
            />
          );
        })
      ) : (
        <NoAppointment></NoAppointment>
      )}
    </Box>
  );
}
