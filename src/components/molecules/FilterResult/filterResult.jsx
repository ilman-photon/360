import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ItemResult from "../../organisms/ItemResult/ItemResult";
import FilterResultHeading from "../FilterResultHeading/filterResultHeading";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FilterResultContainer from "../FilterResultContainer/filterResultContainer";
import { colors } from "../../../styles/theme";
import { useEffect, useState } from "react";
import { getDates, isPrevArrowDisable } from "../../../utils/appointment";
import { TEST_ID } from "../../../utils/constants";
import styles from "./filterResult.module.scss";
import moment from "moment";

export const FilterResult = ({
  providerList = [],
  onClickViewAllAvailability = () => {
    // This is intentional
  },
  OnDayClicked = () => {
    // This is intentional
  },
  onNextScheduleClicked = () => {
    // This is intentional
  },
  onPrevScheduleClicked = () => {
    // This is intentional
  },
  onGetDirection = () => {
    // This is intentional
  },
  isDesktop = false,
  isTablet = false,
  rangeDate = { startDate: "", endDate: "" },
  activeTabs = 0,
  setActiveTabs = () => {
    // This is intentional
  },
  filterData = {
    location: "",
    date: "",
    purposeOfVisit: "",
    insuranceCarrier: "",
  },
  googleApiKey = "",
  purposeOfVisitData = [],
  insuranceCarrierData = [],
  onSearchProvider = () => {
    // This is intentional
  },
  filter = [],
  onActivFilter,
  appliedFilter,
  isLoading = false,
  isGeolocationEnabled = false,
  onChangeLocation = () => {
    // This is intentional
  },
  currentCity = "",
  currentDateIndex = 0,
  setCurrentDateIndex = () => {
    // This is intentional
  },
  isActiveSearchProvider = false,
  setActiveSearchProvider = () => {
    // This is intentional
  },
}) => {
  const [dateList, setDateList] = useState({
    dateRange: [],
    dateListName: [],
  });

  const setCurrentIndex = (dates) => {
    let dateFilterIndex = dates.dateRange.findIndex((date) => {
      const dateLoop = moment(date).format("YYYY:MM:DD");
      const filterDate = moment(filterData.date).format("YYYY:MM:DD");
      return dateLoop === filterDate;
    });

    if (isActiveSearchProvider && dateFilterIndex > -1) {
      setCurrentDateIndex(dateFilterIndex);
      setActiveSearchProvider(false);
    }
  };

  useEffect(() => {
    const dates = getDates(
      new Date(rangeDate.startDate),
      new Date(rangeDate.endDate),
      true
    );
    if (rangeDate.startDate && rangeDate.endDate) {
      setCurrentIndex(dates);
      setDateList(dates);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rangeDate]);

  function renderItemResult() {
    const indents = [];
    for (let i = 0; i < providerList?.length; i++) {
      indents.push(
        <Box key={i}>
          <ItemResult
            keyItem={`${i}-item-filter`}
            onClickViewAllAvailability={onClickViewAllAvailability}
            providerData={providerList[i]}
            isTablet={isTablet}
            OnDayClicked={(payload) => {
              OnDayClicked(payload, providerList[i]);
            }}
            onGetDirection={onGetDirection}
          />
        </Box>
      );
    }
    return indents;
  }

  function renderDesktopView() {
    return (
      <Stack
        data-testid={TEST_ID.APPOINTMENT_TEST_ID.FILTER_RESULT.container}
        // sx={{ width: "calc(100vw - 32px)", overflowX: "auto" }}
      >
        <Box>
          <FilterResultHeading
            isDesktop={isDesktop}
            isTablet={isTablet}
            numberFilter={providerList?.length || 0}
            onNextScheduleClicked={onNextScheduleClicked}
            onPrevScheduleClicked={onPrevScheduleClicked}
            rangeDate={rangeDate}
            filter={filter}
            onActivFilter={onActivFilter}
            appliedFilter={appliedFilter}
          />
        </Box>
        <div
          style={{
            marginTop: 8,
          }}
          className="hide-scrollbar"
        >
          {renderItemResult()}
        </div>
      </Stack>
    );
  }

  function renderMobileView() {
    const disabledArrow = isPrevArrowDisable(
      dateList,
      dateList.dateRange[currentDateIndex]
    )
      ? `Disabled`
      : ``;
    return (
      <Box
        sx={{
          marginTop: "-25px",
          height: "calc(100vh - 56px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            zIndex: "9",
          }}
        >
          <FilterResultHeading
            isDesktop={isDesktop}
            isTablet={isTablet}
            filterData={filterData}
            onSearchProvider={onSearchProvider}
            purposeOfVisitData={purposeOfVisitData}
            insuranceCarrierData={insuranceCarrierData}
            filter={filter}
            onActivFilter={onActivFilter}
            appliedFilter={appliedFilter}
            isGeolocationEnabled={isGeolocationEnabled}
            onChangeLocation={onChangeLocation}
            currentCity={currentCity}
            googleApiKey={googleApiKey}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            height={"56px"}
            sx={{ backgroundColor: "#fff" }}
            className={styles.stackListContainer}
          >
            <Button
              role={"button"}
              onClick={() => {
                if (isLoading) {
                  return;
                }
                if (
                  !isPrevArrowDisable(
                    dateList,
                    dateList.dateRange[currentDateIndex]
                  )
                ) {
                  if (currentDateIndex <= 0) {
                    const date = new Date(dateList.dateRange[0]);
                    date.setDate(date.getDate() - 7);

                    onPrevScheduleClicked("day", date);
                    setCurrentDateIndex(5);
                  } else {
                    setCurrentDateIndex(currentDateIndex - 1);
                  }
                }
              }}
              sx={{
                width: "25px",
                minWidth: "25px",
                padding: 0,
                color: "#003b4a",
              }}
              aria-label={`Navigate to previous week option. ${disabledArrow}`}
              data-testId="filter-result-arrow-button-prev"
            >
              <ArrowBackIosIcon
                sx={{
                  marginLeft: "22px",
                  cursor: "pointer",
                }}
                className={
                  isPrevArrowDisable(
                    dateList,
                    dateList.dateRange[currentDateIndex]
                  )
                    ? styles.prevArrowDisable
                    : styles.prevArrowActive
                }
              />
            </Button>
            <Box
              sx={{
                margin: "0 auto",
              }}
            >
              <CalendarTodayIcon
                sx={{
                  width: "15px",
                  height: "15px",
                  color: colors.darkGreen,
                }}
              />
              <Typography
                variant={"bodyRegular"}
                sx={{
                  color: "#303030",
                  marginLeft: "13px",
                  ["@media (max-width: 992px)"]: {
                    fontWeight: "600",
                  },
                }}
              >
                {dateList.dateListName[currentDateIndex]}
              </Typography>
            </Box>
            <Button
              role={"button"}
              data-testId="filter-result-arrow-button-next"
              onClick={() => {
                if (isLoading) {
                  return;
                }
                if (currentDateIndex >= 5) {
                  const date = new Date(dateList.dateRange[5]);
                  date.setDate(date.getDate() + 7);

                  onNextScheduleClicked("day", date);
                  setCurrentDateIndex(0);
                } else {
                  setCurrentDateIndex(currentDateIndex + 1);
                }
              }}
              sx={{
                width: "25px",
                minWidth: "25px",
                padding: 0,
                color: "#003b4a",
              }}
              aria-label={"Navigate to next week option"}
            >
              <ArrowForwardIosIcon
                sx={{
                  marginRight: "15px",
                  cursor: "pointer",
                }}
              />
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <FilterResultContainer
            activeTabs={activeTabs}
            setActiveTabs={setActiveTabs}
            onClickViewAllAvailability={onClickViewAllAvailability}
            filterData={filterData}
            providerList={providerList}
            OnDayClicked={OnDayClicked}
            googleApiKey={googleApiKey}
            currentDateIndex={currentDateIndex}
            currentDate={dateList.dateRange[currentDateIndex]}
          />
        </Box>
      </Box>
    );
  }

  return <>{isDesktop ? renderDesktopView() : renderMobileView()}</>;
};

export default FilterResult;
