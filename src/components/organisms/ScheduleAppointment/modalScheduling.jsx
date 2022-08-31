import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { colors } from "../../../styles/theme";
import { styles } from "./style";
import Link from "@mui/material/Link";
import Image from "next/image";
import constants from "../../../utils/constants";
import { useTranslation } from "next-i18next";
import {
  Card,
  CardContent,
  Box,
  Stack,
  Typography,
  Button,
  Divider,
  Grid,
  useMediaQuery,
} from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

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
            right: 8,
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

export default function ModalScheduling({ providerData = {} }) {
  const [open, setOpen] = React.useState(true);
  const { REGISTER_TEST_ID } = constants.TEST_ID;

  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const isDesktop = useMediaQuery("(min-width: 769px)");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getAddress = (address) => {
    if (!address) return;
    return (
      <div>
        {address.addressLine1}
        <br />
        {address.addressLine2}
        <br />
        {address.city}, {address.state}, {address.zipcode}
      </div>
    );
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": { maxWidth: "950px" },
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{ textAlign: "center" }}
        >
          <Typography variant="bodyMedium" sx={{ color: colors.green }}>
            <CheckCircleRoundedIcon /> You’re Scheduled!
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent>
          <div style={styles.registeredUsernameWrapper}>
            <div>
              <MailOutlineIcon /> {t("thanksBar")}
            </div>
          </div>

          <div style={styles.bottomParagraph}>
            <Link
              href="/patient/login"
              data-testid={REGISTER_TEST_ID.loginlink}
              aria-label={`Login link`}
            >
              <a style={styles.medicLink}>Is this a medical emergency?</a>
            </Link>
          </div>

          <Card variant="outlined" sx={styles.cardPatient}>
            <CardContent
              sx={{
                px: { xs: 3, md: 4 },
                py: { xs: 4, md: 4 },
                textAlign: "center",
              }}
            >
              <Typography
                style={styles.dateBold}
                // sx={isDesktop ? { fontSize: "26px" } : { fontSize: "32px" }}

                aria-label={"Who is this exam for?"}
              >
                Saturday, Sep 21, 2022, AT 8:30 AM EST
              </Typography>

              <Button
                style={styles.switchButton}
                sx={{
                  backgroundColor: "#EEF5F7",
                }}
                // onClick={() => OnSetSelectedSelf(1)}
              >
                <Typography
                  variant="h4"
                  style={styles.primaryText}
                  aria-label={"Myself"}
                >
                  <CalendarTodayIcon />
                  Add to calendar
                </Typography>
              </Button>

              <Typography
                style={styles.dateBold}
                // sx={isDesktop ? { fontSize: "26px" } : { fontSize: "32px" }}

                aria-label={"Who is this exam for?"}
              >
                Purpose of Visit
              </Typography>
              <Typography
                // style={styles.date}
                // sx={isDesktop ? { fontSize: "26px" } : { fontSize: "32px" }}

                aria-label={"Who is this exam for?"}
              >
                Eye exam
              </Typography>
            </CardContent>
          </Card>

          <Card variant="outlined" sx={styles.card}>
            <CardContent sx={{ px: { xs: 3, md: 4 }, py: { xs: 4, md: 4 } }}>
              <Stack spacing={2}>
                <Grid container sx={{ placeContent: "center" }}>
                  <Grid p={0}>
                    <Image
                      src={providerData.image || "/transparent.png"}
                      width={105}
                      height={105}
                      style={{ borderRadius: "50%" }}
                      alt="profile"
                    />
                  </Grid>
                  <Grid pl={2}>
                    <Typography
                      variant="h4"
                      style={{ ...styles.detailText, ...styles.boldText }}
                      aria-label={"Myself"}
                    >
                      {providerData.name || "name"}
                    </Typography>
                    <Typography
                      variant="regularBold"
                      style={styles.detailText}
                      aria-label={"Myself"}
                    >
                      {getAddress(providerData.address)}
                      <br />
                    </Typography>
                    <Typography
                      variant="h4"
                      style={styles.detailText}
                      aria-label={"Myself"}
                    >
                      <Link style={styles.linkText}>
                        {providerData.phoneNumber || "(123) - 456"}
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </CardContent>
          </Card>

          <Card variant="outlined" sx={styles.cardPatient}>
            <CardContent sx={{ px: { xs: 3, md: 4 }, py: { xs: 4, md: 4 } }}>
              <Typography
                style={styles.patientBoxLabel}
                // sx={isDesktop ? { fontSize: "26px" } : { fontSize: "32px" }}

                aria-label={"Who is this exam for?"}
              >
                {t("patientInformation")}
              </Typography>

              <LabelWithInfo
                label="name"
                sxRow={{ justifyContent: "unset" }}
                sxText={{ paddingLeft: "4px", color: colors.darkGreen }}
              >
                <Typography
                  variant="bodyMedium"
                  sx={{ color: colors.darkGreen }}
                >
                  {providerData.name || "No Insurance provided"}
                </Typography>
              </LabelWithInfo>
            </CardContent>
          </Card>

          <div style={styles.bottomParagraph}>
            <Typography variant="caption" sx={{ fontSize: "16px" }}>
              Already have an account?{" "}
              <Link
                href="/patient/login"
                data-testid={REGISTER_TEST_ID.loginlink}
                aria-label={`Login link`}
              >
                <a style={styles.loginLink}>Login</a>
              </Link>
            </Typography>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
