import * as React from "react";
import AccountCard from "../AccountCard/accountCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./styles.module.scss";
import {
  Box,
  Link,
  Stack,
  ThemeProvider,
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
import { patientTypography } from "../../../styles/theme";
import { useEffect } from "react";
import { getLinkAria } from "../../../utils/viewUtil";
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
import { StyledButton } from "../../atoms/Button/button";
import { fetchSource } from "../../../utils/fetchDigitalAssetSource";

export default function HealthRecordCard({}) {
  const [healthRecordData, setHealthRecordData] = React.useState({});
  const isDesktop = useMediaQuery("(min-width: 700px)");
  const iconPrescription = "/icon-Health-Record.png";
  const router = useRouter();
  const dispatch = useDispatch();

  const rows = useSelector((state) => {
    return state.document.documentList;
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

  function onRenderButtonView() {
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
        onClick={() => {}}
        aria-live={"polite"}
        aria-label={"View record button"}
      >
        View
      </StyledButton>
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
        {rows?.length > 0 ? (
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
                  <TableCell tabIndex={0}>{onRenderButtonView()}</TableCell>
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
          {onRenderButtonView()}
        </Stack>
      </Stack>
    );
  }

  return (
    <ThemeProvider theme={patientTypography}>
      <AccountCard
        className={styles.appointmentContainer}
        isAppoinment={true}
        isDashboard={true}
        titleIcon={
          <Image alt="" src={iconPrescription} width={32} height={32} />
        }
        title={"Health Records"}
        sx={{
          ".MuiCardContent-root": {
            p: 0,
            position: "relative",
          },
          ".MuiCardContent-root .MuiBox-root .MuiGrid-container": {
            p: { xs: "24px 15.5px", md: "24px" },
          },
        }}
      >
        {isDesktop ? renderDekstopView() : renderMobileView()}
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
              router.push("/patient/health-record");
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                router.push("/patient/health-record");
              }
            }}
            {...getLinkAria("View Health Records option")}
            tabIndex={0}
          >
            View Health Records
          </Link>
          <KeyboardArrowRightIcon />
        </Box>
      </AccountCard>
    </ThemeProvider>
  );
}
