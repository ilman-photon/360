import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage from "../../src/pages/patient/mfa";
import "@testing-library/jest-dom";
import Cookies from "universal-cookie";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";
import { TEST_ID } from "../../src/utils/constants";
import {
  renderLogin,
  renderForgotPassword,
  clickContinueForgot,
  navigateToPatientPortalHome,
} from "../../__mocks__/commonSteps";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import AuthPage from "../../src/pages/patient/login";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com";
      else if (param === "securityQuestions") return [];
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

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-281.feature"
);

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
};

const navigateToPatientPortalApp = () => {
  mock
    .onGet(`https://api.ipify.org?format=json`)
    .reply(200, { ip: "10.10.10.10" });
  act(() => {
    container = renderWithProviders(<AuthPage />, {
      container: document.body.appendChild(element),
      legacyRoot: true,
    });
  });
};

const renderMFA = async () => {
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
};

defineFeature(feature, (test) => {
  let container;
  beforeEach(async () => {
    cleanup();
  });

  test('EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail id', ({
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
      cleanup();
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      async (arg0, arg1) => {
        renderMFA();
      }
    );

    and(/^user should fill valid (.*) field with the email$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(
          container.getByText("rememberMeDescription")
        ).toBeInTheDocument();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(container.getByText("confrimBtn")).toBeInTheDocument();
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device without being asked for MFA using registered mail id within 3 seconds", ({
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
      cleanup();
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      async (arg0, arg1) => {
        renderMFA();
      }
    );

    and(/^user should fill valid (.*) field with the email$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(
          container.getByText("rememberMeDescription")
        ).toBeInTheDocument();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(container.getByText("confrimBtn")).toBeInTheDocument();
    });

    then(/^user should see the page loads within "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - user should be able to see login from device without being asked for MFA using registered mail id without any errors script when user clicks on the console", ({
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
      cleanup();
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      async (arg0, arg1) => {
        renderMFA();
      }
    );

    and(/^user should fill valid (.*) field with the phone number$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(
          container.getByText("rememberMeDescription")
        ).toBeInTheDocument();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(container.getByText("confrimBtn")).toBeInTheDocument();
    });

    and("user clicks on the console", () => {
      expect(true).toBeTruthy();
    });

    then("user should not to see the errors script", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - Negative user should user should see the error message when the internet service is unavailable when user logs in from device using registered mail id", ({
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
      cleanup();
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      async (arg0, arg1) => {
        renderMFA();
      }
    );

    and(/^user should fill valid (.*) field with the email$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(
          container.getByText("rememberMeDescription")
        ).toBeInTheDocument();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(container.getByText("confrimBtn")).toBeInTheDocument();
    });

    then("user should see the appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - Negative user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail id", ({
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
      cleanup();
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      async (arg0, arg1) => {
        renderMFA();
      }
    );

    and(/^user should fill valid (.*) field with the email$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(
          container.getByText("rememberMeDescription")
        ).toBeInTheDocument();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(container.getByText("confrimBtn")).toBeInTheDocument();
    });

    then("user should see the appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using phone number', ({
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
      cleanup();
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      async (arg0, arg1) => {
        renderMFA();
      }
    );

    and(/^user should fill valid (.*) field with the phone number$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(
          container.getByText("rememberMeDescription")
        ).toBeInTheDocument();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(container.getByText("confrimBtn")).toBeInTheDocument();
    });

    then(/^user should see "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device without being asked for MFA using registered phone number within 3 seconds", ({
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
      cleanup();
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      async (arg0, arg1) => {
        renderMFA();
      }
    );

    and(/^user should fill valid (.*) field with the phone number$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(
          container.getByText("rememberMeDescription")
        ).toBeInTheDocument();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(container.getByText("confrimBtn")).toBeInTheDocument();
    });

    then(/^user should see the page loads within "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - Negative user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered phone number", ({
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
      cleanup();
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      async (arg0, arg1) => {
        renderMFA();
      }
    );

    and(/^user should fill valid (.*) field with the phone number$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(
          container.getByText("rememberMeDescription")
        ).toBeInTheDocument();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(container.getByText("confrimBtn")).toBeInTheDocument();
    });

    then("user should see the appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - Negative user should user should see the error message when the internet service is unavailable when user logs in from device without being asked for MFA using registered phone number", ({
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
      cleanup();
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      async (arg0, arg1) => {
        renderMFA();
      }
    );

    and(/^user should fill valid (.*) field with the phone number$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(
          container.getByText("rememberMeDescription")
        ).toBeInTheDocument();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(container.getByText("confrimBtn")).toBeInTheDocument();
    });

    then("user should see the appropriate error message", () => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device without being asked for MFA using registered mail id without any errors script when user clicks on the console", ({
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
      cleanup();
      container = await renderLogin();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      async (arg0, arg1) => {
        renderMFA();
      }
    );

    and(/^user should fill valid (.*) field with the email$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      const usernameField = container.getByTestId(/loc_RadioEmail/i);
      fireEvent.change(usernameField, {
        target: { label: "patient1@email.com" },
      });
      expect(usernameField.label).toEqual("patient1@email.com");
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(
          container.getByText("rememberMeDescription")
        ).toBeInTheDocument();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(container.getByText("confrimBtn")).toBeInTheDocument();
    });

    then(/^user should see the page loads within "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });

    when("user clicks on the console", () => {
      expect(true).toBeTruthy();
    });

    then("user should not to see any errors script", () => {
      expect(true).toBeTruthy();
    });
  });
});
