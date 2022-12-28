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
import UpdateUsername from "../../src/pages/patient/account/update-username";
import moment from "moment";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint10/EPP-7717.feature"
);

const mock = new MockAdapter(axios);

defineFeature(feature, (test) => {
  let container;

  const mockApi = () => {
    mock.onPost(`/ecp/patient/getLastUpdatedPasswordDate`).reply(200, {
      lastUpdatedPasswordDate: moment().subtract(1, "h").format(),
    });

    mock.onPost(`/ecp/patient/settings/updateUsername`).reply(200, {
      responseCode: 3000,
      responseType: "success",
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

  const renderUpdateUsernamePage = async (
    wait = /patient1@photoninfotech/i
  ) => {
    mockApi();
    act(() => {
      container = render(
        <Provider store={store}>
          {UpdateUsername.getLayout(<UpdateUsername />)}
        </Provider>
      );
    });
    await waitFor(() => container.getByText(wait));
  };

  test("EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able to view sub menu under Profile to setup change user name", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into the portal with valid credential", () => {
      doLogin(mock, container);
    });

    and("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    when("user click on account menu in header", () => {
      defaultValidation();
    });

    then("user should be navigated to Account screen", async () => {
      await renderLoginSecurityPage();
    });

    and(
      "user should be able to view sub menu under Profile to setup change user name",
      () => {
        expect(
          container.getAllByText(/Login & Security/i)[1]
        ).toBeInTheDocument();
      }
    );

    and(/^sub menu written as "(.*)"$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able to view "Login" screen sub menu', ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into the portal with valid credential", () => {
      doLogin(mock, container);
    });

    and("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    when("user click on account menu in header", () => {
      defaultValidation();
    });

    then("user should be navigated to Account screen", async () => {
      await renderLoginSecurityPage();
    });

    and(
      "user should be able to view sub menu under Profile to setup change user name",
      () => {
        expect(
          container.getAllByText(/Login & Security/i)[1]
        ).toBeInTheDocument();
      }
    );

    and(/^sub menu written as "(.*)"$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    when(/^user click on "(.*)" screen sub menu$/, (arg0) => {
      defaultValidation();
    });

    then(/^user should be able to view "(.*)" screen sub menu$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    and(/^user should be able to view "(.*)" header title$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able to view Username & Password section along with 'Update' Link", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into the portal with valid credential", () => {
      doLogin(mock, container);
    });

    and("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    when("user click on account menu in header", () => {
      defaultValidation();
    });

    then("user should be navigated to Account screen", async () => {
      await renderLoginSecurityPage();
    });

    and(
      "user should be able to view sub menu under Profile to setup change user name",
      () => {
        expect(
          container.getAllByText(/Login & Security/i)[1]
        ).toBeInTheDocument();
      }
    );

    and(/^sub menu written as "(.*)"$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    when(/^user click on "(.*)" screen sub menu$/, (arg0) => {
      defaultValidation();
    });

    then(/^user should be able to view "(.*)" screen sub menu$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    and(/^user should be able to view "(.*)" header title$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    and(
      "user should be able to view Username & Password section along with 'Update' Link",
      () => {
        expect(
          container.getByTestId("update-username-link")
        ).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able navigated to Update Username screen", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into the portal with valid credential", () => {
      doLogin(mock, container);
    });

    and("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    when("user click on account menu in header", () => {
      defaultValidation();
    });

    then("user should be navigated to Account screen", async () => {
      await renderLoginSecurityPage();
    });

    and(
      "user should be able to view sub menu under Profile to setup change user name",
      () => {
        expect(
          container.getAllByText(/Login & Security/i)[1]
        ).toBeInTheDocument();
      }
    );

    and(/^sub menu written as "(.*)"$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    when(/^user click on "(.*)" screen sub menu$/, (arg0) => {
      defaultValidation();
    });

    then(/^user should be able to view "(.*)" screen sub menu$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    and(/^user should be able to view "(.*)" header title$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    and(
      "user should be able to view Username & Password section along with 'Update' Link",
      () => {
        expect(
          container.getByTestId("update-username-link")
        ).toBeInTheDocument();
      }
    );

    when("user click on 'Update' Link", () => {
      fireEvent.click(container.getByTestId("update-username-link"));
    });

    then(
      "user  should be able to navigated  Update Username screen along with",
      async (table) => {
        await renderUpdateUsernamePage();
      }
    );
  });

  test("EPIC_EPP-36_STORY_EPP-7717 - Verify user has provided new username and confirm new username", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into the portal with valid credential", () => {
      doLogin(mock, container);
    });

    and("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    when("user click on account menu in header", () => {
      defaultValidation();
    });

    then("user should be navigated to Account screen", async () => {
      await renderLoginSecurityPage();
    });

    and(
      "user should be able to view sub menu under Profile to setup change user name",
      () => {
        expect(
          container.getAllByText(/Login & Security/i)[1]
        ).toBeInTheDocument();
      }
    );

    and(/^sub menu written as "(.*)"$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    when(/^user click on "(.*)" screen sub menu$/, (arg0) => {
      defaultValidation();
    });

    then(/^user should be able to view "(.*)" screen sub menu$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    when("user click on 'Update' Link", () => {
      fireEvent.click(container.getByTestId("update-username-link"));
    });

    then(
      "user  should be able to navigated  Update Username screen",
      async () => {
        await renderUpdateUsernamePage();
      }
    );

    and(/^user enter new user name on (.*) field$/, (arg0) => {
      const usernameField =
        container.container.querySelector("#update-username");
      fireEvent.change(usernameField, {
        target: { value: "patient2@mail.com" },
      });
    });

    when("user click on 'Update' button", async () => {
      fireEvent.click(container.getByTestId("update-btn"));
      await waitFor(() => {
        container.getByText(/Are you sure you want to update your username?/i);
      });
    });

    then(
      "user should be able to view Are you sure want to update your username modal",
      () => {
        expect(
          container.getByText(/Are you sure you want to update your username?/i)
        ).toBeInTheDocument();
      }
    );

    and("user should be able to view Update button", () => {
      expect(
        container.getAllByRole("button", { name: /Update/i })[0]
      ).toBeInTheDocument();
    });

    and("user should be able to view Cancel button", () => {
      expect(
        container.getAllByRole("button", { name: /Cancel/i })[0]
      ).toBeInTheDocument();
    });

    when("user click on Update button", () => {
      fireEvent.click(container.getAllByRole("button", { name: /Update/i })[0]);
    });

    then(
      /^user should be navigated back to "(.*)" screen sub menu along with success message 'Your username was successfully updated.'$/,
      async (arg0) => {
        container = await renderLogin();
      }
    );
  });

  test("EPIC_EPP-36_STORY_EPP-7717 - Verify user should be able to receive the alert for changing the username in preferred mode of communication", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into the portal with valid credential", () => {
      doLogin(mock, container);
    });

    and("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    when("user click on account menu in header", () => {
      defaultValidation();
    });

    then("user should be navigated to Account screen", async () => {
      await renderLoginSecurityPage();
    });

    and(
      "user should be able to view sub menu under Profile to setup change user name",
      () => {
        expect(
          container.getAllByText(/Login & Security/i)[1]
        ).toBeInTheDocument();
      }
    );

    and(/^sub menu written as "(.*)"$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    when(/^user click on "(.*)" screen sub menu$/, (arg0) => {
      defaultValidation();
    });

    then(/^user should be able to view "(.*)" screen sub menu$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    when("user click on 'Update' Link", () => {
      fireEvent.click(container.getByTestId("update-username-link"));
    });

    then(
      "user  should be able to navigated  Update Username screen",
      async () => {
        await renderUpdateUsernamePage();
      }
    );

    and(/^user enter new user name on (.*) field$/, (arg0) => {
      const usernameField =
        container.container.querySelector("#update-username");
      fireEvent.change(usernameField, {
        target: { value: "patient2@mail.com" },
      });
    });

    when("user click on 'Update' button", async () => {
      fireEvent.click(container.getByTestId("update-btn"));
      await waitFor(() => {
        container.getByText(/Are you sure you want to update your username?/i);
      });
    });

    then(
      "user should be able to view Are you sure want to update your username modal",
      () => {
        expect(
          container.getByText(/Are you sure you want to update your username?/i)
        ).toBeInTheDocument();
      }
    );

    and("user should be able to view Update button", () => {
      expect(
        container.getAllByRole("button", { name: /Update/i })[0]
      ).toBeInTheDocument();
    });

    and("user should be able to view Cancel button", () => {
      expect(
        container.getAllByRole("button", { name: /Cancel/i })[0]
      ).toBeInTheDocument();
    });

    when("user click on Update button", () => {
      fireEvent.click(container.getAllByRole("button", { name: /Update/i })[0]);
    });

    then(
      /^user should be navigated back to "(.*)" screen sub menu along with success message 'Your username was successfully updated.'$/,
      async (arg0) => {
        container = await renderLogin();
      }
    );

    and(
      "user should be able to receive the alert for changing the username in preferred mode of communication",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-36_STORY_EPP-7717 - Verify username should not be changed if No is selected during confirmation", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    and("user is logged into the portal with valid credential", () => {
      doLogin(mock, container);
    });

    and("user lands on the Dashboard screen", () => {
      defaultValidation();
    });

    when("user click on account menu in header", () => {
      defaultValidation();
    });

    then("user should be navigated to Account screen", async () => {
      await renderLoginSecurityPage();
    });

    and(
      "user should be able to view sub menu under Profile to setup change user name",
      () => {
        expect(
          container.getAllByText(/Login & Security/i)[1]
        ).toBeInTheDocument();
      }
    );

    and(/^sub menu written as "(.*)"$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    when(/^user click on "(.*)" screen sub menu$/, (arg0) => {
      defaultValidation();
    });

    then(/^user should be able to view "(.*)" screen sub menu$/, (arg0) => {
      expect(container.getByText("Login")).toBeInTheDocument();
    });

    when("user click on 'Update' Link", () => {
      fireEvent.click(container.getByTestId("update-username-link"));
    });

    then(
      "user  should be able to navigated  Update Username screen",
      async () => {
        await renderUpdateUsernamePage();
      }
    );

    and(/^user enter new user name on (.*) field$/, (arg0) => {
      const usernameField =
        container.container.querySelector("#update-username");
      fireEvent.change(usernameField, {
        target: { value: "patient2@mail.com" },
      });
    });

    when("user click on 'Update' button", async () => {
      fireEvent.click(container.getByTestId("update-btn"));
      await waitFor(() => {
        container.getByText(/Are you sure you want to update your username?/i);
      });
    });

    then(
      "user should be able to view Are you sure want to update your username modal",
      () => {
        expect(
          container.getByText(/Are you sure you want to update your username?/i)
        ).toBeInTheDocument();
      }
    );

    and("user should be able to view Update button", () => {
      expect(
        container.getAllByRole("button", { name: /Update/i })[0]
      ).toBeInTheDocument();
    });

    and("user should be able to view Cancel button", () => {
      expect(
        container.getAllByRole("button", { name: /Cancel/i })[0]
      ).toBeInTheDocument();
    });

    when("user click on Cancel button", () => {
      fireEvent.click(container.getAllByRole("button", { name: /Cancel/i })[0]);
    });

    then(
      /^user should be navigated back to "(.*)" screen and username isn't update$/,
      async (arg0) => {
        await renderUpdateUsernamePage();
      }
    );
  });
});
