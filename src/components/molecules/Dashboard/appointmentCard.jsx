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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
import { getLinkAria } from "../../../utils/viewUtil";
import ImageFallback from "../../atoms/Image/image";
import { getProviderLocation } from "../AppointmentInformation/appointmentInformation";
import CommonCard from "./commonCard";

export default function AppointmentCard({
  appointmentData = [],
  OnClickCancel = () => {
    // This is intentional
  },
  onViewAppointment = () => {
    // This is intentional
  },
  onClickReschedule = () => {
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

  function renderAddressUI() {
    const address = appointment.providerInfo?.address || {};
    return (
      <Box tabIndex={0}>
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
        {address.city || address.state || address.zip ? (
          <Box>
            <Typography variant="bodyMedium" sx={{ color: colors.darkGreen }}>
              {address.city || ""}, {address.state || ""}, {address.zip || ""}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    );
  }

  function renderGetDirection() {
    const address = appointment.providerInfo?.address;
    return (
      address && (
        <Box
          className={styles.flexDisplay}
          pt={3}
          sx={{ alignItems: "center" }}
        >
          <Box pr={1}>
            <DirectionsOutlinedIcon sx={{ color: colors.darkGreen }} />
          </Box>
          <Box className={styles.getDirectionLink}>
            <Link
              className={styles.getDirectionLinkText}
              href={getProviderLocation(appointment.providerInfo?.address)}
              target="_blank"
            >
              Get Directions
            </Link>
          </Box>
        </Box>
      )
    );
  }
  function addHours(numOfHours, date = new Date()) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    return date;
  }

  function renderAppointmentUI() {
    if (appointment && appointment.appointmentId) {
      const today = new Date();
      const visitDate = new Date(appointment.appointmentInfo.date);
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
      const daysAway = visitDate.getTime() - today.getTime();
      const TotalDays = Math.ceil(daysAway / (1000 * 3600 * 24));
      let estimationTime = `${TotalDays} days`;
      if (isHideButtons) {
        const totalHours = Math.ceil(daysAway / (1000 * 3600));
        estimationTime = `${totalHours} Hours`;
      }
      return (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Grid container columns={5} spacing={2} p={3}>
            <Grid item xs={5} sm={5} md={2.5}>
              <Box className={styles.flexDisplay}>
                <Box pr={1}>
                  <CalendarTodayRoundedIcon sx={{ color: colors.darkGreen }} />
                </Box>
                <Typography
                  variant="bodyLarge"
                  sx={{ color: colors.darkBlue }}
                  tabIndex={0}
                >
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
                  tabIndex={0}
                >
                  {appointment.providerInfo?.name}
                </Typography>
              </Box>
              <Box pl={4.5}>
                <Typography
                  variant="bodyLarge"
                  sx={{ color: colors.darkGreen }}
                  tabIndex={0}
                >
                  {appointment.providerInfo?.position}
                </Typography>
                {renderAddressUI()}
                <Box
                  aria-label={`phone number ${appointment.providerInfo?.phoneNumber}`}
                  tabIndex={0}
                >
                  <Typography
                    variant="bodyLinkRegular"
                    aria-hidden={true}
                    onKeyPress={() =>
                      window.open(
                        `tel:${appointment.providerInfo?.phoneNumber}`
                      )
                    }
                  >
                    <a
                      onKeyPress={() =>
                        window.open(
                          `tel:${appointment.providerInfo?.phoneNumber}`
                        )
                      }
                    >
                      {formatPhoneNumber(appointment.providerInfo?.phoneNumber)}{" "}
                    </a>
                  </Typography>
                </Box>
                {renderGetDirection()}
              </Box>
            </Grid>
            <Grid item xs={5} sm={5} md={2.5}>
              <Box
                className={styles.containerImage}
                sx={{
                  border: appointment?.providerInfo?.image
                    ? "1px solid #003b4a"
                    : 0,
                }}
              >
                {appointment?.providerInfo?.image ? (
                  <ImageFallback
                    source={appointment.providerInfo.image}
                    style={{ borderRadius: "50%" }}
                    alt={`${appointment.providerInfo?.name} image`}
                    width="90px"
                    height="90px"
                    tabIndex={0}
                    fallbackSrc={"/cardImage.png"}
                  />
                ) : (
                  <AccountCircleIcon
                    sx={{
                      width: { xs: "100%" },
                      height: { xs: "100%" },
                      color: "#b5b5b5",
                    }}
                    alt="Doctor Image"
                    tabIndex={0}
                  />
                )}
              </Box>
              <Box className={styles.flexDisplay} tabIndex={0}>
                <Box pr={1}>
                  <RemoveRedEyeOutlinedIcon sx={{ color: colors.darkGreen }} />
                </Box>
                <Typography variant="bodyLarge">Purpose of Visit</Typography>
              </Box>
              <Box pl={4.5} tabIndex={0}>
                <Typography variant="bodyMedium">
                  {appointment.appointmentInfo?.appointmentType}
                </Typography>
              </Box>
              <Box className={styles.flexDisplay} pt={3} tabIndex={0}>
                <Box pr={1}>
                  <PortraitOutlinedIcon sx={{ color: colors.darkGreen }} />
                </Box>
                <Typography variant="bodyLarge">Patient Information</Typography>
              </Box>
              <Box pl={4.5} tabIndex={0}>
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
                tabIndex={0}
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
                onClick={() => onClickReschedule(appointmentData[0])}
                sx={{
                  width: { xs: "100%", md: "fit-content" },
                  minWidth: "107px",
                  padding: { xs: 1 },
                  borderColor: "#003B4A",
                  height: "40px !important",
                  borderRadius: "5px",
                }}
                tabIndex={0}
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
            <Typography
              component="div"
              className={styles.normalText}
              tabIndex={0}
            >
              Your appointment is{" "}
              <Box className={styles.boldText} display="inline">
                {estimationTime}
              </Box>{" "}
              away.
            </Typography>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box
          className={styles.noPrescription}
          sx={{ marginTop: "32px" }}
          tabIndex={0}
        >
          <Typography>{`There are no upcoming appointments`}</Typography>
        </Box>
      );
    }
  }

  return (
    <CommonCard
      title={
        appointmentCount > 0
          ? `Appointments (${appointmentCount})`
          : `Appointment`
      }
      titleIcon={
        <CalendarTodayOutlinedIcon
          sx={{ color: "#007787" }}
          aria-hidden="false"
        />
      }
      content={renderAppointmentUI()}
      navRouter={onViewAppointment}
      viewAllText={"View Appointments"}
    />
  );
}
