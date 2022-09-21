import * as React from "react";
import AccountLayout from "../../../../../components/templates/accountLayout";
import { Provider } from "react-redux";
import store from "../../../../../store/store";
import TableWithSort from "../../../../../components/molecules/TableWithSort/tableWithSort";
import { IconButton, Stack } from "@mui/material";
import styles from "./styles.module.scss";
import FileDownloadIcon from "../../../../../assets/icons/FileDownload";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Button, useMediaQuery } from "@mui/material";

export default function TestLabPage() {
  const [isHideDisclaimer, setIsHideDisclaimer] = React.useState(false);

  const isDesktop = useMediaQuery("(min-width: 769px)");

  const tableConfiguration = {
    header: [
      {
        type: "text",
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Test Name",
      },
      {
        type: "text",
        id: "orderBy",
        numeric: false,
        disablePadding: true,
        label: "Ordered by",
        width: 136,
      },
      {
        type: "text",
        id: "date",
        numeric: false,
        disablePadding: true,
        label: "Test Date",
        width: 136,
      },
      {
        type: "text",
        id: "status",
        numeric: false,
        disablePadding: true,
        label: "Test Status",
        width: 136,
      },
      { type: "empty", width: 22 },
    ],
    cells: [
      {
        type: "text",
        primary: true,
        valueKey: "name",
        cellProps: {
          padding: "12px 24px",
          fontWeight: "400",
          fontSize: "16px",
        },
      },
      {
        type: "text",
        valueKey: "orderBy",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: "12px 0",
          fontWeight: "500",
          fontSize: "14px",
        },
      },
      {
        type: "text",
        valueKey: "date",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: "12px 0",
          fontWeight: "500",
          fontSize: "14px",
        },
      },
      {
        type: "text",
        valueKey: "status",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: "12px 0",
          fontWeight: "700",
          fontSize: "16px",
        },
      },
      {
        type: "download-icon",
        valueKey: "source",
        cellProps: { padding: "none" },
        icon: (
          <IconButton>
            <FileDownloadIcon></FileDownloadIcon>
          </IconButton>
        ),
      },
    ],
  };

  const tableConfigurationMobile = {
    header: [
      {
        type: "text",
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Procedure",
        width: 250,
      },
      {
        type: "text",
        id: "orderBy",
        numeric: false,
        disablePadding: false,
        label: "Test Date",
        width: 250,
      },
      { type: "empty", width: 22 },
    ],
    cells: [
      {
        type: "test-lab-mobile",
        valueKey1: "name",
        valueKey2: "orderBy",
        cellHeadLabel: "Ordered by",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: "12px",
          fontWeight: "500",
          fontSize: "14px",
          display: "flex",
          flexFlow: "column",
          borderLeft: "2px solid #F3F3F3",
        },
      },
      {
        type: "test-lab-mobile",
        valueKey1: "date",
        valueKey2: "status",
        cellHeadLabel: "Test Status",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: "12px",
          fontWeight: "500",
          fontSize: "14px",
          display: "flex",
          flexFlow: "column",
        },
      },
      {
        type: "download-icon",
        valueKey: "source",
        cellProps: { padding: "16px" },
        icon: (
          <IconButton>
            <DownloadOutlinedIcon sx={{ color: "#003B4A" }} />
          </IconButton>
        ),
      },
    ],
  };

  const createData = (name, orderBy, date, status) => {
    return {
      name,
      orderBy,
      date,
      status,
    };
  };

  const rows = [
    createData("Eye Surgery", "Hopkins, D.M.", "09/09/2022", "Completed"),
    createData("Eye Surgery2", "Hopkins, D.M.", "09/09/2022", "Completed"),
    createData("Eye Surgery3", "Hopkins, D.M.", "09/09/2022", "Completed"),
    createData("Eye Surgery4", "Hopkins, D.M.", "09/09/2022", "Completed"),
  ];

  return (
    <>
      <div
        className={styles.intakePageWrapper}
        style={{ padding: { xs: "16px", md: "0" } }}
      >
        {!isHideDisclaimer ? (
          <div className={styles.disclaimerWrapper}>
            <div className={styles.disclaimerText}>
              <span className={styles.infoLabel}>
                <InfoOutlinedIcon
                  sx={{
                    width: "18px",
                    height: "18px",
                    color: "#080707",
                    marginRight: "18px",
                  }}
                />{" "}
                Your lab results are available. Please reach out to your
                provider.
              </span>
              <Button
                p={0}
                data-testid={"close-disclaimer-icon"}
                onClick={() => setIsHideDisclaimer(true)}
                sx={{ color: "#003B4A", display: "contents" }}
              >
                <CloseIcon sx={styles.closeIcon} />
              </Button>
            </div>
          </div>
        ) : null}
        <Stack spacing={3}>
          <TableWithSort
            config={isDesktop ? tableConfiguration : tableConfigurationMobile}
            rows={rows}
            isDesktop={isDesktop}
          />
        </Stack>

        <div className={styles.disclaimerWrapper}>
          <div
            className={styles.noResultText}
            style={{ textAlign: { xs: "left", md: "center" } }}
          >
            There are no tests or lab results
          </div>
        </div>
      </div>
    </>
  );
}

TestLabPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AccountLayout currentActivePage={"test-lab-result"}>
        {page}
      </AccountLayout>
    </Provider>
  );
};
