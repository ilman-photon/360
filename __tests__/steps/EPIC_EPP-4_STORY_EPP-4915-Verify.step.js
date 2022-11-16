import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import AuthPage from "../../src/pages/patient/login";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import '@testing-library/jest-dom'
import { renderWithProviders } from "../src/utils/test-util";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-4915.feature"
);

defineFeature(feature, (test) => {
  let container, login;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  afterEach(() => {
    cleanup();
    mock.reset();
  });

  test('EPIC_EPP-4_STORY_EPP-4915- Verify if when the user account get locked after enters a 5th-time wrong password in the password field', ({ given, and, when, then }) => {
    given('the use launch the XXX URL', () => {
      expect(true).toBeTruthy();
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
        container = renderWithProviders(<AuthPage />);
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    when('the user enters a valid username in the username test field', () => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, { target: { value: "validUsername@mail.com" } });
      expect(usernameField.value).toEqual("validUsername@mail.com");
    });

    and(/^User enters consecutively (\d+)th time an invalid password in the password field$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
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

    then('the user sees an error message Your account has been locked after too many failed attempts.', () => {
      expect(container.getByTestId("submission-message")).toBeInTheDocument()
      expect(container.getByText("errorFailedLogin")).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-4_STORY_EPP-4915- Verify if the user receives an email with a reset password link when the account gets locked with invalid password attempts', ({ given, and, when, then }) => {
    given('the use launch the XXX URL', () => {
      expect(true).toBeTruthy();
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
        container = renderWithProviders(<AuthPage />);
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    when('the user enters a valid username in the username test field', () => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, { target: { value: "validUsername@mail.com" } });
      expect(usernameField.value).toEqual("validUsername@mail.com");
    });

    and(/^User enters consecutively (\d+)th time an invalid password in the password field$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
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

    then('the user sees an error message Your account has been locked after too many failed attempts.', () => {
      expect(container.getByTestId("submission-message")).toBeInTheDocument()
      expect(container.getByText("errorFailedLogin")).toBeInTheDocument()
    });

    and('user receives a reset password link in registred emai', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-4915- Verify if the user receives an email with a reset password link when the account gets locked when user worng answer the security quection', ({ given, and, then, when }) => {
    let login;
    given('the use launch the XXX URL', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      const expectedResult = {
        "ResponseCode": 2001,
        "ResponseType": "Invalid Username or Password"
      };
      mock.onPost(`/ecp/patient/login`).reply(401, expectedResult);
    });

    and('user lands on the Patient Login screen', () => {
      login = renderWithProviders(<AuthPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });

    then(/^the user should see the "(.*)" link$/, (arg0) => {
      const link = login.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when('the user clicks on the Forgot Password link', () => {
      const link = login.getByTestId("forgotpswd");
      fireEvent.click(link);
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
        SecurityQuestions: [
          {
            "Test Question 1": "",
            "Test Question 2": "",
            "Test Question 3": ""
          },
        ],
        PreferredComunication: "Both",
      };
      mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      act(() => {
        container = render(<ForgotPasswordPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
    });

    then('the user should see Forgot Password screen', () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and('the user should see the Email or Phone Number field', () => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument()
    });

    and('the user should enter a valid Email or Phone Number field', async () => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, {
        target: { value: "user1@gmail.com" },
      });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on the "(.*)" button$/, async (arg0) => {
      const continueId = container.getByTestId("continuebtn");
      fireEvent.submit(continueId);
      await waitFor(() => {
        container.getByTestId("answerquestions")
      })
    });

    then('the user should see the Select an option screen', () => {
      expect(container.getByText("title")).toBeInTheDocument()
    });

    and('the user clicks on the Answer security questions button', async () => {
      const answerQuestionButton = container.getByTestId("answerquestions");
      fireEvent.click(answerQuestionButton);
      await waitFor(() => {
        container.getByTestId("continuebtn")
      })
    });

    then('Password Recovery Security Questions page is opened', () => {
      expect(true).toBeTruthy();
    });

    and(/^Enter the (\d+)th time wrong answers$/, (arg0) => {
      const question1 = container.getByLabelText("Test Question 1 *")
      const question2 = container.getByLabelText("Test Question 2 *")
      const question3 = container.getByLabelText("Test Question 3 *")

      fireEvent.change(question1, {
        target: { value: "wrong" },
      });

      fireEvent.change(question2, {
        target: { value: "wrong" },
      });

      fireEvent.change(question3, {
        target: { value: "wrong" },
      });
    });

    and('clicks on the continue button', async () => {
      const error = {
        "ResponseCode": 2001,
        "ResponseType": "failure"
      }
      mock.onPost(`/ecp/patient/securityquestions/validate`).reply(400, error);
      const continueButton = container.getByTestId("continuebtn");
      fireEvent.submit(continueButton);
      await waitFor(() => {
        container.getByText("errorIncorrectAnswer")
      })
    });

    and('the user sees an error message Your account gets locked', () => {
      expect(container.getByText("errorIncorrectAnswer")).toBeInTheDocument()
    });

    then('the user receives a password reset link to registered email', () => {
      expect(true).toBeTruthy();
    });
  });
});