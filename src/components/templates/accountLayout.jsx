import Head from "next/head";
import styles from "./accountLayout.module.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import AccountSidebar from "../molecules/AccountSidebar/accountSidebar";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";
import { patientTypography, providerTypography } from "../../styles/theme";
import { ThemeProvider } from "@mui/material";

//Prevent html being match between server and client
const BaseHeader = dynamic(() => import("../organisms/BaseHeader/baseHeader"), {
  suspense: true,
});

export default function Layout({ theme = "patient", children }) {
  const isPatient = theme === "patient";
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
          <AccountTitleHeading title="Your Account" />
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
