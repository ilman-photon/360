import React from "react";
import { Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { StyledInput } from "../../atoms/Input/input";
import { useTranslation } from "next-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { styles } from "./style";
import { useForm, Controller } from "react-hook-form";
import constants from "../../../utils/constants";
import { Regex } from "../../../utils/regex";
import { HeadingTitle } from "../../atoms/Heading";
import { getLinkAria } from "../../../utils/viewUtil";
import Head from "next/head";
import { colors } from "../../../styles/theme";

const ForgotPassword = ({
  onBackToLoginClicked,
  showPostMessage,
  setShowPostMessage,
  onCalledValidateUsernameAPI,
  onCalledValidateAppointment,
  title = "",
  isAppointment = true,
}) => {
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "ForgotPassword" });
  const { handleSubmit, control, setError } = useForm();
  const { FORGOT_TEST_ID } = constants.TEST_ID;
  const onSubmit = ({ username }) => {
    if (username.length <= 0) {
      setError("username", {
        type: "custom",
        message: t("errorEmptyField"),
      });
    } else if (isAppointment) {
      onCalledValidateAppointment(
        {
          username: username,
        },
        constants.SELECT_OPTION
      );
    } else if (
      Regex.REGEX_PHONE_NUMBER.test(username) ||
      Regex.isEmailCorrect.test(username)
    ) {
      onCalledValidateUsernameAPI(
        {
          username: username,
        },
        constants.SELECT_OPTION
      );
    } else {
      setError("username", {
        type: "custom",
        message: t("errorInvalidEmailPhone"),
      });
    }
  };

  return (
    <>
      <Head>
        <title>{`EyeCare Patient Portal - ${title}`}</title>
      </Head>
      <Card
        className={globalStyles.container}
        sx={{ minWidth: 275, padding: "16px" }}
      >
        <CardContent style={styles.cardContentStyle}>
          <HeadingTitle
            variant={constants.H2}
            title={isAppointment ? t("syncTitle") : t("title")}
            sx={{ fontSize: "32px" }}
          />
          {showPostMessage ? (
            <FormMessage
              success={false}
              sx={styles.postMessage}
              title={isAppointment && t("syncErrorTitle")}
            >
              {isAppointment ? t("syncError") : t("errorUsernameNotFound")}
            </FormMessage>
          ) : (
            <></>
          )}
          <Typography
            variant="bodyMedium"
            style={{ ...styles.marginText, ...styles.link }}
          >
            {isAppointment ? t("syncTextContent") : ""}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
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
                    label={t("usernamePlaceHolder")}
                    id="username"
                    variant="filled"
                    value={value}
                    data-testid={FORGOT_TEST_ID.email}
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
            />

            <StyledButton
              type="submit"
              theme="patient"
              mode="primary"
              size="small"
              gradient={false}
              style={styles.margin}
              data-testid={FORGOT_TEST_ID.continueBtn}
            >
              {isAppointment ? t("syncButton") : t("resetPasswordText")}
            </StyledButton>
          </form>
          <Typography
            variant="bodyMedium"
            style={{ ...styles.margin, ...styles.link }}
          >
            <Link
              color={colors.link}
              data-testid={FORGOT_TEST_ID.loginLink}
              onClick={function () {
                onBackToLoginClicked(router);
              }}
              {...getLinkAria(
                isAppointment ? t("backSignIn") : t("backButtonLink")
              )}
            >
              {isAppointment ? t("backSignIn") : t("backButtonLink")}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ForgotPassword;
