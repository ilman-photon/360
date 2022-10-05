import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import {
  Button,
  Divider,
  Fade,
  Grid,
  Stack,
  useMediaQuery,
} from "@mui/material";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import AccountCard from "../../molecules/AccountCard/accountCard";
import styles from "./contactInformation.module.scss";
import { useForm, Controller } from "react-hook-form";
import { StyledInput } from "../../atoms/Input/input";
import { StyledButton } from "../../atoms/Button/button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { colors } from "../../../styles/theme";
import { startTransition, Suspense, useEffect } from "react";
import { Regex } from "../../../utils/regex";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
import dynamic from "next/dynamic";
import { StyledSelect } from "../../atoms/Select/select";

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
  usStatesList = [],
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
        if (watchedPreferredCommunication == "phone") return true;
        else if (watchedPreferredCommunication == "email" && !value)
          return false;
        else if (watchedEmail || watchedMobile) return true;
        break;
      case "phone":
        if (watchedPreferredCommunication == "email") return true;
        else if (watchedPreferredCommunication == "phone" && !value)
          return false;
        else if (watchedEmail || watchedMobile) return true;
        break;
      default:
        return false;
    }
  };

  useEffect(() => {
    if (userData) reset(userData);
  }, [userData, reset]);

  const handleCancel = () => {
    reset(userData);
    OnCancelEditClicked();
  };

  const onSubmit = (data) => {
    OnSaveClicked(data);
  };

  const invalidChars = ["e", "-", "+"];
  const buttonWidth = isDesktop ? {} : { width: "100%" };

  return (
    <AccountCard
      tabIndex={0}
      title="Contact Information"
      titleIcon={<PermContactCalendarOutlinedIcon />}
      isEditing={isEditing}
      textStyle={{
        fontWeight: "700",
      }}
      // OnEditClicked={OnEditClicked}
      actionContent={
        isDesktop ? (
          <Button
            onClick={OnEditClicked}
            variant="text"
            className={styles.editButton}
            tabIndex={0}
            aria-label="Edit option"
          >
            <EditOutlinedIcon
              sx={{ width: 20, height: 20, color: colors.link }}
            />
            <div
              className={styles.actionText}
              style={{ marginLeft: 4, color: "#008294" }}
              tabIndex={0}
              aria-label="Edit option"
            >
              Edit
            </div>
          </Button>
        ) : (
          <StyledButton
            mode="primary"
            size="small"
            onClick={OnEditClicked}
            sx={{ my: 4 }}
            tabIndex={0}
            aria-label="Edit option"
          >
            Edit
          </StyledButton>
        )
      }
      label={"Contact Information heading"}
      ariaLabel={"Contact Information heading"}
    >
      <Fade in={!isEditing} unmountOnExit sx={{ fontFamily: "Libre Franklin" }}>
        <Stack spacing={3} divider={<Divider />}>
          <LabelWithInfo
            tabIndex={0}
            ariaLabel="Phone Number"
            label="Phone Number"
          >
            <div
              tabIndex={0}
              aria-label={
                userData.mobile ? formatPhoneNumber(userData.mobile) : ""
              }
            >
              {userData.mobile ? formatPhoneNumber(userData.mobile) : ""}
            </div>
          </LabelWithInfo>

          <LabelWithInfo tabIndex={0} ariaLabel="Email ID" label="Email ID">
            <div tabIndex={0} aria-label={userData.email || "-"}>
              {userData.email || "-"}
            </div>
          </LabelWithInfo>

          <LabelWithInfo tabIndex={0} ariaLabel="Address" label="Address">
            <div tabIndex={0} aria-label={userData.address || "-"}>
              {userData.address || "-"}
            </div>
          </LabelWithInfo>

          <LabelWithInfo tabIndex={0} ariaLabel="City" label="City">
            <div tabIndex={0} aria-label={userData.city || "-"}>
              {userData.city || "-"}
            </div>
          </LabelWithInfo>

          <Grid container>
            <Grid item xs={6} sm={4} lg={6} p={0}>
              <LabelWithInfo tabIndex={0} ariaLabel="State" label="State">
                <div tabIndex={0} aria-label={userData.state || "-"}>
                  {userData.state || "-"}
                </div>
              </LabelWithInfo>
            </Grid>

            <Grid item xs={6} sm={4} lg={6} p={0}>
              <LabelWithInfo label="Zip" tabIndex={0} ariaLabel="Zip">
                <div tabIndex={0} aria-label={userData.zip || "-"}>
                  {userData.zip || "-"}
                </div>
              </LabelWithInfo>
            </Grid>
          </Grid>

          <LabelWithInfo
            tabIndex={0}
            ariaLabel={"Prefered Mode(s) of communication"}
            label="Prefered Mode(s) of communication"
          >
            <span style={{ textTransform: "capitalize" }}>
              <div
                tabIndex={0}
                aria-label={
                  userData.preferredCommunication === "both"
                    ? "Mobile, Email"
                    : userData.preferredCommunication || "-"
                }
              >
                {userData.preferredCommunication === "both"
                  ? "Mobile, Email"
                  : userData.preferredCommunication || "-"}
              </div>
            </span>
          </LabelWithInfo>
        </Stack>
      </Fade>
      <Fade in={isEditing} unmountOnExit>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} divider={<Divider />}>
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
                    label="Phone Number"
                    inputProps={{
                      "aria-label": "Phone Number field",
                    }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    xs={{ margin: 0 }}
                    sx={{
                      ".MuiFilledInput-root": {
                        backgroundColor: "#FFF",
                      },
                    }}
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
                    label="Email ID"
                    inputProps={{
                      "aria-label": "Email ID field",
                    }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    sx={{
                      ".MuiFilledInput-root": {
                        backgroundColor: "#FFF",
                      },
                    }}
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
                  value: Regex.emailValidation,
                  message: "Incorrect format",
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
                        sx={{
                          width: "100%",
                          ".MuiFilledInput-root": {
                            backgroundColor: "#FFF",
                          },
                        }}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
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
                    inputProps={{
                      "aria-label": "City field",
                    }}
                    autoComplete="address-level2"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    sx={{
                      ".MuiFilledInput-root": {
                        backgroundColor: "#FFF",
                      },
                    }}
                  />
                );
              }}
            />

            <Grid container columnSpacing={2}>
              <Grid item xs={isDesktop ? 7 : 5.5} style={{ paddingLeft: 0 }}>
                <Controller
                  name="state"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledSelect
                        id="state"
                        label="State"
                        inputProps={{
                          "aria-label": "State drop down menu",
                        }}
                        autoComplete="address-level1"
                        options={usStatesList}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        sx={{
                          width: "100%",
                          "&.MuiFormControl-root": {
                            m: 0,
                          },

                          ".MuiFilledInput-root": {
                            backgroundColor: "#FFF",
                          },
                        }}
                      />
                    );
                  }}
                />
              </Grid>

              <Grid item xs={isDesktop ? 4.5 : 6} p={0}>
                <Controller
                  name="zip"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="number"
                        onKeyDown={(e) => {
                          if (invalidChars.includes(e.key)) e.preventDefault();
                        }}
                        id="zip"
                        label="Zip"
                        inputProps={{
                          "aria-label": "Zip field",
                        }}
                        autoComplete="postal-code"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                        sx={{
                          "&.MuiFormControl-root": {
                            height: "100%",
                          },
                          ".MuiFilledInput-root": {
                            height: "100%",
                            backgroundColor: "#FFF",
                          },
                        }}
                      />
                    );
                  }}
                  rules={{
                    pattern: {
                      value: /^\s?\d{5}\s?$/,
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
                      label="Preferred mode(s) of Communication"
                      options={communicationOptions}
                      helperText={error ? error.message : null}
                      textSx={{ justifyContent: "space-between" }}
                      isCancelSchedule={true}
                    />
                  </>
                );
              }}
              rules={{ required: "This field is required" }}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent={isDesktop ? "flex-end" : "space-between"}
            spacing={2}
            sx={{ p: 2, mt: 2 }}
          >
            <Button
              onClick={handleCancel}
              variant="contained"
              className={[styles.formButton, styles.outlined].join(" ")}
              sx={buttonWidth}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className={[styles.formButton, styles.primary].join(" ")}
              sx={buttonWidth}
            >
              Save
            </Button>
          </Stack>
        </form>
      </Fade>
    </AccountCard>
  );
}
