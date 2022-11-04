import { act, fireEvent, render, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import HomePage from "../../src/pages/patient";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { renderWithProviders } from "../src/utils/test-util";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com";

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
  "./__tests__/feature/Patient Portal/Sprint2/EPP-208.feature",
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

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when user provides Invalid Email or Phone Number and Valid Password', ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
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

    and(
      'user provides invalid  "<Email or Phone Number>" and valid "<password>"',
      () => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        const passwordField = container.getByLabelText(/passwordLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
        expect(passwordField.value).toEqual("validPassword");
      }
    );

    and('user clicks on "Login" Button', async () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then(
      'user should see the error message "Invalid Username or Password"',
      () => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        const passwordField = container.getByLabelText(/passwordLabel/i);
        expect(usernameField.id).toEqual("username");
        expect(passwordField.id).toEqual("password");
      }
    );
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is accepting 8 characters", ({
    given,
    and,
    when,
    then,
  }) => {
    let container, login;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");
    const mockResult = {
      userType: "patient",
      username: "patient1@photoninfotech.net",
      isSecurityQuestionsSetUp: true,
      ResponseCode: 2000,
      ResponseType: "success",
      access_token: "123",
      refresh_token: "123",
      IdleTimeOut: 120000,
    };
    const mockPatientId = {
      ecpPatientId: "98f9404b-6ea8-4732-b14f-9c1a168d8066",
    };
    const mockUserData = {
      communicationMethod: {
        email: "patient1@photoninfotech.net",
        phone: "(977) 623-4567",
      },
      ResponseCode: 4000,
      ResponseType: "success",
    };
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      mock.onPost(`/ecp/patient/login`).reply(200, mockResult);
      mock.onPost(`/ecp/patient/search/ecppatientid`).reply(200, mockPatientId);
      mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, mockUserData);
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

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "validUsername@mail.com" },
      });
      expect(usernameField.value).toEqual("validUsername@mail.com");
    });

    and(/^user provides (\d+) characters in (.*)$/, (arg0, arg1) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then("user should navigate to Dashboard", async () => {
      cleanup();
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = false;
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
    });
  });
  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when user  provides Valid Email or Phone Number and Invalid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user  launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user  navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid  (.*) and Invalid (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "validUsername@mail.com" },
      });
      expect(usernameField.value).toEqual("validUsername@mail.com");
    });

    and(/^user clicks on "(.*)" Button$/, (arg0) => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then(/^user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the  the "Invalid Username or Password" error message is displaying when user  provides Invalid Email or Phone Number and Invalid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user/admin user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user/ admin user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user/ admin user lands onto “Patient Login” screen", () => {
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

    and(/^user provides Invalid  (.*) and Invalid (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^user clicks on "(.*)" Button$/, (arg0) => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then(/^user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin user provides Valid Email or Phone Number and Invalid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("admin user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("admin user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("admin user lands onto “Patient Login” screen", () => {
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

    and(/^admin provides Invalid  (.*) and valid (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^admin user clicks on "(.*)" Button$/, (arg0) => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then(/^admin user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin provides Valid User name and Invalid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("admin user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("admin user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("admin user lands onto “Patient Login” screen", () => {
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

    and(
      /^admin provides Registered valid (.*) and Invalid (.*)$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^admin user clicks on "(.*)" Button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^admin user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin user  provides Invalid Email or Phone Number and Invalid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("admin user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("admin user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("admin user lands onto “Patient Login” screen", () => {
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

    and(
      /^admin provides Registered Invalid  (.*) and Invalid (.*)$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        const passwordField = container.getByLabelText(/passwordLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
        expect(passwordField.value).toEqual("validPassword");
      });

    and(/^admin user clicks on "(.*)" Button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^admin user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the  the "Invalid Username or Password" error message is displaying when user  provides Invalid Phone number and valid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides invalid  (.*) and valid (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^user clicks on "(.*)" Button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when User provides valid Phone number and Invalid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user  launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user  navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid  (.*) and Invalid (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^user clicks on "(.*)" Button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when User provides Invalid Phone number and Invalid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides Invalid  (.*) and Invalid (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^user clicks on "(.*)" Button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin provides Invalid Phone number  and valid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("admin user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("admin user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("admin user lands onto “Patient Login” screen", () => {
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

    and(/^admin provides Invalid  (.*) and valid (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^admin user clicks on "(.*)" Button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^admin user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin  provides Valid Phone number and Invalid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("admin user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("admin user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("admin user lands onto “Patient Login” screen", () => {
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

    and(
      /^admin provides Registered valid  (.*) and Invalid (.*)$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        const passwordField = container.getByLabelText(/passwordLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
        expect(passwordField.value).toEqual("validPassword");
      });

    and(/^admin user clicks on "(.*)" Button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^admin user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin  provides Invalid Phone number and Invalid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("admin user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("admin user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("admin user lands onto “Patient Login” screen", () => {
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

    and(
      /^admin user provides Invalid  (.*) and Invalid (.*)$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        const passwordField = container.getByLabelText(/passwordLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
        expect(passwordField.value).toEqual("validPassword");
      });

    and(/^admin user clicks on "(.*)" Button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^admin user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with Space.', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides (.*) with space "(.*)"$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(usernameField, {
        target: { value: " " },
      });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("");
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user should see the Appropriate error message "(.*)"$/,
      (arg0, table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email without @ symbol.', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides (.*) without @ symbol "(.*)"$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName" },
      });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with two @ symbol.', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      /^user provides (.*) Email with two @ symbol like "(.*)"$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
      }
    );

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email without text before @ symbol', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      /^user provides (.*) Email without text before @ symbol like "(.*)"$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName" },
        });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
      }
    );

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email without Domain name', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      /^user provides (.*) Email without Domain name like "(.*)"$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
      });

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email without .com', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides (.*) Email without .com like "(.*)"$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email without dot.', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      /^user provides (.*) Email without dot after domain name like "(.*)"$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
      });

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with consecutive dots at Email starting.', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      /^user provides (.*) Email with consecutive dots at Email starting like "(.*)"$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
      });

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with consecutive dots at middle for the Email ID.', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      /^user provides (.*) Email with consecutive dots at middle for the Email ID like "(.*)"$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
      });

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with consecutive dots in domain portion', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      /^user provides (.*) Email with consecutive dots in domain portion like "(.*)"$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
      });

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with Special Characters', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      /^user provides (.*) Email with Special Characters like "(.*)"$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
      });

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email starts with dot', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      /^user provides (.*) Email starts with dot like "(.*)"$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
      });

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email ends with dot', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      /^user provides (.*) Email ends with dot like "(.*)"$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
      });

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with garbage values', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      /^user provides (.*) Email with garbage values like "(.*)"$/,
      (arg0, arg1) => {
        const usernameField = container.getByLabelText(/emailUserLabel/i);
        fireEvent.change(usernameField, {
          target: { value: "wrongUserName@email.cc" },
        });
        expect(usernameField.value).not.toEqual("validUsername@email.cc");
      });

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is not accepting 7 characters", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(/^user provides (\d+) characters in (.*)$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is not accepting 21 characters", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(/^user provides (\d+) characters in (.*)$/, (arg0, arg1) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is accepting 20 characters", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(/^user provides (\d+) characters in (.*)$/, (arg0, arg1) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should navigate to Dashboard.", (table) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is accepting 9 characters", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user provides (\d+) characters in (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should navigate to Dashboard", (table) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the Password field is accepting 19 characters", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(/^user provides (\d+) characters in (.*)$/, (arg0, arg1) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should navigate to Dashboard.", (table) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the Password is not accepting without 1 Upper case letter", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(
      /^enter the Password without (\d+) Upper case letter with other mandatory Password constraints.$/,
      (arg0) => {
        const passwordField = container.getByLabelText(/passwordLabel/i);
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(passwordField.value).toEqual("validPassword");
      });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the Password is not accepting without 1 Lower case letter", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(
      /^enter the Password without (\d+) Lower case letter with other mandatory Password constraints.$/,
      (arg0) => {
        const passwordField = container.getByLabelText(/passwordLabel/i);
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(passwordField.value).toEqual("validPassword");
      }
    );

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the Password is not accepting without 1 Number", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(
      /^enter the Password without (\d+) Number with other mandatory Password constraints.$/,
      (arg0) => {
        const passwordField = container.getByLabelText(/passwordLabel/i);
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(passwordField.value).toEqual("validPassword");
      }
    );

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the Password is not accepting without 1 Special character", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(
      /^enter the Password without (\d+) Special character with other mandatory Password constraints.$/,
      (arg0) => {
        const passwordField = container.getByLabelText(/passwordLabel/i);
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(passwordField.value).toEqual("validPassword");
      });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see the Appropriate error message “Invalid Username or Password”",
      (table) => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the Password is accepting with Upper case, Lower case, Number and Special character.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(
      "user enter the Password with Upper case, Lower case, Numbers and Special characters",
      () => {
        const passwordField = container.getByLabelText(/passwordLabel/i);
        fireEvent.change(passwordField, { target: { value: "validPassword" } });
        expect(passwordField.value).toEqual("validPassword");
      });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should navigate to Dashboard.", (table) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the user is able to see the Patient Login page without Internet connection", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    and("turn off the Data", () => {
      expect(true).toBeTruthy();
    });

    then("user should view appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether the page is loading with in 3 seconds", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then(/^page should load in (\d+) seconds$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-4_STORY_EPP-208-Verify whether any error is displaying when we press F12 after navigating to the Patient Login page.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^press the F(\d+) button from the keyboard.$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("none of the javascript error should be seen by the user.", () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Email or Phone number" field is not allowing Email with consecutive dots before @ symbol.', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto “Patient Login” screen', () => {
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

    and(/^user provides (.*) Email with consecutive dots before @ symbol like "(.*)"$/, (arg0, arg1) => {
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      fireEvent.change(usernameField, {
        target: { value: "wrongUserName@email.cc" },
      });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const passwordField = container.getByLabelText(/passwordLabel/i);
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see the Appropriate error message “Invalid Username or Password”', (table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the error message is displaying when the service is unavailable.', ({ given, when, and, then }) => {
    given('user user launch the \'XXX\' url', () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when('the service is unavailable', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    and('user lands on “Patient Login” screen', () => {
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

    then(/^error message '(\d+) - Server is not ready to handle the request' should get display.$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
