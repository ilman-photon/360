import Appointments from "../../../src/pages/patient/appointments";
import "@testing-library/jest-dom";
import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
  within,
} from "@testing-library/react";
import App from "next/app";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import Cookies from "universal-cookie";
import {
  mockAppointmentTypes,
  pastAppointmentResponse,
  upcomingResponse,
} from "../../../__mocks__/mockResponse";
import {
  createMatchMedia,
  expectPushRouter,
} from "../../../__mocks__/commonSteps";
import { TEST_ID } from "../../../src/utils/constants";

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

jest.mock("add-to-calendar-button", () => ({
  atcb_action: jest.fn(),
}));

describe("Render Appointment", () => {
  let container;
  const mock = new MockAdapter(axios);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const renderAppointmentsPage = async () => {
    act(() => {
      container = render(
        <Provider store={store}>
          {Appointments.getLayout(<Appointments />)}
        </Provider>
      );
    });
  };
  beforeEach(async () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 8, 1));
    window.matchMedia = createMatchMedia("1440px");
    Cookies.result = { authorized: true };
    mock
      .onGet(new RegExp(`/ecp/appointments/${userData?.patientId}/upcoming`))
      .reply(200, upcomingResponse);

    mock
      .onGet(`/ecp/appointments/${userData?.patientId}/history`)
      .reply(200, pastAppointmentResponse);
    mock
      .onGet(`/ecp/appointments/appointment-types`)
      .reply(200, mockAppointmentTypes);

    await renderAppointmentsPage();
    await waitFor(() => container.getByText(/Upcoming Appointments/i));
    await waitFor(() => container.getByText(/Past Appointments/i));
  });

  afterAll(() => {
    mock.reset();
  });

  test("is Appointment page render desktop", async () => {
    expect(container.getByText(/Upcoming Appointments/i)).toBeInTheDocument();
    expect(container.getByText(/Past Appointments/i)).toBeInTheDocument();
    mock
      .onPut(
        `/ecp/appointments/cancel/${upcomingResponse.entities[0]._id}/stateTransition`
      )
      .reply(200, upcomingResponse.entities[0]);

    await waitFor(() => container.getAllByTestId("CancelOutlinedIcon"));
    fireEvent.click(container.getAllByTestId("CancelOutlinedIcon")[0]);
    fireEvent.click(
      container.getByTestId(TEST_ID.CANCEL_SCHEDULE_TEST_ID.btnKeep)
    );
    await waitFor(() => container.getAllByTestId("CancelOutlinedIcon"));
    fireEvent.click(container.getAllByTestId("CancelOutlinedIcon")[0]);

    await waitFor(() =>
      container.getByLabelText("Appointment no longer needed Radio Button")
    );
    fireEvent.click(
      container.getByLabelText("Appointment no longer needed Radio Button")
    );
    fireEvent.click(
      container.getByTestId(TEST_ID.CANCEL_SCHEDULE_TEST_ID.btnCancel)
    );
    await waitFor(() => container.getAllByTestId("customModal")[0]);
    fireEvent.click(
      within(container.getAllByTestId("customModal")[0]).getByRole("button")
    );

    expect(container.getAllByTestId("CancelOutlinedIcon").length).toEqual(1);

    await waitFor(() => container.getAllByTestId("CalendarTodayIcon"));
    fireEvent.click(container.getAllByTestId("CalendarTodayIcon")[0]);
  });

  test("is Appointment page render mobile", async () => {
    window.matchMedia = createMatchMedia("900px");
    cleanup();
    await renderAppointmentsPage();
    await waitFor(() => container.getByText(/Upcoming Appointments/i));
    await waitFor(() => container.getByText(/Past Appointments/i));
    expect(container.getByText(/Upcoming Appointments/i)).toBeInTheDocument();
    expect(container.getByText(/Past Appointments/i)).toBeInTheDocument();
    expectPushRouter(
      `/patient/appointments/66c19bc9-7a87-4ead-9f8b-5599eba0b2c2/reschedule`
    );
    await waitFor(() =>
      container.getAllByTestId(
        TEST_ID.APPOINTMENTS_TEST_ID.rescheduleAppointmentButton
      )
    );
    fireEvent.click(
      container.getAllByTestId(
        TEST_ID.APPOINTMENTS_TEST_ID.rescheduleAppointmentButton
      )[0]
    );
  });

  test("is Appointment page render non login", async () => {
    window.matchMedia = createMatchMedia("900px");
    Cookies.result = false;
    expectPushRouter("/patient/login");
    cleanup();

    mock
      .onGet(new RegExp(`/ecp/appointments/${userData?.patientId}/upcoming`))
      .reply(400, upcomingResponse);

    mock
      .onGet(`/ecp/appointments/${userData?.patientId}/history`)
      .reply(400, pastAppointmentResponse);
    mock
      .onGet(`/ecp/appointments/appointment-types`)
      .reply(400, mockAppointmentTypes);
    await renderAppointmentsPage();
  });

  test("is Appointment page render desktop", async () => {
    expect(container.getByText(/Upcoming Appointments/i)).toBeInTheDocument();
    expect(container.getByText(/Past Appointments/i)).toBeInTheDocument();
    mock
      .onPut(
        `/ecp/appointments/cancel/${upcomingResponse.entities[0]._id}/stateTransition`
      )
      .reply(400, upcomingResponse.entities[0]);

    await waitFor(() => container.getAllByTestId("CancelOutlinedIcon"));
    fireEvent.click(container.getAllByTestId("CancelOutlinedIcon")[0]);
    fireEvent.click(
      container.getByTestId(TEST_ID.CANCEL_SCHEDULE_TEST_ID.btnKeep)
    );
    await waitFor(() => container.getAllByTestId("CancelOutlinedIcon"));
    fireEvent.click(container.getAllByTestId("CancelOutlinedIcon")[0]);

    await waitFor(() => container.getByLabelText("Other Radio Button"));
    fireEvent.click(container.getByLabelText("Other Radio Button"));
    fireEvent.change(
      within(container.getAllByTestId("other")[0]).getByRole("textbox"),
      { target: { value: "Testing" } }
    );
    fireEvent.click(
      container.getByTestId(TEST_ID.CANCEL_SCHEDULE_TEST_ID.btnCancel)
    );

    // await waitFor(() => container.getAllByTestId("customModal")[0]);
    // fireEvent.click(
    //   within(container.getAllByTestId("customModal")[0]).getByRole("button")
    // );
    expect(container.getAllByTestId("CancelOutlinedIcon").length).toEqual(1);
  });
});
