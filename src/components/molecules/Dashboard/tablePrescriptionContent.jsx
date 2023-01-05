import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableContainer,
  TableRow,
  Typography,
  TableCell,
  TableBody,
  Paper,
  tableCellClasses,
  Box,
} from "@mui/material";
import styles from "./styles.module.scss";
import MenuList from "./menuList";
import { getDynamicShareContent } from "../../organisms/ShareModal/shareModal";

export const TablePrescriptionContent = ({
  row,
  type,
  idx,
  lastRow = false,
  isMobile,
  isViewAll = false,
  isSharePage = false,
  renderCTAIcon = () => {
    //this is intentional
  },
  downloadPDF = () => {
    //this is intentional
  },
  printHTML = () => {
    //this is intentional
  },
  shareDocument = () => {
    //this is intentional
  },
}) => {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#F4F4F4",
    },
    [`&.${tableCellClasses.body}`]: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: 14,
    },
  }));

  function getBoxStyle() {
    if (!isMobile) {
      if (isViewAll) {
        return styles.quarteBox;
      }
      return styles.halfBox;
    }
    return {};
  }

  function renderPrescriptionTable(
    data,
    tableType,
    idxKey,
    tableLastRow = false
  ) {
    if (data && data.prescriptionDetails) {
      let tableHeader = ["Eye", "Sphere", "Cylinder", "Axis", "Add"];
      if (tableType === "contacts") {
        tableHeader = ["Eye", "Sphere", "BC", "Cylinder", "AXIS"];
      }
      const shareContent = getDynamicShareContent({
        type: "prescription",
        date: data.date,
        prescribedBy: data.prescribedBy,
        expirationDate: data.expirationDate,
      });
      const shareData = {
        id: data?.id || "",
        title: `Share my ${tableType} prescription`,
        successPostmessage: `Your ${tableType} prescription was succesfully shared.`,
        type: tableType,
      };
      return (
        <Box
          key={tableType + idxKey}
          className={
            isViewAll && !isMobile
              ? styles.prescriptionContent
              : styles.prescriptionContentMobile
          }
          data-testid={`${tableType}-container-${idxKey}`}
        >
          <Box
            className={[
              styles.flexDisplay,
              styles.margin,
              idxKey === 0 ? styles.marginTop0 : "",
            ].join(" ")}
            sx={{
              position: "relative",
            }}
          >
            <Box tabIndex={0}>
              <Typography
                variant="customBodyRegular"
                className={styles.glassesViewAll}
              >
                Prescribed on:&nbsp;
              </Typography>
              <Typography
                variant="bodyMedium"
                className={styles.glassesViewAll}
                sx={{
                  marginRight: "auto",
                }}
              >
                {data.date}
              </Typography>
            </Box>
            {!isSharePage ? (
              <>
                {isViewAll && !isMobile ? (
                  renderCTAIcon(
                    () => {
                      downloadPDF(tableType, idxKey);
                    },
                    () => {
                      printHTML(tableType, idxKey);
                    },
                    () => {
                      shareDocument(shareContent, shareData);
                    }
                  )
                ) : (
                  <Box sx={{ position: "absolute", right: 0 }}>
                    <MenuList
                      onClickDownloadButton={() => {
                        downloadPDF(tableType, idxKey);
                      }}
                      onClickPrintButton={() => {
                        printHTML(tableType, idxKey);
                      }}
                      onClickShareButton={() => {
                        shareDocument(shareContent, shareData);
                      }}
                    />
                  </Box>
                )}
              </>
            ) : null}
          </Box>

          <Box className={[isMobile ? "" : styles.flexDisplay, styles.margin]}>
            <Box className={[styles.flexDisplay, getBoxStyle()]} tabIndex={0}>
              <Typography variant="customBodyRegular">
                Prescribed by: &nbsp;
              </Typography>
              <Typography variant="bodyMedium">{data.prescribedBy}</Typography>
            </Box>
            {isViewAll && (
              <Box
                className={[
                  styles.flexDisplay,
                  isMobile ? styles.marginVertical : "",
                ]}
                tabIndex={0}
              >
                <Typography variant="customBodyRegular">
                  Expires on: &nbsp;
                </Typography>
                <Typography variant="bodyMedium">
                  {data.expirationDate}
                </Typography>
              </Box>
            )}
          </Box>

          {!isViewAll && (
            <Box
              className={[isMobile ? "" : styles.flexDisplay, styles.margin]}
              tabIndex={0}
            >
              <Typography variant="customBodyRegular">
                Expires on: &nbsp;
              </Typography>
              <Typography variant="bodyMedium">
                {data.expirationDate}
              </Typography>
            </Box>
          )}

          <Box
            sx={{
              borderBottom: tableLastRow ? 0 : 1,
              borderColor: "divider",
              padding: isViewAll ? "14px 16px 32px 16px" : "20px 16px",
              "@media print": {
                borderBottom: 0,
              },
            }}
          >
            <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
              <Table
                sx={{
                  minWidth: "90%",
                  fontSize: "14px",
                  ".MuiTableCell-body": {
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "400",
                  },
                  ".MuiTableCell-customHead": {
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                }}
                aria-label="prescription"
              >
                {/* <TableHead> */}
                <TableRow>
                  {tableHeader.map((header, headerIdx) => (
                    <StyledTableCell
                      key={`${idxKey}-${headerIdx}-tabel-header`}
                      tabIndex={0}
                      className="MuiTableCell-customHead"
                      sx={{ backgroundColor: "#F4F4F4" }}
                    >
                      {header}
                    </StyledTableCell>
                  ))}
                </TableRow>
                {/* </TableHead> */}
                <TableBody>
                  {data?.prescriptionDetails?.map((row, rowIdx) => (
                    <TableRow
                      key={`${idxKey}-${rowIdx}-tabel-body`}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell scope="row" tabIndex={0}>
                        {row.eye}
                      </TableCell>
                      <TableCell tabIndex={0}>{row.sph}</TableCell>
                      <TableCell tabIndex={0}>
                        {tableType === "contacts" ? row.bc : row.cyl}
                      </TableCell>
                      <TableCell tabIndex={0}>
                        {tableType === "contacts" ? row.cyl : row.axis}
                      </TableCell>
                      <TableCell tabIndex={0}>
                        {tableType === "contacts" ? row.axis : row.add}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      );
    }
  }
  return renderPrescriptionTable(row, type, idx, lastRow);
};

export default TablePrescriptionContent;
