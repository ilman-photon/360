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
}) => {
  const labelStyles = primaryColor
    ? styles.primaryTextStyle
    : styles.successTextColor;
  const checkCircleRoundedIconStyle = primaryColor
    ? { color: styles.primaryColor }
    : { color: styles.successColor };
  return (
    <Box style={{ ...styles.boxContainer, ...style }} tabIndex="0">
      {error ? (
        <CancelIcon sx={{ color: styles.errorColor }} />
      ) : (
        <CheckCircleRoundedIcon sx={checkCircleRoundedIconStyle} />
      )}
      <span style={error ? styles.errorTextStyle : labelStyles}>{label}</span>
    </Box>
  );
};
