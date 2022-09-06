import * as React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Divider,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { styles } from "./style";
import { useForm, Controller } from "react-hook-form";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import { StyledInput } from "../../atoms/Input/input";
import { Regex } from "../../../utils/regex";
import constants from "../../../utils/constants";
import Link from "@mui/material/Link";
import { getLinkAria } from "../../../utils/viewUtil";
import FormLabel from "@mui/material/FormLabel";
import { useRouter } from "next/router";

const DisclaimerText = (data) => {
  return (
    <FormLabel
      id="row-input-disclaimer"
      sx={{
        fontSize: 12,
        "&.Mui-focused": {
          color: "black",
        },
        paddingLeft: 2,
        display: "inline-flex",
        alignItems: "center",
        color: "#424747",
      }}
    >
      {data.label}
    </FormLabel>
  );
};

export default function AppointmentForm({
  isForMyself,
  OnClickSchedule = () => {
    // This is intentional
  },
  patientData = {},
  OnSubmit = () => {
    // This is intended
  },
  OnClickSignIn = () => {
    // This is intended
  },
}) {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: patientData,
  });

  const router = useRouter();

  const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;

  const onSubmit = (data) => {
    // this is intentional
    OnClickSchedule();
    OnSubmit(data);
  };

  const onSignIn = () => {
    OnClickSignIn();
    router.push("/patient/login");
  };

  const options = [
    {
      label: "Email",
      value: "email",
      testId: SCHEDULE_GUEST_TEST_ID.emailradio,
    },
    {
      label: "Phone",
      value: "phone",
      testId: SCHEDULE_GUEST_TEST_ID.phoneradio,
    },
    { label: "Both", value: "both", testId: SCHEDULE_GUEST_TEST_ID.bothradio },
  ];

  const [watchedEmail, watchedMobile, watchedPreferredCommunication] = watch([
    "email",
    "mobile",
    "preferredCommunication",
  ]); // you can also target specific fields by their names
  const getRegisteredUsername = () => {
    return (
      watchedEmail || watchedMobile || "(auto-populated email id/phone number)"
    );
  };

  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const isDesktop = useMediaQuery("(min-width: 769px)");

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

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Box sx={{ m: 1 }}>
          <Typography
            sx={isDesktop ? { fontSize: "26px" } : { md: "32px" }}
            aria-label={"Who is this exam for?"}
          >
            {isForMyself ? t("selfTitle") : t("someoneElseTitle")}
          </Typography>
          {isForMyself ? (
            <Grid sx={{ mt: 2, display: "flex" }}>
              <Typography sx={styles.boldLabel} variant="h1">
                {t("sigInInfo")}
              </Typography>
              <Link
                sx={styles.link}
                data-testid={SCHEDULE_GUEST_TEST_ID.signInlink}
                {...getLinkAria(t("signIn"))}
                onClick={onSignIn}
              >
                {t("signIn")}
              </Link>
            </Grid>
          ) : null}
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <Controller
            name="firstName"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  type="text"
                  id="firstName"
                  label="First Name"
                  value={value}
                  data-testid={SCHEDULE_GUEST_TEST_ID.firstname}
                  onChange={onChange}
                  error={!!error}
                  size="small"
                  variant="filled"
                  helperText={error ? error.message : null}
                  sx={
                    isDesktop
                      ? { m: 1, width: "70%" }
                      : { m: 1, pr: 1, width: "100%" }
                  }
                />
              );
            }}
            rules={{
              required: t("thisFieldRequired"),
              validate: {
                isFormat: (v) =>
                  Regex.nameValidation.test(v) || "Incorrect First Name format",
                isLength: (v) =>
                  Regex.minTwoDigitRegex.test(v) ||
                  "First Name should be greater than 2 characters",
              },
            }}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  type="text"
                  id="lastName"
                  label="Last Name"
                  data-testid={SCHEDULE_GUEST_TEST_ID.lastname}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  size="small"
                  variant="filled"
                  helperText={error ? error.message : null}
                  sx={
                    isDesktop
                      ? { m: 1, width: "70%" }
                      : { m: 1, pr: 1, width: "100%" }
                  }
                />
              );
            }}
            rules={{
              required: t("thisFieldRequired"),
              validate: {
                isFormat: (v) =>
                  Regex.nameValidation.test(v) || "Incorrect Last Name format",
                isLength: (v) =>
                  Regex.minTwoDigitRegex.test(v) ||
                  "Last Name should be greater than 2 characters",
              },
            }}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  type="text"
                  id="email"
                  label="Email"
                  value={value}
                  data-testid={SCHEDULE_GUEST_TEST_ID.email}
                  onChange={onChange}
                  error={!!error}
                  size="small"
                  variant="filled"
                  helperText={error ? error.message : null}
                  sx={
                    isDesktop
                      ? { m: 1, width: "70%" }
                      : { m: 1, pr: 1, width: "100%" }
                  }
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
                value: Regex.isEmailCorrect,
                message: "Incorrect email format",
              },
            }}
          />
          <Controller
            name="mobile"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  type="phone"
                  id="mobile"
                  data-testid={SCHEDULE_GUEST_TEST_ID.mobilenumber}
                  label="Mobile Number"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  size="small"
                  variant="filled"
                  helperText={error ? error.message : null}
                  sx={
                    isDesktop
                      ? { m: 1, width: "70%" }
                      : { m: 1, pr: 1, width: "100%" }
                  }
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
                message: "Incorrect mobile number format",
              },
            }}
          />

          <Box sx={{ width: "70%" }}>
            <Controller
              name="dob"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    disableFuture
                    type="dob"
                    id="dob"
                    data-testid={SCHEDULE_GUEST_TEST_ID.dateofbirth}
                    label="Date of Birth"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    sx={{ m: 1, width: "70%" }}
                  />
                );
              }}
              rules={{
                required: t("thisFieldRequired"),
              }}
            />
          </Box>
          <DisclaimerText label="Month, Day, Year" />

          {isForMyself ? (
            <>
              <div style={styles.divMargin}>
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
                          options={options}
                          helperText={error ? error.message : null}
                          textSx={{
                            justifyContent: "space-between",
                            color: "black",
                            fontWeight: "600",
                          }}
                          sx={{
                            width: { xs: "100%", md: "56%" },
                            m: 1,
                            justifyContent: "space-between",
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "black",
                          }}
                        />
                      </>
                    );
                  }}
                  rules={{ required: t("thisFieldRequired") }}
                />
              </div>

              <Divider sx={{ mx: 1 }} />
              <Grid sx={{ m: "24px 8px 16px" }}>
                <Typography sx={{ ...styles.boldLabel, mb: 1 }}>
                  {t("optional")}
                </Typography>
                <Typography sx={styles.passwordLabel}>
                  {t("passwordInfo")}
                </Typography>
              </Grid>

              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      id="password"
                      data-testid={SCHEDULE_GUEST_TEST_ID.password}
                      label={t("passwordLabel")}
                      type={constants.INPUT_PASSWORD}
                      size={constants.SMALL}
                      variant={constants.FILLED}
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  );
                }}
                rules={{ required: t("thisFieldRequired") }}
              />
              <DisclaimerText label="(Optional)" />

              <Divider sx={{ mt: 2, mx: 1 }} />

              <div style={styles.registeredUsernameWrapper}>
                <div>Your username will be {getRegisteredUsername()}</div>
              </div>
            </>
          ) : null}

          <div style={styles.divRight}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: { xs: "100%", md: "222px" },
                background: "#0095A9",
                mt: 2,
              }}
              style={styles.continueButton}
            >
              {t("scheduleAppoinment")}
            </Button>
          </div>
        </form>
      </Stack>
    </Stack>
  );
}
