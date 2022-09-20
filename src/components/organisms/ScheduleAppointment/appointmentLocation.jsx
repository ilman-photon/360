import * as React from "react";
import { Stack, Typography, Button, Link, Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import AccountCard from "../../molecules/AccountCard/accountCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Image from "next/image";
import { styles } from "./style";
import { TEST_ID } from "../../../utils/constants";

export default function AppointmentLocation({
  providerData = {},
  OnEditClicked = () => {
    // This is intended
  },
}) {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const getAddress = (address) => {
    if (!address) return;
    return (
      <div tabIndex={"0"}>
        {address.addressLine1}
        <br />
        {address.addressLine2}
        <br />
        {address.city}, {address.state}, {address.zipcode}
      </div>
    );
  };

  return (
    <Box mb={2}>
      <AccountCard
        titleIcon={
          <LocationOnIcon aria-label={"calendar icon"} aria-hidden={"false"} />
        }
        title={t("location")}
        textStyle={{ fontWeight: "700" }}
        isAppoinment={true}
        actionContent={
          <Button
            data-testid={
              TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_LOCATION
                .editButton
            }
            variant="text"
            aria-label="Edit"
            className={styles.editButton}
            onClick={OnEditClicked}
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
        <Stack flexDirection="row" gap={2}>
          <div>
            <Image
              src={providerData.image || "/transparent.png"}
              width={105}
              height={105}
              style={{ borderRadius: "50%" }}
              alt="Doctors image"
              tabindex={"0"}
            />
          </div>

          <Box>
            <Typography
              variant="h4"
              style={{ ...styles.detailText, ...styles.boldText }}
              tabindex={"0"}
            >
              {providerData.name}
            </Typography>
            <Typography
              variant="regularBold"
              style={styles.detailText}
              aria-label={"Myself"}
              data-testid={
                TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_LOCATION
                  .address
              }
            >
              {getAddress(providerData.address)}
              <br />
            </Typography>
            <Typography
              variant="h4"
              style={styles.detailText}
              aria-label={`provider phone number ${providerData.phoneNumber}`}
              tabindex={"0"}
            >
              <Link style={styles.linkText}>{providerData.phoneNumber}</Link>
            </Typography>
          </Box>
        </Stack>
      </AccountCard>
    </Box>
  );
}
