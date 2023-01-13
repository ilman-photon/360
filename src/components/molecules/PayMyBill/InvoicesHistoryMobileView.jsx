import * as React from "react";
import { Button, IconButton, Stack } from "@mui/material";
import FileDownloadIcon from "../../../assets/icons/FileDownload";
import { colors } from "../../../styles/theme";
import PatientAcccountCard from "../ManagePatientAccount/PatientAcccountCard";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import ReceiptIcon from "@mui/icons-material/Receipt";

export function tableConfiguration(
  headerData = [],
  cellData = [],
  primaryAction,
  secondaryAction,
  isSummary = true
) {
  return {
    header: [
      ...headerData,
      {
        type: "text",
        id: "provider",
        numeric: false,
        disablePadding: true,
        label: "Provider",
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
    ],
    cells: [
      ...cellData,
      {
        type: "text",
        primary: true,
        valueKey: "provider",
        cellProps: { padding: "0px 24px" },
        contentStyle: {
          flex: 2,
          padding: "0px 24px",
          ".MuiTableCell-root": {
            padding: "16px 24px",
          },
        },
        contentClass: "clipped clip-2",
      },
      {
        type: "custom-content",
        children: (props) => {
          return (
            <Stack
              flexDirection={"row"}
              sx={{
                borderTop: "1px solid #dadada80",
                paddingTop: "24px",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={() => {
                  primaryAction(props, isSummary);
                }}
                sx={{
                  display: "flex",
                  backgroundColor: "#007e8f",
                  color: "#ffffff",
                  gap: "8px",
                  padding: "8px 20px",
                  height: "46px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "30px",
                  textTransform: "capitalize",
                }}
              >
                <ReceiptIcon
                  sx={{
                    color: "#FFFFFF",
                    width: "20px",
                    height: "20px",
                  }}
                />
                View Details
              </Button>
              <Stack
                flexDirection={"row"}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: "46px",
                }}
              >
                <IconButton
                  sx={{ width: 24, height: 24, p: 0, marginRight: "18px" }}
                  data-testid="downloadPDFButton"
                  onClick={() => {
                    secondaryAction(props.id);
                  }}
                >
                  <FileDownloadIcon sx={{ fill: colors.darkGreen }} />
                </IconButton>
                <IconButton
                  sx={{ width: 24, height: 24, p: 0 }}
                  data-testid="printPDFButton"
                  onClick={() => {
                    secondaryAction(props.id, true);
                  }}
                >
                  <LocalPrintshopOutlinedIcon sx={{ fill: colors.darkGreen }} />
                </IconButton>
              </Stack>
            </Stack>
          );
        },
      },
    ],
  };
}

export const InvoiceHistoryMobileView = ({
  handleAssetDownload = () => {
    //This is intentional
  },
  onGoToViewDetail = () => {
    //This is intentional
  },
  data,
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
  ];

  return (
    <Stack spacing={3} sx={{ mt: 1 }}>
      {data?.length > 0 && (
        <PatientAcccountCard
          config={tableConfiguration(
            headerData,
            cellsData,
            onGoToViewDetail,
            handleAssetDownload,
            false
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

export default InvoiceHistoryMobileView;
