import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterHeading from "../../../../src/components/molecules/FilterHeading/filterHeading";
import { TEST_ID } from "../../../../src/utils/constants";

window.scrollTo = jest.fn();

describe("FilterHeading Components", () => {
  let container;
  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 3, 1));
    container = render(<FilterHeading isDesktop={true} />);
  });

  it("FilterHeading render", () => {
    expect(
      container.getAllByTestId(TEST_ID.APPOINTMENT_TEST_ID.searchbtn)[0]
    ).toBeInTheDocument();
  });

  it("FilterHeading render", () => {
    container = render(<FilterHeading isDesktop={false} />);
    expect(
      container.getAllByTestId(TEST_ID.APPOINTMENT_TEST_ID.searchbtn)[0]
    ).toBeInTheDocument();
  });
});
