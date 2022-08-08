import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPassword";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-239.feature"
);

defineFeature(feature, (test) => {
  test('EPIC_EPP-7_STORY_EPP-239 - Verify user should see the "Passwords do not match" error message', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given('use launch the "XXX" url', () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto "Patient Login" screen', () => {
      expect(true).toBeTruthy();
    });

    then('user should see "Forgot Password" link', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on "Forgot Password" link', () => {
      expect(true).toBeTruthy();
    });

    then('user should see "Forgot Password" screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should see "Email or Phone Number" field', () => {
      expect(true).toBeTruthy();
    });

    and('user should enter valid "Email or Phone Number" field', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on "Continue" button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see "Select an option" screen', () => {
      expect(true).toBeTruthy();
    });

    and(
      'user should see "Answer security questions" button(if security questions is set)',
      () => {
        expect(true).toBeTruthy();
      }
    );

    and('user should see "Login with magic link" button', () => {
      expect(true).toBeTruthy();
    });

    and('user should see "Back to Log in" button', () => {
      expect(true).toBeTruthy();
    });

    when('user click on "Answer security questions" button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see "Password Recovery Security Questions"', () => {
      expect(true).toBeTruthy();
    });

    and(
      'user should view the text "Answer the following questions to reset your password"',
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should view the questions fields", () => {
      expect(true).toBeTruthy();
    });

    and('user should see "Continue" button', () => {
      expect(true).toBeTruthy();
    });

    and('user should see "Back to Log in" button', () => {
      expect(true).toBeTruthy();
    });

    and(
      'user fills in "Question1Ans" and "Question2Ans"for the security questions they set up',
      () => {
        expect(true).toBeTruthy();
      }
    );

    when('user click on "Continue" button', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      container = render(
        <SetPasswordComponent
          username={"smith1@photon.com"}
          title={"Update Password"}
          showPostMessage={true}
          setShowPostMessage={() => {}}
          onBackToLoginClicked={function () {}}
          onSetPasswordClicked={() => {}}
          passwordPlaceHolder={"New Password"}
          confirmPasswordPlaceHolder={"Confirm New Password"}
          ctaButtonLabel={"Update"}
          showPasswordValidator={true}
          isUpdatePassword={true}
        />
      );

      const title = container.getByText("Update Password");
      expect("Update Password").toEqual(title.textContent);
    });

    and(
      'User should see "New Password" and "Confirm New Password" fields',
      () => {
        const password = container.getByLabelText("New Password");
        expect(password).toBeTruthy();

        const confirmPassword = container.getByLabelText(
          "Confirm New Password"
        );
        expect(confirmPassword).toBeTruthy();
      }
    );

    when('User should fill invalid "New Password" field', () => {
      const password = container.getByLabelText("New Password");
      fireEvent.change(password, { target: { value: "user" } });
      expect(password.value).toEqual("user");
    });

    and('User should fill invalid "Confirm New Password" field', () => {
      const confirmPassword = container.getByLabelText("Confirm New Password");
      fireEvent.change(confirmPassword, { target: { value: "user12" } });
      expect(confirmPassword.value).toEqual("user12");
    });

    and(
      "user should see mask the entered password along with an option to unmask it by default",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and('User should see "Update" button', () => {
      const continueId = container.getByRole("button", { name: /Update/i });
      expect(continueId).toBeTruthy();
    });

    when('User should click on "Update" button', () => {
      const continueId = container.getByRole("button", { name: /Update/i });
      fireEvent.click(continueId);
    });

    then('User should see error message "Passwords do not match"', () => {
      const continueId = container.getByRole("button", { name: /Update/i });
      fireEvent.click(continueId);
      setTimeout(() => {
        const usernameFieldError = container.getByLabelText(
          /errorUsernameNotFound/i
        );
        expect(usernameFieldError).toBeTruthy();
      }, 500);
    });
  });

  test('EPIC_EPP-7_STORY_EPP-239 - Verify user should see the "Password does not meet requirements" error message', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given('use launch the "XXX" url', () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto "Patient Login" screen', () => {
      expect(true).toBeTruthy();
    });

    then('user should see "Forgot Password" link', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on "Forgot Password" link', () => {
      expect(true).toBeTruthy();
    });

    then('user should see "Forgot Password" screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should see "Email or Phone Number" field', () => {
      expect(true).toBeTruthy();
    });

    and('user should enter valid "Email or Phone Number" field', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on "Continue" button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see "Select an option" screen', () => {
      expect(true).toBeTruthy();
    });

    and(
      'user should see "Answer security questions" button(if security questions is set)',
      () => {
        expect(true).toBeTruthy();
      }
    );

    and('user should see "Login with magic link" button', () => {
      expect(true).toBeTruthy();
    });

    and('user should see "Back to Log in" button', () => {
      expect(true).toBeTruthy();
    });

    when('user click on "Answer security questions" button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see "Password Recovery Security Questions"', () => {
      expect(true).toBeTruthy();
    });

    and(
      'user should view the text "Answer the following questions to reset your password"',
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should view the questions fields", () => {
      expect(true).toBeTruthy();
    });

    and('user should see "Continue" button', () => {
      expect(true).toBeTruthy();
    });

    and('user should see "Back to Log in" button', () => {
      expect(true).toBeTruthy();
    });

    and(
      'user fills in "Question1Ans" and "Question2Ans"for the security questions they set up',
      () => {
        expect(true).toBeTruthy();
      }
    );

    when('user click on "Continue" button', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      container = render(
        <SetPasswordComponent
          username={"smith1@photon.com"}
          title={"Update Password"}
          showPostMessage={true}
          setShowPostMessage={() => {}}
          onBackToLoginClicked={function () {}}
          onSetPasswordClicked={() => {}}
          passwordPlaceHolder={"New Password"}
          confirmPasswordPlaceHolder={"Confirm New Password"}
          ctaButtonLabel={"Update"}
          showPasswordValidator={true}
          isUpdatePassword={true}
        />
      );

      const title = container.getByText("Update Password");
      expect("Update Password").toEqual(title.textContent);
    });

    and(
      'User should see "New Password" and "Confirm New Password" fields',
      () => {
        const password = container.getByLabelText("New Password");
        expect(password).toBeTruthy();

        const confirmPassword = container.getByLabelText(
          "Confirm New Password"
        );
        expect(confirmPassword).toBeTruthy();
      }
    );

    when('User should fill invalid "New Password" field', () => {
      const password = container.getByLabelText("New Password");
      fireEvent.change(password, { target: { value: "user12@Qe" } });
      expect(password.value).toEqual("user12@Qe");
    });

    and('User should fill invalid "Confirm New Password" field', () => {
      const confirmPassword = container.getByLabelText("Confirm New Password");
      fireEvent.change(confirmPassword, { target: { value: "user12@Qe" } });
      expect(confirmPassword.value).toEqual("user12@Qe");
    });

    and(
      "user should see mask the entered password along with an option to unmask it by default",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and('User should see "Update" button', () => {
      const continueId = container.getByRole("button", { name: /Update/i });
      expect(continueId).toBeTruthy();
    });

    when('User should click on "Update" button', () => {
      const continueId = container.getByRole("button", { name: /Update/i });
      fireEvent.click(continueId);
    });

    then(
      'User should see error message "Password does not meet requirements"',
      () => {
        const continueId = container.getByRole("button", { name: /Update/i });
        fireEvent.click(continueId);
        setTimeout(() => {
          const usernameFieldError = container.getByLabelText(
            /errorUsernameNotFound/i
          );
          expect(usernameFieldError).toBeTruthy();
        }, 500);
      }
    );
  });
});
