import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box } from "@mui/material";

// import './formMessage.css'

export const FormMessage = ({ ...props }) => {
  const handleClick = (e) => {
    if (typeof props.onClick === "function") {
      // do something
      props.onClick();
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: props.success ? "success.main" : "error.main",
          width: "auto",
          p: "12px 16px",
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
              width: "22px",
              height: "22px",
            }}
          />
        ) : (
          <BlockIcon
            sx={{
              color: "#fff",
              marginRight: "12.92px",
              width: "22px",
              height: "22px",
            }}
          />
        )}
        <div
          style={{
            color: "#fff",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0.0016em",
            margin: "auto 0",
          }}
        >
          <div style={{ fontWeight: "bold" }}>{props.title}</div>
          <div>{props.children}</div>
        </div>
      </Box>
    </>
  );
};

export default FormMessage;
