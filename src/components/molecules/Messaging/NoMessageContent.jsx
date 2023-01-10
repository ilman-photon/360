import * as React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";

export const NoMessageContent = ({ message = "" }) => {
  return (
    <Box className={styles.noMessagesContent}>
      <Typography variant="headlineH4" sx={{ fontWeight: 400 }}>
        {message}
      </Typography>
    </Box>
  );
};

export default NoMessageContent;
