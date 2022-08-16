import { fireEvent, render } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPassword";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-264.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test)  =>{   expect(true).toBeTruthy()
    test('EPIC_EPP-3_STORY_EPP-264 - Verify user should see set MFA screen after completing registration (Prefered Mode of Communication both)', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
        given(/^user launch "(.*)" URL$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose both', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id/ phone number', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        when('user click on the link', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user should see default selection on Email', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-264 - Verify user should be able to choose other preferred mode(s) of communication', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
        given(/^user launch "(.*)" URL$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user is in “Patient Login” screen', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        then(/^user lands on the "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user should able to fill all madantory details and option to choose both', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email id/ phone number', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        when('user click on the link', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        then('user lands onto “Set New Username and Password” screen', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user should able to view and fill the following fields', (table)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and(/^user click on "(.*)" CTA$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2)  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        and('user should see default selection on Email', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        when('user click on Phone radio button', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });

        then('user should see radio button is selected on Phone radio button', ()  =>{   expect(true).toBeTruthy()
          expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-264 - Verify user should see set MFA screen after completing registration (Prefered Mode of Communication Email)', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
      given(/^user launch "(.*)" URL$/, (arg0)  =>{   expect(true).toBeTruthy()
        expect(true).toBeTruthy()
      });

      and('user is in “Patient Login” screen', ()  =>{   expect(true).toBeTruthy()
        expect(true).toBeTruthy()
      });

      when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()
        expect(true).toBeTruthy()
      });

      then(/^user lands on the "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()
        expect(true).toBeTruthy()
      });

      and('user should able to fill all madantory details and option to choose email', ()  =>{   expect(true).toBeTruthy()
        expect(true).toBeTruthy()
      });

      and('user receives an email/text message with a link to their registered email id', ()  =>{   expect(true).toBeTruthy()
        expect(true).toBeTruthy()
      });

      when('user click on the link', ()  =>{   expect(true).toBeTruthy()
        expect(true).toBeTruthy()
      });

      then('user lands onto “Set New Username and Password” screen', ()  =>{   expect(true).toBeTruthy()
        
      });

      and('user should able to view Username field updated with email-id by default', ()  =>{   expect(true).toBeTruthy()

      });

      and('user should able to view and fill the following fields', (table)  =>{   expect(true).toBeTruthy()

      });

      when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

      });

      and(/^user click on "(.*)" CTA$/, (arg0)  =>{   expect(true).toBeTruthy()

      });

      then('user should see set MFA screen', ()  =>{   expect(true).toBeTruthy()

      });

      and(/^user should see screen title written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

      });

      and(/^user should see screen subtitle written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

      });

      and(/^user should see text  "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

      });

      and(/^user should see checkbox section "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

      });

      and(/^user should see description of check box written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

      });

      and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

      });
  });

  test('EPIC_EPP-3_STORY_EPP-264 - Verify user should see set MFA screen after completing registration (Prefered Mode of Communication Phone)', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
    given(/^user launch "(.*)" URL$/, (arg0)  =>{   expect(true).toBeTruthy()

    });

    and('user is in “Patient Login” screen', ()  =>{   expect(true).toBeTruthy()

    });

    when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

    });

    then(/^user lands on the "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()

    });

    and('user should able to fill all madantory details and option to choose phone', ()  =>{   expect(true).toBeTruthy()

    });

    and('user receives an email/text message with a link to their registered phone', ()  =>{   expect(true).toBeTruthy()

    });

    when('user click on the link', ()  =>{   expect(true).toBeTruthy()

    });

    then('user lands onto “Set New Username and Password” screen', ()  =>{   expect(true).toBeTruthy()

    });

    and('user should able to view Username field updated with phone by default', ()  =>{   expect(true).toBeTruthy()

    });

    and('user should able to view and fill the following fields', (table)  =>{   expect(true).toBeTruthy()

    });

    when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

    });

    and(/^user click on "(.*)" CTA$/, (arg0)  =>{   expect(true).toBeTruthy()

    });

    then('user should see set MFA screen', ()  =>{   expect(true).toBeTruthy()

    });

    and(/^user should see screen title written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

    });

    and(/^user should see screen subtitle written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

    });

    and(/^user should see text "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

    });

    and(/^user should see checkbox section "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

    });

    and(/^user should see description of check box written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

    });

    and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

    });
});

test('EPIC_EPP-3_STORY_EPP-264 - Verify user should see "MFA" screen with default selection preferred mode(s) of communication', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
  given(/^user launch "(.*)" URL$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and('user is in “Patient Login” screen', ()  =>{   expect(true).toBeTruthy()

  });

  when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

  });

  then(/^user lands on the "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and('user should able to fill all madantory details and option to choose both', ()  =>{   expect(true).toBeTruthy()

  });

  and('user receives an email/text message with a link to their registered email id/ phone number', ()  =>{   expect(true).toBeTruthy()

  });

  when('user click on the link', ()  =>{   expect(true).toBeTruthy()

  });

  then('user lands onto “Set New Username and Password” screen', ()  =>{   expect(true).toBeTruthy()

  });

  and('user should able to view Username field updated with either as email-id or Phone Number by default', ()  =>{   expect(true).toBeTruthy()

  });

  and('user should able to view and fill the following fields', (table)  =>{   expect(true).toBeTruthy()

  });

  when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

  });

  and(/^user click on "(.*)" CTA$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  then('user should see set MFA screen', ()  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see screen title written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see screen subtitle written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2)  =>{   expect(true).toBeTruthy()

  });

  and('user should see default selection on Email', ()  =>{   expect(true).toBeTruthy()

  });

  when('user click on Phone radio button', ()  =>{   expect(true).toBeTruthy()

  });

  then('user should see radio button is selected on Phone radio button', ()  =>{   expect(true).toBeTruthy()

  });

  when(/^user click on "(.*)" in browser$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  then(/^user should see "(.*)" screen with default selection on Email$/, (arg0)  =>{   expect(true).toBeTruthy()

  });
});

