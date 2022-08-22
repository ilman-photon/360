
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-951.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
    test('EPIC_EPP-10_STORY_EPP-951 -    Verify if the user can edit the existing insurance documents', ({ given, and, when, then }) => {
        given('Launch  the Browser Enter \'XXX\' URL', () => {
            defaultValidation();
        });

        and('user lands on the “Patient Login” screen', () => {
            defaultValidation();
        });

        when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        then('user lands on the dashboard page', () => {
            defaultValidation();
        });

        and(/^clicks on "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^user navigates to the "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^clicks on"(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and('user sees existing insurance documents', () => {
            defaultValidation();
        });

        and('select an existing insurance', () => {
            defaultValidation();
        });

        then('the selected insurance opened', () => {
            defaultValidation();
        });

        and(/^"(.*)" edit button$/, (arg0) => {
            defaultValidation();
        });

        then(/^"(.*)" is enabled user sees the edit the fields$/, (arg0) => {
            defaultValidation();
        });

        and(/^user selelect a field "(.*)" the values$/, (arg0) => {
            defaultValidation();
        });

        and(/^"(.*)" on the "(.*)"$/, (arg0, arg1) => {
            defaultValidation();
        });

        then(/^"(.*)" is edited and is added to the list.$/, (arg0) => {
            defaultValidation();
        });
    });

  test("EPIC_EPP-10_STORY_EPP-951-    Verify if the user can cancel edited the existing insurance documents", ({
    given,
    when,
    then,
    and,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      defaultValidation();
  });

  and('user lands on the “Patient Login” screen', () => {
      defaultValidation();
  });

  when('user login with valid "<username>" and "<password>"', () => {
      defaultValidation();
  });

  then('user lands on the dashboard page', () => {
      defaultValidation();
  });

  and('clicks on "My profile"', () => {
      defaultValidation();
  });

  and('user navigates to the "insurance documents"', () => {
      defaultValidation();
  });

  and(/^clicks on"(.*)"$/, (arg0) => {
      defaultValidation();
  });

  and('user sees existing insurance documents', () => {
      defaultValidation();
  });

  and('select an existing insurance', () => {
      defaultValidation();
  });

  then('the selected insurance opened', () => {
      defaultValidation();
  });

  and('"click on" edit button', () => {
      defaultValidation();
  });

  then('"Edit button" is enabled user sees the edit the fields', () => {
      defaultValidation();
  });

  and('user selelect a field "edit" the values', () => {
      defaultValidation();
  });

  and('"Clicks" on the "cancel button"', () => {
      defaultValidation();
  });

  then('Edited fields are earased', () => {
      defaultValidation();
  });
  });


  test('EPIC_EPP-10_STORY_EPP-951 -    verify if the user can see the error message “This field is required” for those mandatory fields data is deleted while editing.', ({
    given, and, when, then
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      defaultValidation();
  });

  and('user lands on the “Patient Login” screen', () => {
      defaultValidation();
  });

  when('user login with valid "<username>" and "<password>"', () => {
      defaultValidation();
  });

  then('user lands on the dashboard page', () => {
      defaultValidation();
  });

  and('clicks on "My profile"', () => {
      defaultValidation();
  });

  and(/^user navigates to the "(.*)"$/, (arg0) => {
      defaultValidation();
  });

  and(/^clicks on"(.*)"$/, (arg0) => {
      defaultValidation();
  });

  and('user sees existing insurance documents', () => {
      defaultValidation();
  });

  and('select an existing insurance', () => {
      defaultValidation();
  });

  then('the selected insurance opened', () => {
      defaultValidation();
  });

  and('"click on" edit button', () => {
      defaultValidation();
  });

  and('user selects a field "delete" the values', () => {
      defaultValidation();
  });

  and('"Clicks" on the "Save button"', () => {
      defaultValidation();
  });

  then(/^"(.*)" is edited$/, (arg0) => {
      defaultValidation();
  });

  and('"Clicks" on the "Save button"', () => {
      defaultValidation();
  });

  then('the User sees the error message “This field is required”  under the respective field.', () => {
      defaultValidation();
  });
});


  test("EPIC_EPP-10_STORY_EPP-951 -    Verify if the user can see the error message “Incorrect format” for those fields which are in incorrect format", ({
    given,
    when,
    then,
    and,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      defaultValidation();
  });

  and('user lands on the “Patient Login” screen', () => {
      defaultValidation();
  });

  when('user login with valid "<username>" and "<password>"', () => {
      defaultValidation();
  });

  then('user lands on the dashboard page', () => {
      defaultValidation();
  });

  and('clicks on "My profile"', () => {
      defaultValidation();
  });

  and(/^user navigates to the "(.*)"$/, (arg0) => {
      defaultValidation();
  });

  and(/^clicks on"(.*)"$/, (arg0) => {
      defaultValidation();
  });

  and('user sees existing insurance documents', () => {
      defaultValidation();
  });

  and('select an existing insurance', () => {
      defaultValidation();
  });

  then('the selected insurance opened', () => {
      defaultValidation();
  });

  and('"click on" edit button', () => {
      defaultValidation();
  });
//
  and('user selects a field "edit " the values', () => {
      defaultValidation();
  });

  and('"Clicks" on the "Save button"', () => {
      defaultValidation();
  });

  then('the User sees the error message “Incorrect format”  under the respective field.', () => {
      defaultValidation();
  });
  });
  test("EPIC_EPP-10_STORY_EPP-951 -    Verify if all edited fields are erased when the user refreshes the browser", ({
    given,
    when,
    then,
    and,
  }) => {
    given("Launch  the Browser Enter 'XXX' URL", () => {
      defaultValidation();
  });

  and('user lands on the “Patient Login” screen', () => {
      defaultValidation();
  });

  when('user login with valid "<username>" and "<password>"', () => {
      defaultValidation();
  });

  then('user lands on the dashboard page', () => {
      defaultValidation();
  });

  and('clicks on "My profile"', () => {
      defaultValidation();
  });

  and(/^user navigates to the "(.*)"$/, (arg0) => {
      defaultValidation();
  });

  and(/^clicks on"(.*)"$/, (arg0) => {
      defaultValidation();
  });

  and('user sees existing insurance documents', () => {
      defaultValidation();
  });

  and('select an existing insurance', () => {
      defaultValidation();
  });

  then('the selected insurance opened', () => {
      defaultValidation();
  });

  and('"click on" edit button', () => {
      defaultValidation();
  });

  and('user selects a field "edit " the values', () => {
      defaultValidation();
  });

  and('Refresh the browser', () => {
      defaultValidation();
  });

  then('user sees the sees all edited fields are erased..', () => {
      defaultValidation();
  });
  });

  test('EPIC_EPP-10_STORY_EPP-951 -    Verify if a 503 Service unavailable message  displays when the user tries edit  "insurance details" when the server is on maintenance', ({
    given,
    when,
    then,
    and,
  }) => {
   given("Launch  the Browser Enter 'XXX' URL", () => {
      defaultValidation();
  });

  and('user lands on the “Patient Login” screen', () => {
      defaultValidation();
  });

  when('user login with valid "<username>" and "<password>"', () => {
      defaultValidation();
  });

  then('user lands on the dashboard page', () => {
      defaultValidation();
  });

  and('clicks on "My profile"', () => {
      defaultValidation();
  });

  and(/^user navigates to the "(.*)"$/, (arg0) => {
      defaultValidation();
  });

  and(/^clicks on"(.*)"$/, (arg0) => {
      defaultValidation();
  });

  and('user sees existing insurance documents', () => {
      defaultValidation();
  });

  and('select an existing insurance', () => {
      defaultValidation();
  });

  then('the selected insurance opened', () => {
      defaultValidation();
  });

  and('"click on" edit button', () => {
      defaultValidation();
  });

  and('user selects a field "edit " the values', () => {
      defaultValidation();
  });

  and('Switch off the" server"', () => {
      defaultValidation();
  });

    and('user selects a field "edit " the values', () => {
        defaultValidation();
    });
  
    and('"Clicks" on the "Save" "Button"', () => {
        defaultValidation();
    });

  then('the user sees the error message  "503 Service unavailable"', () => {
      defaultValidation();
  });
  });

  test('EPIC_EPP-10_STORY_EPP-951 -    Verify if the user can edit Insurance details by "mobile browser', ({
    given,
    when,
    then,
    and,
  }) => {
    given('Launch  the mobile Browser Enter the\' XXX\' URL', () => {
      defaultValidation();
  });

  and('user lands on the “Patient Login” screen', () => {
      defaultValidation();
  });

  when('user login with valid "<username>" and "<password>"', () => {
      defaultValidation();
  });

  then('user lands on the dashboard page', () => {
      defaultValidation();
  });

  and('clicks on "My profile"', () => {
      defaultValidation();
  });

  and(/^user navigates to the "(.*)"$/, (arg0) => {
      defaultValidation();
  });

  and(/^clicks on"(.*)"$/, (arg0) => {
      defaultValidation();
  });

  and('user sees existing insurance documents', () => {
      defaultValidation();
  });

  and('select an existing insurance', () => {
      defaultValidation();
  });

  then('the selected insurance opened', () => {
      defaultValidation();
  });

  and('"click on" edit button', () => {
      defaultValidation();
  });
//
  then('"Edit button" is enabled user sees the edit the fields', () => {
      defaultValidation();
  });

  and('user selects a field "edit" the values', () => {
      defaultValidation();
  });

    and('"Clicks" on the "Save button"', () => {
        defaultValidation();
    });

  then('"Insurance documents" is edited and is added to the list.', () => {
      defaultValidation();
  });
  });

});

