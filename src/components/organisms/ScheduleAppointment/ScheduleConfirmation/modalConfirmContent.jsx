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
import { useRouter } from "next/router";
import { StyledButton } from "../../../atoms/Button/button";
import Image from "next/image";

const BootstrapDialogTitle = (props) => {
  const { children, onClose, isPage, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
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
  isModalRegistered = false,
}) {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { REGISTER_TEST_ID } = constants.TEST_ID;

  const { t, ready } = useTranslation("translation", {
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
    <>
      {ready && (
        <Box
          sx={{ width: { xs: "auto", md: "max-content" } }}
          className={styles.boxModalContents}
          aria-label="Appointment confirmation page"
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            sx={{ textAlign: "center", fontSize: "22px" }}
            isPage={isPage}
            tabIndex={0}
            aria-hidden={false}
            aria-label={
              isReschedule
                ? "Reschedule Appointment Successful"
                : "You’re Scheduled!"
            }
          >
            <Typography variant="bodyMedium" className={styles.scheduledText}>
              <CheckCircleRoundedIcon sx={{ mr: 1, color: "#168845" }} />
              <div>
                {isReschedule
                  ? "Reschedule Appointment Successful"
                  : "You’re Scheduled!"}
              </div>
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
          >
            <div
              className={styles.registeredUsernameWrapper}
              sx={{ m: { xs: 0, md: 2 } }}
              aria-hidden={false}
              aria-label={
                isReschedule ? t("thanksBarReschedule") : t("thanksBar")
              }
              tabIndex={0}
            >
              <Box
                className={styles.thanksBar}
                sx={{
                  flexDirection: { xs: "column", md: "row" },
                  textAlign: { xs: "center", md: "left" },
                  padding: { xs: "8px", md: "12px 100px" },
                  fontFamily: "Libre Franklin",
                }}
                aria-label={
                  isReschedule ? t("thanksBarReschedule") : t("thanksBar")
                }
                tabIndex={0}
                aria-hidden={false}
              >
                <MailOutlineIcon
                  sx={{ mr: 1, height: "35px", width: "28px" }}
                />{" "}
                {isReschedule ? t("thanksBarReschedule") : t("thanksBar")}
              </Box>
            </div>

            <div className={styles.bottomParagraph}>
              <Tooltip
                title="If this is a medical emergency, please call 911"
                ariaLabel={"If this is a medical emergency, please call 911"}
                PopperProps={{
                  role: "alert",
                }}
              >
                <Link
                  data-testid={REGISTER_TEST_ID.loginlink}
                  role="presentation"
                  aria-label=""
                  tabIndex={"0"}
                >
                  <span
                    className={styles.medicLink}
                    role="presentation"
                    aria-label=""
                  >
                    {t("isEmergency")}
                  </span>
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
                  tabIndex={"0"}
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
                        display: "inline-flex",
                        width: "150px",
                        fontWeight: "600",
                        fontSize: "14px",
                        fontFamily: "Libre Franklin",
                        alignItems: "flex-end",
                        justifyContent: "center",
                      }}
                      aria-label={"Add to calendar"}
                    >
                      <CalendarTodayIcon
                        aria-hidden={"false"}
                        sx={{ color: "#003B4A", marginRight: "5px" }}
                      />
                      Add to calendar
                    </Typography>
                  </Button>
                </div>

                <Typography
                  className={styles.dateBold}
                  aria-label={"Purpose of Visit"}
                  tabIndex={"0"}
                >
                  Purpose of Visit
                </Typography>
                <Typography
                  aria-label={appointmentData.appointmentType || "Eye exam"}
                  tabIndex={"0"}
                  sx={{
                    fontFamily: "Libre Franklin",
                  }}
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
                        tabIndex={0}
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
                          tabIndex={0}
                          aria-label={"Get Directions"}
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
                  tabIndex={"0"}
                >
                  {t("patientInformation")}
                </Typography>

                <LabelWithInfo
                  label="Name"
                  sxRow={{ justifyContent: "unset" }}
                  sxText={{ color: colors.darkGreen, fontSize: "16px" }}
                >
                  <Typography
                    variant="bodyMedium"
                    sx={{
                      color: colors.darkGreen,
                      fontFamily: "Libre Franklin",
                    }}
                    tabIndex={"0"}
                  >
                    {getName()}
                  </Typography>
                </LabelWithInfo>
              </CardContent>
            </Card>

            <Card variant="outlined" className={styles.cardFormDocument}>
              <Stack direction={"row"}>
                <Stack sx={{ marginRight: "16px", alignSelf: "center" }}>
                  <Image
                    alt=""
                    src={"/access_time.png"}
                    width={24}
                    height={24}
                    style={{ cursor: "pointer", paddingLeft: "10px" }}
                  />
                </Stack>
                <Typography
                  variant="caption"
                  className={styles.textStyle}
                  aria-label={"Save time and complete your forms now!"}
                  tabIndex={0}
                >
                  Save time and complete your forms now!
                </Typography>
              </Stack>
              <StyledButton
                theme="patient"
                mode="primary"
                size="small"
                gradient={false}
                data-testid="complete-form-btn"
                tabindex="0"
                aria-live={"polite"}
                aria-label={"Complete Forms"}
                onClick={() => {
                  router.push(`/patient/intake-form`);
                }}
              >
                <Stack sx={{ marginRight: "8px", alignSelf: "center" }}>
                  <Image
                    alt=""
                    src={"/icon-document.png"}
                    width={24}
                    height={24}
                    style={{ cursor: "pointer", paddingLeft: "10px" }}
                  />
                </Stack>
                {`Complete Forms`}
              </StyledButton>
            </Card>

            {isLoggedIn || isModalRegistered ? (
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
                  OK
                </Button>
              </div>
            ) : (
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
            )}
          </DialogContent>
        </Box>
      )}
    </>
  );
}
