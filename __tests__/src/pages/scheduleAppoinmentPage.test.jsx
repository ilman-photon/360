import { cleanup, render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import ScheduleAppointmentPage, {
  getServerSideProps,
  PageContent,
} from "../../../src/pages/patient/schedule-appointment";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  appointmentInfo,
  mockAppointmentCreationData,
  mockUserData,
  MOCK_APPOINTMENT,
  providerInfoObj,
  rescheduleDataPostbody,
  rescheduleDataResponse,
} from "../../../__mocks__/mockResponse";
import { createMatchMedia } from "../../../__mocks__/commonSteps";
import {
  buildAppointmentData,
  editAppointmentScheduleData,
  resetAppointmentSchedule,
  setAppointmentSchedule,
} from "../../../src/store/appointment";
import { Provider, useDispatch } from "react-redux";
import store from "../../../src/store/store";
import { TEST_ID } from "../../../src/utils/constants";
import { fireEvent } from "@storybook/testing-library";
import { useRouter } from "next/router";
import { act } from "react-dom/test-utils";

const mockData = {
  providerInfo: { inHouse: false, _id: "19f1c186-37a8-46ef-a731-0a1f022be782" },
  patientInfo: {
    isEmergencyContactAvailable: false,
    contactPrefrence: false,
    _id: "7300529f-ce7e-4f8e-946b-92d498a4b03d",
    email: "test@gmail.com",
  },
  appointmentInfo: {
    appointmentType: "Clinical_Diagnosis",
    date: "2022-10-21T02:00:00.000Z",
    insuranceCarrier: [],
    id: "27b6dad9-3245-43da-9ee8-a1037b60b4e9",
    providerTemplate: { _id: "ff788e3f-4ed2-4cf8-9d6f-ab50dcf70789" },
    office: { _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078" },
    state: {
      subState: {
        subState: "CREATED",
        _id: "9c884eaf-b2e1-4d78-a035-a19124c0eb5d",
        _version: "5e81b567-0eb0-42e4-8f77-b5f84e99ce1d",
        _created: "Sep 30, 2022, 7:26:00 AM",
        _updated: "Sep 30, 2022, 7:26:00 AM",
        _createdBy: {
          _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          _links: {
            self: {
              href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            },
          },
        },
      },
      state: "CONFIRMED",
      _id: "fb6e2071-05d3-4d30-98b3-70909249d89c",
      _version: "1b5dc551-e00b-4243-8bcc-77203dd78c87",
      _created: "Sep 30, 2022, 7:26:00 AM",
      _updated: "Sep 30, 2022, 7:26:00 AM",
      _createdBy: {
        _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
        _links: {
          self: { href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f" },
        },
      },
    },
  },
};

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("App", () => {
  let container;
  const mockData = mockAppointmentCreationData[0];
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=true;accessToken=1234",
    });
    mock.onPost(`/ecp/patient/search/ecppatientid`).reply(200, {
      ecpPatientId: userData?.patientId,
    });

    mock.onPost(`/ecp/patient/userregistration`).reply(200, {
      ResponseCode: 3000,
      ResponseType: "success",
    });

    mock
      .onPost(`/ecp/appointments/savedetails`)
      .reply(200, mockAppointmentCreationData);

    mock
      .onPut(
        `/ecp/appointments/reschedule/27b6dad9-3245-43da-9ee8-a1037b60b4e9`
      )
      .reply(200, rescheduleDataResponse);

    store.dispatch(
      editAppointmentScheduleData({
        key: "appointmentInfo",
        value: { ...appointmentInfo },
      })
    );
    useRouter.mockReturnValue({
      query: {
        reschedule: true,
      },
      push: jest.fn(),
    });

    store.dispatch(
      setAppointmentSchedule({
        ...mockData,
        patient: null,
      })
    );
    store.dispatch(
      editAppointmentScheduleData({
        key: "providerInfo",
        value: { ...providerInfoObj },
      })
    );
    act(() => {
      container = render(<App Component={ScheduleAppointmentPage} />);
    });
    getServerSideProps({});
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 8, 1));
  });

  const setTextFieldValue = (container, id, value) => {
    const field = container.queryAllByLabelText(id)[0];
    fireEvent.change(field, { target: { value: value } });
    expect(field.value).toEqual(value);
  };

  const formMySelfFill = async (container) => {
    await waitFor(() =>
      container.getByTestId(TEST_ID.SCHEDULE_GUEST_TEST_ID.firstname)
    );
    setTextFieldValue(container, "First Name", "TestFirstName");
    setTextFieldValue(container, "Last Name", "TestLastName");
    setTextFieldValue(container, "Email", "patient1@gmail.com");
    setTextFieldValue(container, "Mobile Number", "(123) 123-1234");
    await waitFor(() => container.getByLabelText("Double tap to Choose date"));
    fireEvent.click(container.getByLabelText("Double tap to Choose date"));
    await waitFor(() =>
      container.getByLabelText("calendar view is open, switch to year view")
    );
    fireEvent.click(
      container.getByLabelText("calendar view is open, switch to year view")
    );
    await waitFor(() => container.getByText("1991"));
    fireEvent.click(container.getByText("1991"));
    await waitFor(() => container.getByText("8"));
    fireEvent.click(container.getByText("8"));
    await waitFor(() => container.getByText("Both"));
    fireEvent.click(container.getByText("Both"));
  };

  const formMySelfFillStep3 = async (container) => {
    await waitFor(() =>
      container.getByTestId(TEST_ID.SCHEDULE_GUEST_TEST_ID.firstname)
    );
    setTextFieldValue(container, "First Name", "TestFirstName");
    setTextFieldValue(container, "Last Name", "TestLastName");
    setTextFieldValue(container, "Email", "patient1@gmail.com");
    setTextFieldValue(container, "Mobile Number", "(123) 123-1234");
    await waitFor(() => container.getByLabelText("Double tap to Choose date"));
    fireEvent.click(container.getByLabelText("Double tap to Choose date"));
    await waitFor(() =>
      container.getByLabelText("calendar view is open, switch to year view")
    );
    fireEvent.click(
      container.getByLabelText("calendar view is open, switch to year view")
    );
    await waitFor(() => container.getByText("1991"));
    fireEvent.click(container.getByText("1991"));
    await waitFor(() => container.getByText("8"));
    fireEvent.click(container.getByText("8"));
    setTextFieldValue(container, "passwordLabel", "Admin@123");
  };

  const fillForm = async (container, formName = "myself") => {
    await waitFor(() =>
      container.getByTestId(TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.step2Button)
    );
    fireEvent.click(
      container.getByTestId(TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.step2Button)
    );
    await waitFor(() => container.getByText(formName));
    fireEvent.click(container.getByText(formName));
    await waitFor(() => container.getByText("continue"));
    fireEvent.click(container.getByText("continue"));
    await formMySelfFill(container);
  };

  it("Appointment Schedule Data No Patient info ", async () => {
    window.matchMedia = createMatchMedia("1920px");
    expect(
      container.getAllByText(/Friday, Oct 21, 2022 at 9:00/i)[0]
    ).toBeInTheDocument();
  });

  it("Appointment Schedule Data WithPatient info", async () => {
    window.matchMedia = createMatchMedia("1920px");
    const buttonNext = container.getByTestId(
      /schedule_appointment_step2_button/i
    );
    await waitFor(() => fireEvent.click(buttonNext));
  });

  it("Appointment Schedule Data WithPatient info", async () => {
    cleanup();
    await waitFor(() =>
      useRouter.mockReturnValue({
        query: {
          reschedule: false,
        },
      })
    );
    container = render(<App Component={ScheduleAppointmentPage} />);
    window.matchMedia = createMatchMedia("1920px");
    const buttonNext = container.getAllByTestId(
      /schedule_appointment_step2_button/i
    );
    await waitFor(() => fireEvent.click(buttonNext[0]));
  });

  it("Appointment Schedule Data WithPatient info non login", async () => {
    cleanup();
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=false;",
    });
    container = render(<App Component={ScheduleAppointmentPage} />);
    window.matchMedia = createMatchMedia("1920px");
    const buttonNext = container.getAllByTestId(
      /schedule_appointment_step2_button/i
    );
    await waitFor(() => fireEvent.click(buttonNext[0]));
  });

  it("Appointment Schedule Data WithPatient continue button click", async () => {
    window.matchMedia = createMatchMedia("1920px");
    cleanup();
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=false;",
    });
    container = render(<App Component={ScheduleAppointmentPage} />);

    const buttonNext = container.getAllByTestId(
      /schedule_appointment_step2_button/i
    );
    await waitFor(() => fireEvent.click(buttonNext[0]));
    const someoneElseButton = container.getByText(/someoneElse/i);

    await waitFor(() => fireEvent.click(someoneElseButton));

    await waitFor(() => formMySelfFill(container));
    const someoneElseContainer = container.getByTestId(/container-step-2/i);

    screen.debug(someoneElseContainer, undefined);
    const submitButton = container.getByTestId(/scheduleAppoinment/i);
    await waitFor(() => fireEvent.click(submitButton));
  });

  it("Appointment Schedule Data WithPatient continue button click error", async () => {
    window.matchMedia = createMatchMedia("1920px");
    cleanup();
    mock.onPost(`/ecp/patient/userregistration`).reply(400, {
      ResponseCode: 3002,
      ResponseType: "failure",
    });
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=false;",
    });
    container = render(<App Component={ScheduleAppointmentPage} />);

    const buttonNext = container.getAllByTestId(
      /schedule_appointment_step2_button/i
    );
    await waitFor(() => fireEvent.click(buttonNext[0]));
    const someoneElseButton = container.getByText(/someoneElse/i);

    await waitFor(() => fireEvent.click(someoneElseButton));

    await waitFor(() => formMySelfFill(container));
    const someoneElseContainer = container.getByTestId(/container-step-2/i);

    const submitButton = container.getByTestId(/scheduleAppoinment/i);
    await waitFor(() => fireEvent.click(submitButton));
  });

  it("Appointment Schedule Data WithPatient continue button click myself", async () => {
    window.matchMedia = createMatchMedia("1920px");
    cleanup();
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=false;",
    });
    container = render(<App Component={ScheduleAppointmentPage} />);

    const buttonNext = container.getAllByTestId(
      /schedule_appointment_step2_button/i
    );
    await waitFor(() => fireEvent.click(buttonNext[0]));
    const someoneElseButton = container.getByText(/myself/i);
    const continueButton = container.getByTestId(
      /schedule_appointment_step3_button/i
    );
    await waitFor(() => fireEvent.click(someoneElseButton));
    await waitFor(() => fireEvent.click(continueButton));
    await waitFor(() => formMySelfFillStep3(container));
    const submitButton = container.getByTestId(/scheduleAppoinment/i);
    await waitFor(() => fireEvent.click(submitButton));

    const backButton = container.getByTestId(/back-button-test/i);
    await waitFor(() => fireEvent.click(backButton));
  });

  it("Appointment Schedule Data WithPatient continue button click myself signIn click", async () => {
    window.matchMedia = createMatchMedia("1920px");
    cleanup();
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=false;",
    });
    container = render(<App Component={ScheduleAppointmentPage} />);

    const buttonNext = container.getAllByTestId(
      /schedule_appointment_step2_button/i
    );
    await waitFor(() => fireEvent.click(buttonNext[0]));
    const someoneElseButton = container.getByText(/myself/i);
    const continueButton = container.getByTestId(
      /schedule_appointment_step3_button/i
    );
    await waitFor(() => fireEvent.click(someoneElseButton));
    await waitFor(() => fireEvent.click(continueButton));
    const signClick = container.getByTestId(/signInlink/i);
    await waitFor(() => fireEvent.click(signClick));
  });

  it("back Button Click", async () => {
    window.matchMedia = createMatchMedia("1920px");
    cleanup();
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=false;",
    });
    container = render(<App Component={ScheduleAppointmentPage} />);

    const backButton = container.getByTestId(/back-button-test/i);
    await waitFor(() => fireEvent.click(backButton));
    const buttonNext = container.getAllByTestId(
      /schedule_appointment_step2_button/i
    );
    await waitFor(() => fireEvent.click(buttonNext[0]));
  });

  it("Appointment Schedule Data WithPatient continue button click continue", async () => {
    window.matchMedia = createMatchMedia("1920px");
    await waitFor(() =>
      useRouter.mockReturnValue({
        query: {
          reschedule: true,
        },
      })
    );
    await act(async () => {
      container = render(
        <Provider store={store}>
          {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
        </Provider>
      );
    });

    const buttonNext = container.getAllByTestId(
      /schedule_appointment_step2_button/i
    );
    await waitFor(() => fireEvent.click(buttonNext[0]));
    expect(
      container.getByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.DIALOG_CONFIRMATION_RESCHEDULE
          .denyBtn
      )
    );
    await waitFor(() =>
      fireEvent.click(
        container.getByTestId(
          TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.DIALOG_CONFIRMATION_RESCHEDULE
            .denyBtn
        )
      )
    );
  });

  /** ------------------------------ PAGE CONTENT ------------------------------------ */
  it("Render Page Content", async () => {
    const containerPageContent = render(<PageContent />);
    expect(
      containerPageContent.getAllByText(/Reschedule Appointment/i)[0]
    ).toBeInTheDocument();
  });
});
