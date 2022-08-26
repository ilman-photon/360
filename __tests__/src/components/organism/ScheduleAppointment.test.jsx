import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScheduleAppointment from "../../../../src/components/organisms/ScheduleAppointment/scheduleAppointment";

describe("App", () => {
    let container;
    beforeEach(() => {
      container = render(<ScheduleAppointment />);
    });

    it("ScheduleAppointment render", () => {
        expect(container).toMatchSnapshot();
    });
  
});
