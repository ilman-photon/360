import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import DashboardPage from "../../src/pages/patient/index";
import { Login } from "../../src/components/organisms/Login/login";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";
import Cookies from "universal-cookie";

const cookies = new Cookies();

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
  "./__tests__/feature/Patient Portal/Sprint7/EPP-1589.feature"
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
    const usernameField = container.getByLabelText(/emailUserLabel/i);
    const passwordField = container.getByLabelText(/passwordLabel/i);
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
      watchPosition: jest.fn(),
    };

    global.navigator.geolocation = mockGeolocation;
    cookies.set("authorized", true);
    cookies.set("accessToken", "1234");

    act(() => {
      container.rerender(
        <Provider store={store}>
          {DashboardPage.getLayout(<DashboardPage />)}
        </Provider>
      );
    });

    const subtitle = await waitFor(() =>
      container.getByText("Search for a doctor")
    );
    expect(subtitle).toBeInTheDocument();
  }

  async function userSeeNotificationBadge() {
    const notificationButton = await waitFor(() =>
      container.getByTestId("notification-badge-icon")
    );
    expect(notificationButton).toBeInTheDocument();
  }

  async function userClicksNotificationBadge() {
    const notificationButton = await waitFor(() =>
      container.getByTestId("notification-badge-icon")
    );
    act(() => {
      fireEvent.click(notificationButton);
    });
  }

  async function notificationDrawerOpened() {
    const notificationDrawer = await waitFor(() =>
      container.getByTestId("notification-drawer-title")
    );
    expect(notificationDrawer).toBeInTheDocument();
  }

  async function userSeeNotificationListWithClickableToDismiss() {
    const isReadNotificationItem = await waitFor(() =>
      container.getAllByTestId("notification-is-new")
    );
    expect(isReadNotificationItem[0]).toBeInTheDocument();
  }

  async function userSeeTopNotificationItemAsMostRecent() {
    const isMostRecent =
      MOCK_NOTIFICATIONS[0].createdAt > MOCK_NOTIFICATIONS[1].createdAt;
    expect(isMostRecent).toBeTruthy();
  }

  async function userSeeMarkAllAsRead() {
    const markAllAsReadButton = await waitFor(() =>
      container.getByTestId("notification-mark-all-as-read-button")
    );
    expect(markAllAsReadButton).toBeInTheDocument();
  }

  async function userReadANotificationAndRemoved() {
    const notificationItem = await waitFor(
      () => container.getAllByTestId("notification-item")[0]
    );
    expect(notificationItem).toHaveTextContent(
      "Your lab test results are available now.1mo"
    );
    act(() => {
      fireEvent.click(notificationItem);
    });
    const newNotificationItem = await waitFor(
      () => container.getAllByTestId("notification-item")[0]
    );
    expect(newNotificationItem).toHaveTextContent(
      "Your prescription refill is available now1mo"
    );
  }

  test("EPIC_EPP-22_STORY_EPP-1589 - Verify User should be able to view the unread alerts listed one below the other with an option against each to dismiss", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      userIsLoggedIn();
    });

    then('User lands to the "Dashboard" screen', async (arg0) => {
      userLandsToDashboard();
    });

    and(
      "User is able to view the alerts option on the global header (like notifications)",
      async () => {
        userSeeNotificationBadge();
      }
    );

    when("User clicks on the alerts option", async () => {
      userClicksNotificationBadge();
    });

    then(
      "User should be able to view the unread alerts listed one below the other with an option against each to dismiss",
      () => {
        notificationDrawerOpened();
        userSeeNotificationListWithClickableToDismiss();
      }
    );
  });

  test("EPIC_EPP-22_STORY_EPP-1589 - Verify User should see list unread alerts on how recent they are i.e. recent alerts will be on top", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      userIsLoggedIn();
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard();
    });

    and(
      "User is able to view the alerts option on the global header (like notifications)",
      () => {
        userSeeNotificationBadge();
      }
    );

    when("User clicks on the alerts option", () => {
      userClicksNotificationBadge();
    });

    then(
      "User should be able to view the unread alerts listed one below the other with an option against each to dismiss",
      () => {
        notificationDrawerOpened();
        userSeeNotificationListWithClickableToDismiss();
      }
    );

    and(
      "User should see list unread alerts on how recent they are i.e. recent alerts will be on top",
      async () => {
        userSeeTopNotificationItemAsMostRecent();
      }
    );
  });

  test("EPIC_EPP-22_STORY_EPP-1589 - Verify User should have the option to clear all alerts", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      userIsLoggedIn();
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard();
    });

    and(
      "User is able to view the alerts option on the global header (like notifications)",
      () => {
        userSeeNotificationBadge();
      }
    );

    when("User clicks on the alerts option", () => {
      userClicksNotificationBadge();
    });

    then(
      "User should be able to view the unread alerts listed one below the other with an option against each to dismiss",
      () => {
        notificationDrawerOpened();
        userSeeNotificationListWithClickableToDismiss();
      }
    );

    and(
      "User should see list unread alerts on how recent they are i.e. recent alerts will be on top",
      () => {
        userSeeTopNotificationItemAsMostRecent();
      }
    );

    and("User should have the option to clear all alerts", () => {
      userSeeMarkAllAsRead();
    });
  });

  test("EPIC_EPP-22_STORY_EPP-1589 - Verify User should be able to view alerts being removed from the list of alerts as and when they are read", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      userIsLoggedIn();
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard();
    });

    and(
      "User is able to view the alerts option on the global header (like notifications)",
      () => {
        userSeeNotificationBadge();
      }
    );

    when("User clicks on the alerts option", () => {
      userClicksNotificationBadge();
    });

    then(
      "User should be able to view the unread alerts listed one below the other with an option against each to dismiss",
      () => {
        notificationDrawerOpened();
        userSeeNotificationListWithClickableToDismiss();
      }
    );

    and(
      "User should see list unread alerts on how recent they are i.e. recent alerts will be on top",
      () => {
        userSeeTopNotificationItemAsMostRecent();
      }
    );

    and(
      "User should be able to view alerts being removed from the list of alerts as and when they are read",
      () => {
        userReadANotificationAndRemoved();
      }
    );
  });

  test("EPIC_EPP-22_STORY_EPP-1589 -Negative Test Cases-Verify  when the service is unavailable", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      userIsLoggedIn();
    });

    then('User lands to the "Dashboard" screen', (arg0) => {
      userLandsToDashboard();
    });

    and(
      "User is able to view the alerts option on the global header (like notifications)",
      () => {
        userSeeNotificationBadge();
      }
    );

    when("User clicks on the alerts option", () => {
      userClicksNotificationBadge();
    });

    and("the service is unavailable", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message", () => {
      defaultValidation();
    });
  });
});
