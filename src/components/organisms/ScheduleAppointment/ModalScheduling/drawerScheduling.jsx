import SwipeableDrawer from "@mui/material/Drawer";
import * as React from "react";

import ModalConfirmContent from "./modalConfirmContent";
import { Box } from "@mui/material";

export const DrawerScheduling = ({
  isOpen = false,
  isLoggedIn,
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
          <ModalConfirmContent
            OnSetIsOpen={OnSetIsOpen}
            isLoggedIn={isLoggedIn}
          />
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default DrawerScheduling;