import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterResult from "../../../../src/components/molecules/FilterResult/filterResult";
import { createMatchMedia } from "../../../../__mocks__/commonSteps";

window.scrollTo = jest.fn();
const providerList = [
  {
    providerId: "1",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    name: "Paul Wagner Md",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
          {
            time: "10:30am",
            key: 12230,
          },
          {
            time: "11:30am",
            key: 12231,
          },
          {
            time: "12:00pm",
            key: 12232,
          },
          {
            time: "13:30pm",
            key: 12233,
          },
          {
            time: "14:30pm",
            key: 12234,
          },
          {
            time: "15:30pm",
            key: 12235,
          },
          {
            time: "16:30pm",
            key: 12236,
          },
          ,
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
  {
    providerId: "2",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    name: "Paul Wagner Md",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
          {
            time: "10:30am",
            key: 12230,
          },
          {
            time: "11:30am",
            key: 12231,
          },
          {
            time: "12:00pm",
            key: 12232,
          },
          {
            time: "13:30pm",
            key: 12233,
          },
          {
            time: "14:30pm",
            key: 12234,
          },
          {
            time: "15:30pm",
            key: 12235,
          },
          {
            time: "16:30pm",
            key: 12236,
          },
          ,
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
  {
    providerId: "3",
    name: "Paul Wagner Md",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
          {
            time: "10:30am",
            key: 12230,
          },
          {
            time: "11:30am",
            key: 12231,
          },
          {
            time: "12:00pm",
            key: 12232,
          },
          {
            time: "13:30pm",
            key: 12233,
          },
          {
            time: "14:30pm",
            key: 12234,
          },
          {
            time: "15:30pm",
            key: 12235,
          },
          {
            time: "16:30pm",
            key: 12236,
          },
          ,
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
];

describe("FilterResult Components", () => {
  let container;
  const rangeDate = { startDate: "2024-01-01", endDate: "2025-10-15" };
  beforeEach(() => {
    container = render(
      <FilterResult
        isDesktop={true}
        providerList={providerList}
        rangeDate={rangeDate}
      />
    );
  });

  it("Filter Result with empty data", () => {
    container = render(<FilterResult />);
    expect(true).toBeTruthy();
  });
  it("FilterResult render", () => {
    expect(container.getByText("3 In-network providers")).toBeInTheDocument();
  });

  it("FilterHeading render", () => {
    const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" };
    container = render(
      <FilterResult
        isDesktop={false}
        providerList={providerList}
        rangeDate={rangeDate}
        purposeOfVisitData={[]}
        insuranceCarrierData={[]}
        googleApiKey={"Test"}
        filterData={{
          location: "",
          date: "",
          purposeOfVisit: "",
          insuranceCarrier: "",
        }}
      />
    );
    expect(container.getByText("3 In-network providers")).toBeInTheDocument();
  });

  it("Filter Result Render in mobile", () => {
    window.matchMedia = createMatchMedia("800px");
    container = render(
      <FilterResult
        isDesktop={false}
        providerList={providerList}
        rangeDate={rangeDate}
      />
    );
  });

  it("Filter Result Render in desktop", () => {
    container = render(
      <FilterResult isDesktop={true} providerList={{}} rangeDate={rangeDate} />
    );
    expect(true).toBeTruthy();
  });

  it("Filter Result Render in desktop with providerList is null", () => {
    container = render(
      <FilterResult
        isDesktop={true}
        providerList={null}
        rangeDate={rangeDate}
      />
    );
    expect(true).toBeTruthy();
  });

  it("Filter Result with OnDayClicked", async () => {
    const dayButton = container.getAllByTestId(/loc_hourButton/i);
    await waitFor(() => fireEvent.click(dayButton[0]));
    expect(container.getByText("3 In-network providers")).toBeInTheDocument();
  });

  it("Filter Result with next button click in mobile view is loading", async () => {
    container = render(
      <FilterResult
        isDesktop={false}
        providerList={[]}
        rangeDate={rangeDate}
        isLoading={true}
      />
    );
    const nextButton = container.getByTestId(
      /filter-result-arrow-button-next/i
    );
    const prevButton = container.getByTestId(
      /filter-result-arrow-button-prev/i
    );
    await waitFor(() => fireEvent.click(nextButton));
    await waitFor(() => fireEvent.click(prevButton));

    expect(container.getByText("3 In-network providers")).toBeInTheDocument();
  });

  it("Filter Result with next button click in mobile view", async () => {
    container = render(
      <FilterResult
        isDesktop={false}
        providerList={providerList}
        rangeDate={rangeDate}
      />
    );
    const nextButton = container.getByTestId(
      /filter-result-arrow-button-next/i
    );
    const prevButton = container.getByTestId(
      /filter-result-arrow-button-prev/i
    );
    await waitFor(() => fireEvent.click(nextButton));
    await waitFor(() => fireEvent.click(prevButton));

    await waitFor(() => fireEvent.click(nextButton));
    await waitFor(() => fireEvent.click(prevButton));
    await waitFor(() => fireEvent.click(prevButton));
    await waitFor(() => fireEvent.click(prevButton));

    await waitFor(() => fireEvent.click(nextButton));
    await waitFor(() => fireEvent.click(nextButton));
    await waitFor(() => fireEvent.click(nextButton));
    await waitFor(() => fireEvent.click(nextButton));

    expect(container.getByText("3 In-network providers")).toBeInTheDocument();
  });
});
