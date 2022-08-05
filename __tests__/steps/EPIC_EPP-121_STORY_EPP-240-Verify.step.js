import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import ForgotPasswordPage from "../../src/pages/provider/forgot-password";

const feature = loadFeature(
  "./__tests__/features/Provider Portal/Sprint2/EPP-240.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-121_STORY_EPP-240-verify whether Internal Provider, Referring Provider  is able to click on the forgot password link", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      container = render(<ForgotPasswordPage />);
    });

    and("Internal  Provider, Referring Provider  navigates to forgot password screen", () => {});

    when("user lands onto “Reset Password page", () => {
      const title = container.getByText("Reset Password");
      expect("Reset Password").toEqual(title.textContent);
    });

    and(
      'user provides "<Email>"',
      () => {
        const usernameField = container.getByLabelText("Email or Username");
       
        fireEvent.change(usernameField, { target: { value: "username" } });
        expect(usernameField.value).toEqual("username");
        
      }
    );

    and("user click 'Submit' button.", () => {
      const submit = container.getByRole("button", { name: /Submit/i });
      fireEvent.click(submit);
    });
    then("ser should see heading A link has been sent to your registered email to reset your password.Please check", () => {
        // expect(props.OnLoginClicked).toBeCalledTimes(1);
      });

    and("user click 'Back to Login' button", () => {
        const backtologin = container.getByRole("button", { name: /backtologin/i });
        fireEvent.click(backtologin); 
    });
    then("user should be navigated back to the login page", () => {
        // expect(props.OnLoginClicked).toBeCalledTimes(1);
      });

    
  });
});
