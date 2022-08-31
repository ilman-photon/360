import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { WeekAvailability } from "../../../../src/components/molecules/WeekAvailability/WeekAvailability";

describe("WeekAvailability Components", () => {
  let container;
  beforeEach(() => {
    container = render(<WeekAvailability />);
  });

  it("WeekAvailability render", () => {
    expect(container).toMatchSnapshot();
  });
});
