import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
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
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import MenuList from "./menuList";
import styles from "./styles.module.scss";
import constants from "../../../utils/constants";
import { colors } from "../../../styles/theme";
import { useEffect } from "react";
import FormMessage from "../FormMessage/formMessage";
import moment from "moment";

export default function PrescriptionMedication({
  medications = {
    active: [],
    past: [],
  },
  onMedicationRequestRefill = () => {
    //this is intentional
  },
  requestRefillResponseData = null,
}) {
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState([]);
  const [requestRefillResponse, setRequestRefillResponse] =
    React.useState(null);
  const isFilterApplied = activeFilter.length > 0;
  const imageSrcState = "/mobileFilter.png";
  const imageSrcFilled = "/appliedMobileFilter.png";

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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const iconMedication = "/icon-medication.png";
  const iconShare = "/icon-share.png";
  const iconDownload = "/icon-download.png";

  const onSetFilter = (newFilterData) => {
    setFilterOpen(!filterOpen);
    setActiveFilter([...newFilterData]);
  };

  useEffect(() => {
    setRequestRefillResponse(requestRefillResponseData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestRefillResponseData]);

  /**
   * Handle medication request refill or cancel request refill
   * @param {JSONObject} data as selected medication
   * @param {Boolean} isCancel as request type (request or cancel refill)
   * @param {Integer} index as selected index
   */
  const onRequestCancelRefill = (data, isCancel) => {
    const postBody = {
      medicationId: data.id,
    };
    onMedicationRequestRefill(postBody, isCancel);
  };

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

  function renderCTAIcon() {
    return (
      <Stack direction={"row"} alignSelf={"center"} sx={{ marginLeft: "auto" }}>
        <Box
          sx={{
            width: "15px",
            height: "15px",
          }}
          data-testid={"download-icon"}
        >
          <Image alt="" src={iconDownload} width={15} height={15} />
        </Box>
        <Box
          sx={{
            width: "15px",
            height: "15px",
            margin: "0px 15px",
          }}
          data-testid={"shared-icon"}
        >
          <Image alt="" src={iconShare} width={15} height={15} />
        </Box>

        <LocalPrintshopOutlinedIcon
          sx={{
            width: "18px",
            height: "18px",
            color: colors.darkGreen,
          }}
          data-testid={"print-icon"}
        />
      </Stack>
    );
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
        key={`${idx}-madication-prescription`}
        data-testid={`medication-container-${idx}`}
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
            {moment(data.expirationDate) < moment() && (
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

  function renderPrescriptionTabUI(data) {
    if (!data) {
      return <></>;
    }
    const contentUI = [];
    data.map((row, idx) => {
      contentUI.push(renderMedicationViewAllUI(row, idx));
    });
    return contentUI;
  }

  function renderUIFilter() {
    if (medications?.active?.length > 0) {
      return (
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
                data-testid={"medication-filter-button"}
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
          styles.marginTop,
        ]}
      >
        <Typography variant="titleCard">
          {isFilterApplied ? "Medications" : "Active Medications"}{" "}
          {medications?.active?.length > 0
            ? `(${medications?.active?.length})`
            : ``}
        </Typography>
        {renderUIFilter()}
      </Box>
      {medications?.active?.length > 0 ? (
        renderPrescriptionTabUI(medications.active)
      ) : (
        <Box className={[styles.noPrescription, styles.margin].join(" ")}>
          <Typography
            className={styles.normalText}
          >{`There are no active medications`}</Typography>
        </Box>
      )}
      {medications?.past?.length > 0 && !isFilterApplied && (
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
              Past Medications{` (${medications?.past?.length})`}
            </Typography>
          </Box>
          {renderPrescriptionTabUI(medications.past)}
        </>
      )}
    </Box>
  );
}
