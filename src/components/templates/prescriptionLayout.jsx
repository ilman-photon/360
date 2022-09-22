import Head from "next/head";
import styles from "./prescriptionLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";
import { useRouter } from "next/router";
import Navbar from "../molecules/Navbar/Navbar";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";
import { useMediaQuery } from "@mui/material";
import { logoutProps } from "../../utils/authetication";

export default function PrescriptionLayout({
  children,
  backTitle,
  onBackClicked,
  pageTitle = "EyeCare Patient Portal - Prescription",
  title = "Prescriptions",
}) {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 769px)");
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.defaultLayout}>
        <BaseHeader {...logoutProps} />
        <Navbar />
        <AccountTitleHeading
          title={title}
          sxContainer={{ marginTop: isDesktop ? "107px" : "56px" }}
        />
        <ThemeProvider theme={patientTypography}>
          <div className={styles.defaultContainer}>{children}</div>
        </ThemeProvider>
      </div>
    </>
  );
}
