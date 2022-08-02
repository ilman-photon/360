import Head from "next/head";
import styles from "./authLayout.module.scss";
import Container from "@mui/material/Container";
import { patientTypography, providerTypography } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import dynamic from "next/dynamic";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Layout({
  children,
  showMobileImage = false,
  theme = "patient",
  imageSrc,
  title,
}) {
  const isPatient = theme === "patient";
  const pathImageWebsite = "/desktop_3x.png";
  const pathImageMobile = "/MicrosoftTeams-image (2).png";
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
            <div className={styles.imageBannerContainer}>
              <Image
                alt="auth-image"
                src={!matches ? pathImageWebsite : pathImageMobile}
                layout="fill"
              />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
