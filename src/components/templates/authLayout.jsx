import Head from "next/head";
import styles from "./authLayout.module.scss";
import Container from "@mui/material/Container";
import { patientTypography, providerTypography } from "../../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../../store/store";

export default function AuthLayout({
  children,
  showMobileImage = false,
  theme = "patient",
  imageSrc,
  title,
  isReverseFlex = true,
}) {
  const isPatient = theme === "patient";
  const pathImageWebsite = "/desktop_3x.png";
  const pathImageMobile = "/MicrosoftTeams-image_2x.png";
  const matches = useMediaQuery("(max-width: 768px)");
  const [titleState, setTitleState] = useState(`EPP Portal`);
  const [imageSrcState, setImageSrcState] = useState(
    !matches ? pathImageWebsite : pathImageMobile
  );
  const hasImage = imageSrcState ? true : false;

  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", appHeight);
      appHeight();
    }
    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []);

  useEffect(() => {
    if (title) {
      setTitleState(title);
    }
    if (imageSrc) {
      setImageSrcState(imageSrc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, imageSrc]);
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>{`EyeCare Patient Portal - ${titleState}`}</title>
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
                    xs: showMobileImage ? "16px!important" : "75px!important",
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
                {hasImage && <Image alt="" src={imageSrcState} layout="fill" />}
              </div>
            </Container>
          </div>
        </div>
      </Provider>
    </>
  );
}
