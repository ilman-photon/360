import * as React from "react";
import Dialog from "@mui/material/Dialog";
import SwipeableDrawer from "@mui/material/Drawer";

import ModalConfirmContent from "./modalConfirmContent";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function ModalConfirmation({
  isOpen,
  isDesktop,
  isLoggedIn,
  patientData,
  providerData,
  OnSetIsOpen = () => {
    // This is intended
  },
}) {
  useEffect(() => {
    console.log(isOpen, "isOpen");
  }, [isOpen]);

  return isDesktop ? (
    <Box>
      <Dialog
        aria-labelledby="customized-dialog-title"
        aria-describedby="alert-dialog-description"
        open={isOpen}
      >
        <ModalConfirmContent
          OnSetIsOpen={OnSetIsOpen}
          patientData={patientData}
          providerData={providerData}
          isLoggedIn={isLoggedIn}
        />
      </Dialog>
    </Box>
  ) : (
    <>
      (
      <SwipeableDrawer anchor="bottom" open={isOpen} sx={{ height: "auto" }}>
        <Box
          sx={{ width: "100%", padding: { xs: 0, md: 2 } }}
          role="presentation"
        >
          <ModalConfirmContent
            OnSetIsOpen={OnSetIsOpen}
            isLoggedIn={isLoggedIn}
            patientData={patientData}
            providerData={providerData}
          />
        </Box>
      </SwipeableDrawer>
      )
    </>
  );
}
