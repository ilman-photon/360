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
  customImageBg = false,
  isNotShowHeader = false,
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

  useEffect(() => {
    const appHeight = () => {
      window.setTimeout(function () {
        const doc = document.documentElement;
        const loginHeight =
          title !== "User Registration"
            ? `calc(${window.innerHeight}px - 92px)`
            : `auto`;
        doc.style.setProperty("--app-height", `${window.innerHeight}px`);
        doc.style.setProperty("--login-height", loginHeight);
      }, 500);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("orientationchange", appHeight);
      appHeight();
    }
    return () => {
      window.removeEventListener("orientationchange", appHeight);
    };
  }, [title]);

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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          />
        </Head>
        <div className={styles.authLayout}>
          <BaseHeader isNotShowHeader={isNotShowHeader}></BaseHeader>
          <div className={styles.authContainer}>
            <ThemeProvider
              theme={isPatient ? patientTypography : providerTypography}
            >
              <Box
                className={styles.authComponentContainer}
                sx={{
                  paddingTop: {
                    xs: showMobileImage ? "0px!important" : "75px!important",
                    md:
                      title === "Patient Login"
                        ? "92px!important"
                        : "42px!important",
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
                display: {
                  xs: showMobileImage ? "flex" : "none",
                  sm: "none",
                  lg: "flex",
                },
                padding: 0,
                "@media (orientation: landscape)": {
                  display: "flex",
                },
              }}
            >
              <div
                className={[
                  styles.imageBannerContainer,
                  customImageBg ? styles.objPositionB : styles.objPositionA,
                ].join(" ")}
              >
                {hasImage && <Image alt="" src={imageSrcState} layout="fill" />}
              </div>
            </Container>
          </div>
        </div>
      </Provider>
    </>
  );
}
