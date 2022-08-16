import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPassword";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-264.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
    test('EPIC_EPP-3_STORY_EPP-264 - Verify user should see set MFA screen after completing registration (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {

        });

        and('user is in “Patient Login” screen', () => {

        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {

        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {

        });

        and('user should able to fill all madantory details and option to choose both', () => {

        });

        and('user receives an email/text message with a link to their registered email id/ phone number', () => {

        });

        when('user click on the link', () => {

        });

        then('user lands onto “Set New Username and Password” screen', () => {

        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default', () => {

        });

        and('user should able to view and fill the following fields', (table) => {

        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {

        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {

        });

        then('user should see set MFA screen', () => {

        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {

        });

        and('user should see default selection on Email', () => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });
    });
    test('EPIC_EPP-3_STORY_EPP-264 - Verify user should be able to choose other preferred mode(s) of communication', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {

        });

        and('user is in “Patient Login” screen', () => {

        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {

        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {

        });

        and('user should able to fill all madantory details and option to choose both', () => {

        });

        and('user receives an email/text message with a link to their registered email id/ phone number', () => {

        });

        when('user click on the link', () => {

        });

        then('user lands onto “Set New Username and Password” screen', () => {

        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default', () => {

        });

        and('user should able to view and fill the following fields', (table) => {

        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {

        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {

        });

        then('user should see set MFA screen', () => {

        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {

        });

        and('user should see default selection on Email', () => {

        });

        when('user click on Phone radio button', () => {

        });

        then('user should see radio button is selected on Phone radio button', () => {

        });
    });
});
