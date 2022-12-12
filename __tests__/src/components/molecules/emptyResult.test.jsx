import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmptyResult from "../../../../src/components/molecules/FilterResult/emptyResult";

describe("EmptyResult Components", () => {
  let container;
  beforeEach(() => {
    container = render(<EmptyResult />);
  });

  it("EmptyResult render", () => {
    
  });
});
