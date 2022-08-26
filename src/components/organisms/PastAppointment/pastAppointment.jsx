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
    <Box>
      <Box>
        <Typography>2022</Typography>
      </Box>
      <Box>
        <Box>
          <Image
            src="/doctor.png"
            width={90}
            height={90}
            className={styles.profilePhoto}
            alt="Doctor Image"
          ></Image>
        </Box>
        <Box>
          <Typography>Tuesday, May 24 - 3:00PM PST</Typography>
          <Typography>Visit Purpose: </Typography>
          <Typography>Routine</Typography>
        </Box>
        <Box>
          <Typography>Dr. Sonha Nguyen</Typography>
          <Typography>Patient: </Typography>
          <Typography>Don John</Typography>
        </Box>
        <Box>
          <Box>
            <Typography>Location</Typography>
            <Typography>Scripps Eyecare</Typography>
            <Typography>5755 Burke Centre Parkway</Typography>
            <Typography>(703) 250-9000</Typography>
          </Box>
          <Box>
            <Typography>Insurance</Typography>
            <Typography>ECP Vision</Typography>
            <Typography>BlueCare Vision</Typography>
          </Box>
        </Box>
        <Box>
          <Link>View appointment details</Link>
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

      <PastAppointmentCard></PastAppointmentCard>
    </Box>
  );
}
