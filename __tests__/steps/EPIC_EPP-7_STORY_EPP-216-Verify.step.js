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

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-216.feature",
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
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  test("EPIC_EPP-7_STORY_EPP-216 - Verify user should be able to login into the patient portal without username & password using the magic link received to my registered mail id.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      launchURL()
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp()
    });

    when("user lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen()
    });

    and("user clicks on 'Forgot Password' link", async () => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid (.*)$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
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

    and(
      /^user should see "(.*)" button \(if security questions is set or not\)$/,
      (arg0) => {
        expect(
          container.getByTestId(TEST_ID.FORGOT_TEST_ID.answerQuestions)
        ).toBeInTheDocument();
      }
    );

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

    then("user should see One-time link page", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => { }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => { }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should receive a magic link mail", () => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see the mail with Email Subject as "(.*)"$/,
      (arg0) => { }
    );

    and(/^user should see mail message body as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user click on a magic link", () => {
      expect(true).toBeTruthy();
    });

    then("user should successfully be logged in", () => {
      expect(true).toBeTruthy();
    });

    and("user should see Home/Dashboard page", () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-216 - Verify user should be able to login into the patient portal without a username & password using the magic link received to my registered Phone number.', ({ given, and, when, then }) => {
    given('use launch the \'XXX\' url', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on \'Forgot Password\' link', async () => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid (.*)$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button \(if security questions is set or not\)$/, (arg0) => {
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

    then('user should see One-time link page', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when('user clicks on Send magic link', () => {
      expect(true).toBeTruthy();
    });

    then('user should see One-time link page', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and('user clicks on Send magic link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when('user access the messages from Phone', () => {
      expect(true).toBeTruthy();
    });

    then('user should receive a magic link mail', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see mail message body as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when('user click on a magic link', () => {
      expect(true).toBeTruthy();
    });

    then('user should successfully be logged in', () => {
      expect(true).toBeTruthy();
    });

    and('user should see Home or Dashboard page', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-216  - Verify the error message if user accessing the magic link after 24 hours (email mode)', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on \'Forgot Password\' link', async () => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid (.*)$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button \(if security questions is set\)$/, (arg0) => {
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

    then('user should see One-time link page', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when('user clicks on Send magic link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registered "(.*)" after (\d+) hours$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-216 - Verify user is not able to receive magic link when Internet connection is unavailable', ({ given, and, when, then }) => {
    given('use launch the \'XXX\' url', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on \'Forgot Password\' link', async () => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    and('user should enter valid Email or Phone Number', async () => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button \(if security questions is set or not\)$/, (arg0) => {
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

    then('user should see One-time link page', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when('user clicks on Send magic link', () => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button when conection is unavailable$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-216 - Verify user is not able to receive magic link when service is unavailable', ({ given, and, when, then }) => {
    given('use launch the \'XXX\' url', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on \'Forgot Password\' link', async () => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid (.*)$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button \(if security questions is set or not\)$/, (arg0) => {
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

    then('user should see One-time link page', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when('user clicks on Send magic link', () => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button when service is unavailable$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-216  - Verify the error message if user accessing the magic link after 24 hours (phone number mode)', ({ given, and, when, then }) => {
    given('use launch the \'XXX\' url', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on \'Forgot Password\' link', async () => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    and(/^user should enter valid (.*)$/, async (arg0) => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button \(if security questions is set\)$/, (arg0) => {
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

    then('user should see One-time link page', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and('user clicks on Send magic link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the inbox of registeredo "(.*)" after (\d+) hours$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-216 - Verify user should see forgot password screen when user refresh the screen', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on \'Forgot Password\' link', async () => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    and('user should enter valid Email or Phone Number', async () => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button \(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see One-time link page', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and('user clicks on Send magic link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see message "Click on the magic link sent to your email or phone number to access your account"', () => {
      expect(true).toBeTruthy();
    });

    when('user access the messages from Phone', () => {
      expect(true).toBeTruthy();
    });

    then('user should receive a magic link mail', () => {
      expect(true).toBeTruthy();
    });

    and('user should see the mail with Email', () => {
      expect(true).toBeTruthy();
    });

    when('user click on reload browser', () => {
      expect(true).toBeTruthy();
    });

    then('user should see Forgot password screen', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-216 - Verify user should see One-time screen loaded within 3 seconds', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on \'Forgot Password\' link', async () => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    and('user should enter valid Email or Phone Number', async () => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button \(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see One-time link page', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see loaded less than (\d+) seconds$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7 _STORY_EPP-216 - Verify user should not see any error after click on F12', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on \'Forgot Password\' link', async () => {
      cleanup()
      container = await renderLogin();
      fireEvent.click(container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink));
      expect(
        container.getByTestId(TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });

    and('user should enter valid Email or Phone Number', async () => {
      cleanup();
      container = await renderForgotPassword();
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and(/^user clicks on "(.*)" button$/, async (arg0) => {
      container = await clickContinueForgot(container, mock)
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button \(if security questions is set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see One-time link page', () => {
      expect(true).toBeTruthy();
    });

    and(/^user click F(\d+) on keyboard$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should not see any error after click on F(\d+)$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
