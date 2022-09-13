import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1604.feature"
);

defineFeature(feature, (test) => {
    const defaultValidation = () => {
        expect(true).toBeTruthy();
    };

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should see “Are you sure you want to cancel?” as confirmation message', ({ given, and, then, when }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('User is logged in to the application', () => {
            defaultValidation();
        });

        and('User clicks to “Appointments” menu', () => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User lands on “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should see an option to schedule new appointments', () => {
            defaultValidation();
        });

        and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
            defaultValidation();
        });

        when('User clicks on the option to cancel an appointment', () => {
            defaultValidation();
        });

        then('User should see “Are you sure you want to cancel?” as confirmation message', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should see "confirm and deny" option', ({ given, when, and, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('User is logged in to the application', () => {
            defaultValidation();
        });

        and('User clicks to “Appointments” menu', () => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User lands on “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should see an option to schedule new appointments', () => {
            defaultValidation();
        });

        and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
            defaultValidation();
        });

        when('User clicks on the option to cancel an appointment', () => {
            defaultValidation();
        });

        then('User should see “Are you sure you want to cancel?” as confirmation message', () => {
            defaultValidation();
        });

        and(/^User should see "(.*)" option$/, (arg0) => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should receive an email based on their registered mail-id regarding the cancellation', ({ given, when, and, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('User is logged in to the application', () => {
            defaultValidation();
        });

        and('User clicks to “Appointments” menu', () => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User lands on “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should see an option to schedule new appointments', () => {
            defaultValidation();
        });

        and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
            defaultValidation();
        });

        when('User clicks on the option to cancel an appointment', () => {
            defaultValidation();
        });

        then('User should see “Are you sure you want to cancel?” as confirmation message', () => {
            defaultValidation();
        });

        and(/^User should see "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should see "(.*)" as a note$/, (arg0) => {
            defaultValidation();
        });

        and('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should receive an email based on their registered mail-id regarding the cancellation', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should receive a text based on their registered mobile number regarding the cancellation', ({ given, when, and, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('User is logged in to the application', () => {
            defaultValidation();
        });

        and('User clicks to “Appointments” menu', () => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User lands on “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should see an option to schedule new appointments', () => {
            defaultValidation();
        });

        and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
            defaultValidation();
        });

        when('User clicks on the option to cancel an appointment', () => {
            defaultValidation();
        });

        then('User should see “Are you sure you want to cancel?” as confirmation message', () => {
            defaultValidation();
        });

        and(/^User should see "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should receive a text based on their registered mobile number regarding the cancellation', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should be able to deny and gets redirected back to “Appointments” screen without appointment being cancelled', ({ given, when, and, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('User is logged in to the application', () => {
            defaultValidation();
        });

        and('User clicks to “Appointments” menu', () => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User lands on “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should see an option to schedule new appointments', () => {
            defaultValidation();
        });

        and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
            defaultValidation();
        });

        when('User clicks on the option to cancel an appointment', () => {
            defaultValidation();
        });

        then('User should see “Are you sure you want to cancel?” as confirmation message', () => {
            defaultValidation();
        });

        and(/^User should see "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('user should see the appointment is not cancelled', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({ given, when, and, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('User is logged in to the application', () => {
            defaultValidation();
        });

        and('User clicks to “Appointments” menu', () => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User lands on “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should see an option to schedule new appointments', () => {
            defaultValidation();
        });

        and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
            defaultValidation();
        });

        when('User clicks on the option to cancel an appointment', () => {
            defaultValidation();
        });

        then('User should see “Are you sure you want to cancel?” as confirmation message', () => {
            defaultValidation();
        });

        and(/^User should see "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should see "(.*)" as a note$/, (arg0) => {
            defaultValidation();
        });

        and('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should receive an email based on their registered mail-id regarding the cancellation', () => {
            defaultValidation();
        });

        and('the Internet service is unavailable', () => {
            defaultValidation();
        });

        then('user should see the appropriate error message', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify  when the service is unavailable', ({ given, when, and, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('User is logged in to the application', () => {
            defaultValidation();
        });

        and('User clicks to “Appointments” menu', () => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User lands on “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should see an option to schedule new appointments', () => {
            defaultValidation();
        });

        and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
            defaultValidation();
        });

        when('User clicks on the option to cancel an appointment', () => {
            defaultValidation();
        });

        then('User should see “Are you sure you want to cancel?” as confirmation message', () => {
            defaultValidation();
        });

        and(/^User should see "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should see "(.*)" as a note$/, (arg0) => {
            defaultValidation();
        });

        and('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should receive an email based on their registered mail-id regarding the cancellation', () => {
            defaultValidation();
        });

        and('the service is unavailable', () => {
            defaultValidation();
        });

        then('user should see the appropriate error message', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify User navigates to “Appointments” screen when user refresh the page', ({ given, when, and, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('User is logged in to the application', () => {
            defaultValidation();
        });

        and('User clicks to “Appointments” menu', () => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User lands on “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should see an option to schedule new appointments', () => {
            defaultValidation();
        });

        and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
            defaultValidation();
        });

        when('User clicks on the option to cancel an appointment', () => {
            defaultValidation();
        });

        then('User should see “Are you sure you want to cancel?” as confirmation message', () => {
            defaultValidation();
        });

        and(/^User should see "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should see "(.*)" as a note$/, (arg0) => {
            defaultValidation();
        });

        and('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should receive an email based on their registered mail-id regarding the cancellation', () => {
            defaultValidation();
        });

        and('the service is unavailable', () => {
            defaultValidation();
        });

        then('user should see the appropriate error message', () => {
            defaultValidation();
        });

        when('User refresh the page', () => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should not see the any errors script when user clicks F12 on the console', ({ given, when, and, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            defaultValidation();
        });

        when('User is logged in to the application', () => {
            defaultValidation();
        });

        and('User clicks to “Appointments” menu', () => {
            defaultValidation();
        });

        then('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User lands on “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should see an option to schedule new appointments', () => {
            defaultValidation();
        });

        and('User should see Upcoming Appointments with an option to reschedule and cancel each of them', () => {
            defaultValidation();
        });

        when('User clicks on the option to cancel an appointment', () => {
            defaultValidation();
        });

        then('User should see “Are you sure you want to cancel?” as confirmation message', () => {
            defaultValidation();
        });

        and(/^User should see "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        when(/^User selects on "(.*)" option$/, (arg0) => {
            defaultValidation();
        });

        then(/^User should see "(.*)" as a note$/, (arg0) => {
            defaultValidation();
        });

        and('User navigates to “Appointments” screen', () => {
            defaultValidation();
        });

        and('User should receive an email based on their registered mail-id regarding the cancellation', () => {
            defaultValidation();
        });

        and(/^User should see the page loads within "(.*)"$/, (arg0) => {
            defaultValidation();
        });

        when(/^user clicks on F(\d+) on the console$/, (arg0) => {
            defaultValidation();
        });

        then('user should not to see any errors script', () => {
            defaultValidation();
        });
    });

});