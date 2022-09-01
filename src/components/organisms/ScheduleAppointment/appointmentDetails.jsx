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
import { formatDate } from "../../../utils/dateFormatter";
import { colors } from "../../../styles/theme";

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
            variant="text"
            className={styles.editButton}
            onClick={OnEditClicked}
          >
            <EditOutlinedIcon
              sx={{ width: 20, height: 20, color: "#008294" }}
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
            titleIcon={<CalendarTodayIcon />}
            sxRow={{ justifyContent: "unset" }}
            sxText={{ paddingLeft: "4px", color: colors.darkGreen }}
          >
            <Typography variant="bodyMedium" sx={{ color: colors.darkGreen }}>
              {formatDate(appointmentData.date)}
            </Typography>
          </LabelWithInfo>

          <LabelWithInfo
            label="Insurance"
            titleIcon={<ContactMailIcon />}
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
            titleIcon={<BusinessIcon />}
            sxRow={{ justifyContent: "unset" }}
            sxText={{ paddingLeft: "4px", color: colors.darkGreen }}
          >
            <Typography variant="bodyMedium" sx={{ color: colors.darkGreen }}>
              {appointmentData.appointmentType}
            </Typography>
          </LabelWithInfo>
        </Stack>
      </AccountCard>
    </Box>
  );
}
