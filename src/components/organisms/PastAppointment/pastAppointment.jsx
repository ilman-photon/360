import { Box, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";

export function PastAppointmentCard({
  year,
  date,
  doctor,
  location,
  doctorPhone,
  patientName,
  purpose,
  insurances,
}) {
  return (
    <Box className={styles.pastAppointmentsContainer}>
      <Box className={styles.years}>
        <Typography variant="caption">2022</Typography>
      </Box>
      <Box className={styles.pastAppointmentDetail}>
        <Box className={styles.imageContainer}>
          <Image
            src="/doctor.png"
            width={100}
            height={100}
            className={styles.profilePhoto}
            alt="Doctor Image"
          ></Image>
        </Box>
        <Box className={styles.dateContainer}>
          <Typography variant="subtitle1" className={styles.date}>
            Tuesday, May 24 - 3:00PM PST
          </Typography>
          <Box className={styles.subTitleWrapper}>
            <Typography variant="subtitle1">Visit Purpose: </Typography>
            <Typography variant="body2">Routine</Typography>
          </Box>
        </Box>
        <Box className={styles.nameContainer}>
          <Typography variant="subtitle1" className={styles.doctorName}>
            Dr. Sonha Nguyen
          </Typography>
          <Box className={styles.subTitleWrapper}>
            <Typography variant="subtitle1">Patient: </Typography>
            <Typography variant="body2">Don John</Typography>
          </Box>
        </Box>
        <Box className={styles.locationContainer}>
          <Box className={styles.locationWrapper}>
            <Typography variant="subtitle2" className={styles.titleLocation}>
              Location
            </Typography>
            <Typography variant="body1" className={styles.bodyTitle}>
              Scripps Eyecare
            </Typography>
            <Typography variant="body2">5755 Burke Centre Parkway</Typography>
            <Link className={styles.link}>(703) 250-9000</Link>
          </Box>
          <Box className={styles.insuranceWrapper}>
            <Typography variant="subtitle2" className={styles.titleLocation}>
              Insurance
            </Typography>
            <Typography variant="body1" className={styles.bodyTitle}>
              ECP Vision
            </Typography>
            <Typography variant="body2">BlueCare Vision</Typography>
          </Box>
        </Box>
        <Box className={styles.viewDetails}>
          <Link className={styles.link}>View appointment details</Link>
        </Box>
      </Box>
    </Box>
  );
}

export default function PastAppointment() {
  return (
    <Box className={styles.pastAppointment}>
      <Typography variant="h2" className={styles.title}>
        Past Appointments
      </Typography>

      <PastAppointmentCard />
      <PastAppointmentCard />
      <PastAppointmentCard />
    </Box>
  );
}
