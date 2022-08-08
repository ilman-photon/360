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
});
