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
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { StyledButton } from "../../atoms/Button/button";
import constants from "../../../utils/constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterBy from "../FilterBy/filterBy";
import CloseIcon from "@mui/icons-material/Close";

export default function Prescriptions({
  prescriptionData = {},
  onViewPrescriptions = () => {
    //this is intentional
  },
  isViewAll = false,
  activeIndex = 0,
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const iconPrescription = "/icon-prescription.png";
  const iconContacts = "/icon-contacts.png";
  const iconGlasses = "/icon-glasses.png";
  const iconMedication = "/icon-medication.png";
  const iconShare = "/icon-share.png";
  const iconDownload = "/icon-download.png";
  const [value, setValue] = React.useState(activeIndex);
  const imageSrcState = "/mobileFilter.png";
  const imageSrcFilled = "/appliedMobileFilter.png";
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [prescription, setPrescriptione] = React.useState({
    contacts: [],
    glasses: [],
    medications: {
      active: [],
      past: [],
    },
  });

  const [activeFilter, setActiveFilter] = useState([]);
  const isFilterApplied = activeFilter.length > 0;

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

  const testFilterData = [
    {
      name: "Filter By",
      checklist: [
        {
          name: "All",
          checked: false,
        },
        {
          name: "Refill Requested",
          checked: false,
        },
        {
          name: "Active",
          checked: false,
        },
      ],
    },
    {
      name: "Providers",
      checklist: [
        {
          name: "Phillip Morries, M.D.",
          checked: false,
        },
        {
          name: "Melsanie Chantal, M.D. ",
          checked: false,
        },
        {
          name: "Jonathan P Chan, M.D.",
          checked: false,
        },
        {
          name: "Adriane Moore, M.D.",
          checked: false,
        },
        {
          name: "John D More, M.D.",
          checked: false,
        },
        {
          name: "John E More, M.D.",
          checked: false,
        },
        {
          name: "John F More, M.D.",
          checked: false,
        },
        {
          name: "John G More, M.D.",
          checked: false,
        },
        {
          name: "John H More, M.D.",
          checked: false,
        },
        {
          name: "John I More, M.D.",
          checked: false,
        },
        {
          name: "John D More, M.D.",
          checked: false,
        },
      ],
    },
  ];

  const onSetFilter = (newFilterData) => {
    setFilterOpen(!filterOpen);
    setActiveFilter([...newFilterData]);
  };

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
        <Box className={styles.noPrescription} key={type + idxKey}>
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
          <Typography>{`There are no active medications`}</Typography>
        </Box>
      );
    }
  }

  function renderStatusMedication(status, statusDescription) {
    const intentUI = [];
    if (status === "completed") {
      intentUI.push(
        <Accordion
          className={styles.medicationStatusAccordion}
          sx={{
            "&.Mui-expanded": {
              margin: "0px",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={styles.medicationAccordionSummary}
            sx={{
              margin: "0px",
            }}
          >
            <CheckCircleIcon
              sx={{ color: "#168845", width: "25px", marginRight: "8px" }}
            />
            <Typography className={styles.medicationStatusDescription}>
              Status: {status}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingTop: "0px" }}>
            <Typography className={styles.medicationStatusDescription}>
              You can now go to your preferred pharmacy to pick-up your
              medication.
            </Typography>
            <Typography
              className={styles.medicationStatusDescription}
              sx={{ fontWeight: "500" }}
            >
              {statusDescription}
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    } else {
      intentUI.push(
        <Typography className={styles.medicationViewAllStatus}>
          Status: {status}
        </Typography>
      );
    }
    return intentUI;
  }

  function renderMedicationViewAllUI(data, idx) {
    return (
      <Stack
        direction={"row"}
        className={styles.medicationViewAllContainer}
        key={idx}
      >
        {!isMobile && (
          <Box>
            <Box
              className={styles.medicationIconContainer}
              sx={{ justifyContent: "center" }}
            >
              <Image alt="" src={iconMedication} width={32.88} height={44.63} />
            </Box>
          </Box>
        )}
        <Stack display={"flex"} marginLeft={"8px"} width={"100%"}>
          <Stack
            direction={"row"}
            className={styles.medicationViewAllTitleContainer}
            sx={{ marginBottom: "8px" }}
          >
            <Typography className={styles.medicationViewAllTitle}>
              {data.prescription}
            </Typography>
            {!isMobile ? renderCTAIcon() : <MenuList />}
          </Stack>
          <Stack sx={{ width: "100%" }}>
            {(data.status === "refill request" ||
              data.status === "completed") && (
              <Stack direction={"row"} className={styles.stackContainer}>
                {renderStatusMedication(data.status, data.statusDetails)}
                <Stack
                  direction={"row"}
                  alignSelf={"center"}
                  className={styles.gridHeight}
                >
                  <Typography
                    variant="customBodyRegular"
                    className={styles.gridText}
                  >
                    Fill request date: &nbsp;
                  </Typography>
                  <Typography variant="bodyMedium" className={styles.gridText}>
                    {data.fillRequestDate}
                  </Typography>
                </Stack>
              </Stack>
            )}
            <Stack direction={"row"} className={styles.stackContainer}>
              <Stack
                direction={"row"}
                alignSelf={"center"}
                className={styles.gridHeight}
              >
                <Typography
                  variant="customBodyRegular"
                  className={styles.gridText}
                >
                  Prescribed on: &nbsp;
                </Typography>
                <Typography variant="bodyMedium" className={styles.gridText}>
                  {data.date}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignSelf={"center"}
                className={styles.gridHeight}
              >
                <Typography
                  variant="customBodyRegular"
                  className={styles.gridText}
                >
                  Prescribed by: &nbsp;
                </Typography>
                <Typography variant="bodyMedium" className={styles.gridText}>
                  {data.prescribedBy}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignSelf={"center"}
                className={styles.gridHeight}
              >
                <Typography
                  variant="customBodyRegular"
                  className={styles.gridText}
                >
                  Dose: &nbsp;
                </Typography>
                <Typography variant="bodyMedium" className={styles.gridText}>
                  {data.dose}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction={"row"} className={styles.stackContainer}>
              <Stack
                direction={"row"}
                alignSelf={"center"}
                className={styles.gridHeight}
              >
                <Typography
                  variant="customBodyRegular"
                  className={styles.gridText}
                >
                  Expires on: &nbsp;
                </Typography>
                <Typography variant="bodyMedium" className={styles.gridText}>
                  {data.expirationDate}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Divider className={styles.dividerStyle} />
          <Stack direction={"row"} sx={{ marginTop: "24px", flexWrap: "wrap" }}>
            <Stack direction={"row"} className={styles.remainingTimeContainer}>
              <AccessTimeIcon sx={{ color: colors.darkGreen }} />
              <Typography className={styles.remainingTimeText}>
                Take 2 times a day
              </Typography>
            </Stack>
            {data.status !== "refill request" ? (
              <StyledButton
                mode={constants.PRIMARY}
                gradient={false}
                onClick={() => {}}
                className={styles.requestButton}
              >
                Request Refill
              </StyledButton>
            ) : (
              <StyledButton
                mode={constants.SECONDARY}
                onClick={() => {}}
                className={styles.requestButton}
              >
                Cancel Refill Request
              </StyledButton>
            )}
          </Stack>
        </Stack>
      </Stack>
    );
  }

  function renderPrescriptionTabUI(data, type) {
    if (!data) {
      return <></>;
    }
    const contentUI = [];
    data.map((row, idx) => {
      if (type === "medications") {
        contentUI.push(renderMedicationViewAllUI(row, idx));
      } else {
        contentUI.push(
          renderPrescriptionTable(row, type, idx, data.length === idx + 1)
        );
      }
    });
    return contentUI;
  }

  function renderAppliedFilter() {
    return activeFilter.map((option, idx) => {
      return (
        <Box className={styles.filterChildButton} key={idx}>
          {option.name}
          <CloseIcon
            className={styles.closeIcon}
            onClick={() => {
              const id = activeFilter.findIndex((x) => x.name === option.name);
              if (id > -1) {
                const data = activeFilter;
                data.splice(id, 1);
                setActiveFilter([...data]);
              }
            }}
          />
        </Box>
      );
    });
  }

  function renderMedicationDetailUI() {
    return (
      <Box className={styles.medicationDetailContainer}>
        <Box
          className={[
            styles.flexDisplay,
            styles.spaceBetween,
            styles.margin,
            styles.marginTop,
          ]}
        >
          <Typography variant="titleCard">
            {isFilterApplied ? "Medications" : "Active Medications"}{" "}
            {`(${prescription.medications?.active?.length})`}
          </Typography>
          <Box className={styles.filterButtonContainer}>
            <FilterBy
              activedFilter={[...activeFilter]}
              filter={testFilterData}
              isOpen={filterOpen}
              onClose={() => {
                setFilterOpen(!filterOpen);
              }}
              onDone={(selectedFilterData) => {
                onSetFilter(selectedFilterData);
              }}
              isPrescription={true}
            ></FilterBy>
            {isMobile ? (
              <Image
                alt=""
                src={isFilterApplied ? imageSrcFilled : imageSrcState}
                width={"26px"}
                height={isFilterApplied ? "28px" : "26px"}
                onClick={() => {
                  setFilterOpen(!filterOpen);
                }}
              />
            ) : (
              <>
                <StyledButton
                  className={styles.filterBtn}
                  mode={constants.SECONDARY}
                  size={constants.SMALL}
                  gradient={false}
                  onClick={() => {
                    setFilterOpen(!filterOpen);
                  }}
                >
                  <TuneIcon className={styles.tuneIcon} />
                  Filters
                  <KeyboardArrowDownIcon className={styles.keydownIcon} />
                </StyledButton>
                {renderAppliedFilter()}
              </>
            )}
          </Box>
        </Box>
        {prescription.medications?.active?.length > 0 ? (
          renderPrescriptionTabUI(
            prescription.medications.active,
            "medications"
          )
        ) : (
          <Box className={[styles.noPrescription, styles.margin].join(" ")}>
            <Typography>{`There are no active medications`}</Typography>
          </Box>
        )}
        {prescription.medications?.past?.length > 0 && !isFilterApplied && (
          <>
            <Box
              className={[
                styles.flexDisplay,
                styles.spaceBetween,
                styles.margin,
                styles.marginTop,
              ]}
            >
              <Typography variant="titleCard">
                Past Medications{` (${prescription.medications?.past?.length})`}
              </Typography>
            </Box>
            {renderPrescriptionTabUI(
              prescription.medications.past,
              "medications"
            )}
          </>
        )}
      </Box>
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
            {renderPrescriptionTabUI(prescription.contacts, "contact")}
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
