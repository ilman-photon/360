import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppointmentDetails from "../../../../src/components/organisms/ScheduleAppointment/appointmentDetails";

describe("App", () => {
  let container;
  beforeEach(() => {
    container = render(<AppointmentDetails />);
  });

  it("AppointmentDetails render", async () => {
    await waitFor(() => container.getByText("Edit"));
    expect(container.getByText("Edit")).toBeInTheDocument();
  });
});
