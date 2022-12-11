import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/router";
import { StyledInput } from "../../atoms/Input/input";
import { StyledButton } from "../../atoms/Button/button";
import globalStyles from "../../../styles/Global.module.scss";
import { useForm, Controller, useFormState } from "react-hook-form";
import { styles } from "./style";
import { useTranslation } from "next-i18next";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { Link, Typography } from "@mui/material";
import { PasswordValidator } from "../../molecules/PasswordValidator/passwordValidator";
import { Regex } from "../../../utils/regex";
import constants from "../../../utils/constants";
import { HeadingTitle } from "../../atoms/Heading";
import { getLinkAria } from "../../../utils/viewUtil";
import { colors } from "../../../styles/theme";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
import Head from "next/head";
import { Api } from "../../../pages/api/api";

const cardContentStyle = {
  display: "flex",
  flexDirection: "column",
  padding: 0,
  marginTop: 0,
};

const getPasswordValidator = function ({
  passwordValidator,
  showValidator,
  watchedPassword,
  validateErrorPassword,
}) {
  return (
    <PasswordValidator
      validator={passwordValidator(watchedPassword)}
      isShowValidation={showValidator}
      password={watchedPassword}
      validatePassword={validateErrorPassword}
    />
  );
};

const SetPasswordComponent = ({
  showPostMessage,
  setShowPostMessage,
  onBackToLoginClicked,
  postMessage,
  formMessage,
  onSetPasswordClicked = () => {
    // This is intentional
  },
  username,
  title,
  subtitle,
  isUpdatePassword = false,
  passwordPlaceHolder = "Password",
  confirmPasswordPlaceHolder = "Confirm Password",
  ctaButtonLabel = "Create Account",
  showBackToLogin = true,
}) => {
  const router = useRouter();
  const { t, ready } = useTranslation("translation", {
    keyPrefix: "SetPassword",
    useSuspense: false,
  });
  const { handleSubmit, control, watch, setError, setValue } = useForm();
  const [showValidation, setShowValidation] = useState(isUpdatePassword);
  const [currentPassword, setCurrentPassword] = useState(false);
  const [isCheckPassword, setIsCheckPassword] = useState(false);
  const inputRef = React.useRef(null);
  const confirmRef = React.useRef(null);
  const { errors, isSubmitting } = useFormState({
    control,
  });

  React.useEffect(() => {
    if (errors.password) {
      inputRef.current.focus();
    } else if (errors.confirmPassword) {
      confirmRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  const validateErrorPassword = (
    errors1 = [],
    errors2 = [],
    errorForkedValidation = []
  ) => {
    return (
      errors1.length === 0 &&
      errors2.length <= 1 &&
      errorForkedValidation.length === 0
    );
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password.toLowerCase() !== confirmPassword.toLowerCase()) {
      setError("confirmPassword", {
        type: "custom",
        message: t("passwordNotMatch"),
      });
    }
  };

  const watchedPassword = watch("password", "");
  const [watchedEmail] = watch(["username"]); // you can also target specific fields by their names

  const passwordValidator = (watched) => {
    const passwordValidatorDefault = [
      {
        label: "Length: 8-20 characters",
        validate: !Regex.lengthRegex.test(watched),
        mandatory: true,
      },
      {
        label: "Contain at least 3 out of 4 types of characters below:",
        passesValidation: 3,
        text: true,
        children: [
          {
            label: "At least One Numeric",
            validate: Regex.numberRegex.test(watched),
          },
          {
            label: "At least One Upper case Alpha",
            validate: Regex.upperCaseRegex.test(watched),
          },
          {
            label: "At least One Lower case Alpha",
            validate: Regex.lowerCaseRegex.test(watched),
          },
          {
            label: "At least One Special character (no spaces)",
            validate: Regex.specialRegex.test(watched),
          },
        ],
      },
      {
        label: "Password should not contain your username",
        validate:
          watched?.length < 1
            ? true
            : watched?.indexOf(!isUpdatePassword ? watchedEmail : username) >
              -1,
        mandatory: true,
      },
    ];

    if (isUpdatePassword) {
      passwordValidatorDefault.push({
        label: "New password must not match current password",
        validate: !isCheckPassword ? true : currentPassword,
        mandatory: true,
      });
    }
    return passwordValidatorDefault;
  };

  const isPasswordError = isUpdatePassword
    ? showValidation
    : watchedPassword?.length > 0;

  const is3of4 = (pass) => {
    let passes = 0;
    if (Regex.numberRegex.test(pass)) {
      ++passes;
    }
    if (Regex.specialRegex.test(pass)) {
      ++passes;
    }
    if (Regex.upperCaseRegex.test(pass)) {
      ++passes;
    }
    if (Regex.lowerCaseRegex.test(pass)) {
      ++passes;
    }
    return passes >= 3 ? true : false;
  };

  const isValidPassword = (watched, isSubmit = false) => {
    const errors1 = [];
    const errors2 = [];
    const errorForkedValidation = [];

    passwordValidator(watched).forEach((err) => {
      if (err.mandatory && err.validate) {
        if (
          err.label == "New password must not match current password" &&
          errors1.length == 0 &&
          !isSubmit
        ) {
          //skip the error
        } else {
          errors1.push(err);
          setCurrentPassword(false);
          setIsCheckPassword(false);
        }
      } else if (err.validate) {
        errors2.push(err);
      }

      //Validation children validatior
      if (err.children && err.children.length > 0) {
        let childrenValidation = 0;
        err.children.forEach((child) => {
          if (child.validate) {
            ++childrenValidation;
          }
        });

        if (childrenValidation < (err.passesValidation || 3)) {
          errorForkedValidation.push(true);
        }
      }
    });
    return validateErrorPassword(errors1, errors2, errorForkedValidation);
  };

  const onSubmit = (data) => {
    if (isUpdatePassword) {
      setShowValidation(false);
    }
    if (data.password.toLowerCase() === data.confirmPassword.toLowerCase()) {
      if (isValidPassword(watchedPassword, true)) {
        onSetPasswordClicked(data);
      } else {
        if (!isUpdatePassword) {
          setError("password", {
            type: "custom",
            message: t("passwordNotMeetRequirements"),
          });
        }
        setError("confirmPassword", {
          type: "custom",
          message: t("passwordNotMeetRequirements"),
        });
      }
    } else {
      validateConfirmPassword(data.password, data.confirmPassword);
    }
  };

  const passwordRules = () => {
    return {
      isLength: (v) =>
        Regex.lengthRegex.test(v) || t("passwordNotMeetRequirements"),
      isNoWhitespace: (v) =>
        Regex.noWhitespaceRegex.test(v) || t("passwordNotMeetRequirements"),
      isAtLeastOneNumber: (v) =>
        Regex.numberRegex.test(v) || t("passwordNotMeetRequirements"),
      is3of4: (v) => is3of4(v) || t("passwordNotMeetRequirements"),
      isContainUserName: (v) =>
        v.indexOf(watchedEmail) <= -1 ||
        "Password should not contain your username",
      isNotPreviousPassword: (v) => {
        if (!isUpdatePassword) return true;
        return currentPassword;
      },
    };
  };

  useEffect(() => {
    setValue("username", username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formMessageComp = useRef(null);
  useEffect(() => {
    if (formMessageComp?.current?.scrollIntoView)
      formMessageComp.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  }, [formMessage]);

  const isEmail = Regex.emailValidation.test(username);
  const mailFormat =
    username &&
    username.replace(
      Regex.maskingEmail,
      (_, a, b, c) => a + b.replace(/./g, "*") + c
    );
  const maskedUsername = isEmail
    ? mailFormat
    : formatPhoneNumber(username, true, true);
  useEffect(() => {
    setValue("maskedUsername", maskedUsername);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const onChangePasswordValue = function () {
    if (showPostMessage) {
      setShowPostMessage(false);
    }
    if (!showValidation) {
      setShowValidation(true);
    }
  };

  const checkPassword = (value) => {
    const password = value.target.value;
    const postBody = {
      password: password,
      username: username,
    };
    if (isValidPassword(password)) {
      setIsCheckPassword(true);
      const api = new Api();
      api
        .getPasswordInfo(postBody)
        .then(() => {
          setCurrentPassword(true);
        })
        .catch(() => {
          setCurrentPassword(false);
        });
    }
  };

  return (
    <>
      <Head>
        <title>{`EyeCare Patient Portal - ${title}`}</title>
      </Head>
      {ready && (
        <Card
          className={globalStyles.container}
          sx={{ minWidth: 275, margin: 10, marginTop: 0 }}
        >
          <CardContent style={cardContentStyle}>
            <HeadingTitle
              variant={constants.H2}
              sx={{ marginLeft: "8px" }}
              title={title}
              tabIndex="0"
            />
            {subtitle ? (
              <Typography variant="h4" sx={styles.titleStyles2} tabIndex="0">
                {subtitle}
              </Typography>
            ) : (
              <></>
            )}

            <div>
              {showPostMessage ? (
                <FormMessage success={false} sx={styles.postMessage}>
                  {postMessage}
                </FormMessage>
              ) : (
                <></>
              )}

              {formMessage && formMessage.content ? (
                <FormMessage
                  ref={formMessageComp}
                  success={formMessage.success}
                  title={formMessage.title}
                  style={{ margin: 8 }}
                >
                  {formMessage.content}
                </FormMessage>
              ) : (
                ""
              )}
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              style={styles.form}
              noValidate
            >
              <Controller
                name="username"
                control={control}
                render={() => {
                  //this is intentional
                }}
              />
              {!isUpdatePassword ? (
                <Controller
                  name="maskedUsername"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="text"
                        id="username"
                        label="Username"
                        value={value}
                        // style={styles.margin}
                        disabled
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                        sx={{
                          margin: "8px",
                        }}
                      />
                    );
                  }}
                  rules={{
                    required: "Username required",
                  }}
                />
              ) : (
                <></>
              )}
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
                      label={passwordPlaceHolder}
                      type="password"
                      value={value}
                      inputRef={inputRef}
                      onChange={(event) => {
                        onChange(event);
                        onChangePasswordValue();
                        checkPassword(event);
                      }}
                      inputProps={{
                        "aria-label": `${passwordPlaceHolder} - required`,
                      }}
                      error={!!error}
                      required
                      helperText={error ? error.message : null}
                    />
                  );
                }}
                rules={{
                  required: t("errorEmptyField"),
                  validate: !isUpdatePassword ? passwordRules() : {},
                }}
              />
              {!isUpdatePassword ? (
                getPasswordValidator({
                  passwordValidator,
                  showValidator: isPasswordError,
                  watchedPassword,
                  validateErrorPassword,
                })
              ) : (
                <></>
              )}
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      id="confirmPassword"
                      label={confirmPasswordPlaceHolder}
                      type="password"
                      value={value}
                      inputRef={confirmRef}
                      inputProps={{
                        "aria-label": `${confirmPasswordPlaceHolder} - required`,
                        "data-testid": "confirmPassword",
                      }}
                      onChange={(event) => {
                        onChange(event);
                        onChangePasswordValue();
                      }}
                      error={!!error}
                      required
                      helperText={error ? error.message : null}
                    />
                  );
                }}
                rules={{
                  required: t("errorEmptyField"),
                  validate: !isUpdatePassword ? passwordRules() : {},
                }}
              />
              {isUpdatePassword ? (
                getPasswordValidator({
                  passwordValidator,
                  showValidator: isPasswordError,
                  watchedPassword,
                  validateErrorPassword,
                })
              ) : (
                <></>
              )}
              <StyledButton
                type="submit"
                theme="patient"
                mode="primary"
                size="small"
                gradient={false}
                style={{ ...styles.margin, margin: "8px 8px 0px" }}
              >
                {ctaButtonLabel}
              </StyledButton>
            </form>
            {showBackToLogin ? (
              <Link
                style={{ ...styles.margin, ...styles.link }}
                color={colors.link}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    router.push("/patient/login");
                  }
                }}
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

export default SetPasswordComponent;
