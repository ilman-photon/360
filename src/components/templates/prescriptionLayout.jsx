import Head from "next/head";
import styles from "./prescriptionLayout.module.scss";
import BaseHeader from "../organisms/BaseHeader/baseHeader";
import { ThemeProvider } from "@mui/material/styles";
import { colors, patientTypography } from "../../styles/theme";
import Navbar from "../molecules/Navbar/Navbar";
import AccountTitleHeading from "../atoms/AccountTitleHeading/accountTitleHeading";
import { logoutProps } from "../../utils/authetication";
import { useRouter } from "next/router";
import AdminNavbar from "../molecules/AdminNavbar/adminNavbar";
import { Box, Collapse, IconButton, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { resetShareData, setShowToastMessage } from "../../store/share";
import { useEffect } from "react";

export default function PrescriptionLayout({
  children,
  pageTitle,
  title = "",
  isAdmin = false,
}) {
  const router = useRouter();
  const dispatch = useDispatch();

  const showToastMessage = useSelector((state) => state.share.showToastMessage);
  const shareModalData = useSelector((state) => state.share.shareModalData);

  useEffect(() => {
    if (showToastMessage) {
      setTimeout(() => {
        dispatch(setShowToastMessage(false));
        dispatch(resetShareData());
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToastMessage]);

  const headingTitle = (isTitle = false) => {
    switch (router.query.type) {
      case "intake-forms":
        return "Intake Forms";
      case "insurance-documents":
        return "Insurance Documents";
      case "health-record":
        return "Health Records";
      case "test-lab-result":
        return "Test & Lab Results";
      case "care-plan-overview":
        return isTitle ? "Care Plan" : "Care Plan Overview";
      case "prescriptions":
        return "Prescriptions";
      default:
        if (router.pathname.includes("documents")) return "Intake Forms";
        if (router.pathname.includes("medical-record"))
          return "Care Plan Overview";
        return "Prescriptions";
    }
  };

  function scollToTop() {
    if (window) {
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      <Head>
        <title>
          EyeCare Patient Portal - {pageTitle || headingTitle(true)} Page
        </title>
      </Head>
      <div className={styles.defaultLayout}>
        <BaseHeader {...logoutProps} />
        {isAdmin ? <AdminNavbar /> : <Navbar />}
        {showToastMessage && scollToTop()}
        <Collapse in={showToastMessage} unmountOnExit>
          <Box
            sx={{
              background: colors.foundationGreen,
              p: "28px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <CheckCircleOutlineIcon
              sx={{
                width: 22,
                height: 22,
                color: "white",
                mr: "12px",
              }}
            />
            <Typography
              variant="libreH4"
              sx={{ fontWeight: 500, color: "white" }}
              role="alert"
            >
              {shareModalData?.successPostmessage}
            </Typography>
            <IconButton
              sx={{
                position: "absolute",
                right: "28px",
              }}
              onClick={() => dispatch(setShowToastMessage(false))}
              aria-label="Close option"
            >
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Collapse>
        <AccountTitleHeading
          title={title ? title : headingTitle()}
          sxContainer={{ marginTop: "0px" }}
          sx={{ fontWeight: "400", maxWidth: "1477px", margin: "0 auto" }}
        />
        <ThemeProvider theme={patientTypography}>
          <div className={[styles.defaultContainer.customClassName].join(" ")}>
            {children}
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}
