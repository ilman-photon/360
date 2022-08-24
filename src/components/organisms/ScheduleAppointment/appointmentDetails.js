import * as React from "react";
import { Stack, Button, Typography } from "@mui/material";
import styles from "./Style.module.scss";
import { useTranslation } from "next-i18next";
import AccountCard from "../../molecules/AccountCard/accountCard";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import BusinessIcon from "@mui/icons-material/Business";

export default function AppointmentDetails() {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  return (
    <AccountCard
      title={t("appointmentDetails")}
      //   isEditing={isEditing}
      // OnEditClicked={OnEditClicked}
      actionContent={
        <Button
          // onClick={OnEditClicked}
          variant="text"
          className={styles.editButton}
        >
          <EditOutlinedIcon sx={{ width: 20, height: 20 }} />
          <div type="link" style={{ marginLeft: 4, color: "#008294" }}>
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
          sxText={{ color: "#003B4A" }}
        >
          <Typography variant="bodyMedium" sx={{ color: "#003B4A" }}>
            Saturday, Sep 11 - 8:30 am EST
          </Typography>
        </LabelWithInfo>

        <LabelWithInfo
          label="Preferred Name"
          titleIcon={<ContactMailIcon />}
          sxRow={{ justifyContent: "unset" }}
          sxText={{ color: "#003B4A" }}
        >
          <Typography variant="bodyMedium" sx={{ color: "#003B4A" }}>
            No Insurance provided
          </Typography>
        </LabelWithInfo>

        <LabelWithInfo
          label="fsd Name"
          titleIcon={<BusinessIcon />}
          sxRow={{ justifyContent: "unset" }}
          sxText={{ color: "#003B4A" }}
        >
          <Typography variant="bodyMedium" sx={{ color: "#003B4A" }}>
            Eye Exam
          </Typography>
        </LabelWithInfo>
      </Stack>
    </AccountCard>
  );
}
