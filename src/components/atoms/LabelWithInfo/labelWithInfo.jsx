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
      <div
        className={styles.label}
        role="text"
        tabIndex={0}
        aria-live={ariaLabel}
        aria-label={ariaLabel}
        style={sxText}
      >
        {label}
      </div>
      {tooltipContent ? (
        <>
          <Tooltip
            title={tooltipContent}
            placement="top"
            aria-label={`Information Icon - ${tooltipContent}`}
          >
            <IconButton sx={{ p: 0 }}>
              <ErrorOutlineOutlinedIcon
                sx={{ width: 20, height: 20, color: "#00000080" }}
              />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        ""
      )}
    </div>
    <Stack spacing={1} sx={{ mt: "10px" }}>
      <div>{children}</div>
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
