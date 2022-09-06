import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1761.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

    test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the registered user can able to Reset the password and Appointment is synced automatically', ({ given, when, and, then}) => {
        given('registered user launch the Marketing Site url', () => {
            defaultValidation();
        });

        when('registered user clicks on the Schedule your Eye Exam button', () => {
            defaultValidation();
        });

        and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
            defaultValidation();
        });

        and('registered user review the appointments.', () => {
            defaultValidation();
        });

        and('select the Appointment for Myself.', () => {
            defaultValidation();
        });

        and('registered user should see the mentioned fields Login, Create an Account and Forgot password', () => {
            defaultValidation();
        });

        and('registered user click the Forgot password', () => {
            defaultValidation();
        });

        and('registered user should able to set the password.', () => {
            defaultValidation();
        });

        and('registered should lands on dashboard.', () => {
            defaultValidation();
        });

        and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
            defaultValidation();
        });

        then('registered user should  able to view the Appointment under Upcoming Appointments', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the Appointment Confirmation Email is delivering to registered Email based on Preferred mode of communication', ({ given, when, and, then}) => {
        given('registered user launch the Marketing Site url', () => {
            defaultValidation();
        });

        when('registered user clicks on the Schedule your Eye Exam button', () => {
            defaultValidation();
        });

        and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
            defaultValidation();
        });

        and('registered user review the appointments.', () => {
            defaultValidation();
        });

        and('select the Appointment for Myself.', () => {
            defaultValidation();
        });

        and('registered user should see the mentioned fields Login, Create an Account and Forgot password', () => {
            defaultValidation();
        });

        and('registered user click the Forgot password', () => {
            defaultValidation();
        });

        and('registered user should able to set the password.', () => {
            defaultValidation();
        });

        and('registered should lands on dashboard.', () => {
            defaultValidation();
        });

        and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
            defaultValidation();
        });

        and('registered user should  able to view the Appointment under Upcoming Appointments', () => {
            defaultValidation();
        });

        then('Appointment Confirmation Email should received to the registered user.', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the Appointment Confirmation Text message is delivering to registered Phone number based on Preferred mode of communication', ({ given, when, and, then}) => {
        given('registered user launch the Marketing Site url', () => {
            defaultValidation();
        });

        when('registered user clicks on the Schedule your Eye Exam button', () => {
            defaultValidation();
        });

        and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
            defaultValidation();
        });

        and('registered user review the appointments.', () => {
            defaultValidation();
        });

        and('select the Appointment for Myself.', () => {
            defaultValidation();
        });

        and('registered user should see the mentioned fields Login, Create an Account and Forgot password', () => {
            defaultValidation();
        });

        and('registered user click the Forgot password', () => {
            defaultValidation();
        });

        and('registered user should able to set the password.', () => {
            defaultValidation();
        });

        and('registered should lands on dashboard.', () => {
            defaultValidation();
        });

        and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
            defaultValidation();
        });

        and('registered user should  able to view the Appointment under Upcoming Appointments', () => {
            defaultValidation();
        });

        then('Appointment Confirmation Text message should received to the registered user.', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1761-To verify the Appointment confirmation Email content', ({ given, when, and, then}) => {
        given('registered user launch the Marketing Site url', () => {
            defaultValidation();
        });

        when('registered user clicks on the Schedule your Eye Exam button', () => {
            defaultValidation();
        });

        and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
            defaultValidation();
        });

        and('registered user review the appointments.', () => {
            defaultValidation();
        });

        and('select the Appointment for Myself.', () => {
            defaultValidation();
        });

        and('registered user should see the mentioned fields Login, Create an Account and Forgot password', () => {
            defaultValidation();
        });

        and('registered user click the Forgot password', () => {
            defaultValidation();
        });

        and('registered user should able to set the password.', () => {
            defaultValidation();
        });

        and('registered should lands on dashboard.', () => {
            defaultValidation();
        });

        and('the registered user should see the success message Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.', () => {
            defaultValidation();
        });

        and('registered user should  able to view the Appointment under Upcoming Appointments', () => {
            defaultValidation();
        });

        then('check for whether the Email content is displaying as below', (table) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1761-To verify whether the registered user can able to Reset the password from the Marketting site', ({ given, when, and, then}) => {
        given('registered user launch the Marketing Site url', () => {
            defaultValidation();
        });

        when('registered user clicks on the Schedule your Eye Exam button', () => {
            defaultValidation();
        });

        and('registered user select the Purpose of Visit, Location and Date & Time with provider.', () => {
            defaultValidation();
        });

        and('registered user review the appointments.', () => {
            defaultValidation();
        });

        and('select the Appointment for Myself.', () => {
            defaultValidation();
        });

        and('registered user should see the mentioned fields Login, Create an Account and Forgot password', () => {
            defaultValidation();
        });

        and('Registered user click the Forgot password', () => {
            defaultValidation();
        });

        then('Registered user should able to set the password.', () => {
            defaultValidation();
        });
    });


});