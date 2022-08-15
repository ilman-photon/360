import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-265.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
    
    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see second MFA screen with all of components (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
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

        and('user receives an email/text message with a link to their registered email id/ mobile number', () => {

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

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see (.*) field$/, (arg0) => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        and(/^user should see "(.*)" link$/, (arg0) => {

        });
    });
 
    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see second MFA screen with all of component (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {

        });

        and('user is in “Patient Login” screen', () => {

        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {

        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {

        });

        and('user should able to fill all madantory details and option to choose email', () => {

        });

        and('user receives an email/text message with a link to their registered email id', () => {

        });

        when('user click on the link', () => {

        });

        then('user lands onto “Set New Username and Password” screen', () => {

        });

        and('user should able to view Username field updated with email-id by default', () => {

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

        and(/^user should see text  "(.*)"$/, (arg0) => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered email', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see (.*) field$/, (arg0) => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        and(/^user should see "(.*)" link$/, (arg0) => {

        });
    });
    

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see second MFA screen with all of component (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {

        });

        and('user is in “Patient Login” screen', () => {

        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {

        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {

        });

        and('user should able to fill all madantory details and option to choose email', () => {

        });

        and('user receives an email/text message with a link to their registered email id', () => {

        });

        when('user click on the link', () => {

        });

        then('user lands onto “Set New Username and Password” screen', () => {

        });

        and('user should able to view Username field updated with email-id by default', () => {

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

        and(/^user should see text  "(.*)"$/, (arg0) => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered Phone number', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see (.*) field$/, (arg0) => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        and(/^user should see "(.*)" link$/, (arg0) => {

        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
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

        and('user receives an email/text message with a link to their registered email id/ mobile number', () => {

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

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see (.*) field$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        then('user receives an email/text message with a link to their registered email/phone number', () => {

        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {

        });

        and('user is in “Patient Login” screen', () => {

        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {

        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {

        });

        and('user should able to fill all madantory details and option to choose email', () => {

        });

        and('user receives an email/text message with a link to their registered email id', () => {

        });

        when('user click on the link', () => {

        });

        then('user lands onto “Set New Username and Password” screen', () => {

        });

        and('user should able to view Username field updated with email-id by default', () => {

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

        and(/^user should see text  "(.*)"$/, (arg0) => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered email', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see (.*) field$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        then('user receives an email/text message with a link to their registered email', () => {

        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {

        });

        and('user is in “Patient Login” screen', () => {

        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {

        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {

        });

        and('user should able to fill all madantory details and option to choose email', () => {

        });

        and('user receives an email/text message with a link to their registered email id', () => {

        });

        when('user click on the link', () => {

        });

        then('user lands onto “Set New Username and Password” screen', () => {

        });

        and('user should able to view Username field updated with email-id by default', () => {

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

        and(/^user should see text  "(.*)"$/, (arg0) => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered Phone number', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see (.*) field$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        then('user receives an email/text message with a link to their registered phone number', () => {

        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should lands onto “Patient Login” screen when user click on "Back to Login" link', ({ given, and, when, then }) => {
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

        and('user receives an email/text message with a link to their registered email id/ mobile number', () => {

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

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see "(.*)" link$/, (arg0) => {

        });

        when('user click on Back to Login" link', () => {

        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see "<Enter Code>" field is blank after reload the screen', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {

        });

        and('user is in “Patient Login” screen', () => {

        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {

        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {

        });

        and('user should able to fill all madantory details and option to choose email', () => {

        });

        and('user receives an email/text message with a link to their registered email id', () => {

        });

        when('user click on the link', () => {

        });

        then('user lands onto “Set New Username and Password” screen', () => {

        });

        and('user should able to view Username field updated with email-id by default', () => {

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

        and(/^user should see text  "(.*)"$/, (arg0) => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered Phone number', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see (.*) field$/, (arg0) => {

        });

        when(/^user fiil in  (.*) field$/, (arg0) => {

        });

        then(/^user should see text in (.*) field$/, (arg0) => {

        });

        when('user reload the page', () => {

        });

        then(/^user should see (.*) field blank$/, (arg0) => {

        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user see error screen when internet is unavailable', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {

        });

        and('user is in “Patient Login” screen', () => {

        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {

        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {

        });

        and('user should able to fill all madantory details and option to choose email', () => {

        });

        and('user receives an email/text message with a link to their registered email id', () => {

        });

        when('user click on the link', () => {

        });

        then('user lands onto “Set New Username and Password” screen', () => {

        });

        and('user should able to view Username field updated with email-id by default', () => {

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

        and(/^user should see text  "(.*)"$/, (arg0) => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered Phone number', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see (.*) field$/, (arg0) => {

        });

        when(/^user fiil in  (.*) field$/, (arg0) => {

        });

        then(/^user should see text in (.*) field$/, (arg0) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        then('user should see error screen', () => {

        });
    });


    test('EPIC_EPP-3_STORY_EPP-265 - Verify user see error screen when service is unavailable', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {

        });

        and('user is in “Patient Login” screen', () => {

        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {

        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {

        });

        and('user should able to fill all madantory details and option to choose email', () => {

        });

        and('user receives an email/text message with a link to their registered email id', () => {

        });

        when('user click on the link', () => {

        });

        then('user lands onto “Set New Username and Password” screen', () => {

        });

        and('user should able to view Username field updated with email-id by default', () => {

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

        and(/^user should see text  "(.*)"$/, (arg0) => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered Phone number', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see (.*) field$/, (arg0) => {

        });

        when(/^user fiil in  (.*) field$/, (arg0) => {

        });

        then(/^user should see text in (.*) field$/, (arg0) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        then('user should see error screen', () => {

        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should not see any error when user tap on F12 keyboard in console', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {

        });

        and('user is in “Patient Login” screen', () => {

        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {

        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {

        });

        and('user should able to fill all madantory details and option to choose email', () => {

        });

        and('user receives an email/text message with a link to their registered email id', () => {

        });

        when('user click on the link', () => {

        });

        then('user lands onto “Set New Username and Password” screen', () => {

        });

        and('user should able to view Username field updated with email-id by default', () => {

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

        and(/^user should see text  "(.*)"$/, (arg0) => {

        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {

        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {

        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {

        });

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered Phone number', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see (.*) field$/, (arg0) => {

        });

        when(/^user tap on F(\d+) on keyboard$/, (arg0) => {

        });

        then(/^user should not see any error in console when user tap on F(\d+) keyboard$/, (arg0) => {

        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see "second MFA" screen within 3 second', ({ given, and, when, then }) => {
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

        and('user receives an email/text message with a link to their registered email id/ mobile number', () => {

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

        when(/^user click on "(.*)" button$/, (arg0) => {

        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {

        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        });

        and(/^user should see "(.*)" screen within (\d+) second$/, (arg0, arg1) => {

        });
    });



});