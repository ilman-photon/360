import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import { Avatar, Divider, Grid, Stack, Typography } from "@mui/material";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import AccountCard from "../../molecules/AccountCard/accountCard";
import styles from "./contactInformation.module.scss";
import { colors } from "../../../styles/theme";

import * as React from "react";
import Image from "next/image";

export default function ContactInformation(
  {
    // ...
  }
) {
  return (
    <AccountCard
      titleIcon={<PermContactCalendarOutlinedIcon />}
      title="Contact Information"
    >
      <Stack spacing={3} divider={<Divider />}>
        <LabelWithInfo label="Phone Number">(858) 183-9939</LabelWithInfo>

        <LabelWithInfo label="Email ID">donJohn@yahoo.com</LabelWithInfo>

        <LabelWithInfo label="Address">145 Stree Main, Apt 3</LabelWithInfo>

        <LabelWithInfo label="City">New Jersey</LabelWithInfo>

        <Grid container>
          <Grid item xs={6} p={0}>
            <LabelWithInfo label="State">New York</LabelWithInfo>
          </Grid>

          <Grid item xs={6} p={0}>
            <LabelWithInfo label="Zip">92099</LabelWithInfo>
          </Grid>
        </Grid>

        <LabelWithInfo label="Prefered Mode(s) of communication">
          Mobile, Email
        </LabelWithInfo>
      </Stack>
    </AccountCard>
  );
}
