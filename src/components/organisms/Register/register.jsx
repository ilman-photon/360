import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "next/link";
import { useForm, Controller, useFormState } from "react-hook-form";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import { StyledInput } from "../../atoms/Input/input";
import globalStyles from "../../../styles/Global.module.scss";
import { PasswordValidator } from "../../molecules/PasswordValidator/passwordValidator";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { styles } from "./style";
import { Regex } from "../../../utils/regex";
import { useRouter } from "next/router";
import constants from "../../../utils/constants";
import { HeadingTitle } from "../../atoms/Heading";
import { colors } from "../../../styles/theme";
import { resetFormMessage } from "../../../store";
import { useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";

export const isDOB = (value) => {
  let date = new Date().getFullYear();
  if (value.getYear() < 0) {
    return false;
  }
  if (value.getFullYear() <= date) {
    return true;
  }
  return false;
};

export default function Register({
  OnRegisterClicked = () => {},
  isRegisterLoading,
  formMessage = null,
}) {
  const router = useRouter();

  const { t, ready } = useTranslation("translation", {
    keyPrefix: "register",
    useSuspense: false,
  });

  const { handleSubmit, control, watch, setValue, resetField } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: null,
      email: "",
      mobileNumber: "",
      password: "",
      preferredCommunication: "both",
    },
  });
  const { errors, isSubmitting } = useFormState({
    control,
  });
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const { REGISTER_TEST_ID } = constants.TEST_ID;
  const validatePassword = (errors1 = [], errors2 = []) => {
    return errors1.length === 0 && errors2.length <= 1;
  };

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

  const options = [
    { label: "Email", value: "email", testId: REGISTER_TEST_ID.emailradio },
    { label: "Phone", value: "phone", testId: REGISTER_TEST_ID.phoneradio },
    { label: "Both", value: "both", testId: REGISTER_TEST_ID.bothradio },
  ];

  const watchedPassword = watch("password", "");
  const [watchedEmail, watchedMobile, watchedPreferredCommunication] = watch([
    "email",
    "mobileNumber",
    "preferredCommunication",
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
      validate: watchedPassword.indexOf(watchedEmail || watchedMobile) > -1,
      mandatory: true,
    },
  ];
  const isPasswordError = watchedPassword.length > 0; // && passwordValidator.filter(v => v.validate).length > 0

  const onSubmit = (data) => {
    const errors1 = [];
    const errors2 = [];
    passwordValidator.forEach((err) => {
      if (err.mandatory) {
        if (err.validate) errors1.push(err.validate);
      } else {
        if (err.validate) errors2.push(err.validate);
      }
    });
    if (validatePassword(errors1, errors2)) {
      OnRegisterClicked(data, router);
    }
  };
  const msgRef = React.useRef(null);

  const inputRef = React.useRef(null);
  const inputLastName = React.useRef(null);
  const inputDob = React.useRef(null);
  const inputEmail = React.useRef(null);
  const inputMobileNumber = React.useRef(null);
  const inputPassword = React.useRef(null);
  const inputPrefentComunnication = React.useRef(null);
  useEffect(() => {
    if (errors.firstName) {
      inputRef.current.focus();
    } else if (errors.lastName) {
      inputLastName.current.focus();
    } else if (errors.dob) {
      inputDob.current.focus();
    } else if (errors.email) {
      inputEmail.current.focus();
    } else if (errors.mobileNumber) {
      inputMobileNumber.current.focus();
    } else if (errors.password) {
      inputPassword.current.focus();
    } else if (errors.preferredCommunication) {
      inputPrefentComunnication.current.focus();
    }

    // unfocus focused element
    document.activeElement.blur();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  useEffect(() => {
    const isMobileInputEmpty = watchedMobile === "(" || !watchedMobile;
    if (watchedEmail && isMobileInputEmpty) {
      setValue("preferredCommunication", "email");
    } else if (!watchedEmail && !isMobileInputEmpty) {
      setValue("preferredCommunication", "phone");
    } else {
      setValue("preferredCommunication", "both");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedEmail, watchedMobile]);

  useEffect(() => {
    if (watchedPreferredCommunication === "email") {
      inputEmail.current.focus();
    }
  }, [watchedPreferredCommunication]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetFormMessage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formMessageComp = useRef(null);
  useEffect(() => {
    if (formMessageComp.current)
      formMessageComp.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  }, [formMessage]);

  return (
    <>
      {ready && (
        <Box
          className={globalStyles.container}
          sx={{ ...styles.overideContainer }}
        >
          <Stack spacing={3}>
            <HeadingTitle
              variant={constants.H1}
              sx={styles.titleStyles}
              title={"User Registration"}
            />
            <Typography
              sx={{
                fontFamily: "Libre Franklin",
                fontWeight: "400",
                fontSize: "12px",
                color: "#6C6C6C",
                mx: "10px !important",
                my: "8px !important",
              }}
            >
              *Required Fields
            </Typography>
            {formMessage?.content ? (
              <FormMessage
                ref={formMessageComp}
                success={formMessage.success}
                title={formMessage.title}
                isBackToLogin={formMessage.isBackToLogin}
              >
                {formMessage.content}
              </FormMessage>
            ) : (
              ""
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={styles.form}
              autoComplete={"off"}
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
                      required
                      type="text"
                      minLength={2}
                      maxLength={50}
                      id="firstName"
                      label="First Name"
                      aria-label="First name required text field"
                      inputRef={inputRef}
                      inputProps={{
                        "aria-label": "First Name - Required",
                      }}
                      value={value}
                      data-testid={REGISTER_TEST_ID.firstname}
                      onChange={onChange}
                      error={!!error}
                      size="small"
                      variant="filled"
                      helperText={error ? error.message : null}
                      sx={{
                        margin: "8px",
                      }}
                    />
                  );
                }}
                rules={{
                  required: t("requiredField"),
                  pattern: {
                    value: Regex.nameValidation,
                    message: "Incorrect format",
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
                      minLength={2}
                      maxLength={50}
                      id="lastName"
                      label="Last Name"
                      inputRef={inputLastName}
                      aria-label={"Last name required text field"}
                      inputProps={{
                        "aria-label": "Last Name - Required",
                      }}
                      data-testid={REGISTER_TEST_ID.lastname}
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      size="small"
                      variant="filled"
                      helperText={error ? error.message : null}
                      sx={{
                        margin: "8px",
                      }}
                      required
                    />
                  );
                }}
                rules={{
                  required: t("requiredField"),
                  pattern: {
                    value: Regex.nameValidation,
                    message: "Incorrect format",
                  },
                }}
              />

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
                      required
                      open={open}
                      onOpen={() => setOpen(true)}
                      onClose={() => {
                        setOpen(false);
                        setTimeout(() => {
                          inputDob?.current?.focus();
                        }, 1);
                      }}
                      // onClick={() => setOpen(true)}
                      aria-hidden={true}
                      tabIndex={-1}
                      type="dob"
                      id="dob"
                      inputRef={inputDob}
                      data-testid={REGISTER_TEST_ID.dateofbirth}
                      InputLabel={{ "aria-hidden": true }}
                      InputLabelProps={{
                        "aria-hidden": true,
                      }}
                      InputProps={{
                        ref: inputDob,
                        tabIndex: 0,
                        "data-testid": REGISTER_TEST_ID.dateofbirth,
                        "aria-label": "Date of Birth required text field",
                      }}
                      inputProps={{
                        tabIndex: -1,
                        readOnly: !isDesktop,
                        isTransparent: true,
                      }}
                      label="Date of Birth"
                      variant="filled"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  );
                }}
                rules={{
                  required: t("requiredField"),
                  validate: {
                    required: (value) => {
                      if (!isDOB(value)) return t("invalidDOB");
                    },
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
                      inputRef={inputEmail}
                      aria-label={"Email required text field"}
                      inputProps={{
                        "aria-label": "Email - Required",
                      }}
                      value={value}
                      data-testid={REGISTER_TEST_ID.email}
                      onChange={onChange}
                      error={!!error}
                      size="small"
                      variant="filled"
                      helperText={error ? error.message : null}
                      sx={{
                        margin: "8px",
                      }}
                      required
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
                name="mobileNumber"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      type="phone"
                      inputRef={inputMobileNumber}
                      id="mobileNumber"
                      aria-label="Mobile Number required text field"
                      data-testid={REGISTER_TEST_ID.mobilenumber}
                      label="Mobile Number"
                      inputProps={{
                        "aria-label": `Mobile Number - Required`,
                      }}
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      size="small"
                      variant="filled"
                      helperText={error ? error.message : null}
                      sxContainer={{
                        m: 1,
                      }}
                      required
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
              <Typography sx={{ ...styles.passwordLabel, fontSize: "18px" }}>
                Please create a password
              </Typography>
              <Controller
                name="password"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      type="password"
                      id="password"
                      inputRef={inputPassword}
                      label="Password"
                      inputProps={{
                        "aria-label": `Password - required -`,
                        maxLength: 20,
                      }}
                      data-testid={REGISTER_TEST_ID.password}
                      value={value}
                      autoComplete={"new-password"}
                      onChange={onChange}
                      error={!!error}
                      size="small"
                      variant="filled"
                      helperText={error ? error.message : null}
                      required
                      passwordWidth={"-webkit-fill-available"}
                    />
                  );
                }}
                rules={{
                  required: t("requiredField"),
                  validate: {
                    isLength: (v) =>
                      Regex.lengthRegex.test(v) || t("incorrectPassword"),
                    isAtLeastOneNumber: (v) =>
                      Regex.numberRegex.test(v) || t("incorrectPassword"),
                    is3of4: (v) => is3of4(v) || t("incorrectPassword"),
                  },
                }}
              />

              <PasswordValidator
                validator={passwordValidator}
                isShowValidation={isPasswordError}
                password={watchedPassword}
                validatePassword={validatePassword}
              />

              <div style={styles.registeredUsernameWrapper}>
                <Typography
                  ref={msgRef}
                  variant="bodyMedium"
                  sx={{ fontWeight: 500, color: colors.darkGreen }}
                >
                  Your username will be {getRegisteredUsername()}
                </Typography>
              </div>

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
                          inputRef={inputPrefentComunnication}
                          value={value}
                          onChange={onChange}
                          label="Preferred mode of Communication"
                          inputProps={{
                            "aria-label": `Preferred mode of Communication - required -`,
                          }}
                          options={options}
                          helperText={error ? error.message : null}
                          isRegistrationForm={true}
                        />
                      </>
                    );
                  }}
                  rules={{ required: t("requiredField") }}
                />
              </div>

              <LoadingButton
                type="submit"
                variant="contained"
                sx={styles.containedButton}
                loading={isRegisterLoading}
                data-testid={REGISTER_TEST_ID.registerbtn}
              >
                Register
              </LoadingButton>
            </form>

            <Typography variant="caption" style={styles.bottomParagraph}>
              {`By registering, you accept to our Terms & Conditions and Privacy Policy`}
            </Typography>
            <Divider margin={3} sx={{ width: "288px", alignSelf: "center" }} />
            <Typography variant="caption" style={styles.bottomParagraph}>
              Already have an account?{" "}
              <Link
                href="/patient/login"
                data-testid={REGISTER_TEST_ID.loginlink}
                aria-label={`Login link`}
              >
                <a href="#" style={styles.loginLink}>
                  Login
                </a>
              </Link>
            </Typography>
          </Stack>
        </Box>
      )}
    </>
  );
}
