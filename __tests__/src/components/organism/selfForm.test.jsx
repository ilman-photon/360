import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelfForm from "../../../../src/components/organisms/ScheduleAppointment/selfForm";

describe("App", () => {
    let container;
    beforeEach(() => {
      container = render(<SelfForm />);
    });
  
    it("SelfForm render", () => {
        expect(container).toMatchSnapshot();
    });
    
});
  
