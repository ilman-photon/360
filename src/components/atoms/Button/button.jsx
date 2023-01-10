import { ThemeProvider, styled } from "@mui/material/styles";
import React from "react";
import styles from "./button.module.css";

import Button from "@mui/material/Button";
import {
  patientButtonPrimary,
  patientButtonSecondary,
  patientButtonError,
} from "../../../styles/theme";

export const CustomButton = styled(Button)(
  ({ theme }) => `

  background: ${theme?.button?.background};
  border-color:${theme?.button?.borderColor};
  color: ${theme?.button?.color};
  padding: 16px;

  font-style: normal; 
  font-weight: 600;
  line-height: 20px;
  text-transform: none;
  border-radius: 46px;

  &.MuiButton-root.Mui-disabled {
    color: white;
  }

  :hover {
    background:${theme?.button?.background};
    border-color:${theme?.button?.borderColor};
  }
`
);

const getButtonTheme = ({ isPrimary, isError }) => {
  if (isError) return patientButtonError;
  else if (isPrimary) return patientButtonPrimary;
  else return patientButtonSecondary;
};

export const StyledButton = ({
  mode = "primary" || "secondary",
  size = "large",
  isModalButton,
  gradient,
  sxButton,
  ...props
}) => {
  const isPrimary = mode === "primary";
  const isError = mode === "error";
  const isLarge = size === "large";
  let themeSelector = getButtonTheme({ isPrimary, isError });
  let sizeSelector = isLarge
    ? styles.customButtonLarge
    : styles.customButtonSmall;
  sizeSelector = mode === "filter" ? styles.customButtonFilter : sizeSelector;
  return (
    <ThemeProvider theme={themeSelector}>
      <CustomButton
        variant={isPrimary ? "contained" : "outlined"}
        className={[
          `${styles.customButton}`,
          `${sizeSelector}`,
          isModalButton ? styles.modalButton : "",
          gradient ? `${styles.customButtonGradient}` : ``,
          sxButton,
        ].join(" ")}
        {...props}
      />
    </ThemeProvider>
  );
};
