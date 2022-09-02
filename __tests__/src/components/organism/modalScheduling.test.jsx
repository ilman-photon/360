import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalScheduling from "../../../../src/components/organisms/ScheduleAppointment/ModalScheduling/modalScheduling";

describe("App", () => {
    let container;
    beforeEach(() => {
      container = render(<ModalScheduling />);
    });
  
    it("ModalScheduling render", () => {
        expect(container).toMatchSnapshot();
    });
    
  });
  
