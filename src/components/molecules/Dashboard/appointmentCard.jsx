import * as React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./styles.module.scss";
import {
  Box,
  Grid,
  Typography,
  Link,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { StyledButton } from "../../atoms/Button/button";
import { parseAppointmentCardData } from "../../../utils/appointment";
import { fullDateFormat } from "../../../utils/dateFormatter";
import { useEffect } from "react";
import ImageFallback from "../../atoms/Image/image";
import { getProviderLocation } from "../AppointmentInformation/appointmentInformation";
import PhoneNumber from "../../atoms/PhoneNumber/phoneNumber";
import CommonCard from "./commonCard";
import { colors } from "../../../styles/theme";
import moment from "moment-timezone";
import { showOrReturnEmpty } from "../../../utils/viewUtil";

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
  const isMobile = useMediaQuery("(max-width: 600px)");

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

  function getHideHour(payload) {
    const appointmentInfo = payload.appointmentInfo;
    if (
      appointmentInfo?.appointmentTypeCategory === "OPT" ||
      appointmentInfo?.appointmentTypeCategory === "OPT/OPH"
    ) {
      return 4;
    }
    if (appointmentInfo?.appointmentTypeCategory === "OPH") {
      return 24;
    }

    return 0;
  }

  function renderAppointmentUI() {
    if (appointment && appointment.appointmentId) {
      const today = new moment().tz(appointment.appointmentInfo.timeZone);
      const visitDateIsoFormat = new Date(
        appointment.appointmentInfo.date
      ).toISOString();
      const visitDate = new moment.tz(
        visitDateIsoFormat,
        appointment.appointmentInfo.timeZone
      );
      let hideHour = getHideHour(appointment);

      const duration = moment.duration(visitDate.diff(today));
      const days = duration.asDays();
      const hours = duration.asHours();

      const isHideButtons = Math.floor(hours) < hideHour;
      const dayOrDays = Math.round(days) == 1 ? "day" : "days";
      let estimationTime = `${Math.round(days)} ${dayOrDays}`;
      if (isHideButtons) {
        estimationTime = `${Math.floor(hours)} Hours`;
      }
      return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <Grid
            container
            columns={5}
            spacing={2}
            p={3}
            className={styles.directionContent}
          >
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
                  {fullDateFormat(
                    appointment.appointmentInfo.date,
                    appointment.appointmentInfo.timeZone
                  )}
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
                  <PhoneNumber
                    phone={showOrReturnEmpty(
                      appointment.providerInfo?.phoneNumber
                    )}
                    sx={{
                      "&.MuiTypography-body2": {
                        fontSize: "16px",
                        fontWeight: isMobile ? 500 : 400,
                        color: !isMobile && "#003B4A !important",
                      },
                    }}
                  />
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
                <Typography variant="bodyLarge">Patient</Typography>
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
              Reminder: Your next appointment at{" "}
              {appointment?.providerInfo?.position} is{" "}
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
          <Typography>{`We currently do not have any upcoming appointments scheduled for this account.`}</Typography>
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
