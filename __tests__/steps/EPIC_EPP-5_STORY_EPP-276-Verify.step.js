import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import SessionExpiredModal from "../../src/components/organisms/SessionExpiredModal/sessionExpiredModal";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Cookies from "universal-cookie";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-276.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

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

defineFeature(feature, (test) => {
  let props, container;

  beforeEach(() => {
    props = {
      timeout: undefined,
      promptTimeout: undefined,
      element: undefined,
      events: undefined,
      timers: undefined,
      immediateEvents: undefined,
      onPrompt: undefined,
      onActive: undefined,
      onAction: undefined,
      onMessage: undefined,
      debounce: undefined,
      throttle: undefined,
      eventsThrottle: undefined,
      startOnMount: undefined,
      startManually: undefined,
      stopOnIdle: undefined,
      capture: undefined,
      passive: undefined,
      crossTab: undefined,
      name: undefined,
      syncTimers: undefined,
      leaderElection: undefined,
    };
  });

  let onLoggedOff = jest.fn();
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
  const validateText = (arg0) => {
    expect(container.getByText(arg0)).toBeInTheDocument();
  };

  test("EPIC_EPP-3_STORY_EPP-276 - Verify that  User should be prompted regarding session time out.", ({
    given,
    when,
    and,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    when("user lands onto “Patient Login” screen", () => {
      defaultValidation();
    });

    when(/^user is idle for (\d+) mins$/, (arg0) => {
      defaultValidation();
    });

    then("user should be prompted regarding session time out.", async () => {
      container = renderWithProviders(
        <SessionExpiredModal />
      );

      await waitFor(() =>
        container.getByText(
          /Your session is about to time-out. You will be logged out in /i
        )
      );
    });

    then(
      /^user should validate the message “Your session is about to time-out. You will be logged out in (\d+) seconds”$/,
      (arg0) => {
        validateText(
          /Your session is about to time-out. You will be logged out in 60 seconds/i
        );
      }
    );
  });

  test("EPIC_EPP-3_STORY_EPP-276 - Verify that User should be prompted regarding session time out with an option to ‘Stay logged in’ and ‘Log off’", ({
    given,
    when,
    and,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    when("user lands onto “Patient Login” screen", () => {
      defaultValidation();
    });

    when(/^user is idle for (\d+) mins$/, (arg0) => {
      defaultValidation();
    });

    then("user should be prompted regarding session time out.", async () => {
      container = renderWithProviders(
        <SessionExpiredModal />
      );

      await waitFor(() =>
        container.getByText(
          /Your session is about to time-out. You will be logged out in /i
        )
      );
    });

    then(
      /^user should validate the message “Your session is about to time-out. You will be logged out in (\d+) seconds”$/,
      (arg0) => {
        validateText(
          /Your session is about to time-out. You will be logged out in 60 seconds/i
        );
      }
    );

    then(
      /^user should validate the message with the option (.*) and (.*) Button$/,
      (arg0, arg1) => {
        validateText(/Stay logged in/i);
        validateText(/Log off/i);
      }
    );
  });

  test("EPIC_EPP-3_STORY_EPP-276 - Verify that User should be logged out of the patient portal and land on Patient login page", ({
    when,
    and,
    then,
  }) => {
    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    when("user lands onto “Patient Login” screen", () => {
      defaultValidation();
    });

    when(/^user is idle for (\d+) mins$/, (arg0) => {
      defaultValidation();
    });

    then("user should be prompted regarding session time out.", async () => {
      container = renderWithProviders(
        <SessionExpiredModal />
      );

      await waitFor(() =>
        container.getByText(
          /Your session is about to time-out. You will be logged out in /i
        )
      );
    });

    then(
      /^user should validate the message “Your session is about to time-out. You will be logged out in (\d+) seconds”$/,
      (arg0) => {
        validateText(
          /Your session is about to time-out. You will be logged out in 60 seconds/i
        );
      }
    );

    then(
      /^user should validate the message with the option (.*) and (.*) Button$/,
      (arg0, arg1) => {
        validateText(/Stay logged in/i);
        validateText(/Log off/i);
      }
    );

    when(/^user clicks the (.*) Button$/, async (arg0) => {
      const mock = new MockAdapter(axios);
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      const button = container.getByText(/Log off/i);
      fireEvent.click(button);
    });

    then("validate that system should cancel the user’s session", () => {
      defaultValidation();
    });

    and(
      "User should be logged out of the patient portal and land on Patient login page",
      () => {
        defaultValidation();
      }
    );
  });
});
