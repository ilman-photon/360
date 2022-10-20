import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import ScheduleAppointmentConfirmationPage, {
  ModalConfirmSchedule,
} from "../../../src/pages/patient/schedule-appointment-confirmation";
import Cookies from "universal-cookie";
import { createMatchMedia } from "../../../__mocks__/commonSteps";
jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get() {
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});

describe("App", () => {
  it("renders Confirmation screen desktop", () => {
    window.matchMedia = createMatchMedia("1920px");
    Cookies.result = false;
    const container = render(
      <App Component={ScheduleAppointmentConfirmationPage} />
    );
    expect(container.getByText("Purpose of Visit")).toBeInTheDocument();
  });
  it("renders Confirmation screen mobile", () => {
    window.matchMedia = createMatchMedia("700px");
    Cookies.result = true;
    const container = render(
      <App Component={ScheduleAppointmentConfirmationPage} />
    );
    expect(container.getByText("Purpose of Visit")).toBeInTheDocument();
  });
});
