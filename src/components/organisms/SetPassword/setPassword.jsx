import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import { useRouter } from "next/router";
import { StyledInput } from "../../atoms/Input/input";
import { StyledButton } from "../../atoms/Button/button";
import globalStyles from "../../../styles/Global.module.scss";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./style";
import { useTranslation } from "react-i18next";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { Button, Link, Typography } from "@mui/material";
import { PasswordValidator } from "../../molecules/PasswordValidator/passwordValidator";

const headingStyles = {
  marginBottom: 30,
};

const cardContentStyle = {
  display: "flex",
  flexDirection: "column",
  padding: 0,
};

const SetPasswordComponent = ({
  title,
  showPostMessage,
  setShowPostMessage,
  onBackToLoginClicked,
  onCTAButtonClicked,
  postMessage,
  formError,
  OnSetPasswordClicked,
}) => {
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "SetPassword" });
  const { handleSubmit, control, watch, setError } = useForm();

  const onSubmit = (data) => {
    console.log(data, password, confirmPassword, 'vdfdf')
    if (data.password.toLowerCase() === data.confirmPassword.toLowerCase()) {
      // onCTAButtonClicked({ password, confirmPassword });
      if (validatorPassword()) {
        OnSetPasswordClicked(data);
      }
    } else {
      validatePassword(data.password, data.confirmPassword);
    }
  };

  const validatorPassword = (errors1 = [], errors2 = []) => {
    return errors1.length === 0 && errors2.length <= 1 ? true : false;
  };

  const validatePassword = (password, confirmPassword) => {
    if (password.toLowerCase() !== confirmPassword.toLowerCase()) {
      setError("confirmPassword", {
        type: "custom",
        message: "Passwords do not match",
      });
    }
  };

  const watchedPassword = watch("password", "");
  const [watchedEmail] = watch(["email"]); // you can also target specific fields by their names

  let lengthRegex = new RegExp(/^[^\s]{8,20}$/);
  let numberRegex = new RegExp("[0-9]");
  let alphabethRegex = new RegExp("[A-Za-z]");
  let specialRegex = new RegExp("[@#$%^&-+=()]");
  let hasTripleRegex = new RegExp("([a-z\\d])\\1\\1");
  const passwordValidator = [
    {
      label: "Password length should range from 8 to 20 characters",
      validate: !lengthRegex.test(watchedPassword),
      mandatory: true,
    },
    {
      label: "Password should contain at least one numerical character (0-9)",
      validate: !numberRegex.test(watchedPassword),
      mandatory: true,
    },
    { label: "Contain at least 3 our of 4 types", text: true },
    {
      label: "Password should contain at least one alphabet (a-z)",
      validate: !alphabethRegex.test(watchedPassword),
    },
    {
      label: "Password should contain at least one special character",
      validate: !specialRegex.test(watchedPassword),
    },
    {
      label: "Password should not contain your username",
      validate: watchedPassword.indexOf(watchedEmail) > -1,
    },
    {
      label:
        "Password should not contain 3 or more identical characters consecutively",
      validate: hasTripleRegex.test(watchedPassword),
    },
  ];
  const isPasswordError = watchedPassword.length > 0;

  const is3of4 = (pass) => {
    let passes = 0;
    if (alphabethRegex.test(pass)) {
      ++passes;
    }
    if (specialRegex.test(pass)) {
      ++passes;
    }
    if (!pass.indexOf(watchedEmail) > -1) {
      ++passes;
    }
    if (!hasTripleRegex.test(pass)) {
      ++passes;
    }
    return passes >= 3 ? true : false;
  };

  return (
    <Card className={globalStyles.container} sx={{ minWidth: 275, margin: 10 }}>
      <CardContent style={cardContentStyle}>
        {/* <Typography variant="h2">{title}</Typography> */}
        <Typography variant="h2" sx={styles.titleStyles1}>
          Set Password
        </Typography>
        <Typography variant="h4" sx={styles.titleStyles2}>
          Enter a password to setup your account.
        </Typography>
        {showPostMessage ? (
          <FormMessage success={false} sx={styles.postMessage}>
            {postMessage}
          </FormMessage>
        ) : (
          <></>
        )}

        {formError.content ? (
          <FormMessage success={false} title={formError.title}>
            {formError.content}
          </FormMessage>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
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
                  // style={styles.margin}
                  onChange={onChange}
                  error={!!error}
                  size="small"
                  variant="filled"
                  helperText={error ? error.message : null}
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
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  id="password"
                  label="Password"
                  type="password"
                  value={value}
                  onChange={(event) => {
                    onChange(event);
                    if (showPostMessage) {
                      setShowPostMessage(false);
                    }
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              );
            }}
            rules={{
              required: "This field is required",
              validate: {
                isLength: (v) => lengthRegex.test(v),
                isAtLeastOneNumber: (v) => numberRegex.test(v),
                is3of4: (v) => is3of4(v),
              },
            }}
          />
          <PasswordValidator
            validator={passwordValidator}
            isShowValidation={isPasswordError}
            password={watchedPassword}
            validatePassword={validatorPassword}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={value}
                  // style={styles.margin}
                  onChange={(event) => {
                    onChange(event);
                    if (showPostMessage) {
                      setShowPostMessage(false);
                    }
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              );
            }}
            rules={{ required: "This field is required" }}
          />
          <StyledButton
            type="submit"
            theme="patient"
            mode="primary"
            size="large"
            gradient={false}
            style={styles.margin}
          >
            Reset Password
          </StyledButton>
        </form>
        <Link
          style={styles.margin}
          color={"#2095a9"}
          onClick={function () {
            onBackToLoginClicked(router);
          }}
        >
          {"Back to Log in"}
        </Link>
      </CardContent>
    </Card>
  );
};

export default SetPasswordComponent;
