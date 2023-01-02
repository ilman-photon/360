import * as React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";

export const NotHaveInvoiceView = ({ message = "" }) => {
  return (
    <Box className={styles.notHaveInvoiceView}>
      <Typography>{message}</Typography>
    </Box>
  );
};

export default NotHaveInvoiceView;
