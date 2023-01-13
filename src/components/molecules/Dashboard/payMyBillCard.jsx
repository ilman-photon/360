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
import TableEmpty from "../../atoms/TableEmpty/tableEmpty";
import { StyledTableCell } from "./prescriptions";
import moment from "moment";
import { StyledButton } from "../../atoms/Button/button";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import CommonCard, { onRenderButtonView } from "./commonCard";
import { Api } from "../../../pages/api/api";
import { getBalanceData, mappingListData } from "../../../store/payMyBill";
import { useRouter } from "next/router";

export default function PayMyBillCard() {
  const [payMyBillData, setPayMyBillData] = React.useState({});
  const [patientCredit, setPatientCredit] = React.useState({});
  const isDesktop = useMediaQuery("(min-width: 700px)");
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const router = useRouter();

  const getPatientAccountBalance = async () => {
    const api = new Api();
    api
      .getPatientAccountBalance(false)
      .then((responses) => {
        setPatientCredit(responses);
      })
      .catch(() => {
        setPatientCredit({});
      });
  };

  const getInvoiceWithPatientDetails = async () => {
    const api = new Api();
    api
      .getInvoiceWithPatientDetails(false)
      .then((responses) => {
        if (responses && responses.entities?.length > 0) {
          const openInvoice = mappingListData(responses, true);
          if (openInvoice && openInvoice.length > 0) {
            setPayMyBillData(openInvoice[0]);
          } else {
            setPayMyBillData({});
          }
        } else {
          setPayMyBillData({});
        }
      })
      .catch(() => {
        setPayMyBillData({});
      });
  };

  useEffect(() => {
    getPatientAccountBalance();
    getInvoiceWithPatientDetails();
  }, []);

  function renderHighlightBox(title, value) {
    return (
      <Stack
        p={2}
        className={styles.hightLightContainer}
        sx={{
          background: "#EFF6F7",
          borderRadius: "4px",
        }}
      >
        <Box tabIndex={0} aria-label={`${title} title`}>
          <Typography aria-hidden={true} className={styles.hightLightTitle}>
            {title}
          </Typography>
        </Box>
        <Typography className={styles.hightLightValue} tabIndex={0}>
          {value}
        </Typography>
      </Stack>
    );
  }

  function renderViewUI() {
    return (
      <Box
        sx={{
          padding: "16px",
          position: "relative",
          "@media (max-width: 700px)": {
            padding: "16px 16px 0 16px",
          },
        }}
      >
        {isDesktop ? renderDekstopView() : renderMobileView()}
      </Box>
    );
  }

  function renderMakePaymentButton() {
    return (
      <Box className={styles.makePaymentContainer}>
        <StyledButton
          tabIndex={0}
          aria-label={"Make a Payment"}
          mode={"primary"}
          size={"small"}
          gradient={false}
          onClick={() => {
            //this is intentional
          }}
          data-testid="schedule-btn"
          sx={{
            "&.sxButton": {
              minWidth: isDesktop ? "inherit" : "100% !important",
            },
          }}
        >
          <PaymentOutlinedIcon sx={{ color: "#FFF", marginRight: "10px" }} />{" "}
          Make a Payment
        </StyledButton>
      </Box>
    );
  }

  function renderTotalBill() {
    return (
      <Stack direction={"row"} sx={{ marginBottom: "16px" }}>
        {renderHighlightBox(
          "Account Credit Balance",
          formatter.format(patientCredit?.totalCreditBalance)
        )}
        {renderHighlightBox(
          "Patient Due",
          formatter.format(patientCredit?.totalDueAmount)
        )}
      </Stack>
    );
  }

  function renderDekstopView() {
    const tableHeader = ["Invoice #", "DOS", "Provider", "Balance", ""];
    return (
      <>
        {payMyBillData && Object.keys(payMyBillData).length > 0 ? (
          <>
            {renderTotalBill()}
            <TableContainer
              component={Paper}
              sx={{ borderRadius: 0, marginBottom: "100px" }}
            >
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
                aria-label="my pay bill record"
              >
                <TableRow>
                  {tableHeader.map((header, idx) => (
                    <StyledTableCell
                      key={`mybill-${idx}-tabel-header`}
                      tabIndex={0}
                      className="MuiTableCell-customHead"
                      aria-label={header === "DOS" ? "Date of Service" : header}
                    >
                      {header}
                    </StyledTableCell>
                  ))}
                </TableRow>
                <TableBody>
                  <TableRow
                    key={`mybill-0-tabel-body`}
                    className={styles.tableHealthRecord}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      scope="row"
                      tabIndex={0}
                      sx={{ maxWidth: "80px", wordBreak: "break-word" }}
                    >
                      {payMyBillData.invoiceNumber}
                    </TableCell>
                    <TableCell tabIndex={0}>
                      {new moment(payMyBillData.serviceDate).format("MM/DD/YY")}
                    </TableCell>
                    <TableCell tabIndex={0} sx={{ maxWidth: "80px" }}>{`${
                      payMyBillData.provider || ""
                    }`}</TableCell>
                    <TableCell tabIndex={0}>
                      {getBalanceData(payMyBillData)}
                    </TableCell>
                    <TableCell>
                      {onRenderButtonView(() => {
                        router.push(
                          `/patient/pay-my-bill/summary-detail/${payMyBillData?.id}`
                        );
                      }, isDesktop)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {renderMakePaymentButton()}
          </>
        ) : (
          <TableEmpty text={"You do not have any invoices."} />
        )}
      </>
    );
  }

  function renderMobileView() {
    return (
      <>
        {payMyBillData && Object.keys(payMyBillData).length > 0 ? (
          <>
            {renderTotalBill()}
            <Stack
              key={`health-stack-list`}
              className={styles.stackContainer}
              sx={{
                paddingBottom: "16px !important",
                margin: "0px !important",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                className={styles.stackContent}
              >
                <Typography className={styles.titleStyle}>Invoice #</Typography>
                <Typography className={styles.valueStyle}>
                  {payMyBillData.invoiceNumber}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                className={styles.stackContent}
              >
                <Stack direction={"row"} sx={{ alignItems: "center" }}>
                  <Typography className={styles.titleStyle}>DOS</Typography>
                </Stack>
                <Typography className={styles.valueStyle}>
                  {new moment(payMyBillData.serviceDate).format("MM/DD/YY")}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                className={styles.stackContent}
              >
                <Stack direction={"row"} sx={{ alignItems: "center" }}>
                  <Typography className={styles.titleStyle}>
                    Provider
                  </Typography>
                </Stack>
                <Typography
                  className={styles.valueStyle}
                  sx={{ width: "50%", textAlign: "end" }}
                >
                  {`${payMyBillData.provider || ""}`}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                className={styles.stackContent}
              >
                <Stack direction={"row"} sx={{ alignItems: "center" }}>
                  <Typography className={styles.titleStyle}>Balance</Typography>
                </Stack>
                <Typography className={styles.valueStyle}>
                  {getBalanceData(payMyBillData)}
                </Typography>
              </Stack>
              <Divider sx={{ marginBottom: "18px" }} />
              {onRenderButtonView(() => {
                router.push(
                  `/patient/pay-my-bill/summary-detail/${payMyBillData?.id}`
                );
              }, isDesktop)}
            </Stack>
            {renderMakePaymentButton()}
          </>
        ) : (
          <TableEmpty
            text={"You do not have any invoices."}
            sxContainer={{ textAlign: "center" }}
          />
        )}
      </>
    );
  }

  return (
    <CommonCard
      title={"Pay My Bill"}
      titleIcon={
        <AttachMoneyOutlinedIcon
          sx={{ color: "#003B4A" }}
          aria-hidden="false"
        />
      }
      content={renderViewUI()}
      navRouter={`/patient/pay-my-bill?activeTab=${0}`}
      viewAllText={"View Bill Pay"}
    />
  );
}
