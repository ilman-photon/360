import * as React from "react";
import BaseHeader from "../../organisms/BaseHeader/baseHeader";
import Navbar from "../../molecules/Navbar/Navbar";
import { patientTypography } from "../../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import { Box, Button, IconButton, Link, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import MoreOptionBtn from "../../molecules/PayMyBill/MoreOption";

const SummaryBillDetail = ({
  data,
  isDesktop,
  goBack = () => {
    //This is intentional
  },
  handleAssetDownload = () => {
    //This is intentional
  },
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "payMyBill",
  });

  const getDateOfService = (date) => {
    const dateData = new Date(date);
    const day = dateData.toLocaleDateString("en-us", { weekday: "long" });
    const month = dateData.toLocaleDateString("en-us", { month: "long" });
    const year = dateData.toLocaleDateString("en-us", { year: "2-digit" });
    return `${day}, ${month} ${year}`;
  };

  const convertCurrency = (priceData) => {
    return priceData.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className={styles.summaryContainer}>
      <BaseHeader />
      <Navbar />
      <Link
        onClick={() => goBack()}
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          heigth: "72px",
          alignItems: "flex-start",
          padding: "24px",
          backgroundColor: "#F4F4F4",
          textDecoration: "none",
          ":hover": {
            textDecoration: "none",
            textDecorationColor: "unset",
          },
        }}
      >
        <KeyboardArrowLeftIcon
          sx={{
            color: "#007787",
          }}
        />
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#007787",
          }}
        >
          {t("backToBillPage")}
        </Typography>
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxWidth: isDesktop ? "1440px" : "100%",
          width: isDesktop ? "unset" : "100%",
          margin: "0 auto",
          background: "#FFFFFF",
          padding: isDesktop ? "32px 24px 24px" : "0px",
          height: "100%",
        }}
      >
        <ThemeProvider theme={patientTypography}>
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontFamily: "Museo Sans",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: isDesktop ? "32px" : "24px",
                lineHeight: "44px",
                color: "#003b4a",
                padding: isDesktop ? "0px" : "16px 16px 0",
                marginBottom: isDesktop ? "40px" : "0px",
              }}
            >
              {`${t("billSummary")} - ${data?.invoiceNumber}`}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                width: isDesktop ? "861px" : "100%",
                padding: isDesktop ? "0px" : "16px",
                marginBottom: "16px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#757575",
                    textTransform: "uppercase",
                  }}
                >
                  {t("dos")}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Museo Sans",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: isDesktop ? "26px" : "20px",
                    lineHeight: "32px",
                    color: "#003b4a",
                    marginTop: "5px",
                  }}
                >
                  {getDateOfService(data?.dos)}
                </Typography>
              </Box>
              {isDesktop ? (
                <Box>
                  <IconButton
                    sx={{ marginRight: "16px" }}
                    onClick={() => {
                      handleAssetDownload(data?.id, false);
                    }}
                  >
                    <FileDownloadOutlinedIcon sx={{ color: "#003B4A" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleAssetDownload(data?.id, true);
                    }}
                  >
                    <LocalPrintshopOutlinedIcon sx={{ color: "#003B4A" }} />
                  </IconButton>
                </Box>
              ) : (
                <MoreOptionBtn />
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: isDesktop ? "861px" : "100%",
                padding: "16px",
                background: "#f4f4f4",
              }}
            >
              <Box className={styles.btnContainer}>
                <Button
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
                    ":hover": { backgroundColor: "#007e8f" },
                  }}
                >
                  <PictureAsPdfOutlinedIcon className={styles.btnIcon} />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#FFFFFF",
                      fontSize: "16px",
                      lineHeight: "18px",
                    }}
                  >
                    {t("viewPDF")}
                  </Typography>
                </Button>
              </Box>
              <Box className={styles.infoContent}>
                {Object.keys(data).map(function (key) {
                  if (key != "invoiceNumber" && key != "dos" && key != "id") {
                    return (
                      <Box key={key} className={styles.listInfoContent}>
                        <Typography
                          sx={{
                            fontFamily: "Museo Sans",
                            fontStyle: "normal",
                            fontWeight: key == "balanceDue" ? 500 : 600,
                            fontSize: key == "balanceDue" ? "26px" : "16px",
                            lineHeight: key == "balanceDue" ? "32px" : "24px",
                            color: key == "balanceDue" ? "#0095a9" : "#575757",
                            width: "50%",
                            textTransform: "capitalize",
                          }}
                        >
                          {t(key)}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily:
                              key == "balanceDue" ? "Museo Sans" : "Inter",
                            fontStyle: "normal",
                            fontWeight: key == "balanceDue" ? 500 : 700,
                            fontSize: key == "balanceDue" ? "26px" : "18px",
                            lineHeight: key == "balanceDue" ? "32px" : "28px",
                            color: key == "balanceDue" ? "#0095a9" : "#003B4A",
                            width: "50%",
                            textAlign: isDesktop ? "left" : "right",
                          }}
                        >
                          {key == "insurancePaid" || key == "patientPaid"
                            ? `-${convertCurrency(data[key])}`
                            : convertCurrency(data[key])}
                        </Typography>
                      </Box>
                    );
                  }
                })}
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
    </div>
  );
};

export default SummaryBillDetail;
