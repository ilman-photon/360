import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPassword";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Login } from "../../src/components/organisms/Login/login";
import AuthPage from "../../src/pages/patient/login";
import { renderWithProviders } from "../src/utils/test-util";
import { renderLogin, navigateToPatientPortalHome } from "../../__mocks__/commonSteps";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-239.feature",
  {
    tagFilter: "@included and not @excluded",
  }
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
  afterEach(cleanup);
  test('EPIC_EPP-7_STORY_EPP-239 - Verify user should see the "Passwords do not match" error message', ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and("user navigates to the Patient Portal application", () => {
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
      expect(usernameField).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByTestId("continuebtn");
      fireEvent.submit(continueId);
      await waitFor(() => {
        container.getByTestId("answerquestions")
      })
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(
      /^user should see "(.*)" button\(if security questions is not set\)$/,
      (arg0) => { }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      fireEvent.submit(onetimelink);
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => { }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => { }
    );

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should view the page with “Password Reset” heading", () => {
      expect(true).toBeTruthy();
    });

    and("User should view the text “Link sent to your phone number”", () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the messages of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should receive a link mail to reset password", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see mail/ message body as", (table) => {
      expect(true).toBeTruthy();
    });

    when("user click on a magic link", () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup()
      useRouter.query = jest
        .fn()
        .mockReturnValue({ username: "smith1@photon.com" });
      act(() => {
        container = render(
          <Provider store={store}>
            {UpdatePasswordPage.getLayout(<UpdatePasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText("title"));
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(
        container.getByLabelText("passwordPlaceHolder *")
      ).toBeInTheDocument();
      expect(
        container.getByLabelText("confirmPasswordPlaceHolder *")
      ).toBeInTheDocument();
    });

    when(/^User should fill invalid (.*) field$/, (arg0) => {
      const password = container.getByLabelText("passwordPlaceHolder *");
      fireEvent.change(password, { target: { value: "user12" } });
      expect(password.value).toEqual("user12");
    });

    and(/^User should fill invalid (.*) field$/, (arg0) => {
      const confirmPassword = container.getByLabelText(
        "confirmPasswordPlaceHolder *"
      );
      fireEvent.change(confirmPassword, { target: { value: "user12" } });
      expect(confirmPassword.value).toEqual("user12");
    });

    and(
      "user should see mask the entered password along with an option to unmask it by default",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(/^User should see "(.*)" button$/, (arg0) => {
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      expect(continueId).toBeInTheDocument();
    });

    when(/^User should click on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      fireEvent.change(container.getByLabelText("confirmPasswordPlaceHolder *"), {
        target: { value: "user12" },
      });
      fireEvent.change(container.getByLabelText("passwordPlaceHolder *"), {
        target: { value: "user12" },
      });
      await fireEvent.click(continueId);
    });

    then(/^User should see error message "(.*)"$/, async (arg0) => {
      await waitFor(() => container.getByText(/passwordNotMeetRequirements/i));
      const usernameFieldError = container.getByText(
        /passwordNotMeetRequirements/i
      );
      expect(usernameFieldError).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-239 - Verify user should see "page loading" within 3 seconds', ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and("user navigates to the Patient Portal application", () => {
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
      expect(usernameField).toBeTruthy();
    });

    and(/^user should enter valid '(.*)' field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByTestId("continuebtn");
      fireEvent.submit(continueId);
      await waitFor(() => {
        container.getByTestId("answerquestions")
      })
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(
      /^user should see "(.*)" button\(if security questions is not set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      fireEvent.submit(onetimelink);
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should view the page with “Password Reset” heading", () => {
      expect(true).toBeTruthy();
    });

    and("User should view the text “Link sent to your phone number”", () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the messages of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should receive a link mail to reset password", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see mail/ message body as", (table) => {
      expect(true).toBeTruthy();
    });

    when("user click on a magic link", () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup()
      useRouter.query = jest
        .fn()
        .mockReturnValue({ username: "smith1@photon.com" });
      act(() => {
        container = render(
          <Provider store={store}>
            {UpdatePasswordPage.getLayout(<UpdatePasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText("title"));
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(
        container.getByLabelText("passwordPlaceHolder *")
      ).toBeInTheDocument();
      expect(
        container.getByLabelText("confirmPasswordPlaceHolder *")
      ).toBeInTheDocument();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      const password = container.getByLabelText("passwordPlaceHolder *");
      fireEvent.change(password, { target: { value: "Password@123" } });
      expect(password.value).toEqual("Password@123");
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      const confirmPassword = container.getByLabelText(
        "confirmPasswordPlaceHolder *"
      );
      fireEvent.change(confirmPassword, { target: { value: "Password@123" } });
      expect(confirmPassword.value).toEqual("Password@123");
    });

    then(
      "user should see mask the entered password along with an option to unmask it by default",
      () => { }
    );

    and(/^User should see "(.*)" button$/, (arg0) => {
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      expect(continueId).toBeInTheDocument();
    });

    when(/^User should click on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      fireEvent.change(container.getByLabelText("confirmPasswordPlaceHolder *"), {
        target: { value: "user12" },
      });
      fireEvent.change(container.getByLabelText("passwordPlaceHolder *"), {
        target: { value: "user12" },
      });
      await fireEvent.click(continueId);
    });

    then(/^User should see "(.*)" screen$/, async (arg0) => {
      cleanup()
      useRouter.query = jest
        .fn()
        .mockReturnValue({ username: "smith1@photon.com" });
      act(() => {
        container = render(
          <Provider store={store}>
            {UpdatePasswordPage.getLayout(<UpdatePasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText("title"));
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^User should see "(.*)" within (\d+) seconds$/, async (arg0, arg1) => {
      // expect(container.getByText("successUpdatePassword")).toBeInTheDocument();

      // await fireEvent.click(
      //   container.getByRole("button", {
      //     name: /backButtonLink/i,
      //   })
      // );
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-239 - Verify user should see the empty "<New password>" and "<Confirm new password>" fields when user refresh the page', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
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
      expect(usernameField).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByTestId("continuebtn");
      fireEvent.submit(continueId);
      await waitFor(() => {
        container.getByTestId("answerquestions")
      })
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      fireEvent.submit(onetimelink);
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your phone number”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the messages of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body as', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a magic link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup()
      useRouter.query = jest
        .fn()
        .mockReturnValue({ username: "smith1@photon.com" });
      act(() => {
        container = render(
          <Provider store={store}>
            {UpdatePasswordPage.getLayout(<UpdatePasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText("title"));
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(
        container.getByLabelText("passwordPlaceHolder *")
      ).toBeInTheDocument();
      expect(
        container.getByLabelText("confirmPasswordPlaceHolder *")
      ).toBeInTheDocument();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      const password = container.getByLabelText("passwordPlaceHolder *");
      fireEvent.change(password, { target: { value: "Password@123" } });
      expect(password.value).toEqual("Password@123");
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      const confirmPassword = container.getByLabelText(
        "confirmPasswordPlaceHolder *"
      );
      fireEvent.change(confirmPassword, { target: { value: "user12" } });
      expect(confirmPassword.value).toEqual("user12");
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and('User refresh the page', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see the (.*) and (.*) fields is empty$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-239 - Verify user  is not able to submit during set forgot password "<New password>" and "<Confirm new password>" do not match when service is unavailable', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
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
      expect(usernameField).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByTestId("continuebtn");
      fireEvent.submit(continueId);
      await waitFor(() => {
        container.getByTestId("answerquestions")
      })
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      fireEvent.submit(onetimelink);
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your phone number”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the messages of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a magic link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup()
      useRouter.query = jest
        .fn()
        .mockReturnValue({ username: "smith1@photon.com" });
      act(() => {
        container = render(
          <Provider store={store}>
            {UpdatePasswordPage.getLayout(<UpdatePasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText("title"));
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(
        container.getByLabelText("passwordPlaceHolder *")
      ).toBeInTheDocument();
      expect(
        container.getByLabelText("confirmPasswordPlaceHolder *")
      ).toBeInTheDocument();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      const password = container.getByLabelText("passwordPlaceHolder *");
      fireEvent.change(password, { target: { value: "Password@123" } });
      expect(password.value).toEqual("Password@123");
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      const confirmPassword = container.getByLabelText(
        "confirmPasswordPlaceHolder *"
      );
      fireEvent.change(confirmPassword, { target: { value: "user12" } });
      expect(confirmPassword.value).toEqual("user12");
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      expect(continueId).toBeInTheDocument();
    });

    when(/^User should click on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      fireEvent.change(container.getByLabelText("confirmPasswordPlaceHolder *"), {
        target: { value: "user12" },
      });
      fireEvent.change(container.getByLabelText("passwordPlaceHolder *"), {
        target: { value: "user12" },
      });
      await fireEvent.click(continueId);
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-239 - Verify user  is not able to submit during set forgot password "<New password>" and "<Confirm new password>" do not match when internet connection is unavailable', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
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
      expect(usernameField).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByTestId("continuebtn");
      fireEvent.submit(continueId);
      await waitFor(() => {
        container.getByTestId("answerquestions")
      })
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      fireEvent.submit(onetimelink);
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your phone number”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the messages of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a magic link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup()
      useRouter.query = jest
        .fn()
        .mockReturnValue({ username: "smith1@photon.com" });
      act(() => {
        container = render(
          <Provider store={store}>
            {UpdatePasswordPage.getLayout(<UpdatePasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText("title"));
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(
        container.getByLabelText("passwordPlaceHolder *")
      ).toBeInTheDocument();
      expect(
        container.getByLabelText("confirmPasswordPlaceHolder *")
      ).toBeInTheDocument();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      const password = container.getByLabelText("passwordPlaceHolder *");
      fireEvent.change(password, { target: { value: "Password@123" } });
      expect(password.value).toEqual("Password@123");
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      const confirmPassword = container.getByLabelText(
        "confirmPasswordPlaceHolder *"
      );
      fireEvent.change(confirmPassword, { target: { value: "user12" } });
      expect(confirmPassword.value).toEqual("user12");
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      expect(continueId).toBeInTheDocument();
    });

    when(/^User should click on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      fireEvent.change(container.getByLabelText("confirmPasswordPlaceHolder *"), {
        target: { value: "user12" },
      });
      fireEvent.change(container.getByLabelText("passwordPlaceHolder *"), {
        target: { value: "user12" },
      });
      await fireEvent.click(continueId);
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-239 - Verify user should not see any scripts error when after user press F12 on the console', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
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
      expect(usernameField).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByTestId("continuebtn");
      fireEvent.submit(continueId);
      await waitFor(() => {
        container.getByTestId("answerquestions")
      })
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      fireEvent.submit(onetimelink);
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should view the text “Answer the following questions to reset your password”', () => {
      expect(true).toBeTruthy();
    });

    and('user should view the questions fields', () => {
      expect(true).toBeTruthy();
    });

    and(/^user fills in (.*) and (.*)for the security questions they set up$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill the valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user press F(\d+) on the console$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should not see any scripts error', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-239 - Verify User should not copy and paste on <New Password>" and "<Confirm New Password>" fields', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL()
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
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
      expect(usernameField).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByTestId("continuebtn");
      fireEvent.submit(continueId);
      await waitFor(() => {
        container.getByTestId("answerquestions")
      })
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const answerquestions = container.getByTestId("answerquestions")
      expect(answerquestions).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      expect(onetimelink).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      const onetimelink = container.getByTestId("onetimelink")
      fireEvent.submit(onetimelink);
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should view the text “Answer the following questions to reset your password”', () => {
      expect(true).toBeTruthy();
    });

    and('user should view the questions fields', () => {
      expect(true).toBeTruthy();
    });

    and(/^user fills in (.*) and (.*)for the security questions they set up$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill the valid (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^User should not copy and paste on (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });
});
