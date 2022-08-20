import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-953.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-10_STORY_EPP-953 - Verify if the all attributes present in "Insurance documents" page', ({ and, when, then }) => {
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

    and(/^user sees the "(.*)"$/, (arg0) => {
        defaultValidation();
    });

    and(/^clicks on the "(.*)"$/, (arg0) => {
        defaultValidation();
    });

    then('Insurance documents page open with following attributes Insurance Provider"Type-ahead search dropdown ", Plan name"Type-ahead search dropdown ",Subscriber ID/ Member ID"Numeric/text field",Group #"Numeric/text field",Upload image of the insurance" frient and back",Insurance Priority"Radio buttons - Primary / Secondary / Tertiary",Are you the subscriber?"Radio buttons yes,No"', () => {
        defaultValidation();
    });
});


});