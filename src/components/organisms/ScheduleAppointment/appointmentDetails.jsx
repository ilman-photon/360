import * as React from "react";
import { Stack, Button, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import AccountCard from "../../molecules/AccountCard/accountCard";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import BusinessIcon from "@mui/icons-material/Business";

import { styles } from "./style";

export default function AppointmentDetails() {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  return (
    <AccountCard
      title={t("appointmentDetails")}
      textStyle={{ fontWeight: "700" }}
      isAppoinment={true}
      actionContent={
        <Button variant="text" className={styles.editButton}>
          <EditOutlinedIcon sx={{ width: 20, height: 20 }} />
          <div type="link" style={styles.editLink}>
            Edit
          </div>
        </Button>
      }
    >
      <Stack spacing={2}>
        <LabelWithInfo
          label="Name"
          titleIcon={<CalendarTodayIcon />}
          sxRow={{ justifyContent: "unset" }}
          sxText={{ paddingLeft: "4px", color: "#003B4A" }}
        >
          <Typography variant="bodyMedium" sx={{ color: "#003B4A" }}>
            Saturday, Sep 11 - 8:30 am EST
          </Typography>
        </LabelWithInfo>

        <LabelWithInfo
          label="Preferred Name"
          titleIcon={<ContactMailIcon />}
          sxRow={{ justifyContent: "unset" }}
          sxText={{ paddingLeft: "4px", color: "#003B4A" }}
        >
          <Typography variant="bodyMedium" sx={{ color: "#003B4A" }}>
            No Insurance provided
          </Typography>
        </LabelWithInfo>

        <LabelWithInfo
          label="Purpose of visit"
          titleIcon={<BusinessIcon />}
          sxRow={{ justifyContent: "unset" }}
          sxText={{ paddingLeft: "4px", color: "#003B4A" }}
        >
          <Typography variant="bodyMedium" sx={{ color: "#003B4A" }}>
            Eye Exam
          </Typography>
        </LabelWithInfo>
      </Stack>
    </AccountCard>
  );
}
