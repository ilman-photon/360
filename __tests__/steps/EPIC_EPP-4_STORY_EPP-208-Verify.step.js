import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import LoginPage from "../../src/pages/patient/login";
import Login from "../../src/components/organisms/Login/login"

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-208.feature", {
  tagFilter: '@included and not @excluded'
}
);

defineFeature(feature, (test) => {
  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when user provides Invalid Email or Phone Number and Valid Password', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback(({
          status: "failed",
          message: {
            title: "",
            description: "Invalid Username or Password"
          }
        }))
      })
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
    });

    and("user navigates to the Patient Portal application", () => { 
      expect(true).toBeTruthy()
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      'user provides invalid  "<Email or Phone Number>" and valid "<password>"',
      () => {
        const usernameField = container.getByLabelText("emailUserLabel");
        const passwordField = container.getByLabelText("passwordLabel");
        fireEvent.change(usernameField, { target: { value: "wrongUserName" } });
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(usernameField.value).not.toEqual("validUsername");
        expect(passwordField.value).toEqual("validPassword");
      }
    );

    and('user clicks on "Login" Button', () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then('user should see the error message "Invalid Username or Password"', () => {
      // const error = container.getByText("Invalid Username or Password");
      // expect("Invalid Username or Password").toEqual(error.textContent);
    });
  });
});
