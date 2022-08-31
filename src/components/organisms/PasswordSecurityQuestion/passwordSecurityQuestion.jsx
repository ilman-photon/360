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
import { useForm, Controller } from "react-hook-form";
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
  const { t } = useTranslation("translation", {
    keyPrefix: "PasswordSecurityQuestion",
  });
  const { handleSubmit, control } = useForm();
  const [countLock, setCountLock] = useState(0);
  const [postMessage, setPostMessage] = useState({ title: "", message: "" });
  const { FORGOT_TEST_ID } = constants.TEST_ID;
  const onSubmit = (data) => {
    let isValid = true;
    for (let i = 0; i < securityQuestionData.length; i++) {
      if (
        securityQuestionData[i]["Answer"] &&
        securityQuestionData[i]["Answer"].toLowerCase() !==
          data[`securityQuestion${i}`].toLowerCase()
      ) {
        isValid = false;
        setCountLock(countLock + 1);
        break;
      }
    }

    if (!isValid) {
      if (countLock >= constants.ACCOUNT_LOCK_COUNT) {
        setPostMessage({
          title: t("errorAccountLockTitle"),
          message: t("errorAccountLock"),
        });
        setShowPostMessage(true);
      } else {
        setPostMessage({ title: "", message: t("errorIncorrectAnswer") });
        setShowPostMessage(true);
      }
    } else {
      //TO DO: Navigate to update password
      onContinueButtonClicked("updatePassword", router);
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
          <Typography
            variant={constants.BODY_REGULAR}
            style={styles.subTitleMargin}
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
          <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
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
              theme={constants.PATIENT}
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

export default PasswordSecurityQuestion;
