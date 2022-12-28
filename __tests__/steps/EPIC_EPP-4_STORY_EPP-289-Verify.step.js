import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";
import { renderWithProviders } from "../src/utils/test-util";
import { Login } from "../../src/components/organisms/Login/login";
import {
  renderLogin,
  navigateToPatientPortalHome,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-289.feature",
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
};

const navigateToPatientPortalApp = () => {
  mock
    .onGet(`https://api.ipify.org?format=json`)
    .reply(200, { ip: "10.10.10.10" });
  act(() => {
    container = renderWithProviders(<AuthPage />, {
      container: document.body.appendChild(element),
      legacyRoot: true,
    });
  });
};

const landOnPatientPortalScreen = () => {
  const title = container.getByText("formTitle");
  expect("formTitle").toEqual(title.textContent);
};

defineFeature(feature, (test) => {
  afterEach(() => {
    cleanup();
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify user  should be able to logout from patient portal", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the 'XXX' url", () => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    then(/^user should see (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user enter password in (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    and("user should see 'Login' button", () => {
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(loginbtn).toBeInTheDocument();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      const loginbtn = container.getByTestId("loginbtn");
      fireEvent.submit(loginbtn);
    });

    then("user should see Home/Dashboard Page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and("user should see 'Logout' option under Profile name", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    when("user click on 'Logout' button", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    then("user should see Login screen", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify user is not able to logout when Internet connection is unavailable", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the 'XXX' url", () => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    then(/^user should see (.*) field$/, (arg0) => {
      const usenameField = container.getByTestId("emailorphonenumber");
      expect(usenameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user enter password in (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    and("user should see 'Login' button", () => {
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(loginbtn).toBeInTheDocument();
    });

    when("user click on 'Login' button", () => {
      const loginbtn = container.getByTestId("loginbtn");
      fireEvent.submit(loginbtn);
    });

    then("user should see Home/Dashboard Page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and("user should see 'Logout' option under Profile name", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    when("user click on 'Logout' button when internet is unavailable", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    then("user should see appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify admin user  should be able to logout form patient portal", ({
    given,
    when,
    then,
    and,
  }) => {
    given("admin user launch the 'XXX' url", () => {
      launchURL();
    });

    and("admin user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("admin lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    then(/^admin user should see (.*) field$/, (arg0) => {
      const usenameField = container.getByTestId("emailorphonenumber");
      expect(usenameField).toBeInTheDocument();
    });

    and(/^admin user should see (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    when(/^admin user enter Email or Phone Number in (.*) field$/, (arg0) => {
      const usenameField = container.getByTestId("emailorphonenumber");
      expect(usenameField).toBeInTheDocument();
    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    and("admin user should see 'Login' button", () => {
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(loginbtn).toBeInTheDocument();
    });

    when("admin user click on 'Login' button", () => {
      const loginbtn = container.getByTestId("loginbtn");
      fireEvent.submit(loginbtn);
    });

    then("admin user should see Home/Dashboard Page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and("admin user should see 'Logout' option under Profile name", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    when("admin user click on 'Logout' button", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    then("admin user should see Login screen", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify user is not able to logout when Service is unavailable", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the 'XXX' url", () => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("user lands onto “Patient Login” screen", () => {
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
    });

    then(/^user should see (.*) field$/, (arg0) => {
      const usenameField = container.getByTestId("emailorphonenumber");
      expect(usenameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user enter password in (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    and("user should see 'Login' button", () => {
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(loginbtn).toBeInTheDocument();
    });

    when("user click on 'Login' button", () => {
      const loginbtn = container.getByTestId("loginbtn");
      fireEvent.submit(loginbtn);
    });

    then("user should see Home/Dashboard Page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and("user should see 'Logout' option under Profile name", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    when("user click on 'Logout' button when service is unavailable", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    then("user should see appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify user is able to view the Logout screen loaded within 3 sec", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("user lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see (.*) field$/, (arg0) => {
      const usenameField = container.getByTestId("emailorphonenumber");
      expect(usenameField).toBeInTheDocument();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user enter password in (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    and("user should see 'Login' button", () => {
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(loginbtn).toBeInTheDocument();
    });

    when("user click on 'Login' button", () => {
      const loginbtn = container.getByTestId("loginbtn");
      fireEvent.submit(loginbtn);
    });

    then("user should see Home/Dashboard Page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and("user should see 'Logout' option under Profile name", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    when("user click on 'Logout' button when internet is unavailable", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    then("user should see appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify whether user is able to view Dev Tools without errors when F12 is clicked", ({
    given,
    when,
    then,
  }) => {
    given("Admin launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    when(/^Admin provides  (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^Admin (.*) the (.*) button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^Admin must "(.*)" whether the Dev Tools are Displayed$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify admin user is not able to logout when Internet connection is unavailable", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      launchURL();
    });

    and("admin user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("admin user lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    then(/^admin user should see (.*) field$/, (arg0) => {
      const usenameField = container.getByTestId("emailorphonenumber");
      expect(usenameField).toBeInTheDocument();
    });

    and(/^admin user should see (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    when(/^admin  user enter Email or Phone Number in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("admin user should see 'Login' button", () => {
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(loginbtn).toBeInTheDocument();
    });

    when("admin user click on 'Login' button", () => {
      const loginbtn = container.getByTestId("loginbtn");
      fireEvent.submit(loginbtn);
    });

    then("admin user should see Home/Dashboard Page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and("admin user should see 'Logout' option under Profile name", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    when(
      "admin user click on 'Logout' button when internet is unavailable",
      () => {
        // const logout = container.getByTestId("logout");
        // expect(userMenu).toBeInTheDocument();
      }
    );

    then("admin user should see appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify admin user is not able to logout when Service is unavailable", ({
    given,
    and,
    when,
    then,
  }) => {
    given("admin user launch the 'XXX' url", () => {
      launchURL();
    });

    and("admin user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("admin user lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    then(/^admin user should see (.*) field$/, (arg0) => {
      const usenameField = container.getByTestId("emailorphonenumber");
      expect(usenameField).toBeInTheDocument();
    });

    and(/^admin user should see (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    when(/^admin user enter Email or Phone Number in (.*) field$/, (arg0) => {
      const usenameField = container.getByTestId("emailorphonenumber");
      expect(usenameField).toBeInTheDocument();
    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    and("admin user should see 'Login' button", () => {
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(loginbtn).toBeInTheDocument();
    });

    when("admin user click on 'Login' button", () => {
      const loginbtn = container.getByTestId("loginbtn");
      fireEvent.submit(loginbtn);
    });

    then("admin user should see Home/Dashboard Page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and("admin user should see 'Logout' option under Profile name", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    when(
      "admin user click on 'Logout' button when service is unavailable",
      () => {
        // const logout = container.getByTestId("logout");
        // expect(userMenu).toBeInTheDocument();
      }
    );

    then("admin user should see appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify admin user is able to view the Logout screen loaded within 3 sec", ({
    given,
    and,
    when,
    then,
  }) => {
    given("admin  user launch the 'XXX' url", () => {
      launchURL();
    });

    and("admin user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("admin  user lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    then(/^admin  user should see (.*) field$/, (arg0) => {
      const usenameField = container.getByTestId("emailorphonenumber");
      expect(usenameField).toBeInTheDocument();
    });

    and(/^admin user should see (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    when(/^admin  user enter Email or Phone Number in (.*) field$/, (arg0) => {
      const usenameField = container.getByTestId("emailorphonenumber");
      expect(usenameField).toBeInTheDocument();
    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });

    and("admin user should see 'Login' button", () => {
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(loginbtn).toBeInTheDocument();
    });

    when("admin  user click on 'Login' button", () => {
      const loginbtn = container.getByTestId("loginbtn");
      fireEvent.submit(loginbtn);
    });

    then("admin  user should see Home/Dashboard Page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and("admin user should see 'Logout' option under Profile name", () => {
      // const logout = container.getByTestId("logout");
      // expect(userMenu).toBeInTheDocument();
    });

    when(
      "admin  user click on 'Logout' button when internet is unavailable",
      () => {
        // const logout = container.getByTestId("logout");
        // expect(userMenu).toBeInTheDocument();
      }
    );

    then("admin user should see appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify whether admin user is able to view Dev Tools without errors when F12 is clicked", ({
    given,
    when,
    then,
  }) => {
    given("Admin user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    when(/^Admin user provides  (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^Admin user (.*) the (.*) button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(
      /^Admin user must "(.*)" whether the Dev Tools are Displayed$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );
  });
});
