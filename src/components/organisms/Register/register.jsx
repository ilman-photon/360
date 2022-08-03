import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Divider, Typography } from "@mui/material";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import { StyledInput } from "../../atoms/Input/input";
import globalStyles from "../../../styles/Global.module.scss";
import { PasswordValidator } from "../../molecules/PasswordValidator/passwordValidator";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { styles } from "./style";
import { Regex } from "../../../utils/regex";

export default function Register({ OnRegisterClicked, formMessage = null }) {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
      preferredCommunication: "",
    },
  });

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
    { label: "Email", value: "email" },
    { label: "Phone", value: "phone" },
    { label: "Both", value: "both" },
  ];

  const watchedPassword = watch("password", "");
  const [watchedEmail, watchedMobile] = watch(["email", "mobile"]); // you can also target specific fields by their names
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
    // {
    //   label: "New password must not match current password",
    //   validate: Regex.hasTripleRegex.test(watchedPassword),
    //   mandatory: true,
    // },
  ];
  const isPasswordError = watchedPassword.length > 0; // && passwordValidator.filter(v => v.validate).length > 0

  const onSubmit = (data) => {
    // dummy error validation
    // setError("firstName", { type: 'custom', message: 'An error occured' })
    // setError("lastName", { type: 'custom', message: 'An error occured' })
    // setError("mobile", { type: 'custom', message: 'An error occured' })
    // setError("password", { type: 'custom', message: 'An error occured' })

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
      OnRegisterClicked(data);
    }
  };

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
    <Box className={globalStyles.container}>
      <Stack spacing={3}>
        <Typography variant="h1" sx={styles.titleStyles}>
          User Registration
        </Typography>
        {formMessage.content ? (
          <FormMessage
            ref={formMessageComp}
            success={formMessage.success}
            title={formMessage.title}
          >
            {formMessage.content}
          </FormMessage>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  type="text"
                  id="firstName"
                  label="First Name"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  size="small"
                  variant="filled"
                  helperText={error ? error.message : null}
                  sx={{ margin: "8px" }}
                />
              );
            }}
            rules={{ required: "First name required" }}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  type="text"
                  id="lastName"
                  label="Last Name"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  size="small"
                  variant="filled"
                  helperText={error ? error.message : null}
                  sx={{ margin: "8px" }}
                />
              );
            }}
            rules={{
              required: "Last name required",
              pattern: {
                value: Regex.hasAlpahabet,
                message: "Last name is invalid",
              },
            }}
          />
          <StyledInput
            disableFuture
            type="dob"
            id="dob"
            label="Date of Birth"
            variant="filled"
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
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
                  sx={{ margin: "8px" }}
                />
              );
            }}
            rules={{
              required: "Email required",
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
                message: "Email is invalid",
              },
            }}
          />
          <Controller
            name="mobile"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
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
                />
              );
            }}
            rules={{
              required: "Mobile Number required",
              pattern: {
                value: Regex.isValidPhoneFormat,
                message: "Mobile Number is invalid",
              },
            }}
          />
          <Typography sx={styles.passwordLabel}>
            Please Create a Password
          </Typography>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  type="password"
                  id="password"
                  label="Password"
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
              required: "Password required",
              validate: {
                isLength: (v) => Regex.lengthRegex.test(v),
                isAtLeastOneNumber: (v) => Regex.numberRegex.test(v),
                is3of4: (v) => is3of4(v),
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
            <div>Your username will be {getRegisteredUsername()}</div>
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
                  <RowRadioButtonsGroup
                    error={!!error}
                    value={value}
                    onChange={onChange}
                    label="Preferred mode of Communication"
                    options={options}
                    helperText={error ? error.message : null}
                  />
                );
              }}
              rules={{ required: "Preferred Communication required" }}
            />
          </div>

          <Button type="submit" variant="contained" sx={styles.containedButton}>
            Register
          </Button>
        </form>

        <Typography variant="caption" style={styles.bottomParagraph}>
          By registering, you agree to our Terms &<br /> Conditions and Privacy
          Policy
        </Typography>
        <Divider margin={3} />
        <Typography variant="caption" style={styles.bottomParagraph}>
          Already have an account?{" "}
          <Link href="/patient/login">
            <a style={styles.loginLink}>Login</a>
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}
