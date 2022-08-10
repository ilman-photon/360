import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { StyledButton } from "../../atoms/Button/button";
import { Box } from "@mui/material";
import { styles } from "./styles";

function SessionExpiredModal({ showModal = false }) {
  const [isExpired, setExpired] = useState(false);

  let timer;
  const validateErrorPassword = function () {
    window.clearTimeout(timer);
    timer = window.setTimeout(function () {
      setExpired(true);
      window.clearTimeout(timer);
    }, 60000);
  };

  useEffect(() => {
    validateErrorPassword();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      open={showModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" style={styles.containerPadding}>
        {!isExpired ? "Session Timeout" : "Session Expired"}
      </DialogTitle>
      <DialogContent
        style={{ ...styles.containerPadding, paddingBottom: "16px" }}
        sx={{
          width: "500px",
          "@media (max-width: 992px)": {
            width: "auto",
          },
        }}
      >
        <FormMessage success={false} sx={styles.postMessage}>
          {!isExpired
            ? "Your session is about to time-out. You will be logged out in 60 seconds."
            : "Your session expired. Please login again."}
        </FormMessage>
      </DialogContent>
      <DialogActions style={styles.containerPadding}>
        {!isExpired ? (
          <Box style={styles.buttonContainer}>
            <StyledButton
              theme="patient"
              mode="secondary"
              size="small"
              gradient={false}
              style={styles.buttonStyle}
            >
              Log Off
            </StyledButton>
            <StyledButton
              theme="patient"
              mode="primary"
              size="small"
              gradient={false}
              style={styles.buttonStyle}
            >
              Stay Logged in
            </StyledButton>
          </Box>
        ) : (
          <Box style={styles.buttonContainer}>
            <StyledButton
              theme="patient"
              mode="primary"
              size="small"
              gradient={false}
              style={styles.buttonStyle}
            >
              OK
            </StyledButton>
          </Box>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default SessionExpiredModal;
