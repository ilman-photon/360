import { ThemeProvider, styled } from "@mui/material/styles";
import React from "react";
import styles from "./button.module.css";

import Button from "@mui/material/Button";
import {
  patientButtonPrimary,
  patientButtonSecondary,
  providerButtonPrimary,
  providerButtonSecondary,
} from "../../../styles/theme";

export const CustomButton = styled(Button)(
  ({ theme }) => `

  background: ${theme.button.background};
  border-color:${theme.button.borderColor};
  color: ${theme.button.color};
  border-radius: 46px;
  padding: 16px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-transform: none;

  :hover {
    background:${theme.button.background};
    border-color:${theme.button.borderColor};
  }
`
);

export const StyledButton = ({
  theme = "patient" || "provider",
  mode = "primary" || "secondary",
  size = "large",
  gradient,
  ...props
}) => {
  const isPatient = theme === "patient";
  const isPrimary = mode === "primary";
  const isLarge = size === "large";
  let themeSelector = isPatient
    ? isPrimary
      ? patientButtonPrimary
      : patientButtonSecondary
    : isPrimary
    ? providerButtonPrimary
    : providerButtonSecondary;
  let sizeSelector = isLarge
    ? styles.customButtonLarge
    : styles.customButtonSmall;
  return (
    <ThemeProvider theme={themeSelector}>
      <CustomButton
        variant={isPrimary ? "contained" : "outlined"}
        className={[
          `${styles.customButton}`,
          `${sizeSelector}`,
          gradient ? `${styles.customButtonGradient}` : ``,
        ].join(" ")}
        {...props}
      />
    </ThemeProvider>
  );
};
