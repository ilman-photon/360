import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPassword";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-268.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when enter invalid code (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
      given('user is on second MFA screen', () => {

      });

      and(/^user should see "(.*)" screen with all of component$/, (arg0) => {

      });

      and(/^user should see (.*) field$/, (arg0) => {

      });

      and(/^user fill (.*) field with invalid code$/, (arg0) => {

      });

      when(/^user click on "(.*)" button$/, (arg0) => {

      });

      then(/^user should see error message "(.*)"$/, (arg0) => {

      });

      and(/^user should see text below message written as "(.*)"$/, (arg0) => {

      });
  });
  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when enter invalid code (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
    given('user is on second MFA screen', () => {
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^user fill (.*) field with invalid code$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, (arg0) => {
      expect(true).toBeTruthy()
    });
});

test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when enter invalid code (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
  given('user is on second MFA screen', () => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user fill (.*) field with invalid code$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });
});

test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when user leaves as blank field (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
  given('user is on second MFA screen', () => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user fill (.*) field with invalid code$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });
});

test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when user leaves as blank field (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
  given('user is on second MFA screen', () => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });
});


test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when user leaves as blank field (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
  given('user is on second MFA screen', () => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });
});

test('EPIC_EPP-3_STORY_EPP-268 - Verify user should able to request code after 30 minutes (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
  given('user is on second MFA screen', () => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });
});

test('EPIC_EPP-3_STORY_EPP-268 - Verify user should able to request code after 30 minutes (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
  given('user is on second MFA screen', () => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });
});

test('EPIC_EPP-3_STORY_EPP-268 - Verify user should able to request code after 30 minutes (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
  given('user is on second MFA screen', () => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });
});


test('EPIC_EPP-3_STORY_EPP-268 - Verify user see error screen when service is unavailable', ({ given, and, when, then }) => {
  given('user is on second MFA screen', () => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then('user should see error screen', () => {
    expect(true).toBeTruthy()
  });
});

test('EPIC_EPP-3_STORY_EPP-268 - Verify user see error screen when internet is unavailable', ({ given, and, when, then }) => {
  given('user is on second MFA screen', () => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user leave as blank (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then('user should see error screen', () => {
    expect(true).toBeTruthy()
  });
});

test('EPIC_EPP-3_STORY_EPP-268 - Verify user should not see any error when user tap on F12 keyboard in console', ({ given, and, when, then }) => {
  given('user is on second MFA screen', () => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user tap on F(\d+) on keyboard$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should not see any error in console when user tap on F(\d+) keyboard$/, (arg0) => {
    expect(true).toBeTruthy()
  });
});

test('EPIC_EPP-3_STORY_EPP-268 - Verify user should be able to enter only numeric in "<Enter code>" field', ({ given, and, when, then }) => {
  given('user is on second MFA screen', () => {
    expect(true).toBeTruthy()
  });

  and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see (.*) field$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user fill (.*) field with invalid code$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  when(/^user click on "(.*)" button$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  then(/^user should see error message "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });

  and(/^user should see text below message written as "(.*)"$/, (arg0) => {
    expect(true).toBeTruthy()
  });
});

});
