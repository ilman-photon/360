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

const ForgotPassword = ({
  onBackToLoginClicked,
  showPostMessage,
  setShowPostMessage,
  onCalledValidateUsernameAPI,
}) => {
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "ForgotPassword" });
  const { handleSubmit, control, setError } = useForm();

  const onSubmit = ({ username }) => {
    if (
      constants.REGEX_PHONE_NUMBER.test(username) ||
      constants.REGEX_EMAIL.test(username)
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
    <Card
      className={globalStyles.container}
      sx={{ minWidth: 275, padding: "16px" }}
    >
      <CardContent style={styles.cardContentStyle}>
        <Typography variant="h2">{t("title")}</Typography>
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
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  label={t("usernamePlaceHolder")}
                  id="username"
                  variant="filled"
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
            {t("resetPasswordText")}
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

export default ForgotPassword;
