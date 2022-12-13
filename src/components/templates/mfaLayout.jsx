import Head from "next/head";
import styles from "./mfaLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";
import { useSelector } from "react-redux";

export default function MFALayout({ children, customTitle }) {
  const pageTitle = useSelector((state) => state.index.mfaPageTitle);
  return (
    <>
      <Head>
        <title>EyeCare Patient Portal - {customTitle || pageTitle}</title>
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
