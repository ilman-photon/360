import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { alpha, styled } from "@mui/material/styles";
import { StyledInput } from "../../atoms/Input/input";
import LinkIcon from "@mui/icons-material/Link";
import { useTranslation } from "react-i18next";
import globalStyles from "../../../styles/Global.module.scss";
import { useRouter } from "next/router";

const headingStyles = {
  marginBottom: 30,
  textAlign: "left",
};

const labelStyle = {
  textAlign: "left",
};

const center = {
  marginTop: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
};

const cardContentStyle = {
  display: "flex",
  flexDirection: "column",
  padding: 0,
};

const securityQuestionContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const buttonStyle = {
  marginTop: 2,
  backgroundColor: "#3EAFBD",
  borderRadius: "48pt",
};

const magicLinkStyle = {
  color: "#3EAFBD",
  borderRadius: "48pt",
  borderColor: "#003B4A",
};

const regularFont = {
  fontFamily: "Libre Franklin",
  fontSize: "16px",
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

const ForgotPasswordComponent = () => {
  const router = useRouter();
  const { t } = useTranslation("forgotPassword");
  const [isValidUsername, setValidUsername] = useState(false);
  const [isMagicLinkClicked, setMagicLinkClicked] = useState(false);
  const [isShowSecurityQuestion, setShowSecurityQuestion] = useState(false);

  const onResetPasswordClicked = () => {
    setValidUsername(!isValidUsername);
  };

  const onMagicLinkClicked = () => {
    setMagicLinkClicked(!isMagicLinkClicked);
  };

  const onSetNewPasswordClicked = () => {
    //setShowSecurityQuestion(!isShowSecurityQuestion);
    router.push("/set-password");
  };

  const magicLinkUI = () => {
    return (
      <div>
        <p style={regularFont}>
          User receives a magic link to their registered email-id/ mobile number
        </p>
      </div>
    );
  };

  const getSecurityQuestionUI = () => {
    return (
      <div style={securityQuestionContainer}>
        <TextField
          id="outlined-basic"
          label="Security Question 1"
          variant="standard"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          label="Security Question 2"
          variant="standard"
          margin="dense"
        />
        <TextField
          id="outlined-basic"
          label="Security Question 3"
          variant="standard"
          margin="dense"
        />
      </div>
    );
  };

  return (
    <Card className={globalStyles.container} sx={{ minWidth: 275, margin: 10 }}>
      <CardContent style={cardContentStyle}>
        <h1 style={headingStyles}>{t("title")}</h1>
        <label style={labelStyle}>{t("description")}</label>
        <StyledInput
          label="Email or Phone"
          id="reddit-input"
          variant="filled"
        />
        <Button
          variant="contained"
          sx={buttonStyle}
          onClick={onResetPasswordClicked}
        >
          Reset Password
        </Button>
        {isValidUsername ? (
          <div style={center}>
            {/* <Button variant="contained" sx={buttonStyle} onClick={onMagicLinkClicked}>Magic Link</Button> */}
            <Button
              variant="outlined"
              startIcon={<LinkIcon />}
              onClick={onMagicLinkClicked}
              sx={magicLinkStyle}
            >
              Magic Link
            </Button>
            {isMagicLinkClicked ? magicLinkUI() : null}
            <Button
              variant="contained"
              sx={buttonStyle}
              onClick={onSetNewPasswordClicked}
            >
              Set New Password
            </Button>
            {isShowSecurityQuestion ? getSecurityQuestionUI() : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default ForgotPasswordComponent;
