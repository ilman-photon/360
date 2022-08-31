import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DayAvailability } from "../../../../src/components/molecules/DayAvailability/DayAvailability";

describe("DayAvailability Components", () => {
  let container;
  beforeEach(() => {
    container = render(<DayAvailability />);
  });

  it("DayAvailability render", () => {
    expect(container).toMatchSnapshot();
  });

});
