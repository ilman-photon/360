import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import styles from "./styles.module.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export const NoMessageSelectedContent = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });

  return (
    <Box className={styles.noMessageSelectedContainer}>
      <Box>
        <MailOutlineIcon sx={{ width: "75px", height: "60px" }} />
      </Box>
      <Typography
        sx={{
          fontFamily: "Museo Sans",
          fontSize: "18px",
          fontWeight: "300",
          fontStyle: "normal",
          color: "#003B4A",
          lineHeight: "28px",
          marginBottom: "8px",
        }}
      >
        {t("titleNoSelectedMessage")}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "300",
          fontStyle: "normal",
          color: "#000000",
          lineHeight: "24px",
          marginBottom: "8px",
        }}
      >
        {t("subTitleNoSelectedMessage")}
      </Typography>
    </Box>
  );
};

export default NoMessageSelectedContent;
