import SwipeableDrawer from "@mui/material/Drawer";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

import ModalConfirmContent from "./modalConfirmContent";
import { Box } from "@mui/material";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const DrawerScheduling = ({
  isOpen,
  providerData,
  OnSetIsOpen = () => {
    // This is intended
  },
}) => {
  return (
    <>
      <SwipeableDrawer anchor="bottom" open={isOpen} sx={{ height: "auto" }}>
        <Box
          sx={{ width: "100%", padding: { xs: 0, md: 2 } }}
          role="presentation"
        >
          <ModalConfirmContent OnSetIsOpen={OnSetIsOpen} />
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default DrawerScheduling;
