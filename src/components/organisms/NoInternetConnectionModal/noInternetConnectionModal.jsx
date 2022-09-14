import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import styles from "../NoInternetConnectionModal/style.module.scss";

function NoInternetConnectionModal({
  isOnline = true,
  setOnline = () => {
    //This is intentional
  },
}) {
  const imageSrcState = "/Vector.png";
  const isDesktop = useMediaQuery("(min-width: 767px)");
  return (
    <Dialog
      open={!isOnline}
      data-testid={"noInternetModal"}
      aria-labelledby="no-inernet-dialog-title"
      aria-describedby="no-inernet-dialog-description"
    >
      <DialogContent>
        <IconButton
          aria-label="close"
          onClick={() => {
            setOnline(!isOnline);
          }}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Stack
          sx={{ height: "335px" }}
          direction={isDesktop ? "row" : "column"}
          justifyContent={"center"}
        >
          <Box className={styles.imageContainer}>
            <Image
              alt=""
              src={imageSrcState}
              width={isDesktop ? 244.89 : 124.03}
              height={isDesktop ? 211 : 108}
              loading={"eager"}
            />
          </Box>
          <Box className={styles.textContainer}>
            <Typography className={styles.titleModal}>
              No Internet Connection
            </Typography>
            <Typography className={styles.subtitleModal}>
              You are not connected to internet. Make sure Wi - Fi is on,
              Airplane Mode is off and try again.
            </Typography>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default NoInternetConnectionModal;
