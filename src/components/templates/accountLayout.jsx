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
import { useLogin } from "../../utils/customHook";

function AccountLayout({
  pageMessage,
  theme = "patient",
  currentActivePage = "",
  children,
  pageTitle = "EyeCare Patient Portal - Profile Information",
}) {
  const isLogin = useLogin();
  const isPatient = theme === "patient";
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const getHeadingTitle = (pageName) => {
    switch (pageName) {
      case "profile-info":
        return "Profile Information";
      case "insurance-info":
        return "Insurance Documents";
      case "login-&-security":
        return "Login & Security";
      case "security-question":
        return "Security Question";
      default:
        return "Your Account";
    }
  };

  return (
    <Provider store={store}>
      <Head>
        <title>{pageTitle} page</title>
      </Head>
      {isLogin && (
        <div
          className={[
            styles.accountLayout,
            pageMessage.isShow ? styles.infoIsShowing : "",
          ].join(" ")}
        >
          <ThemeProvider
            theme={isPatient ? patientTypography : providerTypography}
          >
            <BaseHeader {...logoutProps} showNavbar={true} />
            <AccountTitleHeading
              title={
                isDesktop ? "Your Account" : getHeadingTitle(currentActivePage)
              }
              sx={{
                fontWeight: { xs: "500", md: "inherit" },
                textAlign: { xs: "center", md: "inherit" },
              }}
              sxContainer={{
                display: "grid",
              }}
            />
            <div className={styles.container}>
              <div className={styles.maxWidthWrapper}>
                <div className={styles.sidebarContainer}>
                  <AccountSidebar />
                </div>
                <div className={styles.pageContainer}>{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </div>
      )}
    </Provider>
  );
}

const mapStateToProps = function (state) {
  return {
    pageMessage: state.index.pageMessage,
  };
};

export default connect(mapStateToProps)(AccountLayout);
