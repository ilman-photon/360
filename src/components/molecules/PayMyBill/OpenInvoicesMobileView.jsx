import * as React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { useTranslation } from "next-i18next";
import { colors } from "../../../styles/theme";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import FileDownloadIcon from "../../../assets/icons/FileDownload";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

export const OpenInvoiceMobileView = ({
  data,
  onGoToViewDetail = () => {
    //This is intentional
  },
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "payMyBill",
  });

  return (
    <Box className={styles.mobileContainer}>
      {data?.length > 0 &&
        data?.map((item, index) => {
          return (
            <Box key={index} className={styles.mobileOpenInvoiceContainer}>
              <Box className={styles.cardContainer}>
                {Object.keys(item).map(function (key) {
                  return (
                    <Box key={key} className={styles.listInfoContent}>
                      <Typography className={styles.subHeadingLeftText}>
                        {t(key)}
                      </Typography>
                      <Typography
                        className={
                          key == "patientDue"
                            ? styles.subHeadingBlueText
                            : styles.subHeadingRightText
                        }
                      >
                        {item[key]}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
              <Box className={styles.mobileOpenBtnContainer}>
                <Button
                  onClick={() => onGoToViewDetail(item)}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#007e8f",
                    color: "#ffffff",
                    gap: "8px",
                    padding: "8px 20px",
                    height: "46px",
                    alignItems: "center",
                    justifyContent: "center",
                    textTransform: "inherit",
                    borderRadius: "30px",
                    width: "fit-content",
                    ":hover": { backgroundColor: "#007e8f" },
                  }}
                >
                  <ReceiptOutlinedIcon className={styles.btnIcon} />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      lineHeight: "18px",
                    }}
                  >
                    {t("viewDetails")}
                  </Typography>
                </Button>
                <Box className={styles.mobileIconContainer}>
                  <IconButton
                    sx={{ width: 24, height: 24, p: 0 }}
                    data-testid="downloadPDFButton"
                  >
                    <FileDownloadIcon sx={{ fill: colors.darkGreen }} />
                  </IconButton>
                  <IconButton
                    sx={{ width: 24, height: 24, p: 0 }}
                    data-testid="downloadPDFButton"
                  >
                    <LocalPrintshopOutlinedIcon
                      sx={{ fill: colors.darkGreen }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};

export default OpenInvoiceMobileView;
