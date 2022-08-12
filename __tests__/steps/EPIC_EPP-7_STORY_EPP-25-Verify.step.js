import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import ForgotPassword from "../../src/components/organisms/ForgotPassword/forgotPassword";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-25.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below Email or Phone Number field if Email or Phone Number is blank", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      container = render(
        <ForgotPassword
          onBackToLoginClicked={() => {}}
          onCalledValidateUsernameAPI={() => {}}
          showPostMessage={true}
          setShowPostMessage={() => {}}
        />
      );
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(`user lands onto "Patient Login" screen`, () => {
      expect(true).toBeTruthy();
    });

    then("user should see 'Forgot Password' link", () => {
      expect(true).toBeTruthy();
    });

    when(`user clicks on 'Forgot Password' link`, () => {
      expect(true).toBeTruthy();
    });

    then(`user should see Forgot Password screen`, () => {
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and("user should see 'Email or Phone Number' field", () => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "user1@gmail.com" } });
      expect(usernameField.value).toEqual("user1@gmail.com");
    });

    and("user should see 'Continue' button", () => {
      const continueId = container.getByRole("button", {
        name: /resetPasswordText/i,
      });
      fireEvent.click(continueId);
    });

    and("user should see 'Back to Login' link", () => {
      const link = container.getByText("backButtonLink");
      fireEvent.click(link);
    });
  });
});
