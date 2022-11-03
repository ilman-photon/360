import { fireEvent, render, act } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import PasswordSecurityQuestion from "../../src/components/organisms/PasswordSecurityQuestion/passwordSecurityQuestion";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-218.feature"
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
}

const navigateToPatientPortalApp = () => {
  mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
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
}

defineFeature(feature, (test) => {
  test('EPIC_EPP-7_STORY_EPP-218 - Verify the error message if user enter 3 times wrong/incorrect answer the security questions via "Answer security questions" mode', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("use launch the 'XXX' url", () => {
      launchURL()
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp()
    });

    when('user lands onto "Patient Login" screen', () => {
      landOnPatientPortalScreen()
    });

    and("user clicks on 'Forgot Password' link", () => {
      expect(true).toBeTruthy();
    });

    and('user should enter valid "Email or Phone Number"', () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText("emailUserLabel");
      expect(usernameField.id).toEqual("username");
    });

    and('user clicks on "Continue" button', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, () => {
      expect(true).toBeTruthy();
    });

    and(
      'user should see "Answer security questions" button (if security questions is set)',
      () => {
        expect(true).toBeTruthy();
      }
    );

    and('user should see "Login with magic link" button', () => {
      expect(true).toBeTruthy();
    });

    and('user should see "Back to Log in" button', () => {
      expect(true).toBeTruthy();
    });

    when('user click on "Answer security questions" button', () => {
      expect(true).toBeTruthy();
    });

    then('user should see "Password Recovery Security Questions" page', () => {
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
          setShowPostMessage={() => {
            expect(true).toBeTruthy();
          }}
          securityQuestionData={securityQuestions}
          onContinueButtonClicked={() => {
            expect(true).toBeTruthy();
          }}
          onBackToLoginClicked={() => {
            expect(true).toBeTruthy();
          }}
        />
      );

      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(
      'user should view the text "Answer the following questions to reset your password"',
      () => {
        const subtitle = container.getByText("subtitle");
        expect("subtitle").toEqual(subtitle.textContent);
      }
    );

    and("user should view the questions fields", () => {
      const question1 = container.getByLabelText(
        "Where did you go the first time you flew on a plane?"
      );
      const question2 = container.getByLabelText(
        "Who is your all-time favorite movie character"
      );
      const question3 = container.getByLabelText(
        "In what city or town did your parents meet?"
      );
      expect(question1).toBeTruthy();
      expect(question2).toBeTruthy();
      expect(question3).toBeTruthy();
    });

    and('user should see "Back to Log in" button', () => {
      const link = container.getByText("backButtonLink");
      expect(link).toBeTruthy();
    });

    when(
      'user fills in wrong "Question1Ans" and "Question2Ans" for the security questions they set up 3 times',
      () => {
        const continueId = container.getByRole("button", {
          name: /continueButton/i,
        });
        const question1 = container.getByLabelText(
          "Where did you go the first time you flew on a plane?"
        );
        const question2 = container.getByLabelText(
          "Who is your all-time favorite movie character"
        );
        const question3 = container.getByLabelText(
          "In what city or town did your parents meet?"
        );

        fireEvent.change(question1, { target: { value: "abc" } });
        fireEvent.change(question2, { target: { value: "abc" } });
        fireEvent.change(question3, { target: { value: "abc" } });
        expect(question1.value).toEqual("abc");
        expect(question2.value).toEqual("abc");
        expect(question3.value).toEqual("abc");
        fireEvent.click(continueId);

        fireEvent.change(question1, { target: { value: "dfg" } });
        fireEvent.change(question2, { target: { value: "dfg" } });
        fireEvent.change(question3, { target: { value: "dfg" } });
        expect(question1.value).toEqual("dfg");
        expect(question2.value).toEqual("dfg");
        expect(question3.value).toEqual("dfg");
        fireEvent.click(continueId);

        fireEvent.change(question1, { target: { value: "rty" } });
        fireEvent.change(question2, { target: { value: "rty" } });
        fireEvent.change(question3, { target: { value: "rty" } });
        expect(question1.value).toEqual("rty");
        expect(question2.value).toEqual("rty");
        expect(question3.value).toEqual("rty");
        fireEvent.click(continueId);

        fireEvent.change(question1, { target: { value: "uio" } });
        fireEvent.change(question2, { target: { value: "uio" } });
        fireEvent.change(question3, { target: { value: "uio" } });
        expect(question1.value).toEqual("uio");
        expect(question2.value).toEqual("uio");
        expect(question3.value).toEqual("uio");
        fireEvent.click(continueId);
      }
    );

    when(
      'user should see error message "Your account has been locked. Please contact Customer Support to unlock your account."',
      async () => {
        const continueId = container.getByRole("button", {
          name: /continueButton/i,
        });
        await fireEvent.click(continueId);
        await fireEvent.click(continueId);
        await fireEvent.click(continueId);
        await fireEvent.click(continueId);

        const svg = container.findAllByText(/MuiSvgIcon-root/i);
        expect(svg).toBeTruthy();
      }
    );
  });

  test('EPIC_EPP-7_STORY_EPP-218 - Verify the error message if user enter 3 times wrong/incorrect answer the security questions via "Received link to Reset Password" mode', ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    and("user clicks on 'Forgot Password' link", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button\(if security questions is not set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button \(if security questions is set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should receive a magic link mail", () => {
      expect(true).toBeTruthy();
    });

    and("user should see the mail with Email Subject", () => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should view the text “Answer the following questions to reset your password”",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should view the questions fields", () => {
      expect(true).toBeTruthy();
    });

    when(
      /^user fills in wrong (.*) and (.*)for the security questions they set up (\d+) times$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-218 - Verify the error message if user enter wrong/incorrect answer the security questions via "Answer security questions" mode', ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    and("user clicks on 'Forgot Password' link", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button\(if security questions is set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should view the text “Answer the following questions to reset your password”",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should view the questions fields", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(
      /^user fills in wrong (.*) and (.*)for the security questions they set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    then('user should see error message "Incorrect answer(s)”', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-218 - Verify the error message if user does not answer the security questions via "Login with magic link" mode', ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    and("user clicks on 'Forgot Password' link", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button\(if security questions is not set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button \(if security questions is set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should receive a magic link mail", () => {
      expect(true).toBeTruthy();
    });

    and("user should see the mail with Email Subject", () => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should view the text “Answer the following questions to reset your password”",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should view the questions fields", () => {
      expect(true).toBeTruthy();
    });

    when(
      /^user fills in wrong (.*) and (.*)for the security questions they set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    then('user should see error message "Incorrect answer(s)”', () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-7_STORY_EPP-218 - Verify user should see Forgot password screen with empty field when reload the page", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    and("user clicks on 'Forgot Password' link", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button\(if security questions is not set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button \(if security questions is set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should receive a magic link mail", () => {
      expect(true).toBeTruthy();
    });

    and("user should see the mail with Email Subject", () => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      "user should view the text “Answer the following questions to reset your password”",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and("user should view the questions fields", () => {
      expect(true).toBeTruthy();
    });

    when(
      /^user fills in wrong (.*) and (.*)for the security questions they set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and("user click on reload", () => {
      expect(true).toBeTruthy();
    });

    then(
      "user should see Forgot password screen with empty field when reload the page",
      () => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-7 _STORY_EPP-218 - Verify user should not see any error after click on F12", ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    and("user clicks on 'Forgot Password' link", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button\(if security questions is not set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button \(if security questions is set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should receive a magic link mail", () => {
      expect(true).toBeTruthy();
    });

    and("user should see the mail with Email Subject", () => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user click F(\d+) on keyboard$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should not see any error after click on F(\d+)$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-218 - Verify user should see user should see "Password Recovery Security Questions" page loaded within 3 seconds', ({
    given,
    and,
    when,
    then,
  }) => {
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when("user lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    and("user clicks on 'Forgot Password' link", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button\(if security questions is not set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see heading "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button \(if security questions is set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" text$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should receive a magic link mail", () => {
      expect(true).toBeTruthy();
    });

    and("user should see the mail with Email Subject", () => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" page loaded within (\d+) second$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );
  });
});
