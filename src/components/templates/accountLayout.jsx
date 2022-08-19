import Head from "next/head";
import styles from "./accountLayout.module.scss";
import AccountSidebar from "../molecules/AccountSidebar/accountSidebar";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";
import { patientTypography, providerTypography } from "../../styles/theme";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import * as React from "react";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { logoutProps } from "../../utils/authetication";

//Prevent html being match between server and client
// const BaseHeader = dynamic(() => import("../organisms/BaseHeader/baseHeader"), {
//   suspense: true,
// });

export default function Layout({
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

  return (
    <>
      <Head>
        <title>EyeCare - Account Information</title>
      </Head>
      <div className={styles.accountLayout}>
        <ThemeProvider
          theme={isPatient ? patientTypography : providerTypography}
        >
          <BaseHeader {...logoutProps} />
          <AccountTitleHeading title={getHeadingTitle(currentActivePage)} />
          <div className={styles.container}>
            <div className={styles.sidebarContainer}>
              <AccountSidebar />
            </div>
            <div className={styles.pageContainer}>{children}</div>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}
