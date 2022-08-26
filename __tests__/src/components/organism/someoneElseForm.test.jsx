import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SomeoneElseForm from "../../../../src/components/organisms/ScheduleAppointment/someoneElseForm";

describe("App", () => {
    let container;
    beforeEach(() => {
      container = render(<SomeoneElseForm />);
    });
  
    it("SomeoneElseForm render", () => {
        expect(container).toMatchSnapshot();
    });
    
});
  