import React from "react";
import styles from "./labelWithInfo.module.scss";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Stack, Tooltip, Typography } from "@mui/material";

export const LabelWithInfo = ({
  label,
  tooltipContent,
  helperText,
  children,
  titleIcon,
  sxRow,
  sxText,
}) => (
  <Stack>
    <div className={styles.labelContainer} style={sxRow}>
      {titleIcon && (
        <span
          style={{
            marginRight: 8,
            display: "flex",
            alignItems: "center",
            width: "18px",
          }}
        >
          {titleIcon}
        </span>
      )}
      <div className={styles.label} style={sxText}>
        {label}
      </div>
      {tooltipContent ? (
        <>
          <Tooltip title={tooltipContent} placement="top">
            <ErrorOutlineOutlinedIcon sx={{ width: 16, height: 16 }} />
          </Tooltip>
        </>
      ) : (
        ""
      )}
    </div>
    <Stack spacing={1}>
      <div style={{ marginTop: 10 }}>{children}</div>
      {helperText ? (
        <Typography variant="bodySmallRegular" sx={{ mt: 1 }}>
          {helperText}
        </Typography>
      ) : (
        ""
      )}
    </Stack>
  </Stack>
);

export default LabelWithInfo;
