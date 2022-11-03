import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { WeekAvailability } from "../../../../src/components/molecules/WeekAvailability/WeekAvailability";
import constants from "../../../../src/utils/constants";
const provider_data = [
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
]

describe("WeekAvailability Components", () => {
  let container;
  beforeEach(() => {
    container = render(
      <WeekAvailability onClickViewAllAvailability={jest.fn()} scheduleData={provider_data}/>
    );
  });

  it("WeekAvailability render", async () => {
    await waitFor(() => {
      container.getAllByText(/more/i);
    });
    expect(container.getAllByText(/more/i)[0]).toBeInTheDocument();
  });
});
