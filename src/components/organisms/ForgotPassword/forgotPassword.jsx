import * as React from "react";
import Box from "@mui/material";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { StyledInput } from "../../atoms/Input/input";
import { alpha, styled } from "@mui/material/styles";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, TextField } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const headingStyles = {
  marginBottom: 30,
  textAlign: "left",
};

const labelStyle = {
  textAlign: "left",
  marginBottom: "20px",
};

const cardContentStyle = {
  display: "flex",
  flexDirection: "column",
  padding: 0,
};

const buttonStyle = {
  marginTop: 3,
  backgroundColor: "#015064",
  borderRadius: "48pt",
  textTransform: "none",
  "&:hover": {
    background: "#015064",
  },
};

const linkStyles = {
  textAlign: "center",
  cursor: "pointer",
  color: "#015064",
  fontWeight: "bold",
};

const successStyle = {
  paddingLeft: "10px",
};

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function ForgotPasswordComponent({ OnSubmitClicked }) {
  const [postMessage, setPostMessage] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const router = useRouter();
  const { t } = useTranslation("forgotPassword");
  const { handleSubmit, setError, control } = useForm();

  const onSubmit = ({ userName }) => {
    OnSubmitClicked({ userName }, router, checkMessage);
    console.log({ userName });
  };

  const checkMessage = (message) => {
    const messageStatus = message.status === "failed";

    const userNameStatus = message.postBody;

    if (messageStatus) {
      setError("userName", {
        type: "custom",
        message: "Incorrect email or username. Please Try again.",
      });
    } else if (userNameStatus.userName == "smith4@photon.com") {
      setSuccess(
        "A link has been sent to your registered email to reset your password. Please Check"
      );
    } else if (userNameStatus.userName == "smith1@photon.com") {
      setSuccess("Please check your email to reset your password");
    }
    setPostMessage(message);
  };

  const renderFromMessage = () => {
    return (
      postMessage.status === "success" && (
        <div
          style={{
            backgroundColor: "#059142",
            borderRadius: "4px",
            color: "#fff",
            padding: "10px",
            marginBottom: "10px",
            fontSize: "15px",
            display: "flex",
          }}
        >
          <div>
            <CheckCircleIcon
              sx={{
                backgroundColor: "#fff",
                color: "#059142",
                borderRadius: "50px",
                transform: "scale(0.6)",
              }}
            />
          </div>
          <div sx={successStyle}>{success}</div>
        </div>
      )
    );
  };

  return (
    <div className={globalStyles.container} sx={{ minWidth: 275, margin: 10 }}>
      <CardContent style={cardContentStyle}>
        <h1 style={headingStyles}>{t("title")}</h1>
        {renderFromMessage()}
        <label style={labelStyle}>{t("description")}</label>
        <Stack spacing={3}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                name="userName"
                control={control}
                defaultValue=""
                rules={{ required: "This is a required field" }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <TextField
                      id="userName"
                      label="Email or Username*"
                      error={!!error}
                      helperText={error ? error.message : null}
                      value={value}
                      onChange={onChange}
                    />
                  );
                }}
              />

              <Button variant="contained" sx={buttonStyle} type="submit">
                Submit
              </Button>
              <Link underline="none" sx={linkStyles} href="/provider/login">
                Back To Login
              </Link>
            </Stack>
          </form>
        </Stack>
      </CardContent>
    </div>
  );
}
