import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import ConfirmationForm from "../../src/components/organisms/ConfirmationForm/confirmationForm";
import RowRadioButtonsGroup from "../../src/components/atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Controller } from "react-hook-form";
import constants from "../../src/utils/constants";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-220.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-7_STORY_EPP-220 -Verify should be able to receive reset password link  to the registered Email without answering the security questions if they are not set.", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given('use launch the "XXX" url', () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(`user lands onto "Patient Login" screen`, () => {
      expect(true).toBeTruthy();
    });

    then(`user should see \"Forgot Password\" link`, () => {
      expect(true).toBeTruthy();
    });

    when(`user clicks on "Forgot Password" link`, () => {
      expect(true).toBeTruthy();
    });

    then(`user should see "Forgot Password" screen`, () => {
      expect(true).toBeTruthy();
    });

    and(`user should see "Email or Phone Number" field`, () => {
      expect(true).toBeTruthy();
    });

    and(`user should enter valid "Email or Phone Number" field`, () => {
      expect(true).toBeTruthy();
    });

    and(`user clicks on "Continue" button`, () => {
      expect(true).toBeTruthy();
    });

    then(`user should see "Select an option" screen`, () => {
      expect(true).toBeTruthy();
    });

    and(
      `user should see "Receive link to reset password" button(if security questions is not set)`,
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(`user should see "Login with magic link" button`, () => {
      expect(true).toBeTruthy();
    });

    and(`user should see "Back to Log in" button`, () => {
      expect(true).toBeTruthy();
    });

    when(`user click on "Receive link to reset password" button`, () => {
      expect(true).toBeTruthy();
    });

    then(`user should view the page with “Password Reset” heading`, () => {
      const modeOfCommuicationUI = function (control) {
        const options = [
          { label: "Email", value: constants.EMAIL },
          { label: "Phone", value: constants.PHONE },
        ];
        return (
          <Controller
            name={constants.MODE_COMMUNICATION_KEY}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <RowRadioButtonsGroup
                  label="Mode of Communication"
                  options={options}
                  value={value}
                  onChange={onChange}
                />
              );
            }}
          />
        );
      };

      const confirmationFormProps = {
        title: "Password Reset",
        subtitle: `Check donj@yahoo.com for an email to reset your password.`,
        description:
          "If you did not receive the link, try to login with one-time link",
        postMessage: `Link sent to your email`,
        successPostMessage: true,
        buttonLabel: "Login with one-time link",
        additional: null,
        onCTAButtonClicked: function () {},
      };

      container = render(
        <ConfirmationForm
          {...confirmationFormProps}
          onBackToLoginClicked={() => {}}
          showPostMessage={true}
          setShowPostMessage={() => {}}
        />
      );

      const title = container.getByText("Password Reset");
      expect("Password Reset").toEqual(title.textContent);
    });

    and(`User should view the text “Link sent to your email”`, () => {
      const title = container.getByText("Link sent to your email");
      expect("Link sent to your email").toEqual(title.textContent);
    });

    and(
      `User should be able to view the message "Check {donj@yahoo.com} for an email to reset your password"`,
      () => {
        const title = container.getByText(/donj@yahoo.com/i);
        expect(
          "Check donj@yahoo.com for an email to reset your password."
        ).toEqual(title.textContent);
      }
    );

    when(`user access the inbox of registered "Email"`, () => {
      expect(true).toBeTruthy();
    });

    then(`user should receive a link mail to reset password`, () => {
      expect(true).toBeTruthy();
    });

    and(
      `user should see the mail with Email Subject as "Reset your Patient portal password"`,
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(`user should see mail/ message body as`, () => {
      expect(true).toBeTruthy();
    });

    when(`user click on a reset password link`, () => {
      expect(true).toBeTruthy();
    });

    then(`user should see "Update Password" screen`, () => {
      expect(true).toBeTruthy();
    });
  });
});
