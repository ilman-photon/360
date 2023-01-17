import * as React from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "next-i18next";
import { colors } from "../../../styles/theme";
import PatientAcccountCard from "../ManagePatientAccount/PatientAcccountCard";
import { tableConfiguration } from "./InvoicesHistoryMobileView";

export const OpenInvoiceMobileView = ({
  data,
  onGoToViewDetail = () => {
    //This is intentional
  },
  handleAssetDownload = () => {
    //This is intentional
  },
}) => {
  const headerData = [
    {
      type: "text",
      id: "invoiceNumber",
      numeric: false,
      disablePadding: true,
      label: "Invoice Number",
      width: "70px",
      sx: {
        color: colors.darkGreen,
        fontSize: {
          xs: 14,
          md: 16,
        },
        padding: "0px 16px",
        maxWidth: "140px",
        ".MuiTableSortLabel-root": {
          "&.Mui-active": {
            color: colors.darkGreen,
          },
        },
      },
    },
    {
      type: "text",
      id: "dos",
      numeric: false,
      disablePadding: true,
      label: "Date of Service",
      width: 85,
      sx: {
        color: colors.darkGreen,
        fontSize: {
          xs: 14,
          md: 16,
        },
        maxWidth: "85px",
      },
    },
    {
      type: "text",
      id: "creditBalance",
      numeric: false,
      disablePadding: true,
      label: "Credit Balance",
      width: 85,
      sx: {
        color: colors.darkGreen,
        fontSize: {
          xs: 14,
          md: 16,
        },
        maxWidth: "85px",
      },
    },
    {
      type: "text",
      id: "patientDue",
      numeric: false,
      disablePadding: true,
      label: "Patient Due",
      width: 85,
      sx: {
        color: colors.darkGreen,
        fontSize: {
          xs: 14,
          md: 16,
        },
        maxWidth: "85px",
      },
    },
  ];

  const cellsData = [
    {
      type: "text",
      primary: true,
      valueKey: "invoiceNumber",
      cellProps: { padding: "0px 24px" },
      contentStyle: {
        padding: "0px 24px",
        ".MuiTableCell-root": {
          padding: "16px 24px",
        },
      },
      contentClass: "clipped clip-2",
    },
    {
      type: "text",
      valueKey: "dos",
      cellProps: {
        align: "left",
        component: "th",
        padding: "none",
        width: "30px",
      },
      contentStyle: {
        padding: "8px 0",
        fontSize: "12px",
      },
      contentClass: "clipped clip-2",
    },
    {
      type: "text",
      valueKey: "creditBalance",
      cellProps: {
        align: "left",
        component: "th",
        padding: "none",
        width: "30px",
      },
      contentStyle: {
        padding: "8px 0",
        fontSize: "12px",
      },
      contentClass: "clipped clip-2",
    },
    {
      type: "text",
      valueKey: "patientDue",
      cellProps: {
        align: "left",
        component: "th",
        padding: "none",
        width: "30px",
      },
      contentStyle: {
        padding: "8px 0",
        fontSize: "12px",
      },
      sx: {
        color: "#0095A9",
      },
      contentClass: "clipped clip-2",
    },
  ];

  return (
    <Stack spacing={3} sx={{ mt: 1 }}>
      {data?.length > 0 && (
        <PatientAcccountCard
          config={tableConfiguration(
            headerData,
            cellsData,
            onGoToViewDetail,
            handleAssetDownload
          )}
          rows={data}
          showResultNum={false}
          cardSx={{
            borderColor: "#ECECEC",
            borderStyle: "solid",
          }}
          showSortFilter={false}
        />
      )}
    </Stack>
  );
};

export default OpenInvoiceMobileView;
