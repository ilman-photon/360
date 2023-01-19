import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import { Api } from "../../../pages/api/api";
import constants from "../../../utils/constants";
import { Regex } from "../../../utils/regex";
import { StyledButton } from "../../atoms/Button/button";
import StyledInput from "../../atoms/Input/input";
import PasswordValidator from "../PasswordValidator/passwordValidator";
import Head from "next/head";
import { useRouter } from "next/router";
import { colors } from "../../../styles/theme";
export default function UpdatePasswordView({
  onUpdate = () => {
    // This is intentional
  },
}) {
  const [userData, setUserData] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [isHold, setIsHold] = useState(false);
  const [newPassValidator, setNewPassValidator] = useState(false);
  const [confirmPassValidator, setConfirmPassValidator] = useState(false);
  const { handleSubmit, control, watch, setError } = useForm();
  const { errors, isSubmitting } = useFormState({
    control,
  });
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const router = useRouter();

  const watchedNewPassword = watch("newPassword", "");
  const watchedConfirmPassword = watch("confirmPassword", "");

  const passwordValidator = (watched) => {
    return [
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
            : watched?.indexOf(userData?.username) > -1,
        mandatory: true,
      },
      {
        label: "New password must not match current password",
        hasLoading: true,
        validate: watched === currentPassword,
        mandatory: true,
      },
    ];
  };

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

  useEffect(() => {
    if (errors.newPassword) {
      newPasswordRef.current.focus();
    } else if (errors.confirmPassword) {
      confirmPasswordRef.current.focus();
    }
    userData === null &&
      setUserData(JSON.parse(localStorage.getItem("userData")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting, userData]);

  const validateField = (watched) => {
    const errors1 = [];
    const errors2 = [];
    const errorForkedValidation = [];

    passwordValidator(watched).forEach((err) => {
      if (err.mandatory && err.validate) {
        errors1.push(err.validate);
      } else if (err.validate) {
        errors2.push(err.validate);
      }

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

  const checkPassword = (value) => {
    const password = value.target.value;
    const postBody = {
      password: password,
      username: userData?.username,
    };

    if (validateField(password)) {
      if (currentPassword === "") {
        setIsHold(true);
        const api = new Api();
        api
          .getPasswordInfo(postBody)
          .then(() => {
            setCurrentPassword(password);
            setIsHold(false);
          })
          .catch(() => {
            setIsHold(false);
          });
      }
    }
  };

  const onSubmit = ({ newPassword, confirmPassword }) => {
    if (
      validateField(watchedNewPassword) &&
      validateField(watchedConfirmPassword) &&
      !isHold
    ) {
      const postBody = {
        confirmPassword: {
          ConfirmPassword: confirmPassword,
          password: newPassword,
        },
        patient: {
          userName: userData?.username,
        },
      };
      onUpdate(postBody);
    } else {
      if (!validateField(watchedNewPassword)) {
        setError("newPassword", {
          type: "custom",
          message: "Password does not meet requirements",
        });
      }

      if (!validateField(watchedConfirmPassword)) {
        setError("confirmPassword", {
          type: "custom",
          message: "Password does not meet requirements",
        });
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        maxWidth: "1495px",
        background: "white",
        mx: {
          sm: 0,
          lg: 3,
        },
        py: {
          xs: 3,
          sm: 4,
        },
        px: {
          xs: 2,
          sm: 3,
        },
      }}
    >
      <Head>
        <title>Update Password page</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3}>
          <Typography
            tabIndex={0}
            aria-label="Update Password heading"
            variant="headlineH2"
            color={colors.darkGreen}
          >
            Update password
          </Typography>
          <Box
            sx={{
              maxWidth: "681px",
              display: "flex",
              flexDirection: "column",
              "& .MuiFormControl-root": {
                m: 0,
                mb: 1,
              },
            }}
          >
            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    inputRef={newPasswordRef}
                    id="new-password"
                    type="password"
                    label={"New Password"}
                    inputProps={{
                      "aria-label": `New Password - required`,
                    }}
                    variant={constants.FILLED}
                    data-testid={"new-password-field"}
                    value={value}
                    onChange={(val) => {
                      setNewPassValidator(true);
                      setConfirmPassValidator(false);
                      checkPassword(val);
                      onChange(val);
                    }}
                    error={!!error}
                    required
                    helperText={error ? error.message : null}
                  />
                );
              }}
              rules={{
                required: "This field is required",
              }}
            />

            <PasswordValidator
              validator={passwordValidator(watchedNewPassword)}
              isShowValidation={
                newPassValidator && watchedNewPassword.length > 0
              }
              password={watchedNewPassword}
              validatePassword={validateErrorPassword}
              isLoading={newPassValidator && isHold}
              sx={{
                mt: -2,
              }}
            />

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
                    inputRef={confirmPasswordRef}
                    id="confirm-password"
                    type="password"
                    label={"Confirm New Password"}
                    inputProps={{
                      "aria-label": `Confirm New Password - required`,
                    }}
                    variant={constants.FILLED}
                    data-testid={"confirm-password-field"}
                    value={value}
                    onChange={(val) => {
                      setNewPassValidator(false);
                      setConfirmPassValidator(true);
                      checkPassword(val);
                      onChange(val);
                    }}
                    error={!!error}
                    required
                    helperText={error ? error.message : null}
                  />
                );
              }}
              rules={{
                validate: {
                  notMatch: (value) => {
                    if (value !== watchedNewPassword) {
                      return "Passwords do not match";
                    }
                  },
                },
                required: "This field is required",
              }}
            />

            <PasswordValidator
              validator={passwordValidator(watchedConfirmPassword)}
              isShowValidation={
                confirmPassValidator && watchedConfirmPassword.length > 0
              }
              password={watchedConfirmPassword}
              validatePassword={validateErrorPassword}
              isLoading={confirmPassValidator && isHold}
              sx={{
                mt: -2,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column-reverse",
                sm: "row",
              },
              gap: 2,
            }}
          >
            <StyledButton
              mode={constants.SECONDARY}
              type="button"
              tabIndex={0}
              aria-label={"Cancel button"}
              size={constants.SMALL}
              data-testid={"cancel-btn"}
              gradient={false}
              onClick={() => {
                router.push("/patient/account/login-&-security");
              }}
            >
              <Typography
                variant="controlButtonText"
                color={colors.primaryButton}
              >
                Cancel
              </Typography>
            </StyledButton>
            <StyledButton
              mode={constants.PRIMARY}
              type="submit"
              tabIndex={0}
              aria-label={"Update Password "}
              size={constants.SMALL}
              data-testid={"update-btn"}
              gradient={false}
            >
              <Typography variant="controlButtonText" color={"unset"}>
                Update Password
              </Typography>
            </StyledButton>
          </Box>
        </Stack>
      </form>
    </Box>
  );
}
