import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { LabelWithIcon } from "../../atoms/LabelWithIcon/labelWithIcon";
import { styled, alpha } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import { StyledInput } from "../../atoms/Input/input";
import globalStyles from "../../../styles/Global.module.scss";

const headingStyles = {
  marginBottom: 30,
};

const cardContentStyle = {
  display: "flex",
  flexDirection: "column",
  padding: 0,
};

const buttonStyle = {
  marginTop: 2,
  backgroundColor: "#3EAFBD",
  borderRadius: "48pt",
};

const SetPasswordComponent = () => {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  return (
    <Card className={globalStyles.container} sx={{ minWidth: 275, margin: 10 }}>
      <CardContent style={cardContentStyle}>
        <h1 style={headingStyles}>Set Password</h1>
        <StyledInput
          label="Password"
          id="outlined-adornment-password"
          type="password"
        />
        <StyledInput
          label="Confirm Password"
          id="outlined-adornment-confirm-password"
          type="password"
        />
        <Button variant="contained" sx={buttonStyle}>
          Reset Password
        </Button>
        <LabelWithIcon label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <LabelWithIcon
          error={true}
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <LabelWithIcon label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <LabelWithIcon label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
      </CardContent>
    </Card>
  );
};

export default SetPasswordComponent;
