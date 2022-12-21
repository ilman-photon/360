import Head from "next/head";
import styles from "./documentLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";
import Navbar from "../molecules/Navbar/Navbar";
import { Box, Link, useMediaQuery } from "@mui/material";
import { logoutProps } from "../../utils/authetication";
import { useRouter } from "next/router";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function DocumentLayout({
  children,
  pageTitle = "EyeCare Patient Portal - Prescription",
  backTitle = "",
  title = "",
  isHideHeader = false,
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const router = useRouter();

  function renderSubNavigation(onClick) {
    return (
      <Box className={styles.backHeader}>
        <ChevronLeftIcon className={styles.arrowIcon} />
        <Link
          className={styles.link}
          aria-roledescription="Link"
          aria-label={backTitle}
          tabIndex={0}
          onClick={onClick}
        >
          {backTitle}
        </Link>
      </Box>
    );
  }
  return (
    <>
      <Head>
        <title>{pageTitle} Page</title>
      </Head>
      <div
        className={styles.defaultLayout}
        style={{ backgroundColor: "#F4F4F4" }}
      >
        {!isHideHeader ? <BaseHeader {...logoutProps} /> : <></>}
        <Navbar />
        {renderSubNavigation(() => {
          router.back();
        })}
        <ThemeProvider theme={patientTypography}>
          <div className={styles.defaultContainer}>{children}</div>
        </ThemeProvider>
      </div>
    </>
  );
}
