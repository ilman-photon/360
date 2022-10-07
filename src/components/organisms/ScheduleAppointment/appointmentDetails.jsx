import * as React from "react";
import { Stack, Button, Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import AccountCard from "../../molecules/AccountCard/accountCard";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { styles } from "./style";
import { formatAppointmentDate } from "../../../utils/dateFormatter";
import { colors } from "../../../styles/theme";
import { TEST_ID } from "../../../utils/constants";
import Image from "next/image";

export default function AppointmentDetails({
  appointmentData = {},
  OnEditClicked = () => {
    // This is intended
  },
}) {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const iconCardinsuranceCard = "/iconCardinsuranceCard.png";

  return (
    <Box>
      <AccountCard
        title={t("appointmentDetails")}
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
            aria-label="Edit"
          >
            <EditOutlinedIcon
              sx={{ width: 20, height: 20, color: "#008294" }}
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
            sxText={{
              paddingLeft: "4px",
              color: colors.darkGreen,
              fontWeight: "500",
            }}
          >
            <Typography
              variant="bodyMedium"
              sx={{ color: colors.darkGreen }}
              tabIndex={"0"}
              data-testid={
                TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS.date
              }
            >
              {formatAppointmentDate(appointmentData.date)}
            </Typography>
          </LabelWithInfo>

          <LabelWithInfo
            label="Insurance"
            titleIcon={
              <Image
                alt=""
                src={iconCardinsuranceCard}
                width={"24px"}
                height={"24px"}
              />
            }
            iconWidth={"24px"}
            sxRow={{ justifyContent: "unset" }}
            sxText={{
              paddingLeft: "4px",
              color: colors.darkGreen,
              fontWeight: "500",
            }}
          >
            <Typography
              variant="bodyMedium"
              sx={{ color: colors.darkGreen }}
              tabIndex={"0"}
            >
              {appointmentData.insuranceCarrier
                ? appointmentData.insuranceCarrier
                : "No Insurance provided"}
            </Typography>
          </LabelWithInfo>

          <LabelWithInfo
            label="Purpose of visit"
            titleIcon={
              <VisibilityOutlinedIcon
                aria-label={"Visibility icon"}
                aria-hidden={"false"}
              />
            }
            sxRow={{ justifyContent: "unset" }}
            sxText={{
              paddingLeft: "4px",
              color: colors.darkGreen,
              fontWeight: "500",
            }}
          >
            <Typography
              variant="bodyMedium"
              sx={{ color: colors.darkGreen }}
              tabIndex={"0"}
              aria-label={
                appointmentData.appointmentType ||
                "no purpose of visit provided"
              }
            >
              {appointmentData.appointmentType || "-"}
            </Typography>
          </LabelWithInfo>
        </Stack>
      </AccountCard>
    </Box>
  );
}
