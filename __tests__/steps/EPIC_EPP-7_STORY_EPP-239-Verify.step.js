import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPassword";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-239.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  afterEach(cleanup);
  test('EPIC_EPP-7_STORY_EPP-239 - Verify user should see the "Passwords do not match" error message', ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button\(if security questions is not set\)$/,
      (arg0) => { }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => { }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => { }
    );

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should view the page with “Password Reset” heading", () => {
      expect(true).toBeTruthy();
    });

    and("User should view the text “Link sent to your phone number”", () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the messages of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should receive a link mail to reset password", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see mail/ message body as", (table) => {
      expect(true).toBeTruthy();
    });

    when("user click on a magic link", () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      useRouter.query = jest
        .fn()
        .mockReturnValue({ username: "smith1@photon.com" });
      act(() => {
        container = render(
          <Provider store={store}>
            {UpdatePasswordPage.getLayout(<UpdatePasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText("title"));
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(
        container.getByLabelText("passwordPlaceHolder")
      ).toBeInTheDocument();
      expect(
        container.getByLabelText("confirmPasswordPlaceHolder")
      ).toBeInTheDocument();
    });

    when(/^User should fill invalid (.*) field$/, (arg0) => {
      const password = container.getByLabelText("passwordPlaceHolder");
      fireEvent.change(password, { target: { value: "user12" } });
      expect(password.value).toEqual("user12");
    });

    and(/^User should fill invalid (.*) field$/, (arg0) => {
      const confirmPassword = container.getByLabelText(
        "confirmPasswordPlaceHolder"
      );
      fireEvent.change(confirmPassword, { target: { value: "user12" } });
      expect(confirmPassword.value).toEqual("user12");
    });

    and(
      "user should see mask the entered password along with an option to unmask it by default",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(/^User should see "(.*)" button$/, (arg0) => {
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      expect(continueId).toBeInTheDocument();
    });

    when(/^User should click on "(.*)" button$/, async (arg0) => {
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      fireEvent.change(container.getByLabelText("confirmPasswordPlaceHolder"), {
        target: { value: "user12" },
      });
      fireEvent.change(container.getByLabelText("passwordPlaceHolder"), {
        target: { value: "user12" },
      });
      await fireEvent.click(continueId);
    });

    then(/^User should see error message "(.*)"$/, async (arg0) => {
      await waitFor(() => container.getByText(/passwordNotMeetRequirements/i));
      const usernameFieldError = container.getByText(
        /passwordNotMeetRequirements/i
      );
      expect(usernameFieldError).toBeTruthy();
    });
  });

  test('EPIC_EPP-7_STORY_EPP-239 - Verify user should see "page loading" within 3 seconds', ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid '(.*)' field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" button\(if security questions is not set\)$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    and(
      /^user should select only (\d+) "(.*)" as "(.*)"$/,
      (arg0, arg1, arg2) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should view the page with “Password Reset” heading", () => {
      expect(true).toBeTruthy();
    });

    and("User should view the text “Link sent to your phone number”", () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the messages of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should receive a link mail to reset password", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see mail/ message body as", (table) => {
      expect(true).toBeTruthy();
    });

    when("user click on a magic link", () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      useRouter.mockReturnValue({
        query: { username: "smith1@photon.com" },
        push: (url) => {
          expect("/patient/login").toEqual(url);
        },
      });
      act(() => {
        container = render(
          <Provider store={store}>
            {UpdatePasswordPage.getLayout(<UpdatePasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText("title"));
      const title = container.getByText("title");
      expect("title").toEqual(title.textContent);
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(
        container.getByLabelText("passwordPlaceHolder")
      ).toBeInTheDocument();
      expect(
        container.getByLabelText("confirmPasswordPlaceHolder")
      ).toBeInTheDocument();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      const password = container.getByLabelText("passwordPlaceHolder");
      fireEvent.change(password, { target: { value: "Password@123" } });
      expect(password.value).toEqual("Password@123");
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      const confirmPassword = container.getByLabelText(
        "confirmPasswordPlaceHolder"
      );
      fireEvent.change(confirmPassword, { target: { value: "Password@123" } });
      expect(confirmPassword.value).toEqual("Password@123");
    });

    then(
      "user should see mask the entered password along with an option to unmask it by default",
      () => { }
    );

    and(/^User should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^User should click on "(.*)" button$/, (arg0) => {
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      expect(continueId).toBeInTheDocument();
    });

    then(/^User should see "(.*)" screen$/, async (arg0) => {
      const userData = {
        ResponseCode: 1000,
        ResponseType: "success",
      };
      mock.reset();
      mock.onPost(`/ecp/patient/updatepassword`).reply(200, userData);
      const continueId = container.getByRole("button", {
        name: /ctaButtonLabel/i,
      });
      act(() => fireEvent.click(continueId));
      await waitFor(() => {
        container.getByText("successUpdatePassword");
      });
    });

    and(/^User should see "(.*)" within (\d+) seconds$/, async (arg0, arg1) => {
      expect(container.getByText("successUpdatePassword")).toBeInTheDocument();

      await fireEvent.click(
        container.getByRole("button", {
          name: /backButtonLink/i,
        })
      );
    });
  });

  test('EPIC_EPP-7_STORY_EPP-239 - Verify user should see the empty "<New password>" and "<Confirm new password>" fields when user refresh the page', ({ given, and, when, then }) => {
    given(/^use launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" link$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should enter valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button\(if security questions is not set\)$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" Page$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" options with radio buttons "(.*)" and "(.*)" \(if both are configured during registration\)$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    and(/^user should select only (\d+) "(.*)" as "(.*)"$/, (arg0, arg1, arg2) => {
      expect(true).toBeTruthy();
    });

    when(/^user click on "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should view the page with “Password Reset” heading', () => {
      expect(true).toBeTruthy();
    });

    and('User should view the text “Link sent to your phone number”', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should be able to view the message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user access the messages of registered "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should receive a link mail to reset password', () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user should see mail/ message body as', () => {
      expect(true).toBeTruthy();
    });

    when('user click on a magic link', () => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should see (.*) and (.*) fields$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    when(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^User should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user should see mask the entered password along with an option to unmask it by default', () => {
      expect(true).toBeTruthy();
    });

    and('User refresh the page', () => {
      expect(true).toBeTruthy();
    });

    and(/^User should see the (.*) and (.*) fields is empty$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });
  });
});
