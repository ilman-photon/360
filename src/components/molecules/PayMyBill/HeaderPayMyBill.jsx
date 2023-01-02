import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import { useTranslation } from "next-i18next";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

export const HeaderPayMyBill = ({ isDesktop, accountCreditData }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "payMyBill",
  });

  const convertCurrency = (data) => {
    return data.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  return (
    <Box
      className={
        isDesktop ? styles.headerContainer : styles.headerMobileContainer
      }
    >
      <Box
        className={
          isDesktop
            ? styles.headerCardContainer
            : styles.headerMobileCardContainer
        }
      >
        <Box
          className={
            isDesktop ? styles.headerCardContent : styles.cardLeftMobile
          }
        >
          <Typography
            className={styles.titleHeaderCard}
            sx={{
              fontWeight: "600",
              color: "#003B4A",
              fontSize: "14px",
              lineHeight: "18px",
            }}
          >
            {t("accountCreditBalance")}
          </Typography>
          <Typography
            className={styles.textHeaderCard}
            sx={{
              fontFamilyamily: "Bw Nista Geometric DEMO",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "26px",
              lineHeight: "36px",
              color: "#008294",
            }}
          >
            {convertCurrency(parseInt(accountCreditData?.totalCreditBalance))}
          </Typography>
        </Box>
        <Box
          className={
            isDesktop ? styles.headerCardContent : styles.cardRightMobile
          }
        >
          <Typography
            className={styles.titleHeaderCard}
            sx={{
              fontWeight: "600",
              color: "#003B4A",
              fontSize: "14px",
              lineHeight: "18px",
            }}
          >
            {t("patientDue")}
          </Typography>
          <Typography
            className={styles.textHeaderCard}
            sx={{
              fontFamilyamily: "Bw Nista Geometric DEMO",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "26px",
              lineHeight: "36px",
              color: "#008294",
            }}
          >
            {convertCurrency(parseInt(accountCreditData?.totalDueAmount))}
          </Typography>
        </Box>
      </Box>
      <Box
        className={
          isDesktop
            ? styles.headerBtnContainer
            : styles.headerMobileBtnContainer
        }
      >
        <Button
          className={styles.btnContent}
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
            width: isDesktop ? "fit-content" : "100%",
            ":hover": { backgroundColor: "#007e8f" },
          }}
        >
          <PaymentOutlinedIcon className={styles.btnIcon} />
          <Typography
            className={styles.btnText}
            sx={{
              fontWeight: "600",
              color: "#FFFFFF",
              fontSize: "16px",
              lineHeight: "18px",
            }}
          >
            {t("makePayment")}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderPayMyBill;
