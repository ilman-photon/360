import React from "react";
import styles from "./labelWithInfo.module.scss";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Stack, Tooltip, Typography } from "@mui/material";

export const LabelWithInfo = ({
  label,
  tooltipContent,
  helperText,
  children,
}) => (
  <Stack>
    <div className={styles.labelContainer}>
      <div className={styles.label}>{label}</div>
      {tooltipContent ? (
        <>
          <Tooltip title={tooltipContent} placement="top">
            <ErrorOutlineOutlinedIcon sx={{ width: 20, height: 20, color: '#00000080' }} />
          </Tooltip>
        </>
      ) : (
        ""
      )}
    </div>
    <Stack spacing={1}>
      <div style={{ marginTop: 10 }}>{children}</div>
      {helperText ? (
        <Typography variant="bodySmallRegular" sx={{ mt: 1, fontWeight: 500 }}>
          {helperText}
        </Typography>
      ) : (
        ""
      )}
    </Stack>
  </Stack>
);

export default LabelWithInfo;
