import * as React from "react";
import { styled } from "@mui/material/styles";
import { colors, patientTypography } from "../../../styles/theme";
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableCell,
  TableBody,
  Paper,
  tableCellClasses,
  Link,
  useMediaQuery,
  Tabs,
  Tab,
  Box,
  Stack,
} from "@mui/material";
import AccountCard from "../AccountCard/accountCard";
import Image from "next/image";
import styles from "./styles.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ThemeProvider } from "@emotion/react";
import MenuList from "./menuList";
import { useEffect, useState } from "react";
import { parsePrescriptionData } from "../../../utils/appointment";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import PrescriptionMedication from "./prescriptionMedication";

export default function Prescriptions({
  prescriptionData = {},
  onViewPrescriptions = () => {
    //this is intentional
  },
  isViewAll = false,
  onMedicationRequestRefill = () => {},
  requestRefillResponseData = null,
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const iconPrescription = "/icon-prescription.png";
  const iconContacts = "/icon-contacts.png";
  const iconGlasses = "/icon-glasses.png";
  const iconMedication = "/icon-medication.png";
  const iconShare = "/icon-share.png";
  const iconDownload = "/icon-download.png";
  const [value, setValue] = React.useState(0);
  const [prescription, setPrescriptione] = React.useState({
    contacts: [],
    glasses: [],
    medications: {
      active: [],
      past: [],
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const { parsePrescriptions, activeTab } =
      parsePrescriptionData(prescriptionData);
    setPrescriptione(parsePrescriptions);
    if (isViewAll && requestRefillResponseData === null) {
      setValue(activeTab);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prescriptionData]);

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

  function renderCTAIcon() {
    return (
      <Stack direction={"row"} alignSelf={"center"} sx={{ marginLeft: "auto" }}>
        <Box
          sx={{
            width: "15px",
            height: "15px",
          }}
        >
          <Image alt="" src={iconDownload} width={15} height={15} />
        </Box>
        <Box
          sx={{
            width: "15px",
            height: "15px",
            margin: "0px 15px",
          }}
        >
          <Image alt="" src={iconShare} width={15} height={15} />
        </Box>

        <LocalPrintshopOutlinedIcon
          sx={{
            width: "18px",
            height: "18px",
            color: colors.darkGreen,
          }}
        />
      </Stack>
    );
  }

  function renderPrescriptionTable(data, type, idxKey, lastRow = false) {
    if (data && data.prescriptionDetails) {
      let tableHeader = ["Eye", "Sph", "Cyl", "Axis", "Add"];
      if (type === "contact") {
        tableHeader = ["Eye", "Sph", "BC", "CYL", "AXIS"];
      }
      return (
        <Box
          key={type + idxKey}
          className={isViewAll ? styles.prescriptionContent : {}}
        >
          <Box className={[styles.flexDisplay, styles.margin]}>
            <Typography
              variant="customBodyRegular"
              className={isViewAll ? styles.glassesViewAll : {}}
            >
              {isViewAll ? `Prescribed on:` : `Prescribed by:`}&nbsp;
            </Typography>
            <Typography
              variant="bodyMedium"
              className={isViewAll ? styles.glassesViewAll : {}}
              sx={{
                marginRight: isViewAll && isMobile ? "auto" : "0px",
              }}
            >
              {isViewAll ? data.date : data.prescribedBy}
            </Typography>
            {isViewAll && !isMobile ? renderCTAIcon() : <MenuList />}
          </Box>
          <Box className={[isMobile ? "" : styles.flexDisplay, styles.margin]}>
            <Box className={[styles.flexDisplay, getBoxStyle()]}>
              <Typography variant="customBodyRegular">
                {isViewAll ? `Prescribed by:` : `Prescribed on:`}&nbsp;
              </Typography>
              <Typography variant="bodyMedium">
                {isViewAll ? data.prescribedBy : data.date}
              </Typography>
            </Box>
            <Box
              className={[
                styles.flexDisplay,
                isMobile ? styles.marginVertical : "",
              ]}
            >
              <Typography variant="customBodyRegular">
                Expires on: &nbsp;
              </Typography>
              <Typography variant="bodyMedium">
                {data.expirationDate}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderBottom: lastRow ? 0 : 1,
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
                  ".MuiTableCell-head": {
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "500",
                  },
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    {tableHeader.map((header, idx) => (
                      <StyledTableCell key={`${idxKey}-${idx}-tabel-header`}>
                        {header}
                      </StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.prescriptionDetails.map((row, idx) => (
                    <TableRow
                      key={`${idxKey}-${idx}-tabel-body`}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.eye}
                      </TableCell>
                      <TableCell>{row.sph}</TableCell>
                      <TableCell>
                        {type === "contact" ? row.bc : row.cyl}
                      </TableCell>
                      <TableCell>
                        {type === "contact" ? row.cyl : row.axis}
                      </TableCell>
                      <TableCell>
                        {type === "contact" ? row.axis : row.add}
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

  function renderMedicationUI(data) {
    if (data && data.length > 0) {
      return data.map((row, idx) => (
        <Box
          key={idx}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            paddingTop: "5px",
          }}
        >
          <Box className={[styles.flexDisplay, styles.margin]}>
            <Typography variant="medication">{row.prescription}</Typography>
          </Box>
          <Box
            className={[styles.flexDisplay]}
            sx={{
              margin: "10px 16px",
              marginBottom: data.length == idx + 1 ? "26px" : "16px",
            }}
          >
            <Typography variant="customBodyRegular">
              Prescribed on: &nbsp;
            </Typography>
            <Typography variant="bodyMedium">{row.date}</Typography>
          </Box>
        </Box>
      ));
    } else {
      return (
        <Box className={styles.noPrescription}>
          <Typography
            className={styles.normalText}
          >{`There are no active medications`}</Typography>
        </Box>
      );
    }
  }

  function renderPrescriptionTabUI(data, type) {
    if (!data) {
      return <></>;
    }
    const contentUI = [];
    if (data && data.length > 0) {
      data.map((row, idx) => {
        contentUI.push(
          renderPrescriptionTable(row, type, idx, data.length === idx + 1)
        );
      });
    } else {
      contentUI.push(
        <Box className={styles.noPrescription}>
          <Typography
            className={styles.normalText}
          >{`There are no active ${type} prescriptions`}</Typography>
        </Box>
      );
    }
    return contentUI;
  }

  function renderMedicationDetailUI() {
    return (
      <PrescriptionMedication
        medications={prescription.medications}
        onMedicationRequestRefill={onMedicationRequestRefill}
        requestRefillResponseData={requestRefillResponseData}
      />
    );
  }

  function renderSimpleMedicationUI() {
    return (
      <Box>
        <Box
          className={[styles.flexDisplay, styles.spaceBetween, styles.margin]}
        >
          <Typography variant="titleCard">Medications Prescriptions</Typography>
        </Box>
        {renderMedicationUI(prescription.medications.active)}
        {!isViewAll && (
          <Box
            className={[styles.flexDisplay, styles.viewPrescription]}
            onClick={() => {
              onViewPrescriptions(2);
            }}
            data-testid={"view-prescription-medication"}
          >
            <Link
              className={styles.viewPrescriptionText}
              sx={{ color: "#008294", fontFamily: "Inter" }}
            >
              View prescriptions
            </Link>
            <KeyboardArrowRightIcon />
          </Box>
        )}
      </Box>
    );
  }

  const contentPrescription = () => {
    switch (value) {
      case 0:
        return (
          <Box>
            <Box
              className={[
                styles.flexDisplay,
                styles.spaceBetween,
                styles.margin,
                styles.marginBottom,
              ]}
            >
              <Typography
                variant="titleCard"
                className={isViewAll ? styles.paddingTop22 : {}}
              >
                Glasses Prescriptions
              </Typography>
              {!isViewAll && <MenuList pdfFile="/Prescription_Glasses.pdf" />}
            </Box>
            {renderPrescriptionTabUI(prescription.glasses, "glasses")}
            {!isViewAll && (
              <Box
                className={[styles.flexDisplay, styles.viewPrescription]}
                onClick={() => {
                  onViewPrescriptions(0);
                }}
                data-testid={"view-prescription-glasses"}
              >
                <Link
                  className={styles.viewPrescriptionText}
                  sx={{ color: "#008294", fontFamily: "Inter" }}
                >
                  View prescriptions
                </Link>
                <KeyboardArrowRightIcon />
              </Box>
            )}
          </Box>
        );
      case 1:
        return (
          <Box>
            <Box
              className={[
                styles.flexDisplay,
                styles.spaceBetween,
                styles.margin,
                styles.marginBottom,
              ]}
            >
              <Typography
                variant="titleCard"
                className={isViewAll ? styles.paddingTop22 : {}}
              >
                Contacts Prescriptions
              </Typography>
              {!isViewAll && <MenuList pdfFile="/Prescription_Contacts.pdf" />}
            </Box>
            {renderPrescriptionTabUI(prescription.contacts, "contacts")}
            {!isViewAll && (
              <Box
                className={[styles.flexDisplay, styles.viewPrescription]}
                onClick={() => {
                  onViewPrescriptions(1);
                }}
                data-testid={"view-prescription-contact"}
              >
                <Link
                  className={styles.viewPrescriptionText}
                  sx={{ color: "#008294", fontFamily: "Inter" }}
                >
                  View prescriptions
                </Link>
                <KeyboardArrowRightIcon />
              </Box>
            )}
          </Box>
        );
      default:
        return !isViewAll
          ? renderSimpleMedicationUI()
          : renderMedicationDetailUI();
    }
  };

  const tabPrescription = () => {
    const iconImageSize = isViewAll ? 21 : 14;
    return (
      <Tabs
        sx={{
          height: "55px",
          justifyContent: "space-between",
          color: colors.darkGreen,
        }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            backgroundColor: colors.teal,
            height: "4px",
          },
        }}
      >
        <Tab
          label="Glasses"
          data-testid={"menu-glasses"}
          icon={
            <Box
              className={
                isViewAll
                  ? styles.tabImageContainerViewAll
                  : styles.tabImageContainer
              }
            >
              <Image
                alt=""
                src={iconGlasses}
                width={iconImageSize}
                height={iconImageSize}
              />
            </Box>
          }
          iconPosition="start"
          value={0}
          sx={{
            textTransform: "capitalize",
            width: "30%",
            fontSize: isMobile ? "14px" : "16px",
            "&.MuiButtonBase-root": {
              padding: "0",
            },
            maxWidth: "inherit",
          }}
        />
        <Tab
          label="Contacts"
          data-testid={"menu-contact"}
          icon={
            <Box
              className={
                isViewAll
                  ? styles.tabImageContainerViewAll
                  : styles.tabImageContainer
              }
            >
              <Image
                alt=""
                src={iconContacts}
                width={iconImageSize}
                height={iconImageSize}
              />
            </Box>
          }
          iconPosition="start"
          value={1}
          sx={{
            textTransform: "capitalize",
            width: "32%",
            fontSize: isMobile ? "14px" : "16px",
            "&.MuiButtonBase-root": {
              padding: "0",
            },
            maxWidth: "inherit",
          }}
        />
        <Tab
          label="Medications"
          data-testid={"menu-medication"}
          icon={
            <Box
              className={
                isViewAll
                  ? styles.tabImageContainerViewAll
                  : styles.tabImageContainer
              }
            >
              <Image
                alt=""
                src={iconMedication}
                width={isViewAll ? 14 : 10}
                height={iconImageSize}
              />
            </Box>
          }
          iconPosition="start"
          value={2}
          sx={{
            textTransform: "capitalize",
            width: "38%",
            fontSize: isMobile ? "14px" : "16px",
            "&.MuiButtonBase-root": {
              padding: "0",
            },
            maxWidth: "inherit",
          }}
        />
      </Tabs>
    );
  };

  return (
    <ThemeProvider theme={patientTypography}>
      <AccountCard
        isAppoinment={true}
        isDashboard={!isViewAll}
        titleIcon={
          <Image alt="" src={iconPrescription} width={32} height={32} />
        }
        title={`Prescriptions (3)`}
        sx={{
          ".MuiCardContent-root": {
            p: 0,
          },
        }}
      >
        {/* Tab section */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", padding: 0 }}>
          {tabPrescription()}
        </Box>

        {/* Conten Tab Section */}
        <Grid>
          <Box>{contentPrescription()}</Box>
        </Grid>
      </AccountCard>
    </ThemeProvider>
  );
}
