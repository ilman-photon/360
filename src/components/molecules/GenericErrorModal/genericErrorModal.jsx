import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { StyledButton } from "../../atoms/Button/button";
import { Box, colors } from "@mui/material";
import { styles } from "../../organisms/SessionExpiredModal/styles";
import genericStyles from "./genericErrorModal.module.scss";
import { useState } from "react";

function GenericErrorModal({ storeContext = {} }) {
  const [modalError, setModalError] = useState(null);

  storeContext.subscribe(() => {
    setTimeout(() => {
      setModalError(storeContext.getState().index.genericErrorMessage);
    }, 3000);
  });

  return (
    <Dialog open={!!modalError} role={"alertdialog"}>
      <DialogTitle
        id="alert-dialog-title"
        style={styles.containerPadding}
        aria-label={"Something Went Wrong"}
        sx={{
          color: "#003B4A",
        }}
      >
        {"Something Went Wrong"}
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
          sx={styles.postMessageGenericError}
        >
          {modalError}
        </FormMessage>
      </DialogContent>
      <DialogActions
        style={styles.containerPadding}
        className={genericStyles.modalDialog}
      >
        <Box style={styles.buttonContainer}>
          <StyledButton
            theme="patient"
            mode="primary"
            size="small"
            gradient={false}
            data-testid="generic-ok-btn"
            style={styles.buttonStyle}
            onClick={() => {
              setModalError(null);
            }}
            aria-label={"Ok button"}
            className={genericStyles.buttonCTA}
          >
            OK
          </StyledButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default GenericErrorModal;
