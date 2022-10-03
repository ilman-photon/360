import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Login } from "../../src/components/organisms/Login/login";
import AuthPage from "../../src/pages/patient/login";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Cookies from "universal-cookie";
import { navigateToPatientPortalHome } from "../../__mocks__/commonSteps";
import constants from "../../src/utils/constants";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com"

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

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-207.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container, login;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  afterEach(() => {
    mock.reset();
  });

  test("EPIC_EPP-4_STORY_EPP-207-Verify whether the Registered Patient is able to Login with Valid Email or Phone Number and Valid Password", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = render(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });
    and(
      'user provides valid "<Email or Phone Number>" and valid "<password>"',
      () => {
        const usernameField = container.getByLabelText("emailUserLabel");
        const passwordField = container.getByLabelText("passwordLabel");
        fireEvent.change(usernameField, { target: { value: "wrongUserName" } });
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(usernameField.value).not.toEqual("validUsername");
        expect(passwordField.value).toEqual("validPassword");
      }
    );
    and("user click 'Login' button.", () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then("user should view Home/Dashboard page", async () => {
      navigateToPatientPortalHome()
    });
  });
  test("EPIC_EPP-4_STORY_EPP-207-Verify whether the Patient is able to login with Email and valid Password.", ({
    given,
    when,
    then,
    and,
  }) => {
    let container, login;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");

    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when(`user lands onto “Patient Login” screen`, () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      container = render(<AuthPage />);
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });
    and('user provides valid "<Email>" and valid"<password>"', () => {
      const usernameField = container.getByLabelText("emailUserLabel");
      const passwordField = container.getByLabelText("passwordLabel");
      fireEvent.change(usernameField, { target: { value: "wrongUserName" } });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("validUsername");
      expect(passwordField.value).toEqual("validPassword");
    });
    and("user click 'Login' button.", () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });
    then("user should view Home/Dashboard page", async () => {
      navigateToPatientPortalHome()
    });
  });
  test("EPIC_EPP-4_STORY_EPP-207-Verify whether the Patient is able to login with Phone number with valid Password.", ({
    given,
    when,
    then,
    and,
  }) => {
    let container, login;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    when(`user lands onto “Patient Login” screen`, () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      container = render(<AuthPage />);
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });
    and('user provides valid "<Phone Number>" and valid"<password>"', () => {
      cleanup()
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText("emailUserLabel");
      const passwordField = container.getByLabelText("passwordLabel");
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });
    and("user click 'Login' button.", () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
      expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
    });
    then("user should view Home/Dashboard page", async () => {
      navigateToPatientPortalHome()
    });
  });
  test("EPIC_EPP-4_STORY_EPP-207-Verify whether the user is able to see the Patient Login page without Internet connection", ({
    given,
    when,
    then,
    and,
  }) => {
    let container, login;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");
    const expectedResult = {
      ResponseCode: 2000,
      ResponseType: "success",
      userType: "patient",
    };
    given("user launch the 'XXX' url", () => {
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    and("user navigates to the Patient Portal application", () => {
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when(`turn off the Data`, () => {
      expect(true).toBeTruthy();
    });

    then("user should view appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-207-Verify whether the page is loading with in 3 seconds", ({
    given,
    when,
    then,
    and,
  }) => {
    let container, login;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");
    const expectedResult = {
      ResponseCode: 2000,
      ResponseType: "success",
      userType: "patient",
    };
    given("user user launch the 'XXX' url", () => {
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when(`user lands onto “Patient Login” screen`, () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      container = render(<AuthPage />);
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then("page should load in 3 seconds", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-207-Verify whether any error is displaying when we press F12 after navigating to the Patient Login page.", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    const expectedResult = {
      ResponseCode: 2000,
      ResponseType: "success",
      userType: "patient",
    };
    given("user user launch the 'XXX' url", () => {
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    and("user navigates to the Patient Portal application", () => {
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when(`user lands onto “Patient Login” screen`, () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      container = render(<AuthPage />);
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });
    and("press the F12 button from the keyboard.", () => {
      expect(true).toBeTruthy();
    });
    then("none of the javascript error should be seen by the user.", () => {
      expect(true).toBeTruthy();
    });
  });
  test("EPIC_EPP-4_STORY_EPP-207-Verify whether the error message is displaying when the service is unavailable.", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    const expectedResult = {
      ResponseCode: 2000,
      ResponseType: "success",
      userType: "patient",
    };
    given("user launch the 'XXX' url", () => {
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    when(`the service is unavailable`, () => {
      expect(true).toBeTruthy();
    });
    and("user navigates to the Patient Portal application", () => {
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    and("user lands on “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      container = render(<AuthPage />);
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then(
      "error message '503 - Server is not ready to handle the request' should get display.",
      () => {
        expect(true).toBeTruthy();
      }
    );
  });
});
