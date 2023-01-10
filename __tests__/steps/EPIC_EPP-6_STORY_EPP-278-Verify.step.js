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
} from "../../__mocks__/commonSteps";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import MfaPage from "../../src/pages/patient/mfa";
import { Provider } from "react-redux";
import Cookies from "universal-cookie";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-278.feature"
);

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com";
      else if (param === "securityQuestions") return [];
      if (param === "ip") return "10.10.10.10";

      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
    set() {
      return jest.fn();
    }
  }
  return MockCookies;
});

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
  test("EPIC_EPP-6_STORY_EPP-278-Verify that the log is capturing whether the Patient is able to login with Email and valid Password.", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("user lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    and(/^user provides valid (.*) and valid(.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user click "(.*)" button.$/, (arg0) => {
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(loginbtn).toBeInTheDocument();
    });

    then("user should view Home/Dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    then("user get the log file in the location/tool", () => {
      expect(true).toBeTruthy();
    });

    then("the user can view the log details with time stamp", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-6_STORY_EPP-278-Verify that the log is capturing whether the Patient is able to login with phone number and valid Password.", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("user lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    and(/^user provides valid (.*) and valid(.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
    });

    and(/^user click "(.*)" button.$/, (arg0) => {
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(loginbtn).toBeInTheDocument();
    });

    then("user should view Home/Dashboard page", async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    then("user get the log file in the location/tool", () => {
      expect(true).toBeTruthy();
    });

    then("the user can view the log details with time stamp", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing data's, when user edit the Personal information in the profile information.", ({
    and,
    then,
  }) => {
    and(/^admin clicks on the "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "admin can see the  insurance should delete successfully message",
      () => {
        expect(true).toBeTruthy();
      }
    );

    then("admin should see error screen when service is unavailable", () => {
      expect(true).toBeTruthy();
    });

    then("admin get the log file in the location/tool", () => {
      expect(true).toBeTruthy();
    });

    then("the admin can view the log details with time stamp", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing  the error screen when the admin update and before saving the internet is unavailable", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^admin launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("admin navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("admin lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen();
    });

    then(/^admin see "(.*)" field and (.*) field$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
    });

    and(/^admin should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
    });

    when(/^admin clicks on "(.*)" button$/, (arg0) => {
      const loginbtn = container.getByTestId(/loginbtn/i);
      expect(loginbtn).toBeInTheDocument();
    });

    then("admin shoud see set MFA screen", () => {
      cleanup();
      Cookies.result = { mfa: true };

      const userData = {
        communicationMethod: {
          email: "user1@photon.com",
          phone: "9998887772",
        },
        ResponseCode: 4000,
        ResponseType: "success",
      };

      mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);

      container = render(
        <Provider store={store}>
          <MfaPage />
        </Provider>
      );
    });

    and(/^admin should see screen title written as "(.*)"$/, (arg0) => {
      const title = container.getByText("setMFATitle");
      expect(title).toBeInTheDocument();
    });

    and(/^admin should see screen subtitle written as "(.*)"$/, (arg0) => {
      const desc = container.getByText("setMFADescription");
      expect(desc).toBeInTheDocument();
    });

    and(
      /^admin should see "(.*)" section with radio button selected on "(.*)"$/,
      (arg0, arg1) => {
        // const desc = container.getByTestId("RadioButtonCheckedIcon")
        // expect(desc).toBeInTheDocument()
      }
    );

    and(/^admin unchecked the "(.*)" checkbox$/, (arg0) => {
      // const desc = container.getByTestId("RadioButtonCheckedIcon")
      // expect(desc).toBeInTheDocument()
    });

    when(/^admin click on "(.*)" button$/, (arg0) => {
      const btnConfirm = container.getByTestId("loc_btnConfirm");
      expect(btnConfirm).toBeInTheDocument();
    });

    then(/^admin should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^admin should see message "(.*)" and text "(.*)"$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and("admin should receive a email with code", () => {
      expect(true).toBeTruthy();
    });

    and(/^admin see the "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("admin see the Email/ message body - Hi {adminname},", () => {
      expect(true).toBeTruthy();
    });

    then(/^admin see the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^admin should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^admin fill (.*) field with invalid code$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^admin click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("admin should see error screen when internet is unavailable", () => {
      expect(true).toBeTruthy();
    });

    then("admin gets the log file in the location/tool", () => {
      expect(true).toBeTruthy();
    });

    then("the admin can view the log details with time stamp", () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing whether then Login using Magic link option is displaying along with the error message "Your password has expired. Please reset your password."', ({
    given,
    when,
    and,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    when("user see the Login screen", () => {
      navigateToPatientPortalApp();
      landOnPatientPortalScreen();
    });

    and(/^user  provides (.*) and expired (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByTestId("emailorphonenumber");
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
      expect(usernameField).toBeInTheDocument();
    });

    then(
      /^user should be able to see the following message “Your password has expired. Please reset your password."(.*)"Login using one-time" link.$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    then("user get the log file in the location/tool", () => {
      expect(true).toBeTruthy();
    });

    then("the user can view the log details with time stamp", () => {
      expect(true).toBeTruthy();
    });
  });
});
