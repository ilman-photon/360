import Head from "next/head";
import styles from "./authLayout.module.scss";
import Container from "@mui/material/Container";
import { patientTypography, providerTypography } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";

export default function Layout({
  children,
  showMobileImage = false,
  theme = "patient",
  imageSrc,
  title,
}) {
  const isPatient = theme === "patient";
  const hasImage = imageSrc ? true : false;

  if (!title) {
    title = `EPP Portal`;
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.authLayout}>
        <BaseHeader></BaseHeader>
        <div className={styles.authContainer}>
          <ThemeProvider
            theme={isPatient ? patientTypography : providerTypography}
          >
            <Box
              className={styles.authComponentContainer}
              sx={{
                paddingTop: {
                  xs: showMobileImage ? "35px!important" : "75px!important",
                  md: "100px!important",
                  lg: "146px!important",
                },
                padding: 0,
              }}
            >
              {children}
            </Box>
          </ThemeProvider>
          <Container
            className={styles.authImageContainer}
            sx={{
              display: { xs: showMobileImage ? "flex" : "none", md: "flex" },
              padding: 0,
            }}
          >
            <div className={styles.imageBannerContainer}>
              {hasImage && (
                <Image alt="auth-image" src={imageSrc} layout="fill" />
              )}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
