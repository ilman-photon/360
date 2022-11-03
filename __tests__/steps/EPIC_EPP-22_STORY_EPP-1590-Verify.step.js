import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import DashboardPage from "../../src/pages/patient/index";
import { Login } from "../../src/components/organisms/Login/login";
import store from "../../src/store/store";
import Cookies from "universal-cookie";
import { withMarkup } from "../src/utils/test-util"

const cookies = new Cookies()

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
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_NOTIFICATIONS),
  })
);

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint7/EPP-1590.feature"
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
      container.rerender(<Provider store={store}>{DashboardPage.getLayout(<DashboardPage />)}</Provider>);
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

  const getByType = async (type) => {
    const getAllByTextWithMarkup = withMarkup(container.getAllByText)

    switch (type) {
      case "appointment":
        return getAllByTextWithMarkup('You have an eye test appointment in 3 days.')
      case "test-lab-result":
        return getAllByTextWithMarkup("Your lab test results are available now.")
      case "visit-summary":
        return getAllByTextWithMarkup("Your visit summary for your appointment on Tuesday, May 15 is available now.")
      case "prescription-refill":
        return getAllByTextWithMarkup("Your prescription refill is available now")
      case "message":
        return getAllByTextWithMarkup("You have received a new message from John Roe, O.D.")
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
    }
  }

  const userSeeAlertByType = async (type) => {
    const notificationDrawer = await waitFor(() => container.getByTestId("notification-drawer-title"))
    expect(notificationDrawer).toBeInTheDocument()

    await waitFor(() => container.getAllByTestId("notification-description"))

    const notificationItems = await getByType(type)
    expect(notificationItems.length).toBeTruthy()
  }

  test('EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view upcoming appointment types of alerts', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation()
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    then('User should be able to view upcoming appointment types of alerts', async () => {
      userSeeAlertByType("appointment")
    });
  });

  test('EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view test/ lab result is available types of alerts', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation()
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    then('User should be able to view test/ lab result is available types of alerts', async (table) => {
      userSeeAlertByType("test-lab-result")
    });
  });

  test('EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view visit summary is available types of alerts', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation()
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    then('User should be able to view visit summary is available types of alerts', (table) => {
      userSeeAlertByType("visit-summary")
    });
  });

  test('EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view prescription refill is available for download types of alerts', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation()
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    then('User should be able to view prescription refill is available for download types of alerts', (table) => {
      userSeeAlertByType("prescription-refill")
    });
  });

  test('EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view new message is received types of alerts', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation()
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    then('User should be able to view new message is received types of alerts', (table) => {
      userSeeAlertByType("message")
    });
  });

  test('EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view new glass or lens prescription is available types of alerts', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation()
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    then('User should be able to view new glass or lens prescription is available types of alerts', async (table) => {
      userSeeAlertByType("prescription-glasses")
      userSeeAlertByType("prescription-contact")
    });
  });

  test('EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view new medication prescription is available types of alerts', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation()
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    then('User should be able to view new medication prescription is available types of alerts', (table) => {
      userSeeAlertByType("prescription-aspirin")
    });
  });

  test('EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view contact lens or glasses is available for pick up types of alerts', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {
      defaultValidation()
    });

    when('User is logged in to the application', () => {
      userIsLoggedIn()
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard()
    });

    and('User is able to view the alerts option on the global header (like notifications)', () => {
      userSeeNotificationBadge()
    });

    when('User clicks on the alerts option', () => {
      userClicksNotificationBadge()
    });

    then('User should be able to view contact lens or glasses is available for pick up types of alerts', async (table) => {
      userSeeAlertByType("glasses")
      userSeeAlertByType("contact-lens")
    });
  });
})