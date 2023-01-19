import React from "react";
import { colors, patientTypography } from "../../../styles/theme";
import { Box, Button, Stack, Typography } from "@mui/material";
import BaseHeader from "../../../components/organisms/BaseHeader/baseHeader";
import AccountTitleHeading from "../../atoms/AccountTitleHeading/accountTitleHeading";
import { ThemeProvider } from "@emotion/react";
import Image from "next/image";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import styles from "./styles.module.scss";
import TablePrescriptionContent from "../../molecules/Dashboard/tablePrescriptionContent";
import MedicationContent from "../../molecules/Dashboard/medicationContent";
import MenuList from "../../molecules/Dashboard/menuList";
import { tableCarePlan } from "../../../pages/patient/account/medical-record";
import { tableConfiguration } from "../../../pages/patient/health-record";

import TableWithSort from "../../molecules/TableWithSort/tableWithSort";

export function renderCTAIcon(
  onClickDownload = () => {
    //this is intentional
  },
  onClickPrint = () => {
    //this is intentional
  }
) {
  const iconDownload = "/download_pages.png";
  return (
    <Stack
      className={styles.ctaContainer}
      direction={"row"}
      alignSelf={"center"}
      sx={{ marginLeft: "auto" }}
    >
      <Button
        className={styles.butttonIconContainer}
        data-testid={"download-icon"}
        onClick={onClickDownload}
        aria-label={"Download option"}
        sx={{
          textTransform: "initial",
          gap: "12px",
          marginRight: "40px",
          fontFamily: "Museo Sans",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "22px",
          color: "#323338",
        }}
      >
        <Image alt="" src={iconDownload} width={15} height={15} />
        Download
      </Button>
      <Button
        className={styles.butttonIconContainer}
        onClick={onClickPrint}
        aria-label={"Print option"}
        data-testid={"print-icon"}
        sx={{
          textTransform: "initial",
          gap: "12px",
          fontFamily: "Museo Sans",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "22px",
          color: "#323338",
        }}
      >
        <LocalPrintshopOutlinedIcon
          sx={{
            width: "18px",
            height: "18px",
            color: colors.darkGreen,
            cursor: "pointer",
          }}
          data-testid={"print-icon"}
        />
        Print
      </Button>
    </Stack>
  );
}

export default function ShareMyPageContent({
  titleHeading,
  data,
  type = {
    content: "",
    detail: "",
  },
  idx,
  isMobile,
  isDesktop,
  refType,
  downloadPDF = () => {
    //This is intentional
  },
  printHTML = () => {
    //This is intentional
  },
  handleAssetDownload = () => {
    //This is intentional
  },
}) {
  const iconPrescription = "/icon-prescription2.png";

  const getHeadingTitle = (key) => {
    let title = "";

    switch (key) {
      case "glasses":
        title = "Glasses Prescription";
        break;
      case "contact":
        title = "Contacts Prescription";
        break;
      case "medication":
        title = "Medications";
        break;
    }

    return title;
  };

  const carePlansUIContent = () => {
    return (
      <Stack spacing={3}>
        {data?.length > 0 && (
          <TableWithSort
            config={tableCarePlan(isDesktop)}
            rows={data}
            onAssetDownload={handleAssetDownload}
          />
        )}
      </Stack>
    );
  };

  const healthRecordUIContent = () => {
    return (
      <Stack spacing={3}>
        {data?.length > 0 && (
          <TableWithSort
            config={tableConfiguration(isDesktop, handleAssetDownload)}
            rows={data}
            onAssetDownload={handleAssetDownload}
          />
        )}
      </Stack>
    );
  };

  const getUIView = (typeDocument) => {
    let content = null;
    switch (typeDocument) {
      case "glasses":
      case "contact":
        content = (
          <TablePrescriptionContent
            row={data}
            type={typeDocument}
            idx={idx}
            isMobile={isMobile}
            isSharePage={true}
          />
        );
        break;
      case "medication":
        content = (
          <MedicationContent
            row={data}
            medicationType={typeDocument}
            idx={idx}
            isMobile={isMobile}
            isSharePage={true}
          />
        );
        break;
      case "carePlans":
        content = carePlansUIContent();
        break;
      case "healthRecord":
        content = healthRecordUIContent();
        break;
    }
    return content;
  };

  function getMenuListUI() {
    return !isMobile ? (
      renderCTAIcon(
        () => {
          downloadPDF(type?.detail, idx);
        },
        () => {
          printHTML(type?.detail, idx);
        }
      )
    ) : (
      <MenuList
        onClickDownloadButton={() => {
          downloadPDF(type?.detail, idx);
        }}
        onClickPrintButton={() => {
          printHTML(type?.detail, idx);
        }}
      />
    );
  }

  return (
    <ThemeProvider theme={patientTypography}>
      <Box sx={{ background: "#f4f4f4", height: "100vh" }}>
        <BaseHeader />
        <AccountTitleHeading
          title={titleHeading}
          sx={{ fontWeight: "500", lineHeight: "44px", fontSize: "32px" }}
        />
        {type?.content == "prescriptions" ? (
          <Box className={styles.shareContentContainer}>
            <Box className={styles.prescriptionsBox}>
              <Box className={styles.headerPrescriptionContent} ref={refType}>
                <Box
                  className={styles.prescriptionTitle}
                  sx={{
                    img: {
                      top: "3px !important",
                      height: "32px !important",
                      minHeight: "32px !important",
                      maxHeight: "32px !important",
                    },
                  }}
                >
                  <Box
                    aria-label={`${type?.content} title`}
                    tabIndex={"0"}
                    sx={{ display: "flex" }}
                  >
                    <Image
                      alt=""
                      src={iconPrescription}
                      width={32}
                      height={32}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Museo Sans",
                        fontSize: "32px",
                        fontWeight: "400",
                        lineHeight: "44px",
                      }}
                      aria-hidden="true"
                    >
                      Prescriptions
                    </Typography>
                  </Box>
                </Box>
                {getMenuListUI()}
              </Box>
              <Typography
                sx={{
                  fontFamily: "Museo Sans",
                  fontSize: "26px",
                  fontWeight: "500",
                  lineHeight: "32px",
                  color: "#003B4A",
                  padding: "16px",
                }}
                tabIndex={0}
              >
                {getHeadingTitle(type?.detail)}
              </Typography>
              {getUIView(type?.detail)}
            </Box>
          </Box>
        ) : (
          <Box className={styles.shareTableContentContainer}>
            {getUIView(type?.detail)}
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}
