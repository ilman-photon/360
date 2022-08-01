import React, { useEffect, useState } from "react";
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
  showPostMessage,
  setShowPostMessage,
  onBackToLoginClicked,
  postMessage,
  formMessage,
  OnSetPasswordClicked,
  username,
  title,
  subtitle,
  passwordPlaceHolder = "Password", // t("passwordPlaceHolder"),
  confirmPasswordPlaceHolder = "Confirm Password", // t("confirmPasswordPlaceHolder"),
  ctaButtonLabel = "Create Account", // t("ctaButtonLabel"),
}) => {
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "SetPassword" });
  const { handleSubmit, control, watch, setError, setValue } = useForm();

  const validateErrorPassword = (errors1 = [], errors2 = []) => {
    return errors1.length === 0 && errors2.length <= 1 ? true : false;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password.toLowerCase() !== confirmPassword.toLowerCase()) {
      setError("confirmPassword", {
        type: "custom",
        message: t("passwordNotMatch"),
      });
    }
  };

  const watchedPassword = watch("password", "");
  const [watchedEmail] = watch(["email"]); // you can also target specific fields by their names

  let lengthRegex = /^[^\s]{8,20}$/;
  let numberRegex = /[0-9]/;
  let alphabethRegex = /[A-Za-z]/;
  let specialRegex = /[@#$%^&-+=()]/;
  let hasTripleRegex = /([a-z\\d])\\1\\1/;
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

  const onSubmit = (data) => {
    console.log({ data });
    if (data.password.toLowerCase() === data.confirmPassword.toLowerCase()) {
      const errors1 = [];
      const errors2 = [];
      passwordValidator.forEach((err) => {
        if (err.mandatory) {
          if (err.validate) errors1.push(err.validate);
        } else {
          if (err.validate) errors2.push(err.validate);
        }
      });

      if (validateErrorPassword(errors1, errors2)) {
        OnSetPasswordClicked(data);
      }
    } else {
      validateConfirmPassword(data.password, data.confirmPassword);
    }
  };

  return (
    <Card className={globalStyles.container} sx={{ minWidth: 275, margin: 10 }}>
      <CardContent style={cardContentStyle}>
        <Typography variant="h2">{title}</Typography>
        {subtitle ? (
          <Typography variant="h4" sx={styles.titleStyles2}>
            {subtitle}
          </Typography>
        ) : (
          <></>
        )}

        <div style={{ margin: 8 }}>
          {showPostMessage ? (
            <FormMessage success={false} sx={styles.postMessage}>
              {postMessage}
            </FormMessage>
          ) : (
            <></>
          )}

          {formMessage && formMessage.content ? (
            <FormMessage
              success={formMessage.success}
              title={formMessage.title}
            >
              {formMessage.content}
            </FormMessage>
          ) : (
            ""
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          {username ? (
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="text"
                    id="username"
                    label="Username"
                    value={username}
                    // style={styles.margin}
                    disabled
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
                required: "Username required",
                // pattern: {
                //   value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
                //   message: "Username is invalid",
                // },
              }}
            />
          ) : (
            <></>
          )}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  id="password"
                  label={passwordPlaceHolder}
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
            validatePassword={validateErrorPassword}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  id="confirmPassword"
                  label={confirmPasswordPlaceHolder}
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
            rules={{ required: t("errorEmptyField") }}
          />
          <StyledButton
            type="submit"
            theme="patient"
            mode="primary"
            size="large"
            gradient={false}
            style={styles.margin}
          >
            {ctaButtonLabel}
          </StyledButton>
        </form>
        <Link
          style={{ ...styles.margin, ...styles.link }}
          color={"#2095a9"}
          onClick={function () {
            onBackToLoginClicked(router);
          }}
        >
          {t("backButtonLink")}
        </Link>
      </CardContent>
    </Card>
  );
};

export default SetPasswordComponent;
