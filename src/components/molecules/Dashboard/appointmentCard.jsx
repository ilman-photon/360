import * as React from "react";
import AccountCard from "../AccountCard/accountCard";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import styles from "./styles.module.scss";
import {
  Box,
  Grid,
  Typography,
  Link,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { StyledButton } from "../../atoms/Button/button";
import { patientTypography, colors } from "../../../styles/theme";
import { parseAppointmentCardData } from "../../../utils/appointment";
import { fullDateFormat } from "../../../utils/dateFormatter";
import { useEffect } from "react";
import Image from "next/image";

export default function AppointmentCard({
  appointmentData = [],
  OnClickCancel = () => {
    // This is intentional
  },
  onViewAppointment = () => {
    // This is intentional
  },
}) {
  const [appointment, setAppointment] = React.useState({
    appointmentId: "",
    providerInfo: {},
    patientInfo: {},
    appointmentInfo: {},
  });
  const [appointmentCount, setAppointmentCount] = React.useState(0);

  useEffect(() => {
    setAppointment(parseAppointmentCardData(appointmentData));
    setAppointmentCount(appointmentData.length);
  }, [appointmentData, appointmentCount]);

  function getDirection(providerCordinate) {
    window.open(
      `https://maps.google.com?q=${providerCordinate.latitude},${providerCordinate.longitude}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function renderAddressUI() {
    const address = appointment.providerInfo?.address || {};
    return (
      <Box>
        {address.addressLine1 && (
          <Box>
            <Typography variant="bodyMedium" sx={{ color: colors.darkGreen }}>
              {address.addressLine1}
            </Typography>
          </Box>
        )}
        {address.addressLine2 && (
          <Box>
            <Typography variant="bodyMedium" sx={{ color: colors.darkGreen }}>
              {address.addressLine2}
            </Typography>
          </Box>
        )}
        {address.city && address.state && address.zipcode ? (
          <Box>
            <Typography variant="bodyMedium" sx={{ color: colors.darkGreen }}>
              {address.city}, {address.state}, {address.zipcode}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    );
  }

  function renderGetDirection() {
    const location = appointment.providerInfo?.location || {
      latitude: "",
      longitude: "",
    };
    return (
      location.latitude &&
      location.longitude && (
        <Box
          className={styles.flexDisplay}
          pt={3}
          onClick={() => {
            getDirection(location);
          }}
          sx={{ cursor: "pointer", alignItems: "center" }}
        >
          <Box pr={1}>
            <DirectionsOutlinedIcon sx={{ color: colors.darkGreen }} />
          </Box>
          <Typography
            variant="bodyLinkRegular"
            sx={{
              paddingBottom: "2px",
            }}
          >
            Get Direction
          </Typography>
        </Box>
      )
    );
  }
  function minHours(numOfHours, date = new Date()) {
    date.setTime(date.getTime() - numOfHours * 60 * 60 * 1000);

    return date;
  }

  function renderAppointmentUI() {
    if (appointment && appointment.appointmentId) {
      const today = new Date();
      const date = new Date(appointment.appointmentInfo.date);
      const isHideButtons = date < minHours(4);
      const daysAway = date.getTime() - today.getTime();
      const TotalDays = Math.ceil(daysAway / (1000 * 3600 * 24));
      return (
        <Box>
          <Grid container columns={5} spacing={2} p={3}>
            <Grid item xs={5} sm={5} md={3}>
              <Box className={styles.flexDisplay}>
                <Box pr={1}>
                  <CalendarTodayRoundedIcon sx={{ color: colors.darkGreen }} />
                </Box>
                <Typography variant="bodyLarge" sx={{ color: colors.darkBlue }}>
                  {fullDateFormat(appointment.appointmentInfo.date)}
                </Typography>
              </Box>
              <Box className={styles.flexDisplay} pt={3}>
                <Box pr={1}>
                  <LocationOnOutlinedIcon sx={{ color: colors.darkGreen }} />
                </Box>
                <Typography
                  variant="bodyLarge"
                  sx={{ color: colors.darkGreen }}
                >
                  {appointment.providerInfo?.name}
                </Typography>
              </Box>
              <Box pl={4.5}>
                <Typography
                  variant="bodyLarge"
                  sx={{ color: colors.darkGreen }}
                >
                  {appointment.providerInfo?.position}
                </Typography>
                {renderAddressUI()}
                <Typography variant="bodyLinkRegular">
                  {appointment.providerInfo?.phoneNumber}
                </Typography>
                {renderGetDirection()}
              </Box>
            </Grid>
            <Grid item xs={5} sm={5} md={2}>
              <Box className={styles.containerImage}>
                <Image
                  src={appointment.providerInfo.image}
                  style={{ borderRadius: "50%" }}
                  alt="Doctor Image"
                  width="90px"
                  height="90px"
                />
              </Box>
              <Box className={styles.flexDisplay}>
                <Box pr={1}>
                  <RemoveRedEyeOutlinedIcon sx={{ color: colors.darkGreen }} />
                </Box>
                <Typography variant="bodyLarge">Purpose of Visit</Typography>
              </Box>
              <Box pl={4.5}>
                <Typography variant="bodyMedium">
                  {appointment.appointmentInfo?.appointmentType}
                </Typography>
              </Box>
              <Box className={styles.flexDisplay} pt={3}>
                <Box pr={1}>
                  <PortraitOutlinedIcon sx={{ color: colors.darkGreen }} />
                </Box>
                <Typography variant="bodyLarge">Patient Information</Typography>
              </Box>
              <Box pl={4.5}>
                <Typography variant="bodyMedium">
                  {appointment.patientInfo?.name}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          {!isHideButtons ? (
            <Box
              className={styles.flexDisplay}
              p={4}
              sx={{
                paddingTop: "8px",
              }}
            >
              <StyledButton
                mode="secondary"
                size="small"
                onClick={OnClickCancel}
                sx={{
                  width: { xs: "100%", md: "fit-content" },
                  minWidth: "107px",
                  padding: { xs: 1 },
                  borderColor: "#003B4A",
                  height: "40px !important",
                  borderRadius: "5px",
                  marginRight: "15px",
                }}
              >
                <Stack direction="row" alignItems="center">
                  <CancelOutlinedIcon
                    sx={{
                      width: 18,
                      height: 18,
                      mr: 1,
                      color: "#003B4A",
                    }}
                  />
                  <span style={{ fontSize: 14, color: "#007E8F" }}>Cancel</span>
                </Stack>
              </StyledButton>
              <StyledButton
                mode="secondary"
                size="small"
                onClick={() => {
                  //
                }}
                sx={{
                  width: { xs: "100%", md: "fit-content" },
                  minWidth: "107px",
                  padding: { xs: 1 },
                  borderColor: "#003B4A",
                  height: "40px !important",
                  borderRadius: "5px",
                }}
              >
                <Stack direction="row" alignItems="center">
                  <CalendarTodayRoundedIcon
                    sx={{
                      width: 18,
                      height: 18,
                      mr: 1,
                      color: "#003B4A",
                    }}
                  />
                  <span style={{ fontSize: 14, color: "#007E8F" }}>
                    Reschedule
                  </span>
                </Stack>
              </StyledButton>
            </Box>
          ) : null}
          <Box className={styles.noPrescription}>
            {/* <Typography>Your appointment is 15 days away.</Typography> */}
            <Typography component="div" className={styles.normalText}>
              Your appointment is{" "}
              <Box className={styles.boldText} display="inline">
                {TotalDays} days
              </Box>{" "}
              away.
            </Typography>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box className={styles.noPrescription} sx={{ marginTop: "32px" }}>
          <Typography>{`There are no upcoming appointments`}</Typography>
        </Box>
      );
    }
  }

  return (
    <ThemeProvider theme={patientTypography}>
      <AccountCard
        className={styles.appointmentContainer}
        isAppoinment={true}
        titleIcon={
          <CalendarTodayOutlinedIcon
            sx={{ color: "#007787" }}
            aria-hidden="false"
          />
        }
        title={
          appointmentCount > 0
            ? `Appointments (${appointmentCount})`
            : `Appointment`
        }
        sx={{
          ".MuiCardContent-root": {
            p: 0,
            position: "relative",
          },
        }}
      >
        {renderAppointmentUI()}
        <Box
          className={[styles.flexDisplay, styles.viewPrescription]}
          sx={{
            borderTop: 1,
            borderColor: "divider",
            paddingTop: "20px",
          }}
        >
          <Link
            className={styles.viewPrescriptionText}
            sx={{ color: "#008294", fontFamily: "Inter" }}
            onClick={() => {
              onViewAppointment();
            }}
          >
            View Appointments
          </Link>
          <KeyboardArrowRightIcon />
        </Box>
      </AccountCard>
    </ThemeProvider>
  );
}
