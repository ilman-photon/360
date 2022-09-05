import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import ItemResult from "../../organisms/ItemResult/ItemResult";
import FilterResultHeading from "../FilterResultHeading/filterResultHeading";

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
}) => {
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

  return (
    <>
      <Stack>
        <Box>
          <FilterResultHeading
            isDesktop={isDesktop}
            onNextScheduleClicked={onNextScheduleClicked}
            onPrevScheduleClicked={onPrevScheduleClicked}
            rangeDate={rangeDate}
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
    </>
  );
};

export default FilterResult;
