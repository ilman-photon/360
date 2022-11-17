import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box } from "@mui/material";
import Link from "next/link";
import { forwardRef } from "react";
import { colors } from "../../../styles/theme";

export const FormMessage = (
  {
    onClick = () => {
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
        onClick={onClick}
        sx={{
          backgroundColor: props.success ? colors.foundationGreen : "#B93632",
          width: "auto",
          padding: "12px 16px",
          borderRadius: "4px",
          display: "flex",
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
          }}
          data-testid="submission-message"
          aria-live="polite"
          role={!props.textRole && "alert"}
          {...accessibility}
        >
          {props.title ? (
            <div style={{ fontWeight: "600" }}>{props.title}</div>
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
          </div>
        </div>
      </Box>
    </>
  );
};

export default forwardRef(FormMessage);
