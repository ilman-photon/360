import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";

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
  "./__tests__/feature/Patient Portal/Sprint2/EPP-25.feature"
);

defineFeature(feature, (test) => {
  const mock = new MockAdapter(axios);
  test("EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below Email or Phone Number field if Email or Phone Number is blank", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
      act(() => {
        container = render(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
    });

    when(`user lands onto "Patient Login" screen`, () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then("user should see 'Forgot Password' link", () => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when(`user clicks on 'Forgot Password' link`, () => {
      const link = container.getByTestId("forgotpswd");
      fireEvent.click(link);
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
        SecurityQuestions: [
          {
            "Where did you go the first time you flew on a plane?": "America",
            "Who is your all-time favorite movie character": "Peter",
            "In what city or town did your parents meet?": "Berlin",
          },
        ],

        PreferredComunication: "Both",
      };
      mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      container = render(<ForgotPasswordPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });

    then(`user should see Forgot Password screen`, () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and("user should see 'Email or Phone Number' field", async () => {
      let usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, {
        target: { value: "user1@gmail.com" },
      });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and("user should see 'Continue' button", () => {
      const continueId = container.getByTestId("continuebtn");
      fireEvent.submit(continueId);
    });

    and("user should see 'Back to Login' link", () => {
      const link = container.getByText("backButtonLink");
      fireEvent.click(link);
      mock.reset();
    });
  });
});
