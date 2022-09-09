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
import { Box, Grid, Typography, Link, Stack } from "@mui/material";
import { StyledButton } from "../../atoms/Button/button";

export default function AppointmentCard() {
  return (
    <AccountCard
      titleIcon={<CalendarTodayOutlinedIcon aria-hidden="false" />}
      title="Appointments (2)"
      sx={{
        ".MuiCardContent-root": {
          p: 0,
        },
      }}
    >
      <Grid container columns={5} spacing={2} p={3}>
        <Grid item xs={3}>
          <Box className={styles.flexDisplay}>
            <Box pr={1}>
              <CalendarTodayRoundedIcon />
            </Box>
            <Typography variant="bodyLarge">
              8:30 am EDT, Thu, Sep 8, 2022
            </Typography>
          </Box>
          <Box className={styles.flexDisplay} pt={3}>
            <Box pr={1}>
              <LocationOnOutlinedIcon />
            </Box>
            <Typography variant="bodyLarge">Dr. Sonha Nguyen</Typography>
          </Box>
          <Box pl={4.5}>
            <Typography variant="bodyLarge">Scripps Eyecare</Typography>
            <Typography>5775 Burke Centre Parkway</Typography>
            <Typography>Burke, VA 22015-2264</Typography>
            <Typography color={"#008294"} sx={{ textDecoration: "underline" }}>
              (703) 250-9000
            </Typography>
            <Box className={styles.flexDisplay} pt={3}>
              <Box pr={1}>
                <DirectionsOutlinedIcon />
              </Box>
              <Typography
                color={"#008294"}
                sx={{ textDecoration: "underline" }}
              >
                Get Direction
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box className={styles.flexDisplay}>
            <Box pr={1}>
              <RemoveRedEyeOutlinedIcon />
            </Box>
            <Typography variant="bodyLarge">Purpose of Visit</Typography>
          </Box>
          <Box pl={4.5}>
            <Typography>Eye exam</Typography>
          </Box>
          <Box className={styles.flexDisplay}>
            <Box pr={1}>
              <PortraitOutlinedIcon />
            </Box>
            <Typography variant="bodyLarge">Patient Information</Typography>
          </Box>
          <Box pl={4.5}>
            <Typography>John Smith</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box className={styles.flexDisplay} pl={3} pb={4}>
        <StyledButton
          mode="secondary"
          size="small"
          onClick={() => {
            OnRemoveClicked(idx);
          }}
          sx={{
            width: { xs: "100%", md: "fit-content" },
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
            OnRemoveClicked(idx);
          }}
          sx={{
            width: { xs: "100%", md: "fit-content" },
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
            <span style={{ fontSize: 14, color: "#007E8F" }}>Reschedule</span>
          </Stack>
        </StyledButton>
      </Box>
      <Box className={styles.noPrescription}>
        <Typography>Your appointment is 15 days away.</Typography>
      </Box>
      <Box
        className={[styles.flexDisplay, styles.viewPrescription]}
        sx={{
          borderTop: 1,
          borderColor: "divider",
          paddingTop: "20px",
        }}
      >
        <Link className={styles.viewPrescriptionText} sx={{ color: "#008294" }}>
          View Appointments
        </Link>
        <KeyboardArrowRightIcon />
      </Box>
    </AccountCard>
  );
}
