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
} from "@mui/material";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocuments, resetDocuments } from "../../../store/document";
import TableEmpty from "../../atoms/TableEmpty/tableEmpty";
import moment from "moment";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CommonCard from "./commonCard";
import { StyledTableCell } from "./prescriptions";

export default function TestLabReportCard({}) {
  const [testLabReportData, setTestLabReportData] = React.useState({});
  const isDesktop = useMediaQuery("(min-width: 700px)");
  const iconTestTube = "/icon-testtube.png";
  const router = useRouter();
  const dispatch = useDispatch();

  const rows = useSelector((state) => {
    return state.document.documentList;
  });

  useEffect(() => {
    dispatch(resetDocuments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const userStorageData = JSON.parse(localStorage.getItem("userData"));
    if (userStorageData) {
      dispatch(
        fetchDocuments({
          patientId: userStorageData.patientId,
          category: "test-lab-result",
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (rows && rows.length > 0) {
      setTestLabReportData(rows[0]);
    }
  }, [rows]);

  function renderStatusTestLab(status) {
    let statusStyle = "";
    if (status == "pending") {
      statusStyle = styles.statusPending;
    } else if (status == "complete") {
      statusStyle = styles.statusComplete;
    } else if (status == "error") {
      statusStyle = styles.statusError;
    } else if (status == "natural error") {
      statusStyle = styles.statusNaturalError;
    }
    return (
      <Stack className={[styles.statusStyle, statusStyle].join(" ")}>
        {status}
      </Stack>
    );
  }

  function renderDekstopView() {
    const tableHeader = ["Test Name", "Ordered by", "Test Date", "Test Status"];
    const tableHeaderIcon = [
      "",
      "/provider-doctor-grey.png",
      "/calendar-today-grey.png",
      "/check-box-grey.png",
    ];
    const orderDetails =
      testLabReportData.data?.testingOrder?.orderDetails || {};
    return (
      <Box
        sx={{
          padding: "16px",
        }}
      >
        {orderDetails ? (
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
                    {tableHeaderIcon[idx] && (
                      <Image
                        alt=""
                        src={tableHeaderIcon[idx]}
                        width={18}
                        height={18}
                        className={styles.imageTableHeader}
                      />
                    )}
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
                    {orderDetails.testType?.name}
                  </TableCell>
                  <TableCell tabIndex={0}>
                    {`${orderDetails.orderingProvider?.firstName} ${orderDetails.orderingProvider?.lastName}`}
                  </TableCell>
                  <TableCell tabIndex={0}>
                    {new moment(orderDetails.dateTime?.startDate).format(
                      "MM/DD/YYYY"
                    )}
                  </TableCell>
                  <TableCell tabIndex={0}>
                    {renderStatusTestLab(orderDetails.orderDetails?.status)}
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
    const orderDetails =
      testLabReportData.data?.testingOrder?.orderDetails || {};
    return (
      <Stack key={`health-stack-list`} className={styles.stackContainer}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={styles.stackContent}
        >
          <Typography className={styles.titleStyle}>Test Name</Typography>
          <Typography className={styles.valueStyle}>
            {orderDetails.testType?.name}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={styles.stackContent}
        >
          <Stack direction={"row"} sx={{ alignItems: "center" }}>
            <Image
              alt=""
              src={"/provider-doctor-grey.png"}
              width={25}
              height={25}
              className={styles.imageTableHeader}
            />
            <Typography
              className={styles.titleStyle}
              sx={{ marginLeft: "12px" }}
            >
              Ordered by
            </Typography>
          </Stack>
          <Typography className={styles.valueStyle}>
            {`${orderDetails.orderingProvider?.firstName} ${orderDetails.orderingProvider?.lastName}`}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={styles.stackContent}
        >
          <Stack direction={"row"} sx={{ alignItems: "center" }}>
            <CalendarTodayOutlinedIcon width={25} height={25} />
            <Typography
              className={styles.titleStyle}
              sx={{ marginLeft: "12px" }}
            >
              Test Date
            </Typography>
          </Stack>
          <Typography className={styles.valueStyle}>
            {new moment(orderDetails.dateTime?.startDate).format("MM/DD/YYYY")}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          className={styles.stackContent}
        >
          <Stack direction={"row"} sx={{ alignItems: "center" }}>
            <CheckBoxOutlinedIcon width={27} height={27} />
            <Typography
              className={styles.titleStyle}
              sx={{ marginLeft: "12px" }}
            >
              Test Status
            </Typography>
          </Stack>
          <Typography className={styles.valueStyle}>
            {renderStatusTestLab(orderDetails.orderDetails?.status)}
          </Typography>
        </Stack>
      </Stack>
    );
  }

  return (
    <CommonCard
      title={"Test and Lab Reports"}
      titleIcon={<Image alt="" src={iconTestTube} width={32} height={32} />}
      content={
        <>
          <Typography className={styles.testLabTitle} tabIndex={0}>
            Eye Exam
          </Typography>
          {isDesktop ? renderDekstopView() : renderMobileView()}
        </>
      }
      navRouter={"/patient/account/medical-record?type=test-lab-result"}
      viewAllText={"View Tests and Lab Reports"}
      customClassName={styles.testLabContainer}
    />
  );
}
