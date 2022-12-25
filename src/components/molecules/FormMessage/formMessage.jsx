import { Close } from "@mui/icons-material";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";
import { forwardRef } from "react";
import { colors } from "../../../styles/theme";

export const FormMessage = (
  {
    onClose = () => {
      // This is intended
    },
    accessibility = {},
    ...props
  },
  ref
) => {
  return (
    <>
      <Box
        ref={ref}
        sx={{
          backgroundColor: props.success ? colors.foundationGreen : "#B93632",
          width: "auto",
          padding: "12px 16px",
          borderRadius: "4px",
          display: "flex",
          position: "relative",
          ...props.sx,
        }}
      >
        {props.success ? (
          <CheckCircleOutlineIcon
            sx={{
              color: "#fff",
              marginRight: "12.92px",
              width: "18.33px",
              height: "18.33px",
              alignSelf: "center",
            }}
          />
        ) : (
          <BlockIcon
            sx={{
              color: "#fff",
              marginRight: "12.92px",
              width: "22.15px",
              height: "22.15px",
              transform: "scaleX(-1)",
            }}
          />
        )}
        <div
          style={{
            color: "#fff",
            fontSize: "14px",
            lineHeight: "20.02px",
            letterSpacing: "0.17px",
            width: props.isWidthFilled ? "-webkit-fill-available" : "",
          }}
          data-testid="submission-message"
          aria-live="polite"
          role={!props.textRole && "alert"}
          {...accessibility}
        >
          {props.title ? (
            <div tabIndex={0} aria-level="2" style={{ fontWeight: "600" }}>
              {props.title}
            </div>
          ) : (
            <></>
          )}
          <div style={{ fontSize: props.fontTitle || 14, fontWeight: "400" }}>
            {props.children}
            {props.isBackToLogin ? (
              <Link href="/patient/login">
                <a style={{ textDecoration: "underline" }}> Login</a>
              </Link>
            ) : (
              ""
            )}

            {props.withClose ? (
              <IconButton
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  height: "100%",
                }}
                data-testid="close-form-msg-btn"
                onClick={onClose}
              >
                <Close sx={{ color: "white" }} />
              </IconButton>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Box>
    </>
  );
};

export default forwardRef(FormMessage);
