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
} from "@mui/material";
import AccountCard from "../AccountCard/accountCard";
import Image from "next/image";
import styles from "./styles.module.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ThemeProvider } from "@emotion/react";
import MenuList from "./menuList";
import { useEffect } from "react";
import { parsePrescriptionData } from "../../../utils/appointment";

export default function Prescriptions({
  prescriptionData = {},
  onViewPrescriptions = () => {
    //this is intentional
  },
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const iconPrescription = "/icon-prescription.png";
  const iconContacts = "/icon-contacts.png";
  const iconGlasses = "/icon-glasses.png";
  const iconMedication = "/icon-medication.png";
  const [value, setValue] = React.useState(0);
  const [prescription, setPrescriptione] = React.useState({
    contacts: {},
    glasses: {},
    medications: [],
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setPrescriptione(parsePrescriptionData(prescriptionData));
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

  function renderPrescriptionTable(data, type) {
    if (data && data.prescriptionDetails) {
      let tableHeader = ["Eye", "Sph", "Cyl", "Axis", "Add"];
      if (type === "contact") {
        tableHeader = ["Eye", "Sph", "BC", "CYL", "AXIS"];
      }
      return (
        <Box>
          <Box className={[styles.flexDisplay, styles.margin]}>
            <Typography variant="customBodyRegular">
              Prescribed by: &nbsp;
            </Typography>
            <Typography variant="bodyMedium">{data.prescribedBy}</Typography>
          </Box>
          <Box className={[isMobile ? "" : styles.flexDisplay, styles.margin]}>
            <Box
              className={[styles.flexDisplay, isMobile ? "" : styles.halfBox]}
            >
              <Typography variant="customBodyRegular">
                Prescribed on: &nbsp;
              </Typography>
              <Typography variant="bodyMedium">{data.date}</Typography>
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
              borderBottom: 1,
              borderColor: "divider",
              padding: "20px 10px",
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
                      <StyledTableCell key={idx}>{header}</StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.prescriptionDetails.map((row, idx) => (
                    <TableRow
                      key={idx}
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
    } else {
      return (
        <Box className={styles.noPrescription}>
          <Typography>{`There are no active ${type} prescriptions`}</Typography>
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
              margin: "10px",
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
          <Typography>{`There are no active medications`}</Typography>
        </Box>
      );
    }
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
              ]}
            >
              <Typography variant="titleCard">Glasses Prescriptions</Typography>
              <MenuList pdfFile="/Prescription_Glasses.pdf" />
            </Box>
            {renderPrescriptionTable(prescription.glasses, "glasses")}
            <Box
              className={[styles.flexDisplay, styles.viewPrescription]}
              onClick={() => {
                onViewPrescriptions("glasses");
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
              ]}
            >
              <Typography variant="titleCard">
                Contacts Prescriptions
              </Typography>
              <MenuList pdfFile="/Prescription_Contacts.pdf" />
            </Box>
            {renderPrescriptionTable(prescription.contacts, "contact")}
            <Box
              className={[styles.flexDisplay, styles.viewPrescription]}
              onClick={() => {
                onViewPrescriptions("contact");
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
          </Box>
        );
      default:
        return (
          <Box>
            <Box
              className={[
                styles.flexDisplay,
                styles.spaceBetween,
                styles.margin,
              ]}
            >
              <Typography variant="titleCard">
                Medications Prescriptions
              </Typography>
            </Box>
            {renderMedicationUI(prescription.medications)}
            <Box
              className={[styles.flexDisplay, styles.viewPrescription]}
              onClick={() => {
                onViewPrescriptions("medications");
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
          </Box>
        );
    }
  };

  const tabPrescription = () => {
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
            <Box className={styles.tabImageContainer}>
              <Image alt="" src={iconGlasses} width={14} height={14} />
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
          }}
        />
        <Tab
          label="Contacts"
          data-testid={"menu-contact"}
          icon={
            <Box className={styles.tabImageContainer}>
              <Image alt="" src={iconContacts} width={14} height={14} />
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
          }}
        />
        <Tab
          label="Medications"
          data-testid={"menu-medication"}
          icon={
            <Box className={styles.tabImageContainer}>
              <Image alt="" src={iconMedication} width={14} height={14} />
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
          }}
        />
      </Tabs>
    );
  };

  return (
    <ThemeProvider theme={patientTypography}>
      <AccountCard
        isAppoinment={true}
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
