import { Box, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
import moment from "moment";

export function PastAppointmentCard({ data }) {
  const date = data.appointmentInfo.date;
  const timezone = date.substring(date.length - 3);
  const momentDate = new moment(date);
  const year = momentDate.format("YYYY");
  const formatedDate = momentDate.format("dddd, MMM DD - h:mmA");
  const fullDate = `${formatedDate} ${timezone}`;

  return (
    <Box className={styles.pastAppointmentsContainer}>
      <Box className={styles.years}>
        <Typography variant="caption">{year}</Typography>
      </Box>
      <Box className={styles.pastAppointmentDetail}>
        <Box className={styles.imageContainer}>
          <Image
            src={data.providerInfo.image}
            layout="fill"
            className={styles.profilePhoto}
            alt="Doctor Image"
          ></Image>
        </Box>
        <Box className={styles.dateContainer}>
          <Typography variant="subtitle1" className={styles.date}>
            {fullDate}
          </Typography>
          <Box className={styles.subTitleWrapper}>
            <Typography variant="subtitle1">Visit Purpose: </Typography>
            <Typography variant="body2">
              {data.appointmentInfo.appointmentType}
            </Typography>
          </Box>
        </Box>
        <Box className={styles.nameContainer}>
          <Typography variant="subtitle1" className={styles.doctorName}>
            {data.providerInfo.name}
          </Typography>
          <Box className={styles.subTitleWrapper}>
            <Typography variant="subtitle1">Patient: </Typography>
            <Typography variant="body2">{data.patientInfo.name}</Typography>
          </Box>
        </Box>
        <Box className={styles.locationContainer}>
          <Box className={styles.locationWrapper}>
            <Typography variant="subtitle2" className={styles.titleLocation}>
              Location
            </Typography>
            <Typography variant="body1" className={styles.bodyTitle}>
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
            <Typography variant="subtitle2" className={styles.titleLocation}>
              Insurance
            </Typography>
            {data.appointmentInfo.insuranceCarrier.map((item, index) => {
              return (
                <Typography variant="body2" key={index}>
                  {item}
                </Typography>
              );
            })}
          </Box>
        </Box>
        <Box className={styles.viewDetails}>
          <Link
            href="/patient/appointments/detail-appoiments"
            className={styles.link}
          >
            View appointment details
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default function PastAppointment({ data }) {
  const isData =
    data.length == 0 ? (
      <Box className={styles.subTitleWrapper}>
        <Typography variant="body2">You Have no Past Appointment</Typography>
      </Box>
    ) : (
      data
        .map((item, index) => {
          if (index > 0) {
            return index < 11 ? (
              <PastAppointmentCard data={item} key={index} />
            ) : null;
          }
        })
        .filter((temp) => temp)
    );
  return (
    <Box className={styles.pastAppointment}>
      <Typography variant="h2" className={styles.title}>
        Past Appointments
      </Typography>

      {isData}
    </Box>
  );
}
