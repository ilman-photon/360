import Head from "next/head";
import styles from "./updateLoginLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { patientTypography } from "../../styles/theme";
import { useRouter } from "next/router";
import { useLogin } from "../../utils/customHook";

export default function UpdateLoginLayout({
  children,
  pageTitle = "EyeCare Patient Portal - Appointment",
}) {
  const isLogin = useLogin();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <ThemeProvider theme={patientTypography}>
        {isLogin && (
          <div className={styles.defaultLayout}>
            <BaseHeader
              backTitle={"Back to Login & Security"}
              onBackClicked={() => {
                router.push("/patient/account/login-&-security");
              }}
              showNavbar={true}
              sxSubNavigation={{
                paddingLeft: {
                  sm: "48px",
                },
              }}
            />
            <div className={styles.defaultContainer}>{children}</div>
          </div>
        )}
      </ThemeProvider>
    </>
  );
}
