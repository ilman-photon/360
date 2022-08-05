
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
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to click the 'Create Account' link", ({
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

    when(`user lands onto “Patient Login” screen`, () => {
        expect(true).toBeTruthy()
    });
    and("user click the 'Create Account' button", () => {
      expect(true).toBeTruthy()
  });
    then(
      'user should navigate to Registration page.',
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to click the 'Forgot Password' link", ({
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

    when(`user lands onto “Patient Login” screen`, () => {
        expect(true).toBeTruthy()
    });
    and("user click the 'Forgot Password' link", () => {
      expect(true).toBeTruthy()
  });
    then(
      'user should navigate to Forgot password page.',
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the inline error message is displayed if Email or Phone number not filled", ({
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

    when("user/ admin user lands onto \“Patient Login\” screen", () => {
        expect(true).toBeTruthy()
    });
    and("user/admin user provides blank \"<Email or Phone Number>\" and valid \"<password>\"", () => {
      expect(true).toBeTruthy()
  });
    and("user click the \'Login\' Button.", () => {
      expect(true).toBeTruthy()
  });
    then(
      'user should view the error message \'This field is required\'',
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206- Verify whether the inline error message is displayed if password not filled", ({
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

    when(`user/ admin user lands onto \“Patient Login\” screen`, () => {
        expect(true).toBeTruthy()
    });
    and("user/admin user provides valid \"<Email or Phone Number>\" and blank \"<password>\"", () => {
      expect(true).toBeTruthy()
  });
      and("user click the \'Login\' Button.", () => {
        expect(true).toBeTruthy()
    });
    then(
      'user should view the error message \'This field is required\'',
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206- Verify whether the admin user is not able to see the Patient Login page with Continue as a guest button, Don\’t have an account?\” verbiage along with \‘Create Account button and Forgot password link and see Login Button", ({
    given,
    when,
    then,
    and,
  }) => {
    given("admin user launch the \'XXX\' url", () => {
      expect(true).toBeTruthy()
    });

    and("admin user navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });

    when(`admin user lands onto \“Patient Login\” screen`, () => {
        expect(true).toBeTruthy()
    });

    then(
      'admin user should view \"Login\" button',
      () => {
        expect(true).toBeTruthy()
      }
    );
    and("admin user should not view  \'Continue as a guest\' button .", () => {
      expect(true).toBeTruthy()
    });
      and("admin user should not view the  Don\’t have an account?\” verbiage along with \'Create Account\' button", () => {
        expect(true).toBeTruthy()
    });
      and("admin user should not view \'Forgot password\' link .", () => {
        expect(true).toBeTruthy()
    });
  });
  test("EPIC_EPP-4_STORY_EPP-206- Verify whether the inline error message is displayed if Email or Phone Number and  password are not filled", ({
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

    when(`user/ admin user lands onto \“Patient Login\” screen`, () => {
        expect(true).toBeTruthy()
    });
    and("user/admin user provides blank \"<Email or Phone Number>\" and blank \"<password>\"", () => {
      expect(true).toBeTruthy()
  });
  and("user click the \"Login\" Button.", () => {
    expect(true).toBeTruthy()
});
    then(
      'user should view the error message \'This field is required\'',
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user/admin user is able to see the Patient Login page when Internet connection/service is unavailable", ({
    given,
    when,
    then
  }) => {
    given("user/admin user launch the \'XXX\' url", () => {
      expect(true).toBeTruthy()
    });
    when(`user/ admin user navigates to the Patient Portal application`, () => {
        expect(true).toBeTruthy()
    });
    then(
      'user/ admin user should view appropriate error message',
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the Password has the unmask option when Admin typing the Password.", ({
    given,
    when,
    then,
    and,
  }) => {
    given("Admin launch the \'XXX\' url", () => {
      expect(true).toBeTruthy()
    });

    and("Admin navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });

    when(`Admin lands onto \“Patient Login\” screen`, () => {
        expect(true).toBeTruthy()
    });

    and("Admin provides \"<username>\" and \"<password>\"", () => {
      expect(true).toBeTruthy()
  });

    then(
      'Admin password should be masked.',
      () => {
        expect(true).toBeTruthy()
      }
    );
      and("Admin should view unmask option", () => {
        expect(true).toBeTruthy()
      });
      when(`Admin click the Unmask icon`, () => {
        expect(true).toBeTruthy()
      });
      then(
        'entered password should get visible to the Admin',
        () => {
          expect(true).toBeTruthy()
        }
      );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the Admin is able to see the Patient Login page with Email or phone number & Password fields", ({
    given,
    when,
    then,
    and,
  }) => {
    given("Admin launch the \'XXX\' url", () => {
      expect(true).toBeTruthy()
    });

    and("Admin navigates to the Patient Portal application", () => {
        expect(true).toBeTruthy()
    });

    when(`Admin lands onto \“Patient Login\” screen`, () => {
        expect(true).toBeTruthy()
    });

    then(
      'Admin should be able to view \"Email or phone number\" & \"Password fields\"',
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the error message is displaying when the service is unavailable.", ({
    given,
    when,
    then,
    and,
  }) => {
   
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether any error is displaying when we press F12 after navigating to the Patient Login page.", ({
    given,
    when,
    then,
    and,
  }) => {
   
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the page is loading with in 3 seconds", ({
    given,
    when,
    then,
    and,
  }) => {
   
  });
  test("EPIC_EPP-4_STORY_EPP-206-Verify whether the user is able to see the Patient Login page without Internet connection", ({
    given,
    when,
    then,
    and,
  }) => {
   
  });
});
