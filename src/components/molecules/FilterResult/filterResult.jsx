import { Box } from "@mui/system";
import constants from "../../../utils/constants";
import ItemResult from "../../organisms/ItemResult/ItemResult";
import FilterResultHeading from "../FilterResultHeading/filterResultHeading";

export const FilterResult = ({ dataCount = 3 }) => {
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;

  function renderItemResult() {
    const indents = [];
    for (let i = 0; i < dataCount; i++) {
      indents.push(<ItemResult />);
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
