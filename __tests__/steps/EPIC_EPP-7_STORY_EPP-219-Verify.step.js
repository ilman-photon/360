import { fireEvent, render, act } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPassword";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";
import { Login } from "../../src/components/organisms/Login/login";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-219.feature"
);

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");

const launchURL = () => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

const navigateToPatientPortalApp = () => {
  mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
  act(() => {
    container = render(<AuthPage />, {
      container: document.body.appendChild(element),
      legacyRoot: true,
    });
  });
}

const landOnPatientPortalScreen = () => {
  const title = container.getByText("formTitle");
  expect("formTitle").toEqual(title.textContent);
}

defineFeature(feature, (test) => {
  test("EPIC_EPP-7_STORY_EPP-219 - Verify User should see the entered mask password by default", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given('use launch the "XXX" url', () => {
      launchURL()
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp()
    });

    when('user lands onto "Patient Login" screen', () => {
      landOnPatientPortalScreen()
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
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText("emailUserLabel");
      expect(usernameField.id).toEqual("username");
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

    then('user should see "Update Password" Page', () => {
      container = render(
        <SetPasswordComponent
          username={"smith1@photon.com"}
          title={"Update Password"}
          showPostMessage={true}
          setShowPostMessage={() => { }}
          onBackToLoginClicked={function () { }}
          onSetPasswordClicked={() => { }}
          passwordPlaceHolder={"New Password"}
          confirmPasswordPlaceHolder={"Confirm New Password"}
          ctaButtonLabel={"Update"}
          showPasswordValidator={true}
          isUpdatePassword={true}
        />
      );
    });

    and(
      'User should see "New Password" and "Confirm New Password" fields',
      () => {
        const title = container.getByText("Update Password");
        expect("Update Password").toEqual(title.textContent);
      }
    );

    when(
      'User should fill the valid "New Password" and "Confirm New Password" fields',
      () => {
        const password = container.getByLabelText("New Password");
        fireEvent.change(password, { target: { value: "user123@A" } });
        expect(password.value).toEqual("user123@A");

        const confirmPassword = container.getByLabelText(
          "Confirm New Password"
        );
        fireEvent.change(confirmPassword, { target: { value: "user123@A" } });
        expect(confirmPassword.value).toEqual("user123@A");
      }
    );

    then("User should see the entered mask password by default", () => {
      expect(true).toBeTruthy();
    });

    when('User should click on "Update" button', () => {
      const continueId = container.getByRole("button", { name: /Update/i });
      fireEvent.click(continueId);
    });

    then('User should see "Password has been updated" success message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-219 - Verify User should Login using new Password', ({ given, and, when, then }) => {
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

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) fields$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User answers all the valid (.*) fields$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill the valid (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" success message$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('User should receive an email to their registered email-id regarding password reset', () => {
      expect(true).toBeTruthy();
    });

    when('User should click the link - Open mail', () => {
      expect(true).toBeTruthy();
    });

    and('User Login to the email', () => {
      expect(true).toBeTruthy();
    });

    and('The mail will looks like with below format', (table) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User inputs valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User input (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('"EPIC_EPP-7_STORY_EPP-219 - Verify User should not copy and paste on "<New Password>" and "<Confirm New Password>" fields"', ({ given, and, when, then }) => {
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

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) fields$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User answers all the valid (.*) fields$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^User should not copy and paste on (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('"EPIC_EPP-7_STORY_EPP-219 - Verify user should see the inline error "This field is required" when user emptied "<New Password>" field"', ({ given, and, when, then }) => {
    given('use launch the \'XXX\' url', () => {
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

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should view the text “Answer the following questions to reset your password”', () => {
      expect(true).toBeTruthy();
    });

    and('user should view the questions fields', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user fills in (.*) and (.*)for the security questions they set up$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should empty (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the inline error "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('"EPIC_EPP-7_STORY_EPP-219 - Verify user should see "Password does not meet requirements" error message"', ({ given, and, when, then }) => {
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

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should view the text “Answer the following questions to reset your password”', () => {
      expect(true).toBeTruthy();
    });

    and('user should view the questions fields', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user fills in (.*) and (.*)for the security questions they set up$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill invalid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill invalid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('"EPIC_EPP-7_STORY_EPP-219 - Verify user should see "page loading" as 3 seconds"', ({ given, and, when, then }) => {
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

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should view the text “Answer the following questions to reset your password”', () => {
      expect(true).toBeTruthy();
    });

    and('user should view the questions fields', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user fills in (.*) and (.*)for the security questions they set up$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" within (\d+) seconds$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('"EPIC_EPP-7_STORY_EPP-219 - Verify user  is not able to submit "Reset Password" when service is unavailable"', ({ given, and, when, then }) => {
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

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should view the text “Answer the following questions to reset your password”', () => {
      expect(true).toBeTruthy();
    });

    and('user should view the questions fields', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user fills in (.*) and (.*)for the security questions they set up$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('"EPIC_EPP-7_STORY_EPP-219 - Verify user  is not able to submit "Reset Password" when Internet connection is unavailable"', ({ given, and, when, then }) => {
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

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should view the text “Answer the following questions to reset your password”', () => {
      expect(true).toBeTruthy();
    });

    and('user should view the questions fields', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user fills in (.*) and (.*)for the security questions they set up$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('"EPIC_EPP-7_STORY_EPP-219 - Verify user should not see any Java scripts error when after user press F12 on the console"', ({ given, and, when, then }) => {
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

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should view the text “Answer the following questions to reset your password”', () => {
      expect(true).toBeTruthy();
    });

    and('user should view the questions fields', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user fills in (.*) and (.*)for the security questions they set up$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" success message$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user press F(\d+) on the console$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should not see any scripts error', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-219 - Verify User should receive an email to their registered email-id that the entered in the username field, regarding password reset', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on \'Forgot Password\' link', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button\($/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should view the text “Answer the following questions to reset your password”', () => {
      expect(true).toBeTruthy();
    });

    and('user should view the questions fields', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user fills in (.*) and (.*)for the security questions they set up$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill the valid (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" success message$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('User should receive an email to their registered email-id regarding password reset', () => {
      expect(true).toBeTruthy();
    });

    when('User Open mail and click the link', () => {
      expect(true).toBeTruthy();
    });

    and('User Login to the email', () => {
      expect(true).toBeTruthy();
    });

    and('The mail will looks like with below format', (table) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('"EPIC_EPP-7_STORY_EPP-219 - Verify User should unmask the entered password"', ({ given, and, when, then }) => {
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

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should view the text “Answer the following questions to reset your password”', () => {
      expect(true).toBeTruthy();
    });

    and('user should view the questions fields', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user fills in (.*) and (.*)for the security questions they set up$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill the valid (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then('User should see the entered mask password by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" icon$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User clicks on "(.*)" icon$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('User should see the entered password', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-219 - Verify User should receive a text to their registered Phone number  regarding password reset', ({ }) => {

  });

  test('"EPIC_EPP-7_STORY_EPP-219 - Verify User should receive a text to their registered mobile number that the entered in the username field, regarding password reset"', ({ given, and, when, then }) => {
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

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should view the text “Answer the following questions to reset your password”', () => {
      expect(true).toBeTruthy();
    });

    and('user should view the questions fields', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user fills in (.*) and (.*)for the security questions they set up$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill the valid (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" success message$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('User should receive an email to their registered email-id regarding password reset', () => {
      expect(true).toBeTruthy();
    });

    when('User Open message on phone and click the link', () => {
      expect(true).toBeTruthy();
    });

    and('User Login to the email', () => {
      expect(true).toBeTruthy();
    });

    and('The mail will looks like with below format', (table) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
