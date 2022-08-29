import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import constants from "../../../utils/constants";
import ItemResult from "../../organisms/ItemResult/ItemResult";
import FilterResultHeading from "../FilterResultHeading/filterResultHeading";

export const FilterResult = ({
  dataCount = 3,
  onSelectSchedule = () => {
    // This is intentional
  },
  onClickViewAllAvailability = () => {
    // This is intentional
  },
}) => {
  function renderItemResult() {
    const indents = [];
    for (let i = 0; i < dataCount; i++) {
      indents.push(
        <Box key={i}>
          <ItemResult
            keyItem={`${i}-item-filter`}
            onClickViewAllAvailability={onClickViewAllAvailability}
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
          <FilterResultHeading />
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
