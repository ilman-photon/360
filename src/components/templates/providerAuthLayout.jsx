import Head from "next/head";
import styles from "./providerAuthLayout.module.scss";
import Container from "@mui/material/Container";
import { patientTypography, providerTypography } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Layout({
  children,
  showMobileImage = false,
  theme = "provider",
  title,
}) {
  const isPatient = theme === "provider";
  const pathImageWebsite = "/provider-desktop-image.png";
  const pathImageMobile = "/provider-desktop-image.png";
  const matches = useMediaQuery("(max-width: 768px)");
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
          <Container
            className={styles.authImageContainer}
            sx={{
              display: { xs: showMobileImage ? "flex" : "none", md: "flex" },
              padding: 0,
            }}
          >
            <div className={styles.imageBannerContainer}>
              <Image
                alt="auth-image"
                src={!matches ? pathImageWebsite : pathImageMobile}
                layout="fill"
              />
            </div>
          </Container>
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
        </div>
      </div>
    </>
  );
}
