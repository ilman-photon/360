import * as React from "react";
import AccountCard from "../AccountCard/accountCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./styles.module.scss";
import { Box, Link, ThemeProvider, useMediaQuery } from "@mui/material";
import { patientTypography } from "../../../styles/theme";
import { getLinkAria } from "../../../utils/viewUtil";
import { useRouter } from "next/router";
import { StyledButton } from "../../atoms/Button/button";

export function onRenderButtonView(
  onClickViewButton = () => {},
  isDesktop = true
) {
  return (
    <StyledButton
      theme="patient"
      mode="secondary"
      size="small"
      gradient={false}
      sx={{
        "&.sxButton": {
          height: "30px",
          padding: 0,
          minWidth: isDesktop ? "50px !important" : "60% !important",
          fontSize: "14px",
          fontWeight: 500,
          borderRadius: "5px",
          border: "2px solid #003B4A",
        },
      }}
      data-testid="view-record-btn"
      tabindex="1"
      onClick={onClickViewButton}
      aria-live={"polite"}
      aria-label={"View record button"}
    >
      View
    </StyledButton>
  );
}

export default function CommonCard({
  title = "",
  titleIcon = <></>,
  content = {},
  navRouter = "",
  viewAllText = "",
  customClassName = "",
}) {
  const router = useRouter();

  function handleViewClicked() {
    if (typeof navRouter === "function") {
      navRouter();
    } else if (typeof navRouter === "string") {
      router.push(navRouter);
    }
  }

  return (
    <ThemeProvider theme={patientTypography}>
      <AccountCard
        className={[styles.appointmentContainer, customClassName].join(" ")}
        isAppoinment={true}
        isDashboard={true}
        titleIcon={titleIcon}
        title={title}
        sx={{
          ".MuiCardContent-root": {
            p: 0,
            position: "relative",
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
          ".MuiCardContent-root .MuiBox-root .MuiGrid-container": {
            p: { xs: "24px 15.5px", md: "24px" },
          },
        }}
      >
        {content}
        <Box
          className={[styles.flexDisplay, styles.viewPrescription]}
          sx={{
            borderTop: 1,
            borderColor: "divider",
            paddingTop: "20px",
          }}
        >
          <Link
            className={styles.viewPrescriptionText}
            sx={{ color: "#008294", fontFamily: "Inter" }}
            onClick={() => {
              handleViewClicked();
            }}
            onKeyPress={(e) => {
              handleViewClicked();
            }}
            {...getLinkAria(`${viewAllText} option`)}
            tabIndex={0}
          >
            {viewAllText}
          </Link>
          <KeyboardArrowRightIcon />
        </Box>
      </AccountCard>
    </ThemeProvider>
  );
}
