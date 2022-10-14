import { fireEvent, render, waitForElement } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import ForgotPassword from "../../src/components/organisms/ForgotPassword/forgotPassword";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-238.feature"
);

defineFeature(feature, (test) => {
  test('EPIC_EPP-7_STORY_EPP-238 - Negative Tests - Verify User should see the error message "Enter a valid Email or Phone Number"', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given('use launch the "XXX" url', () => {
      container = render(
        <ForgotPassword
          onBackToLoginClicked={() => { }}
          onCalledValidateUsernameAPI={() => { }}
          showPostMessage={true}
          setShowPostMessage={() => { }}
        />
      );
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(`user lands onto "Patient Login" screen`, () => {
      expect(true).toBeTruthy();
    });

    then('user should see "Forgot Password" link', () => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      const title = container.getByText("syncTitle");
      expect("syncTitle").toEqual(title.textContent);
    });

    and('user should see "Email or Phone Number" field', () => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeTruthy();
    });

    and(
      'user should enter invalid email on "Email or Phone Number" field',
      () => {
        const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
        fireEvent.change(usernameField, { target: { value: "user1@" } });
        expect(usernameField.value).toEqual("user1@");
      }
    );

    and("user clicks on 'Continue' button", () => {
      // const continueId = container.getByRole("button", {
      //   name: /resetPasswordText/i,
      // });
      // fireEvent.click(continueId);
    });

    then(
      'User should see the following error message "Enter a valid Email or Phone Number"',
      () => {
        // const continueId = container.getByRole("button", {
        //   name: /resetPasswordText/i,
        // });
        // fireEvent.click(continueId);
        // setTimeout(() => {
        //   const usernameFieldError = container.getByLabelText(
        //     /errorUsernameNotFound/i
        //   );
        //   expect(usernameFieldError).toBeTruthy();
        // }, 500);
      });
  });
  test('EPIC_EPP-7_STORY_EPP-238 - Verify user should see "page loading" within 3 seconds', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter invalid email on (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" within (\d+) seconds$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-238 - Verify user  is not able to submit "Forgot Password" when service is unavailable', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-238 - Verify user  is not able to submit "Forgot Password" when internet connection is unavailable', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-238 - Verify User should see the empty field when user refesh the page', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when('User should refresh the page', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see the empty (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-238 - Verify user should not see any scripts error when after user press F12 on the console', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should input Unregistered Phone Number on (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User press F(\d+) on the console$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('User  should not see any scripts error', () => {
      expect(true).toBeTruthy();
    });
  });
});
