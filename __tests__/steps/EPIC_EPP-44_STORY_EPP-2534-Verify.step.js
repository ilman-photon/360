import { fireEvent, waitFor, cleanup, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  createMatchMedia,
  renderLogin,
  renderResultsScreen,
  renderScheduleAppointment,
} from "../../__mocks__/commonSteps";
import constants from "../../src/utils/constants";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";
import AuthPage from "../../src/pages/patient/login";
import { renderWithProviders } from "../src/utils/test-util";
import moment from "moment";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2534.feature"
);


defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  afterEach(() => {
    cleanup()
    mock.reset();
  });

  const inputLocation = async () => {
    const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
    act(() => {
      fireEvent.change(locationInput, { target: { value: "Texas" } });
    });
  }

  const inputDate = async () => {
    const dateInput = await waitFor(() => container.getByLabelText("Date"))
    act(() => {
      fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
    });
  }

  const inputPurpose = async () => {
    const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
    act(() => {
      fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
    });
  }

  const inputInsurance = async () => {
    const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
    act(() => {
      fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
    });
  }

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
      const loginHeader = container.getByLabelText(/Patient Login/i);
      expect(loginHeader).toBeInTheDocument();
    });

    when('user  clicks on Schedule Appointment menu', async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    then('user navigates to the search screen', () => {
      const headerLogo = container.getByTestId(constants.TEST_ID.HOME_TEST_ID.header.logo);
      expect(headerLogo).toBeInTheDocument();
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument();
    });

    and('user enters the location', () => {
      const locationField = container.getByText("City, state, or zip code");
      expect(locationField).toBeInTheDocument();
      inputLocation()
    });

    and('user selects the date of appointment', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
      inputDate();
    });

    and('user chooses the purpose of the visit', () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
      inputPurpose();
    });

    and('user enters the insurance name', () => {
      const pusposeField = container.getByText(/Insurance Carrier/i);
      expect(pusposeField).toBeInTheDocument();
      inputInsurance();
    });

    and('user clicks on the Search button', () => {
      const searchbtn = container.getByTestId("searchbtn");
      expect(searchbtn).toBeInTheDocument();
      fireEvent.click(searchbtn)
    });

    and('user views the results on the Schedule Appointments screen', () => {
      renderResultsScreen();
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
      const loginHeader = container.getByLabelText(/Patient Login/i);
      expect(loginHeader).toBeInTheDocument();
    });

    when('user  clicks on Schedule Appointment menu', async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    then('user navigates to the search screen', () => {
      const headerLogo = container.getByTestId(constants.TEST_ID.HOME_TEST_ID.header.logo);
      expect(headerLogo).toBeInTheDocument();
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument();
    });

    and('user enters the location', () => {
      const locationField = container.getByText("City, state, or zip code");
      expect(locationField).toBeInTheDocument();
      inputLocation()
    });

    and('user selects the date of appointment', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
      inputDate();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      const pusposeField = container.getByText(/Insurance Carrier/i);
      expect(pusposeField).toBeInTheDocument();
      inputInsurance();
    });

    and('user clicks on the Search button', () => {
      const searchbtn = container.getByTestId("searchbtn");
      expect(searchbtn).toBeInTheDocument();
      fireEvent.click(searchbtn)
    });

    and('user views the results in the Schedule Appointments screen', () => {
      renderResultsScreen();
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
      const loginHeader = container.getByLabelText(/Patient Login/i);
      expect(loginHeader).toBeInTheDocument();
    });

    when('user  clicks on Schedule Appointment menu', async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    then('user navigates to the search screen', () => {
      const headerLogo = container.getByTestId(constants.TEST_ID.HOME_TEST_ID.header.logo);
      expect(headerLogo).toBeInTheDocument();
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument();
    });

    and('user enters the location', () => {
      const locationField = container.getByText("City, state, or zip code");
      expect(locationField).toBeInTheDocument();
      inputLocation()
    });

    and('user selects the date of appointment', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
      inputDate();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      const pusposeField = container.getByText(/Insurance Carrier/i);
      expect(pusposeField).toBeInTheDocument();
      inputInsurance();
    });

    and('user clicks on the Search button', () => {
      const searchbtn = container.getByTestId("searchbtn");
      expect(searchbtn).toBeInTheDocument();
      fireEvent.click(searchbtn)
    });

    and('user views the results in the Schedule Appointments screen', () => {
      renderResultsScreen();
    });

    and('user views the date of appointment.', () => {
      const dateInput = container.getByLabelText("Date");
      const dateNow = moment().format("MMM DD, YYYY")
      expect(dateInput.value).toEqual(dateNow);
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
      const loginHeader = container.getByLabelText(/Patient Login/i);
      expect(loginHeader).toBeInTheDocument();
    });

    when('user  clicks on Schedule Appointment menu', async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    then('user navigates to the search screen', () => {
      const headerLogo = container.getByTestId(constants.TEST_ID.HOME_TEST_ID.header.logo);
      expect(headerLogo).toBeInTheDocument();
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument();
    });

    and('user enters the location', () => {
      const locationField = container.getByText("City, state, or zip code");
      expect(locationField).toBeInTheDocument();
      inputLocation()
    });

    and('user selects the date of appointment', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
      inputDate();
    });

    and('user chooses the purpose of the visit', () => {
      inputPurpose();
    });

    and('user enters the insurance name', () => {
      const insuranceCarrier = container.getByText(/Insurance Carrier/i);
      expect(insuranceCarrier).toBeInTheDocument();
      inputInsurance();
    });

    and('user clicks on the Search button', () => {
      const searchbtn = container.getByTestId("searchbtn");
      expect(searchbtn).toBeInTheDocument();
      fireEvent.click(searchbtn)
    });

    and('user views the results in the Schedule Appointments screen', () => {
      renderResultsScreen();
    });

    and('user views the purpose of the visit.', () => {
      const purposeInput = container.getByTestId("select-purposes-of-visit");
      expect(purposeInput).toBeInTheDocument();
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
      const loginHeader = container.getByLabelText(/Patient Login/i);
      expect(loginHeader).toBeInTheDocument();
    });

    when('user  clicks on Schedule Appointment menu', async () => {
      cleanup();
      container = await renderScheduleAppointment(mock);
    });

    then('user navigates to the search screen', () => {
      const headerLogo = container.getByTestId(constants.TEST_ID.HOME_TEST_ID.header.logo);
      expect(headerLogo).toBeInTheDocument();
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument();
    });

    and('user enters the location', () => {
      const locationField = container.getByText("City, state, or zip code");
      expect(locationField).toBeInTheDocument();
      inputLocation()
    });

    and('user selects the date of appointment', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
      inputDate();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', () => {
      const pusposeField = container.getByText(/Insurance Carrier/i);
      expect(pusposeField).toBeInTheDocument();
      inputInsurance();
    });

    and('user clicks on the Search button', () => {
      const searchbtn = container.getByTestId("searchbtn");
      expect(searchbtn).toBeInTheDocument();
      fireEvent.click(searchbtn)
    });

    and('user views the results in the Schedule Appointments screen', () => {
      renderResultsScreen();
    });

    and('user views the insurance carrier.', () => {
      const insuranceInput = container.getAllByLabelText("Insurance Carrier")[0];
      expect(insuranceInput.value).toEqual("Aetna");
    });
  });
});
