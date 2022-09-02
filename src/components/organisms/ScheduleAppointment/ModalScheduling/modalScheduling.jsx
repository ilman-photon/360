import * as React from "react";
import Dialog from "@mui/material/Dialog";

import ModalConfirmContent from "./modalConfirmContent";
import { Box } from "@mui/material";

export default function ModalScheduling({
  isOpen,
  isLoggedIn,
  OnSetIsOpen = () => {
    // This is intended
  },
}) {
  return (
    <Box>
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        isLoggedIn={isLoggedIn}
      >
        <ModalConfirmContent OnSetIsOpen={OnSetIsOpen} />
      </Dialog>
    </Box>
  );
}
