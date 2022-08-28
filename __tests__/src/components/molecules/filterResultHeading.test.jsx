import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterResultHeading from "../../../../src/components/molecules/FilterResultHeading/filterResultHeading";

window.scrollTo = jest.fn()

describe("FilterHeading Components", () => {
  let container;
  beforeEach(() => {
    container = render(<FilterResultHeading />);
  });

  it("FilterHeading render", () => {
    expect(container).toMatchSnapshot();
  });

});
