import React from "react";
import styles from "./labelWithInfo.module.scss";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";

export const LabelWithInfo = ({
  label,
  ariaLabel,
  tooltipContent,
  helperText,
  children,
  titleIcon,
  sxRow,
  sxText,
  iconWidth,
  alignItems = "unset",
  value,
}) => (
  <Stack>
    <div className={styles.labelContainer} style={sxRow}>
      {titleIcon && (
        <span
          style={{
            marginRight: iconWidth ? 2 : 8,
            display: "flex",
            alignItems: "center",
            width: iconWidth || "18px",
          }}
        >
          {titleIcon}
        </span>
      )}
      <div
        className={styles.label}
        tabIndex={0}
        aria-live="assertive"
        // aria-live={value ? `${ariaLabel}, ${value}` : ariaLabel}
        aria-label={value ? `${ariaLabel}, ${value}` : ariaLabel || label}
        style={sxText}
      >
        <span aria-hidden={true}>{label}</span>
      </div>
      {tooltipContent && (
        <>
          <Tooltip
            title={tooltipContent}
            placement="top"
            PopperProps={{
              role: "alert",
            }}
            aria-label={`Information Icon - ${tooltipContent}`}
          >
            <IconButton sx={{ p: 0 }}>
              <ErrorOutlineOutlinedIcon
                sx={{ width: "19.21px", height: "19.21px", color: "#00000080" }}
              />
            </IconButton>
          </Tooltip>
        </>
      )}
    </div>
    <Stack spacing={1} sx={{ mt: "10px", alignItems: alignItems }}>
      <div>{children}</div>
      {helperText && (
        <Typography variant="bodySmallRegular" sx={{ mt: 1, fontWeight: 400 }}>
          {helperText}
        </Typography>
      )}
    </Stack>
  </Stack>
);

export default LabelWithInfo;
