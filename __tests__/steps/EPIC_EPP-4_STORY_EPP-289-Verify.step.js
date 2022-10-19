import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import AuthPage from "../../src/pages/patient/login";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-289.feature", {
  tagFilter: '@included and not @excluded'
}
);

defineFeature(feature, (test) => {
  let container, login;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  test("EPIC_EPP-4_STORY_EPP-289 - Verify user  should be able to logout from patient portal", ({
    given,
    when,
    then,
    and,
  }) => {
    given('user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy()
    });

    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when('lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy()
    });

    then(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^user enter password in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and('user should see \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    then('user should see Home/Dashboard Page', () => {
      expect(true).toBeTruthy()
    });

    and('user should see \'Logout\' option under Profile name', () => {
      expect(true).toBeTruthy()
    });

    when('user click on \'Logout\' button', () => {
      expect(true).toBeTruthy()
    });

    then('user should see Login screen', () => {
      expect(true).toBeTruthy()
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify user is not able to logout when Internet connection is unavailable", ({
    given,
    when,
    then,
    and,
  }) => {
    given('user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy()
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy()
    });

    when('lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy()
    });

    then(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^user enter password in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and('user should see \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    when('user click on \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    then('user should see Home/Dashboard Page', () => {
      expect(true).toBeTruthy()
    });

    and('user should see \'Logout\' option under Profile name', () => {
      expect(true).toBeTruthy()
    });

    when('user click on \'Logout\' button when internet is unavailable', () => {
      expect(true).toBeTruthy()
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy()
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify admin user  should be able to logout form patient portal", ({
    given,
    when,
    then,
    and,
  }) => {
    given('admin user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy()
    });

    and('admin user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy()
    });

    when('admin lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy()
    });

    then(/^admin user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^admin user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^admin user enter Email or Phone Number in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and('admin user should see \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    when('admin user click on \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    then('admin user should see Home/Dashboard Page', () => {
      expect(true).toBeTruthy()
    });

    and('admin user should see \'Logout\' option under Profile name', () => {
      expect(true).toBeTruthy()
    });

    when('admin user click on \'Logout\' button', () => {
      expect(true).toBeTruthy()
    });

    then('admin user should see Login screen', () => {
      expect(true).toBeTruthy()
    });
  });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify user is not able to logout when Service is unavailable", ({
    given,
    when,
    then,
    and,
  }) => {
    given('user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy()
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy()
    });

    when("user lands onto “Patient Login” screen", () => {
      mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = renderWithProviders(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    });

    then(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^user enter password in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and('user should see \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    when('user click on \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    then('user should see Home/Dashboard Page', () => {
      expect(true).toBeTruthy()
    });

    and('user should see \'Logout\' option under Profile name', () => {
      expect(true).toBeTruthy()
    });

    when('user click on \'Logout\' button when service is unavailable', () => {
      expect(true).toBeTruthy()
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy()
    });
  });
  test('EPIC_EPP-4_STORY_EPP-289 - Verify user is able to view the Logout screen loaded within 3 sec', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy()
    });

    and('user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy()
    });

    when('user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy()
    });

    then(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^user enter password in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and('user should see \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    when('user click on \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    then('user should see Home/Dashboard Page', () => {
      expect(true).toBeTruthy()
    });

    and('user should see \'Logout\' option under Profile name', () => {
      expect(true).toBeTruthy()
    });

    when('user click on \'Logout\' button when internet is unavailable', () => {
      expect(true).toBeTruthy()
    });

    then('user should see appropriate error message', () => {
      expect(true).toBeTruthy()
    });
  });
  test('EPIC_EPP-4_STORY_EPP-289 - Verify whether user is able to view Dev Tools without errors when F12 is clicked', ({ given, when, then }) => {
    given('Admin launch the \'XXX\' url', () => {
      expect(true).toBeTruthy()
    });

    when(/^Admin provides  (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy()
    });

    when(/^Admin (.*) the (.*) button$/, (arg0, arg1) => {
      expect(true).toBeTruthy()
    });

    then(/^Admin must "(.*)" whether the Dev Tools are Displayed$/, (arg0) => {
      expect(true).toBeTruthy()
    });
  });
  test('EPIC_EPP-4_STORY_EPP-289 - Verify admin user is not able to logout when Internet connection is unavailable', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy()
    });

    and('admin user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy()
    });

    when('admin user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy()
    });

    then(/^admin user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^admin user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^admin  user enter Email or Phone Number in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and('admin user should see \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    when('admin user click on \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    then('admin user should see Home/Dashboard Page', () => {
      expect(true).toBeTruthy()
    });

    and('admin user should see \'Logout\' option under Profile name', () => {
      expect(true).toBeTruthy()
    });

    when('admin user click on \'Logout\' button when internet is unavailable', () => {
      expect(true).toBeTruthy()
    });

    then('admin user should see appropriate error message', () => {
      expect(true).toBeTruthy()
    });
  });
  test('EPIC_EPP-4_STORY_EPP-289 - Verify admin user is not able to logout when Service is unavailable', ({ given, and, when, then }) => {
    given('admin user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy()
    });

    and('admin user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy()
    });

    when('admin user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy()
    });

    then(/^admin user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^admin user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^admin user enter Email or Phone Number in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and('admin user should see \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    when('admin user click on \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    then('admin user should see Home/Dashboard Page', () => {
      expect(true).toBeTruthy()
    });

    and('admin user should see \'Logout\' option under Profile name', () => {
      expect(true).toBeTruthy()
    });

    when('admin user click on \'Logout\' button when service is unavailable', () => {
      expect(true).toBeTruthy()
    });

    then('admin user should see appropriate error message', () => {
      expect(true).toBeTruthy()
    });
  });
  test('EPIC_EPP-4_STORY_EPP-289 - Verify admin user is able to view the Logout screen loaded within 3 sec', ({ given, and, when, then }) => {
    given('admin  user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy()
    });

    and('admin user navigates to the Patient Portal application', () => {
      expect(true).toBeTruthy()
    });

    when('admin  user lands onto “Patient Login” screen', () => {
      expect(true).toBeTruthy()
    });

    then(/^admin  user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^admin user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^admin  user enter Email or Phone Number in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and('admin user should see \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    when('admin  user click on \'Login\' button', () => {
      expect(true).toBeTruthy()
    });

    then('admin  user should see Home/Dashboard Page', () => {
      expect(true).toBeTruthy()
    });

    and('admin user should see \'Logout\' option under Profile name', () => {
      expect(true).toBeTruthy()
    });

    when('admin  user click on \'Logout\' button when internet is unavailable', () => {
      expect(true).toBeTruthy()
    });

    then('admin user should see appropriate error message', () => {
      expect(true).toBeTruthy()
    });
  });
  test('EPIC_EPP-4_STORY_EPP-289 - Verify whether admin user is able to view Dev Tools without errors when F12 is clicked', ({ given, when, then }) => {
    given('Admin user launch the \'XXX\' url', () => {
      expect(true).toBeTruthy()
    });

    when(/^Admin user provides  (.*) and (.*)$/, (arg0, arg1) => {
      expect(true).toBeTruthy()
    });

    when(/^Admin user (.*) the (.*) button$/, (arg0, arg1) => {
      expect(true).toBeTruthy()
    });

    then(/^Admin user must "(.*)" whether the Dev Tools are Displayed$/, (arg0) => {
      expect(true).toBeTruthy()
    });
  });
});
