import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterHeading from "../../../../src/components/molecules/FilterHeading/filterHeading";

window.scrollTo = jest.fn()

describe("FilterHeading Components", () => {
  let container;
  beforeEach(() => {
    container = render(<FilterHeading />);
  });

  it("FilterHeading render", () => {
    expect(container).toMatchSnapshot();
  });

});
