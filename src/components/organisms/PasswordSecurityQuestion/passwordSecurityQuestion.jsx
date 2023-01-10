import React, { useState } from "react";
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
import { useForm, Controller, useFormState } from "react-hook-form";
import { HeadingTitle } from "../../atoms/Heading";
import { getLinkAria } from "../../../utils/viewUtil";
import Head from "next/head";
import { colors } from "../../../styles/theme";

const constants = require("../../../utils/constants");

const PasswordSecurityQuestion = ({
  onBackToLoginClicked,
  showPostMessage = false,
  setShowPostMessage,
  securityQuestionData = [],
  onContinueButtonClicked,
  title = "",
}) => {
  const router = useRouter();
  const { t, ready } = useTranslation("translation", {
    keyPrefix: "PasswordSecurityQuestion",
    useSuspense: false,
  });
  const { handleSubmit, control } = useForm();
  const [postMessage, setPostMessage] = useState({ title: "", message: "" });
  const inputRef = React.useRef([]);
  const { errors, isSubmitting } = useFormState({
    control,
  });

  React.useEffect(() => {
    if (Object.keys(errors).length > 0) {
      inputRef.current.forEach((_, idx) => {
        if (
          inputRef.current[idx] &&
          inputRef.current[idx].id === Object.keys(errors)[0]
        ) {
          inputRef.current[idx].focus();
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);
  const { FORGOT_TEST_ID } = constants.TEST_ID;
  const onSubmit = (data) => {
    const callback = (err) => {
      if (err.ResponseCode === 2004) {
        setPostMessage({
          title: t("errorAccountLockTitle"),
          message: t("errorAccountLock"),
        });
      } else {
        setPostMessage({ title: "", message: t("errorIncorrectAnswer") });
      }

      setShowPostMessage(true);
    };
    const questionAnswer = {};
    for (let i = 0; i < Object.keys(data).length; i++) {
      questionAnswer[securityQuestionData[i][`Question`]] =
        data[`securityQuestion${i}`];
    }
    onContinueButtonClicked(questionAnswer, callback, router);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {ready && (
        <Card
          className={globalStyles.container}
          sx={{ minWidth: 275, padding: "16px" }}
          aria-label={`${t("title")} view`}
        >
          <CardContent style={styles.cardContentStyle}>
            <HeadingTitle variant={constants.H2} title={t("title")} />
            <Typography
              variant={constants.BODY_REGULAR}
              style={styles.subTitleMargin}
              tabIndex="0"
              aria-roledescription="text"
            >
              {t("subtitle")}
            </Typography>
            {showPostMessage ? (
              <FormMessage
                success={false}
                sx={styles.postMessage}
                title={postMessage["title"]}
              >
                {postMessage["message"]}
              </FormMessage>
            ) : (
              <></>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={styles.form}
              noValidate
            >
              {securityQuestionData.map(function (question, i) {
                return (
                  <Controller
                    key={`controllerQuestion${i}`}
                    name={`securityQuestion${i}`}
                    control={control}
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => {
                      return (
                        <StyledInput
                          aria-label={value}
                          label={question[`Question`]}
                          id={`securityQuestion${i}`}
                          variant="filled"
                          inputRef={(el) =>
                            (inputRef.current = [...inputRef.current, el])
                          }
                          InputLabelProps={{
                            "aria-hidden": true,
                          }}
                          style={styles.margin}
                          key={`securityQuestion${i}`}
                          value={value}
                          onChange={(event) => {
                            onChange(event);
                            if (showPostMessage) {
                              setShowPostMessage(false);
                            }
                          }}
                          error={!!error}
                          required
                          helperText={error ? error.message : null}
                          sx={{ ".MuiInputLabel-root": { fontSize: "14px" } }}
                        />
                      );
                    }}
                    rules={{ required: t("errorEmptyField") }}
                  />
                );
              })}
              <StyledButton
                type={constants.SUBMIT}
                mode={constants.PRIMARY}
                size={constants.SMALL}
                gradient={false}
                data-testid={FORGOT_TEST_ID.continueBtn}
                style={styles.margin}
              >
                {t("continueButton")}
              </StyledButton>
            </form>
            <Link
              style={{
                ...styles.margin,
                ...styles.backToLoginMargin,
                ...styles.link,
              }}
              color={colors.link}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  router.push("/patient/login");
                }
              }}
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
      )}
    </>
  );
};

export default PasswordSecurityQuestion;
