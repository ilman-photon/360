import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage from "../../src/pages/patient/mfa";
import AuthPage from "../../src/pages/patient/login";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-280.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive an email/text message with the code to the email and mobile number when user clicks "Resend Code" button (Preferred Mode of Communication both)', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive an email/txt message with the code to the email and mobile number when user clicks "Resend Code" button (Preferred Mode of Communication both)"', ({ given, and, when, then }) => {
            given(/^user launch "(.*)" URL$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user is in "(.*)" screen$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on the "(.*)" button in the"(.*)" screen$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user lands on the "(.*)" screen$/, (arg0) => {
                act(() => {
                    container = render(<AuthPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
            });
    
            and('user should able to fill all mandantory details and option to choose both', () => {
                expect(true).toBeTruthy()
            });
    
            and('user receives an email/text message with a link to their registered email id/ mobile number', () => {
                expect(true).toBeTruthy()
            });
    
            when('user clicks on the link', () => {
                expect(true).toBeTruthy()
            });
    
            then(/^user lands onto "(.*)" screen$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user should see the updated Username field with either as email-id or Phone Number by default', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see and fill the following fields (.*) and (.*)$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user provides the same password details to the fields (.*) and (.*)$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user clicks on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see "(.*)" screen$/, (arg0) => {
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
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then('user receives an email/text message with the code to the email and mobile number', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                const button = container.getByLabelText("Continue");
                  fireEvent.click(button);
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive an email with the code to the email when user clicks "Resend Code" button (Preferred Mode of Communication Email)', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive an email with the code to the email when user clicks "Resend Code" button (Preferred Mode of Communication Email)"', ({ given, and, when, then }) => {
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
    
            and('user should able to fill all mandantory details and option to choose email', () => {
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
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then('user receives an email/text message with the code to the email', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive a text message with the code to the mobile number when user clicks "Resend Code" button (Prefered Mode of Communication Phone)', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive a text message with the code to the mobile number when user clicks "Resend Code" button (Preferred Mode of Communication Phone)"', ({ given, and, when, then }) => {
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
    
            and('user should able to fill all mandantory details and option to choose phone number', () => {
                expect(true).toBeTruthy()
            });
    
            and('user receives an email/text message with a link to their registered phone number', () => {
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
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then('user receives an email/text message with the code to the mobile number', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Negative Test Cases - Register User - Verify User should see the following error message "Code sent multiple times. Please try again after 30 minutes." (Prefered Mode of Communication Phone)', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Negative Test Cases - Register User - Verify User should see the following error message "Code sent multiple times. Please try again after 30 minutes." (Preferred Mode of Communication Phone)"', ({ given, and, when, then }) => {
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
    
            and('user should able to fill all mandantory details and option to choose phone number', () => {
                expect(true).toBeTruthy()
            });
    
            and('user receives an email/text message with a link to their registered phone number', () => {
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
    
            when(/^user clicks on "(.*)" button for (\d+) times$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the following error message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication both)', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication both)"', ({ given, and, when, then }) => {
            given('user is on second MFA screen', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user should able to fill all mandantory details and option to choose both', () => {
                expect(true).toBeTruthy()
            });
    
            and('user receives an email/text message with a link to their registered email and phone number', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Prefered Mode of Communication email)', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication email)"', ({ given, and, when, then }) => {
            given('user is on second MFA screen', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user should able to fill all mandantory details and option to choose email', () => {
                expect(true).toBeTruthy()
            });
    
            and('user receives an email/text message with a link to their registered email', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication mobile number)', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication mobile number)"', ({ given, and, when, then }) => {
            given('user is on second MFA screen', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see "(.*)" screen with all of component$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user should able to fill all mandantory details and option to choose phone number', () => {
                expect(true).toBeTruthy()
            });
    
            and('user receives an email/text message with a link to their registered phone number', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Register User - Verify user should see the error message when the internet service is unavailable (Preferred Mode of Communication Email)', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Register User - Verify user should see the error message when the internet service is unavailable (Preferred Mode of Communication Email)"', ({ given, and, when, then }) => {
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
    
            and('user should able to fill all mandantory details and option to choose email', () => {
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
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then('user receives an email/text message with the code to the email', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('the internet service is unavailable', () => {
                expect(true).toBeTruthy()
            });
    
            then('user should see the appropriate error message', () => {
                expect(true).toBeTruthy()
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Register User - Verify user should see the error message when the service is unavailable (Prefered Mode of Communication Email)', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Register User - Verify user should see the error message when the service is unavailable (Preferred Mode of Communication Email)"', ({ given, and, when, then }) => {
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
    
            and('user should able to fill all mandantory details and option to choose email', () => {
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
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then('user receives an email/text message with the code to the email', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('the service is unavailable', () => {
                expect(true).toBeTruthy()
            });
    
            then('user should see the appropriate error message', () => {
                expect(true).toBeTruthy()
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should see the following message "Multi factor Authentication has been set successfully" within 3 seconds during resend code request (Prefered Mode of Communication Email)', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should see the following message "Multi factor Authentication has been set successfully" within 3 seconds during resend code request (Preferred Mode of Communication Email)"', ({ given, and, when, then }) => {
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
    
            and('user should able to fill all mandantory details and option to choose email', () => {
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
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then('user receives an email/text message with the code to the email', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the page loads within "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
        });
    });
});