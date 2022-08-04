import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import { Provider } from "react-redux";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-254.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-2_STORY_EPP-254-Patient Registration - Registered/ Existing user trying to register again", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("User is already a registered user", () => {
    });

    and("User is in the “User Registration” screen", () => {
        container = render(
          <Provider store={store}>
            <RegisterPage />
          </Provider>);
      const existing = container.getByText("User Registration");
      expect("User Registration").toEqual(existing.textContent);
    });

    and("User fills in all the required details to register", () => {
        const firstnameField = container.getByLabelText("First Name");
        const lastnameField = container.getByLabelText("Last Name");
        const emailField = container.getByRole('textbox', { name: 'Email'})
        const mobileField = container.getByLabelText("Mobile number");
        const passwordField = container.getByLabelText("Password");
        const communicationRadio = container.getByLabelText("Both");
        fireEvent.change(firstnameField, { target: { value: "username" } });
        fireEvent.change(lastnameField, { target: { value: "username" } });
        fireEvent.change(emailField, { target: { value: "user123@mockmail.com" } });
        fireEvent.change(mobileField, { target: { value: "(123) 456-7890" } });
        fireEvent.change(passwordField, { target: { value: "password" } });
        fireEvent.click(communicationRadio);
        expect(firstnameField.value).toEqual("username");
        expect(lastnameField.value).toEqual("username");
        expect(emailField.value).toEqual("user123@mockmail.com");
        expect(mobileField.value).toEqual("(123) 456-7890");
        expect(passwordField.value).toEqual("password");
        expect(communicationRadio.value).toEqual("both");
    });

    when("User clicks on ‘Register’ CTA", () => {
      const title = container.getByText("User Registration");
      expect("User Registration").toEqual(title.textContent);
    });

    then("System should validate the provided registration details against existing users", () => {});

    //TO DO
    and("User should be able to see the following message “ Existing user! You are already a registered user. Please login to the application using your username and password.” with an option to redirect the user to “Patient Login” screen", async () => {
    //   const existing = await container.getByText("You are already a registered user. Please login to the application using your username and password.");
    //   expect("You are already a registered user. Please login to the application using your username and password.").toEqual(existing.textContent);
    });

});
});