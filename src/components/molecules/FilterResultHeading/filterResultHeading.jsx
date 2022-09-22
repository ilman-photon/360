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
import { useEffect, useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { colors } from "../../../styles/theme";
import Image from "next/image";
import FilterHeadingFilled from "../FilterHeading/filterHeadingFilled";
import { getDates } from "../../../utils/appointment";

export const FilterResultHeading = ({
  appliedFilter = [],
  numberFilter = 30,
  isDesktop = false,
  isTablet = false,
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
  rangeDate = { startDate: "", endDate: "" },
  filter = [],
  onActivFilter,
  title = "",
  subtitle = "",
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
  const [filterOpen, setFilterOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState([]);
  const [dateList, setDateList] = useState({
    dateRange: [],
    dateListName: [],
  });

  useEffect(() => {
    const newDateList = getDates(
      new Date(rangeDate.startDate),
      new Date(rangeDate.endDate)
    );
    if (rangeDate.startDate && rangeDate.endDate) {
      setDateList(newDateList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rangeDate]);

  function renderAppliedFilter() {
    return appliedFilter.map((option, idx) => {
      return (
        <Box className={styles.filterChildButton} key={idx}>
          {option.name}
          <CloseIcon
            className={styles.closeIcon}
            onClick={() => {
              const id = appliedFilter.findIndex((x) => x.name === option.name);
              if (id > -1) {
                const data = [...appliedFilter];
                data.splice(id, 1);
                setActiveFilter([...data]);
                onActivFilter([...data]);
              }
            }}
          />
        </Box>
      );
    });
  }

  const onSetFilter = (newFilterData) => {
    setFilterOpen(!filterOpen);
    setActiveFilter(newFilterData);
    onActivFilter(newFilterData);
  };

  function handleCloseDialog() {
    //Reset data when cancel the dialog
    setDialogOpen(false);
  }

  function handleOpenDialog() {
    //Reset data when cancel the dialog
    setDialogOpen(true);
  }

  function isPrevArrowDisable() {
    return (
      new Date() >
      (dateList?.dateRange?.length > 0 ? dateList.dateRange[0] : null)
    );
  }

  function renderDesktopView() {
    return (
      <Box
        className={[
          styles.filterContainer,
          isTablet ? styles.isTablet : null,
        ].join(" ")}
      >
        <Box className={styles.filterButtonContainer}>
          <FilterBy
            activedFilter={[...appliedFilter]}
            filter={filter}
            isOpen={filterOpen}
            onClose={() => {
              setFilterOpen(!filterOpen);
            }}
            onDone={(selectedFilterData) => {
              onSetFilter(selectedFilterData);
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
            Filters
            <KeyboardArrowDownIcon className={styles.keydownIcon} />
          </StyledButton>
          <Box display="flex" flexWrap="wrap">
            {renderAppliedFilter()}
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "16px",
            display: "grid",
            gridTemplateColumns: "490px 638px",
            justifyContent: "space-between",
            alignContent: "space-between",
            gridTemplateRows: "auto",
            gridTemplateAreas: `"filterDetails calenderDetails"`,
          }}
        >
          <Box
            sx={{ gridArea: "filterDetails" }}
            className={styles.filterFoundWarpper}
          >
            <Typography className={styles.filterFound} tabindex={"0"}>
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
            className={styles.dateListContainer}
          >
            <Button
              role={"button"}
              onClick={() => {
                const date = new Date(dateList.dateRange[0]);
                date.setDate(date.getDate() - 7);
                onPrevScheduleClicked("week", date);
              }}
              sx={{
                gridArea: "arrowLeft",
                width: "22px",
                minWidth: "22px",
                padding: 0,
              }}
              className={
                isPrevArrowDisable()
                  ? styles.prevArrowDisable
                  : styles.prevArrowActive
              }
              aria-label={"Navigate to previous week option"}
            >
              <ArrowBackIosIcon
                sx={{
                  margin: "auto",
                  width: "22px",
                  cursor: "pointer",
                }}
              />
            </Button>

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
                    <Typography
                      className={styles.calenderDay}
                      aria-label={`${option.slice(0, -8)}`}
                      tabindex={"0"}
                    >
                      {option.slice(0, 3)}
                    </Typography>
                    <Typography
                      className={styles.calenderMonth}
                      aria-label={`${dateList.dateListName[idx]}`}
                      tabindex={"0"}
                    >
                      {dateList.dateListName[idx]}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Button
              role={"button"}
              onClick={() => {
                const date = new Date(dateList.dateRange[5]);
                date.setDate(date.getDate() + 7);
                onNextScheduleClicked("week", date);
              }}
              sx={{
                gridArea: "arrowRight",
                width: "22px",
                minWidth: "22px",
                padding: 0,
              }}
              className={styles.prevArrowActive}
              aria-label={"Navigate to next week option"}
            >
              <ArrowForwardIosIcon
                sx={{
                  margin: "auto",
                  width: "22px",
                  cursor: "pointer",
                }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  function renderMobileView() {
    return (
      <Box
        className={styles.mobileFilterContainer}
        sx={{
          backgroundColor: title && subtitle ? "transparent" : colors.darkGreen,
          height: title && subtitle ? "165px" : "105px",
        }}
        aria-live="polite"
      >
        <FilterBy
          activedFilter={[...activeFilter]}
          filter={filter}
          isOpen={filterOpen}
          onClose={() => {
            setFilterOpen(!filterOpen);
          }}
          onDone={(selectedFilterData) => {
            onSetFilter(selectedFilterData);
          }}
        ></FilterBy>
        <Stack
          justifyContent={"center"}
          height={"100%"}
          paddingX={"14px"}
          className={title && subtitle ? styles.titleContainer : {}}
        >
          {title && subtitle && (
            <Stack className={styles.subtitleContainer}>
              <Typography className={styles.titleElement}>{title}</Typography>
              <Typography className={styles.subtitleElement}>
                {subtitle}
              </Typography>
            </Stack>
          )}
          <Stack
            className={
              title && subtitle
                ? styles.stackFilterContainer
                : styles.mobileFilterStyle
            }
            direction={"row"}
          >
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
              <Button
                aria-label={filterData.location}
                sx={{
                  padding: 0,
                  textTransform: "none",
                  textAlign: "left",
                  alignSelf: "flex-start",
                }}
              >
                <Typography
                  variant={"bodyMedium"}
                  className={styles.mobileFilterTitle}
                >
                  {filterData.location || "City, state, or zip code"}
                </Typography>
                {filterData.purposeOfVisit ||
                  (filterData.insuranceCarrier && (
                    <Typography
                      className={styles.mobileFilterSubtitle}
                    >{`${filterData.purposeOfVisit} * ${filterData.insuranceCarrier}`}</Typography>
                  ))}
              </Button>
            </Box>
            <Box
              className={styles.mobileFilterImageContainer}
              onClick={() => {
                setFilterOpen(true);
              }}
            >
              {!(title && subtitle) && (
                <Button
                  aria-label={"Filter"}
                  sx={{
                    width: "31px",
                    minWidth: "31px",
                    padding: 0,
                  }}
                >
                  <Image
                    alt=""
                    src={
                      activeFilter.length > 0 ? imageSrcFilled : imageSrcState
                    }
                    width={31}
                    height={31}
                  />
                </Button>
              )}
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
