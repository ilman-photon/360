import React, { useState } from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTranslation } from "react-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import { styles } from "./style";

const SetOptionComponent = ({
  onBackToLoginClicked,
  onContinueButtonClicked,
  hasSecurityQuestion = false,
}) => {
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "SetOption" });

  return (
    <Card
      className={globalStyles.container}
      sx={{ minWidth: 275, padding: "16px" }}
    >
      <CardContent style={styles.cardContentStyle}>
        <Typography variant="h2">{t("title")}</Typography>
        <StyledButton
          theme="patient"
          mode="primary"
          size="large"
          gradient={false}
          onClick={() => {
            onContinueButtonClicked("securityQuestion");
          }}
          style={{ ...styles.margin, ...styles.primaryButtoMargin }}
        >
          {hasSecurityQuestion
            ? t("securityButtonText")
            : t("noSecurityButtonText")}
        </StyledButton>
        <Box style={styles.dividerContainer}>
          <Divider>
            <Typography style={styles.informativeText}>or</Typography>
          </Divider>
        </Box>
        <StyledButton
          theme="patient"
          mode="secondary"
          size="large"
          gradient={false}
          onClick={() => {
            onContinueButtonClicked("oneTimeLink");
          }}
          style={{ ...styles.margin, ...styles.secondaryButtoMargin }}
        >
          {t("oneTimeLoginButtonText")}
        </StyledButton>
        <Link
          style={{ ...styles.margin, ...styles.backToLoginMargin }}
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

export default SetOptionComponent;
