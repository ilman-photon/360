import { Box } from "@mui/system";
import constants from "../../../utils/constants";
import { StyledButton } from "../../atoms/Button/button";
import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./filterResultHeading.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import FilterBy from "../FilterBy/filterBy";
import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { colors } from "../../../styles/theme";
import Image from "next/image";
import FilterHeadingFilled from "../FilterHeading/filterHeadingFilled";

export const FilterResultHeading = ({
  _appliedFilter,
  numberFilter = 30,
  dateWeek = ["Sep 19", "Sep 20", "Sep 21", "Sep 22", "Sep 23", "Sep 24"],
  isDesktop = false,
  filterData = {
    location: "New York, NY",
    date: "",
    purposeOfVisit: "Eye exam",
    insuranceCarrier: "Aethna",
  },
  onSearchProvider = () => {
    // This is intentional
  },
  onNextScheduleClicked = () => {
    // This is intentional
  },
  onPrevScheduleClicked = () => {
    // This is intentional
  },
  purposeOfVisitData = [],
  insuranceCarrierData = [],
}) => {
  const imageSrcState = "/searchInputIcon.png";
  const imageSrcFilled = "/searchFilledIcon.png";
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  const weekColumn = [
    "mondaySchedule",
    "tuesdaySchedule",
    "wednesdaySchedule",
    "thusdaySchedule",
    "fridaySchedule",
    "saturdaySchedule",
  ];
  const mockFilter = [
    {
      title: "Filter by:",
      filter: ["Available today"],
    },
    {
      title: "Languages spoken",
      filter: [
        "Arabic",
        "Chinese",
        "English",
        "Farsi",
        "French",
        "Spanish",
        "Bahasa",
      ],
    },
    {
      title: "Insurance",
      filter: ["In Network", "Out of Network"],
    },
    {
      title: "Gender",
      filter: ["Male", "Female", "Non-Binary"],
    },
  ];

  const [filterOpen, setFilterOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState([]);

  function renderAppliedFilter() {
    return activeFilter.map((option, idx) => {
      return (
        <Box className={styles.filterChildButton} key={idx}>
          {option}
          <CloseIcon
            className={styles.closeIcon}
            onClick={() => {
              const id = activeFilter.indexOf(option);
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

  const onSetFilter = (filter) => {
    setFilterOpen(!filterOpen);
    setActiveFilter(filter);
  };

  function handleCloseDialog() {
    //Reset data when cancel the dialog
    setDialogOpen(false);
  }

  function handleOpenDialog() {
    //Reset data when cancel the dialog
    setDialogOpen(true);
  }

  function renderDesktopView() {
    return (
      <Box className={styles.filterContainer}>
        <Box className={styles.filterButtonContainer}>
          <FilterBy
            activedFilter={[...activeFilter]}
            filter={mockFilter}
            isOpen={filterOpen}
            onClose={() => {
              setFilterOpen(!filterOpen);
            }}
            onDone={(filter) => {
              onSetFilter(filter);
            }}
          ></FilterBy>
          <StyledButton
            className={styles.filterButton}
            mode={constants.SECONDARY}
            size={constants.SMALL}
            gradient={false}
            data-testid={APPOINTMENT_TEST_ID.filterbtn}
            onClick={() => {
              setFilterOpen(!filterOpen);
            }}
          >
            <TuneIcon className={styles.tuneIcon} />
            Filter
            <KeyboardArrowDownIcon className={styles.keydownIcon} />
          </StyledButton>
          {renderAppliedFilter()}
        </Box>
        <Box
          sx={{
            marginTop: "16px",
            display: "grid",
            gridTemplateColumns: "490px 638px",
            justifyContent: "center",
            alignContent: "center",
            gridTemplateRows: "auto",
            gridTemplateAreas: `"filterDetails calenderDetails"`,
          }}
        >
          <Box
            sx={{ gridArea: "filterDetails" }}
            className={styles.filterFoundWarpper}
          >
            <Typography className={styles.filterFound}>
              {`${numberFilter} In-network providers`}
            </Typography>
          </Box>
          <Box
            sx={{
              gridArea: "calenderDetails",
              display: "grid",
              gridTemplateColumns: "3% 94% 3%",
              gridTemplateRows: "auto",
              gridTemplateAreas: `"arrowLeft caledar arrowRight"`,
            }}
          >
            <ArrowBackIosIcon
              sx={{
                gridArea: "arrowLeft",
                margin: "auto",
                width: "22px",
                cursor: "pointer",
              }}
              onClick={() => {
                onPrevScheduleClicked("week");
              }}
            />
            <Box
              sx={{
                gridArea: "caledar",
                display: "grid",
                gap: 1,
                gridTemplateColumns: "repeat(6, 1fr)",
                justifyContent: "center",
                alignContent: "center",
                gridTemplateRows: "auto",
                gridTemplateAreas: `"mondaySchedule tuesdaySchedule wednesdaySchedule thusdaySchedule fridaySchedule saturdaySchedule"`,
              }}
            >
              {weekColumn.map((option, idx) => {
                return (
                  <Box
                    key={idx}
                    sx={{ gridArea: option, textAlign: "center" }}
                    className={styles.calenderDayWarpper}
                  >
                    <Typography className={styles.calenderDay}>
                      {option.slice(0, 3)}
                    </Typography>
                    <Typography className={styles.calenderMonth}>
                      {dateWeek[idx]}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <ArrowForwardIosIcon
              sx={{
                gridArea: "arrowRight",
                margin: "auto",
                width: "22px",
                cursor: "pointer",
              }}
              onClick={() => {
                onNextScheduleClicked("week");
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  }

  function renderMobileView() {
    return (
      <Box className={styles.mobileFilterContainer}>
        <FilterBy
          activedFilter={[...activeFilter]}
          filter={mockFilter}
          isOpen={filterOpen}
          onClose={() => {
            setFilterOpen(!filterOpen);
          }}
          onDone={(filter) => {
            onSetFilter(filter);
          }}
        ></FilterBy>
        <Stack justifyContent={"center"} height={"100%"} paddingX={"14px"}>
          <Stack className={styles.mobileFilterStyle} direction={"row"}>
            <LocationOnOutlinedIcon
              sx={{
                margin: "auto 14px",
                width: "25px",
                height: "25px",
                color: colors.darkGreen,
              }}
            />
            <Box
              className={styles.mobileFilterTitleContainer}
              onClick={handleOpenDialog}
            >
              <Typography
                variant={"bodyMedium"}
                className={styles.mobileFilterTitle}
              >
                {filterData.location}
              </Typography>
              <Typography
                className={styles.mobileFilterSubtitle}
              >{`${filterData.purposeOfVisit} * ${filterData.insuranceCarrier}`}</Typography>
            </Box>
            <Box
              className={styles.mobileFilterImageContainer}
              onClick={() => {
                setFilterOpen(true);
              }}
            >
              <Image
                alt=""
                src={activeFilter.length > 0 ? imageSrcFilled : imageSrcState}
                width={31}
                height={31}
              />
            </Box>
          </Stack>
        </Stack>
        {
          <FilterHeadingFilled
            openDialog={dialogOpen}
            onCloseDialog={handleCloseDialog}
            filterData={filterData}
            onSearchProvider={onSearchProvider}
            purposeOfVisitData={purposeOfVisitData}
            insuranceCarrierData={insuranceCarrierData}
          />
        }
      </Box>
    );
  }

  return <>{isDesktop ? renderDesktopView() : renderMobileView()}</>;
};

export default FilterResultHeading;
