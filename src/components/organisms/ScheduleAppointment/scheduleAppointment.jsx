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
import { colors } from "../../../styles/theme";

export default function ScheduleAppointment({
  selectedSelf,
  patientData = {},
  OnSetSelectedSelf = () => {
    // This is intended
  },
  OnSubmit = () => {
    // This is intended
  },
  setActiveStep = () => {
    // This is intended
  },
  OnClickSchedule = () => {
    // This is intentional
  },
  formMessage = null,
}) {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });
  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Typography
          sx={isDesktop ? { fontSize: "32px" } : { fontSize: "26px" }}
          aria-label={"Who is this exam for?"}
          style={styles.examFor}
          tabIndex={0}
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
              color: `${selectedSelf === 1 ? "#003B4A !important" : "#0095A9"}`,
            }}
            onClick={() => OnSetSelectedSelf(1)}
          >
            <Typography
              variant="h4"
              style={styles.primaryText}
              sx={{
                color: `${
                  selectedSelf === 1 ? "#003B4A !important" : "#0095A9"
                }`,
              }}
              aria-label={"Myself option"}
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
              aria-label={"Someone else option"}
              style={styles.primaryText}
              sx={{
                color: `${
                  selectedSelf === 2 ? "#003B4A !important" : "#0095A9"
                }`,
              }}
            >
              {t("someoneElse")}
            </Typography>
          </Button>
        </Stack>

        {selectedSelf === 2 ? (
          <AppointmentForm
            isForMyself={false}
            OnClickSchedule={OnClickSchedule}
            patientData={patientData}
            OnSubmit={OnSubmit}
            formMessage={formMessage}
          />
        ) : null}

        {selectedSelf !== 2 ? (
          <>
            <Divider />
            <div style={styles.divRight}>
              <Button
                type="submit"
                variant="contained"
                data-testId="schedule_appointment_step3_button"
                style={styles.continueButton}
                sx={{
                  width: { xs: "100%", md: "222px" },
                  background: "#0095A9",
                  mt: 2,
                  backgroundColor: `${
                    !selectedSelf ? "#B1B1B1 !important" : "#007E8F"
                  }`,
                  "&:hover": {
                    backgroundColor: colors.teal,
                  },
                }}
                onClick={() => setActiveStep(3)}
                tabIndex={0}
                disabled={!selectedSelf}
              >
                {t("continue")}
              </Button>
            </div>
          </>
        ) : null}
      </Stack>
    </Stack>
  );
}
