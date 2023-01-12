import { Box, Typography, Link } from "@mui/material";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Button from "@mui/material/Button";
import AppointmentInformation from "../../molecules/AppointmentInformation/appointmentInformation";
import { upcomingAppointmentDate } from "../../../utils/dateFormatter";
import { groupBy } from "../../../utils/appointmentsModel";

export function PastAppointmentCard({ data, threshold }) {
  const year = data[0];
  const [open, setOpen] = useState(false);
  const [openAlt, setOpenAlt] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickAlt = () => {
    setOpenAlt(!openAlt);
  };

  const expandCondition = threshold == 0 ? openAlt : open;
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
          <Typography
            tabIndex={0}
            aria-label={`Past appointment year of ${year}`}
            variant="h4"
            sx={{
              width: "46px",
              height: "24px",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "18px",
              lineWeight: "24px",
              color: "#003B4A",
            }}
          >
            {year}
          </Typography>
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
            aria-label={"Collapse"}
            ariaExpanded={expandCondition ? "true" : "false"}
          >
            {expandCondition ? (
              <ExpandLessIcon sx={{ color: "#000000" }} aria-expanded="true" />
            ) : (
              <ExpandMoreIcon sx={{ color: "#000000" }} aria-expanded="false" />
            )}
          </Button>
        </Box>
      </Box>
      <Collapse
        in={threshold == 0 ? openAlt : open}
        timeout="auto"
        unmountOnExit
      >
        {data[1].map((item, idx) => {
          return (
            <Box className={styles.pastAppointmentDetail} key={idx}>
              <Box className={styles.dateContainer}>
                <Typography
                  tabIndex={0}
                  ariaLabel={upcomingAppointmentDate(
                    item.appointmentInfo.date,
                    item.appointmentInfo.timeZone
                  )}
                  variant="subtitle2"
                  className={styles.date}
                >
                  {upcomingAppointmentDate(
                    item.appointmentInfo.date,
                    item.appointmentInfo.timeZone
                  )}
                </Typography>
                <Box className={styles.subTitleWrapper}>
                  <Typography
                    tabIndex={0}
                    ariaLabel={"Purpose of Visit:"}
                    variant="subtitle2"
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
                  >
                    Purpose of Visit:{" "}
                  </Typography>
                  <Typography
                    tabIndex={0}
                    ariaLabel={item.appointmentInfo.appointmentType}
                    variant="body2"
                    sx={{
                      width: "188px",
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
                    {item.appointmentInfo.appointmentType}
                  </Typography>
                </Box>
              </Box>
              <AppointmentInformation data={item}></AppointmentInformation>
              <Box className={styles.viewDetails}>
                <Link
                  tabIndex={0}
                  ariaLabel={"View appointment details"}
                  href={`/patient/appointments/detail-appointments/${item.appointmentId}`}
                  className={styles.link}
                >
                  View appointment details
                </Link>
              </Box>
            </Box>
          );
        })}
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
      appointments.length < 10
    ) {
      appointments.push(appointment);
    }
  }

  const groupAppointments = groupBy(appointments, (item) => item.year);
  const groupedAppointments = Array.from(groupAppointments);
  const isData =
    appointments.length == 0 ? (
      <Box className={styles.noAppointments}>
        <Typography
          tabIndex={0}
          ariaLabel={
            "We currently do not have any past appointments scheduled for this account."
          }
          className={styles.noPastAppointment}
          variant="body2"
        >
          We currently do not have any past appointments scheduled for this
          account.
        </Typography>
      </Box>
    ) : (
      groupedAppointments
        .map((item, index) => {
          return (
            <>
              <PastAppointmentCard data={item} threshold={index} key={index} />
            </>
          );
        })
        .filter((temp) => temp)
    );
  return (
    <Box className={styles.pastAppointment}>
      <Typography
        tabIndex={0}
        ariaLabel={"Past Appointments"}
        variant="h2"
        className={styles.title}
      >
        Past Appointments
      </Typography>
      {isData}
    </Box>
  );
}
