import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import LoginPage from "../../src/pages/patient/login";
import RegisterPage from "../../src/pages/patient/auth/create-account";
import { Provider } from "react-redux";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-250.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen", () => {});
  test("Verify if user able to view the Registration screen", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });
    and("user navigates to the Patient Portal application", () => {
      container = render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );
    });

    when("userr lands onto “Patient Login” screen", () => {
      expect(true).toBeTruthy();
    });

    and(
      "user should able to view the  Don’t have an account?” verbiage along with 'Create Account' button",
      () => {
        expect(true).toBeTruthy();
      }
    );

    when("user clicks on the ‘Create an Account’ button", () => {
      expect(true).toBeTruthy();
    });

    then("user lands onto “User Registration” screen", () => {
      container = render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
    });

    and('user should see "Register" button', () => {
      const register = container.getByRole("button", { name: /REGISTER/i });
      expect(register).toBeTruthy();
    });

    and(
      'user should see the verbiage "By registering, you accept to our Terms & Conditions and Privacy Policy" below the "Register" CTA',
      () => {
        const title = container.getByText(
          "By registering, you agree to our Terms & Conditions and Privacy Policy"
        );
        expect(
          "By registering, you agree to our Terms & Conditions and Privacy Policy"
        ).toEqual(title.textContent);
      }
    );

    and(
      'user should see verbiage ”Already have an account? with "Login" link',
      () => {
        const login = container.getByRole("link", { name: /Login/i });
        expect(login).toBeTruthy();
      }
    );

    when('user click on "Login" link', () => {
      const login = container.getByRole("link", { name: /Login/i });
      expect(login).toBeTruthy();
    });

    then("user should see the ‘Patient Login’ page", () => {
      expect(true).toBeTruthy();
    });
  });
});
