import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { colors } from "../../../styles/theme";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        height: "72px",
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            fontFamily: "Libre Franklin",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "18px",
            marginTop: "10px",
            color: colors.primaryButton,
          }}
        >
          Cancel
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({
  open = false,
  child = <></>,
  handleClose = () => {
    //This is intended
  },
  fullScreen = true,
}) {
  return (
    <div>
      <BootstrapDialog
        fullScreen={fullScreen}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent
          dividers
          sx={{
            width: "100%",
            height: "100%",
            margin: 0,
          }}
        >
          {child}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
