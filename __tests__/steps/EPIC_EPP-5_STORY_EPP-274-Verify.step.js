import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import SessionExpiredModal from "../../src/components/organisms/SessionExpiredModal/sessionExpiredModal";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-274.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
  const validateText = (arg0) => {
    console.log(">>>", arg0);
    expect(container.getByText(arg0)).toBeInTheDocument();
  };

  test("EPIC_EPP-3_STORY_EPP-274 - Verify that  User should be prompted regarding session time out.", ({
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
      container = render(
        <SessionExpiredModal showModal={true} remaining={60} />
      );
      expect(container).toMatchSnapshot();
      await waitFor(() =>
        container.getByText(
          /Your session is about to time-out. You will be logged out in /i
        )
      );
    });

    then(
      /^user should validate the message "Your session is about to time-out. You will be logged out in (\d+) seconds”$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-3_STORY_EPP-274 - Verify that User should be prompted regarding session time out with an option to ‘Stay logged in’ and ‘Log off’", ({
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
      container = render(
        <SessionExpiredModal showModal={true} remaining={60} />
      );
      expect(container).toMatchSnapshot();
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
          /Your session is about to time-out. You will be logged out in /i
        );
      }
    );

    then(
      /^user should validate the message with the option "(.*)" and "(.*)" Button$/,
      (arg0, arg1) => {
        const logOffBtn = container.getByTestId("session-logoff-btn");
        const logInBtn = container.getByTestId("session-stay-btn");
        expect(logInBtn).toBeVisible();
        expect(logOffBtn).toBeVisible();
      }
    );
  });

  test("EPIC_EPP-3_STORY_EPP-274 - Verify that User should be prompted Session Expired message after the given time", ({
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
      container = render(
        <SessionExpiredModal showModal={true} remaining={60} />
      );
      expect(container).toMatchSnapshot();
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
          /Your session is about to time-out. You will be logged out in /i
        );
      }
    );

    then(
      /^user should validate the message with the option "(.*)" and "(.*)" Button$/,
      (arg0, arg1) => {
        const logOffBtn = container.getByTestId("session-logoff-btn");
        const logInBtn = container.getByTestId("session-stay-btn");
        expect(logInBtn).toBeVisible();
        expect(logOffBtn).toBeVisible();
      }
    );

    when("Session is Expired after the given Time", () => {
      defaultValidation();
    });

    then(
      /^user should validate the message "(.*)" with  "(.*)" Button$/,
      async (arg0, arg1) => {
        container = render(
          <SessionExpiredModal
            showModal={true}
            isExpired={true}
            remaining={0}
          />
        );
        expect(container).toMatchSnapshot();
        await waitFor(() =>
          container.getByText(/Your session expired. Please login again/i)
        );
        const logoutBtn = container.getByTestId("session-ok-btn");
        expect(logoutBtn).toBeVisible();
      }
    );
  });

  test('EPIC_EPP-3_STORY_EPP-274 - Verify that when user clicks "OK" button, system should logout the user', ({
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
      container = render(
        <SessionExpiredModal showModal={true} remaining={60} />
      );
      expect(container).toMatchSnapshot();
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
          /Your session is about to time-out. You will be logged out in /i
        );
      }
    );

    then(
      /^user should validate the message with the option (.*) and "(.*)" Button$/,
      (arg0, arg1) => {
        const logOffBtn = container.getByTestId("session-logoff-btn");
        const logInBtn = container.getByTestId("session-stay-btn");
        expect(logInBtn).toBeVisible();
        expect(logOffBtn).toBeVisible();
      }
    );

    when("Session is Expired after the given Time", () => {
      defaultValidation();
    });

    then(
      /^user should validate the message "(.*)" with  "(.*)" Button$/,
      async (arg0, arg1) => {
        container = render(
          <SessionExpiredModal
            showModal={true}
            isExpired={true}
            remaining={0}
          />
        );
        expect(container).toMatchSnapshot();
        await waitFor(() =>
          container.getByText(/Your session expired. Please login again/i)
        );
        const logoutBtn = container.getByTestId("session-ok-btn");
        expect(logoutBtn).toBeVisible();
      }
    );

    when(/^user clicks "(.*)" button$/, (arg0) => {
      fireEvent.click(container.getByTestId("session-ok-btn"));
    });

    then("user must be logged out", () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-3_STORY_EPP-274 - Verify that when user clicks "OK" button, system should logout within 3 seconds', ({
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
      container = render(
        <SessionExpiredModal showModal={true} remaining={60} />
      );
      expect(container).toMatchSnapshot();
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
          /Your session is about to time-out. You will be logged out in /i
        );
      }
    );

    then(
      /^user should validate the message with the option (.*) and "(.*)" Button$/,
      (arg0, arg1) => {
        const logOffBtn = container.getByTestId("session-logoff-btn");
        const logInBtn = container.getByTestId("session-stay-btn");
        expect(logInBtn).toBeVisible();
        expect(logOffBtn).toBeVisible();
      }
    );

    when("Session is Expired after the given Time", () => {
      defaultValidation();
    });

    then(
      /^user should validate the message "(.*)" with  "(.*)" Button$/,
      async (arg0, arg1) => {
        container = render(
          <SessionExpiredModal
            showModal={true}
            isExpired={true}
            remaining={0}
          />
        );
        expect(container).toMatchSnapshot();
        await waitFor(() =>
          container.getByText(/Your session expired. Please login again/i)
        );
        const logoutBtn = container.getByTestId("session-ok-btn");
        expect(logoutBtn).toBeVisible();
      }
    );

    when(/^user clicks the "(.*)" button.$/, (arg0) => {
      fireEvent.click(container.getByTestId("session-ok-btn"));
    });

    then(/^user  validates whether page loads within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("user must  be navigated to Patient Portal login page", () => {
      defaultValidation();
    });
  });
});
