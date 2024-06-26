import React from "react";
import styles from "./labelWithInfo.module.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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
  required,
  childrenSx,
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
        aria-label={value ? `${ariaLabel}, ${value}` : ariaLabel || label}
        style={sxText}
      >
        <span aria-hidden={true}>
          {label} {required && <span>*</span>}
        </span>
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
              <InfoOutlinedIcon
                sx={{ width: "19.21px", height: "19.21px", color: "#00000080" }}
              />
            </IconButton>
          </Tooltip>
        </>
      )}
    </div>
    <Stack spacing={1} sx={{ mt: "10px", alignItems: alignItems }}>
      <div style={childrenSx}>{children}</div>
      {helperText && (
        <Typography variant="bodySmallRegular" sx={{ mt: 1, fontWeight: 400 }}>
          {helperText}
        </Typography>
      )}
    </Stack>
  </Stack>
);

export default LabelWithInfo;
