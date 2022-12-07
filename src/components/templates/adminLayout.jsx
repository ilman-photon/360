import Head from "next/head";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";
import { patientTypography, providerTypography } from "../../styles/theme";
import { ThemeProvider } from "@mui/material";
import * as React from "react";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { Provider, connect } from "react-redux";
import store from "../../store/store";
import { logoutProps } from "../../utils/authetication";
import AdminNavbar from "../molecules/AdminNavbar/adminNavbar";
import { useLogin } from "../../utils/customHook";

function AdminLayout({
  pageMessage,
  theme = "patient",
  currentActivePage = "",
  pageTitle = "",
  children,
}) {
  const isLogin = useLogin(true);
  const isPatient = theme === "patient";

  const getHeadingTitle = (pageName) => {
    switch (pageName) {
      case "account-recovery":
        return "Account Recovery";
      case "locked-accounts":
        return "Locked Accounts";
      case "documents":
        return "Documents";
      default:
        return "";
    }
  };

  return (
    <Provider store={store}>
      <Head>
        <title>EyeCare Patient Portal - {pageTitle}</title>
      </Head>
      {isLogin && (
        <div style={{ background: "#F4F4F4", minHeight: "100vh" }}>
          <ThemeProvider
            theme={isPatient ? patientTypography : providerTypography}
          >
            <BaseHeader {...logoutProps} isAdmin />
            <AdminNavbar />
            <AccountTitleHeading
              title={getHeadingTitle(currentActivePage)}
              sx={{
                fontWeight: { xs: "500", md: "inherit" },
                textAlign: { xs: "center", sm: "inherit" },
                padding: {
                  sm: "0 !important",
                  md: "0 24px",
                },
              }}
              sxContainer={{
                display: "grid",
              }}
            />
            {children}
          </ThemeProvider>
        </div>
      )}
    </Provider>
  );
}

const mapStateToProps = function (state) {
  return {
    pageMessage: state.index.pageMessage,
  };
};

export default connect(mapStateToProps)(AdminLayout);
