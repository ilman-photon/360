import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalCancelScheduling from "../../../../src/components/organisms/ScheduleAppointment/ModalCancelScheduling/modalCancelScheduling";

describe("App", () => {
    let container;
    beforeEach(() => {
      container = render(<ModalCancelScheduling />);
    });
  
    it("ModalCancelScheduling render", () => {
        expect(container).toMatchSnapshot();
    });
    
});
  