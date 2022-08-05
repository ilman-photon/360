
import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/features/Patient Portal/Sprint2/EPP-206.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the \'XXX\' url", () => {
      expect(true).toBeTruthy()
    });

    and("user navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });

    when(`user lands onto \“Patient Login\” screen`, () => {
        expect(true).toBeTruthy()
    });

    then(
      'user should be able to view \"Email or phone number\" & \"Password fields"',
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the Password is getting mask when user typing the Password.", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the \'XXX\' url", () => {
      expect(true).toBeTruthy()
    });

    and("user navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });

    when(`user lands onto \“Patient Login\” screen`, () => {
        expect(true).toBeTruthy()
    });
    and("user provides \"<Email or Phone Number>\" and \"<password>\"", () => {
      expect(true).toBeTruthy()
    });
    then(
      'entered password should be masked.',
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the Password has the unmask option when user typing the Password.", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the \'XXX\' url", () => {
      expect(true).toBeTruthy()
    });

    and("user navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });

    when(`user lands onto \“Patient Login\” screen`, () => {
        expect(true).toBeTruthy()
    });
      and("user provides \"<username>\" and \"<password>\"", () => {
        expect(true).toBeTruthy()
    });
    then(
      'entered password should be masked.',
      () => {
        expect(true).toBeTruthy()
      }
    );
    and("user should view unmask option", () => {
      expect(true).toBeTruthy()
      });
      when(`user click the Unmask icon`, () => {
        expect(true).toBeTruthy()
        });

        then(
          'entered password should get visible to the user',
          () => {
            expect(true).toBeTruthy()
          }
        );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to see the Patient Login page with Login button, Continue as  a guest button, Don’t have an account?” verbiage along with ‘Create Account button and Forgot password link", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user user launch the 'XXX' url", () => {
      expect(true).toBeTruthy()
    });

    and("user navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });

    when(`user lands onto “Patient Login” screen`, () => {
        expect(true).toBeTruthy()
    });
    then(
      'user should able to view \'Login\' button .',
      () => {
        expect(true).toBeTruthy()
      }
    );
      and("user should able to view  \'Continue as Guest\' button .", () => {
            expect(true).toBeTruthy()
        });
      and("user should able to view the  Don\’t have an account?\” verbiage along with \'Create Account\' button", () => {
        expect(true).toBeTruthy()
        });
        and("user should able to view \'Forgot password\' link .", () => {
          expect(true).toBeTruthy()
      });
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to Login as Guest User.", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user  launch the \'XXX\' url", () => {
      expect(true).toBeTruthy()
    });

    and("user navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });

    when(`user lands onto \“Patient Login\” screen`, () => {
        expect(true).toBeTruthy()
    });
    and("user click the \'Continues as a guest\' button", () => {
      expect(true).toBeTruthy()
    });
    then(
      'user should view the mentioned fields like First Name, Last Name, Date of Birth, Email, Phone number.',
      () => {
        expect(true).toBeTruthy()
      }
    );
    and("user should allow to enter the <\"FirstName \">", () => {
      expect(true).toBeTruthy()
    });
    and("user should allow to enter the  <\"LastName \">", () => {
      expect(true).toBeTruthy()
    });
    and("user should allow to enter the  <\"DateofBirth \">", () => {
      expect(true).toBeTruthy()
    });
    and("user should allow to enter the  <\"Email \">", () => {
      expect(true).toBeTruthy()
    });
    and("user should allow to enter the  <\"PhoneNumber \">", () => {
      expect(true).toBeTruthy()
    });
    and("user click the 'Login ' button.", () => {
      expect(true).toBeTruthy()
    });
    then(
      'user should view the Home/Dashboard Page',
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
});
