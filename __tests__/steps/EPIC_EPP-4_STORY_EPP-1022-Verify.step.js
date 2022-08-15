import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage from "../../src/pages/patient/mfa";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-1022.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"', ({ given, and, when, then }) => {
            let container, login;
            const mock = new MockAdapter(axios);
            const element = document.createElement("div");
            given(/^user launch the "(.*)" url$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user navigates to the Patient Portal application', () => {
                expect(true).toBeTruthy()
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) => {
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) field with the email$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) field$/, (arg0) => {
                const usernameField = container.getByLabelText("emailUserLabel");
                const passwordField = container.getByLabelText("passwordLabel");
                fireEvent.change(usernameField, { target: { value: "wrongUserName" } });
                fireEvent.change(passwordField, { target: { value: "validPassword" } });
                expect(usernameField.value).not.toEqual("validUsername");
                expect(passwordField.value).toEqual("validPassword");
            });
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
                const remeberMeLabe = container.getByText("Remember me");
                expect("Remember me").toEqual(remeberMeLabe.textContent);
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                const Confirm = container.getByRole("button", { name: /Confirm/i });
                fireEvent.click(Confirm);
            });
    
            then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                const objCheckBox = container.getByText("Select a method");
                expect("Select a method").toEqual(objCheckBox.textContent);
            });
    
            and(/^user should see checkbox section "(.*)"$/, (arg0) => {
                const objCheckBox = container.getByText("Select a method");
                expect("Select a method").toEqual(objCheckBox.textContent);
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
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
        });
    });
   
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds', ({  }) => {

    
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds"', ({ given, and, when, then }) => {
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
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
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
   
    test("EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail-id", ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail-id"', ({ given, and, when, then }) => {
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
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
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
                expect(true).toBeTruthy()
            });
    
            then('user should see the appropriate error message', () => {
                expect(true).toBeTruthy()
            });
        });
         
    });
    
    test('EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device using registered mail-id', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"', ({ given, and, when, then }) => {
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
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
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
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            
        });
    });
    
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using phone number', ({  }) => {
        
    });
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered phone number within 3 seconds', ({  }) => {

    });
    test('EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered phone number', ({  }) => {

    });
    test('EPIC_EPP-3_STORY_EPP-1022-Negative -Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device without being asked for MFA using registered phone number', ({  }) => {

    });
});
