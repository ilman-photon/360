import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

import ModalConfirmContent from "./modalConfirmContent";
import { Box } from "@mui/material";

export default function ModalScheduling({
  isOpen,
  OnSetIsOpen = () => {
    // This is intended
  },
}) {
  return (
    <Box>
      <Dialog
        onClose={() => OnSetIsOpen(false)}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <ModalConfirmContent OnSetIsOpen={OnSetIsOpen} />
      </Dialog>
    </Box>
  );
}
