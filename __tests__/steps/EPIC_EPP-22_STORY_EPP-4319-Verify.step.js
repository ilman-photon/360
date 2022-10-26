import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import DashboardPage from "../../src/pages/patient/index";
import { Login } from "../../src/components/organisms/Login/login";
import Cookies from "universal-cookie";
import { withMarkup } from "../src/utils/test-util";
import App from "../../src/pages/_app";

const cookies = new Cookies()

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint7/EPP-4319.feature"
);

const setInternetOffline = async () => {
  let goOffline = new window.Event("offline");
  act(() => {
    window.dispatchEvent(goOffline);
  });
  await waitFor(() => container.getByText(/No Internet Connection/i));
  const text = container.getByText(/No Internet Connection/i);
  expect(text).toBeInTheDocument();
}

const createData = (id, isRead, type, createdAt, data) => {
  return {
    id,
    isRead,
    type,
    createdAt,
    data,
  };
};

const MOCK_NOTIFICATIONS = [
  createData(1, true, "appointment", "09/10/2022 12:00"),
  createData(2, false, "test-result", "09/09/2022 12:00"),
  createData(3, false, "prescription-refill", "09/09/2022 12:00"),
  createData(4, false, "prescription-refill", "08/08/2022 12:00"),
  createData(5, true, "test-result", "09/09/2022 12:00"),
  createData(6, true, "prescription-refill", "09/09/2022 12:00"),
  createData(7, false, "aspirin", "09/10/2022 12:00"),
  createData(8, true, "glasses", "08/08/2022 12:00"),
  createData(9, false, "prescription-refill", "09/09/2022 12:00"),
  createData(10, true, "appointment", "09/10/2022 12:00"),
  createData(11, false, "contact-lens", "08/08/2022 12:00"),
  createData(12, true, "prescription-glasses", "09/09/2022 12:00"),
  createData(13, true, "prescription-refill", "09/09/2022 12:00"),
  createData(14, true, "prescription-contact", "09/10/2022 12:00"),
  createData(15, false, "test-result", "09/09/2022 12:00"),
  createData(16, false, "appointment", "09/10/2022 12:00"),
  createData(17, true, "prescription-aspirin", "08/08/2022 12:00"),
  createData(18, false, "appointment", "09/10/2022 12:00"),
  createData(19, true, "aspirin", "08/08/2022 12:00"),
  createData(20, false, "glasses", "09/09/2022 12:00"),
  createData(21, true, "contact-lens", "09/10/2022 12:00"),
  createData(22, false, "prescription-refill", "08/08/2022 12:00"),
  createData(23, true, "appointment", "09/10/2022 12:00"),
  createData(24, false, "prescription-glasses", "09/09/2022 12:00"),
  createData(25, false, "prescription-refill", "09/09/2022 12:00"),
  createData(26, false, "prescription-aspirin", "08/08/2022 12:00"),
  createData(27, false, "prescription-contact", "10/10/2022 12:00"),
  createData(28, true, "prescription-refill", "08/08/2022 12:00"),
  createData(29, false, "appointment", "09/10/2022 12:00"),
  createData(30, true, "message", "08/08/2022 12:00"),
  createData(31, false, "message", "09/09/2022 12:00"),
  createData(32, true, "prescription-refill", "08/08/2022 12:00"),
  createData(33, false, "appointment", "09/10/2022 12:00"),
  createData(34, true, "appointment-summary", "08/08/2022 12:00"),
  createData(35, false, "appointment-summary", "09/09/2022 12:00"),
  createData(36, true, "invoice", "08/08/2022 12:00"),
  createData(37, false, "appointment", "09/10/2022 12:00"),
  createData(38, true, "prescription-refill", "08/08/2022 12:00"),
  createData(39, false, "invoice", "10/12/2022 12:00"),
  createData(40, true, "appointment-one", "09/10/2022 12:00"),
  createData(41, false, "appointment-one", "09/10/2022 12:00"),
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_NOTIFICATIONS),
  })
);

