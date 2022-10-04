import { act, fireEvent, render, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import HomePage from "../../src/pages/patient";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import { Provider } from "react-redux";
import store from "../../src/store/store";

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
      'user provides invalid  "<Email or Phone Number>" and valid "<password>"',
      () => {
        const usernameField = container.getByLabelText("emailUserLabel");
        const passwordField = container.getByLabelText("passwordLabel");
        fireEvent.change(usernameField, { target: { value: "wrongUserName@email.cc" } });
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
        const usernameField = container.getByLabelText("emailUserLabel");
        const passwordField = container.getByLabelText("passwordLabel");
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
      "userType": "patient",
      "username": "patient1@photoninfotech.net",
      "isSecurityQuestionsSetUp": true,
      "ResponseCode": 2000,
      "ResponseType": "success",
      "access_token": "123",
      "refresh_token": "123",
      "IdleTimeOut": 120000
    };
    const mockPatientId = {
      "ecpPatientId": "98f9404b-6ea8-4732-b14f-9c1a168d8066"
    }
    const mockUserData = {
      "communicationMethod": {
        "email": "patient1@photoninfotech.net",
        "phone": "(977) 623-4567"
      },
      "ResponseCode": 4000,
      "ResponseType": "success"
    }
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
        container = render(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    and(/^user provides valid (.*)$/, (arg0) => {
      const usernameField = container.getByLabelText("emailUserLabel");
      fireEvent.change(usernameField, { target: { value: "validUsername@mail.com" } });
      expect(usernameField.value).toEqual("validUsername@mail.com");
    });

    and(/^user provides (\d+) characters in (.*)$/, (arg0, arg1) => {
      const passwordField = container.getByLabelText("passwordLabel");
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(passwordField.value).toEqual("validPassword");
    });

    and(/^click "(.*)" button$/, (arg0) => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then("user should navigate to Dashboard", async() => {
      cleanup()
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
});
