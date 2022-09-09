import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import ScheduleAppointmentConfirmationPage from "../../../src/pages/patient/schedule-appointment-confirmation";

describe("App", () => {

  it("renders App unchanged", () => {
    const { container } = render(
      <App Component={ScheduleAppointmentConfirmationPage} />
    );
    expect(container).toMatchSnapshot();
  });
});
