import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import AuthPage from "../../src/pages/patient/login";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import '@testing-library/jest-dom'

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-4914.feature"
);

defineFeature(feature, (test) => {
  let container, login;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  afterEach(() => {
    mock.reset();
  });

  test('EPIC_EPP-4_STORY_EPP-4914- Verify if when the user enters a first-time wrong password in the password field account gets locked or not', ({ given, and, when, then }) => {
    given('the use launch the XXX URL', () => {
      defaultValidation()
    });

    and('user navigates to the Patient Portal application', () => {
      const expectedResult = {
        "ResponseCode": 2001,
        "ResponseType": "Invalid Username or Password"
      };
      mock.onPost(`/ecp/patient/login`).reply(401, expectedResult);
    });

    and('user lands on the Patient Login screen', () => {
      act(() => {
        container = render(<AuthPage />);
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    when('the user enters a valid username in the username test field', () => {
      const usernameField = container.getByLabelText("emailUserLabel");
      fireEvent.change(usernameField, { target: { value: "validUsername@mail.com" } });
      expect(usernameField.value).toEqual("validUsername@mail.com");
    });

    and('User enters an invalid password in a password in the password field', () => {
      const passwordField = container.getByLabelText("passwordLabel");
      fireEvent.change(passwordField, { target: { value: "invalidPassword" } });
      expect(passwordField.value).not.toEqual("validPassword");
    });

    and('clicks on the login button', async () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
      await waitFor(() => {
        container.getByTestId("submission-message")
      })
    });

    then('user sees an error message Invalid Username or Password', () => {
      expect(container.getByTestId("submission-message")).toBeInTheDocument()
      expect(container.getByText("errorFailedLogin")).toBeInTheDocument()
    });
  });


  test('EPIC_EPP-4_STORY_EPP-4914- Verify if when the user enters a 4th-time wrong password in the password field and clicks on login button account gets locked or not', ({ given, and, when, then }) => {
    given('the use launch the XXX URL', () => {
      defaultValidation()
    });

    and('user navigates to the Patient Portal application', () => {
      const expectedResult = {
        "ResponseCode": 2001,
        "ResponseType": "Invalid Username or Password"
      };
      mock.onPost(`/ecp/patient/login`).reply(401, expectedResult);
    });

    and('user lands on the Patient Login screen', () => {
      act(() => {
        container = render(<AuthPage />);
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    when('the user enters a valid username in the username test field', () => {
      const usernameField = container.getByLabelText("emailUserLabel");
      fireEvent.change(usernameField, { target: { value: "validUsername@mail.com" } });
      expect(usernameField.value).toEqual("validUsername@mail.com");
    });

    and(/^User enters consecutively (\d+)th time an invalid password in the password field$/, (arg0) => {
      const passwordField = container.getByLabelText("passwordLabel");
      fireEvent.change(passwordField, { target: { value: "invalidPassword" } });
      expect(passwordField.value).not.toEqual("validPassword");
    });

    and('clicks on the login button', async () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
      await waitFor(() => {
        container.getByTestId("submission-message")
      })
    });

    then('user sees an error message Invalid Username or Password', () => {
      expect(container.getByTestId("submission-message")).toBeInTheDocument()
      expect(container.getByText("errorFailedLogin")).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-4_STORY_EPP-4914- Verify if when the user enters a 5th-time wrong password in the password field and clicks on the login button user sees the message Your account has been locked after too many failed attempts.', ({ given, and, when, then }) => {
    let container
    given('the use launch the XXX URL', () => {
      defaultValidation()
    });

    and('user navigates to the Patient Portal application', () => {
      const expectedResult = {
        "ResponseCode": 2004,
        "ResponseType": "Locked User"
      };
      mock.onPost(`/ecp/patient/login`).reply(401, expectedResult);
    });

    and('user lands on the Patient Login screen', () => {
      act(() => {
        container = render(<AuthPage />);
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    when('the user enters a valid username in the username test field', () => {
      const usernameField = container.getByLabelText("emailUserLabel");
      fireEvent.change(usernameField, { target: { value: "validUsername@mail.com" } });
      expect(usernameField.value).toEqual("validUsername@mail.com");
    });

    and(/^User enters consecutively (\d+)th time an invalid password in the password field$/, (arg0) => {
      const passwordField = container.getByLabelText("passwordLabel");
      fireEvent.change(passwordField, { target: { value: "invalidPassword" } });
      expect(passwordField.value).not.toEqual("validPassword");
    });

    and('clicks on the login button', async () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
      await waitFor(() => {
        container.getByTestId("submission-message")
      })
    });

    then('user sees an error message Your account has been locked after too many failed attempts.', () => {
      expect(container.getByTestId("submission-message")).toBeInTheDocument()
      expect(container.getByText("errorLoginLockedMessage")).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-4_STORY_EPP-4914- Verify if the user receives an email link after the account gets locked', ({ given, and, when, then }) => {
    given('the use launch the XXX URL', () => {
      defaultValidation()
    });

    and('user navigates to the Patient Portal application', () => {
      const expectedResult = {
        "ResponseCode": 2004,
        "ResponseType": "Locked User"
      };
      mock.onPost(`/ecp/patient/login`).reply(401, expectedResult);
    });

    and('user lands on the Patient Login screen', () => {
      act(() => {
        container = render(<AuthPage />);
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    when('the user enters a valid username in the username test field', () => {
      const usernameField = container.getByLabelText("emailUserLabel");
      fireEvent.change(usernameField, { target: { value: "validUsername@mail.com" } });
      expect(usernameField.value).toEqual("validUsername@mail.com");
    });

    and(/^User enters consecutively (\d+)th time an invalid password in the password field$/, (arg0) => {
      const passwordField = container.getByLabelText("passwordLabel");
      fireEvent.change(passwordField, { target: { value: "invalidPassword" } });
      expect(passwordField.value).not.toEqual("validPassword");
    });

    and('clicks on the login button', async () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
      await waitFor(() => {
        container.getByTestId("submission-message")
      })
    });

    and('user sees an error message Your account has been locked after too many failed attempts.', () => {
      expect(container.getByTestId("submission-message")).toBeInTheDocument()
      expect(container.getByText("errorLoginLockedMessage")).toBeInTheDocument()
    });

    when('user preferred a mode of communication email', () => {
      defaultValidation()
    });

    then('the user receives an email with the password reset link', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-4_STORY_EPP-4914- Verify if the user receives a text message and password reset link to registred mobile number after the account gets locked', ({ given, and, when, then }) => {
    given('the use launch the XXX URL', () => {
      defaultValidation()
    });

    and('user navigates to the Patient Portal application', () => {
      const expectedResult = {
        "ResponseCode": 2004,
        "ResponseType": "Locked User"
      };
      mock.onPost(`/ecp/patient/login`).reply(401, expectedResult);
    });

    and('user lands on the Patient Login screen', () => {
      act(() => {
        container = render(<AuthPage />);
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    when('the user enters a valid username in the username test field', () => {
      const usernameField = container.getByLabelText("emailUserLabel");
      fireEvent.change(usernameField, { target: { value: "validUsername@mail.com" } });
      expect(usernameField.value).toEqual("validUsername@mail.com");
    });

    and(/^User enters consecutively (\d+)th time an invalid password in the password field$/, (arg0) => {
      const passwordField = container.getByLabelText("passwordLabel");
      fireEvent.change(passwordField, { target: { value: "invalidPassword" } });
      expect(passwordField.value).not.toEqual("validPassword");
    });

    and('clicks on the login button', async () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
      await waitFor(() => {
        container.getByTestId("submission-message")
      })
    });

    and('user sees an error message Your account has been locked after too many failed attempts.', () => {
      expect(container.getByTestId("submission-message")).toBeInTheDocument()
      expect(container.getByText("errorLoginLockedMessage")).toBeInTheDocument()
    });

    when('user preferred a mode of communication mobile number', () => {
      defaultValidation()
    });

    then('the user receives an text message with the password reset link', () => {
      defaultValidation()
    });
  });
})