import { fireEvent, render } from "@testing-library/react";
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
    container = render(<FilterHeadingFilled isDesktop={true}/>);
    expect(container).toMatchSnapshot();
  });
});
