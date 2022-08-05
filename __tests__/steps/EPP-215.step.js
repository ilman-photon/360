import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import SelectOptionForm from "../../src/components/organisms/SelectOptionForm/selectOptionForm";

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-215.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-7_STORY_EPP-215 - Verify user able to navigate to the Select option screen from the Forgot Password Screen on entering valid Email or Phone Number", ({
    given,
    when,
    then,
    and,
  }) => {
    let container
    given("use launch the \"XXX\" url", () => {
        container = render(<SelectOptionForm hasSecurityQuestion={true} onBackToLoginClicked={()=>{}} onContinueButtonClicked={()=>{}}/>);
    });

    and("user navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });

    when(`user lands onto "Patient Login" screen`, () => {
        expect(true).toBeTruthy()
    });

    then(
      "user should see 'Forgot Password' link",
      () => {
        expect(true).toBeTruthy()
      }
    );

    when(`user clicks on 'Forgot Password' link`, () => {
        expect(true).toBeTruthy()
    });

    then(`user should see Forgot Password screen`, () => {
        expect(true).toBeTruthy()
    });

    and("user should see \"Email or Phone Number\" field", () => {
        expect(true).toBeTruthy()
    });

    and("user should enter valid \"Email or Phone Number\"", () => {
        expect(true).toBeTruthy()
    });

    and("user clicks on \"Continue\" button", () => {
        expect(true).toBeTruthy()
    });

    then(`user should see "Select an option" screen`, () => {
        const title = container.getByText("title");
        expect("title").toEqual(title.textContent);
    });

    and(`user should see "Answer security questions" button(if security questions is set)`, () => {
        const securityButton = container.getByRole("button", { name: /securityButtonText/i });
        fireEvent.click(securityButton);
    });

    and(`user should see "Login with magic link" button`, () => {
        const oneTimeLoginButton = container.getByRole("button", { name: /oneTimeLoginButtonText/i });
        fireEvent.click(oneTimeLoginButton);
    });

    and(`user should see "Back to Log in" button`, () => {
        const link = container.getByText("backButtonLink");
        fireEvent.click(link);
    });
  });
});
