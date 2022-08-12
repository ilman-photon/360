import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-281.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  test('EPIC_EPP-3_STORY_EPP-281-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id', ({  }) => {
      test('"EPIC_EPP-3_STORY_EPP-281-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
          expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
          expect(true).toBeTruthy()
        });

        when(/^user lands onto "(.*)" screen$/, (arg0) => {
          expect(true).toBeTruthy()
        });

        then(/^user see (.*) and (.*) fields that was MFA was set up$/, (arg0, arg1) => {
          expect(true).toBeTruthy()
        });

        and(/^user should fill valid (.*) field with the email$/, (arg0) => {
          expect(true).toBeTruthy()
        });

        and(/^user should fill valid (.*) field$/, (arg0) => {
          expect(true).toBeTruthy()
        });

        and(/^user should see the "(.*)" option has been selected that Remember me has not expired$/, (arg0) => {
          expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
          expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen$/, (arg0) => {
          expect(true).toBeTruthy()
        });
      });
  });
  test('EPIC_EPP-3_STORY_EPP-281-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds', ({  }) => {
    test('"EPIC_EPP-3_STORY_EPP-281-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds"', ({ given, and, when, then }) => {
      given(/^user launch the "(.*)" url$/, (arg0) => {

      });

      and('user navigates to the Patient Portal application', () => {

      });

      when(/^user lands onto "(.*)" screen$/, (arg0) => {

      });

      then(/^user see (.*) and (.*) fields that was MFA was set up$/, (arg0, arg1) => {

      });

      and(/^user should fill valid (.*) field with the email$/, (arg0) => {

      });

      and(/^user should fill valid (.*) field$/, (arg0) => {

      });

      and(/^user should see the "(.*)" option has been selected that Remember me has not expired$/, (arg0) => {

      });

      when(/^user clicks on "(.*)" button$/, (arg0) => {

      });

      then(/^user should see the page loads within "(.*)"$/, (arg0) => {

      });

      and(/^user should see "(.*)" screen$/, (arg0) => {

      });
  });

  });






});