import { Box, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
import moment from "moment";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import React from "react";
export function PastAppointmentCard({ data, threshold }) {
  const date = data.appointmentInfo.date;
  const timezone = date.substring(date.length - 3);
  const momentDate = new moment(date);
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
            onClick={() => (threshold == 1 ? handleClickAlt() : handleClick())}
          >
            <ExpandMoreIcon />
          </Button>
        </Box>
      </Box>
      <Collapse
        in={threshold == 1 ? openAlt : open}
        timeout="auto"
        unmountOnExit
      >
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
        <Box
          className={styles.dateContainer}
          sx={{ p: 2, backgroundColor: "white" }}
        ></Box>
      </Collapse>
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
              <PastAppointmentCard data={item} threshold={index} key={index} />
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
