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
}) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>EyeCare Patient Portal - Appointment</title>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <div className={styles.defaultLayout}>
        <BaseHeader
          backTitle={backTitle}
          onBackClicked={() => {
            if (onBackClicked) {
              onBackClicked();
            } else {
              router.back();
            }
          }}
        />
        <ThemeProvider theme={patientTypography}>
          <div className={styles.defaultContainer}>{children}</div>
        </ThemeProvider>
      </div>
    </>
  );
}
