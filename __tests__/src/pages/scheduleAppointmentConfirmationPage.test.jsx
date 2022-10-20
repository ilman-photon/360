import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import ScheduleAppointmentConfirmationPage from "../../../src/pages/patient/schedule-appointment-confirmation";

describe("App", () => {
  it("renders App unchanged", async () => {
    const container = render(
      <App Component={ScheduleAppointmentConfirmationPage} />
    );
    await waitFor(() => container.getByText("You’re Scheduled!"));
    expect(container.getByText("You’re Scheduled!")).toBeInTheDocument();
  });
});
