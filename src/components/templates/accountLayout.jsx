import Head from "next/head";
import styles from "./accountLayout.module.scss";
import dynamic from "next/dynamic";
import { useState, Suspense } from "react";
import AccountSidebar from "../molecules/AccountSidebar/accountSidebar";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";
import AccountDrawer from "../molecules/AccountDrawer/accountDrawer";
import { patientTypography, providerTypography } from "../../styles/theme";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import * as React from "react";

//Prevent html being match between server and client
const BaseHeader = dynamic(() => import("../organisms/BaseHeader/baseHeader"), {
  suspense: true,
});

export default function Layout({
  theme = "patient",
  currentActivePage = "",
  children,
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isPatient = theme === "patient";
  const isMobile = useMediaQuery("(max-width: 768px)");

  const onClose = () => {
    setIsDrawerOpen(false);
  };

  const getHeadingTitle = (pageName) => {
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
          <Suspense fallback={`Loading...`}>
            <BaseHeader />
          </Suspense>
          <AccountTitleHeading title={getHeadingTitle(currentActivePage)} />
          <div className={styles.container}>
            <div className={styles.sidebarContainer}>
              <AccountSidebar />
            </div>
            <div className={styles.pageContainer}>{children}</div>
          </div>
          {/* {isDrawerOpen ? <AccountDrawer onClose={onClose} /> : null} */}
        </ThemeProvider>
      </div>
    </>
  );
}
