import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ScheduleAvailability } from "../../../../src/components/molecules/ScheduleAvailability/scheduleAvailability";

describe("ScheduleAvailability Components", () => {
  let container;
  beforeEach(() => {
    container = render(<ScheduleAvailability />);
  });

  it("ScheduleAvailability render", () => {
    expect(container).toMatchSnapshot();
  });
});
