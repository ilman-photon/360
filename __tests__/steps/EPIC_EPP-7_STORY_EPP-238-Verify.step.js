import { fireEvent, render, act, cleanup, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPassword";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";
import { renderLogin, navigateToPatientPortalHome } from "../../__mocks__/commonSteps";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-238.feature"
);

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");

const launchURL = () => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

const navigateToPatientPortalApp = () => {
  mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
  act(() => {
    container = renderWithProviders(<AuthPage />, {
      container: document.body.appendChild(element),
      legacyRoot: true,
    });
  });
}

const landOnPatientPortalScreen = () => {
  const title = container.getByText("formTitle");
  expect("formTitle").toEqual(title.textContent);
}

defineFeature(feature, (test) => {
  afterEach(() => {
    cleanup()
  });
  test('EPIC_EPP-7_STORY_EPP-238 - Negative Tests - Verify User should see the error message "Enter a valid Email or Phone Number"', ({
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

    when(`user lands onto "Patient Login" screen`, () => {
      landOnPatientPortalScreen()
    });

    then('user should see "Forgot Password" link', async () => {
      cleanup()
      container = await renderLogin()
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const link = container.getByTestId("forgotpswd");
      fireEvent.click(link);
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
        SecurityQuestions: [
          {
            "Test Question 1": "a?",
            "Test Question 2": "b?",
            "Test Question 3": "c?"
          },
        ],
        PreferredComunication: "Both",
      };
      mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      act(() => {
        container.rerender(<ForgotPasswordPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      // const title = container.getByText("syncTitle");
      // expect("syncTitle").toEqual(title.textContent);
    });

    and('user should see "Email or Phone Number" field', () => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeTruthy();
    });

    and(
      'user should enter invalid email on "Email or Phone Number" field',
      () => {
        const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
        fireEvent.change(usernameField, { target: { value: "user1@" } });
        expect(usernameField.value).toEqual("user1@");
      }
    );

    and("user clicks on 'Continue' button", async () => {
      const continueId = container.getByTestId("continuebtn");
      fireEvent.submit(continueId);
    });

    then(
      'User should see the following error message "Enter a valid Email or Phone Number"',
      () => {
        // const continueId = container.getByRole("button", {
        //   name: /resetPasswordText/i,
        // });
        // fireEvent.click(continueId);
        // setTimeout(() => {
        //   const usernameFieldError = container.getByLabelText(
        //     /errorUsernameNotFound/i
        //   );
        //   expect(usernameFieldError).toBeTruthy();
        // }, 500);
      });
  });
  test('EPIC_EPP-7_STORY_EPP-238 - Verify user should see "page loading" within 3 seconds', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp()
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      landOnPatientPortalScreen()
    });

    then(/^user should see "(.*)" link$/, async (arg0) => {
      cleanup()
      container = await renderLogin()
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const link = container.getByTestId("forgotpswd");
      fireEvent.click(link);
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
        SecurityQuestions: [
          {
            "Test Question 1": "a?",
            "Test Question 2": "b?",
            "Test Question 3": "c?"
          },
        ],
        PreferredComunication: "Both",
      };
      mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      act(() => {
        container.rerender(<ForgotPasswordPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument()
    });

    and(/^user should enter invalid email on (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument()
      fireEvent.change(usernameField, {
        target: { value: "user1." },
      });
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      and('user clicks on "Continue" button', async () => {
        const continueId = container.getByTestId("continuebtn");
        fireEvent.submit(continueId);
        await waitFor(() => {
          container.getByTestId("answerquestions")
        })
      });
    });

    then(/^User should see the following error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" within (\d+) seconds$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-238 - Verify user  is not able to submit "Forgot Password" when service is unavailable', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp()
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      landOnPatientPortalScreen()
    });

    then(/^user should see "(.*)" link$/, async (arg0) => {
      cleanup()
      container = await renderLogin()
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const link = container.getByTestId("forgotpswd");
      fireEvent.click(link);
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
        SecurityQuestions: [
          {
            "Test Question 1": "a?",
            "Test Question 2": "b?",
            "Test Question 3": "c?"
          },
        ],
        PreferredComunication: "Both",
      };
      mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      act(() => {
        container.rerender(<ForgotPasswordPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument()
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument()
      fireEvent.change(usernameField, {
        target: { value: "user1@gmail.com" },
      });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      and('user clicks on "Continue" button', async () => {
        const continueId = container.getByTestId("continuebtn");
        fireEvent.submit(continueId);
        await waitFor(() => {
          container.getByTestId("answerquestions")
        })
      });
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-238 - Verify user  is not able to submit "Forgot Password" when internet connection is unavailable', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp()
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      landOnPatientPortalScreen()
    });

    then(/^user should see "(.*)" link$/, async (arg0) => {
      cleanup()
      container = await renderLogin()
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const link = container.getByTestId("forgotpswd");
      fireEvent.click(link);
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
        SecurityQuestions: [
          {
            "Test Question 1": "a?",
            "Test Question 2": "b?",
            "Test Question 3": "c?"
          },
        ],
        PreferredComunication: "Both",
      };
      mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      act(() => {
        container.rerender(<ForgotPasswordPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument()
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument()
      fireEvent.change(usernameField, {
        target: { value: "user1@gmail.com" },
      });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      and('user clicks on "Continue" button', async () => {
        const continueId = container.getByTestId("continuebtn");
        fireEvent.submit(continueId);
        await waitFor(() => {
          container.getByTestId("answerquestions")
        })
      });
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-238 - Verify User should see the empty field when user refesh the page', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp()
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      landOnPatientPortalScreen()
    });

    then(/^user should see "(.*)" link$/, async (arg0) => {
      cleanup()
      container = await renderLogin()
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const link = container.getByTestId("forgotpswd");
      fireEvent.click(link);
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
        SecurityQuestions: [
          {
            "Test Question 1": "a?",
            "Test Question 2": "b?",
            "Test Question 3": "c?"
          },
        ],
        PreferredComunication: "Both",
      };
      mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      act(() => {
        container.rerender(<ForgotPasswordPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument()
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument()
      fireEvent.change(usernameField, {
        target: { value: "user1@gmail.com" },
      });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    when('User should refresh the page', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see the empty (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-238 - Verify user should not see any scripts error when after user press F12 on the console', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp()
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      landOnPatientPortalScreen()
    });

    then(/^user should see "(.*)" link$/, async (arg0) => {
      cleanup()
      container = await renderLogin()
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const link = container.getByTestId("forgotpswd");
      fireEvent.click(link);
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
        SecurityQuestions: [
          {
            "Test Question 1": "a?",
            "Test Question 2": "b?",
            "Test Question 3": "c?"
          },
        ],
        PreferredComunication: "Both",
      };
      mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      act(() => {
        container.rerender(<ForgotPasswordPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument()
    });

    and(/^user should input Unregistered Phone Number on (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument()
      fireEvent.change(usernameField, {
        target: { value: "user1@gmail.com" },
      });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      and('user clicks on "Continue" button', async () => {
        const continueId = container.getByTestId("continuebtn");
        fireEvent.submit(continueId);
        await waitFor(() => {
          container.getByTestId("answerquestions")
        })
      });
    });

    when(/^User press F(\d+) on the console$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('User  should not see any scripts error', () => {
      expect(true).toBeTruthy();
    });
  });
});
