import * as React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

export const NoResultView = ({ message, isDesktop }) => {
  return (
    <Box
      className={
        isDesktop
          ? styles.noResultViewContent
          : styles.noResultViewMobileContent
      }
    >
      <Box>
        <ReceiptOutlinedIcon sx={{ width: "52px", height: "42px" }} />
      </Box>
      <Typography
        sx={{
          marginTop: "10px",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "26px",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default NoResultView;
