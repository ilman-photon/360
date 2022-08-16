import { Button, Divider, Fade, Grid, Stack, Typography } from "@mui/material";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import styles from "./insuranceInformationNew.module.scss";
import { useForm } from "react-hook-form";
import { colors } from "../../../styles/theme";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import Image from "next/image";

export default function InsuranceForm({
  userData = {},
  isEditing = false,
  OnEditClicked = () => {
    // This is intentional
  },
  OnCancelEditClicked = () => {
    // This is intentional
  },
}) {
  const handleCancel = () => {
    reset(userData);
    OnCancelEditClicked();
  };

  const { control, watch, reset } = useForm({
    defaultValues: userData.userData,
  });

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
            <LabelWithInfo label="Insurance Provider">
              {userData.insuranceProvider}
            </LabelWithInfo>
          </Grid>

          <Grid item xs={4} p={0}>
            <LabelWithInfo label="Plan Name">{userData.planName}</LabelWithInfo>
          </Grid>

          <Grid item xs={4} p={0}>
            <LabelWithInfo label="Subscriber ID/Member ID">
              {userData.subscriberMember}
            </LabelWithInfo>
          </Grid>
        </Grid>

        <LabelWithInfo label="Group #">{userData.groupId}</LabelWithInfo>

        <div>
          <Typography variant="h3" sx={{ pb: 2, color: colors.black }}>
            Policy Holder
          </Typography>

          <LabelWithInfo label="Are you the  Subscriber?">
            {userData.isSubscriber}
          </LabelWithInfo>
        </div>

        <Grid container>
          <Grid item xs={4} p={0}>
            <LabelWithInfo label="First Name">
              {userData.firstName}
            </LabelWithInfo>
          </Grid>

          <Grid item xs={4} p={0}>
            <LabelWithInfo label="Last Name">{userData.lastName}</LabelWithInfo>
          </Grid>

          <Grid item xs={4} p={0}>
            <LabelWithInfo label="Date of Birth">
              {new Date(userData.dob).toLocaleDateString()}
            </LabelWithInfo>
          </Grid>
        </Grid>

        <LabelWithInfo label="Relationship">
          {userData.relationship}
        </LabelWithInfo>

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

        <LabelWithInfo label="Insurance Priority">
          {userData.primary}
        </LabelWithInfo>

        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={2}
          sx={{ alignSelf: "flex-end", p: 2, mt: 2 }}
        >
          <Button
            onClick={handleCancel}
            variant="text"
            className={[styles.formButton, styles.outlined].join(" ")}
          >
            <DeleteOutlineIcon sx={{ width: 18, height: 18 }} />
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
