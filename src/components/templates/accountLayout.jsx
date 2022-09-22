import Head from "next/head";
import styles from "./accountLayout.module.scss";
import AccountSidebar from "../molecules/AccountSidebar/accountSidebar";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";
import { patientTypography, providerTypography } from "../../styles/theme";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import * as React from "react";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { Provider, connect } from "react-redux";
import store from "../../store/store";
import { logoutProps } from "../../utils/authetication";

function AccountLayout({
  pageMessage = { content: null },
  theme = "patient",
  currentActivePage = "",
  children,
}) {
  const isPatient = theme === "patient";
  const isMobile = useMediaQuery("(max-width: 768px)");

  const getHeadingTitle = (pageName) => {
    if (!isMobile) return "Your Account";
    switch (pageName) {
      case "profile-info":
        return "Profile Information";
      case "insurance-info":
        return "Insurance Documents";
      default:
        return "Your Account";
    }
  };

  const getHeadingStyle = () => {
    return isMobile ? { fontWeight: "500" } : {};
  };

  return (
    <Provider store={store}>
      <Head>
        <title>EyeCare Patient Portal - Account Information</title>
      </Head>
      <div
        className={[
          styles.accountLayout,
          pageMessage.isShow ? styles.infoIsShowing : "",
        ].join(" ")}
      >
        <ThemeProvider
          theme={isPatient ? patientTypography : providerTypography}
        >
          <BaseHeader {...logoutProps} />
          <AccountTitleHeading
            title={getHeadingTitle(currentActivePage)}
            sx={getHeadingStyle()}
          />
          <div className={styles.container}>
            <div className={styles.sidebarContainer}>
              <AccountSidebar />
            </div>
            <div className={styles.pageContainer}>{children}</div>
          </div>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

const mapStateToProps = function (state) {
  return {
    pageMessage: state.index.pageMessage,
  };
};

export default connect(mapStateToProps)(AccountLayout);
