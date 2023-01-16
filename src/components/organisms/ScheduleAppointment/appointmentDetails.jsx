import * as React from "react";
import { Stack, Button, Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import AccountCard from "../../molecules/AccountCard/accountCard";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EyeIcon from "../../../assets/icons/EyeIcon";

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

  return (
    <Box>
      <AccountCard
        title={t("appointmentDetails")}
        isAppoinment={true}
        sx={{
          ".MuiCardContent-root": {
            p: 3,
          },
        }}
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
            iconWidth={"24px"}
            titleIcon={
              <Image
                width="20"
                height="20"
                src={"/icon-calendar.png"}
                alt="date and time"
                aria-label={"Calendar icon"}
                aria-hidden={"false"}
                sx={{ color: colors.darkGreen }}
              />
            }
            sxRow={{ justifyContent: "unset" }}
            sxText={{
              height: "26px",
              "font-style": "normal",
              "font-weight": "600",
              "font-size": "18px",
              "line-height": "26px",
              paddingLeft: "4px",
              "letter-spacing": "0.0016em",
              color: colors.darkGreen,
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            <Typography
              variant="bodyMedium"
              sx={{
                color: "#003B4A",
                fontFamily: "Museo Sans",
                fontSize: "16px",
                fontWeight: "400",
                "font-style": "normal",
                "font-weight": "400",
                "font-size": "16px",
                "line-height": "24px",
              }}
              tabIndex={"0"}
              data-testid={
                TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS.date
              }
            >
              {formatAppointmentDate(
                appointmentData.date,
                appointmentData.timeZone
              )}
            </Typography>
          </LabelWithInfo>
          <LabelWithInfo
            label="Insurance"
            iconWidth={"24px"}
            titleIcon={
              <Image
                width="24"
                height="24"
                src={"/icon-profile.png"}
                alt="insurance"
                aria-label={"Mail icon"}
                aria-hidden={"false"}
              />
            }
            sxRow={{ justifyContent: "unset" }}
            sxText={{
              paddingLeft: "4px",
              width: "85px",
              height: "26px",
              "font-style": "normal",
              "font-weight": "600",
              "font-size": "18px",
              "line-height": "26px",
              "letter-spacing": "0.0016em",
              color: colors.darkGreen,
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            <Typography
              variant="bodyMedium"
              sx={{
                color: "#003B4A",
                fontFamily: "Museo Sans",
                "font-style": "normal",
                "font-weight": "400",
                "font-size": "16px",
                "line-height": "24px",
              }}
              tabIndex={"0"}
            >
              {appointmentData.insuranceCarrier?.name
                ? appointmentData.insuranceCarrier?.name
                : "No Insurance provided"}
            </Typography>
          </LabelWithInfo>
          <LabelWithInfo
            label="Purpose of visit"
            iconWidth={"24px"}
            titleIcon={
              <EyeIcon />
              // <Image
              //   width="24"
              //   height="24"
              //   src={"/icon-eye-contacts.png"}
              //   alt="purpose of visit"
              //   aria-label={"Building icon"}
              //   aria-hidden={"false"}
              //   sx={{ color: colors.darkGreen }}
              // />
            }
            sxRow={{ justifyContent: "unset" }}
            sxText={{
              paddingLeft: "4px",
              height: "26px",
              "font-style": "normal",
              "font-weight": "600",
              "font-size": "18px",
              "line-height": "26px",
              "letter-spacing": "0.0016em",
              color: colors.darkGreen,
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            <Typography
              variant="bodyMedium"
              sx={{
                color: colors.darkGreen,
                fontFamily: "Museo Sans",
                "font-style": "normal",
                "font-weight": "400",
                "font-size": "16px",
                "line-height": "24px",
              }}
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
