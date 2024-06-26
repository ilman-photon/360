import * as React from "react";
import Dialog from "@mui/material/Dialog";
import SwipeableDrawer from "@mui/material/Drawer";

import ModalConfirmContent from "./modalConfirmContent";
import { Box } from "@mui/material";

export default function ModalConfirmation({
  isOpen,
  isDesktop,
  isLoggedIn,
  isReschedule,
  patientData,
  providerData,
  appointmentData,
  OnOkClicked = () => {
    // This is intended
  },
  onAddToCalendarClicked,
  isModalRegistered,
}) {
  return isDesktop ? (
    <Box>
      <Dialog open={isOpen}>
        <ModalConfirmContent
          patientData={patientData}
          providerData={providerData}
          appointmentData={appointmentData}
          isLoggedIn={isLoggedIn}
          isReschedule={isReschedule}
          OnOkClicked={OnOkClicked}
          onAddToCalendarClicked={onAddToCalendarClicked}
          isModalRegistered={isModalRegistered}
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
            patientData={patientData}
            providerData={providerData}
            appointmentData={appointmentData}
            isLoggedIn={isLoggedIn}
            isReschedule={isReschedule}
            OnOkClicked={OnOkClicked}
            onAddToCalendarClicked={onAddToCalendarClicked}
          />
        </Box>
      </SwipeableDrawer>
    </>
  );
}
