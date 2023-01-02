import * as React from "react";
import { useDispatch } from "react-redux";
import TableWithSort from "../TableWithSort/tableWithSort";
import { Button, Stack } from "@mui/material";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { fetchSource } from "../../../utils/fetchDigitalAssetSource";
import { colors } from "../../../styles/theme";
import { useEffect } from "react";
import { resetDocuments } from "../../../store/document";

export const InvoiceHistoryMobileView = ({ data }) => {
  const dispatch = useDispatch();
  const tableConfiguration = {
    header: [
      {
        type: "text",
        id: "_numberInvoice",
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
        id: "_dos",
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
      { type: "empty", width: 20, padding: "16px 0px" },
      { type: "empty", width: 22 },
    ],
    cells: [
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
        type: "button-icon-text",
        cellProps: {
          align: "left",
          component: "td",
          padding: "none",
          height: "40px",
        },
        children: (props) => {
          return (
            <Button
              onClick={() => onGoToViewDetail(props)}
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#007e8f",
                color: "#ffffff",
                gap: "8px",
                padding: "8px 20px",
                height: "40px",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "inherit",
                borderRadius: "50%",
                minWidth: "40px",
                width: "40px",
                ":hover": { backgroundColor: "#007e8f" },
              }}
            >
              <PictureAsPdfOutlinedIcon
                sx={{
                  color: "#FFFFFF",
                  width: "20px",
                  height: "20px",
                }}
              />
            </Button>
          );
        },
      },
      {
        type: "menus",
        valueKey: "digital_assets._id",
        cellProps: {
          padding: "none",
          sx: {
            textAlign: "center",
          },
        },
      },
    ],
  };

  const handleAssetDownload = (id) => {
    fetchSource(id);
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
            tableProps: { "aria-label": `Invoices History Mobile` },
          }}
        />
      )}
    </Stack>
  );
};

export default InvoiceHistoryMobileView;
