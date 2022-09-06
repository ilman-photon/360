import * as React from "react";
import { Stack, Typography, Button, Grid, Link, Box } from "@mui/material";
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
      <div>
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
        titleIcon={<LocationOnIcon />}
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
          <Grid container>
            <Grid p={0}>
              <Image
                src={providerData.image || "/transparent.png"}
                width={105}
                height={105}
                style={{ borderRadius: "50%" }}
                alt="profile"
              />
            </Grid>
            <Grid pl={2}>
              <Typography
                variant="h4"
                style={{ ...styles.detailText, ...styles.boldText }}
                aria-label={"Myself"}
              >
                {providerData.name}
              </Typography>
              <Typography
                variant="regularBold"
                style={styles.detailText}
                aria-label={"Myself"}
              >
                {getAddress(providerData.address)}
                <br />
              </Typography>
              <Typography
                variant="h4"
                style={styles.detailText}
                aria-label={"Myself"}
              >
                <Link style={styles.linkText}>{providerData.phoneNumber}</Link>
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </AccountCard>
    </Box>
  );
}
