import * as React from "react";
import { Stack, Button, Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import AccountCard from "../../molecules/AccountCard/accountCard";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import BusinessIcon from "@mui/icons-material/Business";

import { styles } from "./style";
import {
  formatAppointmentDate,
  formatDate,
} from "../../../utils/dateFormatter";
import { colors } from "../../../styles/theme";
import { TEST_ID } from "../../../utils/constants";

export default function AppointmentDetails({
  appointmentData = {},
  OnEditClicked = () => {
    // This is intended
  },
}) {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  return (
    <Box>
      <AccountCard
        title={t("appointmentDetails")}
        textStyle={{ fontWeight: "700" }}
        isAppoinment={true}
        actionContent={
          <Button
            data-testid={
              TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS
                .editButton
            }
            variant="text"
            className={styles.editButton}
            onClick={OnEditClicked}
          >
            <EditOutlinedIcon
              sx={{ width: 20, height: 20, color: "#008294" }}
              aria-label={"Edit icon"}
              aria-hidden={"false"}
            />
            <div type="link" style={styles.editLink}>
              Edit
            </div>
          </Button>
        }
      >
        <Stack spacing={2}>
          <LabelWithInfo
            label="Date and time"
            titleIcon={
              <CalendarTodayIcon
                aria-label={"Calendar icon"}
                aria-hidden={"false"}
              />
            }
            sxRow={{ justifyContent: "unset" }}
            sxText={{ paddingLeft: "4px", color: colors.darkGreen }}
          >
            <Typography variant="bodyMedium" sx={{ color: colors.darkGreen }}>
              {formatAppointmentDate(appointmentData.date)}
            </Typography>
          </LabelWithInfo>

          <LabelWithInfo
            label="Insurance"
            titleIcon={
              <ContactMailIcon aria-label={"Mail icon"} aria-hidden={"false"} />
            }
            sxRow={{ justifyContent: "unset" }}
            sxText={{ paddingLeft: "4px", color: colors.darkGreen }}
          >
            <Typography variant="bodyMedium" sx={{ color: colors.darkGreen }}>
              {appointmentData.insuranceCarrier
                ? appointmentData.insuranceCarrier
                : "No Insurance provided"}
            </Typography>
          </LabelWithInfo>

          <LabelWithInfo
            label="Purpose of visit"
            titleIcon={
              <BusinessIcon
                aria-label={"Business icon"}
                aria-hidden={"false"}
              />
            }
            sxRow={{ justifyContent: "unset" }}
            sxText={{ paddingLeft: "4px", color: colors.darkGreen }}
          >
            <Typography variant="bodyMedium" sx={{ color: colors.darkGreen }}>
              {appointmentData.appointmentType || "-"}
            </Typography>
          </LabelWithInfo>
        </Stack>
      </AccountCard>
    </Box>
  );
}
