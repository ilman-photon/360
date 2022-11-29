import { fireEvent, render, act } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import PasswordSecurityQuestion from "../../src/components/organisms/PasswordSecurityQuestion/passwordSecurityQuestion";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-217.feature",
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
  test('EPIC_EPP-7_STORY_EPP-217 - Verify user should be able to reset the old password by answering the security questions via "Answer security questions" mode', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("use launch the 'XXX' url", () => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when('user lands onto "Patient Login" screen', () => {
      landOnPatientPortalScreen();
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
      const usernameField = container.getAllByLabelText(/emailUserLabel/i)[0];
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
      'user should view the text "Answer the following questions to reset your password"',
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
      'user fills in "Question1Ans" and "Question2Ans" for the security questions they set up',
      () => {
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

    when('user click on "Continue" button', () => {
      const continueId = container.getByRole("button", {
        name: /continueButton/i,
      });
      fireEvent.click(continueId);
    });

    and('user should see "Back to login" button', () => {
      const link = container.getByText("backButtonLink");
      fireEvent.click(link);
    });
  });

  test('EPIC_EPP-7_STORY_EPP-217 - Verify the error message if user does not answer the security questions via "Answer security questions" mode', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("use launch the 'XXX' url", () => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when('user lands onto "Patient Login" screen', () => {
      landOnPatientPortalScreen();
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
      const usernameField = container.getAllByLabelText(/emailUserLabel/i)[0];
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
      'user should view the text "Answer the following questions to reset your password"',
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

    when(
      'user does not fills in "Question1Ans" and "Question2Ans"for the security questions they set up',
      () => {
        const question1 = container.getByLabelText(
          /Where did you go the first time you flew on a plane?/i
        );
        const question2 = container.getByLabelText(
          /Who is your all-time favorite movie character/i
        );
        const question3 = container.getByLabelText(
          /In what city or town did your parents meet?/i
        );

        fireEvent.change(question1, { target: { value: "" } });
        fireEvent.change(question2, { target: { value: "" } });
        fireEvent.change(question3, { target: { value: "" } });

        expect(question1.value).toEqual("");
        expect(question2.value).toEqual("");
        expect(question3.value).toEqual("");
      }
    );

    and('user click on "Continue" button', () => {
      const continueId = container.getByRole("button", {
        name: /continueButton/i,
      });
      fireEvent.click(continueId);
    });

    then('user should see error message "This field is required"', () => {
      const continueId = container.getByRole("button", {
        name: /continueButton/i,
      });
      fireEvent.click(continueId);
      setTimeout(() => {
        const question1 = container.getByLabelText(/errorEmptyField/i);
        expect(question1).toBeTruthy();
      }, 500);
    });
  });

  test('EPIC_EPP-7_STORY_EPP-217 - Verify user should be able to reset the old password by answering the security questions if  "one-time link" is not received', ({
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

    and(
      /^user fills in (.*) and (.*)for the security questions they set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see update password fields", () => {
      expect(true).toBeTruthy();
    });

    and(/^user fills (.*) and (.*) field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-217 - Verify user should be able to reset the old password using "one-time link"', ({
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

    and("user should see the mail with Email Subject", () => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" on email$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see update password fields", () => {
      expect(true).toBeTruthy();
    });

    and(/^user fills (.*) and (.*) field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see text "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-217  - Verify user  is not able to view "Password Recovery Security Questions" page on clicking "Answer security question" when Internet connection is unavailable', ({
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

    and(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should see appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-217  - Verify user  is not able to view "Password Recovery Security Questions" page on clicking "Answer security question" when service is unavailable', ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
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

    and(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should see appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-7_STORY_EPP-217 - Verify user should see And user should see update password screen with blank field when user refresh the screen", ({
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
      /^user should see "(.*)" button \(if security questions is set\)$/,
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

    and(
      /^user fills in (.*) and (.*) for the security questions they set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see update password fields", () => {
      expect(true).toBeTruthy();
    });

    and(/^user fills (.*) field and (.*) field$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when("user click on reload page", () => {
      expect(true).toBeTruthy();
    });

    then("user should see update password screen fields blank", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-7_STORY_EPP-216 - Verify user should see Update Password screen loaded within 3 seconds", ({
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
      /^user should see "(.*)" button \(if security questions is set\)$/,
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

    and(
      /^user fills in (.*) and (.*) for the security questions they set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user click F(\d+) on keyboard$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should not see any error after click on F(\d+)$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-7 _STORY_EPP-217 - Verify user should not see any error after click on F12", ({
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
      /^user should see "(.*)" button \(if security questions is set\)$/,
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

    and(
      /^user fills in (.*) and (.*) for the security questions they set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" screen loaded less than (\d+) seconds$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );
  });
});
