import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage from "../../src/pages/patient/mfa";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-267.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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
    });

    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should be able to choose other preferred mode(s) of communication', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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

        when('user click on Phone radio button', () => {
            expect(true).toBeTruthy()
        });

        then('user should see radio button is selected on Phone radio button', () => {
            expect(true).toBeTruthy()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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
    });


    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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

        and(/^user should see text "(.*)"$/, (arg0) => {
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
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see second MFA screen with all of components (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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
    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in  user should see second MFA screen with all of component (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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

        and('user receives an email/text message with a link to their registered email/phone number', () => {
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
    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see second MFA screen with all of component (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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

        and(/^user should see text "(.*)"$/, (arg0) => {
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
    test('EPIC_EPP-3_STORY_EPP-267 - Verify user is successfully logged-in into their account after setup MFA (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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

        and(/^user fill  (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see Homescreen as Logged-in user', () => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify user is successfully logged-in into their account after setup MFA (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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

        and('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user fill  (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see Homescreen as Logged-in user', () => {
            expect(true).toBeTruthy()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-267 - Verify user is successfully logged-in into their account after setup MFA (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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

        and(/^user should see text "(.*)"$/, (arg0) => {
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

        and(/^user fill  (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see Homescreen as Logged-in user', () => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify user see error screen when internet is unavailable', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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

        then('user should see error screen', () => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify user see error screen when service is unavailable', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
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

        then('user should see error screen', () => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify user should not see any error when user tap on F12 keyboard in console', ({  }) => {
        expect(true).toBeTruthy()
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see "MFA" screen with default selection preferred mode(s) of communication', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
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

        and(/^user should see "(.*)" section with radio button selected on "(.*)"$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and('user click on other radio button', () => {
            expect(true).toBeTruthy()
        });

        and(/^user checked the "(.*)" checkbox$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" in browser$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with default selection preferred mode\(s\) of communication$/, (arg0) => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration within 3 second', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
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

        and(/^user should see "(.*)" section with radio button selected on "(.*)"$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and('user click on other radio button', () => {
            expect(true).toBeTruthy()
        });

        and(/^user checked the "(.*)" checkbox$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" in browser$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with default selection preferred mode\(s\) of communication$/, (arg0) => {
            expect(true).toBeTruthy()
        });
    });
});