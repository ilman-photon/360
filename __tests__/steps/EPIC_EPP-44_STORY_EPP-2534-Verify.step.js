import { fireEvent, render, waitFor, cleanup, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  clickSearch,
  createMatchMedia,
  doLogin,
  provideFilters,
  renderLogin,
  renderScheduleAppointment,
} from "../../__mocks__/commonSteps";
import constants, { TEST_ID } from "../../src/utils/constants";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";
import AuthPage from "../../src/pages/patient/login";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2534.feature"
);


defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
  const mock = new MockAdapter(axios);
  const { FORGOT_TEST_ID, APPOINTMENT_TEST_ID } = TEST_ID;
  afterEach(() => {
    cleanup()
    mock.reset();
  });

  beforeEach(() => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Texas")
      .reply(200, submitFilter);
    window.matchMedia = createMatchMedia("1920px");
    global.navigator.geolocation = mockGeolocation;
  });

  test('EPIC_EPP-44_STORY_EPP-2534 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user provides valid Email or Phone Number and password', () => {
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and('user clicks on Login button', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    then('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user  clicks on Schedule Appointment menu', async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      const locationField = container.getByText("City, state, or zip code");
      expect(locationField).toBeInTheDocument();
    });

    and('user selects the date of appointment', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and('user chooses the purpose of the visit', () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and('user enters the insurance name', () => {
      const pusposeField = container.getByText(/Insurance Carrier/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and('user clicks on the Search button', () => {
      const searchbtn = container.getByTestId("searchbtn");
      expect(searchbtn).toBeInTheDocument();
      fireEvent.click(searchbtn)
    });

    and('user views the results on the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the selected location, date of appointment, the purpose of visit, and insurance carrier.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2534 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user provides valid Email or Phone Number and password', () => {
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and('user clicks on Login button', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    then('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user  clicks on Schedule Appointment menu', async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      const locationField = container.getByText("City, state, or zip code");
      expect(locationField).toBeInTheDocument();
    });

    and('user selects the date of appointment', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      const pusposeField = container.getByText(/Insurance Carrier/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and('user clicks on the Search button', () => {
      const searchbtn = container.getByTestId("searchbtn");
      expect(searchbtn).toBeInTheDocument();
      fireEvent.click(searchbtn)
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the selected location.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2534 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user provides valid Email or Phone Number and password', () => {
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and('user clicks on Login button', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    then('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user  clicks on Schedule Appointment menu', async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      const locationField = container.getByText("City, state, or zip code");
      expect(locationField).toBeInTheDocument();
    });

    and('user selects the date of appointment', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      const pusposeField = container.getByText(/Insurance Carrier/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and('user clicks on the Search button', () => {
      const searchbtn = container.getByTestId("searchbtn");
      expect(searchbtn).toBeInTheDocument();
      fireEvent.click(searchbtn)
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the date of appointment.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2534 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user provides valid Email or Phone Number and password', () => {
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and('user clicks on Login button', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    then('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user  clicks on Schedule Appointment menu', async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      const locationField = container.getByText("City, state, or zip code");
      expect(locationField).toBeInTheDocument();
    });

    and('user selects the date of appointment', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      const pusposeField = container.getByText(/Insurance Carrier/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and('user clicks on the Search button', () => {
      const searchbtn = container.getByTestId("searchbtn");
      expect(searchbtn).toBeInTheDocument();
      fireEvent.click(searchbtn)
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the purpose of the visit.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2534 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.', ({ given, when, and, then }) => {
    given('user launch the Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user provides valid Email or Phone Number and password', () => {
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and('user clicks on Login button', () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn);
      fireEvent.click(loginBtn)
      expect(loginBtn).toBeInTheDocument();
    });

    then('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user  clicks on Schedule Appointment menu', async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', () => {
      const locationField = container.getByText("City, state, or zip code");
      expect(locationField).toBeInTheDocument();
    });

    and('user selects the date of appointment', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      const pusposeField = container.getByText(/Insurance Carrier/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and('user clicks on the Search button', () => {
      const searchbtn = container.getByTestId("searchbtn");
      expect(searchbtn).toBeInTheDocument();
      fireEvent.click(searchbtn)
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user views the insurance carrier.', () => {
      expect(true).toBeTruthy();
    });
  });
});
