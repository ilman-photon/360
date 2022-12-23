import * as React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { styles } from "./style";
import { useForm, Controller, useFormState } from "react-hook-form";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import { StyledInput } from "../../atoms/Input/input";
import { Regex } from "../../../utils/regex";
import constants from "../../../utils/constants";
import Link from "@mui/material/Link";
import { getLinkAria } from "../../../utils/viewUtil";
import FormLabel from "@mui/material/FormLabel";
import { useRouter } from "next/router";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { PasswordValidator } from "../../molecules/PasswordValidator/passwordValidator";
import { colors } from "../../../styles/theme";

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
        fontFamily: "Libre Franklin",
      }}
    >
      {data.label}
    </FormLabel>
  );
};

export const isDOB = (value) => {
  let date = new Date().getFullYear();

  if (value.getYear() < 0) {
    return false;
  }
  if (value.getFullYear() <= date) {
    return true;
  }
  return value.getMonth() <= 12;
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
  formMessage = null,
}) {
  const { handleSubmit, control, watch, setValue } = useForm({
    defaultValues: patientData,
  });
  const [open, setOpen] = React.useState(false);

  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const mobileRef = React.useRef(null);
  const dobRef = React.useRef(null);
  const { errors, isSubmitting } = useFormState({
    control,
  });

  React.useEffect(() => {
    console.log(errors);
    if (errors.firstName) {
      firstNameRef.current?.focus();
    } else if (errors.lastName) {
      lastNameRef.current?.focus();
    } else if (errors.email) {
      emailRef.current?.focus();
    } else if (errors.mobile) {
      mobileRef.current?.focus();
    } else if (errors.dob) {
      dobRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  const router = useRouter();

  const { SCHEDULE_GUEST_TEST_ID } = constants.TEST_ID;
  const validatePassword = (errors1 = [], errors2 = []) => {
    return errors1.length === 0 && errors2.length <= 1;
  };

  const onSubmit = (data) => {
    OnClickSchedule(data);
    OnSubmit(data);
  };

  const onLogin = () => {
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

  const watchedPassword = watch("password", "");
  const [watchedEmail, watchedMobile, watchedPreferredCommunication] = watch([
    "email",
    "mobile",
    "preferredCommunication",
    "password",
  ]); // you can also target specific fields by their names
  const getRegisteredUsername = () => {
    return (
      watchedEmail || watchedMobile || "(auto-populated email id/phone number)"
    );
  };

  const passwordValidator = [
    {
      label: "Length: 8-20 characters",
      validate: !Regex.lengthRegex.test(watchedPassword),
      mandatory: true,
    },
    {
      label: "Contain at least 3 out of 4 types of characters below:",
      passesValidation: 3,
      text: true,
      children: [
        {
          label: "At least One Numeric",
          validate: Regex.numberRegex.test(watchedPassword),
        },
        {
          label: "At least One Upper case Alpha",
          validate: Regex.upperCaseRegex.test(watchedPassword),
        },
        {
          label: "At least One Lower case Alpha",
          validate: Regex.lowerCaseRegex.test(watchedPassword),
        },
        {
          label: "At least One Special character (no spaces)",
          validate: Regex.specialRegex.test(watchedPassword),
        },
      ],
    },
    {
      label: "Password should not contain your username",
      validate: watchedPassword?.indexOf(watchedEmail || watchedMobile) > -1,
      mandatory: true,
    },
    {
      label: "New password must not match current password",
      validate: false,
    },
  ];
  const isPasswordError = watchedPassword?.length > 0; // && passwordValidator.filter(v => v.validate).length > 0

  const { t, ready } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const isDesktop = useMediaQuery("(min-width: 769px)");

  const is3of4 = (pass) => {
    let passes = 0;
    if (Regex.alphabethRegex.test(pass)) {
      ++passes;
    }
    if (Regex.specialRegex.test(pass)) {
      ++passes;
    }
    if (pass.indexOf(watchedEmail || watchedMobile) > -1) {
      ++passes;
    }
    if (!Regex.hasTripleRegex.test(pass)) {
      ++passes;
    }
    return passes >= 3 ? true : false;
  };

  const getTitleStyle = () => {
    if (isForMyself) {
      return isDesktop
        ? {
            fontSize: "32px",
            fontFamily: "Bw Nista Geometric DEMO",
            fontWeight: "500",
          }
        : {
            fontSize: "26px",
            fontFamily: "Bw Nista Geometric DEMO",
          };
    } else {
      return {
        fontSize: isDesktop ? "26px" : "22px",
        fontFamily: "Inter",
        fontWeight: "500",
      };
    }
  };

  const formMessageComp = React.useRef(null);
  React.useEffect(() => {
    if (formMessageComp.current)
      formMessageComp.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  }, [formMessage]);

  React.useEffect(() => {
    const isMobileInputEmpty = watchedMobile == "(" || !watchedMobile;
    if (watchedEmail && isMobileInputEmpty) {
      setValue("preferredCommunication", "email");
    } else if (!watchedEmail && !isMobileInputEmpty) {
      setValue("preferredCommunication", "phone");
    } else {
      setValue("preferredCommunication", "both");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedEmail, watchedMobile]);

  return (
    <>
      {ready && (
        <Stack spacing={2}>
          {/* <Stack spacing={2}> */}
          <Box sx={{ m: 1 }}>
            <Typography
              sx={getTitleStyle()}
              tabIndex={0}
              aria-label={
                isForMyself
                  ? `${t("selfTitle")} title`
                  : `${t("someoneElseTitle")} title`
              }
              aria-roledescription=""
            >
              {isForMyself ? t("selfTitle") : t("someoneElseTitle")}
            </Typography>

            {formMessage?.content ? (
              <FormMessage
                ref={formMessageComp}
                success={formMessage.success}
                title={formMessage.title}
                isBackToLogin={formMessage.isBackToLogin}
                isSchedule
                sx={{
                  width: "71%",
                }}
              >
                {formMessage.content}
              </FormMessage>
            ) : (
              ""
            )}
            {isForMyself ? (
              <Box sx={{ mt: 2, display: "flex" }}>
                <Typography
                  sx={styles.signInInfoLabel}
                  tabIndex={0}
                  aria-label={`${t("sigInInfo")}`}
                  aria-roledescription=""
                  variant="h1"
                >
                  {t("sigInInfo")}
                </Typography>
                <Link
                  sx={styles.link}
                  data-testid={SCHEDULE_GUEST_TEST_ID.signInlink}
                  {...getLinkAria(t("login"))}
                  onClick={onLogin}
                >
                  {t("login")}
                </Link>
              </Box>
            ) : null}
          </Box>

          <form
            onSubmit={handleSubmit(onSubmit)}
            style={styles.form}
            noValidate
          >
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
                    label="First Name"
                    value={value}
                    data-testid={SCHEDULE_GUEST_TEST_ID.firstname}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    minLength={2}
                    maxLength={50}
                    aria-label={"First Name text field"}
                    InputLabelProps={{ "aria-hidden": true }}
                    sx={
                      isDesktop
                        ? { m: 1, width: "70%" }
                        : { m: 1, pr: 1, width: "100%" }
                    }
                    required
                    inputRef={firstNameRef}
                  />
                );
              }}
              rules={{
                required: t("thisFieldRequired"),
                validate: {
                  isFormat: (v) =>
                    Regex.alphabethOnly.test(v) ||
                    "Incorrect First Name format",
                  isLength: (v) =>
                    Regex.isMin2Max50Length.test(v) ||
                    "First Name should be greater than 2 characters",
                },
              }}
            />
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
                    label="Last Name"
                    data-testid={SCHEDULE_GUEST_TEST_ID.lastname}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    minLength={2}
                    maxLength={50}
                    aria-label={"Last Name text field"}
                    InputLabelProps={{ "aria-hidden": true }}
                    sx={
                      isDesktop
                        ? { m: 1, width: "70%" }
                        : { m: 1, pr: 1, width: "100%" }
                    }
                    required
                    inputRef={lastNameRef}
                  />
                );
              }}
              rules={{
                required: t("thisFieldRequired"),
                validate: {
                  isFormat: (v) =>
                    Regex.alphabethOnly.test(v) || "Incorrect Last Name format",
                  isLength: (v) =>
                    Regex.isMin2Max50Length.test(v) ||
                    "Last Name should be greater than 2 characters",
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
                    inputProps={{
                      maxLength: 50,
                    }}
                    value={value}
                    data-testid={SCHEDULE_GUEST_TEST_ID.email}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    aria-label={"Email text field"}
                    InputLabelProps={{ "aria-hidden": true }}
                    sx={
                      isDesktop
                        ? { m: 1, width: "70%" }
                        : { m: 1, pr: 1, width: "100%" }
                    }
                    required
                    inputRef={emailRef}
                  />
                );
              }}
              rules={{
                validate: {
                  required: (value) => {
                    if (!value) {
                      if (watchedPreferredCommunication !== "phone") {
                        if (watchedPreferredCommunication === "email") {
                          return "This field is required to proceed.";
                        } else if (
                          watchedPreferredCommunication === "both" &&
                          watchedMobile
                        ) {
                          return "This field is required to proceed.";
                        } else {
                          return "Either Email or Mobile number is required to proceed";
                        }
                      }
                    }
                  },
                },
                pattern: {
                  value: Regex.emailValidation,
                  message: t("incorrectEmail"),
                },
              }}
            />
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
                    data-testid={SCHEDULE_GUEST_TEST_ID.mobilenumber}
                    label="Mobile Number"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    aria-label={"Mobile Number field"}
                    InputLabelProps={{ "aria-hidden": true }}
                    sx={
                      isDesktop
                        ? { m: 1, width: "70%" }
                        : { m: 1, pr: 1, width: "100%" }
                    }
                    required
                    inputRef={mobileRef}
                  />
                );
              }}
              rules={{
                validate: {
                  required: (value) => {
                    if (!value) {
                      if (watchedPreferredCommunication !== "email") {
                        if (watchedPreferredCommunication === "phone") {
                          return "This field is required to proceed.";
                        } else if (
                          watchedPreferredCommunication === "both" &&
                          watchedEmail
                        ) {
                          return "This field is required to proceed.";
                        } else {
                          return "Either Email or Mobile number is required to proceed";
                        }
                      }
                    }
                  },
                },
                pattern: {
                  value: Regex.isValidPhoneFormat,
                  message: t("incorrectPhone"),
                },
              }}
            />

            <Box sx={{ width: "70%" }}>
              <Controller
                name="dob"
                control={control}
                tabIndex={0}
                InputPropsLabel={{
                  "aria-label": "Date of Birth required text field",
                }}
                aria-label="Date of Birth required text field"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      disableFuture
                      open={open}
                      onOpen={() => setOpen(true)}
                      onClose={() => {
                        setOpen(false);
                        setTimeout(() => {
                          dobRef?.current?.focus();
                        }, 1);
                      }}
                      // onClick={() => setOpen(true)}
                      aria-hidden={true}
                      tabIndex={-1}
                      type="dob"
                      id="dob"
                      InputLabel={{ "aria-hidden": false }}
                      InputLabelProps={{
                        "aria-hidden": true,
                      }}
                      InputProps={{
                        ref: dobRef,
                        tabIndex: 0,
                        "data-testid": SCHEDULE_GUEST_TEST_ID.dateofbirth,
                        "aria-label": "Date of Birth required text field",
                      }}
                      inputProps={{
                        tabIndex: -1,
                        readOnly: !isDesktop,
                        isTransparent: true,
                        "aria-label": `Password - optional -`,
                        maxLength: 50,
                      }}
                      label="Date of Birth"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      required
                      inputRef={dobRef}
                      helperText={error ? error.message : null}
                    />
                  );
                }}
                rules={{
                  required: t("thisFieldRequired"),
                  validate: {
                    required: (value) => {
                      if (!isDOB(value)) {
                        return t("invalidDOB");
                      }
                    },
                  },
                }}
              />
            </Box>

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
                          color: "#242526",
                          fontWeight: "600",
                          fontFamily: "Libre Franklin",
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

            {!isForMyself && <Divider />}

            {isForMyself ? (
              <>
                <Stack>
                  <Divider sx={{ mx: 1, width: { xs: "100%", md: "70%" } }} />
                  <Box
                    sx={{
                      m: "24px 8px 16px",
                      width: { xs: "100%", md: "70%" },
                    }}
                  >
                    <Typography sx={styles.optionalInfoLabel}>
                      {t("optional")}
                    </Typography>
                    <Typography sx={styles.passwordLabel}>
                      {t("passwordInfo")}
                    </Typography>
                  </Box>

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
                          data-testid={SCHEDULE_GUEST_TEST_ID.passwordField}
                          label={t("passwordLabel")}
                          inputProps={{
                            "aria-label": `Password - optional -`,
                            maxLength: 20,
                          }}
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
                    rules={{
                      validate: {
                        isLength: (v) =>
                          Regex.lengthRegex.test(v) ||
                          v.length === 0 ||
                          "Password does not meet requirements",
                        isAtLeastOneNumber: (v) =>
                          Regex.numberRegex.test(v) ||
                          v.length === 0 ||
                          "Password does not meet requirements",
                        is3of4: (v) =>
                          is3of4(v) ||
                          v.length === 0 ||
                          "Password does not meet requirements",
                      },
                    }}
                  />
                  <DisclaimerText label="(Optional)" />

                  <PasswordValidator
                    validator={passwordValidator}
                    isShowValidation={isPasswordError}
                    password={watchedPassword}
                    validatePassword={validatePassword}
                  />

                  <div style={styles.registeredUsernameWrapper} tabIndex={"0"}>
                    <div>Your username will be {getRegisteredUsername()}</div>
                  </div>
                </Stack>

                <Divider sx={{ mt: 2, mx: 1 }} />
              </>
            ) : null}

            <div style={styles.divRight}>
              <Button
                data-testId="scheduleAppoinment"
                type="submit"
                variant="contained"
                sx={{
                  width: { xs: "100%", md: "222px" },
                  background: colors.primaryButton,
                  mt: 2,
                  "&:hover": {
                    backgroundColor: colors.teal,
                  },
                }}
                style={styles.continueButton}
                role={"button"}
                aria-label={t("scheduleAppoinment")}
              >
                {t("scheduleAppoinment")}
              </Button>
            </div>
          </form>
        </Stack>
      )}
    </>
  );
}
