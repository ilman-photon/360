/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useDispatch } from "react-redux";
import TableWithSort from "../TableWithSort/tableWithSort";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import FileDownloadIcon from "../../../assets/icons/FileDownload";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import { resetDocuments } from "../../../store/document";
import { colors } from "../../../styles/theme";
import { useTranslation } from "next-i18next";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { useEffect } from "react";

export const OpenInvoiceTableBody = ({
  isDesktop,
  data,
  onGoToViewDetail = () => {
    //This is intentional
  },
  convertDate = () => {
    //This is intentional
  },
  handleAssetDownload = () => {
    //This is intentional
  },
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation("translation", {
    keyPrefix: "payMyBill",
  });

  const tableConfiguration = {
    header: [
      {
        type: "text",
        id: "_invoiceNumber",
        numeric: false,
        disablePadding: true,
        label: "Invoice Number",
        width: isDesktop ? 200 : 161,
        sx: {
          color: colors.darkGreen,
          fontSize: {
            xs: 14,
            md: 16,
          },
          padding: "0px 24px",
          ".MuiTableSortLabel-root": {
            "&.Mui-active": {
              color: colors.darkGreen,
            },
          },
        },
      },
      {
        type: "text",
        id: "_dos",
        numeric: false,
        disablePadding: true,
        label: "Date of Service",
        width: isDesktop ? 110 : 161,
        sx: {
          color: colors.darkGreen,
          fontSize: {
            xs: 14,
            md: 16,
          },
          ".MuiTableSortLabel-root": {
            "&.Mui-active": {
              color: colors.darkGreen,
            },
          },
        },
      },
      {
        type: "text",
        id: "_provider",
        numeric: false,
        disablePadding: true,
        label: "Provider",
        width: isDesktop ? 120 : 71,
        sx: {
          color: colors.darkGreen,
          fontSize: {
            xs: 14,
            md: 16,
          },
        },
      },
      {
        type: "text",
        id: "_accCreditBalance",
        numeric: false,
        disablePadding: true,
        label: "Account Credit Balance",
        width: isDesktop ? 100 : 71,
        sx: {
          color: colors.darkGreen,
          fontSize: {
            xs: 14,
            md: 16,
          },
        },
      },
      {
        type: "text",
        id: "_patientDue",
        numeric: false,
        disablePadding: true,
        label: "Patient Due",
        width: isDesktop ? 100 : 71,
        sx: {
          color: colors.darkGreen,
          fontSize: {
            xs: 14,
            md: 16,
          },
        },
      },
      { type: "empty", width: 100 },
      { type: "empty", width: 20 },
      { type: "empty", width: 20 },
    ],
    cells: [
      {
        type: "text",
        primary: true,
        valueKey: "invoiceNumber",
        cellProps: { padding: "none" },
        contentStyle: {
          padding: "0 24px",
        },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "text",
        valueKey: "dos",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: isDesktop ? "12px 0" : "8px 0",
          fontSize: isDesktop ? "unset" : "12px",
        },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "text",
        primary: true,
        valueKey: "provider",
        cellProps: { padding: "none" },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "text",
        valueKey: "creditBalance",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: isDesktop ? "12px 0" : "8px 0",
          fontSize: isDesktop ? "unset" : "12px",
        },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "text",
        valueKey: "patientDue",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: isDesktop ? "12px 0" : "8px 0",
          fontSize: isDesktop ? "unset" : "12px",
          color: "#0095A9",
        },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "button-icon-text",
        children: (props) => {
          return (
            <Button
              onClick={() => onGoToViewDetail(props)}
              data-testid="invoice-view-detail"
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#007e8f",
                color: "#ffffff",
                gap: "8px",
                padding: "8px 20px",
                height: "46px",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "inherit",
                borderRadius: "30px",
                ":hover": { backgroundColor: "#007e8f" },
              }}
            >
              <ReceiptOutlinedIcon className={styles.btnIcon} />
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  lineHeight: "18px",
                }}
              >
                {t("viewDetails")}
              </Typography>
            </Button>
          );
        },
      },
      {
        type: "download-asset",
        valueKey: "id",
        contentStyle: { padding: "16px" },
        icon: (
          <IconButton
            sx={{ width: 24, height: 24, p: 0 }}
            data-testid="download-open-invoice"
          >
            <FileDownloadIcon sx={{ fill: colors.darkGreen }} />
          </IconButton>
        ),
      },
      {
        type: "download-asset",
        valueKey: "id",
        contentStyle: { padding: "16px" },
        icon: (
          <IconButton
            sx={{ width: 24, height: 24, p: 0 }}
            data-testid="print-open-invoice"
          >
            <LocalPrintshopOutlinedIcon sx={{ fill: colors.darkGreen }} />
          </IconButton>
        ),
      },
    ],
  };

  useEffect(() => {
    dispatch(resetDocuments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack spacing={3} sx={{ mt: 1 }}>
      {data?.length > 0 && (
        <TableWithSort
          config={tableConfiguration}
          rows={data}
          onAssetDownload={handleAssetDownload}
          additionalProps={{
            tableProps: { "aria-label": `Invoice Table` },
          }}
        />
      )}
    </Stack>
  );
};

export default OpenInvoiceTableBody;
