import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import LoginPage from "../../src/pages/patient/login";

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-207.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-4_STORY_EPP-207-Verify whether the Registered Patient is able to Login with Valid Email or Phone Number and Valid Password", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    and("user navigates to the Patient Portal application", () => {});

    when("user lands onto “Patient Login” screen", () => {
      const title = container.getByText("Patient Login");
      expect("Patient Login").toEqual(title.textContent);
    });

    and(
      'user provides valid "<Email or Phone Number>" and valid"<password>"',
      () => {
        const usernameField = container.getByLabelText("Username");
        const passwordField = container.getByLabelText("Password");
        fireEvent.change(usernameField, { target: { value: "username" } });
        fireEvent.change(passwordField, { target: { value: "password" } });
        expect(usernameField.value).toEqual("username");
        expect(passwordField.value).toEqual("password");
      }
    );

    and("user click 'Login' button.", () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then("user should view Home/Dashboard page", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });
  });
});
