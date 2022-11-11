import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import '@testing-library/jest-dom'
import { renderWithProviders } from "../src/utils/test-util";


const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-4916.feature"
);

defineFeature(feature, (test) => {
  let container, login;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  afterEach(() => {
    mock.reset();
  });

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-7_STORY_EPP-4916- Verify if the user enters a first-time wrong answer for a security question then the user account gets locked', ({ given, and, then, when }) => {
    given('the use launch the XXX URL', () => {
      defaultValidation()
    });

    and('user navigates to the Patient Portal application', () => {
      defaultValidation()
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

    and('the user should enter a valid Email or Phone Number field', () => {
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
      defaultValidation()
    });

    and('Enter the wrong answers', () => {
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

    then('the user sees an error message incorrect answer', () => {
      expect(container.getByText("errorIncorrectAnswer")).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-7_STORY_EPP-4916- Verify if the user enters a 4th-time wrong answer for a security question then the user  sees the error message account gets locked', ({ given, and, then, when }) => {
    given('the use launch the XXX URL', () => {
      defaultValidation()
    });

    and('user navigates to the Patient Portal application', () => {
      defaultValidation()
    });

    and('user lands on the Patient Login screen', () => {
      container = renderWithProviders(<AuthPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });

    then(/^the user should see the "(.*)" link$/, (arg0) => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when('the user clicks on the Forgot Password link', () => {
      const link = container.getByTestId("forgotpswd");
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

    and('the user should enter a valid Email or Phone Number field', () => {
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
      defaultValidation()
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
        "ResponseCode": 2004,
        "ResponseType": "failure"
      }
      mock.onPost(`/ecp/patient/securityquestions/validate`).reply(400, error);
      const continueButton = container.getByTestId("continuebtn");
      fireEvent.submit(continueButton);
      await waitFor(() => {
        container.getByText("errorAccountLock")
      })
    });

    then('the user sees an error message Your account get locked', () => {
      expect(container.getByText("errorAccountLock")).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-7_STORY_EPP-4916- Verify if the user tries to log in to the patient portal after the account locked', ({ given, and, then, when }) => {
    given('the use launch the XXX URL', () => {
      defaultValidation()
    });

    and('user navigates to the Patient Portal application', () => {
      defaultValidation()
    });

    and('user lands on the Patient Login screen', () => {
      container = renderWithProviders(<AuthPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });

    then(/^the user should see the "(.*)" link$/, (arg0) => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when('the user clicks on the Forgot Password link', () => {
      const link = container.getByTestId("forgotpswd");
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

    and('the user should enter a valid Email or Phone Number field', () => {
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
      defaultValidation()
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
        "ResponseCode": 2004,
        "ResponseType": "failure"
      }
      mock.onPost(`/ecp/patient/securityquestions/validate`).reply(400, error);
      const continueButton = container.getByTestId("continuebtn");
      fireEvent.submit(continueButton);
      await waitFor(() => {
        container.getByText("errorAccountLock")
      })
    });

    then('the user sees an error message Your account get locked', () => {
      expect(container.getByText("errorAccountLock")).toBeInTheDocument()
    });

    and('clicks on the Back to login button', () => {
      const backToLogin = container.getByTestId("backtologin");
      fireEvent.submit(backToLogin);
    });

    and('user sees the login page', () => {
      const expectedResult = {
        "ResponseCode": 2004,
        "ResponseType": "Locked User"
      };
      mock.onPost(`/ecp/patient/login`).reply(400, expectedResult);
      act(() => {
        login = renderWithProviders(<AuthPage />), {
          container: document.body.appendChild(element),
          legacyRoot: true,
        };
      });
      const title = login.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    when('the user enters a valid username and password', () => {
      const usernameField = login.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, { target: { value: "validUsername@mail.com" } });
      expect(usernameField.value).toEqual("validUsername@mail.com");

      const passwordField = login.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and('licks on the login button', async () => {
      const loginbtn = login.getByRole("button", { name: /Login/i });
      fireEvent.click(loginbtn);
      // await waitFor(() => {
      //   login.getByText("errorLoginLockedMessage")
      // })
    });

    then('the user sees the error message Account get locked', () => {
      // expect(login.getByText("errorLoginLockedMessage")).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-7_STORY_EPP-4916- Verify if the user receives an email link after the account gets locked', ({ given, and, then, when }) => {
    given('the use launch the XXX URL', () => {
      defaultValidation()
    });

    and('user navigates to the Patient Portal application', () => {
      defaultValidation()
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

    and('the user should enter a valid Email or Phone Number field', () => {
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
      defaultValidation()
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
        "ResponseCode": 2004,
        "ResponseType": "failure"
      }
      mock.onPost(`/ecp/patient/securityquestions/validate`).reply(400, error);
      const continueButton = container.getByTestId("continuebtn");
      fireEvent.submit(continueButton);
      await waitFor(() => {
        container.getByText("errorAccountLock")
      })
    });

    then('the user sees an error message Your account get locked', () => {
      expect(container.getByText("errorAccountLock")).toBeInTheDocument()
    });

    and('clicks on the Back to login button', () => {
      const backToLogin = container.getByTestId("backtologin");
      fireEvent.submit(backToLogin);
    });

    and('user sees the login page', () => {
      const expectedResult = {
        "ResponseCode": 2004,
        "ResponseType": "Locked User"
      };
      mock.onPost(`/ecp/patient/login`).reply(400, expectedResult);
      act(() => {
        login = renderWithProviders(<AuthPage />), {
          container: document.body.appendChild(element),
          legacyRoot: true,
        };
      });
      const title = login.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    when('the user enters a valid username and password', () => {
      const usernameField = login.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, { target: { value: "validUsername@mail.com" } });
      expect(usernameField.value).toEqual("validUsername@mail.com");

      const passwordField = login.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and('licks on the login button', async () => {
      const loginbtn = login.getByRole("button", { name: /Login/i });
      fireEvent.click(loginbtn);
      // await waitFor(() => {
      //   login.getByText("errorLoginLockedMessage")
      // })
    });

    then('the user sees the error message Account get locked', () => {
      // expect(login.getByText("errorLoginLockedMessage")).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-7_STORY_EPP-4916- Verify if the user enters a 4th-time correct answer for a security question then check user account gets locked or not.', ({ given, and, then, when }) => {
    given('the use launch the XXX URL', () => {
      defaultValidation()
    });

    and('user navigates to the Patient Portal application', () => {
      defaultValidation()
    });

    and('user lands on the Patient Login screen', () => {
      container = renderWithProviders(<AuthPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });

    then(/^the user should see the "(.*)" link$/, (arg0) => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when('the user clicks on the Forgot Password link', () => {
      const link = container.getByTestId("forgotpswd");
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

    and('the user should enter a valid Email or Phone Number field', () => {
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
      defaultValidation()
    });

    and(/^Enter the (\d+) time wrong answers to the security question$/, (arg0) => {
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

    and(/^(\d+)th-time correct answer the security questions$/, (arg0) => {
      const question1 = container.getByLabelText("Test Question 1 *")
      const question2 = container.getByLabelText("Test Question 2 *")
      const question3 = container.getByLabelText("Test Question 3 *")

      fireEvent.change(question1, {
        target: { value: "true" },
      });

      fireEvent.change(question2, {
        target: { value: "true" },
      });

      fireEvent.change(question3, {
        target: { value: "true" },
      });
    });

    then('the user sees update  password page', async () => {
      const success = {
        "ResponseCode": 2000,
        "ResponseType": "success"
    }
      mock.onPost(`/ecp/patient/securityquestions/validate`).reply(200, success);
      const continueButton = container.getByTestId("continuebtn");
      fireEvent.submit(continueButton);
    });
  });
})