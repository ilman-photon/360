import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import ConfirmationForm from "../../src/components/organisms/ConfirmationForm/confirmationForm";
import RowRadioButtonsGroup from "../../src/components/atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Controller } from "react-hook-form";
import constants from "../../src/utils/constants";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-216.feature"
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-7_STORY_EPP-216 - Verify user should be able to login into the patient portal without username & password using the magic link received to my registered mail id.", ({
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

    when(`user lands onto "Patient Login" screen`, () => {
      expect(true).toBeTruthy();
    });

    and("user clicks on 'Forgot Password' link", () => {
      expect(true).toBeTruthy();
    });

    and(`user should enter valid "Email or Phone Number"`, () => {
      expect(true).toBeTruthy();
    });

    and(`user clicks on "Continue" button`, () => {
      expect(true).toBeTruthy();
    });

    then(`user should see "Select an option" screen`, () => {
      expect(true).toBeTruthy();
    });

    and(
      `user should see "Answer security questions" button (if security questions is set or not)`,
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

    when(`user click on "Login with magic link" button`, () => {
      expect(true).toBeTruthy();
    });

    then(`user should see One-time link page`, () => {
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

      const confirmationFormProps = {};
      confirmationFormProps.title = "One-time link";
      confirmationFormProps.subtitle =
        "Choose a mode of communication where we should send you the magic link.";
      confirmationFormProps.additional = modeOfCommuicationUI;
      confirmationFormProps.buttonLabel = "Send one-time link";
      confirmationFormProps.buttonIcon = (
        <InsertLinkIcon sx={{ marginRight: "10px" }} />
      );
      confirmationFormProps.onCTAButtonClicked = function () {};
      container = render(
        <ConfirmationForm
          {...confirmationFormProps}
          onBackToLoginClicked={() => {}}
          showPostMessage={true}
          setShowPostMessage={() => {}}
        />
      );

      const title = container.getByText("One-time link");
      expect("One-time link").toEqual(title.textContent);
    });

    and(
      `user should see "Choose a mode of communication where we should send you the magic link." text`,
      () => {
        const subtitle = container.getByText(
          /Choose a mode of communication where we/i
        );
        expect(
          "Choose a mode of communication where we should send you the magic link."
        ).toEqual(subtitle.textContent);
      }
    );

    and(
      `user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)`,
      () => {
        const subtitle = container.getByText("Mode of Communication");
        expect("Mode of Communication").toEqual(subtitle.textContent);
      }
    );

    and(`user should select only 1 "Mode of Communication" as "Email"`, () => {
      const email = container.getByRole("radio", { name: /Email/i });
      fireEvent.click(email);
      setTimeout(() => {
        expect(email).toBeChecked();
      }, 500);
    });

    when(`user clicks on "Send magic link" button`, () => {
      const button = container.getByRole("button", {
        name: /Send one-time link/i,
      });
      fireEvent.click(button);
    });

    then(`user should see heading "Magic link sent"`, () => {
      expect(true).toBeTruthy();
    });

    and(`user should see text "Success magic link is sent"`, () => {
      expect(true).toBeTruthy();
    });

    and(
      `user should see message "Click on the magic link sent to your email or phone number to access your account"`,
      () => {
        expect(true).toBeTruthy();
      }
    );

    when(`user access the inbox of registered "Email"`, () => {
      expect(true).toBeTruthy();
    });

    and(`user should receive a magic link mail`, () => {
      expect(true).toBeTruthy();
    });

    and(
      `user should see the mail with Email Subject as "Your Patient Portal Magic link"`,
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(`user should see mail/ message body as`, () => {
      expect(true).toBeTruthy();
    });

    and(`user should see "Back to Log in" button`, () => {
      const link = container.getByText("backButtonLink");
      fireEvent.click(link);
    });
  });
});
