import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-289.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-4_STORY_EPP-289 - Verify user  should be able to logout from patient portal", ({
    given,
    when,
    then,
    and,
  }) => {
    given('user launch the \'XXX\' url', () => {

    });

    and('user navigates to the Patient Portal application', () => {

    });

    when('lands onto “Patient Login” screen', () => {

    });

    then(/^user should see (.*) field$/, (arg0) => {

    });

    and(/^user should see (.*) field$/, (arg0) => {

    });

    when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {

    });

    and(/^user enter password in (.*) field$/, (arg0) => {

    });

    and('user should see \'Login\' button', () => {

    });

    when(/^user click on "(.*)" button$/, (arg0) => {

    });

    then('user should see Home/Dashboard Page', () => {

    });

    and('user should see \'Logout\' option under Profile name', () => {

    });

    when('user click on \'Logout\' button', () => {

    });

    then('user should see Login screen', () => {

    });
    });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify user is not able to logout when Internet connection is unavailable", ({
    given,
    when,
    then,
    and,
  }) => {
      given('user launch the \'XXX\' url', () => {

      });

      and('user navigates to the Patient Portal application', () => {

      });

      when('lands onto “Patient Login” screen', () => {

      });

      then(/^user should see (.*) field$/, (arg0) => {

      });

      and(/^user should see (.*) field$/, (arg0) => {

      });

      when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {

      });

      and(/^user enter password in (.*) field$/, (arg0) => {

      });

      and('user should see \'Login\' button', () => {

      });

      when('user click on \'Login\' button', () => {

      });

      then('user should see Home/Dashboard Page', () => {

      });

      and('user should see \'Logout\' option under Profile name', () => {

      });

      when('user click on \'Logout\' button when internet is unavailable', () => {

      });

      then('user should see appropriate error message', () => {

      });
    });
  test("EPIC_EPP-4_STORY_EPP-289 - Verify admin user  should be able to logout form patient portal", ({
    given,
    when,
    then,
    and,
  }) => {
    given('admin user launch the \'XXX\' url', () => {

    });

    and('admin user navigates to the Patient Portal application', () => {

    });

    when('admin lands onto “Patient Login” screen', () => {

    });

    then(/^admin user should see (.*) field$/, (arg0) => {

    });

    and(/^admin user should see (.*) field$/, (arg0) => {

    });

    when(/^admin user enter Email or Phone Number in (.*) field$/, (arg0) => {

    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {

    });

    and('admin user should see \'Login\' button', () => {

    });

    when('admin user click on \'Login\' button', () => {

    });

    then('admin user should see Home/Dashboard Page', () => {

    });

    and('admin user should see \'Logout\' option under Profile name', () => {

    });

    when('admin user click on \'Logout\' button', () => {

    });

    then('admin user should see Login screen', () => {

    });
    });  
  test("EPIC_EPP-4_STORY_EPP-289 - Verify user is not able to logout when Service is unavailable", ({
    given,
    when,
    then,
    and,
  }) => {
    given('user launch the \'XXX\' url', () => {

    });

    and('user navigates to the Patient Portal application', () => {

    });

    when('user lands onto “Patient Login” screen', () => {

    });

    then(/^user should see (.*) field$/, (arg0) => {

    });

    and(/^user should see (.*) field$/, (arg0) => {

    });

    when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {

    });

    and(/^user enter password in (.*) field$/, (arg0) => {

    });

    and('user should see \'Login\' button', () => {

    });

    when('user click on \'Login\' button', () => {

    });

    then('user should see Home/Dashboard Page', () => {

    });

    and('user should see \'Logout\' option under Profile name', () => {

    });

    when('user click on \'Logout\' button when service is unavailable', () => {

    });

    then('user should see appropriate error message', () => {

    });
    }); 
    test('EPIC_EPP-4_STORY_EPP-289 - Verify user is able to view the Logout screen loaded within 3 sec', ({ given, and, when, then }) => {
      given('user launch the \'XXX\' url', () => {

      });

      and('user navigates to the Patient Portal application', () => {

      });

      when('user lands onto “Patient Login” screen', () => {

      });

      then(/^user should see (.*) field$/, (arg0) => {

      });

      and(/^user should see (.*) field$/, (arg0) => {

      });

      when(/^user enter Email or Phone Number in (.*) field$/, (arg0) => {

      });

      and(/^user enter password in (.*) field$/, (arg0) => {

      });

      and('user should see \'Login\' button', () => {

      });

      when('user click on \'Login\' button', () => {

      });

      then('user should see Home/Dashboard Page', () => {

      });

      and('user should see \'Logout\' option under Profile name', () => {

      });

      when('user click on \'Logout\' button when internet is unavailable', () => {

      });

      then('user should see appropriate error message', () => {

      });
  });
  test('EPIC_EPP-4_STORY_EPP-289 - Verify whether user is able to view Dev Tools without errors when F12 is clicked', ({ given, when, then }) => {
    given('Admin launch the \'XXX\' url', () => {

      });

      when(/^Admin provides  (.*) and (.*)$/, (arg0, arg1) => {

      });

      when(/^Admin (.*) the (.*) button$/, (arg0, arg1) => {

      });

      then(/^Admin must "(.*)" whether the Dev Tools are Displayed$/, (arg0) => {

      });
  });
  test('EPIC_EPP-4_STORY_EPP-289 - Verify admin user is not able to logout when Internet connection is unavailable', ({ given, and, when, then }) => {
    given('user launch the \'XXX\' url', () => {

    });

    and('admin user navigates to the Patient Portal application', () => {

    });

    when('admin user lands onto “Patient Login” screen', () => {

    });

    then(/^admin user should see (.*) field$/, (arg0) => {

    });

    and(/^admin user should see (.*) field$/, (arg0) => {

    });

    when(/^admin  user enter Email or Phone Number in (.*) field$/, (arg0) => {

    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {

    });

    and('admin user should see \'Login\' button', () => {

    });

    when('admin user click on \'Login\' button', () => {

    });

    then('admin user should see Home/Dashboard Page', () => {

    });

    and('admin user should see \'Logout\' option under Profile name', () => {

    });

    when('admin user click on \'Logout\' button when internet is unavailable', () => {

    });

    then('admin user should see appropriate error message', () => {

    });
  });
  test('EPIC_EPP-4_STORY_EPP-289 - Verify admin user is not able to logout when Service is unavailable', ({ given, and, when, then }) => {
    given('admin user launch the \'XXX\' url', () => {

    });

    and('admin user navigates to the Patient Portal application', () => {

    });

    when('admin user lands onto “Patient Login” screen', () => {

    });

    then(/^admin user should see (.*) field$/, (arg0) => {

    });

    and(/^admin user should see (.*) field$/, (arg0) => {

    });

    when(/^admin user enter Email or Phone Number in (.*) field$/, (arg0) => {

    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {

    });

    and('admin user should see \'Login\' button', () => {

    });

    when('admin user click on \'Login\' button', () => {

    });

    then('admin user should see Home/Dashboard Page', () => {

    });

    and('admin user should see \'Logout\' option under Profile name', () => {

    });

    when('admin user click on \'Logout\' button when service is unavailable', () => {

    });

    then('admin user should see appropriate error message', () => {

    });
  });
  test('EPIC_EPP-4_STORY_EPP-289 - Verify admin user is able to view the Logout screen loaded within 3 sec', ({ given, and, when, then }) => {
    given('admin  user launch the \'XXX\' url', () => {

    });

    and('admin user navigates to the Patient Portal application', () => {

    });

    when('admin  user lands onto “Patient Login” screen', () => {

    });

    then(/^admin  user should see (.*) field$/, (arg0) => {

    });

    and(/^admin user should see (.*) field$/, (arg0) => {

    });

    when(/^admin  user enter Email or Phone Number in (.*) field$/, (arg0) => {

    });

    and(/^admin user enter password in (.*) field$/, (arg0) => {

    });

    and('admin user should see \'Login\' button', () => {

    });

    when('admin  user click on \'Login\' button', () => {

    });

    then('admin  user should see Home/Dashboard Page', () => {

    });

    and('admin user should see \'Logout\' option under Profile name', () => {

    });

    when('admin  user click on \'Logout\' button when internet is unavailable', () => {

    });

    then('admin user should see appropriate error message', () => {

    });
});
test('EPIC_EPP-4_STORY_EPP-289 - Verify whether admin user is able to view Dev Tools without errors when F12 is clicked', ({ given, when, then }) => {
  given('Admin user launch the \'XXX\' url', () => {

  });

  when(/^Admin user provides  (.*) and (.*)$/, (arg0, arg1) => {

  });

  when(/^Admin user (.*) the (.*) button$/, (arg0, arg1) => {

  });

  then(/^Admin user must "(.*)" whether the Dev Tools are Displayed$/, (arg0) => {

  });
});
});
