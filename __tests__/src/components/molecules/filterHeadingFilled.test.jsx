import { fireEvent, render, getByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterHeadingFilled from "../../../../src/components/molecules/FilterHeading/filterHeadingFilled";

window.scrollTo = jest.fn()

describe("FilterHeadingFilled Components", () => {
  let container;
  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 3, 1));
    container = render(<FilterHeadingFilled />);
  });

  it("FilterHeadingFilled render", () => {
    expect(container).toMatchSnapshot();
  });

  it("FilterHeadingFilled render", () => {
    container = render(<FilterHeadingFilled isDesktop={true} />);
    expect(container).toMatchSnapshot();
  });

  it("FilterHeadingFilled render with type filterMenu", () => {
    container.rerender(
      <FilterHeadingFilled
        openDialog={true}
        isDesktop={true}
        type={"filterMenu"}
        filterData={{
          location: true,
          date: {
            getDate: jest.fn().mockReturnValueOnce("19"),
            getMonth: jest.fn().mockReturnValueOnce("10"),
            getFullYear: jest.fn().mockReturnValueOnce("2020")
          },
          purposeOfVisit: "Eye exam",
          insuranceCarrier: "Aethna",
        }} />);
    expect(container).toMatchSnapshot();
    expect(container.getByText("Search")).toBeInTheDocument();
    expect(container.getByText("Back to results")).toBeInTheDocument();
    fireEvent.click(container.getByText("Search"));
    fireEvent.click(container.getByText("Back to results"));
  });

  it("FilterHeadingFilled render with type filterMenu Location", () => {
    container.rerender(
      <FilterHeadingFilled
        openDialog={true}
        isDesktop={true}
        type={"filterMenu"}
        filterData={{
          location: "New York, NY",
          date: {
            getDate: jest.fn().mockReturnValueOnce("19"),
            getMonth: jest.fn().mockReturnValueOnce("10"),
            getFullYear: jest.fn().mockReturnValueOnce("2020")
          },
          purposeOfVisit: "Eye exam",
          insuranceCarrier: "Aethna",
        }} />);
    expect(container).toMatchSnapshot();
    expect(container.getByText("City, state, or zip code")).toBeInTheDocument();
    fireEvent.click(container.getByText("City, state, or zip code"));
  });

  it("FilterHeadingFilled render with type filterMenu Date", () => {
    container.rerender(
      <FilterHeadingFilled
        openDialog={true}
        isDesktop={true}
        type={"filterMenu"}
        filterData={{
          location: "New York, NY",
          date: {
            getDate: jest.fn().mockReturnValueOnce("19"),
            getMonth: jest.fn().mockReturnValueOnce("10"),
            getFullYear: jest.fn().mockReturnValueOnce("2020")
          },
          purposeOfVisit: "Eye exam",
          insuranceCarrier: "Aethna",
        }} />);
    expect(container).toMatchSnapshot();
    expect(container.getByLabelText("Date")).toBeInTheDocument();
    fireEvent.click(container.getByText("Date"));
  });

  it("FilterHeadingFilled render with type filterMenu Purpose", () => {
    container.rerender(
      <FilterHeadingFilled
        openDialog={true}
        isDesktop={true}
        type={"filterMenu"}
        filterData={{
          location: "New York, NY",
          date: {
            getDate: jest.fn().mockReturnValueOnce("19"),
            getMonth: jest.fn().mockReturnValueOnce("10"),
            getFullYear: jest.fn().mockReturnValueOnce("2020")
          },
          purposeOfVisit: "Eye exam",
          insuranceCarrier: "Aethna",
        }} />);
    expect(container).toMatchSnapshot();
    expect(container.getByText("Purpose of Visit")).toBeInTheDocument();
    fireEvent.click(container.getByText("Purpose of Visit"));
  });

  it("FilterHeadingFilled render with type filterMenu Insurance", () => {
    container.rerender(
      <FilterHeadingFilled
        openDialog={true}
        isDesktop={true}
        type={"filterMenu"}
        filterData={{
          location: "New York, NY",
          date: {
            getDate: jest.fn().mockReturnValueOnce("19"),
            getMonth: jest.fn().mockReturnValueOnce("10"),
            getFullYear: jest.fn().mockReturnValueOnce("2020")
          },
          purposeOfVisit: "Eye exam",
          insuranceCarrier: "Aethna",
        }} />);
    expect(container).toMatchSnapshot();
    expect(container.getByText("Insurance Carrier")).toBeInTheDocument();
    fireEvent.click(container.getByText("Insurance Carrier"));
  });
});
