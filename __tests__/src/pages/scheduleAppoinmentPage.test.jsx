import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import ScheduleAppointmentPage from "../../../src/pages/patient/schedule-appoinment";

describe("App", () => {
  it("renders App unchanged", () => {
    const { container } = render(<App Component={ScheduleAppointmentPage} />);
    expect(container).toMatchSnapshot();
  });
});
