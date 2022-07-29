import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import { useRouter } from "next/router";
import { StyledInput } from "../../atoms/Input/input";
import { StyledButton } from "../../atoms/Button/button";
import globalStyles from "../../../styles/Global.module.scss";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./style";
import { useTranslation } from "react-i18next";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { Link, Typography } from "@mui/material";

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
}) => {
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "SetPassword" });
  const { handleSubmit, control, setError } = useForm();

  const onSubmit = ({ password, confirmPassword }) => {
    if (password.toLowerCase() === confirmPassword.toLowerCase()) {
      onCTAButtonClicked({ password, confirmPassword }, router);
    } else {
      validatePassword(password, confirmPassword);
    }
  };

  const validatePassword = (password, confirmPassword) => {
    if (password.toLowerCase() !== confirmPassword.toLowerCase()) {
      setError("confirmPassword", {
        type: "custom",
        message: t("passwordNotMatch"),
      });
    }
  };

  return (
    <Card className={globalStyles.container} sx={{ minWidth: 275, margin: 10 }}>
      <CardContent style={cardContentStyle}>
        <Typography variant="h2">{title}</Typography>
        {showPostMessage ? (
          <FormMessage success={false} sx={styles.postMessage}>
            {postMessage}
          </FormMessage>
        ) : (
          <></>
        )}
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
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
                  style={styles.margin}
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
                  style={styles.margin}
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
          {t("backButtonLink")}
        </Link>
      </CardContent>
    </Card>
  );
};

export default SetPasswordComponent;
