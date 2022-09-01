import SwipeableDrawer from "@mui/material/Drawer";
import { useRouter } from "next/router";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

import ModalConfirmContent from "./modalConfirmContent";
import { colors } from "../../../styles/theme";
import { styles } from "./style";
import Link from "@mui/material/Link";
import Image from "next/image";
import constants from "../../../utils/constants";
import { useTranslation } from "next-i18next";
import {
  Card,
  CardContent,
  Box,
  Stack,
  Typography,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
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
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        // onClose={OnSetIsOpen(false)}
        sx={{ height: "auto" }}
      >
        <Box sx={{ width: "100%", padding: "16px" }} role="presentation">
          <ModalConfirmContent OnSetIsOpen={OnSetIsOpen} />
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default DrawerScheduling;
