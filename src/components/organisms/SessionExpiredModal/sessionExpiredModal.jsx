import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { StyledButton } from "../../atoms/Button/button";
import { Box } from "@mui/material";
import { styles } from "./styles";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

function SessionExpiredModal({
  showModal = false,
  onStayLoggedIn = () => {},
  isExpired = false,
  remaining = 0,
  onLoggedOff = () => {},
}) {
  const router = useRouter();
  const onLoggedOffClicked = () => {
    const cookies = new Cookies();
    cookies.remove("authorized", { path: "/patient" });
    router.push("/patient");
    onLoggedOff();
  };

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
            ? `Your session is about to time-out. You will be logged out in ${remaining} seconds.`
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
              onClick={onLoggedOffClicked}
            >
              Log Off
            </StyledButton>
            <StyledButton
              theme="patient"
              mode="primary"
              size="small"
              gradient={false}
              style={styles.buttonStyle}
              onClick={onStayLoggedIn}
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
              onClick={onLoggedOffClicked}
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
