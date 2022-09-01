import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { StyledInput } from "../../atoms/Input/input";
import { Divider, Typography } from "@mui/material";
import styles from "./Style.module.scss";
import globalStyles from "../../../styles/Global.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";
import { useForm, Controller } from "react-hook-form";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { useTranslation } from "next-i18next";
import { HeadingTitle } from "../../atoms/Heading";
import { getLinkAria } from "../../../utils/viewUtil";

const constants = require("../../../utils/constants");

export function Login({
  OnLoginClicked,
  OnGuestClicked,
  OnCreateAccountClicked,
  OnForgotPasswordClicked,
  onAppointMentClicked,
}) {
  const [postMessage, setPostMessage] = React.useState("");
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "Login" });
  const { LOGIN_TEST_ID } = constants.TEST_ID;
  const { handleSubmit, setError, control } = useForm();
  const [isThresholdAdmin, setIsThresholdAdmin] = React.useState(true);
  const onSubmit = ({ username, password }) => {
    OnLoginClicked({ username, password }, router, checkMessage);
  };

  const checkMessage = (message) => {
    const messageStatus = message.status === "failed";
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
  };

  const renderFromMessage = () => {
    return (
      postMessage.status === "failed" && (
        <FormMessage error title={postMessage.message.title}>
          {postMessage.message.description}
        </FormMessage>
      )
    );
  };
  useEffect(() => {
    if (router.asPath == "/patient/admin/login") {
      setIsThresholdAdmin(true);
    } else {
      setIsThresholdAdmin(false);
    }
  }, [isThresholdAdmin]);
  return (
    <Box
      className={[styles.overideContainer, globalStyles.container].join(" ")}
    >
      <HeadingTitle
        variant={constants.H1}
        className={styles.title}
        title={t("formTitle")}
      />
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
                    label={t("emailUserLabel")}
                    size={constants.SMALL}
                    variant={constants.FILLED}
                    data-testid={LOGIN_TEST_ID.email}
                    type={constants.INPUT_TEXT}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                );
              }}
              rules={{
                required: t("thisFieldRequired"),
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
                    data-testid={LOGIN_TEST_ID.password}
                    label={t("passwordLabel")}
                    type={constants.INPUT_PASSWORD}
                    size={constants.SMALL}
                    variant={constants.FILLED}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    aria
                    helperText={error ? error.message : null}
                  />
                );
              }}
              rules={{ required: t("thisFieldRequired") }}
            />

            <Grid container justifyContent={constants.FLEX_END}>
              <Typography variant="bodyMedium">
                <Link
                  className={styles.link}
                  data-testid={LOGIN_TEST_ID.forgotLink}
                  {...getLinkAria(t("forgotPassword"))}
                  onClick={function () {
                    OnForgotPasswordClicked(router);
                  }}
                >
                  {t("forgotPassword")}
                </Link>
              </Typography>
            </Grid>
            <StyledButton
              theme={constants.PATIENT}
              mode={constants.PRIMARY}
              type="submit"
              size={constants.SMALL}
              data-testid={LOGIN_TEST_ID.loginBtn}
              gradient={false}
            >
              {t("loginButtonLabel")}
            </StyledButton>
          </Stack>
        </form>
        {!isThresholdAdmin && (
          <>
            <StyledButton
              theme={constants.PATIENT}
              mode={constants.SECONDARY}
              size={constants.SMALL}
              gradient={false}
              onClick={OnGuestClicked}
              data-testid={LOGIN_TEST_ID.guestBtn}
            >
              {t("continueAsPasswordButtonLabel")}
            </StyledButton>
          </>
        )}

        {isThresholdAdmin && (
          <>
            <Grid container justifyContent={constants.CENTER}>
              <Typography
                variant="bodyMedium"
                sx={{ color: "#003B4A", fontWeight: 600, textAlign: "center" }}
              >
                {t("alreadyHaveAnAppointment")}
                <br />
                <Link
                  className={styles.link}
                  data-testid={LOGIN_TEST_ID.syncAppointmentLink}
                  {...getLinkAria(t("syncYourAppointmentInformation"))}
                  href={onAppointMentClicked}
                >
                  {t("syncYourAppointmentInformation")}
                </Link>
              </Typography>
            </Grid>
          </>
        )}

        <Divider variant={constants.MIDDLE} className={styles.divider} />

        <Grid container justifyContent={constants.CENTER}>
          <Typography variant="bodyMedium" sx={{ color: "#003B4A" }}>
            {t("dontHaveAccountLabel")}
          </Typography>
        </Grid>

        <StyledButton
          theme={constants.PATIENT}
          mode={constants.SECONDARY}
          size={constants.SMALL}
          gradient={false}
          data-testid={LOGIN_TEST_ID.createAccountBtn}
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
