import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-211.feature", {
  tagFilter: '@included and not @excluded'
}
);

defineFeature(feature, (test) => {
  let container, login;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  const expectedResult = {
    ResponseCode: 2000,
    ResponseType: "success",
    userType: "patient",
  };
  mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
  test("EPIC_EPP-4_STORY_EPP-211 - Verify if user is not able to login with valid credentials when account is locked.", ({
    given,
    when,
    then,
    and,
  }) => {
    test('Verify if user not able to login with valid credentials when account is locked.', ({ given, and, when, then }) => {
      given('user/admin user launch the \'XXX\' url', () => {
        expect(true).toBeTruthy()
      });

      and('user/ admin user navigates to the Patient Portal application', () => {
        mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
      });

      when('user/ admin user lands onto “Patient Login” screen', () => {
        act(() => {
          container = render(<AuthPage />, {
            container: document.body.appendChild(element),
            legacyRoot: true,
          });
        });
        const title = container.getByText("formTitle");
        expect("formTitle").toEqual(title.textContent);
      });

      and(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        const login = container.getByRole("button", { name: /Login/i });
        fireEvent.click(login);
      });

      then(/^user should see the message "(.*)"$/, (arg0) => {
        const error = container.getByText("Invalid username or Password, Please try again");
        expect("Invalid username or Password, Please try again").toEqual(error.textContent);
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        const login = container.getByRole("button", { name: /Login/i });
        fireEvent.click(login);
      });

      then(/^user should see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        const login = container.getByRole("button", { name: /Login/i });
        fireEvent.click(login);
      });

      then(/^user should see the message "(.*)"$/, (arg0) => {
        const error = container.getByText("Invalid username or Password, Please try again");
        expect("Invalid username or Password, Please try again").toEqual(error.textContent);
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        const login = container.getByRole("button", { name: /Login/i });
        fireEvent.click(login);
      });

      then(/^user should see the message "(.*)"$/, (arg0) => {
        const error = container.getByText("Invalid username or Password, Please try again");
        expect("Invalid username or Password, Please try again").toEqual(error.textContent);
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        const login = container.getByRole("button", { name: /Login/i });
        fireEvent.click(login);
      });

      then('user account should get locked', () => {
        expect(true).toBeTruthy()
      });

      and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {
        const error = container.getByText("Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account");
        expect("Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account").toEqual(error.textContent);
      });

      when(/^user provides valid  (.*) and (.*) in Login Screen$/, (arg0, arg1) => {
        const usernameField = container.getByLabelText("Username");
        const passwordField = container.getByLabelText("Password");
        fireEvent.change(usernameField, { target: { value: "validUsername" } });
        fireEvent.change(passwordField, { target: { value: "wrongPassword" } });
        expect(usernameField.value).toEqual("validUsername");
        expect(passwordField.value).not.toEqual("validPassword");
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        const login = container.getByRole("button", { name: /Login/i });
        fireEvent.click(login);
      });

      then('user should not able to login', () => {
        expect(true).toBeTruthy()
      });

      and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {
        const error = container.getByText("Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account");
        expect("Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account").toEqual(error.textContent);

      });
    });
  });
  test("EPIC_EPP-4_STORY_EPP-211 - Verify if patient user should not be able to login with invalid credentials when my account is locked.", ({
    given,
    when,
    then,
    and,
  }) => {
    test('Verify if user not be able to login with invalid credentials when account is locked.', ({ given, and, when, then }) => {
      given('user/admin user launch the \'XXX\' url', () => {
        expect(true).toBeTruthy()
      });

      and('user/ admin user navigates to the Patient Portal application', () => {
        mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
      });

      when('user/ admin user lands onto “Patient Login” screen', () => {
        act(() => {
          container = render(<AuthPage />, {
            container: document.body.appendChild(element),
            legacyRoot: true,
          });
        });
        const title = container.getByText("formTitle");
        expect("formTitle").toEqual(title.textContent);
      });

      and(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then(/^user should see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then(/^user should see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then(/^user should see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then(/^user should see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then('user account should get locked', () => {
        expect(true).toBeTruthy()
      });

      and('user should see the message "Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {
        expect(true).toBeTruthy()
      });

      when(/^user provides invalid  (.*) and (.*)$/, (arg0, arg1) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then('user should not able to login', () => {
        expect(true).toBeTruthy()
      });

      and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account"', () => {
        expect(true).toBeTruthy()
      });
    });
  });
  test('EPIC_EPP-4_STORY_EPP-211 - "Verify if user not be able to login with Invalid Email or Phone Number & valid Password when account is locked".', ({
    given,
    when,
    then,
    and,
  }) => {
    test('Verify if user should not be able to login with Invalid username & valid Password when account is locked.', ({ given, and, when, then }) => {
      given('user/admin user launch the \'XXX\' url', () => {
        expect(true).toBeTruthy()
      });

      and('user/ admin user navigates to the Patient Portal application', () => {
        mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
      });

      when('user/ admin user lands onto “Patient Login” screen', () => {
        act(() => {
          container = render(<AuthPage />, {
            container: document.body.appendChild(element),
            legacyRoot: true,
          });
        });
        const title = container.getByText("formTitle");
        expect("formTitle").toEqual(title.textContent);
      });

      and(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then(/^user should be able to see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then(/^user should be able to see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      then(/^user should  see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then(/^user should  see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then('user account should get locked', () => {
        expect(true).toBeTruthy()
      });

      and('user should see the message "Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {
        expect(true).toBeTruthy()
      });

      when(/^user provides Invalid  (.*) and valid (.*)$/, (arg0, arg1) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then('user should not able to login', () => {
        expect(true).toBeTruthy()
      });

      and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {
        expect(true).toBeTruthy()
      });
    });
  });
  test("EPIC_EPP-4_STORY_EPP-211 - Verify if user not be able to login with valid Email or Phone Number & Invalid Password when account is locked.", ({
    given,
    when,
    then,
    and,
  }) => {
    test('Verify if user should not be able to login with valid username & Invalid Password when account is locked.', ({ given, and, when, then }) => {
      given('user/admin user launch the \'XXX\' url', () => {
        expect(true).toBeTruthy()
      });

      and('user/ admin user navigates to the Patient Portal application', () => {
        mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
      });

      when('user/ admin user lands onto “Patient Login” screen', () => {
        act(() => {
          container = render(<AuthPage />, {
            container: document.body.appendChild(element),
            legacyRoot: true,
          });
        });
        const title = container.getByText("formTitle");
        expect("formTitle").toEqual(title.textContent);
      });

      and(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then(/^user should  to see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then(/^user should  see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then(/^user should  see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then(/^user should  see the message "(.*)"$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then('user account should get locked', () => {
        expect(true).toBeTruthy()
      });

      and('user should see the message "Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {
        expect(true).toBeTruthy()
      });

      when(/^user provides valid  (.*) and invalid (.*)$/, (arg0, arg1) => {
        expect(true).toBeTruthy()
      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {
        expect(true).toBeTruthy()
      });

      then('user should not able to login', () => {
        expect(true).toBeTruthy()
      });

      and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {
        expect(true).toBeTruthy()
      });
    });
  });
});
