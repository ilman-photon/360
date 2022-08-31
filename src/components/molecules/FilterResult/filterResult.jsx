import { Box } from "@mui/system";
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
      <Box>
        <Box>
          <FilterResultHeading />
        </Box>
        {renderItemResult()}
      </Box>
    </>
  );
};

export default FilterResult;
