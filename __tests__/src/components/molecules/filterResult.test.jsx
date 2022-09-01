import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterResult from "../../../../src/components/molecules/FilterResult/filterResult";

window.scrollTo = jest.fn()

describe("FilterResult Components", () => {
  let container;
  beforeEach(() => {
    container = render(<FilterResult/>);
  });

  it("FilterResult render", () => {
    expect(container).toMatchSnapshot();
  });

  it("FilterHeading render", () => {
    container = render(<FilterResult isDesktop={true}/>);
    expect(container).toMatchSnapshot();
  });

});
