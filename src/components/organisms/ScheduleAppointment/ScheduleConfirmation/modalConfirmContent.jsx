import * as React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LabelWithInfo from "../../../atoms/LabelWithInfo/labelWithInfo";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { colors } from "../../../../styles/theme";
import styles from "./modalScheduling.module.scss";
import ProviderProfile from "../../../molecules/ProviderProfile/providerProfile";
import { getLinkAria } from "../../../../utils/viewUtil";

import Link from "@mui/material/Link";
import constants from "../../../../utils/constants";
import { useTranslation } from "next-i18next";
import {
  Card,
  CardContent,
  Box,
  Stack,
  Typography,
  Button,
  Grid,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { getDirection } from "../../../../utils/appointment";
import { formatAppointmentDate } from "../../../../utils/dateFormatter";

const BootstrapDialogTitle = (props) => {
  const { children, onClose, isPage, ...other } = props;

  return (
    <DialogTitle
      sx={{ m: 0, p: 2 }}
      {...other}
      aria-label="Appointment confirmation page"
    >
      {children}
      {onClose && !isPage ? (
        <IconButton
          aria-label="close option"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalConfirmContent({
  patientData = {},
  providerData = {},
  appointmentData = {},
  isLoggedIn,
  isReschedule,
  OnOkClicked = () => {
    // This is intended
  },
  onAddToCalendarClicked,
  isPage = false,
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { REGISTER_TEST_ID } = constants.TEST_ID;

  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const handleClose = () => {
    OnOkClicked();
  };

  function getProviderLocation() {
    return (
      providerData.coordinate || {
        latitude: "",
        longitude: "",
      }
    );
  }

  const getName = () => {
    if (patientData.name) {
      return patientData.name;
    } else if (patientData.firstName) {
      return `${patientData.firstName} ${patientData.lastName}`;
    } else return "-";
  };

  return (
    <Box
      sx={{ width: { xs: "auto", md: "max-content" } }}
      className={styles.boxModalContents}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        sx={{ textAlign: "center", fontSize: "22px" }}
        isPage={isPage}
      >
        <Typography
          tabIndex={0}
          ariaLabel={
            isReschedule
              ? "Reschedule Appointment Successful"
              : "You’re Scheduled!"
          }
          variant="bodyMedium"
          className={styles.scheduledText}
        >
          <CheckCircleRoundedIcon sx={{ mr: 1, color: "#168845" }} />{" "}
          {isReschedule
            ? "Reschedule Appointment Successful"
            : "You’re Scheduled!"}
        </Typography>
      </BootstrapDialogTitle>
      <DialogContent
        sx={{
          "&.MuiDialogContent-root": {
            px: { xs: 2, md: 3 },
            pt: { xs: 0, md: 0 },
            pb: { xs: 2, md: 3 },
          },
        }}
        tabIndex={0}
      >
        <div
          className={styles.registeredUsernameWrapper}
          sx={{ m: { xs: 0, md: 2 } }}
          aria-label={"nono button"}
        >
          <Box
            className={styles.thanksBar}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center", md: "left" },
              padding: { xs: "8px", md: "12px 100px" },
            }}
            aria-label={
              isReschedule ? t("thanksBarReschedule") : t("thanksBar")
            }
            tabIndex={0}
          >
            <MailOutlineIcon sx={{ mr: 1, height: "35px", width: "28px" }} />{" "}
            {isReschedule ? t("thanksBarReschedule") : t("thanksBar")}
          </Box>
        </div>

        <div className={styles.bottomParagraph}>
          <Tooltip
            title="If this is a medical emergency, please call 911"
            ariaLabel={"sIf this is a medical emergency, please call 911"}
            tabIndex={0}
          >
            <Link
              data-testid={REGISTER_TEST_ID.loginlink}
              {...getLinkAria(t("isEmergency"))}
            >
              <span className={styles.medicLink}>{t("isEmergency")}</span>
            </Link>
          </Tooltip>
        </div>

        <Card variant="outlined" className={styles.cardDate}>
          <CardContent
            sx={{
              px: { xs: 3, md: 3 },
              py: { xs: 3, md: 3 },
              textAlign: "-moz-center",
            }}
          >
            <Typography
              className={styles.dateBold}
              sx={{ pb: 2 }}
              aria-label={appointmentData?.date}
            >
              {formatAppointmentDate(appointmentData.date)}
            </Typography>

            <div style={{ display: "inline-flex" }}>
              <Button
                className={styles.addCalendarButton}
                sx={{
                  backgroundColor: "#EEF5F7",
                  mb: 2,
                }}
                onClick={() => {
                  onAddToCalendarClicked({
                    name: "ECP Appointment",
                    description: `Patient: ${getName()}, Purpose of Visit: ${
                      appointmentData.appointmentType
                    }`,
                    date: appointmentData.date,
                    location:
                      providerData.address.addressLine1 +
                      ` ` +
                      providerData.address.addressLine2 +
                      ` ` +
                      providerData.address.city +
                      ` ` +
                      providerData.address.state +
                      ` ` +
                      providerData.address.zipcode,
                  });
                }}
              >
                <Typography
                  sx={{
                    mb: 1,
                    display: "contents",
                    fontWeight: "600",
                    fontSize: "14px",
                    fontFamily: "Libre Franklin",
                  }}
                  aria-label={"Add to calendar"}
                >
                  <CalendarTodayIcon
                    aria-hidden={"false"}
                    sx={{ color: "#003B4A" }}
                  />{" "}
                  Add to calendar
                </Typography>
              </Button>
            </div>

            <Typography
              className={styles.dateBold}
              aria-label={"Purpose of Visit"}
            >
              Purpose of Visit
            </Typography>
            <Typography
              aria-label={appointmentData.appointmentType || "Eye exam"}
            >
              {appointmentData.appointmentType || "Eye exam"}
            </Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" className={styles.card}>
          <CardContent sx={{ px: { xs: 2, md: 4 }, py: { xs: 2, md: 4 } }}>
            <Stack spacing={2}>
              <Grid container sx={{ placeContent: "center" }}>
                <Grid>
                  <ProviderProfile
                    variant={"appointment"}
                    showPosition
                    providerData={providerData}
                    isDayAvailableView={true}
                  />
                  <Box
                    className={styles.getDirectionLink}
                    onClick={() => {
                      getDirection(getProviderLocation());
                    }}
                  >
                    <DirectionsOutlinedIcon></DirectionsOutlinedIcon>
                    <Link
                      className={styles.getDirectionLinkText}
                      {...getLinkAria("Get directions")}
                    >
                      Get directions
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </CardContent>
        </Card>

        <Card variant="outlined" className={styles.cardPatient}>
          <CardContent sx={{ px: { xs: 3, md: 3 }, py: { xs: 3, md: 3 } }}>
            <Typography
              className={styles.patientBoxLabel}
              sx={{ mb: 2 }}
              aria-label={"Patient Information heading"}
              aria-roledescription="Heading"
            >
              {t("patientInformation")}
            </Typography>

            <LabelWithInfo
              label="Name"
              sxRow={{ justifyContent: "unset" }}
              sxText={{ color: colors.darkGreen, fontSize: "16px" }}
            >
              <Typography variant="bodyMedium" sx={{ color: colors.darkGreen }}>
                {getName()}
              </Typography>
            </LabelWithInfo>
          </CardContent>
        </Card>

        {!isLoggedIn ? (
          <div className={styles.bottomParagraph}>
            <Typography
              variant="caption"
              sx={{
                fontSize: "16px",
                fontFamily: "Libre Franklin",
                float: isMobile ? "left" : "unset",
              }}
              aria-label={"Already have an account? Sign in"}
              tabIndex={0}
            >
              Already have an account?{" "}
              <Link
                href="/patient/login"
                data-testid={REGISTER_TEST_ID.loginlink}
              >
                <a className={styles.loginLink}>Sign in</a>
              </Link>
            </Typography>
          </div>
        ) : (
          <div className={styles.okButtonRow}>
            <Button
              type="submit"
              variant="contained"
              onClick={handleClose}
              className={styles.continueText}
              sx={{
                width: "131px",
                background: "#007E8F",
              }}
            >
              Ok
            </Button>
          </div>
        )}
      </DialogContent>
    </Box>
  );
}
