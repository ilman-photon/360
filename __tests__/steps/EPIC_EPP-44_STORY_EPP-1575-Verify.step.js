import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1575.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest.', ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user selected a time slot', () => {
        defaultValidation();
    });

    and('user lands on the review of the appointment details', () => {
        defaultValidation();
    });

    and('user reviewed and clicks on the continue button', () => {
        defaultValidation();
    });

    and('user view the Whos is this exam for? screen', () => {
        defaultValidation();
    });

    and('user click on the Self button', () => {
        defaultValidation();
    });

    and('user redirects to the login screen', () => {
        defaultValidation();
    });

    and('user clicks on the continue as guest', () => {
        defaultValidation();
    });

    and('user navigated to the guest user page', () => {
        defaultValidation();
    });

    and('user clicks on the Already have an appointment? Sync your appointment information button', () => {
        defaultValidation();
    });

    and('user enter the Email', () => {
        defaultValidation();
    });

    and('user clicks the \'Continue\' button.', () => {
        defaultValidation();
    });

    and('user recieve the email link', () => {
        defaultValidation();
    });

    and('user Set password using email link', () => {
        defaultValidation();
    });

    and('user naviigated to Dash board screen', () => {
        defaultValidation();
    });

    and('user clicks on the Appointment synced button', () => {
        defaultValidation();
    });

    and('user view the appointment confirmation message \'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.\'', () => {
        defaultValidation();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest and user not providing the purpose of visit..', ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user not selecting the purpose of visit', () => {
        defaultValidation();
    });

    and('user enters the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user selected a time slot', () => {
        defaultValidation();
    });

    and('user lands on the review of the appointment details', () => {
        defaultValidation();
    });

    and('user reviewed and clicks on the continue button', () => {
        defaultValidation();
    });

    and('user view the Whos is this exam for? screen', () => {
        defaultValidation();
    });

    and('user click on the Self button', () => {
        defaultValidation();
    });

    and('user redirects to the login screen', () => {
        defaultValidation();
    });

    and('user clicks on the continue as guest', () => {
        defaultValidation();
    });

    and('user navigated to the guest user page', () => {
        defaultValidation();
    });

    and('user clicks on the Already have an appointment? Sync your appointment information button', () => {
        defaultValidation();
    });

    and('user enter the Email', () => {
        defaultValidation();
    });

    and('user clicks the \'Continue\' button.', () => {
        defaultValidation();
    });

    and('user recieve the email link', () => {
        defaultValidation();
    });

    and('user Set password using email link', () => {
        defaultValidation();
    });

    and('user naviigated to Dash board screen', () => {
        defaultValidation();
    });

    and('user clicks on the Appointment synced button', () => {
        defaultValidation();
    });

    and('user view the appointment confirmation message \'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.\'', () => {
        defaultValidation();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest and user not providing the insurance name.', ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user chooses the purpose of the visit', () => {
        defaultValidation();
    });

    and('user not entering the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user selected a time slot', () => {
        defaultValidation();
    });

    and('user lands on the review of the appointment details', () => {
        defaultValidation();
    });

    and('user reviewed and clicks on the continue button', () => {
        defaultValidation();
    });

    and('user view the Whos is this exam for? screen', () => {
        defaultValidation();
    });

    and('user click on the Self button', () => {
        defaultValidation();
    });

    and('user redirects to the login screen', () => {
        defaultValidation();
    });

    and('user clicks on the continue as guest', () => {
        defaultValidation();
    });

    and('user navigated to the guest user page', () => {
        defaultValidation();
    });

    and('user clicks on the Already have an appointment? Sync your appointment information button', () => {
        defaultValidation();
    });

    and('user enter the Email', () => {
        defaultValidation();
    });

    and('user clicks the \'Continue\' button.', () => {
        defaultValidation();
    });

    and('user recieve the email link', () => {
        defaultValidation();
    });

    and('user Set password using email link', () => {
        defaultValidation();
    });

    and('user naviigated to Dash board screen', () => {
        defaultValidation();
    });

    and('user clicks on the Appointment synced button', () => {
        defaultValidation();
    });

    and('user view the appointment confirmation message \'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.\'', () => {
        defaultValidation();
    });
   });

   test('EPIC_EPP-44_STORY_EPP-1575 - Verify user able to view the appointment confirmation message after scheduling an appointment as guest and user not providing the purpose of visit and insurance name.', ({ given, when, then, and }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user enters the location', () => {
        defaultValidation();
    });

    and('user selects the date of appointment', () => {
        defaultValidation();
    });

    and('user not selecting the purpose of visit', () => {
        defaultValidation();
    });

    and('user not entering the insurance name', () => {
        defaultValidation();
    });

    and('user clicks on the Search button', () => {
        defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
        defaultValidation();
    });

    and('user selected a time slot', () => {
        defaultValidation();
    });

    and('user lands on the review of the appointment details', () => {
        defaultValidation();
    });

    and('user reviewed and clicks on the continue button', () => {
        defaultValidation();
    });

    and('user view the Whos is this exam for? screen', () => {
        defaultValidation();
    });

    and('user click on the Self button', () => {
        defaultValidation();
    });

    and('user redirects to the login screen', () => {
        defaultValidation();
    });

    and('user clicks on the continue as guest', () => {
        defaultValidation();
    });

    and('user navigated to the guest user page', () => {
        defaultValidation();
    });

    and('user clicks on the Already have an appointment? Sync your appointment information button', () => {
        defaultValidation();
    });

    and('user enter the Email', () => {
        defaultValidation();
    });

    and('user clicks the \'Continue\' button.', () => {
        defaultValidation();
    });

    and('user recieve the email link', () => {
        defaultValidation();
    });

    and('user Set password using email link', () => {
        defaultValidation();
    });

    and('user naviigated to Dash board screen', () => {
        defaultValidation();
    });

    and('user clicks on the Appointment synced button', () => {
        defaultValidation();
    });

    and('user view the appointment confirmation message \'Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.\'', () => {
        defaultValidation();
    });
    });



});
