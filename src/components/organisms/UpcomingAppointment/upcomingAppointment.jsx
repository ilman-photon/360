import { Box, Typography, useMediaQuery } from "@mui/material";
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

  const isDesktop = useMediaQuery("(min-width: 993px)");
  const visitDate = new Date(data.appointmentInfo.date);
  const appointment = data;
  let hideHour = 0;
  if (
    appointment.appointmentInfo.appointmentTypeCategory === "OPT" ||
    appointment.appointmentInfo.appointmentTypeCategory === "OPT/OPH"
  ) {
    hideHour = 4;
  }
  if (appointment.appointmentInfo.appointmentTypeCategory === "OPH") {
    hideHour = 24;
  }

  const isHideButtons = visitDate < addHours(hideHour);
  return (
    <Box
      className={styles.upcomingAppointmentsContainer}
      id={`appointment-${data.appointmentId}`}
    >
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
            ariaLabel={upcomingAppointmentDate(
              data.appointmentInfo.date,
              data.appointmentInfo.timeZone
            )}
            className={styles.date}
            variant="subtitle1"
            style={{
              fontWeight: "18px",
            }}
            sx={{
              fontWeight: "18px",
            }}
          >
            {upcomingAppointmentDate(
              data.appointmentInfo.date,
              data.appointmentInfo.timeZone
            )}
          </Typography>
          <Box className={styles.subTitleWrapper}>
            <Typography
              tabIndex={0}
              id={"puposeOfVisitHead"}
              ariaLabel={"Purpose of Visit"}
              variant={"body1"}
              className={styles.visitOfPurpose}
              style={{
                height: "24px",
                "font-family": "Museo Sans",
                "font-style": "normal",
                "font-weight": "600",
                "font-size": "16px",
                "line-height": "24px",
                /* identical to box height, or 144% */

                "letter-spacing": "0.0016em",
                color: "#003B4A",
              }}
              sx={{
                height: "24px",
                "font-family": "Museo Sans",
                "font-style": "normal",
                "font-weight": "600",
                "font-size": "16px",
                "line-height": "24px",
                /* identical to box height, or 144% */

                "letter-spacing": "0.0016em",
                color: "#003B4A",
              }}
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
                {isDesktop ? "Cancel" : "Cancel Appointment"}
              </AppointmentButton>
              <AppointmentButton
                icon={<CalendarTodayIcon />}
                testId={
                  TEST_ID.APPOINTMENTS_TEST_ID.rescheduleAppointmentButton
                }
                onClick={() => onRescheduleClicked(data)}
              >
                {isDesktop ? "Reschedule" : "Reschedule Appointment"}
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

export function NoAppointment({ onScheduleNewClicked }) {
  return (
    <Box>
      <Box className={styles.noAppointmentTitle}>
        <Typography variant="body2" className={styles.noAppointmentTitleText}>
          We currently do not have any upcoming appointments scheduled for this
          account.
        </Typography>
      </Box>
      <Box className={styles.noAppointmentButtonContainer}>
        {scheduleAppointmentButton(onScheduleNewClicked)}
      </Box>
    </Box>
  );
}

export default function UpcomingAppointment({
  data,
  onRescheduleClicked,
  onCancelClicked,
  onAddToCalendarClicked,
  onScheduleNewClicked,
  isMobile,
}) {
  const isHasValue = data.length !== 0;
  return (
    <Box className={styles.upcomingAppointment}>
      <Box className={styles.upcomingAppointmentHeader}>
        <Typography
          variant="h2"
          tabIndex={0}
          label={"Upcoming appointments"}
          className={styles.title}
          data-testid={TEST_ID.APPOINTMENTS_TEST_ID.upcomingAppointmentsHeader}
        >
          Upcoming appointments
        </Typography>
        {isHasValue ? scheduleAppointmentButton(onScheduleNewClicked) : null}
      </Box>

      {isHasValue ? (
        data.map((item, index) => {
          return (
            <UpcomingAppointmentCard
              data={item}
              key={index}
              onRescheduleClicked={onRescheduleClicked}
              onCancelClicked={onCancelClicked}
              onAddToCalendarClicked={onAddToCalendarClicked}
              onScheduleNewClicked={onScheduleNewClicked}
              isMobile={isMobile}
            />
          );
        })
      ) : (
        <NoAppointment
          onScheduleNewClicked={onScheduleNewClicked}
        ></NoAppointment>
      )}
    </Box>
  );
}
