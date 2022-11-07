import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "next-i18next";
import { Button } from "@mui/material";

export const DeletedDialog = ({ opened, handleClosed, onDeleted }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });

  return (
    <Dialog
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
        }}
      >
        <DialogContentText
          id="alert-dialog-description"
          sx={{
            fontFamily: "Bw Nista Geometric DEMO",
            fontSize: "22px",
            fontWeight: "400",
            fontStyle: "normal",
            color: "#003B4A",
            lineHeight: "30px",
          }}
        >
          {t("deleteMessage")}
        </DialogContentText>
        <CloseIcon onClick={handleClosed} />
      </DialogContent>
      <DialogActions
        sx={{
          marginBottom: "16px",
        }}
      >
        <Button
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
            fontSize: "16px",
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
