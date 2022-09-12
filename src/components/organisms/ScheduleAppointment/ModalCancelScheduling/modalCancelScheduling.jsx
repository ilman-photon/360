import * as React from "react";
import Dialog from "@mui/material/Dialog";
import SwipeableDrawer from "@mui/material/Drawer";

import ModalCancelContent from "./modalCancelContent";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function ModalCancelScheduling({ isDesktop = true }) {
  return isDesktop ? (
    <Box>
      <Dialog
        aria-labelledby="customized-dialog-title"
        aria-describedby="alert-dialog-description"
        open={true}
      >
        <ModalCancelContent />
      </Dialog>
    </Box>
  ) : (
    <>
      <SwipeableDrawer anchor="bottom" open={isOpen} sx={{ height: "auto" }}>
        <Box
          sx={{ width: "100%", padding: { xs: 0, md: 2 } }}
          role="presentation"
        >
          <ModalCancelContent />
        </Box>
      </SwipeableDrawer>
    </>
  );
}
