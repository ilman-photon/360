import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1571.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should input the mandatory fields', () => {
            defaultValidation();
        });

        and('User should setting the password', () => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
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

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should input the mandatory fields', () => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated "(.*)"screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should fill (\d+) questions$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should input valid (.*) and (.*) fields$/, (arg0, arg1) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should see the sucessful message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^User shhould see "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should fill valid (.*) and (.*) fields$/, (arg0, arg1) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
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

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User select on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to provide basic details', () => {
            defaultValidation();
        });

        and('User should see the following fields as below:', (table) => {
            defaultValidation();
        });

        and('User should see the option to submit the same', () => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" option$/, (arg0) => {
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

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });   
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment - within 3 seconds', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see page load within "(.*)"$/, (arg0) => {
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

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment - within 3 seconds', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should input the mandatory fields', () => {
            defaultValidation();
        });

        and('User should setting the password', () => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should see page load within "(.*)"$/, (arg0) => {
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

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment - within 3 seconds', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should input the mandatory fields', () => {
            defaultValidation();
        });

        and('User should setting the password', () => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should see page load within "(.*)"$/, (arg0) => {
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

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment - within 3 seconds', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should input the mandatory fields', () => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated "(.*)"screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should fill (\d+) questions$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should input valid (.*) and (.*) fields$/, (arg0, arg1) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should see the sucessful message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^User shhould see "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should fill valid (.*) and (.*) fields$/, (arg0, arg1) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should see page load within "(.*)"$/, (arg0) => {
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

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment - within 3 seconds', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User select on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to provide basic details', () => {
            defaultValidation();
        });

        and('User should see the following fields as below:', (table) => {
            defaultValidation();
        });

        and('User should see the option to submit the same', () => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should see page load within "(.*)"$/, (arg0) => {
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

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        when(/^user clicks on F(\d+) on the console$/, (arg0) => {
            defaultValidation();
        });

        then('user should not to see any errors script', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation();
        });

        then('User provides the patient details', () => {
            defaultValidation();
        });

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should input the mandatory fields', () => {
            defaultValidation();
        });

        and('User should setting the password', () => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });

        when(/^user clicks on F(\d+) on the console$/, (arg0) => {
            defaultValidation();
        });

        then('user should not to see any errors script', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation();
        });

        then('User provides the patient details', () => {
            defaultValidation();
        });

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should input the mandatory fields', () => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated "(.*)"screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should fill (\d+) questions$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should input valid (.*) and (.*) fields$/, (arg0, arg1) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should see the sucessful message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^User shhould see "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should fill valid (.*) and (.*) fields$/, (arg0, arg1) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });

        when(/^user clicks on F(\d+) on the console$/, (arg0) => {
            defaultValidation();
        });

        then('user should not to see any errors script', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation();
        });

        then('User provides the patient details', () => {
            defaultValidation();
        });

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User select on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to provide basic details', () => {
            defaultValidation();
        });

        and('User should see the following fields as below:', (table) => {
            defaultValidation();
        });

        and('User should see the option to submit the same', () => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to Patient Dashboard', () => {
            defaultValidation();
        });

        when(/^user clicks on F(\d+) on the console$/, (arg0) => {
            defaultValidation();
        });

        then('user should not to see any errors script', () => {
            defaultValidation();
        });

        when('User selects that the appointment is for Someone Else', () => {
            defaultValidation();
        });

        then('User provides the patient details', () => {
            defaultValidation();
        });

        and('User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”', () => {
            defaultValidation();
        });

        and('User should see this appointment under upcoming appointments', () => {
            defaultValidation();
        });

        and('And User should receive an email message regarding appointmnet confirmation as below:', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Login screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message', ({ given, when, and, then }) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        then('The Internet service is unavailable', () => {
            defaultValidation();
        });

        and('User should see the appropriate error message', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Create Account screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message', ({given, when, and, then}) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should input the mandatory fields', () => {
            defaultValidation();
        });

        and('User should setting the password', () => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then('The Internet service is unavailable', () => {
            defaultValidation();
        });

        and('User should see the appropriate error message', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Forgot Password screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message', ({given, when, and, then}) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should input the mandatory fields', () => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated "(.*)"screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should fill (\d+) questions$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should input valid (.*) and (.*) fields$/, (arg0, arg1) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should see the sucessful message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^User shhould see "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should fill valid (.*) and (.*) fields$/, (arg0, arg1) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" buttonThen The Internet service is unavailable$/, (arg0) => {
            defaultValidation();
        });

        and('User should see the appropriate error message', () => {
            defaultValidation();
        });
    });


    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Continue as Guest screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message', ({given, when, and, then}) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User select on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to provide basic details', () => {
            defaultValidation();
        });

        and('User should see the following fields as below:', (table) => {
            defaultValidation();
        });

        and('User should see the option to submit the same', () => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then('The Internet service is unavailable', () => {
            defaultValidation();
        });

        and('User should see the appropriate error message', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Login screen with different option to sync the appointment - When the service is unavailable user should see the following error message', ({given, when, and, then}) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        then('The Internet service is unavailable', () => {
            defaultValidation();
        });

        and('User should see the appropriate error message', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Create Account screen with different option to sync the appointment - When the service is unavailable user should see the following error message', ({given, when, and, then}) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should input the mandatory fields', () => {
            defaultValidation();
        });

        and('User should setting the password', () => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" buttonThen The Internet service is unavailable$/, (arg0) => {
            defaultValidation();
        });

        and('User should see the appropriate error message', () => {
            defaultValidation();
        });
    });


    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Forgot Password screen with different option to sync the appointment - When the service is unavailable user should see the following error message', ({given, when, and, then}) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and('User should input the mandatory fields', () => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated "(.*)"screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should see the "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should fill (\d+) questions$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should input valid (.*) and (.*) fields$/, (arg0, arg1) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should see the sucessful message as "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        and(/^User shhould see "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" button$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should navigated to "(.*)" screen$/, (arg0) => {
            defaultValidation();
        });

        and(/^User should fill valid (.*) and (.*) fields$/, (arg0, arg1) => {
            defaultValidation();
        });

        when(/^User clicks on "(.*)" buttonThen The Internet service is unavailable$/, (arg0) => {
            defaultValidation();
        });

        and('User should see the appropriate error message', () => {
            defaultValidation();
        });
    });


    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Continue as Guest screen with different option to sync the appointment - When the service is unavailable user should see the following error message', ({given, when, and, then}) => {
        given(/^User launch the "(.*)" url$/, (arg0) => {
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

        and(/^User should see the "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User select on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then('User should navigated to provide basic details', () => {
            defaultValidation();
        });

        and('User should see the following fields as below:', (table) => {
            defaultValidation();
        });

        and('User should see the option to submit the same', () => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" optionThen The Internet service is unavailable$/, (arg0) => {
            defaultValidation();
        });

        and('User should see the appropriate error message', () => {
            defaultValidation();
        });
    });

});
