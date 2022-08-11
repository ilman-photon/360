import {
  Button,
  Divider,
  Fade,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import styles from "./insuranceInformationNew.module.scss";
import { useForm } from "react-hook-form";
import { colors } from "../../../styles/theme";
import AccountCard from "../../molecules/AccountCard/accountCard";

import * as React from "react";
import Image from "next/image";

export default function InsuranceForm({
  isEditing = true,
  OnEditClicked = () => {
    // This is intended
  },
}) {
  const DEFAULT_CONTACT_INFO = {
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    preferredCommunication: "both",
  };

  const { handleSubmit, control, watch, reset } = useForm({
    defaultValues: DEFAULT_CONTACT_INFO,
  });

  const priorityOptions = [
    { label: "Primary", value: "Primary" },
    { label: "Secondary", value: "Secondary" },
    { label: "Tertiary", value: "Tertiary" },
  ];

  const [watchedEmail, watchedMobile, watchedPreferredCommunication] = watch([
    "email",
    "mobile",
    "preferredCommunication",
  ]);

  const handleCancel = () => {
    reset(DEFAULT_CONTACT_INFO);
    OnCancelEditClicked();
  };

  const onSubmit = (data) => {
    OnSaveClicked(data);
  };

  return (
    <Fade in={!isEditing} unmountOnExit>
      {/* <AccountCard
      // titleIcon={<PermContactCalendarOutlinedIcon />}
      title="Primary"
      // OnAddInsurance={true}
    > */}
        <Stack spacing={3} divider={<Divider />}>
          <Grid container>
            <Grid item xs={4} p={0}>
              <LabelWithInfo label="Insurance Provider">Aetna</LabelWithInfo>
            </Grid>

            <Grid item xs={4} p={0}>
              <LabelWithInfo label="Plan Name">Southern</LabelWithInfo>
            </Grid>

            <Grid item xs={4} p={0}>
              <LabelWithInfo label="Subscriber ID/Member ID">
                Southern
              </LabelWithInfo>
            </Grid>
          </Grid>

          <LabelWithInfo label="Group #">12321</LabelWithInfo>

          <div>
            <Typography variant="h3" sx={{ pb: 2, color: colors.black }}>
              Policy Holder
            </Typography>

            <LabelWithInfo label="Are you the  Subscriber?">No</LabelWithInfo>
          </div>

          <Grid container>
            <Grid item xs={4} p={0}>
              <LabelWithInfo label="First Name">Aetna</LabelWithInfo>
            </Grid>

            <Grid item xs={4} p={0}>
              <LabelWithInfo label="Last Name">Southern</LabelWithInfo>
            </Grid>

            <Grid item xs={4} p={0}>
              <LabelWithInfo label="Date of Birth">01/01/1980</LabelWithInfo>
            </Grid>
          </Grid>

          <LabelWithInfo label="Relationship">---</LabelWithInfo>

          <div>
            <Typography variant="bodyRegular" sx={{ pb: 3 }} component="div">
              Upload images of your insurance.
            </Typography>

            <Grid container>
              <Grid item xs={4} p={0}>
                <Image width="100%" height={183} src="/login-bg.png" alt="" />
              </Grid>

              <Grid item xs={4} p={0}>
                <Image width="100%" height={183} src="/login-bg.png" alt="" />
              </Grid>
            </Grid>
          </div>

          <LabelWithInfo label="Insurance Priority">Primary</LabelWithInfo>

          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button
              onClick={handleCancel}
              variant="contained"
              className={[styles.formButton, styles.outlined].join(" ")}
            >
              Remove Insurance
            </Button>
            <Button
              type="submit"
              variant="contained"
              className={[styles.formButton, styles.primary].join(" ")}
              onClick={OnEditClicked}
            >
              Edit
            </Button>
          </Stack>
        </Stack>
        {/* </AccountCard> */}
      </Fade>

  );
}
