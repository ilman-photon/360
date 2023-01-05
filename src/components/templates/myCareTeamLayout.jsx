import Head from "next/head";
import styles from "./myCareTeamLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";
import { logoutProps } from "../../utils/authetication";

export default function MyCareTeamLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title === "Find a Doctor" ? "Doctor Search" : title}</title>
      </Head>
      <div className={styles.defaultLayout}>
        <BaseHeader {...logoutProps} showNavbar={true} />
        <AccountTitleHeading
          title={title}
          sx={{ fontWeight: "400", maxWidth: "1477px", margin: "0 auto" }}
        />
        <ThemeProvider theme={patientTypography}>
          <div className={styles.defaultContainer}>{children}</div>
        </ThemeProvider>
      </div>
    </>
  );
}
