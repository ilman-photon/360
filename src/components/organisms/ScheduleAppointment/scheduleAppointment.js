import * as React from "react";
import { Box, Stack, Typography, Button, Divider } from "@mui/material";
import { useTranslation } from "next-i18next";
import { StyledButton } from "../../atoms/Button/button";

export default function ScheduleAppointment({
  selectedSelf,
  OnSetSelectedSelf = () => {
    // This is intended
  },
}) {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Typography
          sx={{ fontSize: { xs: "26px", md: "32px" } }}
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
            // variant="text"
            sx={{
              height: { xs: "61px", md: "102px" },
              border: "solid 1px #003B4A",
              p: "40px",
              width: { xs: "100%", md: "230px" },
              borderRadius: "8px",
              textAlign: "center",
              textTransform: "none",
              background: `${selectedSelf === 1 ? "#E4E4E4" : "#FAFAFA"}`,
            }}
            onClick={OnSetSelectedSelf(true)}
          >
            <Typography
              variant="h4"
              sx={{ color: "#003B4A", fontSize: "18px" }}
              aria-label={"Myself"}
            >
              {t("myself")}
            </Typography>
          </Button>
          <Button
            sx={{
              height: { xs: "61px", md: "102px" },
              border: "solid 1px #003B4A",
              p: "40px",
              width: { xs: "100%", md: "230px" },
              borderRadius: "8px",
              textAlign: "center",
              textTransform: "none",
              background: `${selectedSelf === 2 ? "#FAFAFA" : "#E4E4E4"}`,
            }}
            onClick={OnSetSelectedSelf(false)}
          >
            <Typography
              variant="h4"
              sx={{ color: "#003B4A", fontSize: "18px" }}
              aria-label={"Myself"}
            >
              {t("someoneElse")}
            </Typography>
          </Button>
        </Stack>
        <Divider />
        <StyledButton
          mode="primary"
          size="small"
          sx={{ width: { xs: "100%", md: "222px" }, alignSelf: "self-end" }}
        >
          {t("continue")}
        </StyledButton>
      </Stack>
    </Stack>
  );
}
