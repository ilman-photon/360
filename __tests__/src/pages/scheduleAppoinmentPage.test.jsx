import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import ScheduleAppointmentPage from "../../../src/pages/patient/schedule-appoinment";

describe("App", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 8, 1));
  });

  it("renders App unchanged", () => {
    const { container, getByText } = render(
      <App Component={ScheduleAppointmentPage} />
    );
    expect(getByText("location")).toBeInTheDocument();
  });
});
