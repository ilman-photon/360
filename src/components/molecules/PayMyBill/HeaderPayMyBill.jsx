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
            tabIndex={0}
            aria-label={"Account Credit Balance title"}
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
            tabIndex={0}
            className={styles.textHeaderCard}
            sx={{
              fontFamily: "Museo Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "26px",
              lineHeight: "36px",
              color: "#008294",
            }}
          >
            {convertCurrency(
              parseInt(accountCreditData?.totalCreditBalance || 0)
            )}
          </Typography>
        </Box>
        <Box
          className={
            isDesktop ? styles.headerCardContent : styles.cardRightMobile
          }
        >
          <Typography
            tabIndex={0}
            aria-label={"Patient Due title"}
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
            tabIndex={0}
            className={styles.textHeaderCard}
            sx={{
              fontFamily: "Museo Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "26px",
              lineHeight: "36px",
              color: "#008294",
            }}
          >
            {convertCurrency(parseInt(accountCreditData?.totalDueAmount || 0))}
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
          tabIndex={0}
          aria-label={"Make a Payment button"}
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
