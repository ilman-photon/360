import * as React from "react";
import { styled } from "@mui/material/styles";
import { colors, patientTypography } from "../../../styles/theme";
import {
  Grid,
  Table,
  TableContainer,
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
  Button,
} from "@mui/material";
import AccountCard from "../AccountCard/accountCard";
import Image from "next/image";
import styles from "./styles.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { ThemeProvider } from "@emotion/react";
import MenuList from "./menuList";
import { useEffect } from "react";
import { parsePrescriptionData } from "../../../utils/appointment";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import PrescriptionMedication from "./prescriptionMedication";
import { savePDF } from "@progress/kendo-react-pdf";
import { getLinkAria } from "../../../utils/viewUtil";

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F4F4F4",
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 14,
  },
}));

export function renderCTAIcon(
  onClickDownload = () => {
    //this is intentional
  },
  onClickPrint = () => {
    //this is intentional
  },
  onClickShare = () => {
    //this is intentional
  },
  buttonList = ["download", "share", "print"],
  customButtonClass = "",
  customButtonContainer = ""
) {
  const iconShare = "/icon-share.png";
  const iconDownload = "/icon-download.png";
  const downloadButton = (
    <Button
      className={[styles.butttonIconContainer, customButtonClass].join(" ")}
      data-testid={"download-icon"}
      onClick={onClickDownload}
      aria-label={"Download option"}
      sx={{ minWidth: "40px" }}
    >
      <Image alt="" src={iconDownload} width={15} height={15} />
    </Button>
  );

  const shareButton = (
    <Button
      className={[styles.butttonIconContainer, customButtonClass].join(" ")}
      data-testid={"shared-icon"}
      aria-label={"Share option"}
      onClick={onClickShare}
      sx={{ minWidth: "40px" }}
    >
      <Image alt="" src={iconShare} width={15} height={15} />
    </Button>
  );

  const printButton = (
    <Button
      className={[styles.butttonIconContainer, customButtonClass].join(" ")}
      onClick={onClickPrint}
      aria-label={"Print option"}
      data-testid={"print-icon"}
      sx={{ minWidth: "40px" }}
    >
      <LocalPrintshopOutlinedIcon
        sx={{
          width: "18px",
          height: "18px",
          color: colors.darkGreen,
          cursor: "pointer",
        }}
        data-testid={"print-icon"}
      />
    </Button>
  );
  return (
    <Stack
      className={[styles.ctaContainer, customButtonContainer].join(" ")}
      direction={"row"}
      alignSelf={"center"}
      sx={{ marginLeft: "auto" }}
    >
      {buttonList.map((option, idx) => {
        if (option === "download") {
          return downloadButton;
        } else if (option === "share") {
          return shareButton;
        } else if (option === "print") {
          return printButton;
        }
        return <></>;
      })}
    </Stack>
  );
}

