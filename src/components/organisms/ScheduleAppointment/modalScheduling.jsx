import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import ModalConfirmContent from "./modalConfirmContent";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

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
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalScheduling({
  isLoggedIn,
  isOpen,
  patientData,
  providerData,
  OnSetIsOpen = () => {
    // This is intended
  },
}) {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const isDesktop = useMediaQuery("(min-width: 769px)");

  const handleClickOpen = () => {
    OnSetIsOpen(true);
  };

  const router = useRouter();

  const handleClose = () => {
    // OnSetIsOpen(false);
    router.push("/patient/appointments");
  };

  const getAddress = (saddress) => {
    if (!address) return;
    return (
      <div>
        {address.addressLine1}
        <br />
        {address.addressLine2}
        <br />
        {address.city}, {address.state}, {address.zipcode}
      </div>
    );
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        sx={{
          "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": { maxWidth: "950px" },
        }}
      >
        <ModalConfirmContent
          providerData={providerData}
          patientData={patientData}
          isLoggedIn={isLoggedIn}
          OnClose={handleClose}
        />
      </BootstrapDialog>
    </div>
  );
}
