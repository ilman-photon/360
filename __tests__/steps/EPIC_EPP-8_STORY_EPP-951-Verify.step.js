
import { defineFeature, loadFeature } from "jest-cucumber";
import Login from "../../src/components/organisms/Login/login";
import { fireEvent, render } from "@testing-library/react";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-951.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {

    test('EPIC_EPP-10_STORY_EPP-951 -    Verify if the user can edit the existing insurance documents', ({ given, and, when, then }) => {
        given('Launch  the Browser Enter \'XXX\' URL', () => {
            expect(true).toBeTruthy();
        });

        and('user lands on the “Patient Login” screen', () => {
            expect(true).toBeTruthy();
        });

        when(/^user login with valid (.*) and (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy();
        });

        then('user lands on the dashboard page', () => {
            expect(true).toBeTruthy();
        });

        and(/^clicks on "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user navigates to the "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^clicks on"(.*)"$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and('user sees existing insurance documents', () => {
            expect(true).toBeTruthy();
        });

        and('select a existing insurance', () => {
            expect(true).toBeTruthy();
        });

        then('the selected insurance opened', () => {
            expect(true).toBeTruthy();
        });

        and(/^"(.*)" edit button$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        then(/^"(.*)" is enabled user sees the edit the fields$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user selelect a field "(.*)" the values$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^"(.*)" on the "(.*)"$/, (arg0, arg1) => {
            expect(true).toBeTruthy();
        });

        then(/^"(.*)" is edited and is added to the list.$/, (arg0) => {
            expect(true).toBeTruthy();
        });
    });

  test("EPIC_EPP-10_STORY_EPP-951-    Verify if the user can cancel edited the existing insurance documents", ({
    given,
    when,
    then,
    and,
  }) => {
   
  });
  test('EPIC_EPP-10_STORY_EPP-951 -    verify if the user can see the error message “This field is required” for those mandatory fields data is deleted while editing.', ({ given, and, when, then }) => {

});
  test("EPIC_EPP-10_STORY_EPP-951 -    Verify if the user can see the error message “Incorrect format” for those fields which are in incorrect format", ({
    given,
    when,
    then,
    and,
  }) => {
   
  });
  test("EPIC_EPP-10_STORY_EPP-951 -    Verify if all edited fields are erased when the user refreshes the browser", ({
    given,
    when,
    then,
    and,
  }) => {
   
  });
  test('EPIC_EPP-10_STORY_EPP-951 -    Verify if a 503 Service unavailable message  displays when the user tries edit  "insurance details" when the server is on maintenance', ({
    given,
    when,
    then,
    and,
  }) => {
   
  });

  test('EPIC_EPP-10_STORY_EPP-951 -    Verify if the user can edit Insurance details by "mobile browser', ({
    given,
    when,
    then,
    and,
  }) => {
   
  });

});

