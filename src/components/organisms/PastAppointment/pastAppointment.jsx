import { Box, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import moment from "moment";
import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import AppointmentInformation from "../../molecules/AppointmentInformation/appointmentInformation";
export function PastAppointmentCard({ data, threshold }) {
  const date = data.appointmentInfo.date;
  const timezone = date.substring(date.length - 3);
  const momentDate = new moment(new Date(date));
  const year = momentDate.format("YYYY");
  const formatedDate = momentDate.format("dddd, MMM DD - h:mmA");
  const fullDate = `${formatedDate} ${timezone}`;
  const [open, setOpen] = useState(false);
  const [openAlt, setOpenAlt] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickAlt = () => {
    setOpenAlt(!openAlt);
  };
  return (
    <Box className={styles.pastAppointmentsContainer}>
      <Box
        className={styles.pastAppointmentsContainer}
        sx={{
          display: "flex",
          backgroundColor: "#f4f4f4",
          height: "55px",
          border: "2px solid #f3f3f3 ",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: "16px",
          }}
        >
          <Typography variant="h4">{year}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => (threshold == 0 ? handleClickAlt() : handleClick())}
          >
            <ExpandMoreIcon />
          </Button>
        </Box>
      </Box>
      <Collapse
        in={threshold == 0 ? openAlt : open}
        timeout="auto"
        unmountOnExit
      >
        <Box className={styles.pastAppointmentDetail}>
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
          <AppointmentInformation data={data}></AppointmentInformation>
          <Box className={styles.viewDetails}>
            <Link
              href={`/patient/appointments/detail-appoiments/${data.appointmentId}`}
              className={styles.link}
            >
              View appointment details
            </Link>
          </Box>
        </Box>
        <Box
          className={styles.dateContainer}
          sx={{ p: 2, backgroundColor: "white" }}
        ></Box>
      </Collapse>
    </Box>
  );
}

export default function PastAppointment({ data }) {
  const appointments = [];
  for (const appointment of data) {
    if (
      new Date(appointment.appointmentInfo.date) < new Date() &&
      appointments.length < 11
    ) {
      appointments.push(appointment);
    }
  }
  const isData =
    appointments.length == 0 ? (
      <Box className={styles.subTitleWrapper}>
        <Typography variant="body2" className={styles.noPastAppointment}>
          You have no past appointments
        </Typography>
      </Box>
    ) : (
      appointments
        .map((item, index) => {
          return (
            <PastAppointmentCard data={item} threshold={index} key={index} />
          );
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
