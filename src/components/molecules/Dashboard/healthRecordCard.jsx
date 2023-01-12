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
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDocuments,
  fetchMedicalRecordDocuments,
} from "../../../store/document";
import TableEmpty from "../../atoms/TableEmpty/tableEmpty";
import { renderCTAIcon, StyledTableCell } from "./prescriptions";
import moment from "moment";
import { fetchSource } from "../../../utils/fetchDigitalAssetSource";
import CommonCard, { onRenderButtonView } from "./commonCard";
import {
  setModalContent,
  setOpenModal,
  setShareModalData,
  setSuccessCallback,
} from "../../../store/share";
import { getDynamicShareContent } from "../../organisms/ShareModal/shareModal";

export function shareDocument(
  selectedData,
  dispatch,
  onHandleSuccessShare = () => {
    //This is intentional
  }
) {
  //Handle for Care plan only
  const shareContent = getDynamicShareContent({
    type: "health-record",
    date: selectedData?._created,
  });
  const shareData = {
    id: selectedData?._id || "",
    title: "Share my health record",
    successPostmessage: "Your health record was succesfully shared.",
    type: "healthRecord",
  };

  dispatch(setShareModalData(shareData));
  dispatch(setOpenModal(true));
  dispatch(setModalContent(shareContent));
  dispatch(setSuccessCallback(onHandleSuccessShare));
}

export function parseHealthRecordData(documentList, rows) {
  let healthRecordTemp = [];
  if (documentList && documentList.length > 0) {
    for (const healthItem of rows) {
      const currentDoc = documentList.find(
        (item) => item.encounterNo === healthItem.encounter?.encounterNo
      );
      let tempHealthItem = {
        ...healthItem,
      };

      if (currentDoc) {
        tempHealthItem["digital_assets"] = currentDoc.digital_assets;
      }
      healthRecordTemp.push(tempHealthItem);
    }
  } else {
    healthRecordTemp = rows;
  }

  return healthRecordTemp;
}

export default function HealthRecordCard({
  onHandleSuccessShare = () => {
    //This is intentional
  },
}) {
  const [healthRecordData, setHealthRecordData] = React.useState({});
  const isDesktop = useMediaQuery("(min-width: 700px)");
  const iconPrescription = "/icon-Health-Record.png";
  const dispatch = useDispatch();

  const rows = useSelector((state) => {
    return state.document.healthRecordList;
  });

  const documentList = useSelector((state) => {
    return state.document.documentList;
  });

  const handleAssetDownload = (id, print, newTab = true, isOpenPdf = false) => {
    fetchSource(id, print, newTab, isOpenPdf);
  };

  useEffect(() => {
    const userStorageData = JSON.parse(localStorage.getItem("userData"));
    if (userStorageData) {
      dispatch(
        fetchMedicalRecordDocuments({
          patientId: userStorageData.patientId,
        })
      );
      dispatch(
        fetchDocuments({
          patientId: userStorageData?.patientId,
          category: "health-record",
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setHealthRecordData(parseHealthRecordData(documentList, rows));
  }, [documentList, rows]);

  useEffect(() => {
    if (rows && rows.length > 0) {
      const healthRecordTemp = parseHealthRecordData(documentList, rows);
      if (healthRecordTemp && healthRecordTemp.length > 0) {
        setHealthRecordData(healthRecordTemp[0]);
      }
    }
  }, [documentList, rows]);

  function onRenderCTA() {
    return renderCTAIcon(
      () => {
        handleAssetDownload(healthRecordData.digital_assets?._id);
      },
      () => {
        handleAssetDownload(healthRecordData.digital_assets?._id, true);
      },
      () => {
        shareDocument(healthRecordData, dispatch, onHandleSuccessShare);
      },
      ["download", "print", "share"],
      styles.butttonIconContainer,
      styles.buttonContainer
    );
  }

  const buttonViewCallback = () => {
    handleAssetDownload(
      healthRecordData.digital_assets?._id,
      false,
      true,
      true
    );
  };

  function renderDekstopView() {
    const tableHeader = ["Health Record", "Last update", "", ""];
    return (
      <Box
        sx={{
          padding: "16px",
        }}
      >
        {healthRecordData && Object.keys(healthRecordData).length > 0 ? (
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
                    {onRenderButtonView(buttonViewCallback, isDesktop)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <TableEmpty text={"You do not have any health record."} />
        )}
      </Box>
    );
  }

  function renderMobileView() {
    return (
      <>
        {healthRecordData && Object.keys(healthRecordData).length > 0 ? (
          <Stack key={`health-stack-list`} className={styles.stackContainer}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              className={styles.stackContent}
            >
              <Typography className={styles.titleStyle}>
                Health Record
              </Typography>
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
              {onRenderButtonView(buttonViewCallback, isDesktop)}
            </Stack>
          </Stack>
        ) : (
          <TableEmpty
            text={"You do not have any health record."}
            sxContainer={{ m: "16px", textAlign: "center" }}
          />
        )}
      </>
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
