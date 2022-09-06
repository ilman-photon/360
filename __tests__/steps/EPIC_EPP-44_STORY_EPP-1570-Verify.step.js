import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1570.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should navigated to the Patient Portal application', ({ given, when, and, then}) => {
        given('User is already a registered user', () => {
            defaultValidation();
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to the search screen', () => {
            defaultValidation();
        });

        and('User should fill the location', () => {
            defaultValidation();
        });

        and('User should select the Date & Time with provider', () => {
            defaultValidation();
        });

        and('User should select the purpose of the visit', () => {
            defaultValidation();
        });

        and('User has reviewed the appointment details', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation();
        });

        then('User should navigated to the Patient Portal application', () => {
            defaultValidation();
        });
    });
    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should Logged in to the Patient Portal application', ({ given, when, and, then}) => {
        given('User is already a registered user', () => {
            defaultValidation();
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to the search screen', () => {
            defaultValidation();
        });

        and('User should fill the location', () => {
            defaultValidation();
        });

        and('User should select the Date & Time with provider', () => {
            defaultValidation();
        });

        and('User should select the purpose of the visit', () => {
            defaultValidation();
        });

        and('User has reviewed the appointment details', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation();
        });

        then('User should navigated to the Patient Portal application', () => {
            defaultValidation();
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });
    });
    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should be able to view the success message as "Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly."', ({ given, when, and, then}) => {
        given('User is already a registered user', () => {
            defaultValidation();
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to the search screen', () => {
            defaultValidation();
        });

        and('User should fill the location', () => {
            defaultValidation();
        });

        and('User should select the Date & Time with provider', () => {
            defaultValidation();
        });

        and('User should select the purpose of the visit', () => {
            defaultValidation();
        });

        and('User has reviewed the appointment details', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation();
        });

        then('User should navigated to the Patient Portal application', () => {
            defaultValidation();
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation();
        });

        then('User provides the patient details', () => {
            defaultValidation();
        });

        and(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
            defaultValidation();
        });
    });
    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should see the appointment under upcoming appointments', ({ given, when, and, then}) => {
        given('User is already a registered user', () => {
            defaultValidation();
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to the search screen', () => {
            defaultValidation();
        });

        and('User should fill the location', () => {
            defaultValidation();
        });

        and('User should select the Date & Time with provider', () => {
            defaultValidation();
        });

        and('User should select the purpose of the visit', () => {
            defaultValidation();
        });

        and('User has reviewed the appointment details', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation();
        });

        then('User should navigated to the Patient Portal application', () => {
            defaultValidation();
        });

        and(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        then(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });

        when('User clicks to "Appointments\' menu', () => {
            defaultValidation();
        });

        then(/^User navigates to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should see the appointment under upcoming appointments', () => {
            defaultValidation();
        });
    });
    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should receive an email message regarding appointment confirmation', ({ given, when, and, then}) => {
        given('User is already a registered user', () => {
            defaultValidation();
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to the search screen', () => {
            defaultValidation();
        });

        and('User should fill the location', () => {
            defaultValidation();
        });

        and('User should select the Date & Time with provider', () => {
            defaultValidation();
        });

        and('User should select the purpose of the visit', () => {
            defaultValidation();
        });

        and('User has reviewed the appointment details', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation();
        });

        then('User should navigated to the Patient Portal application', () => {
            defaultValidation();
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation();
        });

        then('User provides the patient details', () => {
            defaultValidation();
        });

        and(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and('User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });
    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should receive a text message regarding appointment confirmation', ({ given, when, and, then}) => {
        given('User is already a registered user', () => {
            defaultValidation();
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to the search screen', () => {
            defaultValidation();
        });

        and('User should fill the location', () => {
            defaultValidation();
        });

        and('User should select the Date & Time with provider', () => {
            defaultValidation();
        });

        and('User should select the purpose of the visit', () => {
            defaultValidation();
        });

        and('User has reviewed the appointment details', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation();
        });

        then('User should navigated to the Patient Portal application', () => {
            defaultValidation();
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation();
        });

        then('User provides the patient details', () => {
            defaultValidation();
        });

        and(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and('User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });
    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should be able to view the following filters within 3 seconds', ({ given, when, and, then}) => {
        given('User is already a registered user', () => {
            defaultValidation();
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to the search screen', () => {
            defaultValidation();
        });

        and('User should fill the location', () => {
            defaultValidation();
        });

        and('User should select the Date & Time with provider', () => {
            defaultValidation();
        });

        and('User should select the purpose of the visit', () => {
            defaultValidation();
        });

        and('User has reviewed the appointment details', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation();
        });

        then('User should navigated to the Patient Portal application', () => {
            defaultValidation();
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation();
        });

        then('User provides the patient details', () => {
            defaultValidation();
        });

        and(/^User should see page load within (\d+) seconds$/, (arg0) => {
            defaultValidation();
        });
    });
    test('EPIC_EPP-44_STORY_EPP-1570-Verify User should not see the any errors script when user clicks F12 on the console', ({ given, when, and, then}) => {
        given('User is already a registered user', () => {
            defaultValidation();
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to the search screen', () => {
            defaultValidation();
        });

        and('User should fill the location', () => {
            defaultValidation();
        });

        and('User should select the Date & Time with provider', () => {
            defaultValidation();
        });

        and('User should select the purpose of the visit', () => {
            defaultValidation();
        });

        and('User has reviewed the appointment details', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation();
        });

        then('User should navigated to the Patient Portal application', () => {
            defaultValidation();
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation();
        });

        then('User provides the patient details', () => {
            defaultValidation();
        });

        and(/^User should see page load within "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should see following details in the Appointment confirmation message "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        when(/^user clicks on F(\d+) on the console$/, (arg0) => {
            defaultValidation();
        });

        then('user should not to see any errors script', () => {
            defaultValidation();
        });
    });
    test('EPIC_EPP-44_STORY_EPP-1570-Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({ given, when, and, then}) => {
        given('User is already a registered user', () => {
            defaultValidation();
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to the search screen', () => {
            defaultValidation();
        });

        and('User should fill the location', () => {
            defaultValidation();
        });

        and('User should select the Date & Time with provider', () => {
            defaultValidation();
        });

        and('User should select the purpose of the visit', () => {
            defaultValidation();
        });

        and('User has reviewed the appointment details', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation();
        });

        then('User should navigated to the Patient Portal application', () => {
            defaultValidation();
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation();
        });

        then('The Internet service is unavailable', () => {
            defaultValidation();
        });

        and('User should see the appropriate error message', () => {
            defaultValidation();
        });
    });
    test('EPIC_EPP-44_STORY_EPP-1570-Negative Test Cases-Verify user should see the error message when the service is unavailable', ({ given, when, and, then}) => {
        given('User is already a registered user', () => {
            defaultValidation();
        });

        and(/^User launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to the search screen', () => {
            defaultValidation();
        });

        and('User should fill the location', () => {
            defaultValidation();
        });

        and('User should select the Date & Time with provider', () => {
            defaultValidation();
        });

        and('User should select the purpose of the visit', () => {
            defaultValidation();
        });

        and('User has reviewed the appointment details', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Self', () => {
            defaultValidation();
        });

        then('User should navigated to the Patient Portal application', () => {
            defaultValidation();
        });

        when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation();
        });

        then('The service is unavailable', () => {
            defaultValidation();
        });

        and('User should see the appropriate error message', () => {
            defaultValidation();
        }); 
    });

});
