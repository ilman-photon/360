import * as React from "react";
import { Box, Tab, Tabs, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useTranslation } from "next-i18next";

export const MessagingTabContentHeader = ({
  inboxValue = 3,
  activeTabs,
  onChangeTabs,
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });
  const isDesktop = useMediaQuery("(min-width: 834px)");

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
          label={`${t("inboxText")} (${inboxValue})`}
          data-testid={"inbox-tab"}
          tabIndex={"0"}
          icon={
            <Box>
              <MailOutlineIcon
                sx={{
                  width: isDesktop ? "25px" : "16px",
                  height: isDesktop ? "25px" : "13px",
                }}
              />
            </Box>
          }
          iconPosition="start"
          sx={{
            textTransform: "capitalize",
            flexDirection: isDesktop ? "row" : "column",
            fontSize: isDesktop ? "16px" : "14px",
            ".MuiTab-iconWrapper": {
              marginRight: isDesktop ? "8px" : "0px",
              height: isDesktop ? "25px" : "23px",
            },
            justifyContent: isDesktop ? "center" : "flex-start",
          }}
          {...a11yProps(0)}
        />
        <Tab
          value={1}
          label={`${t("sentText")}`}
          data-testid={"sent-tab"}
          tabIndex={"0"}
          icon={
            <Box>
              <SendOutlinedIcon
                sx={{
                  width: isDesktop ? "34px" : "17px",
                  height: isDesktop ? "24px" : "15px",
                }}
              />
            </Box>
          }
          iconPosition="start"
          sx={{
            textTransform: "capitalize",
            flexDirection: isDesktop ? "row" : "column",
            fontSize: isDesktop ? "16px" : "14px",
            ".MuiTab-iconWrapper": {
              marginRight: isDesktop ? "8px" : "0px",
              height: isDesktop ? "25px" : "23px",
            },
            justifyContent: isDesktop ? "center" : "flex-start",
          }}
          {...a11yProps(1)}
        />
        <Tab
          value={2}
          label={`${t("draftText")}`}
          data-testid={"draft-tab"}
          tabIndex={"0"}
          icon={
            <Box>
              <ModeOutlinedIcon
                sx={{
                  width: isDesktop ? "35px" : "18px",
                  height: isDesktop ? "25px" : "18px",
                }}
              />
            </Box>
          }
          iconPosition="start"
          sx={{
            textTransform: "capitalize",
            flexDirection: isDesktop ? "row" : "column",
            fontSize: isDesktop ? "16px" : "14px",
            ".MuiTab-iconWrapper": {
              marginRight: isDesktop ? "8px" : "0px",
              height: isDesktop ? "25px" : "23px",
            },
            justifyContent: isDesktop ? "center" : "flex-start",
          }}
          {...a11yProps(2)}
        />
        <Tab
          value={3}
          label={`${t("deletedText")}`}
          data-testid={"deleted-tab"}
          tabIndex={"0"}
          icon={
            <Box>
              <DeleteOutlinedIcon
                sx={{
                  width: isDesktop ? "24px" : "20px",
                  height: isDesktop ? "25px" : "18px",
                }}
              />
            </Box>
          }
          iconPosition="start"
          sx={{
            textTransform: "capitalize",
            flexDirection: isDesktop ? "row" : "column",
            fontSize: isDesktop ? "16px" : "14px",
            ".MuiTab-iconWrapper": {
              marginRight: isDesktop ? "8px" : "0px",
              height: isDesktop ? "25px" : "23px",
            },
            justifyContent: isDesktop ? "center" : "flex-start",
          }}
          {...a11yProps(3)}
        />
      </Tabs>
    </Box>
  );
};

export default MessagingTabContentHeader;
