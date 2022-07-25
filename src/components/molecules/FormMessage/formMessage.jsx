import BlockIcon from "@mui/icons-material/Block";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box } from "@mui/material";

import "./formMessage.css";

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
          width: "fit-content",
          p: 2,
          borderRadius: "4px",
          display: "flex",
        }}
      >
        {props.success ? (
          <CheckCircleOutlineIcon sx={{ color: "#fff" }} />
        ) : (
          <BlockIcon sx={{ color: "#fff" }} />
        )}
        <span className="form-message-content">{props.children}</span>
      </Box>
    </>
  );
};

export default FormMessage;
