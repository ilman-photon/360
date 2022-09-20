import Head from "next/head";
import styles from "./prescriptionLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";
import { useRouter } from "next/router";
import Navbar from "../molecules/Navbar/Navbar";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";

export default function PrescriptionLayout({
  children,
  backTitle,
  onBackClicked,
  pageTitle = "EyeCare Patient Portal - Prescription",
  title = "Prescriptions",
}) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.defaultLayout}>
        <BaseHeader
          isPrescription={true}
          backTitle={backTitle}
          onBackClicked={() => {
            if (typeof onBackClicked == "function") {
              onBackClicked();
            } else if (typeof onBackClicked == "string") {
              router.push(onBackClicked);
            } else {
              router.back();
            }
          }}
        />
        <Navbar />
        <AccountTitleHeading
          title={title}
          sxContainer={{ marginTop: "107px" }}
        />
        <ThemeProvider theme={patientTypography}>
          <div className={styles.defaultContainer}>{children}</div>
        </ThemeProvider>
      </div>
    </>
  );
}
