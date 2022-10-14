import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FilterBy from "../FilterBy/filterBy";
import Image from "next/image";
import { StyledButton } from "../../atoms/Button/button";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuList from "./menuList";
import styles from "./styles.module.scss";
import constants from "../../../utils/constants";
import { colors } from "../../../styles/theme";
import { useEffect } from "react";
import FormMessage from "../FormMessage/formMessage";
import { renderCTAIcon } from "./prescriptions";
import { savePDF } from "@progress/kendo-react-pdf";

export default function PrescriptionMedication({
  medications = {
    active: [],
    past: [],
  },
  onMedicationRequestRefill = () => {
    //this is intentional
  },
  requestRefillResponseData = null,
  filterProvider = [],
}) {
  const [showModal, setShowModal] = React.useState(false);
  const containerActive = React.useRef(null);
  const containerPast = React.useRef(null);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState([]);
  const [selectedData, setSelectedData] = React.useState({});
  const [filterData, setFilterData] = React.useState([]);
  const [filterMedicationData, setFilterMedicationData] = React.useState([]);
  const [requestRefillResponse, setRequestRefillResponse] =
    React.useState(null);
  const isFilterApplied = activeFilter.length > 0;
  const imageSrcState = "/mobileFilter.png";
  const imageSrcFilled = "/appliedMobileFilter.png";
  const isMobile = useMediaQuery("(max-width: 768px)");
  const iconMedication = "/icon-medication.png";

  const downloadPDF = (medicationType, index = -1) => {
    let containerSelector = null;
    if (medicationType === "past") {
      containerSelector = containerPast;
    } else {
      containerSelector = containerActive;
    }

    let element =
      containerSelector.current.querySelector(
        `[data-testid=medication-${medicationType}-container-${index}]`
      ) || document.body;
    savePDF(element, {
      paperSize: "auto",
      margin: 40,
      fileName: `Prescription Medication Don John`,
    });
  };

  const printHTML = (medicationType, index = -1) => {
    let containerSelector = null;
    if (medicationType === "past") {
      containerSelector = containerPast;
    } else {
      containerSelector = containerActive;
    }
    let element =
      containerSelector.current.querySelector(
        `[data-testid=medication-${medicationType}-container-${index}]`
      ) || document.body;
    const headStyles = Array.from(document.head.querySelectorAll("style"));
    var WinPrint = window.open(
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

  const onSetFilter = (newFilterData) => {
    setFilterOpen(!filterOpen);
    setActiveFilter([...newFilterData]);

    if (newFilterData.length > 0) {
      const tempMedicationData = { ...medications };
      let filterResult = tempMedicationData.active.concat(
        tempMedicationData.past
      );
      for (const filter of newFilterData) {
        if (filter.name === "All" && filter.checked) {
          filterResult = filterResult;
        }
        if (filter.name === "Refill Requested" && filter.checked) {
          filterResult = filterResult.filter(
            (v) => v.type === "refill request"
          );
        }
        if (filter.name === "Active" && filter.checked) {
          filterResult = filterResult.filter((v) => v.type === "active");
        }

        if (filter.type === "provider") {
          filterResult = filterResult.filter(
            (v) => v.prescribedBy === filter.name
          );
        }
      }
      setFilterMedicationData(filterResult);
    } else {
      setFilterMedicationData([]);
    }
  };

  useEffect(() => {
    setRequestRefillResponse(requestRefillResponseData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestRefillResponseData]);

  useEffect(() => {
    if (filterProvider.length && filterProvider.length > 0)
      setFilterData(filterProvider);
  }, [filterProvider]);

  /**
   * Handle medication request refill or cancel request refill
   * @param {JSONObject} data as selected medication
   * @param {Boolean} isCancel as request type (request or cancel refill)
   * @param {Integer} index as selected index
   */
  const onRequestCancelRefill = (
    data,
    isCancel,
    callback = () => {
      //this is intentional
    }
  ) => {
    if (isCancel && !showModal) {
      setSelectedData(data);
      setShowModal(true);
    } else {
      const postBody = {
        medicationId: data.id,
      };
      onMedicationRequestRefill(postBody, isCancel);
    }
    callback();
  };

  function renderDialogConfirmation() {
    return (
      <Dialog
        class={styles.dialog}
        open={showModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          ".MuiDialog-container .MuiPaper-root": {
            marginTop: "70px",
            marginBottom: "auto",
          },
        }}
      >
        <DialogContent
          className={styles.dialogContent}
          style={{ padding: "16px" }}
          aria-live={"assertive"}
          sx={{
            width: "500px",
            "@media (max-width: 992px)": {
              width: "auto",
            },
          }}
        >
          <Typography className={styles.dialogTypo}>
            Are you sure you want to cancel?
          </Typography>
        </DialogContent>
        <DialogActions
          className={styles.dialogActionContainer}
          style={{ padding: "16px" }}
        >
          <Box class={styles.dialogContainer}>
            <StyledButton
              theme="patient"
              mode="secondary"
              size="small"
              gradient={false}
              data-testid="close-refill-btn"
              onClick={() => {
                setShowModal(false);
                setSelectedData({});
              }}
              aria-label={"Close"}
              className={styles.closeButton}
            >
              Close
            </StyledButton>
            <StyledButton
              theme="patient"
              mode="primary"
              size="small"
              gradient={false}
              data-testid="cancel-refill-btn"
              onClick={() => {
                onRequestCancelRefill(selectedData, true, () => {
                  setShowModal(false);
                  setSelectedData({});
                });
              }}
              aria-label={"Cancel Refill"}
              className={styles.cancelButton}
            >
              Cancel Refill
            </StyledButton>
          </Box>
        </DialogActions>
      </Dialog>
    );
  }

  function renderAppliedFilter() {
    return activeFilter.map((option, idx) => {
      return (
        <Box className={styles.filterChildButton} key={idx}>
          <Box className={styles.filterText}>{option.name}</Box>
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
            <Typography
              className={styles.medicationStatusDescription}
              tabIndex={"0"}
            >
              You can now go to your preferred pharmacy to pick-up your
              medication.
            </Typography>
            <Typography
              className={styles.medicationStatusDescription}
              sx={{ fontWeight: "500" }}
              tabIndex={"0"}
            >
              {statusDescription}
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    } else {
      intentUI.push(
        <Typography className={styles.medicationViewAllStatus}>
          Status: {status === "refill request" ? `${status}ed` : status}
        </Typography>
      );
    }
    return intentUI;
  }

  function renderMedicationViewAllUI(data, idx, medicationType) {
    return (
      <Stack
        direction={"row"}
        className={styles.medicationViewAllContainer}
        key={`${idx}-madication-prescription`}
        data-testid={`medication-${medicationType}-container-${idx}`}
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
            <Typography
              className={styles.medicationViewAllTitle}
              tabIndex={"0"}
            >
              {data.prescription}
            </Typography>
            {!isMobile ? (
              renderCTAIcon(
                () => {
                  downloadPDF(medicationType, idx);
                },
                () => {
                  printHTML(medicationType, idx);
                }
              )
            ) : (
              <MenuList
                onClickDownloadButton={() => {
                  downloadPDF(medicationType, idx);
                }}
                onClickPrintButton={() => {
                  printHTML(medicationType, idx);
                }}
              />
            )}
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
                    tabIndex={"0"}
                  >
                    Fill request date: &nbsp;
                  </Typography>
                  <Typography
                    variant="bodyMedium"
                    className={styles.gridText}
                    tabIndex={"0"}
                  >
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
                  tabIndex={"0"}
                >
                  Prescribed on: &nbsp;
                </Typography>
                <Typography
                  variant="bodyMedium"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
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
                  tabIndex={"0"}
                >
                  Prescribed by: &nbsp;
                </Typography>
                <Typography
                  variant="bodyMedium"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
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
                  tabIndex={"0"}
                >
                  Dose: &nbsp;
                </Typography>
                <Typography
                  variant="bodyMedium"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
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
                  tabIndex={"0"}
                >
                  Expires on: &nbsp;
                </Typography>
                <Typography
                  variant="bodyMedium"
                  className={styles.gridText}
                  tabIndex={"0"}
                >
                  {data.expirationDate}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Divider className={styles.dividerStyle} />
          <Stack direction={"row"} sx={{ marginTop: "24px", flexWrap: "wrap" }}>
            <Stack direction={"row"} className={styles.remainingTimeContainer}>
              <AccessTimeIcon sx={{ color: colors.darkGreen }} />
              <Typography className={styles.remainingTimeText} tabIndex={"0"}>
                {data.timeRemaining}
              </Typography>
            </Stack>
            {data.isShowRequestRefill && (
              <>
                {data.status !== "refill request" ? (
                  <StyledButton
                    mode={constants.PRIMARY}
                    gradient={false}
                    onClick={() => onRequestCancelRefill(data, false)}
                    className={styles.requestButton}
                    data-testid={"request-refill-button"}
                  >
                    Request Refill
                  </StyledButton>
                ) : (
                  <StyledButton
                    mode={constants.SECONDARY}
                    onClick={() => onRequestCancelRefill(data, true)}
                    className={styles.requestButton}
                  >
                    Cancel Refill Request
                  </StyledButton>
                )}
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    );
  }

  function renderPrescriptionTabUI(data, medicationType) {
    if (!data) {
      return <></>;
    }
    const contentUI = [];
    data.map((row, idx) => {
      contentUI.push(renderMedicationViewAllUI(row, idx, medicationType));
    });
    return contentUI;
  }

  function renderUIFilter() {
    if (medications?.active?.length > 0) {
      return (
        <Box
          className={[
            styles.filterButtonContainer,
            !isMobile ? styles.paddingTop22 : {},
          ]}
        >
          <FilterBy
            activedFilter={[...activeFilter]}
            filter={filterData}
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
            <Box sx={{ width: "26px", height: "26px" }}>
              <Image
                alt=""
                src={isFilterApplied ? imageSrcFilled : imageSrcState}
                width={"26px"}
                height={isFilterApplied ? "28px" : "26px"}
                onClick={() => {
                  setFilterOpen(!filterOpen);
                }}
              />
            </Box>
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
                data-testid={"medication-filter-button"}
                aria-label={"Filter option"}
              >
                <TuneIcon className={styles.tuneIcon} />
                Filters
                <KeyboardArrowDownIcon className={styles.keydownIcon} />
              </StyledButton>
              {renderAppliedFilter()}
            </>
          )}
        </Box>
      );
    }
  }

  function renderMedication(medicationList, medicationType) {
    return medications?.active?.length > 0 ? (
      <Box ref={containerActive}>
        {renderPrescriptionTabUI(medications.active, medicationType)}
      </Box>
    ) : (
      <Box
        className={[styles.noPrescription, styles.margin].join(" ")}
        tabIndex={0}
      >
        <Typography
          className={styles.normalText}
        >{`There are no active medications`}</Typography>
      </Box>
    );
  }

  function renderPastMedication() {
    return (
      medications?.past?.length > 0 &&
      !isFilterApplied && (
        <>
          <Box
            className={[
              styles.flexDisplay,
              styles.spaceBetween,
              styles.margin,
              styles.marginTop,
            ]}
          >
            <Typography
              variant="titleCard"
              aria-label={`Past Medications (${medications?.past?.length} medications)`}
              tabIndex={"0"}
              className={styles.titleText}
            >
              Past Medications{` (${medications?.past?.length})`}
            </Typography>
          </Box>
          <Box ref={containerPast}>
            {renderPrescriptionTabUI(medications.past, "past")}
          </Box>
        </>
      )
    );
  }

  return (
    <Box className={styles.medicationDetailContainer}>
      {requestRefillResponseData && (
        <FormMessage success={true} sx={{ margin: "20px 10px 10px 10px" }}>
          <Typography className={styles.formMessageText}>
            {requestRefillResponseData.message}
          </Typography>
        </FormMessage>
      )}
      <Box
        className={[
          styles.flexDisplay,
          styles.spaceBetween,
          styles.margin,
          styles.marginBottom,
        ]}
      >
        <Typography
          tabIndex={"0"}
          variant="titleCard"
          className={[
            styles.titleText,
            !isMobile ? styles.paddingTop22 : {},
          ].join(" ")}
          aria-label={`Active Medications ${
            medications?.active?.length > 0
              ? `(${medications?.active?.length} medications)`
              : "No of medications"
          } heading`}
        >
          {isFilterApplied ? "Medications" : "Active Medications"}{" "}
          {medications?.active?.length > 0
            ? `(${medications?.active?.length})`
            : ``}
        </Typography>
        {renderUIFilter()}
      </Box>
      {isFilterApplied ? (
        renderMedication(filterMedicationData, "filter")
      ) : (
        <>
          {renderMedication(medications.active, "active")}
          {renderPastMedication()}
        </>
      )}
      {renderDialogConfirmation()}
    </Box>
  );
}
