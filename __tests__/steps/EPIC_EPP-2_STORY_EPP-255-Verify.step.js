import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import SetPasswordPage from "../../src/pages/patient/set-Password";

// const feature = loadFeature(
//   "./__tests__/features/Patient Portal/Sprint2/EPP-207.feature"
// );

defineFeature(feature, (test) => {
  test("EPIC_EPP-4_STORY_EPP-207-Verify whether the Registered Patient is able to Login with Valid Email or Phone Number and Valid Password", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the '/set-password' url", () => {
      container = render(<SetPasswordPage />);
    });

    and("user navigates to the Patient Portal application", () => {});

    when("user lands on “Set Password” screen", () => {
      const title = container.getByText("Set Password");
      expect("Set Password").toEqual(title.textContent);
    });

    and("user click 'Reset Password' button.", () => {
      const reset = container.getByRole("button", { name: /Reset Password/i });
      fireEvent.click(reset);
    });

    and("User Will see Error Message on Mandatory Fields.", async () => {
      expect(await screen.findByText('This field is required')).toBeVisible()
    });

    and(
      'user should see field"Password","Confirm Password" and user provides valid "<Email>" and valid"<password>"',
      () => {
        const usernameField = container.getByLabelText("Username");
        const passwordField = container.getByLabelText("Password");
        const confirmPasswordField = container.getByLabelText("Password");
        fireEvent.change(usernameField, { target: { value: "username" } });
        fireEvent.change(passwordField, { target: { value: "password" } });
        fireEvent.change(confirmPasswordField, { target: { value: "password" } });
        expect(usernameField.value).toEqual("username");
        expect(passwordField.value).toEqual("password");
        expect(confirmPasswordField.value).toEqual("password");
      }
    );

    and("After user type on 'password' field, user will see passwordValidator Component.", async () => {
      fireEvent.change(passwordField, { target: { value: "password" } });
      expect(await screen.findByText('Password length should range from 8 to 20 characters')).toBeVisible()
      expect(await screen.findByText('Password should contain at least one numerical character (0-9)')).toBeVisible()
      expect(await screen.findByText('Contain at least 3 our of 4 types')).toBeVisible()
    });


    then("", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
});
