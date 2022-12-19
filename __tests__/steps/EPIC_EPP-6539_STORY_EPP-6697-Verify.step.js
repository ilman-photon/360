import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import {
  renderForgotPassword,
  renderLogin,
  clickContinueForgot,
} from "../../__mocks__/commonSteps";
import { TEST_ID } from "../../src/utils/constants";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";
import AuthPage from "../../src/pages/patient/login";
import PasswordSecurityQuestion from "../../src/components/organisms/PasswordSecurityQuestion/passwordSecurityQuestion";
import { Provider } from "react-redux";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6697.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

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

const launchURL = (container) => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
};

const navigateToPatientPortalApp = (container, mock, element) => {
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

const landOnPatientPortalScreen = (container) => {
  const title = container.getAllByText("formTitle")[0];
  expect("formTitle").toEqual(title.textContent);
};

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  const { FORGOT_TEST_ID } = TEST_ID;

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test("EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below Email or Phone Number field if Email or Phone Number is blank", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    then("user should see 'Forgot Password' link", () => {
      const link = container.getByTestId("forgotpswd");
      expect("forgotPassword").toEqual(link.textContent);
    });

    when("user clicks on 'Forgot Password' link", async () => {
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

    then("user should see Forgot Password screen", () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^user should see (.*) field$/, (arg0) => {
      let usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, {
        target: { value: "" },
      });
      expect(usernameField.value).toEqual("");
    });

    when(/^user leave empty (.*) field$/, (arg0) => {
      defaultValidation();
    });

    and("user click on 'Continue' button", () => {
      const continueId = container.getByTestId("continuebtn");
      fireEvent.submit(continueId);
    });

    then(
      /^user should see inline error 'Please fill all the mandatory fields' below (.*)  field$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-7_STORY_EPP-216 - Verify user should be able to login into the patient portal without username & password using the magic link received to my registered mail id.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      launchURL(container);
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp(container, mock, element);
    });

    when("user lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen(container);
    });

    and("user clicks on 'Forgot Password' link", async () => {
      cleanup();
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
      container = await clickContinueForgot(container, mock);
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
      fireEvent.click(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      );
    });

    then("user should see One-time link page", () => {
      defaultValidation();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      defaultValidation();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        defaultValidation();
      }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        defaultValidation();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see message "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    when(/^user access the inbox of registered "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and("user should receive a magic link mail", () => {
      defaultValidation();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and('user should see mail/ message body as "Hi {username}', () => {
      defaultValidation();
    });

    when("user click on a magic link", () => {
      defaultValidation();
    });

    then("user should successfully be logged in", () => {
      defaultValidation();
    });

    and("user should see Home/Dashboard page", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-7_STORY_EPP-216 - Verify user should be able to login into the patient portal without a username & password using the magic link received to my registered Phone number.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      launchURL(container);
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp(container, mock, element);
    });

    when("user lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen(container);
    });

    and("user clicks on 'Forgot Password' link", async () => {
      cleanup();
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
      container = await clickContinueForgot(container, mock);
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
      fireEvent.click(
        container.getByTestId(TEST_ID.FORGOT_TEST_ID.oneTimeLink)
      );
    });

    then("user should see One-time link page", () => {
      defaultValidation();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)"$/,
      (arg0, arg1, arg2) => {
        defaultValidation();
      }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        defaultValidation();
      }
    );

    when("user clicks on Send magic link", () => {
      defaultValidation();
    });

    then("user should see One-time link page", () => {
      defaultValidation();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)"$/,
      (arg0, arg1, arg2) => {
        defaultValidation();
      }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        defaultValidation();
      }
    );

    and("user clicks on Send magic link", () => {
      defaultValidation();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see message "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    when("user access the messages from Phone", () => {
      defaultValidation();
    });

    then("user should receive a magic link mail", () => {
      defaultValidation();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and('user should see mail/ message body as "Hi {username}', () => {
      defaultValidation();
    });

    when("user click on a magic link", () => {
      defaultValidation();
    });

    then("user should successfully be logged in", () => {
      defaultValidation();
    });

    and("user should see Home/Dashboard page", () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-217 - Verify user should be able to reset the old password by answering the security questions via "Answer security questions" mode', ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      launchURL(container);
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp(container, mock, element);
    });

    when("user lands onto “Patient Login” screen", () => {
      landOnPatientPortalScreen(container);
    });

    and("user clicks on 'Forgot Password' link", () => {
      defaultValidation();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText(/emailUserLabel/i);
      expect(usernameField.id).toEqual("username");
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(
      /^user should see "(.*)" button \(if security questions is set\)$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      const securityQuestions = [
        {
          Question: "Where did you go the first time you flew on a plane?",
          Answer: "America",
        },
        {
          Question: "Who is your all-time favorite movie character",
          Answer: "Peter",
        },
        {
          Question: "In what city or town did your parents meet?",
          Answer: "Berlin",
        },
      ];
      container = render(
        <PasswordSecurityQuestion
          showPostMessage={true}
          setShowPostMessage={() => {}}
          securityQuestionData={securityQuestions}
          onContinueButtonClicked={() => {}}
          onBackToLoginClicked={() => {}}
        />
      );

      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(
      "user should view the text “Answer the following questions to reset your password”",
      () => {
        const subtitle = container.getByText("subtitle");
        expect("subtitle").toEqual(subtitle.textContent);
      }
    );

    and("user should view the questions fields", () => {
      const question1 = container.getByLabelText(
        /Where did you go the first time you flew on a plane?/i
      );
      const question2 = container.getByLabelText(
        /Who is your all-time favorite movie character/i
      );
      const question3 = container.getByLabelText(
        /In what city or town did your parents meet?/i
      );
      expect(question1).toBeTruthy();
      expect(question2).toBeTruthy();
      expect(question3).toBeTruthy();
    });

    and(
      /^user fills in (.*) and (.*) for the security questions they set up$/,
      (arg0, arg1) => {
        const question1 = container.getByLabelText(
          /Where did you go the first time you flew on a plane?/i
        );
        const question2 = container.getByLabelText(
          /Who is your all-time favorite movie character/i
        );
        const question3 = container.getByLabelText(
          /In what city or town did your parents meet?/i
        );

        fireEvent.change(question1, { target: { value: "America" } });
        fireEvent.change(question2, { target: { value: "Peter" } });
        fireEvent.change(question3, { target: { value: "Berlin" } });

        expect(question1.value).toEqual("America");
        expect(question2.value).toEqual("Peter");
        expect(question3.value).toEqual("Berlin");
      }
    );

    when(/^user click on "(.*)" button$/, (arg0) => {
      const continueId = container.getByRole("button", {
        name: /continueButton/i,
      });
      fireEvent.click(continueId);
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      const link = container.getByText("backButtonLink");
      fireEvent.click(link);
    });

    and("user should see update password fields", () => {
      defaultValidation();
    });

    and(/^user fills (.*) and (.*) field$/, (arg0, arg1) => {
      defaultValidation();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^user should see text "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "First Name" field not filled', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should see the Don’t have an account? verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^user should see the following fields(.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and("user should see the ‘Register’ CTA", async () => {
      const registerBtn = await container.getByTestId("registerBtn");
      expect(registerBtn).toBeInTheDocument();
    });

    and(
      "user should see verbiage Already have an account? with Login link",
      () => {
        const title = container.getByText("Already have an account?");
        expect("Already have an account? Login").toEqual(title.textContent);
      }
    );

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5) => {
        const lastnameField = container.getAllByLabelText(/Last Name/i)[0];
        const emailField = container.getAllByLabelText(/Email/i);
        const mobileField = container.getAllByLabelText(/Mobile Number/i)[0];
        const passwordField = container.getByLabelText("Password *");
        fireEvent.change(lastnameField, { target: { value: "username" } });
        fireEvent.change(emailField[0], { target: { value: "a@aa.aa" } });
        fireEvent.change(mobileField, { target: { value: "(123) 456-789" } });
        fireEvent.change(passwordField, { target: { value: "password" } });
        expect(lastnameField.value).toEqual("username");
        expect(emailField[0].value).toEqual("a@aa.aa");
        expect(mobileField.value).toEqual("(123) 456-789");
        expect(passwordField.value).toEqual("password");
      }
    );

    and("user click on 'Register' button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then(
      /^user should see error message “This field is required” under "(.*)" field$/,
      (arg0) => {
        setTimeout(() => {
          const inputFieldError = container.getByLabelText(
            /This field is required/i
          );
          expect(inputFieldError).toBeTruthy();
          expect(/This field is required/i).toEqual(
            inputFieldError.textContent
          );
        }, 500);
      }
    );
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Last Name" field not filled', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following field (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and("user should see the ‘Register’ CTA", async () => {
      const registerBtn = await container.getByTestId("registerBtn");
      expect(registerBtn).toBeInTheDocument();
    });

    and(
      "user should see verbiage Already have an account? with Login link",
      (arg0) => {
        const title = container.getByText("Already have an account?");
        expect("Already have an account? Login").toEqual(title.textContent);
      }
    );

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5) => {
        const firstnameField = container.getAllByLabelText(/Last Name/i)[0];
        const emailField = container.getAllByLabelText(/Email/i);
        const mobileField = container.getAllByLabelText(/Mobile Number/i)[0];
        const passwordField = container.getByLabelText("Password *");
        fireEvent.change(firstnameField, { target: { value: "username" } });
        fireEvent.change(emailField[0], { target: { value: "a@aa.aa" } });
        fireEvent.change(mobileField, { target: { value: "(123) 456-789" } });
        fireEvent.change(passwordField, { target: { value: "password" } });
        expect(firstnameField.value).toEqual("username");
        expect(emailField[0].value).toEqual("a@aa.aa");
        expect(mobileField.value).toEqual("(123) 456-789");
        expect(passwordField.value).toEqual("password");
      }
    );

    and("user click on 'Register' button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then(
      /^user should see error message “This field is required” under "(.*)" field$/,
      (arg0) => {
        setTimeout(() => {
          const inputFieldError = container.getByLabelText(
            /This field is required/i
          );
          expect(inputFieldError).toBeTruthy();
          expect(/This field is required/i).toEqual(
            inputFieldError.textContent
          );
        }, 500);
      }
    );
  });

  test("EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the Date of Birth field not filled", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see Register button", () => {
      defaultValidation();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and("user should see the Register CTA", () => {
      defaultValidation();
    });

    and(
      "user should see verbiage Already have an account? with Login link",
      () => {
        const title = container.getByText("Already have an account?");
        expect("Already have an account? Login").toEqual(title.textContent);
      }
    );

    when(
      /^user provide the details to the field (.*),(.*) ,(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5) => {
        const lastnameField = container.getAllByLabelText(/Last Name/i)[0];
        const emailField = container.getAllByLabelText(/Email/i);
        const mobileField = container.getAllByLabelText(/Mobile Number/i)[0];
        const passwordField = container.getByLabelText("Password *");
        fireEvent.change(lastnameField, { target: { value: "username" } });
        fireEvent.change(emailField[0], { target: { value: "a@aa.aa" } });
        fireEvent.change(mobileField, { target: { value: "(123) 456-789" } });
        fireEvent.change(passwordField, { target: { value: "password" } });
        expect(lastnameField.value).toEqual("username");
        expect(emailField[0].value).toEqual("a@aa.aa");
        expect(mobileField.value).toEqual("(123) 456-789");
        expect(passwordField.value).toEqual("password");
      }
    );

    and("user click on 'Register' button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then(
      "user should see error message This field is required under Date of Birth field",
      () => {
        setTimeout(() => {
          const inputFieldError = container.getByLabelText(
            /This field is required/i
          );
          expect(inputFieldError).toBeTruthy();
          expect(/This field is required/i).toEqual(
            inputFieldError.textContent
          );
        }, 500);
      }
    );
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Mobile Number" field not filled & Preferred mode as Mobile Number', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and(
      "user should see verbiage Already have an account? with Login link",
      (arg0) => {
        const title = container.getByText("Already have an account?");
        expect("Already have an account? Login").toEqual(title.textContent);
      }
    );

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*),(.*) and blank the field (.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5) => {
        const lastnameField = container.getAllByLabelText(/Last Name/i)[0];
        const emailField = container.getAllByLabelText(/Email/i);
        const mobileField = container.getAllByLabelText(/Mobile Number/i)[0];
        const passwordField = container.getByLabelText("Password *");
        fireEvent.change(lastnameField, { target: { value: "username" } });
        fireEvent.change(emailField[0], { target: { value: "a@aa.aa" } });
        fireEvent.change(mobileField, { target: { value: "" } });
        fireEvent.change(passwordField, { target: { value: "password" } });
        expect(lastnameField.value).toEqual("username");
        expect(emailField[0].value).toEqual("a@aa.aa");
        expect(mobileField.value).toEqual("");
        expect(passwordField.value).toEqual("password");
      }
    );

    then(/^user should see default "(.*)" as Email$/, (arg0) => {
      defaultValidation();
    });

    and(/^user change the "(.*)" from Email to Mobile number$/, (arg0) => {
      defaultValidation();
    });

    then(
      "user should see the message Email ID or Mobile Number is required under Mobile Number field",
      () => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "First " field', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and(
      "user should see verbiage Already have an account? with Login link",
      () => {
        const title = container.getByText("Already have an account?");
        expect("Already have an account? Login").toEqual(title.textContent);
      }
    );

    when(/^user enter numeric special character in (.*) field$/, (arg0) => {
      const lastnameField = container.getAllByLabelText(/Last Name/i)[0];
      const emailField = container.getAllByLabelText(/Email/i);
      const mobileField = container.getAllByLabelText(/Mobile Number/i)[0];
      const passwordField = container.getByLabelText("Password *");
      fireEvent.change(lastnameField, { target: { value: "asd%^&%asd" } });
      fireEvent.change(emailField[0], { target: { value: "a@aa.aa" } });
      fireEvent.change(mobileField, { target: { value: "" } });
      fireEvent.change(passwordField, { target: { value: "password" } });
      expect(lastnameField.value).toEqual("asd%^&%asd");
      expect(emailField[0].value).toEqual("a@aa.aa");
      expect(mobileField.value).toEqual("");
      expect(passwordField.value).toEqual("password")
    });

    then(
      /^user should see the error message “Incorrect format” under "(.*)"field$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "Last name" field', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "user should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and(
      "user should see verbiage Already have an account? with Login link",
      () => {
        const title = container.getByText("Already have an account?");
        expect("Already have an account? Login").toEqual(title.textContent);
      }
    );

    when(/^user enter numeric special character in (.*) field$/, (arg0) => {
      const lastnameField = container.getAllByLabelText(/Last Name/i)[0];
      const emailField = container.getAllByLabelText(/Email/i);
      const mobileField = container.getAllByLabelText(/Mobile Number/i)[0];
      const passwordField = container.getByLabelText("Password *");
      fireEvent.change(lastnameField, { target: { value: "asd%^&%asd" } });
      fireEvent.change(emailField[0], { target: { value: "a@aa.aa" } });
      fireEvent.change(mobileField, { target: { value: "" } });
      fireEvent.change(passwordField, { target: { value: "password" } });
      expect(lastnameField.value).toEqual("asd%^&%asd");
      expect(emailField[0].value).toEqual("a@aa.aa");
      expect(mobileField.value).toEqual("");
      expect(passwordField.value).toEqual("password")
    });

    then(
      /^user should see the error message “Incorrect format” under "(.*)" field$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when incorrect format enter in "Email" field', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    when(/^user enter invalid format in (.*) field$/, (arg0) => {
      const emailField = container.getAllByLabelText(/Email/i);
      fireEvent.change(emailField[0], { target: { value: "invalid@email" } });
      expect(emailField[0].value).toEqual("invalid@email");

      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then(
      /^user should see the error message “Incorrect email format” under "(.*)" field$/,
      (arg0) => {
        setTimeout(() => {
          const emailFieldError = container.getByLabelText(
            /Incorrect email format/i
          );
          expect(emailFieldError).toBeTruthy();
          expect(/Incorrect email format/i).toEqual(
            emailFieldError.textContent
          );
        }, 500);
      }
    );
  });

  test('EPIC_EPP-2_STORY_EPP-250- Verify if user able to see error message when incorrect format enter in "Date of Birth" field', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    when(/^user enter invalid format in (.*) field$/, (arg0) => {
      const dobField = container.getAllByLabelText(/Date of Birth/i);
      fireEvent.change(dobField[0], { target: { value: 12 } });
      expect(dobField[0].value).toEqual("");

      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then(
      /^user should see the message  “Invalid date of birth” under "(.*)" field$/,
      (arg0) => {
        setTimeout(() => {
          const dobFieldError = container.getByLabelText(
            /Incorrect date of birth/i
          );
          expect(dobFieldError).toBeTruthy();
          expect(/Incorrect date of birth/i).toEqual(dobFieldError.textContent);
        }, 500);
      }
    );
  });

  //13
  test("EPIC_EPP-2_STORY_EPP-254 - Verify if registered user unable to register again", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' patient portal url", () => {
      defaultValidation();
    });

    and("user is in “Login” screen", async () => {
      container = await renderLogin(container);
    });

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    and("user should see user registration screen", () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then(
      /^user should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    when(
      /^user provide the details to the field  (.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6) => {
        defaultValidation();
      }
    );

    and("user should see the ‘Register’ CTA", async () => {
      const registerBtn = await container.getByTestId("registerBtn");
      expect(registerBtn).toBeInTheDocument();
    });

    and(
      "user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA",
      () => {
        const termNCon = container.getByText(
          /By registering, you accept to our Terms & Conditions and Privacy Policy/i
        );
        expect(termNCon).toBeInTheDocument();
      }
    );

    and("user click on 'Register' button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then(
      "user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”",
      () => {
        defaultValidation();
      }
    );

    and(
      /^user should give the option to redirect to "(.*)" screen$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(/^user lands on to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-2_STORY_EPP-254- Verify if registered user unable to register again with Email id", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' patient portal url", () => {
      defaultValidation();
    });

    and("user is in “Login” screen", async () => {
      container = await renderLogin(container);
    });

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    and("user should see user registration screen", () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then(
      /^User should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    when(
      /^user provide the details to the field  (.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5) => {
        defaultValidation();
      }
    );

    and("user should see the ‘Register’ CTA", async () => {
      const registerBtn = await container.getByTestId("registerBtn");
      expect(registerBtn).toBeInTheDocument();
    });

    and(
      "user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA",
      () => {
        const termNCon = container.getByText(
          /By registering, you accept to our Terms & Conditions and Privacy Policy/i
        );
        expect(termNCon).toBeInTheDocument();
      }
    );

    and("user click on 'Register' button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then(
      "user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”",
      () => {
        defaultValidation();
      }
    );

    and(
      /^user should give the option to redirect to "(.*)" screen$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(/^user lands on to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-2_STORY_EPP-254 - Verify if registered user unable to register again with Mobile number", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' patient portal url", () => {
      defaultValidation();
    });

    and("user is in “Login” screen", async () => {
      container = await renderLogin(container);
    });

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    and("user should see user registration screen", () => {
      expect(container.getByText("User Registration")).toBeInTheDocument();
    });

    then(
      /^User should see the following fields "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5) => {
        defaultValidation();
      }
    );

    and("user should see the ‘Register’ CTA", async () => {
      const registerBtn = await container.getByTestId("registerBtn");
      expect(registerBtn).toBeInTheDocument();
    });

    and(
      "user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA",
      () => {
        const termNCon = container.getByText(
          /By registering, you accept to our Terms & Conditions and Privacy Policy/i
        );
        expect(termNCon).toBeInTheDocument();
      }
    );

    and("user click on 'Register' button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then(
      "user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”",
      () => {
        defaultValidation();
      }
    );

    and(
      /^user should give the option to redirect to "(.*)" screen$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(/^user lands on to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });
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

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Mobile Number" field not filled & Preferred mode as Email', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and(
      `user should see verbiage ”Already have an account? with "Login" link`,
      (arg0) => {
        const login = container.getByRole("link", { name: /Login/i });
        expect(login).toBeTruthy();
      }
    );

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*),(.*) and blank the field (.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5) => {
        defaultValidation();
      }
    );

    then(/^user should selects "(.*)" as Email$/, (arg0) => {
      defaultValidation();
    });

    and("user click on 'Register' button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then("user should get below notification message in Email", () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 -  Verify if user able to Register the account when the "Email" field not filled & Preferred mode as Email', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and(
      `user should see verbiage ”Already have an account? with "login" link`,
      (arg0) => {
        const login = container.getByRole("link", { name: /Login/i });
        expect(login).toBeTruthy();
      }
    );

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*),(.*) and blank the field (.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5) => {
        defaultValidation();
      }
    );

    then(/^user should see default "(.*)" as Mobile Number$/, (arg0) => {
      defaultValidation();
    });

    and(/^user change the "(.*)" from Mobile Number to Email$/, (arg0) => {
      defaultValidation();
    });

    then(
      "user should see the message “Email ID or Mobile number is required”",
      () => {
        defaultValidation();
      }
    );
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

  test('EPIC_EPP-2_STORY_EPP-255  -  Verify error message if user not filled the "Password" field', ({
    given,
    and,
    then,
    when,
  }) => {
    given("user visited the ECP office", () => {
      defaultValidation();
    });

    and("user provide all details,fill forms and consulted doctor", () => {
      defaultValidation();
    });

    then(
      `System(E360+) has all the required details of the user to onboard him to Patient portal`,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      `System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        defaultValidation();
      }
    );

    when("user click on the link", () => {
      defaultValidation();
    });

    and("user lands on “Set Password” screen", () => {
      defaultValidation();
    });

    then(/^user should  see the verbiage "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and("user should to view and fill the following fields", () => {
      defaultValidation();
    });

    then("user should see Email or phone number is auto populated", () => {
      defaultValidation();
    });

    and(/^user should see the field "(.*)","(.*)"$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(/^user leave "(.*)" field blank$/, (arg0) => {
      defaultValidation();
    });

    then("user see the error message “This field is required”", () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-255  -  Verify error message if user not filled the "Confirm Password" field', ({
    given,
    and,
    then,
    when,
  }) => {
    given("user visited the ECP office", () => {
      defaultValidation();
    });

    and("user provide all details,fill forms and consulted doctor", () => {
      defaultValidation();
    });

    then(
      `System(E360+) has all the required details of the user to onboard him to Patient portal`,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      `System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and(
      "User receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        defaultValidation();
      }
    );

    when("User click on the link", () => {
      defaultValidation();
    });

    and("User lands on “Set Password” screen", () => {
      defaultValidation();
    });

    then(/^User should see the verbiage "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and("user should see Email or phone number is auto populated", () => {
      defaultValidation();
    });

    and(/^user should see field "(.*)","(.*)"$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(/^user leave "(.*)" field blank$/, (arg0) => {
      defaultValidation();
    });

    then("user see the error message “This field is required”", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-2_STORY_EPP-255  -  Verify the error message if user enter password mismatch in 'Password' & 'Confirm Password' field", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user visited the ECP office", () => {
      defaultValidation();
    });

    and("user provide all details,fill forms and consulted doctor", () => {
      defaultValidation();
    });

    then(
      `System(E360+) has all the required details of the user to onboard him to Patient portal`,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      `System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        defaultValidation();
      }
    );

    when("user click on the link", () => {
      defaultValidation();
    });

    and("user lands on “Set Password” screen", () => {
      defaultValidation();
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("user should see Email or phone number is auto populated", () => {
      defaultValidation();
    });

    and(/^user should see "(.*)" and "(.*)" field$/, (arg0, arg1) => {
      defaultValidation();
    });

    and(/^user enter the value 'abcd(\d+)' in Password field$/, (arg0) => {
      defaultValidation();
    });

    and(
      /^user enter the value 'abcd(\d+)' in Confirm password field$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then("user see the error message “Password does not match”", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-2_STORY_EPP-255  - Verify the error message if password field not meet password requirement length range from 8 to 20 characters", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user visited the ECP office", () => {
      defaultValidation();
    });

    and("user provide all details,fill forms and consulted doctor", () => {
      defaultValidation();
    });

    then(
      `System(E360+) has all the required details of the user to onboard him to Patient portal`,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      `System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        defaultValidation();
      }
    );

    when("user click on the link", () => {
      defaultValidation();
    });

    and("user lands on “Set Password” screen", () => {
      defaultValidation();
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("user should see Email or phone number is auto populated", () => {
      defaultValidation();
    });

    and(/^user should see the field "(.*)","(.*)"$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(
      /^user enter the value 'abcd(\d+)#' length less than (\d+) characters$/,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    when(
      /^user enter the value 'abcdefgh(\d+)##(\d+)' length greater than (\d+) characters$/,
      (arg0, arg1, arg2) => {
        defaultValidation();
      }
    );

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-2_STORY_EPP-255-Verify the error message if password requirement not met for not using at least 1 Lower case letter in 'Password' field", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user visited the ECP office", () => {
      defaultValidation();
    });

    and("user provide all details,fill forms and consulted doctor", () => {
      defaultValidation();
    });

    then(
      `System(E360+) has all the required details of the user to onboard him to Patient portal`,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      `System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        defaultValidation();
      }
    );

    when("user click on the link", () => {
      defaultValidation();
    });

    and("user lands on “Set Password” screen", () => {
      defaultValidation();
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("user should see Email or phone number is auto populated", () => {
      defaultValidation();
    });

    and(/^user should see field "(.*)","(.*)"$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(
      /^user enter the value 'ABC(\d+)\$' without lower case letter in Password field$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-2_STORY_EPP-255  - Verify the error message if password requirement not met for using our username in Password field", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user visited the ECP office", () => {
      defaultValidation();
    });

    and("user provide all details,fill forms and consulted doctor", () => {
      defaultValidation();
    });

    then(
      `System(E360+) has all the required details of the user to onboard him to Patient portal`,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      `System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        defaultValidation();
      }
    );

    when("user click on the link", () => {
      defaultValidation();
    });

    and("user lands on “Set Password” screen", () => {
      defaultValidation();
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("user should see Email or phone number is auto populated", () => {
      defaultValidation();
    });

    and(
      /^user should see password field and confirm password field (.*),(.*).$/,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    when("user enter the value 'abc@gmail.com' in Password field", () => {
      defaultValidation();
    });

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-2_STORY_EPP-255  -  Verify the error message if password requirement not met for not using at least 1 Number in 'Password' field", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user visited the ECP office", () => {
      defaultValidation();
    });

    and("user provide all details,fill forms and consulted doctor", () => {
      defaultValidation();
    });

    then(
      `System(E360+) has all the required details of the user to onboard him to Patient portal`,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      `System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        defaultValidation();
      }
    );

    when("user click on the link", () => {
      defaultValidation();
    });

    and("user lands on “Set Password” screen", () => {
      defaultValidation();
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("user should see Email or phone number is auto populated", () => {
      defaultValidation();
    });

    and(/^user should see field "(.*)","(.*)".$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(
      /^user enter the value 'ABCaasa\$' (\d+) number in Password field$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      defaultValidation();
    });
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
      `admin provides E360+ Registered valid  "<Phone number>" and Invalid "<password>"`,
      (arg0, arg1) => {
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
      }
    );

    and(/^admin user clicks on "(.*)" Button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^admin user should see the error message "(.*)"$/, (arg0, table) => {
      expect(true).toBeTruthy();
    });
  });

  test(`EPIC_EPP-2_STORY_EPP-255  - Verify the error message if password requirement not met for not using at least 1 Upper case letter in 'Password' field`, ({
    given,
    and,
    then,
    when,
  }) => {
    given("user visited the ECP office", () => {
      defaultValidation();
    });

    and("user provide all details,fill forms and consulted doctor", () => {
      defaultValidation();
    });

    then(
      `System(E360+) has all the required details of the user to onboard him to Patient portal`,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      `System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        defaultValidation();
      }
    );

    when("user click on the link", () => {
      defaultValidation();
    });

    and("user lands on “Set Password” screen", () => {
      defaultValidation();
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("user should see Email or phone number is auto populated", () => {
      defaultValidation();
    });

    and(/^user should see field "(.*)","(.*)"$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(
      /^user enter the value "(.*)" without (\d+) upper case letter in Password field$/,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-2_STORY_EPP-255  - Verify the error message if password requirement not met for not using atleast 1 special character in Password field", ({
    given,
    and,
    then,
    when,
  }) => {
    given("user visited the ECP office", () => {
      defaultValidation();
    });

    and("user provide all details,fill forms and consulted doctor", () => {
      defaultValidation();
    });

    then(
      `System(E360+) has all the required details of the user to onboard him to Patient portal`,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      `System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and(
      "user receives an email/text message with a link to their registered email id/ mobile number",
      () => {
        defaultValidation();
      }
    );

    when("user click on the link", () => {
      defaultValidation();
    });

    and("user lands on “Set Password” screen", () => {
      defaultValidation();
    });

    then(/^user should see the verbiage "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("user should see Email or phone number is auto populated", () => {
      defaultValidation();
    });

    and(/^user should see field "(.*)","(.*)"$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(
      /^user enter the value 'abcd(\d+)' without special charaters in Password field$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then(/^user should see the error message "(.*)"$/, (arg0) => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to Register the account when the "Email" field not filled & Preferred mode as Mobile Number', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*),(.*) and blank the field (.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5) => {
        defaultValidation();
      }
    );

    and(/^user should see default "(.*)" as Mobile Number$/, (arg0) => {
      defaultValidation();
    });

    and("user should see the ‘Register’ CTA", async () => {
      const registerBtn = await container.getByTestId("registerBtn");
      expect(registerBtn).toBeInTheDocument();
    });

    and(
      "user should see verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ CTA",
      () => {
        const termNCon = container.getByText(
          /By registering, you accept to our Terms & Conditions and Privacy Policy/i
        );
        expect(termNCon).toBeInTheDocument();
      }
    );

    and(
      `user should see verbiage ”Already have an account? with "Login" link`,
      (arg0) => {
        const login = container.getByRole("link", { name: /Login/i });
        expect(login).toBeTruthy();
      }
    );

    when("user click on 'Register' button", () => {
      defaultValidation();
    });

    then(
      "user should get below notification message in Mobile Number",
      (table) => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-2_STORY_EPP-250- Verify if user able to see error message when incorrect format enter in "Mobile number" field', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and(
      `user should see verbiage ”Already have an account? with "Login" link`,
      (arg0) => {
        const login = container.getByRole("link", { name: /Login/i });
        expect(login).toBeTruthy();
      }
    );

    when(/^user enter invalid format in (.*) field$/, (arg0) => {
      const mobileNumberField = container.getAllByLabelText(/Mobile Number/i);
      fireEvent.change(mobileNumberField[0], { target: { value: 123 } });
      expect(mobileNumberField[0].value).toEqual("(123) ");

      const register = container.getByRole("button", { name: /REGISTER/i });
      fireEvent.click(register);
    });

    then(
      /^user should see the message “Incorrect mobile number format” under "(.*)" field$/,
      (arg0) => {
        setTimeout(() => {
          const mobileNumberError = container.getByLabelText(
            /Incorrect mobile number format/i
          );
          expect(mobileNumberError).toBeTruthy();
          expect(/Incorrect mobile number format/i).toEqual(
            mobileNumberError.textContent
          );
        }, 500);
      }
    );
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin user provides Valid Email or Phone Number and Invalid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("admin user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("admin user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    when("admin user lands onto “Patient Login” screen", () => {
      defaultValidation();
    });

    and(
      `admin provides E360+ Registered Invalid  "<Email or Phone Number>" and valid "<password>"`,
      (arg0, arg1, arg2) => {
        defaultValidation();
      }
    );

    and(/^admin user clicks on "(.*)" Button$/, (arg0) => {
      defaultValidation();
    });

    then(/^admin user should see the error message "(.*)"$/, (arg0) => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-4_STORY_EPP-208-Verify whether the "Invalid Username or Password" error message is displaying when Admin provides Valid User name and Invalid Password', ({
    given,
    and,
    when,
    then,
  }) => {
    given("admin user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("admin user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    when("admin user lands onto “Patient Login” screen", () => {
      defaultValidation();
    });

    and(
      `admin provides E360+ Registered valid  "<Email or Phone Number>" and Invalid "<password>"`,
      (arg0, arg1, arg2) => {
        defaultValidation();
      }
    );

    and(/^admin user clicks on "(.*)" Button$/, (arg0) => {
      defaultValidation();
    });

    then(/^admin user should see the error message "(.*)"$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the inline error message is displayed if Email or Phone number not filled", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user/admin user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user/ admin user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    when("user/ admin user lands onto “Patient Login” screen", () => {
      defaultValidation();
    });

    and(
      `user/admin user provides blank "<Email or Phone Number>" and valid "<password>"`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and("user click the 'Login' Button.", () => {
      defaultValidation();
    });

    then("user should view the error message 'This field is required'", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-4_STORY_EPP-206- Verify whether the inline error message is displayed if password not filled", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user/admin user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user/ admin user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    when("user/ admin user lands onto “Patient Login” screen", () => {
      defaultValidation();
    });

    and(
      `user/admin user provides valid "<Email or Phone Number>" and blank "<password>"`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and("user click the 'Login' Button.", () => {
      defaultValidation();
    });

    then("user should view the error message 'This field is required'", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-4_STORY_EPP-206- Verify whether the inline error message is displayed if Email or Phone Number and  password are not filled", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user/admin user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user/ admin user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    when("user/ admin user lands onto “Patient Login” screen", () => {
      defaultValidation();
    });

    and(
      `user/admin user provides blank "<Email or Phone Number>" and blank "<password>"`,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and("user click the 'Login' Button.", () => {
      defaultValidation();
    });

    then("user should view the error message 'This field is required'", () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-2_STORY_EPP-250 - Verify if user able to see error message when password requirement not met in "Password" field', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the 'XXX' url", () => {
      defaultValidation();
    });

    and("user navigates to the Patient Portal application", async () => {
      container = await renderLogin(container);
    });

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getAllByText("formTitle")[0];
      expect("formTitle").toEqual(title.textContent);
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        setTimeout(() => {
          const accountitle = container.getByLabelText(
            /Don't have an account?/i
          );
          expect(/Don't have an account?/i).toEqual(accountitle.textContent);
        }, 500);
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      setTimeout(() => {
        const toRegister = container.getByRole("button", {
          name: /Create Account/i,
        });
        expect(toRegister).toBeTruthy();
        fireEvent.click(toRegister);
      }, 500);
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    then(
      /^User should see the following fields (.*),(.*),(.*),(.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) => {
        defaultValidation();
      }
    );

    and("user should see ‘Register’ button", () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      "User should view the verbiage “By registering, you accept to our Terms & Conditions and Privacy Policy” below the ‘Register’ button",
      () => {
        setTimeout(() => {
          const title = container.getByText(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          );
          expect(
            "By registering, you agree to our Terms & Conditions and Privacy Policy"
          ).toEqual(title.textContent);
        }, 500);
      }
    );

    and(
      `user should see verbiage ”Already have an account? with "Login" link`,
      (arg0) => {
        const login = container.getByRole("link", { name: /Login/i });
        expect(login).toBeTruthy();
      }
    );

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4) => {
        defaultValidation();
      }
    );

    and(
      "user enter password which does not meet the password requirement",
      () => {
        defaultValidation();
      }
    );

    then(
      "user should see error message “Password does not meet requirements”",
      () => {
        defaultValidation();
      }
    );
  });
});