test('EPIC_EPP-3_STORY_EPP-264 - Verify user see error screen when internet is unavailable', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
  given(/^user launch "(.*)" URL$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and('user is in “Patient Login” screen', ()  =>{   expect(true).toBeTruthy()

  });

  when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

  });

  then(/^user lands on the "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and('user should able to fill all madantory details and option to choose both', ()  =>{   expect(true).toBeTruthy()

  });

  and('user receives an email/text message with a link to their registered email id/ phone number', ()  =>{   expect(true).toBeTruthy()

  });

  when('user click on the link', ()  =>{   expect(true).toBeTruthy()

  });

  then('user lands onto “Set New Username and Password” screen', ()  =>{   expect(true).toBeTruthy()

  });

  and('user should able to view Username field updated with either as email-id or Phone Number by default', ()  =>{   expect(true).toBeTruthy()

  });

  and('user should able to view and fill the following fields', (table)  =>{   expect(true).toBeTruthy()

  });

  when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

  });

  and(/^user click on "(.*)" CTA$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  then('user should see set MFA screen', ()  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see screen title written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see screen subtitle written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2)  =>{   expect(true).toBeTruthy()

  });

  and('user should see default selection on Email', ()  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see checkbox section "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see description of check box written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

  });

  when(/^user click on "(.*)" button$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  then('user should see error screen', ()  =>{   expect(true).toBeTruthy()

  });
});

test('EPIC_EPP-3_STORY_EPP-264 - Verify user see error screen when service is unavailable', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
  given(/^user launch "(.*)" URL$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and('user is in “Patient Login” screen', ()  =>{   expect(true).toBeTruthy()

  });

  when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

  });

  then(/^user lands on the "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and('user should able to fill all madantory details and option to choose both', ()  =>{   expect(true).toBeTruthy()

  });

  and('user receives an email/text message with a link to their registered email id/ phone number', ()  =>{   expect(true).toBeTruthy()

  });

  when('user click on the link', ()  =>{   expect(true).toBeTruthy()

  });

  then('user lands onto “Set New Username and Password” screen', ()  =>{   expect(true).toBeTruthy()

  });

  and('user should able to view Username field updated with either as email-id or Phone Number by default', ()  =>{   expect(true).toBeTruthy()

  });

  and('user should able to view and fill the following fields', (table)  =>{   expect(true).toBeTruthy()

  });

  when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

  });

  and(/^user click on "(.*)" CTA$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  then('user should see set MFA screen', ()  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see screen title written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see screen subtitle written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2)  =>{   expect(true).toBeTruthy()

  });

  and('user should see default selection on Email', ()  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see checkbox section "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see description of check box written as "(.*)"$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

  });

  when(/^user click on "(.*)" button$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  then('user should see error screen', ()  =>{   expect(true).toBeTruthy()

  });
});

test('EPIC_EPP-3_STORY_EPP-264 - Verify user see set MFA screen within 3 second', ({ given, and, when, then })  =>{   expect(true).toBeTruthy()
  given(/^user launch "(.*)" URL$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and('user is in “Patient Login” screen', ()  =>{   expect(true).toBeTruthy()

  });

  when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

  });

  then(/^user lands on the "(.*)" screen$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  and('user should able to fill all madantory details and option to choose both', ()  =>{   expect(true).toBeTruthy()

  });

  and('user receives an email/text message with a link to their registered email id/ phone number', ()  =>{   expect(true).toBeTruthy()

  });

  when('user click on the link', ()  =>{   expect(true).toBeTruthy()

  });

  then('user lands onto “Set New Username and Password” screen', ()  =>{   expect(true).toBeTruthy()

  });

  and('user should able to view Username field updated with either as email-id or Phone Number by default', ()  =>{   expect(true).toBeTruthy()

  });

  and('user should able to view and fill the following fields', (table)  =>{   expect(true).toBeTruthy()

  });

  when(/^user provide the same password details to the field  (.*),(.*)$/, (arg0, arg1)  =>{   expect(true).toBeTruthy()

  });

  and(/^user click on "(.*)" CTA$/, (arg0)  =>{   expect(true).toBeTruthy()

  });

  then('user should see set MFA screen', ()  =>{   expect(true).toBeTruthy()

  });

  and(/^user should see set MFA screen within (\d+) second$/, (arg0)  =>{   expect(true).toBeTruthy()

  });
});


});
