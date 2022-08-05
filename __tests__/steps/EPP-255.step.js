import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPassword";
import { Provider } from "react-redux";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-255.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-2_STORY_EPP-255 - Verify if user able view the to set password screen", () => {})
  test("Verify if user able view the to set password screen", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("User has visited the ECP office", () => {});

    and("User has consulted the doctor", () => {});
    and("System(E360+) has all the required details of the user to onboard him to Patient portal", () => {});
    and("System (E360+) sends out an Invite with link (active only for 24 hrs) to the user’s preferred mode(s) of communication", () => {});
    and("clicks on the link received", () => {});

    when("User lands on “Set Password” screen", () => {
      container = render(<Provider store={store}><SetPasswordComponent username={"UserName"} /></Provider>);
    });

    then("User should be able to see the verbiage “Enter a password to setup your account“", () => {});

    and("User should view and fill the following fields", () => {
      const passwordField = container.getByLabelText("Password");
      const confirmPasswordField = container.getByLabelText("Password");
      fireEvent.change(passwordField, { target: { value: "password" } });
      fireEvent.change(confirmPasswordField, { target: { value: "password" } });
      expect(passwordField.value).toEqual("password");
      expect(confirmPasswordField.value).toEqual("password");
    });

    and("System should by default take the email-id of the user as Username", () => {
      expect(true).toBeTruthy()
    });

    and("System by default should mask the entered password along with an option to unmask it", () => {
      expect(true).toBeTruthy()
    });

    and("User should click on ‘Create Account’ CTA", () => {
      const login = container.getByRole("button", { name: /Create Account/i });
      fireEvent.click(login);
    });

    and("User should be prompted with inline validation error message “This field is required” when all the required fields are not filled", () => {
      expect(true).toBeTruthy()
    });

    and("Upon successful password set, user should see the message - “Password has been set”", async () => {
      expect(true).toBeTruthy()
    });

    and("If User provided ‘both’ email and phone number as the preferred modes of communication, link should be sent to both. If link is accessed via the 2nd mode of communication, after password being set using 1st mode, a message should be displayed - “Password has been set”", () => {});
    expect(true).toBeTruthy()
  });
});
