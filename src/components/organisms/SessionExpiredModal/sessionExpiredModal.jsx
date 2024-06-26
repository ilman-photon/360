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
import { logoutProps } from "../../../utils/authetication";
import { useIdleTimer } from "react-idle-timer";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";

function SessionExpiredModal() {
  /** --------------------------------- New Code ------------------------------- */
  const cookies = new Cookies();
  const idleTime = cookies.get("IdleTimeOut") || 1000 * 60 * 20;
  const timeout = parseInt(idleTime);
  const promptTimeout = 60000; //Remaining Time
  const dispatch = useDispatch();

  // Time before idle
  const [remaining, setRemaining] = useState(null);
  const [open, setOpen] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  const [display, setDisplay] = useState(60);
  const onIdle = () => {
    // onIdle will be called after the promptTimeout is reached.
    // In this case 30 seconds. Here you can close your prompt and
    // perform what ever idle action you want such as log out your user.
    // Events will be rebound as long as `stopOnMount` is not set.
    setRemaining(promptTimeout);
    setOpen(true);
    pause();
  };
  const { reset, pause } = useIdleTimer({
    timeout,
    onIdle,
  });

  useEffect(() => {
    if (remaining < 1) {
      setRemaining(0);
    }
  }, [pause, remaining]);

  useEffect(() => {
    if (remaining || remaining > 0) {
      const interval = setInterval(() => {
        setRemaining(remaining - 1);
        setDisplay((prevState) => prevState - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [remaining]);

  useEffect(() => {
    if ((open && remaining <= 0) || (display < 0 && remaining < 59940)) {
      setIsExpired(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining, open]);

  const onClickStayLoggedIn = () => {
    setOpen(false);
    setIsExpired(false);
    setDisplay(60);
    reset();
  };

  /** ------------------------------------------------------------------------ */

  const router = useRouter();
  const onLoggedOffClicked = async () => {
    setOpen(false);
    await logoutProps.OnLogoutClicked(router, dispatch);
    onClickStayLoggedIn();
  };

  return (
    <Dialog
      open={open}
      role={"dialog"}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{ zIndex: "modal" }}
    >
      <DialogTitle
        id="alert-dialog-title"
        style={styles.containerPadding}
        aria-live={"assertive"}
        aria-label={
          !isExpired ? "Session Timeout heading" : "Session Expired heading"
        }
        sx={{ fontWeight: 300 }}
      >
        {!isExpired ? "Session Timeout" : "Session Expired"}
      </DialogTitle>
      <DialogContent
        style={{ ...styles.containerPadding, paddingBottom: "16px" }}
        id="alert-dialog-description"
        sx={{
          width: "500px",
          "@media (max-width: 992px)": {
            width: "auto",
          },
        }}
        data-testid="session-expired-testid"
      >
        <FormMessage
          success={false}
          tabIndex={0}
          aria-live="assertive"
          sx={styles.postMessage}
          aria-label={
            !isExpired
              ? `Your session is about to time-out. You will be logged out in ${display} seconds.`
              : "Your session expired. Please login again."
          }
        >
          {!isExpired
            ? // ? `Your session is about to time-out. You will be logged out in ${remaining} seconds.`
              `Your session is about to time-out. You will be logged out in ${display} seconds.`
            : "Your session expired. Please login again."}
        </FormMessage>
      </DialogContent>
      <DialogActions style={styles.containerPadding}>
        {!isExpired ? (
          <Box style={styles.buttonContainer}>
            <StyledButton
              mode="secondary"
              size="small"
              gradient={false}
              style={styles.buttonStyle}
              data-testid="session-logoff-btn"
              tabindex="1"
              onClick={onLoggedOffClicked}
              aria-live={"polite"}
              aria-label={"Log off button"}
            >
              Log Off
            </StyledButton>
            <StyledButton
              mode="primary"
              size="small"
              gradient={false}
              style={{
                minWidth: "40px !important",
                marginLeft: "10px",
                fontSize: "14px",
                boxShadow: "none",
                transform: "none",
                borderRadius: "25px",
              }}
              data-testid="session-stay-btn"
              onClick={onClickStayLoggedIn}
              tabindex="1"
              aria-live={"polite"}
              aria-label={"Stay Logged in button"}
            >
              Stay Logged in
            </StyledButton>
          </Box>
        ) : (
          <Box style={styles.buttonContainer}>
            <StyledButton
              mode="primary"
              size="small"
              tabindex="1"
              aria-live={"polite"}
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
