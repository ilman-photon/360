import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import Cookies from "universal-cookie";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";
import { TEST_ID } from "../../src/utils/constants";
import { createMatchMedia, renderForgotPassword, clickContinueForgot, navigateToPatientPortalHome, renderAppointmentDetail } from "../../__mocks__/commonSteps";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import AuthPage from "../../src/pages/patient/login";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import { Provider } from "react-redux";
import {
  mockAppointmentTypes,
  submitFilter,
  MOCK_SUGESTION,
  MOCK_APPOINTMENT,
  MOCK_PAST,
  providerList
} from "../../__mocks__/mockResponse";
import Appointments from "../../src/pages/patient/appointments";
import InfoWindowContent from "../../src/components/organisms/Google/Maps/infoWindowContent";
const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1560.feature"
);

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");
let appointmentsContainer;

const launchURL = () => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

const userSeeScheduleScreen = () => {
  expect(container.getAllByText("Date and time")).toBeTruthy();
  expect(container.getAllByText("Insurance")).toBeTruthy();
  expect(container.getAllByText("No Insurance provided")).toBeTruthy();
  expect(container.getAllByText("Purpose of visit")).toBeTruthy();
};

defineFeature(feature, (test) => {
  beforeEach(() => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet(`/ecp/appointments/appointment-types`)
      .reply(200, mockAppointmentTypes);
    mock
      .onPut(`/ecp/appointments/available-slot?searchText=Texas`)
      .reply(200, submitFilter);
    global.navigator.geolocation = mockGeolocation;
    window.matchMedia = createMatchMedia("1920px");
  });

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test("EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
        )
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", async () => {
      await renderAppointmentDetail();
      userSeeScheduleScreen();
    });

    and("user enters the location", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
    });

    and("user chooses the purpose of the visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user enters the insurance name", () => {
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      userSeeScheduleScreen();
    });

    and("user view the location", () => {
      defaultValidation();
    });

    and("user view the date of appointment", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
    });

    then("user clicks on the edit to change the date and time", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      defaultValidation();
    });

    and("user select the purpose of the visit", () => {
      defaultValidation();
    });

    and("user enters the insurance name", () => {
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      userSeeScheduleScreen();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment and user get the error when user select the past dates.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
        )
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", async () => {
      await renderAppointmentDetail();
      userSeeScheduleScreen();
    });

    and("user enters the location", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
    });

    and("user not selecting the purpose of the visit", () => {
      defaultValidation();
    });

    and("user enters the insurance name", () => {
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      userSeeScheduleScreen();
    });

    and("user view the location", () => {
      defaultValidation();
    });

    and("user view the date of appointment", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
    });

    then("user clicks on the edit to change the date and time", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      defaultValidation();
    });

    and("user not selecting the purpose of the visit", () => {
      defaultValidation();
    });

    and("user enters the insurance name", () => {
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      userSeeScheduleScreen();
    });
  });
  test("EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment and user not providing the purpose of visit.", ({ }) => {
    defaultValidation();
  });

  test("EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment and user not providing the insurance name.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
        )
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", async () => {
      await renderAppointmentDetail();
      userSeeScheduleScreen();
    });

    and("user enters the location", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
    });

    and("user chooses the purpose of the visit", () => {
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and("user not providing the insurance name", () => {
      defaultValidation();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      userSeeScheduleScreen();
    });

    and("user view the location", () => {
      defaultValidation();
    });

    and("user view the date of appointment", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
    });

    then("user clicks on the edit to change the date and time", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      defaultValidation();
    });

    and("user select the purpose of the visit", () => {
      defaultValidation();
    });

    and("user not providing the insurance name", () => {
      defaultValidation();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      userSeeScheduleScreen();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1560 - Verify user able to change the 'Date and Time' while reviewing the appointment and user not providing the purpose of visit and  insurance name.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    and("user clicks on the Schedule your Eye Exam button", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
        )
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
      expect(
        appointmentsContainer.getByText(/Schedule New Appointment/i)
      ).toBeInTheDocument();
    });

    then("user navigates to the search screen", async () => {
      await renderAppointmentDetail();
      userSeeScheduleScreen();
    });

    and("user enters the location", () => {
      defaultValidation();
    });

    and("user selects the date of appointment", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
    });

    and("user not selecting the purpose of the visit", () => {
      defaultValidation();
    });

    and("user not providing the insurance name", () => {
      defaultValidation();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      userSeeScheduleScreen();
    });

    and("user view the location", () => {
      defaultValidation();
    });

    and("user view the date of appointment", () => {
      expect(container.getAllByText("Date and time")).toBeTruthy();
    });

    then("user clicks on the edit to change the date and time", () => {
      defaultValidation();
    });

    and("user select the date of appointment", () => {
      defaultValidation();
    });

    and("user not selecting the purpose of the visit", () => {
      defaultValidation();
    });

    and("user not providing the insurance name", () => {
      defaultValidation();
    });

    and("user clicks on the Search button", () => {
      defaultValidation();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      defaultValidation();
    });

    and("user selected a time slot", () => {
      defaultValidation();
    });

    and("user lands on the review of the appointment details", () => {
      userSeeScheduleScreen();
    });
  });
});
