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
import TableEmpty from "../../atoms/TableEmpty/tableEmpty";
import moment from "moment";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CommonCard from "./commonCard";
import { StyledTableCell } from "./prescriptions";
import { Api } from "../../../pages/api/api";

export default function TestLabReportCard() {
  const [testLabReportData, setTestLabReportData] = React.useState({});
  const isDesktop = useMediaQuery("(min-width: 700px)");
  const iconTestTube = "/icon-testtube.png";

  function onCalledGetTestLabData() {
    const api = new Api();
    api
      .getTestLabData()
      .then(function (response) {
        if (response && response?.entities.length > 0) {
          setTestLabReportData(response.entities[0]);
        }
      })
      .catch(() => {
        //Handle error code
      });
  }

  useEffect(() => {
    onCalledGetTestLabData();
  }, []);

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
    } else {
      statusStyle = styles.statusDefault;
    }
    return (
      <Stack className={[styles.statusStyle, statusStyle].join(" ")}>
        {status}
      </Stack>
    );
  }

  function renderTitleCard() {
    return (
      <Typography className={styles.testLabTitle} tabIndex={0}>
        Eye Exam
      </Typography>
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
        {orderDetails && Object.keys(orderDetails).length > 0 ? (
          <>
            {renderTitleCard()}
            <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
              <Table
                sx={{
                  minWidth: "90%",
                  fontSize: "14px",
                  ".MuiTableCell-body": {
                    fontFamily: "Museo Sans",
                    fontSize: "14px",
                    fontWeight: "400",
                  },
                  ".MuiTableCell-customHead": {
                    fontFamily: "Museo Sans",
                    fontSize: "14px",
                    fontWeight: "500",
                    backgroundColor: "#F4F4F4",
                  },
                }}
                aria-label="Test Lab"
              >
                <TableRow>
                  {tableHeader.map((header, idx) => (
                    <StyledTableCell
                      key={`health-${idx}-tabel-header`}
                      tabIndex={0}
                      className="MuiTableCell-customHead"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "12px",
                        }}
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
                      </Box>
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
                      {renderStatusTestLab(testLabReportData?.status)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <TableEmpty
            text={"You do not have any test and lab reports."}
            sxContainer={{ margin: "24px 0 8px 0" }}
          />
        )}
      </Box>
    );
  }

  function renderMobileView() {
    const orderDetails =
      testLabReportData.data?.testingOrder?.orderDetails || {};
    return (
      <>
        {orderDetails && Object.keys(orderDetails).length > 0 ? (
          <>
            {renderTitleCard()}
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
                  {new moment(orderDetails.dateTime?.startDate).format(
                    "MM/DD/YYYY"
                  )}
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
                  {renderStatusTestLab(testLabReportData?.status)}
                </Typography>
              </Stack>
            </Stack>
          </>
        ) : (
          <TableEmpty
            text={"You do not have any test and lab reports."}
            sxContainer={{ m: "16px", textAlign: "center" }}
          />
        )}
      </>
    );
  }

  return (
    <CommonCard
      title={"Test and Lab Reports"}
      titleIcon={<Image alt="" src={iconTestTube} width={32} height={32} />}
      content={<>{isDesktop ? renderDekstopView() : renderMobileView()}</>}
      navRouter={"/patient/account/medical-record?type=test-lab-result"}
      viewAllText={"View Tests and Lab Reports"}
      customClassName={styles.testLabContainer}
    />
  );
}