export default function Prescriptions({
  prescriptionData = {},
  onViewPrescriptions = () => {
    //this is intentional
  },
  isViewAll = false,
  onMedicationRequestRefill = () => {
    //this is intentional
  },
  requestRefillResponseData = null,
  renderRirstOnly = false,
}) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const containerGlasses = React.useRef(null);
  const containerContact = React.useRef(null);

  const iconPrescription = "/icon-prescription2.png";
  const iconContacts = "/icon-contacts.png";
  const iconGlasses = "/icon-glasses.png";
  const iconMedication = "/icon-medication.png";
  const [value, setValue] = React.useState(0);
  const [prescription, setPrescriptione] = React.useState({
    contacts: [],
    glasses: [],
    medications: {
      active: [],
      past: [],
    },
  });
  const [filterData, setFilterData] = React.useState([]);

  const downloadPDF = (type, index = -1) => {
    let containerSelector = null;
    if (type === "contacts") {
      containerSelector = containerContact;
    } else {
      containerSelector = containerGlasses;
    }
    let element =
      containerSelector.current.querySelector(
        `[data-testid=${type}-container-${index}]`
      ) || document.body;
    savePDF(element, {
      paperSize: "auto",
      margin: 40,
      fileName: `Prescription ${type} Don John`,
    });
  };

  const printHTML = (type, index = -1) => {
    let containerSelector = null;
    if (type === "contacts") {
      containerSelector = containerContact;
    } else {
      containerSelector = containerGlasses;
    }
    let element =
      containerSelector.current.querySelector(
        `[data-testid=${type}-container-${index}]`
      ) || document.body;
    const headStyles = Array.from(document.head.querySelectorAll("style"));
    const WinPrint = window.open(
      "",
      "",
      "left=0,top=0,width=1000,height=900,toolbar=0,scrollbars=0,status=0"
    );
    WinPrint.document.write(element.innerHTML);
    headStyles.forEach((st) => {
      WinPrint.document.head.appendChild(st.cloneNode(true));
    });
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    setTimeout(() => {
      WinPrint.close();
    }, 500);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const { parsePrescriptions, activeTab, filterProvider } =
      parsePrescriptionData(prescriptionData);
    setPrescriptione(parsePrescriptions);
    setFilterData(filterProvider);
    if (isViewAll && requestRefillResponseData === null) {
      setValue(activeTab);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prescriptionData]);

  function getBoxStyle() {
    if (!isMobile) {
      if (isViewAll) {
        return styles.quarteBox;
      }
      return styles.fullBox;
    }
    return {};
  }

  function renderPrescriptionTable(data, type, idxKey, lastRow = false) {
    if (data && data.prescriptionDetails) {
      let tableHeader = ["Eye", "Sphere", "Cylinder", "Axis", "Add"];
      if (type === "contacts") {
        tableHeader = ["Eye", "Sphere", "BC", "Cylinder", "AXIS"];
      }
      return (
        <Box
          key={type + idxKey}
          className={
            isViewAll && !isMobile
              ? styles.prescriptionContent
              : styles.prescriptionContentMobile
          }
          data-testid={`${type}-container-${idxKey}`}
        >
          <Box
            className={[
              styles.flexDisplay,
              styles.margin,
              idxKey === 0 ? styles.marginTop0 : "",
            ].join(" ")}
            sx={{
              position: "relative",
            }}
          >
            <Box tabIndex={0}>
              <Typography
                variant="customBodyRegular"
                className={styles.glassesViewAll}
              >
                Prescribed on:&nbsp;
              </Typography>
              <Typography
                variant="bodyMedium"
                className={styles.glassesViewAll}
                sx={{
                  marginRight: "auto",
                }}
              >
                {data.date}
              </Typography>
            </Box>
            {isViewAll && !isMobile ? (
              renderCTAIcon(
                () => {
                  downloadPDF(type, idxKey);
                },
                () => {
                  printHTML(type, idxKey);
                }
              )
            ) : (
              <Box sx={{ position: "absolute", right: 0 }}>
                <MenuList
                  onClickDownloadButton={() => {
                    downloadPDF(type, idxKey);
                  }}
                  onClickPrintButton={() => {
                    printHTML(type, idxKey);
                  }}
                />
              </Box>
            )}
          </Box>

          <Box className={[isMobile ? "" : styles.flexDisplay, styles.margin]}>
            <Box className={[styles.flexDisplay, getBoxStyle()]} tabIndex={0}>
              <Typography variant="customBodyRegular" sx={{ fontSize: "18px" }}>
                Prescribed by: &nbsp;
              </Typography>
              <Typography variant="bodyMedium" sx={{ fontSize: "18px" }}>
                {data.prescribedBy}
              </Typography>
            </Box>
            {isViewAll && (
              <Box
                className={[
                  styles.flexDisplay,
                  isMobile ? styles.marginVertical : "",
                ]}
                tabIndex={0}
              >
                <Typography
                  variant="customBodyRegular"
                  sx={{ fontSize: "18px" }}
                >
                  Expires on: &nbsp;
                </Typography>
                <Typography variant="bodyMedium" sx={{ fontSize: "18px" }}>
                  {data.expirationDate}
                </Typography>
              </Box>
            )}
          </Box>

          {!isViewAll && (
            <Box
              className={[isMobile ? "" : styles.flexDisplay, styles.margin]}
              tabIndex={0}
            >
              <Typography variant="customBodyRegular" sx={{ fontSize: "18px" }}>
                Expires on: &nbsp;
              </Typography>
              <Typography variant="bodyMedium" sx={{ fontSize: "18px" }}>
                {data.expirationDate}
              </Typography>
            </Box>
          )}

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
                  ".MuiTableCell-customHead": {
                    fontFamily: "Roboto",
                    fontSize: "14px",
                    fontWeight: "500",
                    backgroundColor: "#F4F4F4",
                  },
                }}
                aria-label="prescription"
              >
                <TableRow>
                  {tableHeader.map((header, idx) => (
                    <StyledTableCell
                      key={`${idxKey}-${idx}-tabel-header`}
                      tabIndex={0}
                      className="MuiTableCell-customHead"
                    >
                      {header}
                    </StyledTableCell>
                  ))}
                </TableRow>
                <TableBody>
                  {data?.prescriptionDetails.map((row, idx) => (
                    <TableRow
                      key={`${idxKey}-${idx}-tabel-body`}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell scope="row" tabIndex={0}>
                        {row.eye}
                      </TableCell>
                      <TableCell tabIndex={0}>{row.sph}</TableCell>
                      <TableCell tabIndex={0}>
                        {type === "contacts" ? row.bc : row.cyl}
                      </TableCell>
                      <TableCell tabIndex={0}>
                        {type === "contacts" ? row.cyl : row.axis}
                      </TableCell>
                      <TableCell tabIndex={0}>
                        {type === "contacts" ? row.axis : row.add}
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
      return data.map((row, idx) => {
        if (renderRirstOnly && idx > 0) {
          return null;
        }
        return (
          <Box
            key={idx}
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Box className={[styles.flexDisplay, styles.margin]} tabIndex={0}>
              <Typography variant="medication">{row.prescription}</Typography>
            </Box>
            <Box
              className={[styles.flexDisplay]}
              sx={{
                margin: "10px 16px",
                marginBottom: data.length == idx + 1 ? "26px" : "16px",
              }}
              tabIndex={0}
            >
              <Typography variant="customBodyRegular">
                Prescribed on: &nbsp;
              </Typography>
              <Typography variant="bodyMedium">{row.date}</Typography>
            </Box>
          </Box>
        );
      });
    } else {
      return (
        <Box className={styles.noPrescription} tabIndex={0}>
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
        if (renderRirstOnly && idx > 0) {
          return null;
        }
        contentUI.push(
          renderPrescriptionTable(row, type, idx, data.length === idx + 1)
        );
      });
    } else {
      contentUI.push(
        <Box className={styles.noPrescription}>
          <Typography
            tabIndex={0}
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
        filterProvider={filterData}
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
          className={[
            styles.flexDisplay,
            styles.spaceBetween,
            styles.margin,
            styles.marginBottom,
          ]}
        >
          <Typography
            variant="titleCard"
            tabIndex={0}
            aria-label={"Medications Prescription Heading"}
          >
            {prescription?.medications?.active?.length > 0
              ? `Medications Prescriptions (${prescription?.medications?.active?.length})`
              : `Medications Prescriptions`}
          </Typography>
        </Box>
        {renderMedicationUI(prescription.medications.active)}
        {!isViewAll && (
          <Box
            className={[styles.flexDisplay, styles.viewPrescription]}
            onClick={() => {
              onViewPrescriptions(2);
            }}
            data-testid={"view-prescription-medication"}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onViewPrescriptions(2);
              }
            }}
          >
            <Link
              className={styles.viewPrescriptionText}
              sx={{
                color: "#008294",
                fontFamily: "Inter",
                paddingRight: "7px",
              }}
              tabIndex={0}
              {...getLinkAria("View prescriptions option")}
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
              tabIndex={0}
              aria-label={`Glasses Prescription ${prescription?.glasses?.length} Heading`}
            >
              <Typography
                className={[
                  styles.titleText,
                  isViewAll && !isMobile ? styles.paddingTop22 : {},
                ].join(" ")}
                aria-hidden={true}
              >
                {"Glasses Prescription"}{" "}
                {prescription?.glasses?.length > 0
                  ? `(${prescription?.glasses?.length})`
                  : ``}
              </Typography>
            </Box>
            <Box ref={containerGlasses}>
              {renderPrescriptionTabUI(prescription.glasses, "glasses")}
            </Box>
            {!isViewAll && (
              <Box
                className={[styles.flexDisplay, styles.viewPrescription]}
                onClick={() => {
                  onViewPrescriptions(0);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    onViewPrescriptions(0);
                  }
                }}
                data-testid={"view-prescription-glasses"}
              >
                <Link
                  className={styles.viewPrescriptionText}
                  sx={{
                    color: "#008294",
                    fontFamily: "Inter",
                    paddingRight: "7px",
                  }}
                  tabIndex={0}
                  {...getLinkAria("View prescriptions option")}
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
              tabIndex={0}
              aria-label={`Contacts Prescription ${prescription?.glasses?.length} Heading`}
            >
              <Typography
                className={[
                  styles.titleText,
                  isViewAll && !isMobile ? styles.paddingTop22 : {},
                ].join(" ")}
                aria-hidden={true}
              >
                {"Contacts Prescription"}{" "}
                {prescription?.contacts?.length > 0
                  ? `(${prescription?.contacts?.length})`
                  : ``}
              </Typography>
            </Box>
            <Box ref={containerContact}>
              {renderPrescriptionTabUI(prescription.contacts, "contacts")}
            </Box>

            {!isViewAll && (
              <Box
                className={[styles.flexDisplay, styles.viewPrescription]}
                onClick={() => {
                  onViewPrescriptions(1);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    onViewPrescriptions(1);
                  }
                }}
                data-testid={"view-prescription-contact"}
              >
                <Link
                  className={styles.viewPrescriptionText}
                  sx={{
                    color: "#008294",
                    fontFamily: "Inter",
                    paddingRight: "7px",
                  }}
                  tabIndex={0}
                  {...getLinkAria("View prescriptions option")}
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
        textColor="unset"
        TabIndicatorProps={{
          style: {
            backgroundColor: colors.teal,
            height: "4px",
          },
        }}
      >
        <Tab
          label={`Glasses (${prescription?.glasses?.length})`}
          data-testid={"menu-glasses"}
          tabIndex={0}
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
            color: value === 0 ? "#003B4A" : "#424747",
            fontWeight: value === 0 ? "500" : "400",
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
          label={`Contacts (${prescription?.contacts?.length})`}
          data-testid={"menu-contact"}
          tabIndex={0}
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
            color: value === 1 ? "#003B4A" : "#424747",
            fontWeight: value === 1 ? "500" : "400",
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
          label={`Medications (${
            prescription?.medications?.active?.length > 0
              ? prescription?.medications?.active?.length
              : "0"
          })`}
          data-testid={"menu-medication"}
          tabIndex={0}
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
            color: value === 2 ? "#003B4A" : "#424747",
            fontWeight: value === 2 ? "500" : "400",
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
        title={`Prescriptions`}
        ariaLabel={`Prescriptions Title`}
        sx={{
          ".MuiCardContent-root": {
            p: 0,
            pb: 3,
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
