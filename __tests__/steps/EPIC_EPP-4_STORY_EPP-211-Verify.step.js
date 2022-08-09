import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-211.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-4_STORY_EPP-211 - Verify if user is not able to login with valid credentials when account is locked.", ({
    given,
    when,
    then,
    and,
  }) => {
        test('Verify if user not able to login with valid credentials when account is locked.', ({ given, and, when, then }) => {
          given('user/admin user launch the \'XXX\' url', () => {

          });

          and('user/ admin user navigates to the Patient Portal application', () => {

          });

          when('user/ admin user lands onto “Patient Login” screen', () => {

          });

          and(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {

          });

          and(/^user clicks on "(.*)" button$/, (arg0) => {

          });

          then(/^user should see the message "(.*)"$/, (arg0) => {

          });

          when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {

          });

          and(/^user clicks on "(.*)" button$/, (arg0) => {

          });

          then(/^user should see the message "(.*)"$/, (arg0) => {

          });

          when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {

          });

          and(/^user clicks on "(.*)" button$/, (arg0) => {

          });

          then(/^user should see the message "(.*)"$/, (arg0) => {

          });

          when(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {

          });

          and(/^user clicks on "(.*)" button$/, (arg0) => {

          });

          then(/^user should see the message "(.*)"$/, (arg0) => {

          });

          when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {

          });

          and(/^user clicks on "(.*)" button$/, (arg0) => {

          });

          then('user account should get locked', () => {

          });

          and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {

          });

          when(/^user provides valid  (.*) and (.*) in Login Screen$/, (arg0, arg1) => {

          });

          and(/^user clicks on "(.*)" button$/, (arg0) => {

          });

          then('user should not able to login', () => {

          });

          and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {

          });
      });
    });
  test("EPIC_EPP-4_STORY_EPP-211 - Verify if patient user should not be able to login with invalid credentials when my account is locked.", ({
      given,
      when,
      then,
      and,
    }) => {
      test('Verify if user not be able to login with invalid credentials when account is locked.', ({ given, and, when, then }) => {
        given('user/admin user launch the \'XXX\' url', () => {

        });

        and('user/ admin user navigates to the Patient Portal application', () => {

        });

        when('user/ admin user lands onto “Patient Login” screen', () => {

        });

        and(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then(/^user should see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then(/^user should see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then(/^user should see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then(/^user should see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then('user account should get locked', () => {

        });

        and('user should see the message "Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {

        });

        when(/^user provides invalid  (.*) and (.*)$/, (arg0, arg1) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then('user should not able to login', () => {

        });

        and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account"', () => {

        });
    });
  });
  test('EPIC_EPP-4_STORY_EPP-211 - "Verify if user not be able to login with Invalid Email or Phone Number & valid Password when account is locked".', ({
    given,
    when,
    then,
    and,
  }) => {
    test('Verify if user should not be able to login with Invalid username & valid Password when account is locked.', ({ given, and, when, then }) => {
      given('user/admin user launch the \'XXX\' url', () => {

      });

      and('user/ admin user navigates to the Patient Portal application', () => {

      });

      when('user/ admin user lands onto “Patient Login” screen', () => {

      });

      and(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {

      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {

      });

      then(/^user should be able to see the message "(.*)"$/, (arg0) => {

      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {

      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {

      });

      then(/^user should be able to see the message "(.*)"$/, (arg0) => {

      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {

      });

      then(/^user should  see the message "(.*)"$/, (arg0) => {

      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {

      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {

      });

      then(/^user should  see the message "(.*)"$/, (arg0) => {

      });

      when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {

      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {

      });

      then('user account should get locked', () => {

      });

      and('user should see the message "Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {

      });

      when(/^user provides Invalid  (.*) and valid (.*)$/, (arg0, arg1) => {

      });

      and(/^user clicks on "(.*)" button$/, (arg0) => {

      });

      then('user should not able to login', () => {

      });

      and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {

      });
  });
    });
    test("EPIC_EPP-4_STORY_EPP-211 - Verify if user not be able to login with valid Email or Phone Number & Invalid Password when account is locked.", ({
      given,
      when,
      then,
      and,
    }) => {
      test('Verify if user should not be able to login with valid username & Invalid Password when account is locked.', ({ given, and, when, then }) => {
        given('user/admin user launch the \'XXX\' url', () => {

        });

        and('user/ admin user navigates to the Patient Portal application', () => {

        });

        when('user/ admin user lands onto “Patient Login” screen', () => {

        });

        and(/^user provides (.*) and Invalid (.*) for (\d+)st time$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then(/^user should  to see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for (\d+)nd time$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then(/^user should  see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then(/^user should  see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then(/^user should  see the message "(.*)"$/, (arg0) => {

        });

        when(/^user provides (.*) and Invalid (.*) for (\d+)rd time$/, (arg0, arg1, arg2) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then('user account should get locked', () => {

        });

        and('user should see the message "Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {

        });

        when(/^user provides valid  (.*) and invalid (.*)$/, (arg0, arg1) => {

        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {

        });

        then('user should not able to login', () => {

        });

        and('user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”', () => {

        });
    });
      });
});
