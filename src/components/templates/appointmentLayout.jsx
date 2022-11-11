import Head from "next/head";
import styles from "./appointmentLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";
import { useRouter } from "next/router";

export default function AppointmentLayout({
  children,
  backTitle,
  onBackClicked,
  pageTitle = "EyeCare Patient Portal - Appointment",
  showNavbar = false,
}) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <ThemeProvider theme={patientTypography}>
        <div className={styles.defaultLayout}>
          <BaseHeader
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
            showNavbar={showNavbar}
          />
          <div className={styles.defaultContainer}>{children}</div>
        </div>
      </ThemeProvider>
    </>
  );
}
