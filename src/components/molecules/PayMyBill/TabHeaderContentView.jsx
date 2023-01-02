import * as React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import styles from "./styles.module.scss";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PayMyBillIcon from "../../../assets/icons/PayMyBillIcon";
import { useTranslation } from "next-i18next";

export const TabPayBillHeaderContentView = ({
  activeTabs,
  onChangeTabs,
  isDesktop,
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "payMyBill",
  });

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <Box className={styles.tabsContent}>
      <Tabs
        sx={{
          height: "55px",
          justifyContent: "space-between",
          color: "#424747",
          ".MuiButtonBase-root": {
            minWidth: isDesktop ? "90px" : "85px",
          },
        }}
        variant="fullWidth"
        value={activeTabs}
        onChange={(_evt, val) => {
          onChangeTabs(Number(val));
        }}
        textColor="inherit"
        TabIndicatorProps={{
          style: { background: "#0095A9", color: "red" },
        }}
      >
        <Tab
          value={0}
          label={`${t("openInvoices")}`}
          tabIndex={"0"}
          icon={
            <Box>
              <MonetizationOnOutlinedIcon
                sx={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </Box>
          }
          iconPosition="start"
          sx={{
            textTransform: "capitalize",
            flexDirection: "row",
            fontSize: isDesktop ? "16px" : "14px",
            ".MuiTab-iconWrapper": {
              marginRight: "8px",
              height: "25px",
            },
            justifyContent: "center",
          }}
          data-testId="tab-open-invoices"
          {...a11yProps(0)}
        />
        <Tab
          value={1}
          label={`${t("invoiceHistory")}`}
          tabIndex={"0"}
          icon={
            <Box>
              <PayMyBillIcon
                sx={{
                  width: isDesktop ? "34px" : "19px",
                  height: isDesktop ? "24px" : "20px",
                }}
              />
            </Box>
          }
          iconPosition="start"
          sx={{
            textTransform: "capitalize",
            flexDirection: "row",
            fontSize: isDesktop ? "16px" : "14px",
            ".MuiTab-iconWrapper": {
              marginRight: "8px",
              height: isDesktop ? "25px" : "15px",
            },
            justifyContent: "center",
          }}
          data-testId="tab-invoice-history"
          {...a11yProps(1)}
        />
      </Tabs>
    </Box>
  );
};

export default TabPayBillHeaderContentView;
