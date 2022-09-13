import { Box, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
import moment from "moment";
import AppointmentButton from "../../atoms/AppointmentButton/appointmentButton";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { StyledButton } from "../../atoms/Button/button";

const constants = require("../../../utils/constants");

export function UpcomingAppointmentCard({
  data,
  onRescheduleClicked,
  onCancelClicked,
}) {
  const date = data.appointmentInfo.date;
  const timezone = date.substring(date.length - 3);
  const momentDate = new moment(date);
  const formatedDate = momentDate.format("dddd, MMM DD - h:mmA");
  const renderedDate = `${formatedDate} ${timezone}`;

  return (
    <Box className={styles.upcomingAppointmentsContainer}>
      <Box className={styles.upcomingAppointmentDetail}>
        <Typography className={styles.appointmentTitle} variant="h3">
          Eye Exam
        </Typography>
        <Box className={styles.imageContainer}>
          <Image
            src={data.providerInfo.image}
            className={styles.profilePhoto}
            layout="fill"
            alt="Doctor Image"
          ></Image>
        </Box>
        <Box className={styles.dateContainer}>
          <Typography className={styles.date} variant="subtitle1">
            {renderedDate}
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
        <Box className={styles.nameContainer}>
          <Typography className={styles.doctorName} variant="subtitle1">
            {data.providerInfo.name}
          </Typography>
          <Box className={styles.subTitleWrapper}>
            <Typography variant="subtitle1">Patient: </Typography>
            <Typography variant="body2">{data.patientInfo.name}</Typography>
          </Box>
        </Box>
        <Box className={styles.locationContainer}>
          <Box className={styles.locationWrapper}>
            <Typography className={styles.titleLocation} variant="subtitle2">
              Location
            </Typography>
            <Typography className={styles.bodyTitle} variant="body1">
              {data.providerInfo.position}
            </Typography>
            <Typography variant="body2">
              <>
                {data.providerInfo.address.addressLine1}
                <br />
                {data.providerInfo.address.addressLine2}
                <br />
                {data.providerInfo.address.city},{" "}
                {data.providerInfo.address.state},{" "}
                {data.providerInfo.address.zipcode}
              </>
            </Typography>
            <Link className={styles.link}>
              {formatPhoneNumber(data.providerInfo.phoneNumber)}
            </Link>
          </Box>
          <Box className={styles.insuranceWrapper}>
            <Typography className={styles.titleLocation} variant="subtitle2">
              Insurance
            </Typography>
            {data.appointmentInfo.insuranceCarrier.map((item, index) => {
              return (
                <Typography key={index} variant="body2">
                  {item}
                </Typography>
              );
            })}
          </Box>
        </Box>
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
