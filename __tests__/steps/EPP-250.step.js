import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import { Provider } from "react-redux";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-250.feature"
);

defineFeature(feature, (test) => {

  test("EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen", () => {})
  test("Verify if user able to view the Registration screen", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("User clicks on the ‘Create Account’ CTA in “Patient Login” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>);
    });

    when("User lands onto “User Registration” screen", () => {
      const title = container.getByText("User Registration");
      expect("User Registration").toEqual(title.textContent);
    });

    then("User should be able to view the following fields", () => {
        const firstnameField = container.getByLabelText(/First Name/i);
        const lastnameField = container.getByLabelText(/Last Name/i);
        const emailField = container.getByRole('textbox', { name: 'Email'})
        const mobileField = container.getByLabelText(/Mobile Number/i);
        const passwordField = container.getByLabelText("Password");
        const communicationRadio = container.getByLabelText(/Both/i);
        fireEvent.change(firstnameField, { target: { value: "username" } });
        fireEvent.change(lastnameField, { target: { value: "username" } });
        fireEvent.change(emailField, { target: { value: "a@aa.aa" } });
        fireEvent.change(mobileField, { target: { value: "(123) 456-789" } });
        fireEvent.change(passwordField, { target: { value: "password" } });
        fireEvent.click(communicationRadio);
        expect(firstnameField.value).toEqual("username");
        expect(lastnameField.value).toEqual("username");
        expect(emailField.value).toEqual("a@aa.aa");
        expect(mobileField.value).toEqual("(123) 456-789");
        expect(passwordField.value).toEqual("password");
        expect(communicationRadio.value).toEqual("both");
      });

      and("User should have the option to select either Email or Mobile or both as their preferred method of communication to receive email/ message alerts with links to reset password, magic link as well as in situations like Password is Reset, Account is locked etc.", () => {
        const emailRadio = container.getByRole('radio', { name: /Email/i });
        const phoneRadio = container.getByRole('radio', { name: /Phone/i });
        const bothRadio = container.getByRole('radio', { name: /Both/i });
        expect(emailRadio).toBeTruthy()
        expect(phoneRadio).toBeTruthy()
        expect(bothRadio).toBeTruthy()
        fireEvent.click(bothRadio);
      });

      and("User should be able to view the ‘Register’ button", () => {
        const login = container.getByRole("button", { name: /Register/i });
        fireEvent.click(login);
      });

      and("User should be able to view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA", () => {
      const disclaimer = container.getByText("By registering, you agree to our Terms & Conditions and Privacy Policy");
      expect("By registering, you agree to our Terms & Conditions and Privacy Policy").toEqual(disclaimer.textContent);
        });

    and("User should be able to view the verbiage ”Already have an account? Login” where ‘Login’ is a CTA which when clicked will redirect the user to the ‘Patient Login’ screen", () => {
        const logintext = container.getByText("Already have an account?");
      expect("Already have an account? Login").toEqual(logintext.textContent);
    });

    and("User should be able to see the following error message if email-id provided was in incorrect format “Incorrect email format”", async () => {
          const register = container.getByRole("button", { name: /REGISTER/i });
          fireEvent.click(register);
    });

    and("User should be able to see the following error message if mobile number provided was in incorrect format “Incorrect mobile number format”", async () => {
      setTimeout(() => {
        const mobileFieldError = container.getByLabelText(/Incorrect mobile number format/i)
        expect(mobileFieldError).toBeFalsy()
        fireEvent.change(mobileField, { target: { value: "(123) 456" } });
        expect(mobileFieldError).toBeTruthy()
        expect(/Incorrect mobile number format/i).toEqual(mobileFieldError.textContent);
      }, 500);
    });

    and("User should be able to see the inline error message “Invalid date of birth” when the date of birth entered by the patient is invalid", async () => {
      expect(true).toBeTruthy()
    });

    and("User should be prompted with the inline validation error message “This field is required” when all the required fields are not filled except for Email and Mobile Number field", async () => {
        setTimeout(() => {
        const inputFieldError = container.getByLabelText(/This field is required/i)
        expect(inputFieldError).toBeFalsy()
        fireEvent.change(firstnameField, { target: { value: "" } });
        fireEvent.change(lastnameField, { target: { value: "" } });
        expect(inputFieldError).toBeTruthy()
        expect(/This field is required/i).toEqual(inputFieldError.textContent);
      }, 500);
    });

    and("User should be prompted with the inline validation error message “Email ID or Mobile Number is required” when either the Email and/or Mobile number fields is not filled", async () => {
        setTimeout(() => {
        const mobileFieldError = container.getByLabelText(/Email ID or Mobile number is required/i)
        expect(mobileFieldError).toBeFalsy()
        fireEvent.change(emailField, { target: { value: "" } });
        fireEvent.change(mobileField, { target: { value: "" } });
        expect(mobileFieldError).toBeTruthy()
        expect(/Email ID or Mobile number is required/i).toEqual(mobileFieldError.textContent);
      }, 500);
    });

  });
});
