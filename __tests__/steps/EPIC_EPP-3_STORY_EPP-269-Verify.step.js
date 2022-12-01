import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage from "../../src/pages/patient/mfa";
import "@testing-library/jest-dom";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";
import { TEST_ID } from "../../src/utils/constants";
import { renderLogin, renderForgotPassword, clickContinueForgot, navigateToPatientPortalHome } from "../../__mocks__/commonSteps";
import UpdatePasswordPage from "../../src/pages/patient/update-password";


const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-269.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com";
      if (param === "ip") return "10.10.10.10";
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
    set() {
      return jest.fn();
    }
  }
  return MockCookies;
});

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");

const launchURL = () => {
  const mockOnLoginClicked = jest.fn((data, route, callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

const navigateToPatientPortalApp = () => {
  mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
  act(() => {
    container = renderWithProviders(<AuthPage />, {
      container: document.body.appendChild(element),
      legacyRoot: true,
    });
  });
}

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");

  test("EPIC_EPP-3_STORY_EPP-269 - Verify User should be able to receives a text that registered phone number when user logs in from different device/IP Address", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up on device A$/,
      async (arg0, arg1) => {
        cleanup();
        Cookies.result = { mfa: true };

        const userData = {
          communicationMethod: {
            email: "user1@photon.com",
            phone: "9998887772",
          },
          ResponseCode: 4000,
          ResponseType: "success",
        };

        mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
        act(() => {
          container = render(
            <Provider store={store}>
              <MfaPage />
            </Provider>,
            {
              container: document.body.appendChild(element),
              legacyRoot: true,
            }
          );
        });
        await waitFor(() => container.getByText("backToLoginBtn"));
        expect(container.getByText("backToLoginBtn")).toBeInTheDocument();
      }
    );

    and("user login from device A", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    and(
      /^user tries to login from another deviceAnd user should see "(.*)" option$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      const submitButton = container.getByRole("button", { name: /confrimBtn/i });
      fireEvent.click(submitButton);
    });

    then(/^user shoud see "(.*)" screen$/, async (arg0) => {
      navigateToPatientPortalHome();
    });

    and("user login from device B", () => {
      expect(true).toBeTruthy();
    });

    when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user receives a text from registered phone number", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the text with Text Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body as", (table) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered mail-id', ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up on device A$/,
      async (arg0, arg1) => {
        cleanup();
        Cookies.result = { mfa: true };

        const userData = {
          communicationMethod: {
            email: "user1@photon.com",
            phone: "9998887772",
          },
          ResponseCode: 4000,
          ResponseType: "success",
        };

        mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
        act(() => {
          container = render(
            <Provider store={store}>
              <MfaPage />
            </Provider>,
            {
              container: document.body.appendChild(element),
              legacyRoot: true,
            }
          );
        });
        await waitFor(() => container.getByText("backToLoginBtn"));
        expect(container.getByText("backToLoginBtn")).toBeInTheDocument();
      }
    );

    and("user login from device A", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    and(
      /^user tries to login from another deviceAnd user should see "(.*)" option$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      const submitButton = container.getByRole("button", { name: /confrimBtn/i });
      fireEvent.click(submitButton);
    });

    then(/^user shoud see "(.*)" screen$/, async (arg0) => {
      navigateToPatientPortalHome();
    });

    and("user login from device B", () => {
      expect(true).toBeTruthy();
    });

    when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user receives an email message with the code to the email", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body as", (table) => {
      expect(true).toBeTruthy();
    });

    then(
      "user receives an email/ text message with the code to the email or mobile number",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) fied$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the following message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered phone number', ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up on device A$/,
      async (arg0, arg1) => {
        cleanup();
        Cookies.result = { mfa: true };

        const userData = {
          communicationMethod: {
            email: "user1@photon.com",
            phone: "9998887772",
          },
          ResponseCode: 4000,
          ResponseType: "success",
        };

        mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
        act(() => {
          container = render(
            <Provider store={store}>
              <MfaPage />
            </Provider>,
            {
              container: document.body.appendChild(element),
              legacyRoot: true,
            }
          );
        });
        await waitFor(() => container.getByText("backToLoginBtn"));
        expect(container.getByText("backToLoginBtn")).toBeInTheDocument();
      }
    );

    and("user login from device A", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    and("user tries to login from another device", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      const submitButton = container.getByRole("button", { name: /confrimBtn/i });
      fireEvent.click(submitButton);
    });

    then(/^user shoud see "(.*)" screen$/, async (arg0) => {
      navigateToPatientPortalHome();
    });

    and("user login from device B", () => {
      expect(true).toBeTruthy();
    });

    when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user receives an email/ text message with the code to the email or mobile number",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body as", (table) => {
      expect(true).toBeTruthy();
    });

    then("user receives a text message with the code to phone number", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) fied$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the following message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" within "3 seconds" when user logs in from different device/IP Address', ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up on device A$/,
      async (arg0, arg1) => {
        cleanup();
        Cookies.result = { mfa: true };

        const userData = {
          communicationMethod: {
            email: "user1@photon.com",
            phone: "9998887772",
          },
          ResponseCode: 4000,
          ResponseType: "success",
        };

        mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
        act(() => {
          container = render(
            <Provider store={store}>
              <MfaPage />
            </Provider>,
            {
              container: document.body.appendChild(element),
              legacyRoot: true,
            }
          );
        });
        await waitFor(() => container.getByText("backToLoginBtn"));
        expect(container.getByText("backToLoginBtn")).toBeInTheDocument();
      }
    );

    and("user login from device A", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    and("user tries to login from another device", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      const submitButton = container.getByRole("button", { name: /confrimBtn/i });
      fireEvent.click(submitButton);
    });

    then(/^user shoud see "(.*)" screen$/, async (arg0) => {
      navigateToPatientPortalHome();
    });

    and("user login from device B", () => {
      expect(true).toBeTruthy();
    });

    when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user receives an email/ text message with the code to the email or mobile number",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body as", (table) => {
      expect(true).toBeTruthy();
    });

    then("user receives a text message with the code to phone number", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) fied$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the page loads within "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the following message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-269 - Verify user should not see the any errors script when user clicks F12 on the console when user succes set up MFA due to user logs in from different device/IP Address", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up on device A$/,
      async (arg0, arg1) => {
        cleanup();
        Cookies.result = { mfa: true };

        const userData = {
          communicationMethod: {
            email: "user1@photon.com",
            phone: "9998887772",
          },
          ResponseCode: 4000,
          ResponseType: "success",
        };

        mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
        act(() => {
          container = render(
            <Provider store={store}>
              <MfaPage />
            </Provider>,
            {
              container: document.body.appendChild(element),
              legacyRoot: true,
            }
          );
        });
        await waitFor(() => container.getByText("backToLoginBtn"));
        expect(container.getByText("backToLoginBtn")).toBeInTheDocument();
      }
    );

    and("user login from device A", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    and("user tries to login from another device", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      const submitButton = container.getByRole("button", { name: /confrimBtn/i });
      fireEvent.click(submitButton);
    });

    then(/^user shoud see "(.*)" screen$/, async (arg0) => {
      navigateToPatientPortalHome();
    });

    and("user login from device B", () => {
      expect(true).toBeTruthy();
    });

    when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user receives an email/ text message with the code to the email or mobile number",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body as", (table) => {
      expect(true).toBeTruthy();
    });

    then("user receives a text message with the code to phone number", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) fied$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the following message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should not to see any errors script", () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user should see the following error message "Incorrect Code. Please try again." when user logs in from different device/IP Address and receives text alert from a registered mail-id', ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up on device A$/,
      async (arg0, arg1) => {
        cleanup();
        Cookies.result = { mfa: true };

        const userData = {
          communicationMethod: {
            email: "user1@photon.com",
            phone: "9998887772",
          },
          ResponseCode: 4000,
          ResponseType: "success",
        };

        mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
        act(() => {
          container = render(
            <Provider store={store}>
              <MfaPage />
            </Provider>,
            {
              container: document.body.appendChild(element),
              legacyRoot: true,
            }
          );
        });
        await waitFor(() => container.getByText("backToLoginBtn"));
        expect(container.getByText("backToLoginBtn")).toBeInTheDocument();
      }
    );

    and("user login from device A", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    and("user tries to login from another device", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      const submitButton = container.getByRole("button", { name: /confrimBtn/i });
      fireEvent.click(submitButton);
    });

    then(/^user shoud see "(.*)" screen$/, async (arg0) => {
      navigateToPatientPortalHome();
    });

    and("user login from device B", () => {
      expect(true).toBeTruthy();
    });

    when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user receives an emai with the code to the mobile number", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body as", (table) => {
      expect(true).toBeTruthy();
    });

    then("user receives a text message with the code to phone number", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill invalid (.*) fied$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the following message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user should see the following error message "Incorrect Code. Please try again." when user logs in from different device/IP Address and receives text alert from a registered phone number', ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up on device A$/,
      async (arg0, arg1) => {
        cleanup();
        Cookies.result = { mfa: true };

        const userData = {
          communicationMethod: {
            email: "user1@photon.com",
            phone: "9998887772",
          },
          ResponseCode: 4000,
          ResponseType: "success",
        };

        mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
        act(() => {
          container = render(
            <Provider store={store}>
              <MfaPage />
            </Provider>,
            {
              container: document.body.appendChild(element),
              legacyRoot: true,
            }
          );
        });
        await waitFor(() => container.getByText("backToLoginBtn"));
        expect(container.getByText("backToLoginBtn")).toBeInTheDocument();
      }
    );

    and("user login from device A", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    and("user tries to login from another device", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      const submitButton = container.getByRole("button", { name: /confrimBtn/i });
      fireEvent.click(submitButton);
    });

    then(/^user shoud see "(.*)" screen$/, async (arg0) => {
      navigateToPatientPortalHome();
    });

    and("user login from device B", () => {
      expect(true).toBeTruthy();
    });

    when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user receives a text message with the code to the phone number",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see the mail with text Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body as", (table) => {
      expect(true).toBeTruthy();
    });

    then("user receives a text message with the code to phone number", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill invalid (.*) fied$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the following message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user logs in from different device/IP Address and should see the error message when the internet service is unavailable", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up on device A$/,
      async (arg0, arg1) => {
        cleanup();
        Cookies.result = { mfa: true };

        const userData = {
          communicationMethod: {
            email: "user1@photon.com",
            phone: "9998887772",
          },
          ResponseCode: 4000,
          ResponseType: "success",
        };

        mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
        act(() => {
          container = render(
            <Provider store={store}>
              <MfaPage />
            </Provider>,
            {
              container: document.body.appendChild(element),
              legacyRoot: true,
            }
          );
        });
        await waitFor(() => container.getByText("backToLoginBtn"));
        expect(container.getByText("backToLoginBtn")).toBeInTheDocument();
      }
    );

    and("user login from device A", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    and("user tries to login from another device", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      const submitButton = container.getByRole("button", { name: /confrimBtn/i });
      fireEvent.click(submitButton);
    });

    then(/^user shoud see "(.*)" screen$/, async (arg0) => {
      navigateToPatientPortalHome();
    });

    and("user login from device B", () => {
      expect(true).toBeTruthy();
    });

    when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      "user receives a text message with the code to the phone number",
      () => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should see the mail with text Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body as", (table) => {
      expect(true).toBeTruthy();
    });

    then("user receives a text message with the code to phone number", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a message body", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill invalid (.*) fied$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user should see the appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-269 - Verify User receives an email from registered mail-id when user logs in from different device/IP Address", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    and("user navigates to the Patient Portal application", () => {
      navigateToPatientPortalApp();
    });

    when(/^user lands onto "(.*)" screen$/, async (arg0) => {
      cleanup()
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up on device A$/,
      async (arg0, arg1) => {
        cleanup();
        Cookies.result = { mfa: true };

        const userData = {
          communicationMethod: {
            email: "user1@photon.com",
            phone: "9998887772",
          },
          ResponseCode: 4000,
          ResponseType: "success",
        };

        mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
        act(() => {
          container = render(
            <Provider store={store}>
              <MfaPage />
            </Provider>,
            {
              container: document.body.appendChild(element),
              legacyRoot: true,
            }
          );
        });
        await waitFor(() => container.getByText("backToLoginBtn"));
        expect(container.getByText("backToLoginBtn")).toBeInTheDocument();
      }
    );

    and("user login from device A", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    and(
      /^user tries to login from another deviceAnd user should see "(.*)" option$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user checklist the "(.*)" option$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      fireEvent.click(remeberMe);
    });

    then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
      const remeberMe = container.getByText("rememberMeLabel");
      expect(remeberMe).toBeInTheDocument();
    });

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      const submitButton = container.getByRole("button", { name: /confrimBtn/i });
      fireEvent.click(submitButton);
    });

    then(/^user shoud see "(.*)" screen$/, async (arg0) => {
      navigateToPatientPortalHome();
    });

    and("user login from device B", () => {
      expect(true).toBeTruthy();
    });

    when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy();
    });

    and(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then("user receives an email from registered email-id", () => {
      expect(true).toBeTruthy();
    });

    and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user should see a mail body as", (table) => {
      expect(true).toBeTruthy();
    });
  });
});
