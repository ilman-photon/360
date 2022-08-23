import * as React from "react";
import { Box, Stack, Typography, Button, Divider } from "@mui/material";
import styles from "./Style.module.scss";
import { useTranslation } from "next-i18next";

import constants from "../../../utils/constants";

export default function ScheduleAppointment() {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Typography variant="h2" aria-label={"Who is this exam for?"}>
          {t("formTitle")}
        </Typography>
        <Stack container direction="row" spacing={2} justifyContent="center">
          <Box
            sx={{
              border: "solid 1px #003B4A",
              p: "36px",
              width: 230,
              height: 102,
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h4"
              style={{ color: "#003B4A", fontSize: "18px" }}
              aria-label={"Myself"}
            >
              {t("myself")}
            </Typography>
          </Box>
          <Box
            sx={{
              border: "solid 1px #003B4A",
              p: "36px",
              width: 230,
              height: 102,
              borderRadius: "8px",
            }}
          >
            <Typography variant="h4" aria-label={"Someone Else"}>
              {t("someoneElse")}
            </Typography>
          </Box>
        </Stack>
        <Divider />
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "222px", alignSelf: "self-end" }}
          className={[styles.formButton, styles.primary].join(" ")}
        >
          {t("continue")}
        </Button>
      </Stack>
    </Stack>
  );
}
