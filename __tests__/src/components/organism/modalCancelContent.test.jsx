import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalCancelContent from "../../../../src/components/organisms/ScheduleAppointment/ModalCancelScheduling/ModalCancelContent";

describe("App", () => {
    let container;
    beforeEach(() => {
      container = render(<ModalCancelContent />);
    });
  
    it("ModalCancelContent render", () => {
        expect(container).toMatchSnapshot();
    });
    
});
  