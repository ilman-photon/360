import * as React from "react";
import Dialog from "@mui/material/Dialog";
import SwipeableDrawer from "@mui/material/Drawer";

import ModalConfirmContent from "./modalConfirmContent";
import { Box } from "@mui/material";
import { useEffect } from "react";

export default function ModalConfirmation({
  isOpen,
  isDesktop,
  isLoggedIn,
  isReschedule,
  patientData,
  providerData,
  OnOkClicked = () => {
    // This is intended
  },
}) {
  useEffect(() => {
    console.log(isOpen, "isOpen");
  }, [isOpen]);

  return isDesktop ? (
    <Box>
      <Dialog open={isOpen}>
        <ModalConfirmContent
          patientData={patientData}
          providerData={providerData}
          isLoggedIn={isLoggedIn}
          isReschedule={isReschedule}
          OnOkClicked={OnOkClicked}
        />
      </Dialog>
    </Box>
  ) : (
    <>
      <SwipeableDrawer anchor="bottom" open={isOpen} sx={{ height: "auto" }}>
        <Box
          sx={{ width: "100%", padding: { xs: 0, md: 2 } }}
          role="presentation"
        >
          <ModalConfirmContent
            OnOkClicked={OnOkClicked}
            isLoggedIn={isLoggedIn}
            isReschedule={isReschedule}
            patientData={patientData}
            providerData={providerData}
          />
        </Box>
      </SwipeableDrawer>
    </>
  );
}
