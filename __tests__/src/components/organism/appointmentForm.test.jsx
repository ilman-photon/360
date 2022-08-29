import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppointmentForm from "../../../../src/components/organisms/ScheduleAppointment/AppointmentForm";

describe("App", () => {
    let container;
    beforeEach(() => {
      container = render(<AppointmentForm />);
    });
  
    it("AppointmentForm render", () => {
        expect(container).toMatchSnapshot();
    });
    
});
  
