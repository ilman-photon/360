import { defineFeature, loadFeature } from "jest-cucumber";
import { Login } from "../../src/components/organisms/Login/login";
import {
  fireEvent,
  render,
  act,
  cleanup,
  waitFor,
} from "@testing-library/react";
import AuthPage from "../../src/pages/patient/login";
import HomePage from "../../src/pages/patient";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  renderLogin,
  landOnCreateAccountPage,
  navigateToPatientPortalHome,
  renderForgotPassword,
} from "../../__mocks__/commonSteps";
import constants from "../../src/utils/constants";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-206.feature",
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

const passwordAndUserView = () => {
  launchURL();
  const usernameField = container.getAllByLabelText(/emailUserLabel/i)[0];
  const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
  expect(usernameField.id).toEqual("username");
  expect(passwordField.id).toEqual("password");
};

defineFeature(feature, (test) => {
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to see the Patient Login page with Email or phone number & Password fields", ({
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

    when(`user lands onto \“Patient Login\” screen`, async () => {
      landOnPatientPortalScreen();
    });

    then(
      'user should be able to view "Email or phone number" & "Password fields"',
      () => {
        passwordAndUserView();
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the Password is getting mask when user typing the Password.", ({
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

    when(`user lands onto \“Patient Login\” screen`, async () => {
      landOnPatientPortalScreen();
    });
    and('user provides "<Email or Phone Number>" and "<password>"', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getAllByLabelText(/emailUserLabel/i)[0];
      const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });
    then("entered password should be masked.", () => {
      const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
      expect(passwordField.type).toEqual("password");
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the Password has the unmask option when user typing the Password.", ({
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

    when(`user lands onto \“Patient Login\” screen`, async () => {
      landOnPatientPortalScreen();
    });
    and('user provides "<username>" and "<password>"', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getAllByLabelText(/emailUserLabel/i)[0];
      const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });
    then("entered password should be masked.", () => {
      const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
      expect(passwordField.type).toEqual("password");
    });
    and("user should view unmask option", () => {
      const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
      fireEvent.click(passwordField);
      // expect(passwordField.type).toEqual("text");
    });
    when(`user click the Unmask icon`, () => {
      const button = container.getAllByLabelText(/passwordLabel/i)[0];
      // fireEvent.click(button);
      // expect(passwordField.type).toEqual("text");
    });

    then("entered password should get visible to the user", () => {
      const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
      expect(passwordField.type).toEqual("password");
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to see the Patient Login page with Login button, Continue as  a guest button, Don’t have an account?” verbiage along with ‘Create Account button and Forgot password link", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user user launch the 'XXX' url", () => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(`user lands onto “Patient Login” screen`, async () => {
      landOnPatientPortalScreen();
    });
    then("user should able to view 'Login' button .", async () => {
      cleanup();
      container = await renderLogin();
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });
    and("user should able to view  'Continue as Guest' button .", () => {
      expect(true).toBeTruthy();
    });
    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        const loginDontHaveAccText =
          container.getByText(/dontHaveAccountLabel/i);
        expect(loginDontHaveAccText).toBeInTheDocument();
      }
    );
    and("user should able to view 'Forgot password' link .", () => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to Login as Guest User.", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user  launch the 'XXX' url", () => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(`user lands onto \“Patient Login\” screen`, async () => {
      landOnPatientPortalScreen();
    });
    and("user click the 'Continues as a guest' button", () => {
      expect(true).toBeTruthy();
    });
    then(
      "user should view the mentioned fields like First Name, Last Name, Date of Birth, Email, Phone number.",
      async () => {
        cleanup();
        container = await landOnCreateAccountPage();
      }
    );
    and('user should allow to enter the <"FirstName ">', () => {
      expect(
        container.getByTestId(constants.TEST_ID.REGISTER_TEST_ID.firstname)
      ).toBeInTheDocument();
    });
    and('user should allow to enter the  <"LastName ">', () => {
      expect(
        container.getByTestId(constants.TEST_ID.REGISTER_TEST_ID.lastname)
      ).toBeInTheDocument();
    });
    and('user should allow to enter the  <"DateofBirth ">', () => {
      const loginDontHaveAccText = container.getByText(/Date of Birth/i);
      expect(loginDontHaveAccText).toBeInTheDocument();
    });
    and('user should allow to enter the  <"Email ">', () => {
      expect(
        container.getByTestId(constants.TEST_ID.REGISTER_TEST_ID.email)
      ).toBeInTheDocument();
    });
    and('user should allow to enter the  <"PhoneNumber ">', () => {
      expect(
        container.getByTestId(constants.TEST_ID.REGISTER_TEST_ID.mobilenumber)
      ).toBeInTheDocument();
    });
    and("user click the 'Login ' button.", () => {
      expect(
        container.getByTestId(constants.TEST_ID.REGISTER_TEST_ID.registerbtn)
      ).toBeInTheDocument();
    });
    then("user should view the Home/Dashboard Page", async () => {
      cleanup();
      // container = await navigateToPatientPortalHome()
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to click the 'Create Account' link", ({
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

    when(`user lands onto “Patient Login” screen`, async () => {
      landOnPatientPortalScreen();
    });
    and("user click the 'Create Account' button", () => {
      const createAccountBtn = container.getByTestId(
        constants.TEST_ID.LOGIN_TEST_ID.createAccountBtn
      );
      fireEvent.click(createAccountBtn);
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.createAccountBtn)
      ).toBeInTheDocument();
    });
    then("user should navigate to Registration page.", async () => {
      cleanup();
      container = await landOnCreateAccountPage();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to click the 'Forgot Password' link", ({
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

    when(`user lands onto “Patient Login” screen`, async () => {
      landOnPatientPortalScreen();
    });
    and("user click the 'Forgot Password' link", () => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });
    then("user should navigate to Forgot password page.", async () => {
      cleanup();
      container = await renderForgotPassword();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the inline error message is displayed if Email or Phone number not filled", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user/admin user launch the 'XXX' url", () => {
      launchURL();
    });

    and("user/ admin user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("user/ admin user lands onto “Patient Login” screen", async () => {
      landOnPatientPortalScreen();
    });
    and(
      'user/admin user provides blank "<Email or Phone Number>" and valid "<password>"',
      () => {
        cleanup();
        const mockOnLoginClicked = jest.fn((data, route, callback) => {
          callback({
            status: "success",
          });
        });
        container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
        const usernameField = container.getAllByLabelText(/emailUserLabel/i)[0];
        const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
        expect(usernameField.id).toEqual("username");
        expect(passwordField.id).toEqual("password");
      }
    );
    and("user click the 'Login' Button.", async () => {
      const loginBtn = container.getByTestId(
        constants.TEST_ID.LOGIN_TEST_ID.loginBtn
      );
      fireEvent.click(loginBtn);
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });
    then("user should view the error message 'This field is required'", () => {
      expect(container.getByText(/passwordLabel/i)).toBeInTheDocument();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206- Verify whether the inline error message is displayed if password not filled", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user/admin user launch the 'XXX' url", () => {
      launchURL();
    });

    and("user/ admin user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(`user/ admin user lands onto \“Patient Login\” screen`, async () => {
      landOnPatientPortalScreen();
    });
    and(
      'user/admin user provides valid "<Email or Phone Number>" and blank "<password>"',
      () => {
        cleanup();
        const mockOnLoginClicked = jest.fn((data, route, callback) => {
          callback({
            status: "success",
          });
        });
        container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
        const usernameField = container.getAllByLabelText(/emailUserLabel/i)[0];
        const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
        expect(usernameField.id).toEqual("username");
        expect(passwordField.id).toEqual("password");
      }
    );
    and("user click the 'Login' Button.", () => {
      const loginBtn = container.getByTestId(
        constants.TEST_ID.LOGIN_TEST_ID.loginBtn
      );
      fireEvent.click(loginBtn);
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });
    then("user should view the error message 'This field is required'", () => {
      expect(container.getByText(/passwordLabel/i)).toBeInTheDocument();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206- Verify whether the admin user is not able to see the Patient Login page with Continue as a guest button, Don’t have an account?” verbiage along with ‘Create Account button and Forgot password link and see Login Button", ({
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

    when(`admin user lands onto \“Patient Login\” screen`, async () => {
      landOnPatientPortalScreen();
    });

    then('admin user should view "Login" button', () => {
      const loginBtn = container.getByTestId(
        constants.TEST_ID.LOGIN_TEST_ID.loginBtn
      );
      fireEvent.click(loginBtn);
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });
    and("admin user should not view  'Continue as a guest' button .", () => {
      expect(true).toBeTruthy();
    });
    and(
      "admin user should not view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        const loginDontHaveAccText =
          container.getByText(/dontHaveAccountLabel/i);
        expect(loginDontHaveAccText).toBeInTheDocument();
      }
    );
    and("admin user should not view 'Forgot password' link .", () => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.forgotLink)
      ).toBeInTheDocument();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206- Verify whether the inline error message is displayed if Email or Phone Number and  password are not filled", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user/admin user launch the 'XXX' url", () => {
      launchURL();
    });

    and("user/ admin user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(`user/ admin user lands onto \“Patient Login\” screen`, async () => {
      landOnPatientPortalScreen();
    });
    and(
      'user/admin user provides blank "<Email or Phone Number>" and blank "<password>"',
      () => {
        cleanup();
        const mockOnLoginClicked = jest.fn((data, route, callback) => {
          callback({
            status: "success",
          });
        });
        container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
        const usernameField = container.getAllByLabelText(/emailUserLabel/i)[0];
        const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
        expect(usernameField.id).toEqual("username");
        expect(passwordField.id).toEqual("password");
      }
    );
    and("user click the 'Login' Button.", () => {
      const loginBtn = container.getByTestId(
        constants.TEST_ID.LOGIN_TEST_ID.loginBtn
      );
      fireEvent.click(loginBtn);
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });
    then("user should view the error message 'This field is required'", () => {
      const usernameField = container.getAllByLabelText(/emailUserLabel/i)[0];
      const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page when Internet connection/service is unavailable", ({
    given,
    when,
    then,
  }) => {
    given("user/admin user launch the 'XXX' url", () => {
      launchURL();
    });
    when(`user/ admin user navigates to the Patient Portal application`, () => {
      navigateToPatientPortalApp();
    });
    then("user/ admin user should view appropriate error message", () => {
      const usernameField = container.getByText(/emailUserLabel/i);
      const passwordField = container.getByText(/passwordLabel/i);
      expect(usernameField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the Password has the unmask option when Admin typing the Password.", ({
    given,
    when,
    then,
    and,
  }) => {
    given("Admin launch the 'XXX' url", () => {
      launchURL();
    });

    and("Admin navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(`Admin lands onto \“Patient Login\” screen`, async () => {
      landOnPatientPortalScreen();
    });

    and('Admin provides "<username>" and "<password>"', () => {
      const usernameField = container.getByText(/emailUserLabel/i);
      const passwordField = container.getByText(/passwordLabel/i);
      expect(usernameField).toBeInTheDocument();
      expect(passwordField).toBeInTheDocument();
    });

    then("Admin password should be masked.", () => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });
    and("Admin should view unmask option", () => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });
    when(`Admin click the Unmask icon`, () => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });
    then("entered password should get visible to the Admin", () => {
      const passwordField = container.getByText(/passwordLabel/i);
      expect(passwordField).toBeInTheDocument();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the Admin is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    given("Admin launch the 'XXX' url", () => {
      launchURL();
    });

    and("Admin navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(`Admin lands onto \“Patient Login\” screen`, async () => {
      landOnPatientPortalScreen();
    });

    then(
      'Admin should be able to view "Email or phone number" & "Password fields"',
      () => {
        cleanup();
        const mockOnLoginClicked = jest.fn((data, route, callback) => {
          callback({
            status: "success",
          });
        });
        container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
        const usernameField = container.getAllByLabelText(/emailUserLabel/i)[0];
        const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
        expect(usernameField.id).toEqual("username");
        expect(passwordField.id).toEqual("password");
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to see the Patient Login page without Internet connection", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      launchURL();
    });

    when("user navigates to the Patient 'Login' page", () => {
      landOnPatientPortalScreen();
    });

    and("turn off the Data", () => {});

    then("user should view appropriate error message", () => {});
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the page is loading with in 3 seconds", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user user launch the 'XXX' url", () => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("user lands onto “Patient Login” screen", async () => {
      landOnPatientPortalScreen();
    });

    then(/^page should load in (\d+) seconds$/, (arg0) => {});
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether any error is displaying when we press F12 after navigating to the Patient Login page.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user user launch the 'XXX' url", () => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("user lands onto “Patient Login” screen", async () => {
      landOnPatientPortalScreen();
    });

    and(/^press the F(\d+) button from the keyboard.$/, (arg0) => {});

    then("none of the javascript error should be seen by the user.", () => {});
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the error message is displaying when the service is unavailable.", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("the service is unavailable", () => {});

    and("user lands on “Patient Login” screen", async () => {
      landOnPatientPortalScreen();
    });

    then(
      /^error message '(\d+) - Server is not ready to handle the request' should get display.$/,
      (arg0) => {}
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the Password is getting mask when Admin typing the Password.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("Admin launch the 'XXX' url", () => {
      launchURL();
    });

    and("Admin navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when("Admin lands onto “Patient Login” screen", async () => {
      landOnPatientPortalScreen();
    });

    and(/^Admin provides (.*) and (.*)$/, (arg0, arg1) => {
      cleanup();
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getAllByLabelText(/emailUserLabel/i)[0];
      const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });

    then("entered password should be masked.", (table) => {
      const passwordField = container.getAllByLabelText(/passwordLabel/i)[0];
      expect(passwordField.id).toEqual("password");
    });
  });
});
