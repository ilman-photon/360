import Head from "next/head";
import styles from "./default.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";

export default function AppointmentLayout({
  children,
  backTitle,
  onBackClicked,
}) {
  return (
    <>
      <Head>
        <title>Appointment</title>
      </Head>
      <div className={styles.defaultLayout}>
        <BaseHeader backTitle={backTitle} onBackClicked={onBackClicked} />
        <ThemeProvider theme={patientTypography}>
          <div className={styles.defaultContainer}>{children}</div>
        </ThemeProvider>
      </div>
    </>
  );
}
