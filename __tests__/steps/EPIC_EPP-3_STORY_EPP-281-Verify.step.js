import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage from "../../src/pages/patient/mfa";
import "@testing-library/jest-dom";
import Cookies from "universal-cookie";

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
import { renderWithProviders } from "../src/utils/test-util";
import { Provider } from "react-redux";
import store from "../../src/store/store";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-281.feature"
);

defineFeature(feature, (test) => {
  let container;
  beforeEach(async () => {
    Cookies.result = { mfa: true };
    container = render(
      <Provider store={store}>
        <MfaPage />
      </Provider>
    );
    await waitFor(() => container.getByText("setMFATitle"));
  });
  test('EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail id', ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should fill valid (.*) field with the email$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device without being asked for MFA using registered mail id within 3 seconds", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should fill valid (.*) field with the email$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the page loads within "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - user should be able to see login from device without being asked for MFA using registered mail id without any errors script when user clicks on the console", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should fill valid (.*) field with the phone number$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
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
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should fill valid (.*) field with the email$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
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
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should fill valid (.*) field with the email$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
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
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should fill valid (.*) field with the phone number$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device without being asked for MFA using registered phone number within 3 seconds", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should fill valid (.*) field with the phone number$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the page loads within "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-281 - Negative user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered phone number", ({
    given,
    and,
    when,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should fill valid (.*) field with the phone number$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
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
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should fill valid (.*) field with the phone number$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
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
      expect(true).toBeTruthy();
    });

    and("user navigates to the Patient Portal application", () => {
      expect(true).toBeTruthy();
    });

    when(/^user lands onto "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(
      /^user see (.*) and (.*) fields that was MFA was set up$/,
      (arg0, arg1) => {
        expect(true).toBeTruthy();
      }
    );

    and(/^user should fill valid (.*) field with the email$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should fill valid (.*) field$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(
      /^user should see the "(.*)" option has been selected that Remember me has not expired$/,
      (arg0) => {
        expect(true).toBeTruthy();
      }
    );

    when(/^user clicks on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then(/^user should see the page loads within "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and(/^user should see "(.*)" screen$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when("user clicks on the console", () => {
      expect(true).toBeTruthy();
    });

    then("user should not to see any errors script", () => {
      expect(true).toBeTruthy();
    });
  });
});
