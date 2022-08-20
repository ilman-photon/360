import React from "react";
import { Link } from "@mui/material";
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

const ForgotPassword = ({
  onBackToLoginClicked,
  showPostMessage,
  setShowPostMessage,
  onCalledValidateUsernameAPI,
  title = "",
}) => {
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "ForgotPassword" });
  const { handleSubmit, control, setError } = useForm();
  const { FORGOT_TEST_ID } = constants.TEST_ID;
  const onSubmit = ({ username }) => {
    if (
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
        <title>{title}</title>
      </Head>
      <Card
        className={globalStyles.container}
        sx={{ minWidth: 275, padding: "16px" }}
      >
        <CardContent style={styles.cardContentStyle}>
          <HeadingTitle variant={constants.H2} title={t("title")} />
          {showPostMessage ? (
            <FormMessage success={false} sx={styles.postMessage}>
              {t("errorUsernameNotFound")}
            </FormMessage>
          ) : (
            <></>
          )}
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
              rules={{ required: t("errorEmptyField") }}
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
              {t("resetPasswordText")}
            </StyledButton>
          </form>
          <Link
            style={{ ...styles.margin, ...styles.link }}
            color={"#2095a9"}
            data-testid={FORGOT_TEST_ID.loginLink}
            onClick={function () {
              onBackToLoginClicked(router);
            }}
            {...getLinkAria(t("backButtonLink"))}
          >
            {t("backButtonLink")}
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default ForgotPassword;
