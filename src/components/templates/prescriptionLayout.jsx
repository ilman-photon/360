import Head from "next/head";
import styles from "./prescriptionLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";
import Navbar from "../molecules/Navbar/Navbar";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";
import { useMediaQuery } from "@mui/material";
import { logoutProps } from "../../utils/authetication";
import { useRouter } from "next/router";

export default function PrescriptionLayout({
  children,
  pageTitle = "EyeCare Patient Portal - Prescription",
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const router = useRouter();

  const headingTitle = () => {
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
        return "Care Plan Overview";
      case "prescriptions":
        return "Prescriptions";
      default:
        return "Prescriptions";
    }
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.defaultLayout}>
        <BaseHeader {...logoutProps} />
        <Navbar />
        <AccountTitleHeading
          title={headingTitle()}
          sxContainer={{ marginTop: isDesktop ? "107px" : "56px" }}
          sx={{ fontWeight: "400", maxWidth: "1477px", margin: "0 auto" }}
        />
        <ThemeProvider theme={patientTypography}>
          <div className={styles.defaultContainer}>{children}</div>
        </ThemeProvider>
      </div>
    </>
  );
}
