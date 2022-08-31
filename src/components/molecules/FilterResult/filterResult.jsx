import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import ItemResult from "../../organisms/ItemResult/ItemResult";
import FilterResultHeading from "../FilterResultHeading/filterResultHeading";

export const FilterResult = ({
  providerList = [
    {
      name: 'Paul Wagner, MD',
      image: '/doctor.png',
      address: '51 West 51st Street, Floor 3, Suite 320 Midtown, New York, NY, 10019'
    },
    {
      name: 'John Doe, MD',
      image: '/doctor.png',
      address: '100 California West, Floor 10, Hotel 15 Chinatown, California, CF, 12345'
    },
    {
      name: 'Paul Wagner, MD',
      image: '/doctor.png',
      address: '51 West 51st Street, Floor 3, Suite 320 Midtown, New York, NY, 10019'
    }
  ],
  onSelectSchedule = () => {
    // This is intentional
  },
  OnDayClicked = () => {
    // This is intentional
  },
}) => {
  function renderItemResult() {
    const indents = [];
    for (let i = 0; i < providerList.length; i++) {
      indents.push(
        <Box key={i}>
          <ItemResult
            keyItem={`${i}-item-filter`}
            providerData={providerList[i]}
            OnDayClicked={(payload) => {
              OnDayClicked(payload, providerList[i])
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
