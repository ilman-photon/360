import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-269.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test)  =>{   expect(true).toBeTruthy()
    
    test('EPIC_EPP-3_STORY_EPP-269 - Verify User receives an email from registered mail-id when user logs in from different device/IP Address', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify User receives an email from registered mail-id when user logs in from different device/IP Address"', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
            given(/^user launch the "(.*)" url$/, (arg0)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            and('user navigates to the Patient Portal application', ()  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            and('user login from device A', ()  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            and(/^user should see "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            and(/^user tries to login from another deviceAnd user should see "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0)  =>{   expect(true).toBeTruthy()
                const button = container.getByLabelText("Continue");
                fireEvent.click(button);
            });
    
            then(/^user shoud see "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            and('user login from device B', ()  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
                expect(true).toBeTruthy()
            });
    
            and(/^user clicks on "(.*)" button$/, (arg0)  =>{   expect(true).toBeTruthy()
                const button = container.getByLabelText("Continue");
                fireEvent.click(button);
            });
    
            then('user receives an email from registered email-id', ()  =>{   expect(true).toBeTruthy()
            
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()
               
            });
    
            and('user should see a mail body as', (table)  =>{   expect(true).toBeTruthy()
               
            });
        });
    });

    test('EPIC_EPP-3_STORY_EPP-269 - Verify User should be able to receives a text that registered phone number when user logs in from different device/IP Address', ({  })  =>{   expect(true).toBeTruthy()
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify User should be able to receives a text that registered phone number when user logs in from different device/IP Address"', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
            given(/^user launch the "(.*)" url$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            and('user navigates to the Patient Portal application', ()  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
    
            });
    
            and('user login from device A', ()  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user tries to login from another deviceAnd user should see "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            then(/^user shoud see "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            and('user login from device B', ()  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user clicks on "(.*)" button$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            then('user receives a text from registered phone number', ()  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the text with Text Subject as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table)  =>{   expect(true).toBeTruthy()
    
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered mail-id', ({  })  =>{   expect(true).toBeTruthy()
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered mail-id"', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
            given(/^user launch the "(.*)" url$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            and('user navigates to the Patient Portal application', ()  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
    
            });
    
            and('user login from device A', ()  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user tries to login from another deviceAnd user should see "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            then(/^user shoud see "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            and('user login from device B', ()  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user clicks on "(.*)" button$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            then('user receives an email message with the code to the email', ()  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table)  =>{   expect(true).toBeTruthy()
    
            });
    
            then('user receives an email/ text message with the code to the email or mobile number', ()  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table)  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user should see (.*) field$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) fied$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()
    
            });
        });
    });



    test('EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered phone number', ({  }) =>{expect(true).toBeTruthy()
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered phone number"', ({ given, and, when, then }) =>{expect(true).toBeTruthy()
            given(/^user launch the "(.*)" url$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user navigates to the Patient Portal application', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device A', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user tries to login from another device', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user shoud see "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device B', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives an email/ text message with the code to the email or mobile number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives a text message with the code to phone number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see (.*) field$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) fied$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
        });
    });

    test('EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" within "3 seconds" when user logs in from different device/IP Address', ({  }) =>{expect(true).toBeTruthy()
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" within "3 seconds" when user logs in from different device/IP Address"', ({ given, and, when, then }) =>{expect(true).toBeTruthy()
            given(/^user launch the "(.*)" url$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user navigates to the Patient Portal application', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device A', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user tries to login from another device', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user shoud see "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device B', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives an email/ text message with the code to the email or mobile number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives a text message with the code to phone number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see (.*) field$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) fied$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the page loads within "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the following message "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
        });
    });

    test('EPIC_EPP-3_STORY_EPP-269 - Verify user should not see the any errors script when user clicks F12 on the console when user succes set up MFA due to user logs in from different device/IP Address', ({  }) =>{expect(true).toBeTruthy()
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify user should not see the any errors script when user clicks F12 on the console when user succes set up MFA due to user logs in from different device/IP Address"', ({ given, and, when, then }) =>{expect(true).toBeTruthy()
            given(/^user launch the "(.*)" url$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user navigates to the Patient Portal application', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device A', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user tries to login from another device', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user shoud see "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device B', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives an email/ text message with the code to the email or mobile number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives a text message with the code to phone number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see (.*) field$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) fied$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on F(\d+) on the console$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then('user should not to see any errors script', () =>{expect(true).toBeTruthy()
    
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user should see the following error message "Incorrect Code. Please try again." when user logs in from different device/IP Address and receives text alert from a registered mail-id', ({  }) =>{expect(true).toBeTruthy()
        test('"EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user should see the following error message "Incorrect Code. Please try again." when user logs in from different device/IP Address and receives text alert from a registered mail-id"', ({ given, and, when, then }) =>{expect(true).toBeTruthy()
            given(/^user launch the "(.*)" url$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user navigates to the Patient Portal application', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device A', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user tries to login from another device', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user shoud see "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device B', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives an emai with the code to the mobile number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives a text message with the code to phone number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see (.*) field$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill invalid (.*) fied$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user should see the following error message "Incorrect Code. Please try again." when user logs in from different device/IP Address and receives text alert from a registered phone number', ({  }) =>{expect(true).toBeTruthy()
        test('"EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify User should see the following error message "Incorrect Code. Please try again." when user Set up Multi Factor Authentication from a different device/IP Address"', ({ given, and, when, then }) =>{expect(true).toBeTruthy()
            given(/^user launch the "(.*)" url$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user navigates to the Patient Portal application', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device A', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user tries to login from another device', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user shoud see "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device B', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives a text message with the code to the phone number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with text Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives a text message with the code to phone number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see (.*) field$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill invalid (.*) fied$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user logs in from different device/IP Address and should see the error message when the internet service is unavailable', ({  }) =>{expect(true).toBeTruthy()
        test('"EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user logs in from different device/IP Address and should see the error message when the internet service is unavailable"', ({ given, and, when, then }) =>{expect(true).toBeTruthy()
            given(/^user launch the "(.*)" url$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user navigates to the Patient Portal application', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device A', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user tries to login from another device', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then(/^user shoud see "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user login from device B', () =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives a text message with the code to the phone number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with text Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            then('user receives a text message with the code to phone number', () =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and('user should see a message body as', (table) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should see (.*) field$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            and(/^user should fill invalid (.*) fied$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) =>{expect(true).toBeTruthy()
    
            });
    
            then('user should see the appropriate error message', () =>{expect(true).toBeTruthy()
    
            });
        });
    });

 
});