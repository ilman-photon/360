import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import {
  Avatar,
  Button,
  Divider,
  Fade,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import AccountCard from "../../molecules/AccountCard/accountCard";
import styles from "./insuranceInformationNew.module.scss";
import { useForm, Controller } from "react-hook-form";
import { StyledInput } from "../../atoms/Input/input";
import { colors } from "../../../styles/theme";

import * as React from "react";
import Image from "next/image";
import { Regex } from "../../../utils/regex";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";

export default function InsuranceFormNew({
  isEditing = false,
  OnSaveClicked = () => {
    // This is intended
  },
  OnCancelEditClicked = () => {
    // This is intended
  },
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

  const isOneOfPreferredValid = (name, value) => {
    switch (name) {
      case "email":
        if (watchedPreferredCommunication === "phone") return true;
        else if (watchedPreferredCommunication === "email" && !value)
          return false;
        else if (watchedEmail || watchedMobile) return true;
        break;
      case "phone":
        if (watchedPreferredCommunication === "email") return true;
        else if (watchedPreferredCommunication === "phone" && !value)
          return false;
        else if (watchedEmail || watchedMobile) return true;
        break;
      default:
        return false;
    }
  };

  const handleCancel = () => {
    reset(DEFAULT_CONTACT_INFO);
    OnCancelEditClicked();
  };

  const onSubmit = (data) => {
    OnSaveClicked(data);
  };

  return (
    <AccountCard
      titleIcon={<PermContactCalendarOutlinedIcon />}
      title="Insurance Documents"
      OnAddInsurance={true}
    >
      <Fade in={!isEditing} unmountOnExit>
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
      </Fade>

      <Fade in={isEditing} unmountOnExit>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <hr />

            <Typography
              variant="h3"
              sx={{ pb: 2, color: colors.black }}
              tooltipContent="Test"
            >
              Policy Holder
            </Typography>

            <Controller
              name="isSubscriber"
              control={control}
              tooltipContent="Test"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <>
                    <RowRadioButtonsGroup
                      error={!!error}
                      value={value}
                      onChange={onChange}
                      label="Are you the Subscriber?"
                      options={priorityOptions}
                      helperText={error ? error.message : null}
                      tooltipContent="Test"
                    />
                  </>
                );
              }}
              rules={{ required: "This field is required" }}
            />

            <Typography variant="bodyRegular" sx={{ pb: 3 }} component="div">
              Enter the subscriber’s details
            </Typography>

            <Grid container columnSpacing={2} style={{ width: "fit-content" }}>
              <Grid item xs={6} style={{ paddingLeft: 0 }}>
                <Controller
                  name="firstName"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="text"
                        id="firstName"
                        label="Subscriber First Name"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                        sx={{ width: "358px" }}
                      />
                    );
                  }}
                  rules={{ required: "This field is required" }}
                />
              </Grid>

              <Grid item xs={6} p={0}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="text"
                        id="lastName"
                        label="Subscriber Last Name"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                        sx={{ width: "358px" }}
                      />
                    );
                  }}
                  rules={{ required: "This field is required" }}
                />
              </Grid>
            </Grid>

            <Controller
              name="dob"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="dob"
                    id="dob"
                    label="Subscriber Date of Birth"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    sx={{ width: "358px" }}
                  />
                );
              }}
            />

            <Controller
              name="relationship"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="text"
                    id="relationship"
                    label="Relationship"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    sx={{ width: "358px" }}
                  />
                );
              }}
            />

            <hr />
            <Typography variant="bodyRegular" sx={{ pb: 3 }} component="div">
              Upload images of your insurance.
            </Typography>
            <hr />

            <Controller
              name="insurancePriority"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <>
                    <RowRadioButtonsGroup
                      error={!!error}
                      value={value}
                      onChange={onChange}
                      label="Insurance Priority"
                      options={priorityOptions}
                      helperText={error ? error.message : null}
                      tooltipContent="Test"
                    />
                  </>
                );
              }}
              rules={{ required: "This field is required" }}
            />

            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button
                onClick={handleCancel}
                variant="contained"
                className={[styles.formButton, styles.outlined].join(" ")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                className={[styles.formButton, styles.primary].join(" ")}
              >
                Save
              </Button>
            </Stack>
          </Stack>
        </form>
      </Fade>
    </AccountCard>
  );
}
