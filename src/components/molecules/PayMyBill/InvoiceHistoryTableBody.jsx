import * as React from "react";
import { useDispatch } from "react-redux";
import TableWithSort from "../TableWithSort/tableWithSort";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import FileDownloadIcon from "../../../assets/icons/FileDownload";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { useEffect } from "react";
import { resetDocuments } from "../../../store/document";
import { colors } from "../../../styles/theme";
import { useTranslation } from "next-i18next";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

export const InvoiceHistoryTableBody = ({
  isDesktop,
  data,
  onGoToViewDetail = () => {
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
  console.log(data);

  const tableConfiguration = {
    header: [
      {
        type: "text",
        id: "_numberInvoice",
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
        id: "_provider",
        numeric: false,
        disablePadding: true,
        label: "Provider",
        width: isDesktop ? 136 : 71,
        sx: {
          color: colors.darkGreen,
          fontSize: {
            xs: 14,
            md: 16,
          },
        },
      },
      { type: "empty", width: 40 },
      { type: "empty", width: 22 },
      { type: "empty", width: 22 },
    ],
    cells: [
      {
        type: "text",
        primary: true,
        valueKey: "invoiceNumber",
        cellProps: { padding: "none" },
        contentStyle: {
          padding: "0px 24px",
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
        valueKey: "provider",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: isDesktop ? "12px 0" : "8px 0",
          fontSize: isDesktop ? "unset" : "12px",
        },
        contentClass: isDesktop ? "" : "clipped clip-2",
      },
      {
        type: "button-icon-text",
        children: (props) => {
          return (
            <Button
              onClick={() => onGoToViewDetail(props)}
              data-testid="invoice-view-pdf"
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
              <PictureAsPdfOutlinedIcon className={styles.btnIcon} />
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  lineHeight: "18px",
                }}
              >
                {t("viewPDF")}
              </Typography>
            </Button>
          );
        },
      },
      {
        type: "download-asset",
        valueKey: "id",
        contentStyle: { padding: "16px 5px" },
        icon: (
          <IconButton
            sx={{ width: 24, height: 24, p: 0 }}
            data-testid="downloadPDFButton"
          >
            <FileDownloadIcon sx={{ fill: colors.darkGreen }} />
          </IconButton>
        ),
      },
      {
        type: "download-asset",
        valueKey: "id",
        contentStyle: { padding: "16px 5px" },
        icon: (
          <IconButton
            sx={{ width: 24, height: 24, p: 0 }}
            data-testid="downloadPDFButton"
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
            tableProps: { "aria-label": `Invoices History` },
          }}
        />
      )}
    </Stack>
  );
};

export default InvoiceHistoryTableBody;
