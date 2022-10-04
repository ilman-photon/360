import "@testing-library/jest-dom/extend-expect";
import { act, cleanup, fireEvent, render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import { renderForgotPassword, renderLogin } from "../../__mocks__/commonSteps";
import { TEST_ID } from "../../src/utils/constants";

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
  "./__tests__/feature/Patient Portal/Sprint2/EPP-25.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const { FORGOT_TEST_ID } = TEST_ID;
  const element = document.createElement("div");
  afterEach(() => {
    mock.reset();
  });
  test("EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below Email or Phone Number field if Email or Phone Number is blank", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when(`user lands onto "Patient Login" screen`, () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then("user should see 'Forgot Password' link", () => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when(`user clicks on 'Forgot Password' link`, async () => {
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
      container = await renderForgotPassword(container);
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

  test("EPIC_EPP-7 _STORY_EPP-25 - Verify user should see Forgot Password screen.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then("user should see 'Forgot Password' link", () => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when("user clicks on 'Forgot Password' link", async () => {
      container = await renderForgotPassword(container);
    });

    then("user should see Forgot Password screen", () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(FORGOT_TEST_ID.continueBtn)
      ).toBeInTheDocument();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-7 _STORY_EPP-25 - Verify user able to view  login screen on clicking the “Back to Log in” button from Forgot Password Page", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then("user should see 'Forgot Password' link", () => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when("user clicks on 'Forgot Password' link", async () => {
      container = await renderForgotPassword(container);
    });

    then("user should see Forgot Password screen", () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    and("user should see 'Continue' button", () => {
      expect(
        container.getByTestId(FORGOT_TEST_ID.continueBtn)
      ).toBeInTheDocument();
    });

    and("user should see 'Back to Log in' button", () => {
      expect(
        container.getByTestId(FORGOT_TEST_ID.loginLink)
      ).toBeInTheDocument();
    });

    when("user clicks on 'Back to Log in' button", async () => {
      fireEvent.click(container.getByTestId(FORGOT_TEST_ID.loginLink));
      container = await renderLogin(container);
    });

    then("user should see Login screen", () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });
  });

  test("EPIC_EPP-7 _STORY_EPP-25 - Verify whether the user is able to see the Forgot Password  page when Internet connection/service is unavailable", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then("user should see 'Forgot Password' link", () => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when(
      "user clicks on 'Forgot Password' link when internet/service is unavailable",
      () => {}
    );

    then("user should see see appropriate error message", () => {});
  });

  test('EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below "<Email or Phone Number>" field if Email or Phone Number is not found', ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {});

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then("user should see 'Forgot Password' link", () => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when("user clicks on 'Forgot Password' link", async () => {
      container = await renderForgotPassword(container);
    });

    then("user should see Forgot Password screen", () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    when(/^user enters unregistered (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and("user click on 'Continue' button", () => {
      const expectedResult = { ResponseCode: 1001, ResponseType: "failure" };
      mock.onPost(`/ecp/patient/validate`).reply(404, expectedResult);
      const button = container.getByTestId(FORGOT_TEST_ID.continueBtn);
      fireEvent.click(button);
    });

    then(
      /^user should see inline error "(.*)" below (.*)  field$/,
      (arg0, arg1) => {}
    );
  });

  test('EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below "<Email or Phone Number>" field if Email or Phone Number is not valid', ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {});

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then("user should see 'Forgot Password' link", () => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when("user clicks on 'Forgot Password' link", async () => {
      container = await renderForgotPassword(container);
    });

    then("user should see Forgot Password screen", () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    when(/^user enters unregistered (.*) field$/, (arg0) => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and("user click on 'Continue' button", () => {
      const expectedResult = { ResponseCode: 1001, ResponseType: "failure" };
      mock.onPost(`/ecp/patient/validate`).reply(404, expectedResult);
      const button = container.getByTestId(FORGOT_TEST_ID.continueBtn);
      fireEvent.click(button);
    });

    then(
      /^user should see inline error "(.*)" below (.*)  field$/,
      (arg0, arg1) => {}
    );
  });

  test('EPIC_EPP-7 _STORY_EPP-25 - Verify user should see "<Email or Phone Number>" field is blank after user refresh the page', ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {});

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then("user should see 'Forgot Password' link", () => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when("user clicks on 'Forgot Password' link", async () => {
      container = await renderForgotPassword(container);
    });

    then("user should see Forgot Password screen", () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(
        container.getByLabelText(/usernamePlaceHolder/i)
      ).toBeInTheDocument();
    });

    when(/^user valid (.*) field$/, (arg0) => {});

    and("user click on reload on browser", () => {});

    then(
      /^user should see Forgot Password screen with (.*) field is blank$/,
      (arg0) => {}
    );
  });

  test("EPIC_EPP-7 _STORY_EPP-25 - Verify user should see Forgot Password page loaded within 3 seconds", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {});

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then("user should see 'Forgot Password' link", () => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when("user clicks on 'Forgot Password' link", async () => {
      container = await renderForgotPassword(container);
    });

    then("user should see Forgot Password screen", () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(
      /^user should see Forgot Password page loaded within (\d+) seconds"$/,
      (arg0) => {}
    );
  });

  test("EPIC_EPP-7 _STORY_EPP-25 - Verify user should not see any error after click on F12", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {});

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then("user should see 'Forgot Password' link", () => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when("user clicks on 'Forgot Password' link", async () => {
      container = await renderForgotPassword(container);
    });

    then("user should see Forgot Password screen", () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^user click F(\d+) on keyboard$/, (arg0) => {});

    and(/^user should not see any error after click on F(\d+)$/, (arg0) => {});
  });
});
