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
} from "@mui/material";

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
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
  isLoggedIn,
  isReschedule,
  OnOkClicked = () => {
    // This is intended
  },
}) {
  console.log({ providerData });
  const { REGISTER_TEST_ID } = constants.TEST_ID;

  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const handleClose = () => {
    OnOkClicked();
  };

  return (
    <Box
      sx={{ width: { xs: "auto", md: "max-content" } }}
      className={styles.boxModalContents}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        sx={{ textAlign: "center" }}
      >
        <Typography variant="bodyMedium" className={styles.scheduledText}>
          <CheckCircleRoundedIcon sx={{ mr: 1 }} />{" "}
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
      >
        <div
          className={styles.registeredUsernameWrapper}
          sx={{ m: { xs: 0, md: 2 } }}
        >
          <Box
            className={styles.thanksBar}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              textAlign: { xs: "center", md: "left" },
              padding: { xs: "8px", md: "12px 100px" },
            }}
          >
            <MailOutlineIcon sx={{ mr: 1, height: "35px", width: "28px" }} />{" "}
            {t("thanksBar")}
          </Box>
        </div>

        <div className={styles.bottomParagraph}>
          <Link
            data-testid={REGISTER_TEST_ID.loginlink}
            {...getLinkAria(t("isEmergency"))}
          >
            <span className={styles.medicLink}>{t("isEmergency")}</span>
          </Link>
        </div>

        <Card variant="outlined" className={styles.cardPatient}>
          <CardContent
            sx={{
              px: { xs: 3, md: 3 },
              py: { xs: 3, md: 3 },
              textAlign: "-webkit-center",
            }}
          >
            <Typography
              className={styles.dateBold}
              sx={{ pb: 2 }}
              aria-label={"Saturday, Sep 21, 2022, AT 8:30 AM EST"}
            >
              Saturday, Sep 21, 2022, AT 8:30 AM EST
            </Typography>

            <Button
              className={styles.addCalendarButton}
              sx={{
                backgroundColor: "#EEF5F7",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  mb: 1,
                  display: "contents",
                  fontWeight: "700",
                }}
                aria-label={"Add to calendar"}
              >
                <CalendarTodayIcon /> Add to calendar
              </Typography>
            </Button>

            <Typography
              className={styles.dateBold}
              aria-label={"Purpose of Visit"}
            >
              Purpose of Visit
            </Typography>
            <Typography aria-label={"Eye exam"}>Eye exam</Typography>
          </CardContent>
        </Card>

        <Card variant="outlined" className={styles.card}>
          <CardContent sx={{ px: { xs: 2, md: 4 }, py: { xs: 2, md: 4 } }}>
            <Stack spacing={2}>
              <Grid container sx={{ placeContent: "center" }}>
                <Grid pl={2}>
                  <ProviderProfile
                    variant={"appointment"}
                    showPosition
                    providerData={providerData}
                    isDayAvailableView={true}
                  />
                  <Box className={styles.getDirectionLink}>
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
              aria-label={"Patient Information"}
              aria-roledescription="Heading"
            >
              {t("patientInformation")}
            </Typography>

            <LabelWithInfo
              label="Name"
              sxRow={{ justifyContent: "unset" }}
              sxText={{ color: colors.darkGreen }}
            >
              <Typography variant="bodyMedium" sx={{ color: colors.darkGreen }}>
                {patientData.name || "-"}
              </Typography>
            </LabelWithInfo>
          </CardContent>
        </Card>

        {!isLoggedIn ? (
          <div className={styles.bottomParagraph}>
            <Typography variant="caption" sx={{ fontSize: "16px" }}>
              Already have an account?{" "}
              <Link
                href="/patient/login"
                data-testid={REGISTER_TEST_ID.loginlink}
              >
                <a className={styles.loginLink}>Login</a>
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
