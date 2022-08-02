import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useRouter } from "next/router";
import { StyledInput } from "../../atoms/Input/input";
import { StyledButton } from "../../atoms/Button/button";
import globalStyles from "../../../styles/Global.module.scss";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./style";
import { useTranslation } from "react-i18next";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { Link, Typography } from "@mui/material";
import { PasswordValidator } from "../../molecules/PasswordValidator/passwordValidator";

const headingStyles = {
  marginBottom: 30,
};

const cardContentStyle = {
  display: "flex",
  flexDirection: "column",
  padding: 0,
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
  onSetPasswordClicked,
  username,
  title,
  subtitle,
  isUpdatePassword = false,
  passwordPlaceHolder = "Password",
  confirmPasswordPlaceHolder = "Confirm Password",
  ctaButtonLabel = "Create Account"
}) => {
  const router = useRouter();
  const { t } = useTranslation("translation", { keyPrefix: "SetPassword" });
  const { handleSubmit, control, watch, setError, setValue } = useForm();

  useEffect(() => {
    setValue("username", username);
  }, []);

  const validateErrorPassword = (errors1 = [], errors2 = [], errorForkedValidation = []) => {
    return errors1.length === 0 && errors2.length <= 1 && errorForkedValidation.length === 0
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

  let lengthRegex = /^[^\s]{8,20}$/;
  let numberRegex = /[0-9]/;
  let upperCaseRegex = /[A-Z]/;
  let lowerCaseRegex = /[a-z]/;
  let specialRegex = /[@#$%^&-+=()]/;
  let hasTripleRegex = /([a-z\\d])\\1\\1/;

  const passwordValidator = [
    {
      label: "Length: 8-20 characters",
      validate: !lengthRegex.test(watchedPassword),
      mandatory: true,
    },
    {
      label: "Contain at least 3 out of 4 types of characters below:",
      passesValidation: 3,
      text: true,
      children: [
        {
          label: "At least One Numeric",
          validate: numberRegex.test(watchedPassword),
        },
        {
          label: "At least One Upper case Alpha",
          validate: upperCaseRegex.test(watchedPassword),
        },
        {
          label: "At least One Lower case Alpha",
          validate: lowerCaseRegex.test(watchedPassword),
        },
        {
          label: "At least One Special character (no spaces)",
          validate: specialRegex.test(watchedPassword),
        },
      ],
    },
    {
      label: "Password should not contain your username",
      validate: watchedPassword.indexOf(!isUpdatePassword ? watchedEmail : username) > -1,
      mandatory: true,
    },
    {
      label: "New password must not match current password",
      validate: hasTripleRegex.test(watchedPassword),
      mandatory: true,
    },
  ];
  const isPasswordError = watchedPassword.length > 0;

  const is3of4 = (pass) => {
    let passes = 0;
    if (numberRegex.test(pass)) {
      ++passes;
    }
    if (specialRegex.test(pass)) {
      ++passes;
    }
    if (upperCaseRegex.test(pass) > -1) {
      ++passes;
    }
    if (lowerCaseRegex.test(pass)) {
      ++passes;
    }
    return passes >= 3 ? true : false;
  };

  const onSubmit = (data) => {
    if (data.password.toLowerCase() === data.confirmPassword.toLowerCase()) {
      const errors1 = [];
      const errors2 = [];
      const errorForkedValidation = [];
      passwordValidator.forEach((err) => {
        if (err.mandatory) {
          if (err.validate) errors1.push(err.validate);
        } else {
          if (err.validate) errors2.push(err.validate);
        }

        //Validation children validatior
        if(err.children && err.children.length > 0){
          let childrenValidation = 0
          err.children.forEach((child) => {
            if(child.validate){
              ++childrenValidation
            }
          })

          if(childrenValidation < (err.passesValidation || 3)){
            errorForkedValidation.push(true)
          }
        }
      });

      if (validateErrorPassword(errors1, errors2, errorForkedValidation)) {
        onSetPasswordClicked(data);
      }else{
        setError("confirmPassword", {
          type: "custom",
          message: t("passwordNotMeetRequirements"),
        });
      }
    } else {
      validateConfirmPassword(data.password, data.confirmPassword);
    }
  };

  const passwordRules = () =>{
    return {
      isLength: (v) => lengthRegex.test(v),
      isAtLeastOneNumber: (v) => numberRegex.test(v),
      is3of4: (v) => is3of4(v),
      isContainUserName: () => {
        return !pass.indexOf(watchedEmail) > -1;
      },
      isNotPreviousPassword: (v) => {
        return hasTripleRegex.test(v);
      },
    }
  }

  return (
    <Card className={globalStyles.container} sx={{ minWidth: 275, margin: 10 }}>
      <CardContent style={cardContentStyle}>
        <Typography variant="h2">{title}</Typography>
        {subtitle ? (
          <Typography variant="h4" sx={styles.titleStyles2}>
            {subtitle}
          </Typography>
        ) : (
          <></>
        )}

        <div style={{ margin: 8 }}>
          {showPostMessage ? (
            <FormMessage success={false} sx={styles.postMessage}>
              {postMessage}
            </FormMessage>
          ) : (
            <></>
          )}

          {formMessage && formMessage.content ? (
            <FormMessage
              success={formMessage.success}
              title={formMessage.title}
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
                // pattern: {
                //   value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
                //   message: "Username is invalid",
                // },
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
                    if (showPostMessage) {
                      setShowPostMessage(false);
                    }
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              );
            }}
            rules={{
              required: "This field is required",
              validate: !isUpdatePassword ? passwordRules : {},
            }}
          />
          {!isUpdatePassword ? (
            getPasswordValidator({
              passwordValidator,
              showValidator: isUpdatePassword || isPasswordError,
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
                    if (showPostMessage) {
                      setShowPostMessage(false);
                    }
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              );
            }}
            rules={{ 
              required: t("errorEmptyField"),
              validate: isUpdatePassword ? passwordRules : {}
            }}
          />
          {isUpdatePassword ? (
            getPasswordValidator({
              passwordValidator,
              showValidator: isUpdatePassword || isPasswordError,
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
            size="large"
            gradient={false}
            style={styles.margin}
          >
            {ctaButtonLabel}
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

export default SetPasswordComponent;
