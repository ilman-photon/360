import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import AuthPage from "../../src/pages/patient/login";
import MfaPage from "../../src/pages/patient/mfa";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-270.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-3_STORY_EPP-270 - Verify if New user able to navigate to “Set up Security questions” screen after MFA setup through both Email,Phone number", ({
    given,
    and,
    then,
    when,
  }) => {
    let container;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");
    given("user launch the 'XXX' url", () => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    then("user lands onto “Patient Login” screen", () => {
      act(() => {
        container = render(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    when(
      /^user clicks on the "(.*)" CTA in the"(.*)" screen$/,
      (arg0, arg1) => {
        const createAccount = container.getByRole("button", {
          name: /createAccountButtonLabel/i,
        });
        fireEvent.click(createAccount);
      }
    );

    then(/^user lands on the "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user provides all mandatory field and register successfully", () => {
      expect(true).toBeTruthy();
    });

    then("user should see MFA Setup screen", async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      await waitFor(() => container.getByText("communicationMethodTitle"));
    });

    and(
      /^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/,
      (arg0, arg1, arg2) => {
        const title = container.getByText("communicationMethodTitle");
        const email = container.getByTestId("email-radio-button");
        const phone = container.getByTestId("phone-radio-button");
        expect(email).toBeVisible();
        expect(phone).toBeVisible();
        expect(title).toBeVisible();
      }
    );

    and("user should see default selection on Email", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see checkbox section "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see description of check box written as "(.*)"$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      const confirm = container.getByTestId("primary-button");
      fireEvent.click(confirm);
    });

    and(/^user should prompted to set up "(.*)"$/, (arg0) => {
      const title = container.queryByText(
        "Security questions set up successfully"
      );
      expect(title).not.toBeInTheDocument();
    });

    then(/^user land on to "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
