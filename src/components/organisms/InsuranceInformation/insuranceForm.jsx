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
import SelectOptionButton from "../../atoms/SelectOptionButton/selectOptionButton";

export default function InsuranceForm({
  isEditing = true,
  OnSaveClicked = () => {
    // This is intended
  },
  OnCancelEditClicked = () => {
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

  const relationshipList = [
      "Single",
      "Double"
  ]

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
    <Fade in={isEditing} unmountOnExit>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
          <Grid container>
            <Grid item xs={4} pr={2}>
            <Controller
              name="insuranceProvider"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                    <SelectOptionButton
                    sx={{
                      "& .MuiFilledInput-root": {
                        border: "1px solid #bbb",
                        backgroundColor: "#fff",
                        fontSize: "16px",
                      },
                    }}
                    label="Insurance Provider"
                    labelId="Insurance-Provider-Id"
                    id="Insurance-Provider-Id"
                    options={relationshipList}
                    value={value}
                    onChange={(event) => {
                      onChange(event);
                    }}
                  />
                );
              }}
              rules={{ required: "This field is required" }}
            />
            </Grid>

            <Grid item xs={4} pr={2}>
            <Controller
              name="planName"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                    <SelectOptionButton
                    sx={{
                      "& .MuiFilledInput-root": {
                        border: "1px solid #bbb",
                        backgroundColor: "#fff",
                        fontSize: "16px",
                      },
                    }}
                    label="Plan Name"
                    labelId="Plan-Name-Id"
                    id="Plan-Name-Id"
                    options={relationshipList}
                    value={value}
                    onChange={(event) => {
                      onChange(event);
                    }}
                  />
                );
              }}
            />
            </Grid>

            <Grid item xs={4} pr={2}>
            <Controller
              name="subscriberMember"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                    <SelectOptionButton
                    sx={{
                      "& .MuiFilledInput-root": {
                        border: "1px solid #bbb",
                        backgroundColor: "#fff",
                        fontSize: "16px",
                      },
                    }}
                    label="Insurance Subscriber ID/ Member ID"
                    labelId="Subscriber-Member-Id"
                    id="Subscriber-Member-Id"
                    options={relationshipList}
                    value={value}
                    onChange={(event) => {
                      onChange(event);
                    }}
                  />
                );
              }}
              rules={{ required: "This field is required" }}
            />
            </Grid>
          </Grid>

          <Grid></Grid>
          <Grid item xs={4}>
          <Controller
                  name="group"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="text"
                        id="group"
                        label="Group #"
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
                <Grid item xs={4} pr={2}></Grid>
                <Grid item xs={4} pr={2}></Grid>

          </Grid>

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
              rules={{ required: "This field is required" }}
            />

            <Controller
              name="relationship"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                    <SelectOptionButton
                    sx={{
                      "& .MuiFilledInput-root": {
                        border: "1px solid #bbb",
                        backgroundColor: "#fff",
                        fontSize: "16px",
                      },
                    }}
                    label="Relationship"
                    labelId="Relationship-Id"
                    id="Relationship-Id"
                    options={relationshipList}
                    value={value}
                    onChange={(event) => {
                      onChange(event);
                    }}
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
  );
}
