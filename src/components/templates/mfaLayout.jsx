import Head from "next/head";
import styles from "./mfaLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";

export default function MFALayout({ children }) {
  return (
    <>
      <Head>
        <title>EyeCare Patient Portal - Multi-Factor Authentication</title>
      </Head>
      <div className={styles.defaultLayout}>
        <BaseHeader />
        <ThemeProvider theme={patientTypography}>
          <div className={styles.defaultContainer}>{children}</div>
        </ThemeProvider>
      </div>
    </>
  );
}
