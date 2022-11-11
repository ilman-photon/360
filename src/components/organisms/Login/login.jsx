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
import { useTranslation } from "next-i18next";
import { HeadingTitle } from "../../atoms/Heading";
import { getLinkAria } from "../../../utils/viewUtil";
import { colors } from "../../../styles/theme";

const constants = require("../../../utils/constants");

export function Login({
  OnLoginClicked,
  OnCreateAccountClicked,
  OnForgotPasswordClicked,
  onAppointmentClicked,
  dispatch,
}) {
  const [postMessage, setPostMessage] = React.useState("");
  const router = useRouter();
  const { t, ready } = useTranslation("translation", {
    keyPrefix: "Login",
    useSuspense: false,
  });
  const { LOGIN_TEST_ID } = constants.TEST_ID;
  const { handleSubmit, control } = useForm();
  const onSubmit = ({ username, password }) => {
    OnLoginClicked({ username, password }, router, checkMessage, dispatch);
  };

  const checkMessage = (message) => {
    setPostMessage(message);
  };

  const renderFromMessage = () => {
    return (
      postMessage.status === "failed" && (
        <Box marginBottom={"16px"}>
          <FormMessage
            tabIndex={0}
            aria-live={"assertive"}
            aria-label={t(postMessage.message.description)}
            error
            title={postMessage.message.title && t(postMessage.message.title)}
          >
            {t(postMessage.message.description)}
          </FormMessage>
        </Box>
      )
    );
  };

  return (
    <>
      {ready && (
        <Box
          className={[styles.overideContainer, globalStyles.container].join(
            " "
          )}
        >
          <HeadingTitle
            variant={constants.H1}
            className={styles.title}
            tabIndex={0}
            aria-label={"Patient login Heading"}
            title={t("formTitle")}
          />
          {renderFromMessage()}
          <Stack spacing={2}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                        tabIndex={0}
                        InputLabelProps={{ "aria-hidden": true }}
                        aria-label={"Email or Phone number required text field"}
                        id="username"
                        label={t("emailUserLabel")}
                        size={constants.SMALL}
                        variant={constants.FILLED}
                        data-testid={LOGIN_TEST_ID.email}
                        type={constants.INPUT_TEXT}
                        value={value}
                        onChange={(val) => {
                          setPostMessage({ status: "" });
                          onChange(val);
                        }}
                        error={!!error}
                        required
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                  rules={{
                    required: t("thisFieldRequired"),
                  }}
                />
                <Controller
                  tabIndex={0}
                  aria-label={"Password required text field"}
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        tabIndex={0}
                        InputLabelProps={{ "aria-hidden": true }}
                        aria-label={"Password required text field"}
                        id="password"
                        data-testid={LOGIN_TEST_ID.passwordField}
                        label={t("passwordLabel")}
                        type={constants.INPUT_PASSWORD}
                        size={constants.SMALL}
                        variant={constants.FILLED}
                        value={value}
                        onChange={(val) => {
                          setPostMessage({ status: "" });
                          onChange(val);
                        }}
                        error={!!error}
                        aria
                        required
                        helperText={error ? error.message : null}
                      />
                    );
                  }}
                  rules={{ required: t("thisFieldRequired") }}
                />

                <Grid container justifyContent={constants.FLEX_END}>
                  <Typography variant="bodyMedium">
                    <Link
                      tabIndex={0}
                      aria-label={"Forgot password link"}
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
                  tabIndex={0}
                  aria-label={"Login button"}
                  size={constants.SMALL}
                  data-testid={LOGIN_TEST_ID.loginBtn}
                  gradient={false}
                >
                  {t("loginButtonLabel")}
                </StyledButton>
              </Stack>
            </form>
            <>
              <Grid container justifyContent={constants.CENTER}>
                <Typography
                  variant="bodyMedium"
                  sx={{
                    color: colors.grey,
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  <div tabIndex={0} aria-label={t("alreadyHaveAnAppointment")}>
                    {t("alreadyHaveAnAppointment")}
                  </div>

                  <br />
                  <Link
                    aria-label={t("syncYourAppointmentInformation") + " Link"}
                    className={styles.link}
                    tabIndex={0}
                    data-testid={LOGIN_TEST_ID.syncAppointmentLink}
                    {...getLinkAria(t("syncYourAppointmentInformation"))}
                    href={onAppointmentClicked}
                  >
                    {t("syncYourAppointmentInformation")}
                  </Link>
                </Typography>
              </Grid>
            </>

            <Divider variant={constants.MIDDLE} className={styles.divider} />

            <Grid container justifyContent={constants.CENTER}>
              <Typography
                variant="bodyMedium"
                tabIndex={0}
                sx={{ color: "#003B4A" }}
                aria-label={t("dontHaveAccountLabel")}
              >
                {t("dontHaveAccountLabel")}
              </Typography>
            </Grid>

            <StyledButton
              theme={constants.PATIENT}
              mode={constants.SECONDARY}
              tabIndex={0}
              aria-label={"Create Account button"}
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
      )}
    </>
  );
}
