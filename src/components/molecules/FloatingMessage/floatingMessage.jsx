import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function FloatingMessage({
  text = "",
  autoHideDuration = 0,
  onOpen,
  onClose,
  sx = {
    top: {
      xs: "134px",
      sm: "210px",
    },
  },
}) {
  const [open, setOpen] = useState(false);

  const handleClick = (onOpen) => {
    setOpen(onOpen);
  };

  useEffect(() => {
    handleClick(onOpen);
  }, [onOpen]);

  const handleClose = () => {
    onClose(open);
    setOpen(!open);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={sx}
    >
      <Alert
        icon={<CheckCircleOutlineIcon />}
        onClose={handleClose}
        data-testId="floating-message-close"
        variant="filled"
        severity="success"
        sx={{
          width: {
            xs: "100%",
            sm: "503px",
          },
          backgroundColor: "#04844B",
          padding: "12px 16px",
          "& .MuiAlert-icon": {
            padding: 0,
            marginRight: "13.8px",
            "& .MuiSvgIcon-root": {
              width: "24px",
              height: "24px",
              margin: "auto 0",
            },
          },
          "& .MuiAlert-message": {
            padding: 0,
          },
          "& .MuiAlert-action": {
            padding: "0 0 0 16px",
            "& .MuiIconButton-root": {
              padding: 0,
              "& .MuiSvgIcon-root": {
                width: "24px",
                height: "24px",
                margin: "auto 0",
              },
            },
          },
        }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
}
