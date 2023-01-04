import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import { Regex } from "../../../utils/regex";
import { StyledButton } from "../../atoms/Button/button";
import StyledInput from "../../atoms/Input/input";
const constants = require("../../../utils/constants");

export default function UpdateUsernameView({
  onUpdate = () => {
    // This is intentional
  },
}) {
  const [userData, setUserData] = useState(null);
  const { handleSubmit, control, setError } = useForm();
  const { errors, isSubmitting } = useFormState({
    control,
  });
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (errors.username) {
      inputRef.current.focus();
    }
    userData === null &&
      setUserData(JSON.parse(localStorage.getItem("userData")));
  }, [errors.username, isSubmitting, userData]);

  const onSubmit = ({ username }) => {
    if (username === userData?.username) {
      setError("username", {
        type: "custom",
        message:
          "Please enter a different username other than the previous username",
      });
    } else {
      onUpdate(username);
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
      {userData !== null && (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={3}>
            <Typography
              tabIndex={0}
              aria-label={"Update Username"}
              variant="titleCard"
            >
              Update Username
            </Typography>
            <Stack
              spacing={2}
              sx={{
                maxWidth: "681px",
              }}
            >
              <Typography tabIndex={0} variant="bodyMedium" color={"#191919"}>
                You can submit a valid email ID or phone number as your username
              </Typography>
              <Controller
                name="username"
                control={control}
                defaultValue={userData?.username}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      inputRef={inputRef}
                      InputLabelProps={{
                        "aria-hidden": true,
                        "aria-label": "Username required text field",
                      }}
                      aria-label={"Username required text field"}
                      id="update-username"
                      label={"Username"}
                      size={constants.SMALL}
                      variant={constants.FILLED}
                      data-testid={"username-field"}
                      type={constants.INPUT_TEXT}
                      value={value}
                      onChange={(val) => {
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
                    incorrectFormat: (value) => {
                      if (
                        !(
                          Regex.REGEX_PHONE_NUMBER_ONLY.test(value) ||
                          Regex.emailValidation.test(value)
                        )
                      ) {
                        return "Please enter a valid email ID or Phone number";
                      }
                    },
                  },
                  required: "This field is required",
                }}
              />
            </Stack>
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
                theme={constants.PATIENT}
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
                Cancel
              </StyledButton>
              <StyledButton
                theme={constants.PATIENT}
                mode={constants.PRIMARY}
                type="submit"
                tabIndex={0}
                aria-label={"Update button"}
                size={constants.SMALL}
                data-testid={"update-btn"}
                gradient={false}
              >
                Update
              </StyledButton>
            </Box>
          </Stack>
        </form>
      )}
    </Box>
  );
}
