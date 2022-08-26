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

export default function SomeoneElseForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: null,
      email: "",
      mobile: "",
      password: "",
      preferredCommunication: "both",
    },
  });
  const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;

  const onSubmit = () => {
    // this is intentional
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

  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const isDesktop = useMediaQuery("(min-width: 769px)");

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Box sx={{ m: 1 }}>
          <Typography
            sx={isDesktop ? { fontSize: "32px" } : { fontSize: "26px" }}
            aria-label={"Who is this exam for?"}
          >
            {t("guestTitle")}
          </Typography>
          <Grid sx={{ mt: 2, display: "flex" }}>
            <Typography sx={styles.boldLabel} variant="h1">
              {t("sigInInfo")}
            </Typography>
            <Link
              sx={styles.link}
              data-testid={SCHEDULE_GUEST_TEST_ID.signInlink}
              {...getLinkAria(t("signIn"))}
            >
              {t("signIn")}
            </Link>
          </Grid>
        </Box>

        {/* <Divider /> */}

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
              pattern: {
                value: Regex.noSpecialRegex,
                message: "Incorrect format",
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
              pattern: {
                value: Regex.noSpecialRegex,
                message: "Incorrect format",
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

          <Box sx={isDesktop ? { width: "70%" } : { pr: 1, width: "100%" }}>
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
                    sx={{ width: "100%" }}
                  />
                );
              }}
              rules={{
                required: t("thisFieldRequired"),
                pattern: {
                  value: Regex.specialRegex,
                  message: "Incorrect email format",
                },
              }}
            />
          </Box>
          <DisclaimerText label="Month, Day, Year" />

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
                      textSx={{ justifyContent: "space-between" }}
                      sx={{
                        m: 1,
                        width: "56%",
                        justifyContent: "space-between",
                      }}
                    />
                  </>
                );
              }}
              rules={{ required: t("thisFieldRequired") }}
            />
          </div>

          <Divider sx={{ mx: 1 }} />

          <div style={styles.divRight}>
            <Button
              variant="contained"
              sx={{
                width: { xs: "222px", md: "100%" },
                background: "#0095A9",
                mt: 2,
              }}
              style={styles.continueText}
            >
              {t("scheduleAppoinment")}
            </Button>
          </div>
        </form>
      </Stack>
    </Stack>
  );
}
