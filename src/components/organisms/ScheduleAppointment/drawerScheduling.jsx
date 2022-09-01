import SwipeableDrawer from "@mui/material/Drawer";
import * as React from "react";

import ModalConfirmContent from "./modalConfirmContent";
import { useTranslation } from "next-i18next";
import { Box } from "@mui/material";

export const DrawerScheduling = ({
  isOpen,
  providerData = {},
  patientData = {},
  OnSetIsOpen = () => {
    // This is intended
  },
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  return (
    <>
      <SwipeableDrawer anchor="bottom" open={isOpen} sx={{ height: "auto" }}>
        <Box
          sx={{ width: "100%", padding: { xs: 0, md: 2 } }}
          role="presentation"
        >
          <ModalConfirmContent
            OnSetIsOpen={OnSetIsOpen}
            providerData={providerData}
            patientData={patientData}
          />
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default DrawerScheduling;
