import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import {
  Avatar,
  Button,
  Divider,
  Fade,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import AccountCard from "../../molecules/AccountCard/accountCard";
import styles from "./contactInformation.module.scss";
import { useForm, Controller } from "react-hook-form";
import { StyledInput } from "../../atoms/Input/input";
import { StyledButton } from "../../atoms/Button/button";
import { colors } from "../../../styles/theme";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { startTransition, Suspense, useCallback, useEffect } from "react";
import Image from "next/image";
import { Regex } from "../../../utils/regex";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
// import { AddressAutofill } from '@mapbox/search-js-react';
import dynamic from "next/dynamic";

let ClientAddressAutofill;

startTransition(async () => {
  ClientAddressAutofill = await dynamic(
    () => import("@mapbox/search-js-react").then((mod) => mod.AddressAutofill),
    { ssr: false }
  );

  ClientAddressAutofill.accessToken = process.env.MAPBOX_API_TOKEN;
});

export default function ContactInformation({
  autoFillAPIToken = "",
  userData = {},
  isEditing = true,
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
  const { handleSubmit, control, watch, reset } = useForm({
    // defaultValues: DEFAULT_CONTACT_INFO,
    defaultValues: userData, // Object.assign({}, userData),
  });

  const isDesktop = useMediaQuery("(min-width: 769px)");

  const communicationOptions = [
    { label: "Email", value: "email" },
    { label: "Phone", value: "phone" },
    { label: "Both", value: "both" },
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

  useEffect(() => {
    if (userData) reset(userData);
  }, [userData]);

  const handleCancel = () => {
    reset(userData);
    OnCancelEditClicked();
  };

  const onSubmit = (data) => {
    console.log({ data });
    OnSaveClicked(data);
  };

  return (
    <AccountCard
      titleIcon={<PermContactCalendarOutlinedIcon />}
      title="Contact Information"
      isEditing={isEditing}
      // OnEditClicked={OnEditClicked}
      actionContent={
        isDesktop ? (
          <Button
            onClick={OnEditClicked}
            variant="text"
            className={styles.editButton}
          >
            <EditOutlinedIcon sx={{ width: 20, height: 20 }} />
            <div type="link" style={{ marginLeft: 4 }}>
              Edit
            </div>
          </Button>
        ) : (
          <StyledButton
            mode="primary"
            size="small"
            onClick={OnEditClicked}
            sx={{ my: 4 }}
          >
            Edit
          </StyledButton>
        )
      }
    >
      <Fade in={!isEditing} unmountOnExit>
        <Stack spacing={3} divider={<Divider />}>
          <LabelWithInfo label="Phone Number">
            {userData.mobile ? formatPhoneNumber(userData.mobile) : ""}
          </LabelWithInfo>

          <LabelWithInfo label="Email ID">
            {userData.email || "-"}
          </LabelWithInfo>

          <LabelWithInfo label="Address">
            {userData.address || "-"}
          </LabelWithInfo>

          <LabelWithInfo label="City">{userData.city || "-"}</LabelWithInfo>

          <Grid container>
            <Grid item xs={6} p={0}>
              <LabelWithInfo label="State">
                {userData.state || "-"}
              </LabelWithInfo>
            </Grid>

            <Grid item xs={6} p={0}>
              <LabelWithInfo label="Zip">{userData.zip || "-"}</LabelWithInfo>
            </Grid>
          </Grid>

          <LabelWithInfo label="Prefered Mode(s) of communication">
            <span style={{ textTransform: "capitalize" }}>
              {userData.preferredCommunication === "both"
                ? "Mobile,Email"
                : userData.preferredCommunication || "-"}
            </span>
          </LabelWithInfo>
        </Stack>
      </Fade>
      <Fade in={isEditing} unmountOnExit>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} divider={<Divider />}>
            <Controller
              name="mobile"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="phone"
                    id="mobile"
                    label="Mobile Number"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    xs={{ margin: 0 }}
                  />
                );
              }}
              rules={{
                validate: {
                  required: (value) => {
                    if (!isOneOfPreferredValid("phone", value))
                      return "Email ID or Mobile Number is required";
                  },
                },
                pattern: {
                  value: Regex.isValidPhoneFormat,
                  message: "Incorrect format",
                },
              }}
            />
            <Controller
              name="email"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="text"
                    id="email"
                    label="Email"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                  />
                );
              }}
              rules={{
                validate: {
                  required: (value) => {
                    if (!isOneOfPreferredValid("email", value))
                      return "Email ID or Mobile Number is required";
                  },
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
                  message: "Incorrect email format",
                },
              }}
            />

            <Suspense fallback={`Loading...`}>
              <ClientAddressAutofill accessToken={autoFillAPIToken}>
                <Controller
                  name="address"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="text"
                        id="address"
                        label="Address"
                        autoComplete="address-line1"
                        placeholder="Start typing your address, e.g. 123 United States..."
                        sx={{ width: "100%" }}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                  rules={
                    {
                      // required: "This field is required",
                      // pattern: {
                      //   value: Regex.isValidPhoneFormat,
                      //   message: "Incorrect format",
                      // },
                    }
                  }
                />
              </ClientAddressAutofill>
            </Suspense>

            <Controller
              name="city"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="text"
                    id="city"
                    label="City"
                    autoComplete="address-level2"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                  />
                );
              }}
              rules={
                {
                  // required: "This field is required",
                  // pattern: {
                  //   value: Regex.isValidPhoneFormat,
                  //   message: "Incorrect format",
                  // },
                }
              }
            />

            <Grid container columnSpacing={2}>
              <Grid item xs={8} style={{ paddingLeft: 0 }}>
                <Controller
                  name="state"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="text"
                        id="state"
                        label="State"
                        autoComplete="address-level1"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                        sx={{ width: "100%" }}
                      />
                    );
                  }}
                  rules={
                    {
                      // required: "This field is required",
                      // pattern: {
                      //   value: Regex.isValidPhoneFormat,
                      //   message: "Incorrect format",
                      // },
                    }
                  }
                />
              </Grid>

              <Grid item xs={4} p={0}>
                <Controller
                  name="zip"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="text"
                        id="zip"
                        label="Zip"
                        autoComplete="postal-code"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                  rules={{
                    // required: "This field is required",
                    pattern: {
                      value: /\b\d{5}\b/g,
                      message: "Incorrect format",
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Controller
              name="preferredCommunication"
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
                      label="Preferred mode of Communication"
                      options={communicationOptions}
                      helperText={error ? error.message : null}
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
