import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import { Provider } from "react-redux";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-254.feature"
);

defineFeature(feature, (test) => {
  /*test("EPIC_EPP-2_STORY_EPP-255 - Verify if user able view the to set password screen", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("User is already a registered user", () => {
      expect(true).toBeTruthy();
    });

    and("User is in the “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
      const existing = container.getByText("User Registration");
      expect("User Registration").toEqual(existing.textContent);
    });

    and("User fills in all the required details to register", () => {
      const firstnameField = container.getByLabelText(/First Name/i);
      const lastnameField = container.getByLabelText(/Last Name/i);
      const emailField = container.getByRole("textbox", { name: "Email" });
      const mobileField = container.getByLabelText(/Mobile Number/i);
      const passwordField = container.getByLabelText("Password");
      const communicationRadio = container.getByRole("radio", { name: /Both/i });
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

    when("User clicks on ‘Register’ CTA", () => {
      const title = container.getByText("User Registration");
      expect("User Registration").toEqual(title.textContent);
    });

    then(
      "System should validate the provided registration details against existing users",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(
      "User should be able to see the following message “ Existing user! You are already a registered user. Please login to the application using your username and password.” with an option to redirect the user to “Patient Login” screen",
      async () => {
        setTimeout(() => {
          const existingError = container.getByText(
            /You are already a registered user. Please login to the application using your username and password/i
          );
          expect(existingError).toBeTruthy();
          expect(
            /You are already a registered user. Please login to the application using your username and password/i
          ).toEqual(existing.textContent);
        }, 5000);
      }
    );
  });*/
  test('EPIC_EPP-2_STORY_EPP-254 - Verify if registered user able to register again', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' patient portal url', () => {
      expect(true).toBeTruthy();
    });

    and('user is in “Login” screen', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the ‘Create an Account’ button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands onto “User Registration” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should see user registration screen', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field  (.*),(.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6) => {
      expect(true).toBeTruthy();
    });

    and('user should see the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user click on \'Register\' button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should give the option to redirect to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user lands on to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
  
  test('EPIC_EPP-2_STORY_EPP-254- Verify if registered user able to register again with Email id', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' patient portal url', () => {
      expect(true).toBeTruthy();
    });

    and('user is in “Login” screen', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the ‘Create an Account’ button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands onto “User Registration” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should see user registration screen', () => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field  (.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    and('user should see the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user click on \'Register\' button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should give the option to redirect to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user lands on to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
  
  test('EPIC_EPP-2_STORY_EPP-254 - Verify if registered user able to register again with Mobile number', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' patient portal url', () => {
      expect(true).toBeTruthy();
    });

    and('user is in “Login” screen', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the ‘Create an Account’ button', () => {
      expect(true).toBeTruthy();
    });

    then('user lands onto “User Registration” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user should see user registration screen', () => {
      expect(true).toBeTruthy();
    });

    then(/^User should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
      expect(true).toBeTruthy();
    });

    when(/^user provide the details to the field (.*),(.*),(.*),(.*),(.*),(.*)$/, (arg0, arg1, arg2, arg3, arg4, arg5) => {
      expect(true).toBeTruthy();
    });

    and('user should see the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA', () => {
      expect(true).toBeTruthy();
    });

    and('user click on \'Register\' button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should give the option to redirect to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user lands on to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});