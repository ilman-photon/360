import * as React from "react";
import {
  Stack,
  Typography,
  Button,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { styles } from "./style";
import AppointmentForm from "./appointmentForm";

export default function ScheduleAppointment({
  selectedSelf,
  OnSetSelectedSelf = () => {
    // This is intended
  },
  setActiveStep = () => {
    // This is intended
  },
  OnClickSchedule = () => {
    // This is intentional
  },
}) {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Typography
          sx={isDesktop ? { fontSize: "26px" } : { fontSize: "32px" }}
          aria-label={"Who is this exam for?"}
        >
          {t("formTitle")}
        </Typography>
        <Stack
          container
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            style={styles.switchButton}
            sx={{
              height: { xs: "61px", md: "102px" },
              width: { xs: "100%", md: "230px" },
              backgroundColor: `${
                selectedSelf === 1 ? "#EEF5F7 !important" : null
              }`,
            }}
            onClick={() => OnSetSelectedSelf(1)}
          >
            <Typography
              variant="h4"
              style={styles.primaryText}
              aria-label={"Myself"}
            >
              {t("myself")}
            </Typography>
          </Button>
          <Button
            style={styles.switchButton}
            sx={{
              height: { xs: "61px", md: "102px" },
              width: { xs: "100%", md: "230px" },
              backgroundColor: `${
                selectedSelf === 2 ? "#EEF5F7 !important" : null
              }`,
            }}
            onClick={() => OnSetSelectedSelf(2)}
          >
            <Typography
              variant="h4"
              aria-label={"SomeoneElse"}
              style={styles.primaryText}
            >
              {t("someoneElse")}
            </Typography>
          </Button>
        </Stack>

        {selectedSelf === 2 ? (
          <AppointmentForm
            isForMyself={false}
            OnClickSchedule={OnClickSchedule}
          />
        ) : null}

        <Divider />
        {selectedSelf === 1 ? (
          <Button
            variant="contained"
            sx={{
              width: { xs: "100%", md: "222px" },
              background: "#0095A9",
            }}
            style={styles.continueText}
            onClick={() => setActiveStep(3)}
          >
            {t("continue")}
          </Button>
        ) : null}
      </Stack>
    </Stack>
  );
}
