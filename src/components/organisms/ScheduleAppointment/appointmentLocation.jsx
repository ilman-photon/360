import * as React from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import AccountCard from "../../molecules/AccountCard/accountCard";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import ImageFallback from "../../atoms/Image/image";
import { styles } from "./style";
import { TEST_ID } from "../../../utils/constants";
import PhoneNumber from "../../atoms/PhoneNumber/phoneNumber";
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
      <div style={styles.addressContent} tabIndex={"0"}>
        <div>{address.addressLine1}</div>
        <div>{address.addressLine2}</div>
        <div>
          {address.city}, {address.state}, {address.zipcode || address.zip}
        </div>
      </div>
    );
  };

  const getName = (payload) => {
    if (payload.name) return payload.name;
    return `${payload.firstName || ""} ${payload.lastName || "-"}`;
  };

  return (
    <Box mb={2}>
      <AccountCard
        titleIcon={<LocationOnOutlinedIcon aria-label={"Location icon"} />}
        aria-label="Location Heading"
        title={t("location")}
        isAppoinment={true}
        sx={{
          ".MuiCardContent-root": {
            p: 3,
          },
        }}
        textStyle={{
          fontWeight: 400,
        }}
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
            <ImageFallback
              source={
                providerData.image ||
                providerData.profilePhoto ||
                "/cardImage.png"
              }
              fallbackSrc={"/cardImage.png"}
              width={105}
              height={105}
              style={{ borderRadius: "50%" }}
              alt="Doctors image"
              tabIndex={"0"}
            />
          </div>

          <Box>
            <Typography
              variant="h4"
              style={{
                ...styles.detailText,
                ...styles.boldText,
                ...styles.nameProviderText,
              }}
              tabIndex={"0"}
            >
              {getName(providerData)}
            </Typography>
            <Typography
              variant="regularBold"
              style={{ ...styles.detailText, ...styles.nomal400Text }}
              aria-label={"Myself"}
              data-testid={
                TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_LOCATION
                  .address
              }
            >
              {getAddress(providerData.address)}
            </Typography>
            <Typography
              variant="h4"
              aria-labelledby="provider-phone-number"
              style={{ ...styles.detailText, ...styles.nomal400Text }}
            >
              <PhoneNumber
                phone={providerData.phoneNumber || providerData.cellPhone}
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "flex-start",
                  pt: 0.5,
                }}
              />
            </Typography>
          </Box>
        </Stack>
      </AccountCard>
    </Box>
  );
}
