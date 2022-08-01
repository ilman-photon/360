import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTranslation } from "react-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import { styles } from "./style";
import constants from "../../../utils/constants";

const SelectOptionForm = ({
  onBackToLoginClicked,
  onContinueButtonClicked,
  hasSecurityQuestion = false,
}) => {
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "SetOption" });

  return (
    <Card className={globalStyles.container} style={styles.cardStyle}>
      <CardContent style={styles.cardContentStyle}>
        <Typography variant="h2">{t("title")}</Typography>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          size={constants.LARGE}
          gradient={false}
          onClick={() => {
            onContinueButtonClicked(
              hasSecurityQuestion
                ? constants.SECURITY_QUESTION
                : constants.PASSWORD_RESET
            );
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
          theme={constants.PATIENT}
          mode={constants.SECONDARY}
          size={constants.LARGE}
          gradient={false}
          onClick={() => {
            onContinueButtonClicked(constants.ONE_TIME_LINK);
          }}
          style={{ ...styles.margin, ...styles.secondaryButtoMargin }}
        >
          {t("oneTimeLoginButtonText")}
        </StyledButton>
        <Link
          style={{ ...styles.margin, ...styles.backToLoginMargin, ...styles.link }}
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

export default SelectOptionForm;
