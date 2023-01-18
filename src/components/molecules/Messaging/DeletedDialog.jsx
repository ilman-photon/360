import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "next-i18next";
import { Button, IconButton } from "@mui/material";

export const DeletedDialog = ({ opened, handleClosed, onDeleted }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });
  return (
    <Dialog
      data-testId="deleted-dialog-test"
      open={opened}
      close={handleClosed}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        ".MuiDialog-container .MuiPaper-root ": {
          width: "700px",
          position: "absolute",
          top: "116px",
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <DialogContentText
          tabIndex={0}
          aria-label={t("deleteMessage")}
          id="alert-dialog-description"
          sx={{
            fontFamily: "Museo Sans",
            fontSize: "22px",
            fontWeight: "400",
            fontStyle: "normal",
            color: "#003B4A",
            lineHeight: "30px",
          }}
        >
          {t("deleteMessage")}
        </DialogContentText>

        <IconButton aria-label={"Close"} onClick={handleClosed}>
          <CloseIcon />
        </IconButton>
      </DialogContent>
      <DialogActions
        sx={{
          marginBottom: "16px",
        }}
      >
        <Button
          data-testId="messaging-button-cancel-test"
          tabIndex={0}
          aria-label={"Cancel button"}
          onClick={handleClosed}
          sx={{
            border: "1px solid #205A63",
            borderRadius: "30px",
            color: "#007E8F",
            textTransform: "capitalize",
            width: "93px",
            height: "46px",
            fontSize: "16px",
            fontStyle: "normal",
          }}
        >
          {t("cancelBtn")}
        </Button>
        <Button
          tabIndex={0}
          aria-label={"Delete button"}
          data-testId="messaging-button-delete-test"
          onClick={onDeleted}
          sx={{
            border: "1px solid #007E8F",
            borderRadius: "30px",
            color: "#FFFFFF",
            textTransform: "capitalize",
            width: "93px",
            height: "46px",
            fontSize: "16px",
            backgroundColor: "#007E8F",
            fontStyle: "normal",
            ":hover": {
              backgroundColor: "#007E8F",
            },
          }}
        >
          {t("deleteBtn")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeletedDialog;
