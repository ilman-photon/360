import * as React from "react";
import Dialog from "@mui/material/Dialog";
import SwipeableDrawer from "@mui/material/Drawer";
import styles from "./modalScheduling.module.scss";

import ModalCancelContent from "./modalCancelContent";
import { Box } from "@mui/material";

export default function ModalCancelScheduling({ isDesktop = true }) {
  return isDesktop ? (
    <Dialog
      aria-labelledby="customized-dialog-title"
      aria-describedby="alert-dialog-description"
      open={true}
      className={styles.modalDialog}
      sx={{
        ".MuiDialog-container .MuiPaper-root": {
          xs: { width: "100%", margin: 0 },
          md: { width: "auto", margin: "32px" },
        },
      }}
    >
      <ModalCancelContent />
    </Dialog>
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
