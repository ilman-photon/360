import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import DrawerScheduling from "../../../../src/components/organisms/ScheduleAppointment/ModalScheduling/drawerScheduling";

describe("App", () => {
    let container;
    beforeEach(() => {
      container = render(<DrawerScheduling />);
    });
  
    it("DrawerScheduling render", () => {
        expect(container).toMatchSnapshot();
    });
    
  });
  
