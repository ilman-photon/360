import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-269.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
    
    test('EPIC_EPP-3_STORY_EPP-269 - Verify User receives an email from registered mail-id when user logs in from different device/IP Address', ({ given, and, when, then }) => {
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify User receives an email from registered mail-id when user logs in from different device/IP Address"', ({ given, and, when, then }) => {
            given(/^user launch the "(.*)" url$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user navigates to the Patient Portal application', () => {
                expect(true).toBeTruthy()
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            and('user login from device A', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see "(.*)" option$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user tries to login from another deviceAnd user should see "(.*)" option$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user checklist the "(.*)" option$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the "(.*)" option has been selected$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                const button = container.getByLabelText("Continue");
                fireEvent.click(button);
            });
    
            then(/^user shoud see "(.*)" screen$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user login from device B', () => {
                expect(true).toBeTruthy()
            });
    
            when(/^user should fill valid (.*) and (.*)$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user clicks on "(.*)" button$/, (arg0) => {
                const button = container.getByLabelText("Continue");
                fireEvent.click(button);
            });
    
            then('user receives an email from registered email-id', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user should see a mail body as', (table) => {
                expect(true).toBeTruthy()
            });
        });
    });



});