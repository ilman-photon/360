import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-1022.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"', ({ given, and, when, then }) => {
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
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
    
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
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
    
            });
    
            then('user receives an email/text message with the code to the email and mobile number', () => {
    
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
    
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
    
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
    
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
    
            });
        });
    });
   
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds', ({  }) => {

    
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds"', ({ given, and, when, then }) => {
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
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
    
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
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
    
            });
    
            then('user receives an email/text message with the code to the email and mobile number', () => {
    
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
    
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
    
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
    
            });
    
            then(/^user should see the page loads within "(.*)"$/, (arg0) => {
    
            });
    
            and(/^user should see the following message "(.*)"$/, (arg0) => {
    
            });
        });
    });
   
    test("EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail-id", ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail-id"', ({ given, and, when, then }) => {
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
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
    
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
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
    
            });
    
            then('user receives an email/text message with the code to the email and mobile number', () => {
    
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
    
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
    
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
    
            });
    
            then('user should see the appropriate error message', () => {
    
            });
        });
         
    });
    
    test('EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device using registered mail-id', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"', ({ given, and, when, then }) => {
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
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
    
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
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
    
            });
    
            then('user receives an email/text message with the code to the email and mobile number', () => {
    
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
    
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
    
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
    
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
    
            });
    
            
        });
    });
    
 
   
});
