import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalConfirmContent from "../../../../src/components/organisms/ScheduleAppointment/ModalScheduling/modalConfirmContent";

describe("App", () => {
    let container;
    beforeEach(() => {
      container = render(<ModalConfirmContent />);
    });
  
    it("ModalConfirmContent render", () => {
        expect(container).toMatchSnapshot();
    });
    
  });
  
