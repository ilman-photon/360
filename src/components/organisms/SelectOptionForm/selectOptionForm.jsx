import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTranslation } from "next-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import { styles } from "./style";
import constants from "../../../utils/constants";
import { HeadingTitle } from "../../atoms/Heading";
import { getLinkAria } from "../../../utils/viewUtil";
import { colors } from "../../../styles/theme";
import Head from "next/head";

const SelectOptionForm = ({
  onBackToLoginClicked,
  onContinueButtonClicked,
  hasSecurityQuestion = false,
  title = "",
}) => {
  const router = useRouter();
  const { t, ready } = useTranslation("translation", {
    keyPrefix: "SetOption",
  });
  const { FORGOT_TEST_ID } = constants.TEST_ID;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {ready && (
        <Card
          className={globalStyles.container}
          style={styles.cardStyle}
          aria-label={`${t("title")} view`}
        >
          <CardContent style={styles.cardContentStyle}>
            <HeadingTitle variant={constants.H2} title={t("title")} />
            <StyledButton
              autoFocus
              theme={constants.PATIENT}
              mode={constants.PRIMARY}
              size={constants.SMALL}
              gradient={false}
              data-testid={FORGOT_TEST_ID.answerQuestions}
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
                <Typography
                  style={styles.informativeText}
                  tabIndex="0"
                  aria-roledescription="text"
                >
                  or
                </Typography>
              </Divider>
            </Box>
            <StyledButton
              theme={constants.PATIENT}
              mode={constants.SECONDARY}
              size={constants.SMALL}
              gradient={false}
              data-testid={FORGOT_TEST_ID.oneTimeLink}
              onClick={() => {
                onContinueButtonClicked(constants.ONE_TIME_LINK);
              }}
              style={{ ...styles.margin, ...styles.secondaryButtoMargin }}
            >
              {t("oneTimeLoginButtonText")}
            </StyledButton>
            <Link
              style={{
                ...styles.margin,
                ...styles.backToLoginMargin,
                ...styles.link,
              }}
              data-testid={FORGOT_TEST_ID.loginLink}
              color={colors.link}
              onClick={function () {
                onBackToLoginClicked(router);
              }}
              {...getLinkAria(t("backButtonLink"))}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  router.push("/patient/login");
                }
              }}
            >
              {t("backButtonLink")}
            </Link>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default SelectOptionForm;
