import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterResultHeading from "../../../../src/components/molecules/FilterResultHeading/filterResultHeading";

window.scrollTo = jest.fn();

describe("FilterHeading Components", () => {
  let container;
  const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" };
  beforeEach(() => {
    container = render(<FilterResultHeading rangeDate={rangeDate} />);
  });

  it("FilterHeading render", () => {
    expect(container.getByTestId("open-filter-modal")).toBeInTheDocument();
  });
});
