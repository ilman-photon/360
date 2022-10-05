import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import AppointmentButton from "../../atoms/AppointmentButton/appointmentButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { TEST_ID } from "../../../utils/constants";
import { StyledButton } from "../../atoms/Button/button";
import AppointmentInformation from "../../molecules/AppointmentInformation/appointmentInformation";
import { upcomingAppointmentDate } from "../../../utils/dateFormatter";

const constants = require("../../../utils/constants");

export function UpcomingAppointmentCard({
  data,
  onRescheduleClicked,
  onCancelClicked,
  onAddToCalendarClicked,
}) {
  function addHours(numOfHours, date = new Date()) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

    return date;
  }

  const visitDate = new Date(data.appointmentInfo.date);
  let hideHour = 0;
  if (data.appointmentInfo.appointmentType === "Eye Exam") {
    hideHour = 4;
  }
  if (data.appointmentInfo.appointmentType === "Comprehensive") {
    hideHour = 24;
  }

  const isHideButtons = visitDate < addHours(hideHour);
  return (
    <Box className={styles.upcomingAppointmentsContainer}>
      <Box className={styles.upcomingAppointmentDetail}>
        <Typography
          tabIndex={0}
          ariaLabel={"Eye Exam"}
          className={styles.appointmentTitle}
          variant="h3"
        >
          {data.appointmentInfo.appointmentType}
        </Typography>
        <Box className={styles.dateContainer}>
          <Typography
            tabIndex={0}
            ariaLabel={upcomingAppointmentDate(data.appointmentInfo.date)}
            className={styles.date}
            variant="subtitle1"
          >
            {upcomingAppointmentDate(data.appointmentInfo.date)}
          </Typography>
          <Box className={styles.subTitleWrapper}>
            <Typography
              tabIndex={0}
              ariaLabel={"Purpose of Visit"}
              variant="subtitle1"
            >
              Purpose of Visit:{" "}
            </Typography>
            <Typography
              tabIndex={0}
              ariaLabel={data.appointmentInfo.appointmentType}
              variant="body2"
            >
              {data.appointmentInfo.appointmentType}
            </Typography>
          </Box>
        </Box>
        <Box className={styles.addToCalendarContainer}>
          <AppointmentButton
            icon={<CalendarTodayIcon />}
            onClick={() =>
              onAddToCalendarClicked({
                name: "ECP Appointment",
                description: `Patient: ${data.patientInfo.name}, Purpose of Visit: ${data.appointmentInfo.appointmentType}`,
                date: data.appointmentInfo.date,
                location:
                  data.providerInfo.address.addressLine1 +
                  ` ` +
                  data.providerInfo.address.addressLine2 +
                  ` ` +
                  data.providerInfo.address.city +
                  ` ` +
                  data.providerInfo.address.state +
                  ` ` +
                  data.providerInfo.address.zipcode,
              })
            }
          >
            Add to calendar
          </AppointmentButton>
        </Box>

        <AppointmentInformation data={data}></AppointmentInformation>

        {!isHideButtons && (
          <Box className={styles.viewDetails}>
            <Box className={styles.buttonContainer}>
              <AppointmentButton
                testId={TEST_ID.APPOINTMENTS_TEST_ID.cancelAppointmentButton}
                icon={<CancelOutlinedIcon />}
                onClick={() => onCancelClicked(data)}
              >
                Cancel
              </AppointmentButton>
              <AppointmentButton
                icon={<CalendarTodayIcon />}
                testId={
                  TEST_ID.APPOINTMENTS_TEST_ID.rescheduleAppointmentButton
                }
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

export function scheduleAppointmentButton(onScheduleClicked) {
  return (
    <StyledButton
      theme={constants.PATIENT}
      mode={constants.PRIMARY}
      type="button"
      size={constants.SMALL}
      className={styles.scheduleButton}
      gradient={false}
      onClick={onScheduleClicked}
    >
      Schedule New Appointment
    </StyledButton>
  );
}

export function NoAppointment({ onRescheduleClicked }) {
  return (
    <Box>
      <Box className={styles.noAppointmentTitle}>
        <Typography variant="body2" className={styles.noAppointmentTitleText}>
          You have no upcoming appointments
        </Typography>
      </Box>
      <Box className={styles.noAppointmentButtonContainer}>
        {scheduleAppointmentButton(onRescheduleClicked)}
      </Box>
    </Box>
  );
}

export default function UpcomingAppointment({
  data,
  onRescheduleClicked,
  onCancelClicked,
  onAddToCalendarClicked,
}) {
  const appointments = [];
  for (const appointment of data) {
    if (new Date(appointment.appointmentInfo.date) > new Date()) {
      appointments.push(appointment);
    }
  }
  const isHasValue = appointments.length !== 0;
  return (
    <Box className={styles.upcomingAppointment}>
      <Box className={styles.upcomingAppointmentHeader}>
        <Typography
          variant="h2"
          tabIndex={0}
          label={"Upcoming appointments heading"}
          className={styles.title}
          data-testid={TEST_ID.APPOINTMENTS_TEST_ID.upcomingAppointmentsHeader}
        >
          Upcoming Appointments
        </Typography>
        {isHasValue ? scheduleAppointmentButton(onRescheduleClicked) : null}
      </Box>

      {isHasValue ? (
        appointments.map((item, index) => {
          const isUpcoming = new Date(item.appointmentInfo.date) > new Date();
          return isUpcoming ? (
            <UpcomingAppointmentCard
              data={item}
              key={index}
              onRescheduleClicked={onRescheduleClicked}
              onCancelClicked={onCancelClicked}
              onAddToCalendarClicked={onAddToCalendarClicked}
            />
          ) : null;
        })
      ) : (
        <NoAppointment
          onRescheduleClicked={onRescheduleClicked}
        ></NoAppointment>
      )}
    </Box>
  );
}
