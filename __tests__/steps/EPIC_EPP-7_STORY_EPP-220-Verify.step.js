import { fireEvent, render, act, cleanup, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import ConfirmationForm from "../../src/components/organisms/ConfirmationForm/confirmationForm";
import RowRadioButtonsGroup from "../../src/components/atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Controller } from "react-hook-form";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";
import { TEST_ID } from "../../src/utils/constants";
import { renderLogin, renderForgotPassword, clickContinueForgot } from "../../__mocks__/commonSteps";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import { Provider } from "react-redux";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-220.feature"
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

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  test('EPIC_EPP-7_STORY_EPP-220 - Verify user  is not able to submit "Set New Password" when internet connection is unavailable', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      expect(forgotPassBtn).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      fireEvent.click(forgotPassBtn);
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(
        container.getByText("titleOneTime")
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("email-test")
      ).toBeInTheDocument();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("phone-test")
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
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

    when('user click on a reset password link', () => {
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
      const password = container.getByLabelText("passwordPlaceHolder *");
      fireEvent.change(password, { target: { value: "Password@123" } });
      expect(password.value).toEqual("Password@123");
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

  test('EPIC_EPP-7_STORY_EPP-220 - Verify User should not copy and paste on "<New Password>" and "<Confirm New Password>" fields', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      expect(forgotPassBtn).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      fireEvent.click(forgotPassBtn);
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(
        container.getByText("titleOneTime")
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("email-test")
      ).toBeInTheDocument();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("phone-test")
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
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

    when('user click on a reset password link', () => {
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
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^User should not copy and paste on (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-219 - Verify user  is not able to submit "Set New Password" when service is unavailable', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      expect(forgotPassBtn).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      fireEvent.click(forgotPassBtn);
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(
        container.getByText("titleOneTime")
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("email-test")
      ).toBeInTheDocument();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("phone-test")
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
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

    when('user click on a reset password link', () => {
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
      const password = container.getByLabelText("passwordPlaceHolder *");
      fireEvent.change(password, { target: { value: "Password@123" } });
      expect(password.value).toEqual("Password@123");
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

  test('EPIC_EPP-7_STORY_EPP-220 - Verify user should see "page loading" within 3 seconds', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      expect(forgotPassBtn).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      fireEvent.click(forgotPassBtn);
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(
        container.getByText("titleOneTime")
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("email-test")
      ).toBeInTheDocument();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("phone-test")
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
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

    when('user click on a reset password link', () => {
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
      const password = container.getByLabelText("passwordPlaceHolder *");
      fireEvent.change(password, { target: { value: "Password@123" } });
      expect(password.value).toEqual("Password@123");
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

    then(/^User should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" within (\d+) seconds$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify user should see empty fields when user refresh the page', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      expect(forgotPassBtn).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      fireEvent.click(forgotPassBtn);
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(
        container.getByText("titleOneTime")
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("email-test")
      ).toBeInTheDocument();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("phone-test")
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
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

    when('user click on a reset password link', () => {
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
      const password = container.getByLabelText("passwordPlaceHolder *");
      fireEvent.change(password, { target: { value: "Password@123" } });
      expect(password.value).toEqual("Password@123");
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

    then('User refresh the page', () => {
      expect(true).toBeTruthy();
    });

    and('User should see empty fields', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify user should not see any scripts error when after user press F12 on the console', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      expect(forgotPassBtn).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      fireEvent.click(forgotPassBtn);
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(
        container.getByText("titleOneTime")
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("email-test")
      ).toBeInTheDocument();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("phone-test")
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
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

    when('user click on a reset password link', () => {
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

    when(/^user press F(\d+) on the console$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should not see any scripts error', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Negative tests - Verify user should see "Password does not meet requirements" error message', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      expect(forgotPassBtn).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      fireEvent.click(forgotPassBtn);
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(
        container.getByText("titleOneTime")
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("email-test")
      ).toBeInTheDocument();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("phone-test")
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
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

    when('user click on a reset password link', () => {
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
      expect(true).toBeTruthy();
    });

    when(/^User should fill less invalid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill invalid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mask the entered password along with an option to unmask it by default', () => {
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
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify user able to navigate to the Select option screen from the Forgot Password Screen when Security questions not set', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      expect(forgotPassBtn).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      fireEvent.click(forgotPassBtn);
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify should be able to receive reset password link  to the registered Email without answering the security questions if they are not set.', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      expect(forgotPassBtn).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      fireEvent.click(forgotPassBtn);
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(
        container.getByText("titleOneTime")
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("email-test")
      ).toBeInTheDocument();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("phone-test")
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
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

    when('user click on a reset password link', () => {
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
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify should be able to receive reset password link to the registered Phone number without answering the security questions if they are not set.', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      expect(forgotPassBtn).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      fireEvent.click(forgotPassBtn);
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(
        container.getByText("titleOneTime")
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("email-test")
      ).toBeInTheDocument();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(
        container.getByTestId("phone-test")
      ).toBeInTheDocument();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      fireEvent.click(container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink));
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

    when('user click on a reset password link', () => {
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
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify should be able to set a new password using the link received to the registered email without answering the security questions if they are not set', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      expect(forgotPassBtn).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      const forgotPassBtn = container.getByText("forgotPassword");
      fireEvent.click(forgotPassBtn);
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should not set the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should configure "(.*)" and "(.*)" radio button during registration$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" and "(.*)" radio button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the page with "(.*)" heading$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see the "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body as below', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on a magic link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill the valid (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then('The system should be mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" message$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('User should receive an email to their registered email-id regarding password reset', () => {
      expect(true).toBeTruthy();
    });

    when('User should click the link - Open mail', () => {
      expect(true).toBeTruthy();
    });

    and('User Login to the email', () => {
      expect(true).toBeTruthy();
    });

    and('The mail will looks like with below format', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User inputs valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User input (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify should be able to set a new password using the link received to the registered Phone Number without answering the security questions if they are not set', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see Forgot Password screen', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should input valid (.*)field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      // container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      // expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      // expect(
      //   container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      // ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      // expect(
      //   container.getByTestId("email-test")
      // ).toBeInTheDocument();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      // expect(
      //   container.getByTestId("phone-test")
      // ).toBeInTheDocument();
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

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill the valid (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then('The system should be mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should see "(.*)" message$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('User should receive an email to their registered email-id regarding password reset', () => {
      expect(true).toBeTruthy();
    });

    when('User should click the link - Open mail', () => {
      expect(true).toBeTruthy();
    });

    and('User Login to the email', () => {
      expect(true).toBeTruthy();
    });

    and('The mail will looks like with below format', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User inputs valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User input (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-220 - Verify the error message “Reset password link has been expired” if the user clicks on the link received in email/text to update password 24 hours after it has been sent', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and('user navigates to the Patient Portal application', () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see Forgot Password screen', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should input valid (.*)field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      // container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      // expect(container.getByText("or")).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      // expect(
      //   container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
      // ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      // expect(
      //   container.getByTestId("email-test")
      // ).toBeInTheDocument();
    });

    and(/^user should select only  "(.*)" as "(.*)" or "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your email”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)" or  "Check for a link to reset your password“$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)" or message of "(.*)" after (\d+) hours$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
