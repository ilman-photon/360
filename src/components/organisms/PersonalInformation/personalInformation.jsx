import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Avatar, Divider, Stack, Typography } from "@mui/material";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import AccountCard from "../../molecules/AccountCard/accountCard";
import styles from "./personalInformation.module.scss";
import { colors } from "../../../styles/theme";

import * as React from "react";
import Image from "next/image";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function PersonalInformation(
  {
    // ...
  }
) {
  return (
    <AccountCard
      titleIcon={<AccountCircleOutlinedIcon />}
      title="Personal Information"
    >
      <Stack spacing={3} divider={<Divider />}>
        <LabelWithInfo label="Photo">
          <Avatar
            {...stringAvatar("Remy Sharp")}
            sx={{ width: 122, height: 122, border: "solid 1px black" }}
          ></Avatar>
        </LabelWithInfo>

        <LabelWithInfo label="Name" tooltipContent="Test">
          John Doe
        </LabelWithInfo>

        <LabelWithInfo label="Preferred Name">---</LabelWithInfo>

        <LabelWithInfo label="Title">Mr</LabelWithInfo>

        <LabelWithInfo label="Date of Birth" tooltipContent="Test">
          01/10/1987
        </LabelWithInfo>

        <LabelWithInfo label="Age" tooltipContent="Test">
          49
        </LabelWithInfo>

        <LabelWithInfo label="Gender">Male</LabelWithInfo>

        <LabelWithInfo label="SSN" tooltipContent="Test">
          ***-***-1989
        </LabelWithInfo>

        <div>
          <Typography variant="h3" sx={{ pb: 2, color: colors.black }}>
            State Issued ID
          </Typography>
          <Typography variant="bodyRegular" sx={{ pb: 3 }} component="div">
            Please upload a photo of government-issued ID, such as Driver’s
            License or State-issued ID.
          </Typography>

          <Stack spacing={6}>
            <LabelWithInfo
              label="Front Card"
              helperText="JPG or PNG file formats only. (File size limit is 4 MB)"
            >
              <div className={styles.issuedCardContainer}>
                <Image width="100%" height={183} src="/login-bg.png" alt="" />
              </div>
            </LabelWithInfo>
            <LabelWithInfo
              label="Back Card"
              helperText="JPG or PNG file formats only. (File size limit is 4 MB)"
            >
              <div className={styles.issuedCardContainer}>
                <Image width="100%" height={183} src="/login-bg.png" alt="" />
              </div>
            </LabelWithInfo>
          </Stack>
        </div>
      </Stack>
    </AccountCard>
  );
}
