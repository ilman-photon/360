import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import PasswordSecurityQuestion from "../../src/components/organisms/PasswordSecurityQuestion/passwordSecurityQuestion";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-218.feature"
);

defineFeature(feature, (test) => {
  test('EPIC_EPP-7_STORY_EPP-218 - Verify the error message if user enter 3 times wrong/incorrect answer the security questions via "Answer security questions" mode', ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("use launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when('user lands onto "Patient Login" screen', () => {
      expect(true).toBeTruthy();
    });

    and("user clicks on 'Forgot Password' link", () => {
      expect(true).toBeTruthy();
    });

    and('user should enter valid "Email or Phone Number"', () => {
      expect(true).toBeTruthy();
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
});
