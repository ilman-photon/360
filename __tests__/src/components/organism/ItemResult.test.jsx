import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemResult from "../../../../src/components/organisms/ItemResult/ItemResult";

window.scrollTo = jest.fn()

describe("Item Result Components", () => {
  let container;
  beforeEach(() => {
    container = render(<ItemResult 
    />);
  });

  it("select option render", () => {
    expect(container).toMatchSnapshot();
  });

});
