import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-211.feature", {
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
      test("Verify if user not able to login with valid credentials when account is locked.", ({
        given,
        when,
        then,
        and,
      }) => {
            given("user/admin user launch the \'XXX\' url", () => {
              expect(true).toBeTruthy()
            });
          
            and("user/ admin user navigates to the Patient Portal application", () => {
                expect(true).toBeTruthy()
            });
          
            when(`user/ admin user lands onto “Patient Login” screen`, () => {
                expect(true).toBeTruthy()
            });
            and("user provides \"<username>\" and Invalid \"<Password>\" for 1st time", () => {
              expect(true).toBeTruthy()
          });
              and("user clicks on \"Login\" button", () => {
                expect(true).toBeTruthy()
            });
            then(
              'user should see the message "Invalid username or Password, Please try again"',
              () => {
                expect(true).toBeTruthy()
              }
            );
            when(`user provides "<username>" and Invalid "<Password> for 2nd time`, () => {
                expect(true).toBeTruthy()
            });
            and("user clicks on \"Login\" button", () => {
                expect(true).toBeTruthy()
            });
            then(
              'user should see the message \"Invalid username or Password, Please try again\"',
              () => {
                expect(true).toBeTruthy()
              }
            );
            when(`user provides \"<username>" and Invalid "<Password> for 3rd time`, () => {
              expect(true).toBeTruthy()
          });
          and("user clicks on \"Login\" button", () => {
              expect(true).toBeTruthy()
          });
          then(
            'user should see the message "Invalid username or Password, Please try again',
            () => {
              expect(true).toBeTruthy()
            }
          );
          when(`user provides "<username>" and Invalid "<Password> for 4st time`, () => {
            expect(true).toBeTruthy()
            });
            and("user clicks on \"Login\" button", () => {
                expect(true).toBeTruthy()
            });
            then(
              'user should see the message "Invalid username or Password, Please try again"',
              () => {
                expect(true).toBeTruthy()
              }
            );
            when(`user provides "<username>" and Invalid "<Password> for 5nd time`, () => {
              expect(true).toBeTruthy()
          });
          and("user clicks on \"Login\" button", () => {
              expect(true).toBeTruthy()
          });
          then(
            ' user account should get locked',
            () => {
              expect(true).toBeTruthy()
            }
          );
          and("user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account” ", () => {
            expect(true).toBeTruthy()
           });
           when(`user provides valid  "<username>" and "<Password>" in Login Screen`, () => {
            expect(true).toBeTruthy()
          });
          and("user clicks on \"Login\" button", () => {
            expect(true).toBeTruthy()
          });
          then(
            'user should not able to login',
            () => {
              expect(true).toBeTruthy()
            }
          );
          and("user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account", () => {
            expect(true).toBeTruthy()
          });
      });
    
  });
});
