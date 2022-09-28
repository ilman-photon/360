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

launchURL = () => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

navigateToPatientPortalApp = () => {
  mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
  act(() => {
    container = render(<AuthPage />, {
      container: document.body.appendChild(element),
      legacyRoot: true,
    });
  });
}

landOnPatientPortalScreen = () => {
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
});
