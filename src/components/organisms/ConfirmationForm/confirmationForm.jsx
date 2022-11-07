import React from "react";
import { Box, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTranslation } from "next-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import { styles } from "./style";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { useForm } from "react-hook-form";
import constants from "../../../utils/constants";
import { HeadingTitle } from "../../atoms/Heading";
import { getLinkAria } from "../../../utils/viewUtil";
import Head from "next/head";
import { colors } from "../../../styles/theme";

const ConfirmationForm = ({
  onBackToLoginClicked,
  title,
  subtitle,
  description,
  additional,
  postMessage,
  isSuccessPostMessage = true,
  buttonLabel,
  buttonIcon,
  butttonMode = constants.PRIMARY,
  showPostMessage = false,
  onCTAButtonClicked,
  postMessageTitle,
  primaryButtonTestId,
  formStyle = additional ? styles.margin : styles.marginDescription,
  pageTitle = "",
  isSendLink = false,
}) => {
  const router = useRouter();
  const { t, ready } = useTranslation("translation", {
    keyPrefix: "OneTimeLink",
    useSuspense: false,
  });

  const { handleSubmit, control } = useForm();
  const { FORGOT_TEST_ID } = constants.TEST_ID;
  const onSubmit = (data) => {
    onCTAButtonClicked(additional ? { data, router } : constants.EMPTY_STRING);
  };

  return (
    <>
      <Head>
        <title>{`EyeCare Patient Portal - ${pageTitle}`}</title>
      </Head>
      {ready && (
        <Card
          className={globalStyles.container}
          style={styles.cardStyle}
          tabIndex={0}
          aria-label={`${title} view`}
        >
          <CardContent style={styles.cardContentStyle}>
            <HeadingTitle
              variant={constants.H2}
              title={title}
              sx={{ fontSize: "32px" }}
            />
            {showPostMessage ? (
              <FormMessage
                success={isSuccessPostMessage}
                sx={styles.postMessage}
                title={postMessageTitle}
                tabIndex={0}
                aria-label={postMessage}
                aria-live={postMessage}
              >
                {postMessage}
              </FormMessage>
            ) : (
              <></>
            )}
            {subtitle ? (
              <Typography
                variant="bodyMedium"
                style={styles.margin}
                tabIndex={0}
                aria-label={subtitle}
              >
                {subtitle}
              </Typography>
            ) : (
              <></>
            )}
            <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
              {additional ? (
                <Box>{additional(control)}</Box>
              ) : (
                <Typography
                  variant="bodyRegular"
                  style={styles.descriptionStyle}
                  aria-label={description}
                >
                  {description}
                </Typography>
              )}
              {!isSendLink && (
                <StyledButton
                  type={constants.SUBMIT}
                  theme={constants.PATIENT}
                  mode={butttonMode}
                  size={constants.SMALL}
                  gradient={false}
                  data-testid={primaryButtonTestId}
                  style={{
                    ...styles.margin,
                    marginTop: "5%",
                  }}
                >
                  {buttonIcon}
                  {buttonLabel}
                </StyledButton>
              )}
            </form>
            {butttonMode !== constants.SECONDARY ? (
              <Link
                style={{
                  ...styles.margin,
                  ...styles.textAlign,
                  ...styles.backToLoginMargin,
                  ...styles.link,
                }}
                data-testid={FORGOT_TEST_ID.loginLink}
                color={colors.link}
                tabIndex={0}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    router.push("/patient/login");
                  }
                }}
                aria-label={"Back to Log in link"}
                onClick={function () {
                  onBackToLoginClicked(router);
                }}
                {...getLinkAria(t("backButtonLink"))}
              >
                {t("backButtonLink")}
              </Link>
            ) : (
              <></>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ConfirmationForm;
