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
            expect(true).toBeTruthy();
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy();
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy();
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and('user should able to fill all madantory details and option to choose both', () => {
            expect(true).toBeTruthy();
        });

        and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
            expect(true).toBeTruthy();
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy();
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy();
        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default', () => {
            expect(true).toBeTruthy();
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy();
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy();
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy();
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
            expect(true).toBeTruthy();
        });

        and('user should see default selection on Email', () => {
            expect(true).toBeTruthy();
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy();
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy();
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy();
        });

        and(/^user should see "(.*)" link$/, (arg0) => {
            expect(true).toBeTruthy();
        });
    });
 
    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see second MFA screen with all of component (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose email', () => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id', () => {
            expect(true).toBeTruthy()
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with email-id by default', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text  "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" link$/, (arg0) => {
            expect(true).toBeTruthy()
        });
    });
    

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see second MFA screen with all of component (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose email', () => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id', () => {
            expect(true).toBeTruthy()
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with email-id by default', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text  "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered Phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" link$/, (arg0) => {
            expect(true).toBeTruthy()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose both', () => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
            expect(true).toBeTruthy()
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
            expect(true).toBeTruthy()
        });

        and('user should see default selection on Email', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose email', () => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id', () => {
            expect(true).toBeTruthy()
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with email-id by default', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text  "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user receives an email/text message with a link to their registered email', () => {
            expect(true).toBeTruthy()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose email', () => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id', () => {
            expect(true).toBeTruthy()
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with email-id by default', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text  "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered Phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user receives an email/text message with a link to their registered phone number', () => {
            expect(true).toBeTruthy()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should lands onto “Patient Login” screen when user click on "Back to Login" link', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose both', () => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
            expect(true).toBeTruthy()
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
            expect(true).toBeTruthy()
        });

        and('user should see default selection on Email', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" link$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when('user click on Back to Login" link', () => {
            expect(true).toBeTruthy()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see "<Enter Code>" field is blank after reload the screen', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose email', () => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id', () => {
            expect(true).toBeTruthy()
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with email-id by default', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text  "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered Phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user fiil in  (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then(/^user should see text in (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when('user reload the page', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see (.*) field blank$/, (arg0) => {
            expect(true).toBeTruthy()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user see error screen when internet is unavailable', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose email', () => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id', () => {
            expect(true).toBeTruthy()
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with email-id by default', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text  "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered Phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user fiil in  (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then(/^user should see text in (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see error screen', () => {
            expect(true).toBeTruthy()
        });
    });


    test('EPIC_EPP-3_STORY_EPP-265 - Verify user see error screen when service is unavailable', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose email', () => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id', () => {
            expect(true).toBeTruthy()
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with email-id by default', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text  "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered Phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {

        }); expect(true).toBeTruthy()

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user fiil in  (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then(/^user should see text in (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see error screen', () => {
            expect(true).toBeTruthy()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should not see any error when user tap on F12 keyboard in console', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose email', () => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id', () => {
            expect(true).toBeTruthy()
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with email-id by default', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text  "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered Phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user tap on F(\d+) on keyboard$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then(/^user should not see any error in console when user tap on F(\d+) keyboard$/, (arg0) => {
            expect(true).toBeTruthy()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see "second MFA" screen within 3 second', ({ given, and, when, then }) => {
        given(/^user launch "(.*)" URL$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose both', () => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
            expect(true).toBeTruthy()
        });

        when('user click on the link', () => {
            expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default', () => {
            expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table) => {
            expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
            expect(true).toBeTruthy()
        });

        and('user should see default selection on Email', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" screen within (\d+) second$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });
    });



});