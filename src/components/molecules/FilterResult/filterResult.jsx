import { Stack } from "@mui/material";
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
