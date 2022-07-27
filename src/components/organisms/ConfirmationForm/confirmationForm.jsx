import React, { useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTranslation } from "react-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import { styles } from "./style";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { useForm, Controller } from "react-hook-form";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import constants from "../../../utils/constants";

const ConfirmFormComponent = ({
  onBackToLoginClicked,
  title,
  subtitle,
  description,
  additional,
  postMessage,
  isSuccessPostMessage = true,
  buttonLabel,
  buttonIcon,
  showPostMessage = false,
  onCTAButtonClicked,
  postMessageTitle
}) => {
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "OneTimeLink" });

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    onCTAButtonClicked(additional ? data : constants.EMPTY_STRING)
  };

  const options = [
    { label: "Email", value: "email" },
    { label: "Phone", value: "phone" }
  ];

  return (
    <Card
      className={globalStyles.container}
      sx={{ minWidth: 275, padding: "16px" }}
    >
      <CardContent style={styles.cardContentStyle}>
        <Typography variant="h2" style={styles.margin}>
          {title}
        </Typography>
        {showPostMessage ? (
          <FormMessage success={isSuccessPostMessage} sx={styles.postMessage} title={postMessageTitle}>
            {postMessage}
          </FormMessage>
        ) : (
          <></>
        )}
        <Typography variant="bodyMedium" style={styles.margin}>
          {subtitle}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} style={additional ? styles.margin : styles.marginDescription}>
          {additional ? (
            <Box>
              {additional(control)}
            </Box>
          ) : (
            <Typography variant="bodyRegular">
              {description}
            </Typography>
          )}
          <StyledButton
            type="submit"
            theme="patient"
            mode="primary"
            size="large"
            gradient={false}
            style={styles.margin}
          >
            {buttonIcon}
            {buttonLabel}
          </StyledButton>
        </form>
        <Link
          style={{
            ...styles.margin,
            ...styles.textAlign,
            ...styles.backToLoginMargin,
          }}
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

export default ConfirmFormComponent;
