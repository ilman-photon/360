import Head from "next/head";
import styles from "./prescriptionLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";
import Navbar from "../molecules/Navbar/Navbar";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";
import { logoutProps } from "../../utils/authetication";
import { useRouter } from "next/router";

export default function PrescriptionLayout({
  children,
  pageTitle = "EyeCare Patient Portal - Prescription",
}) {
  const router = useRouter();

  const headingTitle = (isTitle = false) => {
    switch (router.query.type) {
      case "intake-forms":
        return "Intake Forms";
      case "insurance-documents":
        return "Insurance Documents";
      case "health-record":
        return "Health Record";
      case "test-lab-result":
        return "Test & Lab Results";
      case "care-plan-overview":
        return isTitle ? "Care Plan" : "Care Plan Overview";
      case "prescriptions":
        return "Prescriptions";
      default:
        if (router.pathname.includes("documents")) return "Intake Forms";
        if (router.pathname.includes("medical-record"))
          return "Care Plan Overview";
        return "Prescriptions";
    }
  };

  return (
    <>
      <Head>
        <title>EyeCare Patient Portal - {headingTitle(true)} Page</title>
      </Head>
      <ThemeProvider theme={patientTypography}>
        <div className={styles.defaultLayout}>
          <BaseHeader {...logoutProps} />
          <Navbar />
          <AccountTitleHeading
            title={headingTitle()}
            sxContainer={{ marginTop: "0px" }}
            sx={{ fontWeight: "400", maxWidth: "1477px", margin: "0 auto" }}
          />
          <div className={styles.defaultContainer}>{children}</div>
        </div>
      </ThemeProvider>
    </>
  );
}
