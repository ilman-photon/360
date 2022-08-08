import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import LoginPage from "../../src/pages/patient/login";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-209.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-4_STORY_EPP-209 - Verify whether the Admin is able to Login  with Valid User name and Valid Password uisng E360+ SSO", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("admin launch the 'XXX' url", () => {
      container = render(<LoginPage />);
    });

    when(
      'admin provides E360+ Registered "<username>" and "<password>"',
      () => {
        const usernameField = container.getByLabelText("Username");
        const passwordField = container.getByLabelText("Password");
        fireEvent.change(usernameField, { target: { value: "username" } });
        fireEvent.change(passwordField, { target: { value: "password" } });
        expect(usernameField.value).toEqual("username");
        expect(passwordField.value).toEqual("password");
      }
    );

    and("admin click on the Login button", () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then("it should allow to login into Patient portal.", () => {
      // expect(props.OnLoginClicked).toBeCalledTimes(1);
    });

    and("user should see the Home/Dashboard page", () => {});
  });
});
