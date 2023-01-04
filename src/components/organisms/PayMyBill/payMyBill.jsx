import * as React from "react";
import AccountTitleHeading from "../../atoms/AccountTitleHeading/accountTitleHeading";
import BaseHeader from "../../organisms/BaseHeader/baseHeader";
import Navbar from "../../molecules/Navbar/Navbar";
import { patientTypography } from "../../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import { Box, Typography } from "@mui/material";
import HeaderPayMyBill from "../../molecules/PayMyBill/HeaderPayMyBill";
import TabPayBillHeaderContentView from "../../molecules/PayMyBill/TabHeaderContentView";
import OpenInvoiceTableBody from "../../molecules/PayMyBill/OpenInvoiceTableBody";
import InvoiceHistoryTableBody from "../../molecules/PayMyBill/InvoiceHistoryTableBody";
import NoResultView from "../../molecules/PayMyBill/NoResultView";
import NotHaveInvoiceView from "../../molecules/PayMyBill/NotHaveInvoiceView";
import FilterOptionPayMyBill from "../../molecules/PayMyBill/FilterOptionPayMyBill";
import OpenInvoiceMobileView from "../../molecules/PayMyBill/OpenInvoicesMobileView";
import InvoiceHistoryMobileView from "../../molecules/PayMyBill/InvoicesHistoryMobileView";
import styles from "./styles.module.scss";

const PayMyBillContainer = ({
  data,
  isDesktop = true,
  onChangeTabs,
  activeTabs = {
    index: 0,
    title: "Open Invoice",
  },
  noInvoiceText = {
    content: "",
    key: "",
    text: "",
  },
  isHaveInvoice = true,
  onChangeOption,
  onGoToViewDetail,
  accountCreditData,
  onFilterByDate = () => {
    //This is intentional
  },
  onFilterByInvoiceNumber = () => {
    //This is intentional
  },
  handleAssetDownload = () => {
    //This is intentional
  },
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "payMyBill",
  });

  const getUIContentView = () => {
    let contentView;
    const content = noInvoiceText?.content;
    const text = noInvoiceText?.text;

    if (isHaveInvoice && data?.length > 0) {
      if (activeTabs?.index === 0) {
        contentView = (
          <OpenInvoiceTableBody
            isDesktop={isDesktop}
            data={data}
            onGoToViewDetail={onGoToViewDetail}
            handleAssetDownload={handleAssetDownload}
          />
        );
      } else {
        contentView = (
          <InvoiceHistoryTableBody
            isDesktop={isDesktop}
            data={data}
            onGoToViewDetail={onGoToViewDetail}
            handleAssetDownload={handleAssetDownload}
          />
        );
      }
    } else {
      if (content === "notInvoice") {
        contentView = <NotHaveInvoiceView message={text} />;
      } else {
        contentView = <NoResultView message={text} />;
      }
    }
    return contentView;
  };

  const getUIMobileContentView = () => {
    let contentView;
    const content = noInvoiceText?.content;
    const text = noInvoiceText?.text;

    if (isHaveInvoice && data?.length > 0) {
      if (activeTabs?.index === 0) {
        contentView = (
          <OpenInvoiceMobileView
            data={data}
            onGoToViewDetail={onGoToViewDetail}
          />
        );
      } else {
        contentView = (
          <InvoiceHistoryMobileView isDesktop={isDesktop} data={data} />
        );
      }
    } else {
      if (content === "notInvoice") {
        contentView = <NotHaveInvoiceView message={text} />;
      } else {
        contentView = <NoResultView message={text} />;
      }
    }
    return contentView;
  };

  return (
    <div className={styles.container}>
      <BaseHeader />
      <Navbar />
      <AccountTitleHeading
        title={t("payMyBillTitle")}
        sx={{ fontWeight: "500", lineHeight: "44px" }}
      />
      <div className={styles.payMyBillContainer}>
        <ThemeProvider theme={patientTypography}>
          <HeaderPayMyBill
            isDesktop={isDesktop}
            accountCreditData={accountCreditData}
          />
          <Box className={styles.payMyBillContent}>
            <TabPayBillHeaderContentView
              onChangeTabs={onChangeTabs}
              activeTabs={activeTabs?.index}
              isDesktop={isDesktop}
            />
            <Typography
              tabIndex={0}
              aria-label={activeTabs?.title + " Title"}
              className={styles.titleTabs}
            >
              {activeTabs?.title}
            </Typography>
            <Box
              className={
                isDesktop
                  ? styles.payMyBillBodyContent
                  : styles.payMyBillMobileBodyContent
              }
            >
              <FilterOptionPayMyBill
                handleChangeOption={onChangeOption}
                onFilterByDate={onFilterByDate}
                onFilterByInvoiceNumber={onFilterByInvoiceNumber}
                isDesktop={isDesktop}
              />
              {isDesktop ? (
                <Box className={styles.payBillTableContainer}>
                  {getUIContentView()}
                </Box>
              ) : (
                <Box className={styles.payBillTableMobileContainer}>
                  {getUIMobileContentView()}
                </Box>
              )}
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default PayMyBillContainer;
