import * as React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import FormMessage from "../FormMessage/formMessage";
import { useTranslation } from "next-i18next";

export const ValidationContent = ({ validationMessage }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "shareMyPage",
  });

  return (
    <Box className={styles.validationContainer} role="alert">
      <Typography
        sx={{
          fontFamily: "Bw Nista Geometric DEMO",
          fontWeight: "400",
          fontSize: "32px",
          lineHeight: "44px",
          color: "#003B4A",
          marginBottom: "16px",
        }}
      >
        {validationMessage?.title}
      </Typography>
      <FormMessage success={false} title={validationMessage?.message} />
    </Box>
  );
};

export default ValidationContent;
