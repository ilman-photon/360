import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/router";
import { StyledInput } from "../../atoms/Input/input";
import { StyledButton } from "../../atoms/Button/button";
import globalStyles from "../../../styles/Global.module.scss";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./style";
import { useTranslation } from "next-i18next";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { Link, Typography } from "@mui/material";
import { PasswordValidator } from "../../molecules/PasswordValidator/passwordValidator";
import { Regex } from "../../../utils/regex";
import constants from "../../../utils/constants";
import { HeadingTitle } from "../../atoms/Heading";
import { getLinkAria } from "../../../utils/viewUtil";

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
      validator={passwordValidator}
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
  const { t } = useTranslation("translation", { keyPrefix: "SetPassword" });
  const { handleSubmit, control, watch, setError, setValue } = useForm();
  const [showValidation, setShowValidation] = useState(isUpdatePassword);

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

  const passwordValidator = [
    {
      label: "Length: 8-20 characters",
      validate: !Regex.lengthRegex.test(watchedPassword),
      mandatory: true,
    },
    {
      label: "Contain at least 3 out of 4 types of characters below:",
      passesValidation: 3,
      text: true,
      children: [
        {
          label: "At least One Numeric",
          validate: Regex.numberRegex.test(watchedPassword),
        },
        {
          label: "At least One Upper case Alpha",
          validate: Regex.upperCaseRegex.test(watchedPassword),
        },
        {
          label: "At least One Lower case Alpha",
          validate: Regex.lowerCaseRegex.test(watchedPassword),
        },
        {
          label: "At least One Special character (no spaces)",
          validate: Regex.specialRegex.test(watchedPassword),
        },
      ],
    },
    {
      label: "Password should not contain your username",
      validate:
        watchedPassword.length < 1
          ? true
          : watchedPassword.indexOf(
              !isUpdatePassword ? watchedEmail : username
            ) > -1,
      mandatory: true,
    },
    {
      label: "New password must not match current password",
      validate:
        watchedPassword.length < 1
          ? true
          : Regex.hasTripleRegex.test(watchedPassword),
      mandatory: true,
    },
  ];
  const isPasswordError = isUpdatePassword
    ? showValidation
    : watchedPassword.length > 0;

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

  const onSubmit = (data) => {
    if (isUpdatePassword) {
      setShowValidation(false);
    }
    if (data.password.toLowerCase() === data.confirmPassword.toLowerCase()) {
      const errors1 = [];
      const errors2 = [];
      const errorForkedValidation = [];
      passwordValidator.forEach((err) => {
        if (err.mandatory && err.validate) {
          errors1.push(err.validate);
        } else if (err.validate) {
          errors2.push(err.validate);
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

      if (validateErrorPassword(errors1, errors2, errorForkedValidation)) {
        onSetPasswordClicked(data);
      } else {
        setError("password", {
          type: "custom",
          message: t("passwordNotMeetRequirements"),
        });
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
        return Regex.hasTripleRegex.test(v);
      },
    };
  };

  useEffect(() => {
    setValue("username", username);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formMessageComp = useRef(null);
  useEffect(() => {
    if (formMessageComp.current)
      formMessageComp.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  }, [formMessage]);

  const onChangePasswordValue = function () {
    if (showPostMessage) {
      setShowPostMessage(false);
    }
    if (!showValidation) {
      setShowValidation(true);
    }
  };

  return (
    <Card
      className={globalStyles.container}
      sx={{ minWidth: 275, margin: 10, marginTop: 0 }}
    >
      <CardContent style={cardContentStyle}>
        <HeadingTitle
          variant={constants.H2}
          sx={{ marginLeft: "8px" }}
          title={title}
        />
        {subtitle ? (
          <Typography variant="h4" sx={styles.titleStyles2}>
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

        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          {!isUpdatePassword ? (
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
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  id="password"
                  label={passwordPlaceHolder}
                  type="password"
                  value={value}
                  onChange={(event) => {
                    onChange(event);
                    onChangePasswordValue();
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              );
            }}
            rules={{
              required: "This field is required",
              validate: passwordRules(),
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
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  id="confirmPassword"
                  label={confirmPasswordPlaceHolder}
                  type="password"
                  value={value}
                  // style={styles.margin}
                  onChange={(event) => {
                    onChange(event);
                    onChangePasswordValue();
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              );
            }}
            rules={{
              required: t("errorEmptyField"),
              validate: passwordRules(),
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
            style={styles.margin}
          >
            {ctaButtonLabel}
          </StyledButton>
        </form>
        {showBackToLogin ? (
          <Link
            style={{ ...styles.margin, ...styles.link }}
            color={"#2095a9"}
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
  );
};

export default SetPasswordComponent;
