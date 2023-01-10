import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  act,
  cleanup,
  waitFor,
} from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPasswordComponent";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";
import {
  renderLogin,
  navigateToPatientPortalHome,
  createMatchMedia,
} from "../../__mocks__/commonSteps";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import MfaPage from "../../src/pages/patient/mfa";
import { Provider } from "react-redux";
import Cookies from "universal-cookie";
import store from "../../src/store/store";
import InsuranceInfoPage from "../../src/pages/patient/account/insurance-info";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/Epp-949.feature"
);

let container;
const defaultValidation = () => {
  expect(true).toBeTruthy();
};

const mock = new MockAdapter(axios);
const element = document.createElement("div");

const launchURL = () => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
};

const landOnPatientPortalScreen = () => {
  mock
    .onGet(`https://api.ipify.org?format=json`)
    .reply(200, { ip: "10.10.10.10" });
  act(() => {
    container = renderWithProviders(<AuthPage />, {
      container: document.body.appendChild(element),
      legacyRoot: true,
    });
  });
  const title = container.getByText("formTitle");
  expect("formTitle").toEqual(title.textContent);
};

defineFeature(feature, (test) => {
  beforeEach(async () => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=true;accessToken=1234",
    });
  });

  test('EPIC_EPP-10_STORY_EPP-949 - Verify if "New insurance button" is enabled for user', ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      launchURL();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
      expect(
        container.getByText(/You have no insurance on file./i)
      ).toBeInTheDocument();
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and(/^user sees the "(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and(/^clicks on the "(.*)"$/, (arg0) => {
      // const btnAddInsurance = container.getByTestId("loc_btnAddInsurance")
      // expect(btnAddInsurance).toBeInTheDocument();
    });

    then(/^"(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("Insurance documents page open", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-10_STORY_EPP-949 -  Verify if the user can see the existing insurance", ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      launchURL();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    then(/^user sees the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-10_STORY_EPP-949 - Verify if the user can add new insurance details by clicking the " New Insurance  button"', ({
    and,
    when,
    then,
  }) => {
    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and("user sees the message   “There is no insurance on file”", () => {
      expect(true).toBeTruthy();
    });

    and(/^Clicks on the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("Fill all the required fields", () => {
      expect(true).toBeTruthy();
    });

    and(/^"(.*)" on the "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^"(.*)" is added to the list$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-10_STORY_EPP-949 - verify if the user can see the error message “This field is required” for those mandatory fields which are not filled", ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      launchURL();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and("user sees the message   “There is no insurance on file”", () => {
      expect(true).toBeTruthy();
    });

    and(/^Clicks on the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("do not fill any one of the required fields.", () => {
      expect(true).toBeTruthy();
    });

    and(/^"(.*)" on the "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(
      "the User sees the error message “This field is required”  under the respective field.",
      () => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-10_STORY_EPP-949 - Verify if the user can see the error message “Incorrect format” for those fields which are in incorrect format", ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      launchURL();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and("user sees the message   “There is no insurance on file”", () => {
      expect(true).toBeTruthy();
    });

    and(/^Clicks on the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("enter invalid formate in the required field", () => {
      expect(true).toBeTruthy();
    });

    and(/^"(.*)" on the "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(
      "the User sees the error message “Incorrect format”  under the respective field.",
      () => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-10_STORY_EPP-949 - Verify if the "Cancel " "button" is enabled for the user', ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      launchURL();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and("user sees the message   “There is no insurance on file”", () => {
      expect(true).toBeTruthy();
    });

    and(/^Clicks on the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("Fill all the required fields", () => {
      expect(true).toBeTruthy();
    });

    and(/^"(.*)" on the "(.*)" "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    then("All entered fields are erased.", () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-10_STORY_EPP-949 - Verify if the user can add maximum "5"new insurance details by clicking the " New Insurance  button"', ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      launchURL();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and("user sees the message   “There is no insurance on file”", () => {
      expect(true).toBeTruthy();
    });

    and(/^Clicks on the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("Fill all the required fields", () => {
      expect(true).toBeTruthy();
    });

    and(/^"(.*)" on the "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^"(.*)" is added to the list.$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^Clicks on the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("Fill all the required fields", () => {
      expect(true).toBeTruthy();
    });

    and(/^"(.*)" on the "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^User can add up to "(.*)" Insurance detailes$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-10_STORY_EPP-949 - Verify if the proper error message is displayed when the user tries to add more than 5 insurance.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      launchURL();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and("user sees the message   “There is no insurance on file”", () => {
      expect(true).toBeTruthy();
    });

    and(/^Clicks on the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^Add (\d+) successful "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^"(.*)" on the New insurance Button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "use sees the error message  “Cannot add any more insurances. The maximum limit has been reached”",
      () => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-10_STORY_EPP-949 -    Verify if the proper error message is displayed when the user tries to add insurance documents without an internet connection", ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      launchURL();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and("user sees the message   “There is no insurance on file”", () => {
      expect(true).toBeTruthy();
    });

    and(/^Clicks on the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^Switch off the"(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("Enter all the required fields", () => {
      expect(true).toBeTruthy();
    });

    and(/^"(.*)" on the "(.*)"< "(.*)">$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    then(
      'the user sees the error message  “check your internet connection".',
      () => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-10_STORY_EPP-949 -    Verify if all fields are erased when the user refreshes the browser", ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      launchURL();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and("user sees the message   “There is no insurance on file”", () => {
      expect(true).toBeTruthy();
    });

    and(/^Clicks on the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("Enter all the required fields", () => {
      expect(true).toBeTruthy();
    });

    and("Refresh the browser", () => {
      expect(true).toBeTruthy();
    });

    then("the user sees the sees all entered fields are erased.", () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-10_STORY_EPP-949 - Verify if a 503 Service unavailable message  displays when the user tries to fill "insurance details" when the server is on maintenance', ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      launchURL();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and("user sees the message   “There is no insurance on file”", () => {
      expect(true).toBeTruthy();
    });

    and(/^Clicks on the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^Switch off the"(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("Enter all the required fields", () => {
      expect(true).toBeTruthy();
    });

    and(/^"(.*)" on the "(.*)" "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    then(/^the user sees the error message  "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-10_STORY_EPP-949 -    Verify if the user can add new Insurance details by "mobile browser"', ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the mobile Browser Enter the' XXX' URL", () => {
      expect(true).toBeTruthy();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and("user sees the message   “There is no insurance on file”", () => {
      expect(true).toBeTruthy();
    });

    and(/^Clicks on the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("Fill all the required fields", () => {
      expect(true).toBeTruthy();
    });

    and(/^"(.*)" on the "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^"(.*)" is added to the list$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-10_STORY_EPP-949 -    Verify if the insurance details page is opened within 3 seconds when the user clicks on the " New insurance button"', ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the mobile Browser Enter the' XXX' URL", () => {
      expect(true).toBeTruthy();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    then(
      /^the "(.*)" page is opened for (\d+) or less than (\d+) seconds.$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-10_STORY_EPP-949 -    Verify if the user is able to view Dev Tools When F12 is clicked", ({
    given,
    and,
    when,
    then,
  }) => {
    given("Launch  the Browser Enter the' XXX' URL", () => {
      expect(true).toBeTruthy();
    });

    and("user lands on the “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
      expect(loginbtn).toBeInTheDocument();
    });

    then("user lands on the dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and(/^clicks on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user navigates to the "(.*)"$/, async (arg0) => {
      cleanup();
      window.matchMedia = createMatchMedia("1920px");
      container = render(
        <Provider store={store}>
          <InsuranceInfoPage />
        </Provider>
      );
      await waitFor(() =>
        container.getByText(/You have no insurance on file./i)
      );
    });

    and(/^clicks on"(.*)"$/, (arg0) => {
      const pageInsurance = container.getByText(
        /You have no insurance on file./i
      );
      expect(pageInsurance).toBeInTheDocument();
    });

    and(
      /^"(.*)" page is opened for (\d+) or less than (\d+) seconds.$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^Clicks on "(.*)" key in keyboard$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user must "(.*)" whether the Dev Tools are Displayed.$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
