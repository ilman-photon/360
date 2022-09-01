import { render, fireEvent, waitFor } from "@testing-library/react";
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

    it("test render", async () => {
      expect(container.getByText("formTitle")).toBeInTheDocument();

      const button1 = container.getByText("myself");
      fireEvent.click(button1);

      const button2 = container.getByText("someoneElse");
      fireEvent.click(button2);

      fireEvent.click(button1);

      waitFor(() => container.getByText("continue"));
      waitFor(() => fireEvent.click(container.getByText("continue")));
      
    });
});
