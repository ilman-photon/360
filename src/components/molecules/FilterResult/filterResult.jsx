import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ItemResult from "../../organisms/ItemResult/ItemResult";
import FilterResultHeading from "../FilterResultHeading/filterResultHeading";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FilterResultContainer from "../FilterResultContainer/filterResultContainer";
import { colors } from "../../../styles/theme";
import { useEffect, useState } from "react";
import { getDates } from "../../../utils/appointment";

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
  isDesktop = false,
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
  activedFilter = [],
}) => {
  const [dateList, setDateList] = useState({
    dateRange: [],
    dateListName: [],
  });
  const [currentDateIndex, setCurrentDateIndex] = useState(0);

  useEffect(() => {
    const dates = getDates(
      new Date(rangeDate.startDate),
      new Date(rangeDate.endDate),
      true
    );
    if (rangeDate.startDate && rangeDate.endDate) {
      setDateList(dates);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rangeDate]);

  function renderItemResult() {
    const indents = [];
    for (let i = 0; i < providerList.length; i++) {
      indents.push(
        <Box key={i}>
          <ItemResult
            keyItem={`${i}-item-filter`}
            onClickViewAllAvailability={onClickViewAllAvailability}
            providerData={providerList[i]}
            OnDayClicked={(payload) => {
              OnDayClicked(payload, providerList[i]);
            }}
          />
        </Box>
      );
    }
    return indents;
  }

  function renderDesktopView() {
    return (
      <Stack>
        <Box>
          <FilterResultHeading
            isDesktop={isDesktop}
            onNextScheduleClicked={onNextScheduleClicked}
            onPrevScheduleClicked={onPrevScheduleClicked}
            rangeDate={rangeDate}
            filter={filter}
          />
        </Box>
        <div
          style={{
            overflow: "auto",
            marginTop: 8,
            maxHeight: "calc(100vh - 151px - 64px - 141px)",
          }}
          className="hide-scrollbar"
        >
          {renderItemResult()}
        </div>
      </Stack>
    );
  }

  function renderMobileView() {
    return (
      <Box
        sx={{
          marginTop: "-25px",
          height: "calc(100vh - 56px)",
          display: "flex",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            zIndex: "9",
          }}
        >
          <FilterResultHeading
            isDesktop={isDesktop}
            filterData={filterData}
            onSearchProvider={onSearchProvider}
            purposeOfVisitData={purposeOfVisitData}
            insuranceCarrierData={insuranceCarrierData}
            filter={filter}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            height={"56px"}
            sx={{ backgroundColor: "#fff" }}
          >
            <ArrowBackIosIcon
              sx={{
                marginLeft: "22px",
                cursor: "pointer",
              }}
              onClick={() => {
                if (currentDateIndex <= 0) {
                  const date = new Date(dateList.dateRange[0]);
                  date.setDate(date.getDate() - 7);

                  onPrevScheduleClicked("day", date);
                  setCurrentDateIndex(5);
                } else {
                  setCurrentDateIndex(--currentDateIndex);
                }
              }}
            />
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
            <ArrowForwardIosIcon
              sx={{
                marginRight: "15px",
                cursor: "pointer",
              }}
              onClick={() => {
                if (currentDateIndex >= 5) {
                  const date = new Date(dateList.dateRange[5]);
                  date.setDate(date.getDate() + 7);

                  onNextScheduleClicked("day", date);
                  setCurrentDateIndex(0);
                } else {
                  setCurrentDateIndex(++currentDateIndex);
                }
              }}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            paddingTop: "160px",
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
          />
        </Box>
      </Box>
    );
  }

  return <>{isDesktop ? renderDesktopView() : renderMobileView()}</>;
};

export default FilterResult;
