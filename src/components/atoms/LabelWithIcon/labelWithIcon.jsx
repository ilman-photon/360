import { Box } from "@mui/system";
import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { styles } from "./style";

const labelStyle = {};

export const LabelWithIcon = ({ error = false, label = "" }) => (
  <Box style={styles.boxContainer}>
    {error ? (
      <CancelIcon sx={{ color: styles.errorColor }} />
    ) : (
      <CheckCircleRoundedIcon sx={{ color: styles.successColor }} />
    )}
    <span style={error ? styles.errorTextStyle : styles.successTextColor}>
      {label}
    </span>
  </Box>
);
