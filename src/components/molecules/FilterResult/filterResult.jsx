import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import ItemResult from "../../organisms/ItemResult/ItemResult";
import FilterResultHeading from "../FilterResultHeading/filterResultHeading";

export const FilterResult = ({
  providerList = [
    {
      providerId: 0,
      name: "Dr. Sonha Nguyen",
      address: {
        addressLine1: "673 Herzog Locks",
        addressLine2: "Suite 300",
        city: "New York",
        state: "NY",
        zipcode: "53891",
      },
      rating: 5,
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: new Date(),
      to: new Date(),
      location: {
        latitude: 41.481832,
        longitude: -87.323177,
      },
    },
    {
      providerId: 1,
      name: "Paul Wagner, MD",
      address: {
        addressLine1: "100 United States",
        addressLine2: "Hotel 15",
        city: "Washington",
        state: "WS",
        zipcode: "12345",
      },
      rating: 5,
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: new Date(),
      to: new Date(),
      location: {
        latitude: 41.681832,
        longitude: -87.123177,
      },
    },
    {
      providerId: 2,
      name: "John Doe, MD",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: 5,
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: new Date(),
      to: new Date(),
      location: {
        latitude: 40.681832,
        longitude: -87.14573177,
      },
    },
  ],
  onClickViewAllAvailability = () => {
    // This is intentional
  },
  OnDayClicked = () => {
    // This is intentional
  },
  isDesktop = false,
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
          <FilterResultHeading isDesktop={isDesktop} />
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
