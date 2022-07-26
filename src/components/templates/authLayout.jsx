import Head from "next/head";
import styles from "./authLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import Container from "@mui/material/Container";
import { patientTypography, providerTypography } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";

export default function Layout({
  children,
  showMobileImage = false,
  theme = "patient",
}) {
  const isPatient = theme === "patient";
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <div className={styles.authLayout}>
        <BaseHeader></BaseHeader>
        <div className={styles.authContainer}>
          <ThemeProvider
            theme={isPatient ? patientTypography : providerTypography}
          >
            <Container
              className={styles.authComponentContainer}
              sx={{
                paddingTop: {
                  xs: showMobileImage ? "35px!important" : "75px!important",
                  md: "146px!important",
                },
                padding: 0,
              }}
            >
              {children}
            </Container>
          </ThemeProvider>
          <Container
            className={styles.authImageContainer}
            sx={{
              display: { xs: showMobileImage ? "flex" : "none", md: "flex" },
              padding: 0,
            }}
          >
            <img
              src="https://c4.wallpaperflare.com/wallpaper/930/115/679/panda-4k-high-quality-hd-wallpaper-preview.jpg"
              className={styles.imageBanner}
              alt="auth-image"
            />
          </Container>
        </div>
      </div>
    </>
  );
}
