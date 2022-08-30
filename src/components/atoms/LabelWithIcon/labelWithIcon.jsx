import { Box } from "@mui/system";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import { styles } from "./style";

const labelStyle = {};

export const LabelWithIcon = ({
  error = false,
  label = "",
  style = {},
  primaryColor = false,
}) => (
  <Box style={{ ...styles.boxContainer, ...style }}>
    {error ? (
      <CancelIcon sx={{ color: styles.errorColor }} />
    ) : (
      <CheckCircleRoundedIcon
        sx={
          primaryColor
            ? { color: styles.primaryColor }
            : { color: styles.successColor }
        }
      />
    )}
    <span
      style={
        error
          ? styles.errorTextStyle
          : primaryColor
          ? styles.primaryTextStyle
          : styles.successTextColor
      }
    >
      {label}
    </span>
  </Box>
);
