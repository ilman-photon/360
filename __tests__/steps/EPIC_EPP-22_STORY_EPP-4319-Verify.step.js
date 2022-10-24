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

const cookies = new Cookies()

const feature = loadFeature(
	"./__tests__/feature/Patient Portal/Sprint7/EPP-4319.feature"
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

    });

    and('User should get Alerts to be triggered', () => {

    });

    and('there is an upcoming appointment for 3 days before', (arg0) => {

    });

    then('User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment in 3 days"', (arg0, arg1) => {

    });

    and('Redirection to that particular appointment', () => {

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

    });

    and('User should get Alerts to be triggered', () => {

    });

    and('there is an upcoming appointment for 1 day before', (arg0) => {

    });

    then('User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment tomorrow."', (arg0) => {

    });

    and('Redirection to that particular appointment', () => {

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

    });

    and('test/ lab result is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <test/ lab name> test results are available now"', (arg0) => {

    });

    and('Redirection to that particular test/ lab result', () => {

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

    });

    and('a prescription refill is available for download', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your prescription refill is available now"', (arg0) => {

    });

    and('Redirection to that particular prescription', () => {

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

    });

    and('a new message is received', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "You have received a new message from <Provider name>"', (arg0) => {

    });

    and('Redirection to that particular message', () => {

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

    });

    and('a visit summary is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your visit summary for your appointment on <appointment date> is available now."', (arg0) => {

    });

    and('Redirection to that particular past appointment', () => {

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

    });

    and('a new outstanding invoice is generated', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "There is a new outstanding invoice"', (arg0) => {

    });

    and('Redirection to that particular invoice', () => {

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

    });

    and('a new glass or lens prescription is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "You have your <Glasses/ Contact Lens> prescription available now."', (arg0) => {

    });

    and('Redirection to that particular prescription', () => {

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

    });

    and('a new medication prescription is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <medication name> prescription is now available. Frequency ?"', (arg0) => {

    });

    and('Redirection to that particular prescription', () => {

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

    });

    and('a contact lens or glasses is available for pick up', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <Contact Lens/ Glasses> are available for pickup."', (arg0) => {

    });

    and('Where to redirect ? - Redirect to practise address like Clarkson eyecare', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular appointment for 3 days before', ({ given, when, then, and }) => {
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

    });

    and('User should get Alerts to be triggered', () => {

    });

    and('there is an upcoming appointment for 3 days before', (arg0) => {

    });

    then('User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment in 3 days"', (arg0, arg1) => {

    });

    and('Redirection to that particular appointment', () => {

    });

    when('user clicks on F12 on the console', (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular appointment for 1 days before', ({ given, when, then, and }) => {
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

    });

    and('User should get Alerts to be triggered', () => {

    });

    and('there is an upcoming appointment for 1 day before', (arg0) => {

    });

    then('User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment tomorrow."', (arg0) => {

    });

    and('Redirection to that particular appointment', () => {

    });

    when('user clicks on F12 on the console', (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular test/ lab result', ({ given, when, then, and }) => {
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

    });

    and('test/ lab result is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <test/ lab name> test results are available now"', (arg0) => {

    });

    and('Redirection to that particular test/ lab result', () => {

    });

    when('user clicks on F12 on the console', (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular refill prescription', ({ given, when, then, and }) => {
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

    });

    and('a prescription refill is available for download', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your prescription refill is available now"', (arg0) => {

    });

    and('Redirection to that particular prescription refill', () => {

    });

    when('user clicks on F12 on the console', (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular message', ({ given, when, then, and }) => {
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

    });

    and('a new message is received', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "You have received a new message from <Provider name>"', (arg0) => {

    });

    and('Redirection to that particular message', () => {

    });

    when('user clicks on F12 on the console', (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
});

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular visit summary prescription', ({ given, when, then, and }) => {
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

    });

    and('a visit summary is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your visit summary for your appointment on <appointment date> is available now."', (arg0) => {

    });

    and('Redirection to that particular prescription', () => {

    });

    when('user clicks on F12 on the console', (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular invoice', ({ given, when, then, and }) => {
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

    });

    and('a new outstanding invoice is generated', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "There is a new outstanding invoice"', (arg0) => {

    });

    and('Redirection to that particular invoice', () => {

    });

    when('user clicks on F12 on the console', (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
});

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular glass or lens prescription', ({ given, when, then, and }) => {
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

    });

    and('a new glass or lens prescription is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "You have your <Glasses/ Contact Lens> prescription available now."', (arg0) => {

    });

    and('Redirection to that particular prescription', () => {

    });

    when('user clicks on F12 on the console', (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
});

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to that particular medication prescription', ({ given, when, then, and }) => {
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

    });

    and('a new medication prescription is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <medication name> prescription is now available. Frequency ?"', (arg0) => {

    });

    and('Redirection to that particular prescription', () => {

    });

    when('user clicks on F12 on the console', (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
});

  test('EPIC_EPP-22_STORY_EPP-4319 - Verify User should not see the any errors script when user clicks F12 on the console - when user is directed to practise address like Clarkson eyecare', ({ given, when, then, and }) => {
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

    });

    and('a contact lens or glasses is available for pick up', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <Contact Lens/ Glasses> are available for pickup."', (arg0) => {

    });

    and('Where to redirect ? - Redirect to practise address like Clarkson eyecare', () => {

    });

    when('user clicks on F12 on the console', (arg0) => {

    });

    then('user should not to see any errors script', () => {

    });
});

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular appointment for 3 days before', ({ given, when, then, and }) => {
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

    });

    and('User should get Alerts to be triggered', () => {

    });

    and('there is an upcoming appointment for 3 days before', (arg0) => {

    });

    then('User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment in 3 days"', (arg0, arg1) => {

    });

    and('the internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular appointment for 1 days before', ({ given, when, then, and }) => {
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

    });

    and('User should get Alerts to be triggered', () => {

    });

    and('there is an upcoming appointment for 1 day before', (arg0) => {

    });

    then('User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment tomorrow."', (arg0) => {

    });

    and('the internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular test/ lab result', ({ given, when, then, and }) => {
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

    });

    and('test/ lab result is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <test/ lab name> test results are available now"', (arg0) => {

    });

    and('the internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular refill prescription', ({ given, when, then, and }) => {
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

    });

    and('a prescription refill is available for download', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your prescription refill is available now"', (arg0) => {

    });

    and('the internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular message', ({ given, when, then, and }) => {
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

    });

    and('a new message is received', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "You have received a new message from <Provider name>"', (arg0) => {

    });

    and('the internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular visit summary prescription', ({ given, when, then, and }) => {
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

    });

    and('a visit summary is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your visit summary for your appointment on <appointment date> is available now."', (arg0) => {

    });

    and('the internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular invoice', ({ given, when, then, and }) => {
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

    });

    and('a new outstanding invoice is generated', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "There is a new outstanding invoice"', (arg0) => {

    });

    and('the internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular glass or lens prescription', ({ given, when, then, and }) => {
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

    });

    and('a new glass or lens prescription is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "You have your <Glasses/ Contact Lens> prescription available now."', (arg0) => {

    });

    and('the internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to that particular medication prescription', ({ given, when, then, and }) => {
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

    });

    and('a new medication prescription is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <medication name> prescription is now available. Frequency ?"', (arg0) => {

    });

    and('the internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when user is directed to practise address like Clarkson eyecare', ({ given, when, then, and }) => {
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

    });

    and('a contact lens or glasses is available for pick up', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <Contact Lens/ Glasses> are available for pickup."', (arg0) => {

    });

    and('the internet service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular appointment for 3 days before', ({ given, when, then, and }) => {
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

    });

    and('User should get Alerts to be triggered', () => {

    });

    and('there is an upcoming appointment for 3 days before', (arg0) => {

    });

    then('User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment in 3 days"', (arg0, arg1) => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular appointment for 1 days before', ({ given, when, then, and }) => {
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

    });

    and('User should get Alerts to be triggered', () => {

    });

    and('there is an upcoming appointment for 1 day before', (arg0) => {

    });

    then('User should be able to see the alert verbiage as "You have an <purpose of visit/ test/ procedure> appointment tomorrow."', (arg0) => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular test/ lab result', ({ given, when, then, and }) => {
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

    });

    and('test/ lab result is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <test/ lab name> test results are available now"', (arg0) => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular refill prescription', ({ given, when, then, and }) => {
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

    });

    and('a prescription refill is available for download', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your prescription refill is available now"', (arg0) => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular message', ({ given, when, then, and }) => {
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

    });

    and('a new message is received', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "You have received a new message from <Provider name>"', (arg0) => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular visit summary prescription', ({ given, when, then, and }) => {
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

    });

    and('a visit summary is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your visit summary for your appointment on <appointment date> is available now."', (arg0) => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular invoice', ({ given, when, then, and }) => {
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

    });

    and('a new outstanding invoice is generated', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "There is a new outstanding invoice"', (arg0) => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular glass or lens prescription', ({ given, when, then, and }) => {
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

    });

    and('a new glass or lens prescription is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "You have your <Glasses/ Contact Lens> prescription available now."', (arg0) => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to that particular medication prescription', ({ given, when, then, and }) => {
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

    });

    and('a new medication prescription is available', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <medication name> prescription is now available. Frequency ?"', (arg0) => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });

  test('EPIC_EPP-22_STORY_EPP-4319 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when user is directed to practise address like Clarkson eyecare', ({ given, when, then, and }) => {
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

    });

    and('a contact lens or glasses is available for pick up', () => {

    });

    and('User should get Alerts to be triggered', () => {

    });

    then('User should be able to see the alert verbiage as "Your <Contact Lens/ Glasses> are available for pickup."', (arg0) => {

    });

    and('the service is unavailable', () => {

    });

    then('user should see the appropriate error message', () => {

    });
  });
})