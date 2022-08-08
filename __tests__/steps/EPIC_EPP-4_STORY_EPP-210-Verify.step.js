
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-210.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
    test("EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 5 consecutive invalid password attempts", ({
        given,
        when,
        then,
        and,
      }) => {
        given(/^user user launch the "(.*)" url$/, (arg0) => {

        });

        and('user user navigates to the Patient Portal application', () => {

        });

        when('user user lands onto “Patient Login” screen', () => {

        });

        and(/^user user provides (.*) and (.*) for "(.*)"$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on (.*) button$/, (arg0) => {

        });

        then(/^user should  see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for "(.*)"$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on (.*) button$/, (arg0) => {

        });

        then(/^user should see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for "(.*)"$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on (.*) button$/, (arg0) => {

        });

        then(/^user should  see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for "(.*)"$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on (.*) button$/, (arg0) => {

        });

        then(/^user should  see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for "(.*)"$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on (.*) button$/, (arg0) => {

        });

        then('user account should get locked', () => {

        });

        and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {

        });

        and('user should receive the mail regarding account lock with below email content.', (table) => {

        });
      });
      test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 4 times & valid password attempt for 5th time", ({
        given,
        when,
        then,
        and,
      }) => {
        
      });
      test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 1st time & 2nd time, valid password attempt for 3rd time", ({
        given,
        when,
        then,
        and,
      }) => {
        
      });
      test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 1st time & valid password attempt for 2nd time", ({
        given,
        when,
        then,
        and,
      }) => {
        
      });
      test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 1st time,2nd time, 3rd time & valid password attempt for 4th time", ({
        given,
        when,
        then,
        and,
      }) => {
        
      });
      test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid email and invalid password for 1st time,2nd time, 3rd time & valid phone number and password attempt for 4th time", ({
        given,
        when,
        then,
        and,
      }) => {
        
      });
      test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid phone number and invalid password for 1st time,2nd time, 3rd time & valid Email id and password attempt for 4th time", ({
        given,
        when,
        then,
        and,
      }) => {
        
      });
      test("EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid phone number and invalid password for 1st time,2nd time, & 3 time valid Email id and password", ({
        given,
        when,
        then,
        and,
      }) => {
        
      });
      test("EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 5 consecutive invalid username attempts", ({
        given,
        when,
        then,
        and,
      }) => {
        
      });
      test("EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 2 times invalid username & 3 times invalid password attempts", ({
        given,
        when,
        then,
        and,
      }) => {
        
      });
      test("EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 3 times invalid username & 2 times invalid password attempts", ({
        given,
        when,
        then,
        and,
      }) => {
        
      });
      test("EPIC_EPP-4_STORY_EPP-210 - Verify the error message when internet and service are unavailable", ({
        given,
        when,
        then,
        and,
      }) => {
        
      });
});
