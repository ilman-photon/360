import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box } from "@mui/material";
import Link from "next/link";
import { forwardRef } from "react";
import { colors } from "../../../styles/theme";

export const FormMessage = ({
  onClick = () => {
    // This is intended
  },
  ...props
}, ref) => {
  return (
    <>
      <Box
        ref={ref}
        onClick={onClick}
        sx={{
          backgroundColor: props.success ? colors.foundationGreen : "#C23934",
          width: "auto",
          p: 1,
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
              width: "22.15px",
              height: "22.15px",
            }}
          />
        ) : (
          <BlockIcon
            sx={{
              color: "#fff",
              marginRight: "12.92px",
              width: "22.15px",
              height: "22.15px",
            }}
          />
        )}
        <div
          style={{
            color: "#fff",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0.0016em",
          }}
          data-testid="submission-message"
        >
          {props.title ? (
            <div style={{ fontWeight: "bold" }}>{props.title}</div>
          ) : (
            <></>
          )}
          <div style={{ fontSize: 14 }}>
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