defineFeature(feature, (test) => {
	let container;
	const mock = new MockAdapter(axios);

  const defaultValidation = () => {
		expect(true).toBeTruthy();
	};

  function userIsLoggedIn() {
    const mockOnLoginClicked = jest.fn((data, route, callback) => {
      callback({
        status: "success",
      });
    });
    act(() => {
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
    });
    const usernameField = container.getByLabelText("emailUserLabel");
    const passwordField = container.getByLabelText("passwordLabel");
    act(() => {
      fireEvent.change(usernameField, { target: { value: "wrongUserName" } });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
    });
    expect(usernameField.value).not.toEqual("validUsername");
    expect(passwordField.value).toEqual("validPassword");
    const login = container.getByRole("button", { name: /Login/i });
    fireEvent.click(login);

    const expectedResult = {
      ResponseCode: 2001,
      ResponseType: "failure",
      userType: "patient",
    };
    mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
  }

  async function userLandsToDashboard() {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };
    
    global.navigator.geolocation = mockGeolocation;
    cookies.set("authorized", true)
    cookies.set("accessToken", "1234")
    
    act(() => {
      container.rerender(<App Component={DashboardPage} />);
    });

    const subtitle = await waitFor(() => container.getByText("Search for a doctor"))
    expect(subtitle).toBeInTheDocument()
  }

  async function userSeeNotificationBadge() {
    const notificationButton = await waitFor(() => container.getByTestId("notification-badge-icon"))
    expect(notificationButton).toBeInTheDocument()
  }

  async function userClicksNotificationBadge() {
    const notificationButton = await waitFor(() => container.getByTestId("notification-badge-icon"))
    act(() => {
      fireEvent.click(notificationButton)
    })
  }

  async function notificationDrawerOpened() {
    const notificationDrawer = await waitFor(() => container.getByTestId("notification-drawer-title"))
    expect(notificationDrawer).toBeInTheDocument()
  }

  const getByType = async (type) => {
    const getAllByTextWithMarkup = withMarkup(container.getAllByText)

    switch (type) {
      case "appointment":
        return getAllByTextWithMarkup('You have an eye test appointment in 3 days.')
      case "appointment-one":
        return getAllByTextWithMarkup('You have an eye test appointment tomorrow.')
      case "test-result":
        return getAllByTextWithMarkup("You lab test test results are available now.")
      case "appointment-summary":
        return getAllByTextWithMarkup("Your visit summary for your appointment on Tuesday, May 15 is available now.")
      case "prescription-refill":
        return getAllByTextWithMarkup("Your prescription refill is available now")
      case "message":
        return getAllByTextWithMarkup("You have received a new message from John Roe, O.D.")
      case "invoice":
        return getAllByTextWithMarkup("There’s a new outstanding invoice")
      case "prescription-glasses":
        return getAllByTextWithMarkup("You have your glasses prescription available now.")
      case "prescription-contact":
        return getAllByTextWithMarkup("You have your contact lens prescription available now.")
      case "prescription-aspirin":
        return getAllByTextWithMarkup("Your Aspirin prescription is now available.")
      case "contact-lens":
        return getAllByTextWithMarkup("Your Contact Lens are available for pickup.")
      case "glasses":
        return getAllByTextWithMarkup("Your Glasses are available for pickup.")
      default:
        return []
    }
  }

  const userSeeAlertByType = async (type) => {
    const notificationDrawer = await waitFor(() => container.getByTestId("notification-drawer-title"))
    expect(notificationDrawer).toBeInTheDocument()

    await waitFor(() => container.getAllByTestId("notification-description"))

    const notificationItems = await getByType(type)
    expect(notificationItems.length).toBeTruthy()
  }

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "You have an <purpose of visit/ test/ procedure> appointment in 3 days" (3 Days before)', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    and('there is an upcoming appointment for 3 days before', (arg0) => {
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="appointment")).toBeTruthy()
    });

    then('User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment in 3 days"', async (arg0, arg1) => {
      userSeeAlertByType("appointment")
    });

    and('Redirection to that particular appointment', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage " You have an <purpose of visit/ test/ procedure> appointment tomorrow." (1 Day before)', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    and('there is an upcoming appointment for 1 day before', (arg0) => {
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="appointment-one")).toBeTruthy()
    });

    then('User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment tomorrow."', (arg0) => {
      userSeeAlertByType("appointment-one")
    });

    and('Redirection to that particular appointment', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your <test/ lab name> test results are available now"', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('test/ lab result is available', () => {
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="test-result")).toBeTruthy()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    then('User should be able to see the alert verbiage as "Your <test/ lab name> test results are available now"', (arg0) => {
      userSeeAlertByType("test-result")
    });

    and('Redirection to that particular test/ lab result', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your prescription refill is available now"', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('a prescription refill is available for download', () => {
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="prescription-refill")).toBeTruthy()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    then('User should be able to see the alert verbiage as "Your prescription refill is available now"', (arg0) => {
      userSeeAlertByType("prescription-refill")
    });

    and('Redirection to that particular prescription', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "You have received a new message from <Provider name>"', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('a new message is received', () => {
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="message")).toBeTruthy()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    then('User should be able to see the alert verbiage as "You have received a new message from <Provider name>"', (arg0) => {
      userSeeAlertByType("message")
    });

    and('Redirection to that particular message', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your visit summary for your appointment on <appointment date> is available now."', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('a visit summary is available', () => {
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="appointment-summary")).toBeTruthy()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    then('User should be able to see the alert verbiage as "Your visit summary for your appointment on <appointment date> is available now."', (arg0) => {
      userSeeAlertByType("appointment-summary")
    });

    and('Redirection to that particular past appointment', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "There is a new outstanding invoice"', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('a new outstanding invoice is generated', () => {
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="invoice")).toBeTruthy()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    then('User should be able to see the alert verbiage as "There is a new outstanding invoice"', (arg0) => {
      userSeeAlertByType("invoice")
    });

    and('Redirection to that particular invoice', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "You have your <Glasses/ Contact Lens> prescription available now."', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('a new glass or lens prescription is available', () => {
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="prescription-contact")).toBeTruthy()
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="prescription-glasses")).toBeTruthy()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    then('User should be able to see the alert verbiage as "You have your <Glasses/ Contact Lens> prescription available now."', (arg0) => {
      userSeeAlertByType("prescription-contact")
      userSeeAlertByType("prescription-glasses")
    });

    and('Redirection to that particular prescription', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your <medication name> prescription is now available. Frequency ?"', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('a new medication prescription is available', () => {
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="prescription-aspirin")).toBeTruthy()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    then('User should be able to see the alert verbiage as "Your <medication name> prescription is now available. Frequency ?"', (arg0) => {
      userSeeAlertByType("prescription-aspirin")
    });

    and('Redirection to that particular prescription', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should be able to see the alert verbiage "Your <Contact Lens/ Glasses> are available for pickup."', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('a contact lens or glasses is available for pick up', () => {
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="contact-lens")).toBeTruthy()
      expect(MOCK_NOTIFICATIONS.some(v=>v.type==="glasses")).toBeTruthy()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    then('User should be able to see the alert verbiage as "Your <Contact Lens/ Glasses> are available for pickup."', (arg0) => {
      userSeeAlertByType("contact-lens")
      userSeeAlertByType("glasses")
    });

    and('Where to redirect ? - Redirect to practise address like Clarkson eyecare', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User get Alerts to be triggered', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    and('the internet service is unavailable', async () => {
      setInternetOffline()
    });

    then('user should see the appropriate error message', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User get Alerts to be triggered', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation();
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User should see the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on any of the alert as listed', () => {
      userClicksNotificationBadge()
    });

    and('User should get Alerts to be triggered', async() => {
      notificationDrawerOpened()
    });

    and('the service is unavailable', () => {
      defaultValidation()
    });

    then('user should see the appropriate error message', () => {
      defaultValidation()
    });
  });
})