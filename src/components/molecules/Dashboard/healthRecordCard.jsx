import * as React from "react";
import styles from "./styles.module.scss";
import {
  Box,
  Stack,
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableCell,
  useMediaQuery,
  Typography,
  Divider,
} from "@mui/material";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMedicalRecordDocuments,
  resetDocuments,
} from "../../../store/document";
import TableEmpty from "../../atoms/TableEmpty/tableEmpty";
import { renderCTAIcon, StyledTableCell } from "./prescriptions";
import moment from "moment";
import { fetchSource } from "../../../utils/fetchDigitalAssetSource";
import CommonCard, { onRenderButtonView } from "./commonCard";

export default function HealthRecordCard({}) {
  const [healthRecordData, setHealthRecordData] = React.useState({});
  const isDesktop = useMediaQuery("(min-width: 700px)");
  const iconPrescription = "/icon-Health-Record.png";
  const router = useRouter();
  const dispatch = useDispatch();

  const rows = useSelector((state) => {
    return state.document.healthRecordList;
  });

  const handleAssetDownload = (id, print, newTab = true) => {
    fetchSource(id, print, newTab);
  };

  useEffect(() => {
    dispatch(resetDocuments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const userStorageData = JSON.parse(localStorage.getItem("userData"));
    if (userStorageData) {
      dispatch(
        fetchMedicalRecordDocuments({
          patientId: userStorageData.patientId,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (rows && rows.length > 0) {
      setHealthRecordData(rows[0]);
    }
  }, [rows]);

  function onRenderCTA() {
    return renderCTAIcon(
      () => {
        handleAssetDownload(healthRecordData.digital_assets?._id);
      },
      () => {
        handleAssetDownload(healthRecordData.digital_assets?._id, true);
      },
      () => {
        //Share
      },
      ["download", "print", "share"],
      styles.butttonIconContainer,
      styles.buttonContainer
    );
  }

  function renderDekstopView() {
    const tableHeader = ["Health Record", "Last update", "", ""];
    return (
      <Box
        sx={{
          padding: "16px",
        }}
      >
        {healthRecordData ? (
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
                  backgroundColor: "#F4F4F4",
                },
              }}
              aria-label="health record"
            >
              <TableRow>
                {tableHeader.map((header, idx) => (
                  <StyledTableCell
                    key={`health-${idx}-tabel-header`}
                    tabIndex={0}
                    className="MuiTableCell-customHead"
                  >
                    {header}
                  </StyledTableCell>
                ))}
              </TableRow>
              <TableBody>
                <TableRow
                  key={`health-0-tabel-body`}
                  className={styles.tableHealthRecord}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell scope="row" tabIndex={0}>
                    {healthRecordData.name}
                  </TableCell>
                  <TableCell tabIndex={0}>
                    {new moment(healthRecordData._created).format("MM/DD/YYYY")}
                  </TableCell>
                  <TableCell tabIndex={0}>{onRenderCTA()}</TableCell>
                  <TableCell tabIndex={0}>
                    {onRenderButtonView(() => {}, isDesktop)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <TableEmpty text={"There are no health records available."} />
        )}
      </Box>
    );
  }

  function renderMobileView() {
    return (
      <Stack key={`health-stack-list`} className={styles.stackContainer}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={styles.stackContent}
        >
          <Typography className={styles.titleStyle}>Health Record</Typography>
          <Typography className={styles.valueName}>
            {healthRecordData.name}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={styles.stackContent}
        >
          <Typography className={styles.titleStyle}>Last Update</Typography>
          <Typography className={styles.valueStyle}>
            {new moment(healthRecordData._created).format("MM/DD/YYYY")}
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={styles.stackContent}
          sx={{
            marginTop: "24px",
          }}
        >
          {onRenderCTA()}
          {onRenderButtonView(() => {}, isDesktop)}
        </Stack>
      </Stack>
    );
  }

  return (
    <CommonCard
      title={"Health Records"}
      titleIcon={<Image alt="" src={iconPrescription} width={32} height={32} />}
      content={isDesktop ? renderDekstopView() : renderMobileView()}
      navRouter={"/patient/health-record"}
      viewAllText={"View Health Records"}
    />
  );
}
