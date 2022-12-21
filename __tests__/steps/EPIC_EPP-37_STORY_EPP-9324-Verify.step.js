import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import {
  defaultValidation,
  doLogin,
  renderLogin,
} from "../../__mocks__/commonSteps";
import LoginSecurityPage from "../../src/pages/patient/account/login-&-security";
import AccountUpdatePasswordPage from "../../src/pages/patient/account/update-password";
import moment from "moment";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint10/EPP-9324.feature"
);

const mock = new MockAdapter(axios);

defineFeature(feature, (test) => {
  let container;

  const mockApi = () => {
    mock.onPost(`/ecp/patient/getLastUpdatedPasswordDate`).reply(200, {
      lastUpdatedPasswordDate: moment().subtract(2, "m").format(),
    });

    mock.onPost(`/ecp/patient/settings/changePassword`).reply(200, {
      responseCode: 3000,
      responseType: "success",
    });

    mock.onPost(`/ecp/patient/settings/validatePassword`).reply(400, {
      responseCode: 2001,
      responseType: " Password is invalid",
    });

    mock.onPost(`/ecp/patient/logout`).reply(200, {
      ResponseCode: 2005,
      ResponseType: "success",
    });
  };

  beforeEach(() => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=true;accessToken=1234",
    });
  });

  const renderLoginSecurityPage = async (wait = /patient1@photoninfotech/i) => {
    mockApi();
    act(() => {
      container = render(
        <Provider store={store}>
          {LoginSecurityPage.getLayout(<LoginSecurityPage />)}
        </Provider>
      );
    });
    await waitFor(() => container.getByText(wait));
  };

  const renderUpdatePasswordPage = async (wait = /New Password/i) => {
    mockApi();
    act(() => {
      container = render(
        <Provider store={store}>
          {AccountUpdatePasswordPage.getLayout(<AccountUpdatePasswordPage />)}
        </Provider>
      );
    });
    await waitFor(() => container.getAllByText(wait));
  };

  test("EPIC_EPP-37_STORY_EPP-9324- Verify User should be navigated to change password page", ({
    given,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into patient portal", () => {
      doLogin(mock, container);
    });

    then("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    then("user navigates to change password page", async () => {
      await renderLoginSecurityPage();
      fireEvent.click(container.getByTestId("update-password-link"));
    });
  });

  test("EPIC_EPP-37_STORY_EPP-9324- Verify User updates the password and view the success message", ({
    given,
    and,
    then,
    when,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into patient portal", () => {
      doLogin(mock, container);
    });

    then("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    then("user navigates to change password page", async () => {
      await renderLoginSecurityPage();
      fireEvent.click(container.getByTestId("update-password-link"));
    });

    then("user should see Update Password Page", async () => {
      await renderUpdatePasswordPage();
    });

    and("User should see New Password and Confirm New Password fields", () => {
      expect(
        container.container.querySelector("#new-password")
      ).toBeInTheDocument();
      expect(
        container.container.querySelector("#confirm-password")
      ).toBeInTheDocument();
    });

    when(
      "User should fill the valid New Password and Confirm New Password fields",
      () => {
        const newPassField = container.container.querySelector("#new-password");
        fireEvent.change(newPassField, { target: { value: "Password@123" } });
        const confPassField =
          container.container.querySelector("#confirm-password");
        fireEvent.change(confPassField, { target: { value: "Password@123" } });
      }
    );

    then(
      "user should see mask the entered password along with an option to unmask it by default",
      () => {
        defaultValidation();
      }
    );

    and("User should see Update button", () => {
      expect(container.getByTestId("update-btn")).toBeInTheDocument();
    });

    when("User should click on Update button", async () => {
      setTimeout(() => {
        fireEvent.click(container.getByTestId("update-btn"));
      }, 500);
      await waitFor(() => {
        container.getByText(/Are you sure to change password\?/i);
      });
    });

    then(
      "User should be able to view the confirmation message Are you sure to change password along with Yes and No options",
      () => {
        expect(
          container.getByText(/Are you sure to change password\?/i)
        ).toBeInTheDocument();
        expect(
          container.getByRole("button", { name: /Update/i })
        ).toBeInTheDocument();
        expect(
          container.getByRole("button", { name: /Cancel/i })
        ).toBeInTheDocument();
      }
    );

    when("user clicks Yes", () => {
      fireEvent.click(container.getByRole("button", { name: /Update/i }));
    });

    then(
      "user should see Password has been updated success message Password changed successfully",
      async () => {
        container = await renderLogin();
      }
    );
  });

  test("EPIC_EPP-37_STORY_EPP-9324- Verify User should unmask the entered password", ({
    and,
    then,
    when,
  }) => {
    and("user is logged into patient portal", async () => {
      cleanup();
      container = await renderLogin();
      doLogin(mock, container);
    });

    then("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    then("user navigates to change password page", async () => {
      await renderLoginSecurityPage();
      fireEvent.click(container.getByTestId("update-password-link"));
    });

    then("user should see Update Password Page", async () => {
      await renderUpdatePasswordPage();
    });

    and("User should see New Password and Confirm New Password fields", () => {
      expect(
        container.container.querySelector("#new-password")
      ).toBeInTheDocument();
      expect(
        container.container.querySelector("#confirm-password")
      ).toBeInTheDocument();
    });

    when(
      "User should fill the valid New Password and Confirm New Password fields",
      () => {
        const newPassField = container.container.querySelector("#new-password");
        fireEvent.change(newPassField, { target: { value: "Password@123" } });
        const confPassField =
          container.container.querySelector("#confirm-password");
        fireEvent.change(confPassField, { target: { value: "Password@123" } });
      }
    );

    then(
      "user should see mask the entered password along with an option to unmask it by default",
      () => {
        defaultValidation();
      }
    );

    and("User should see Password Eye icon", () => {
      defaultValidation();
    });

    when("User clicks on Password Eye icon", () => {
      defaultValidation();
    });

    then("User should see the entered password", () => {
      defaultValidation();
    });

    and("User should see Update button", () => {
      expect(container.getByTestId("update-btn")).toBeInTheDocument();
    });

    when("User should click on Update button", async () => {
      setTimeout(() => {
        fireEvent.click(container.getByTestId("update-btn"));
      }, 500);
      await waitFor(() => {
        container.getByText(/Are you sure to change password\?/i);
      });
    });

    then(
      "User should be able to view the confirmation message Are you sure to change password along with Yes and No options",
      () => {
        expect(
          container.getByText(/Are you sure to change password\?/i)
        ).toBeInTheDocument();
        expect(
          container.getByRole("button", { name: /Update/i })
        ).toBeInTheDocument();
        expect(
          container.getByRole("button", { name: /Cancel/i })
        ).toBeInTheDocument();
      }
    );

    when("user clicks Yes", () => {
      fireEvent.click(container.getByRole("button", { name: /Update/i }));
    });

    then(
      "user should see Password has been updated success message Password changed successfully",
      async () => {
        container = await renderLogin();
      }
    );
  });

  test("EPIC_EPP-37_STORY_EPP-9324- Verify User should Login using new Password", ({
    given,
    and,
    then,
    when,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into patient portal", () => {
      doLogin(mock, container);
    });

    then("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    then("user navigates to change password page", async () => {
      await renderLoginSecurityPage();
      fireEvent.click(container.getByTestId("update-password-link"));
    });

    then("user should see Update Password Page", async () => {
      await renderUpdatePasswordPage();
    });

    and("User should see New Password and Confirm New Password fields", () => {
      expect(
        container.container.querySelector("#new-password")
      ).toBeInTheDocument();
      expect(
        container.container.querySelector("#confirm-password")
      ).toBeInTheDocument();
    });

    when(
      "User should fill the valid New Password and Confirm New Password fields",
      () => {
        const newPassField = container.container.querySelector("#new-password");
        fireEvent.change(newPassField, { target: { value: "Password@123" } });
        const confPassField =
          container.container.querySelector("#confirm-password");
        fireEvent.change(confPassField, { target: { value: "Password@123" } });
      }
    );

    then(
      "user should see mask the entered password along with an option to unmask it by default",
      () => {
        defaultValidation();
      }
    );

    and("User should see Update button", () => {
      expect(container.getByTestId("update-btn")).toBeInTheDocument();
    });

    when("User should click on Update button", async () => {
      setTimeout(() => {
        fireEvent.click(container.getByTestId("update-btn"));
      }, 500);
      await waitFor(() => {
        container.getByText(/Are you sure to change password\?/i);
      });
    });

    then(
      "User should be able to view the confirmation message Are you sure to change password along with Yes and No options",
      () => {
        expect(
          container.getByText(/Are you sure to change password\?/i)
        ).toBeInTheDocument();
        expect(
          container.getByRole("button", { name: /Update/i })
        ).toBeInTheDocument();
        expect(
          container.getByRole("button", { name: /Cancel/i })
        ).toBeInTheDocument();
      }
    );

    when("user clicks Yes", () => {
      fireEvent.click(container.getByRole("button", { name: /Update/i }));
    });

    then(
      "user should see Password has been updated success message Password changed successfully",
      async () => {
        defaultValidation();
      }
    );

    then("User should navigated to Patien Login screen", async () => {
      defaultValidation();
    });

    and("User should see Patient Login screen", async () => {
      container = await renderLogin();
    });

    and("User should see username and password field", () => {
      defaultValidation();
    });

    when("User inputs valid username field", () => {
      defaultValidation();
    });

    and("User input New Password field", () => {
      defaultValidation();
    });

    then("User should navigated to Dashboard screen", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-37_STORY_EPP-9324- Verify User should not copy and paste on New Password and Confirm New Password fields", ({
    given,
    and,
    then,
    when,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into patient portal", () => {
      doLogin(mock, container);
    });

    then("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    then("user navigates to change password page", async () => {
      await renderLoginSecurityPage();
      fireEvent.click(container.getByTestId("update-password-link"));
    });

    then("user should see Update Password Page", async () => {
      await renderUpdatePasswordPage();
    });

    and("User should see New Password and Confirm New Password fields", () => {
      expect(
        container.container.querySelector("#new-password")
      ).toBeInTheDocument();
      expect(
        container.container.querySelector("#confirm-password")
      ).toBeInTheDocument();
    });

    when(
      "User should fill the valid New Password and Confirm New Password fields",
      () => {
        const newPassField = container.container.querySelector("#new-password");
        fireEvent.change(newPassField, { target: { value: "Password@123" } });
        const confPassField =
          container.container.querySelector("#confirm-password");
        fireEvent.change(confPassField, { target: { value: "Password@123" } });
      }
    );

    then(
      "User should not copy and paste on New Password and Confirm New Password fields",
      () => {
        defaultValidation();
      }
    );

    then(
      "user should see mask the entered password along with an option to unmask it by default",
      () => {
        defaultValidation();
      }
    );

    and("User should see Password Eye icon", () => {
      defaultValidation();
    });

    when("User clicks on Password Eye icon", () => {
      defaultValidation();
    });

    then("User should see the entered password", () => {
      defaultValidation();
    });

    and("User should see Update button", () => {
      expect(container.getByTestId("update-btn")).toBeInTheDocument();
    });

    when("User should click on Update button", async () => {
      setTimeout(() => {
        fireEvent.click(container.getByTestId("update-btn"));
      }, 500);
      await waitFor(() => {
        container.getByText(/Are you sure to change password\?/i);
      });
    });

    then("User should see Password has been updated success message", () => {
      fireEvent.click(container.getByRole("button", { name: /Update/i }));
    });

    then("User should navigated to Patien Login screen", () => {
      defaultValidation();
    });

    and("User should see Patient Login screen", async () => {
      container = await renderLogin();
    });

    and("User should see username and password field", () => {
      defaultValidation();
    });

    when("User inputs valid username field", () => {
      defaultValidation();
    });

    and("User input New Password field", () => {
      defaultValidation();
    });

    then("User should navigated to Dashboard screen", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-37_STORY_EPP-9324- Verify user should see the inline error This field is required when user emptied New Password and Confirm New Password fields", ({
    given,
    and,
    then,
    when,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into patient portal", () => {
      doLogin(mock, container);
    });

    then("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    then("user navigates to change password page", async () => {
      await renderLoginSecurityPage();
      fireEvent.click(container.getByTestId("update-password-link"));
    });

    then("user should see Update Password Page", async () => {
      await renderUpdatePasswordPage();
    });

    and("User should see New Password and Confirm New Password fields", () => {
      expect(
        container.container.querySelector("#new-password")
      ).toBeInTheDocument();
      expect(
        container.container.querySelector("#confirm-password")
      ).toBeInTheDocument();
    });

    when("user emptied New Password and Confirm New Password fields", () => {
      const newPassField = container.container.querySelector("#new-password");
      fireEvent.change(newPassField, { target: { value: "" } });
      const confPassField =
        container.container.querySelector("#confirm-password");
      fireEvent.change(confPassField, { target: { value: "" } });
    });

    then(
      "user should see the inline error This field is required",
      async () => {
        fireEvent.click(container.getByTestId("update-btn"));
        await waitFor(() => {
          container.getAllByText(/This field is required/i);
        });
        expect(
          container.getAllByText(/This field is required/i)[0]
        ).toBeInTheDocument();
      }
    );
  });

  test('EPIC_EPP-37_STORY_EPP-9324- Verify user should see "Password does not meet requirements" error message', ({
    given,
    and,
    then,
    when,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into patient portal", () => {
      doLogin(mock, container);
    });

    then("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    then("user navigates to change password page", async () => {
      await renderLoginSecurityPage();
      fireEvent.click(container.getByTestId("update-password-link"));
    });

    then("user should see Update Password Page", async () => {
      await renderUpdatePasswordPage();
    });

    and("User should see New Password and Confirm New Password fields", () => {
      expect(
        container.container.querySelector("#new-password")
      ).toBeInTheDocument();
      expect(
        container.container.querySelector("#confirm-password")
      ).toBeInTheDocument();
    });

    when("User should fill invalid New Password field", () => {
      const newPassField = container.container.querySelector("#new-password");
      fireEvent.change(newPassField, { target: { value: "Password" } });
    });

    and("User should fill invalid Confirm New Password field", () => {
      const confPassField =
        container.container.querySelector("#confirm-password");
      fireEvent.change(confPassField, { target: { value: "Password" } });
    });

    and(
      "user should see mask the entered password along with an option to unmask it by default",
      () => {
        defaultValidation();
      }
    );

    and("User should see Update button", () => {
      expect(container.getByTestId("update-btn")).toBeInTheDocument();
    });

    when("User should click on Update button", async () => {
      fireEvent.click(container.getByTestId("update-btn"));
      await waitFor(() => {
        container.getAllByText(/Password does not meet requirements/i);
      });
    });

    then(
      "User should see error message Password does not meet requirements below Confirm Password",
      () => {
        expect(
          container.getAllByText(/Password does not meet requirements/i)[0]
        ).toBeInTheDocument();
      }
    );
  });

  test('EPIC_EPP-37_STORY_EPP-9324- Verify user should see "Password do not match" error message', ({
    given,
    and,
    then,
    when,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into patient portal", () => {
      doLogin(mock, container);
    });

    then("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    then("user navigates to change password page", async () => {
      await renderLoginSecurityPage();
      fireEvent.click(container.getByTestId("update-password-link"));
    });

    then("user should see Update Password Page", async () => {
      await renderUpdatePasswordPage();
    });

    and("User should see New Password and Confirm New Password fields", () => {
      expect(
        container.container.querySelector("#new-password")
      ).toBeInTheDocument();
      expect(
        container.container.querySelector("#confirm-password")
      ).toBeInTheDocument();
    });

    when("User should fill valid New Password field", () => {
      const newPassField = container.container.querySelector("#new-password");
      fireEvent.change(newPassField, { target: { value: "Password@1" } });
      const confPassField =
        container.container.querySelector("#confirm-password");
      fireEvent.change(confPassField, { target: { value: "Password@1" } });
    });

    and("User should fill invalid Confirm New Password field", () => {
      const newPassField = container.container.querySelector("#new-password");
      fireEvent.change(newPassField, { target: { value: "Password" } });
      const confPassField =
        container.container.querySelector("#confirm-password");
      fireEvent.change(confPassField, { target: { value: "Password" } });
    });

    and(
      "user should see mask the entered password along with an option to unmask it by default",
      () => {
        defaultValidation();
      }
    );

    and("User should see Update button", () => {
      expect(container.getByTestId("update-btn")).toBeInTheDocument();
    });

    when("User should click on Update button", async () => {
      fireEvent.click(container.getByTestId("update-btn"));
      await waitFor(() => {
        container.getAllByText(/Password does not meet requirements/i);
      });
    });

    then(
      "User should see error message Password do not match below Confirm Password",
      () => {
        expect(
          container.getAllByText(/Password does not meet requirements/i)[0]
        ).toBeInTheDocument();
      }
    );
  });
});
