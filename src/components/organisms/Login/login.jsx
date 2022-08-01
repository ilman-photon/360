import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { StyledInput } from "../../atoms/Input/input";
import { Divider, Typography } from "@mui/material";
import styles from "./Style.module.scss";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import { useForm, Controller } from "react-hook-form";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { useTranslation } from "react-i18next";

const constants = require("../../../utils/constants");

export default function Login({
  OnLoginClicked,
  OnGuestClicked,
  OnCreateAccountClicked,
  OnForgotPasswordClicked,
}) {
  const [postMessage, setPostMessage] = React.useState("");
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "Login" });

  const { handleSubmit, setError, control } = useForm();

  const onSubmit = ({ username, password }) => {
    OnLoginClicked({ username, password }, router, checkMessage);
    console.log({ username, password });
  };

  const checkMessage = (message) => {
    const messageStatus = message.status === "failed";
    console.log(`messageStatus ${messageStatus}`);
    if (messageStatus) {
      setError("username", {
        type: "custom",
        message: "Enter a valid Email or Phone Number",
      });
      setError("password", {
        type: "custom",
        message: "This field is required",
      });
    }
    setPostMessage(message);
    console.log("this", postMessage, message);
  };

  const renderFromMessage = () => {
    console.log("sas", postMessage);
    return (
      postMessage.status === "failed" && (
        <FormMessage error title={postMessage.message.title}>
          {postMessage.message.description}
        </FormMessage>
      )
    );
  };

  return (
    <Box className={globalStyles.container}>
      <Typography variant={constants.H1} className={styles.title}>
        {t("formTitle")}
      </Typography>
      {renderFromMessage()}
      <Stack spacing={2}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
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
                    id="username"
                    label={t("emailUserLabael")}
                    size={constants.SMALL}
                    variant={constants.FILLED}
                    type={constants.INPUT_TEXT}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                );
              }}
              rules={{
                required: t("emailRequiredLabel"),
              }}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    id="password"
                    label={ t("passwordLabel")}
                    type={constants.INPUT_PASSWORD}
                    size={constants.SMALL}
                    variant={constants.FILLED}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                );
              }}
              rules={{ required: t("thisFieldRequired") }}
            />
            <Grid container justifyContent={constants.FLEX_END}>
              <Link
                className={styles.link}
                onClick={function () {
                  OnForgotPasswordClicked(router);
                }}
              >
                 {t("forgotPassowrd")}
              </Link>
            </Grid>
            <StyledButton
              theme={constants.PATIENT}
              mode={constants.PRIMARY}
              type="submit"
              size={constants.LARGE}
              gradient={false}
            >
                 {t("loginButtonLabel")}
            </StyledButton>
          </Stack>
        </form>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.SECONDARY}
          size={constants.LARGE}
          gradient={false}
          onClick={OnGuestClicked}
        >
          {t("continueAsPasswordButtonLabel")}
        </StyledButton>
        <Divider variant={constants.MIDDLE} className={styles.divider} />

        <Grid container justifyContent={constants.CENTER}>
          <Typography variant="bodyRegular">
          {t("dontHaveAccountLabel")}
          </Typography>
        </Grid>

        <StyledButton
          theme={constants.PATIENT}
          mode={constants.SECONDARY}
          size={constants.LARGE}
          gradient={false}
          onClick={function () {
            OnCreateAccountClicked(router);
          }}
        >
          {t("createAccountButtonLabel")}
        </StyledButton>
      </Stack>
    </Box>
  );
}
