import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { StyledButton } from "../../atoms/Button/button";
import { Box } from "@mui/material";
import { styles } from "./styles";
import { useRouter } from "next/router";
import { logoutProps } from "../../../utils/authetication";

function SessionExpiredModal({
  showModal = false,
  onStayLoggedIn = () => {
    //this is intentional
  },
  isExpired = false,
  remaining = 0,
  onLoggedOff = () => {
    //this is intentional
  },
}) {
  const router = useRouter();
  const onLoggedOffClicked = () => {
    logoutProps.OnLogoutClicked(router);
    onLoggedOff();
  };

  return (
    <Dialog
      open={showModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        style={styles.containerPadding}
        aria-label={
          !isExpired ? "Session Timeout heading" : "Session Expired heading"
        }
      >
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
        <FormMessage
          success={false}
          id="alert-dialog-description"
          sx={styles.postMessage}
          accessibility={{
            "aria-live": "off",
          }}
        >
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
              data-testid="session-logoff-btn"
              onClick={onLoggedOffClicked}
              aria-label={"Log off button"}
            >
              Log Off
            </StyledButton>
            <StyledButton
              theme="patient"
              mode="primary"
              size="small"
              gradient={false}
              style={styles.buttonStyle}
              data-testid="session-stay-btn"
              onClick={onStayLoggedIn}
              aria-label={"Stay Logged in button"}
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
              data-testid="session-ok-btn"
              style={styles.buttonStyle}
              onClick={onLoggedOffClicked}
              aria-label={"Ok button"}
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
