import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
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
} from "@mui/material";
import AccountCard from "../AccountCard/accountCard";
import Image from "next/image";
import styles from "./styles.module.scss";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ThemeProvider } from "@emotion/react";
import MenuList from "./menuList";

export default function Prescriptions() {
  const iconPrescription = "/icon-prescription.png";
  const iconContacts = "/icon-contacts.png";
  const iconGlasses = "/icon-glasses.png";
  const iconMedication = "/icon-medication.png";
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function createData(eye, sph, cyl, axis, add) {
    return { eye, sph, cyl, axis, add };
  }

  const rows = [
    createData("OD", "+20.00", "-5.00", "70", "x180"),
    createData("OS", "+19.75", "-4.75", "38", "x090"),
  ];

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

  const contentPrescription = () => {
    switch (value) {
      case 0:
        return (
          <Box>
            <Box
              className={[
                styles.flexDisplay,
                styles.spaceBetween,
                styles.marginVertical,
              ]}
            >
              <Typography variant="titleCard">Glasses Prescriptions</Typography>
              <MenuList />
            </Box>
            <Box className={[styles.flexDisplay, styles.marginVertical]}>
              <Typography variant="bodyRegular">
                Prescribed by: &nbsp;
              </Typography>
              <Typography variant="bodyMedium">Dr. Sonha Nguyen</Typography>
            </Box>
            <Box className={[styles.flexDisplay, styles.marginVertical]}>
              <Box className={[styles.flexDisplay, styles.halfBox]}>
                <Typography variant="bodyRegular">
                  Prescribed on: &nbsp;
                </Typography>
                <Typography variant="bodyMedium">01/10/2021</Typography>
              </Box>
              <Box className={[styles.flexDisplay]}>
                <Typography variant="bodyRegular">
                  Expires on: &nbsp;
                </Typography>
                <Typography variant="bodyMedium">01/10/2022</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                padding: "20px 10px",
              }}
            >
              <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
                <Table sx={{ minWidth: "90%" }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Eye</StyledTableCell>
                      <StyledTableCell>Sph</StyledTableCell>
                      <StyledTableCell>Cyl</StyledTableCell>
                      <StyledTableCell>Axis</StyledTableCell>
                      <StyledTableCell>Add</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.eye}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.eye}
                        </TableCell>
                        <TableCell>{row.sph}</TableCell>
                        <TableCell>{row.cyl}</TableCell>
                        <TableCell>{row.axis}</TableCell>
                        <TableCell>{row.add}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box className={[styles.flexDisplay, styles.viewPrescription]}>
              <Link
                className={styles.viewPrescriptionText}
                sx={{ color: "#008294" }}
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
                styles.marginVertical,
              ]}
            >
              <Typography variant="titleCard">
                Contacts Prescriptions
              </Typography>
              <MoreHorizIcon />
            </Box>
            <Box className={styles.noPrescription}>
              <Typography>There are no active contact prescriptions</Typography>
            </Box>
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
                sx={{ color: "#008294" }}
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
                styles.marginVertical,
              ]}
            >
              <Typography variant="titleCard">Medications(3)</Typography>
            </Box>
            <Box
              sx={{
                borderTop: 1,
                borderColor: "divider",
                paddingTop: "20px",
              }}
            >
              <Box className={[styles.flexDisplay, styles.marginVertical]}>
                <Typography variant="bodyRegular" sx={{ color: "#007E8F" }}>
                  Ativan 0.1% Ointmanet
                </Typography>
              </Box>
              <Box className={[styles.flexDisplay, styles.marginVertical]}>
                <Typography variant="bodyRegular">
                  Prescribed on: &nbsp;
                </Typography>
                <Typography variant="bodyMedium">01/10/2021</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                borderTop: 1,
                borderColor: "divider",
                paddingTop: "20px",
              }}
            >
              <Box className={[styles.flexDisplay, styles.marginVertical]}>
                <Typography variant="bodyRegular" sx={{ color: "#007E8F" }}>
                  Ativan 0.1% Ointmanet
                </Typography>
              </Box>
              <Box className={[styles.flexDisplay, styles.marginVertical]}>
                <Typography variant="bodyRegular">
                  Prescribed on: &nbsp;
                </Typography>
                <Typography variant="bodyMedium">01/10/2021</Typography>
              </Box>
            </Box>
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
                sx={{ color: "#008294" }}
              >
                View prescriptions
              </Link>
              <KeyboardArrowRightIcon />
            </Box>
          </Box>
        );
    }
  };

  return (
    <ThemeProvider theme={patientTypography}>
      <AccountCard
        titleIcon={
          <Image alt="" src={iconPrescription} width={32} height={32} />
        }
        title="Prescriptions (3)"
        sx={{
          ".MuiCardContent-root": {
            p: 0,
          },
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider", padding: 0 }}>
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
              icon={
                <Box className={styles.tabImageContainer}>
                  <Image alt="" src={iconGlasses} width={14} height={14} />
                </Box>
              }
              iconPosition="start"
              value={0}
              sx={{
                textTransform: "capitalize",
                width: "33%",
              }}
            />
            <Tab
              label="Contacts"
              icon={
                <Box className={styles.tabImageContainer}>
                  <Image alt="" src={iconContacts} width={14} height={14} />
                </Box>
              }
              iconPosition="start"
              value={1}
              sx={{ textTransform: "capitalize", width: "33%" }}
            />
            <Tab
              label="Medications"
              icon={
                <Box className={styles.tabImageContainer}>
                  <Image alt="" src={iconMedication} width={14} height={14} />
                </Box>
              }
              iconPosition="start"
              value={2}
              sx={{ textTransform: "capitalize", width: "34%" }}
            />
          </Tabs>
        </Box>
        <Grid>
          <Box>{contentPrescription()}</Box>
        </Grid>
      </AccountCard>
    </ThemeProvider>
  );
}
