import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import ModalConfirmContent from "./modalConfirmContent";
import { colors } from "../../../styles/theme";
import { styles } from "./style";
import ProviderProfile from "../../molecules/ProviderProfile/providerProfile";
import Link from "@mui/material/Link";
import Image from "next/image";
import constants from "../../../utils/constants";
import { useTranslation } from "next-i18next";
import {
  Card,
  CardContent,
  Box,
  Stack,
  Typography,
  Button,
  Divider,
  Grid,
  useMediaQuery,
} from "@mui/material";

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
  isOpen,
  providerData,
  OnSetIsOpen = () => {
    // This is intended
  },
}) {
  const handleClose = () => {
    OnSetIsOpen(false);
  };

  return (
    <Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        sx={{
          "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": { maxWidth: "950px" },
        }}
      >
        <ModalConfirmContent />
      </BootstrapDialog>
    </Box>
  );
}
