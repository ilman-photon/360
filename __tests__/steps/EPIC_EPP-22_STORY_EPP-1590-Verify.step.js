import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import DashboardPage from "../../src/pages/patient/index";
import { Login } from "../../src/components/organisms/Login/login";
import store from "../../src/store/store";
import constants from "../../src/utils/constants";
import Cookies from "universal-cookie";

const cookies = new Cookies()

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

  async function notificationDrawerOpened() {
    const notificationDrawer = await waitFor(() => container.getByTestId("notification-drawer-title"))
    expect(notificationDrawer).toBeInTheDocument()
  }

  async function userSeeNotificationType(type) {
    let notificationItem;
    switch (type) {
      case "appointment":
        notificationItem = await waitFor(() => container.getByText("You have an eye test appointment in 3 days"))
        break
      case "test-lab-result":
        notificationItem = await waitFor(() => container.getByText("You lab test test results are available now"))
        break
      case "visit-summary":
        notificationItem = await waitFor(() => container.getByText("Your visit summary for your appointment on Tuesday, May 15 is available now."))
        break
      case "prescription-refill":
        notificationItem = await waitFor(() => container.getByText("Your prescription refill is available now"))
        break
      case "message":
        notificationItem = await waitFor(() => container.getByText("You have received a new message from John Roe, O.D."))
        break
      case "prescription-glasses":
        notificationItem = await waitFor(() => container.getByText("You have your glasses prescription available now."))
        break
      case "prescription-contact":
        notificationItem = await waitFor(() => container.getByText("You have your contact lens prescription available now."))
        break
      case "prescription-aspirin":
        notificationItem = await waitFor(() => container.getByText("Your Aspirin prescription is now available."))
        break
      case "contact-lens":
        notificationItem = await waitFor(() => container.getByText("Your Contact Lens are available for pickup."))
        break
      case "glasses":
        notificationItem = await waitFor(() => container.getByText("Your Glasses are available for pickup."))
        break
      }
    expect(notificationItem).toBeInTheDocument()
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
      notificationDrawerOpened()
      userSeeNotificationType("appointment")
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

    then('User should be able to view test/ lab result is available types of alerts', (table) => {
      notificationDrawerOpened()
      userSeeNotificationType("test-lab-result")
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
      notificationDrawerOpened()
      userSeeNotificationType("visit-summary")
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
      notificationDrawerOpened()
      userSeeNotificationType("prescription-refill")
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
      notificationDrawerOpened()
      userSeeNotificationType("message")
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

    then('User should be able to view new glass or lens prescription is available types of alerts', (table) => {
      notificationDrawerOpened()
      userSeeNotificationType("prescription-glasses")
      userSeeNotificationType("prescription-contact")
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
      notificationDrawerOpened()
      userSeeNotificationType("prescription-aspirin")
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

    then('User should be able to view contact lens or glasses is available for pick up types of alerts', (table) => {
      notificationDrawerOpened()
      userSeeNotificationType("glasses")
      userSeeNotificationType("contact-lens")
    });
  });
})