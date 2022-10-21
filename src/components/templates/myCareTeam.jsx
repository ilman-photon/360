import Head from "next/head";
import styles from "./myCareTeam.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";
import Navbar from "../molecules/Navbar/Navbar";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";
import { logoutProps } from "../../utils/authetication";

export default function MyCareTeamLayout({ children }) {
  return (
    <>
      <Head>
        <title>My Care Team</title>
      </Head>
      <div className={styles.defaultLayout}>
        <BaseHeader {...logoutProps} />
        <Navbar />
        <AccountTitleHeading
          title="My Care Team"
          sx={{ fontWeight: "400", maxWidth: "1477px", margin: "0 auto" }}
        />
        <ThemeProvider theme={patientTypography}>
          <div className={styles.defaultContainer}>{children}</div>
        </ThemeProvider>
      </div>
    </>
  );
}
