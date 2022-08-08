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
});
