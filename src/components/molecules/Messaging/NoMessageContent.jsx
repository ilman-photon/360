import * as React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";

export const NoMessageContent = ({ message = "" }) => {
  return (
    <Box className={styles.noMessagesContent}>
      <Typography>{message}</Typography>
    </Box>
  );
};

export default NoMessageContent;
