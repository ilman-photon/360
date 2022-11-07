import * as React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTranslation } from "next-i18next";

export const MessagingNoResult = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });

  return (
    <Box className={styles.noResultContent}>
      <Box>
        <MailOutlineIcon sx={{ width: "52px", height: "42px" }} />
      </Box>
      <Typography
        sx={{
          marginTop: "10px",
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "26px",
        }}
      >
        {t("noResultMessage")}
      </Typography>
    </Box>
  );
};

export default MessagingNoResult;
