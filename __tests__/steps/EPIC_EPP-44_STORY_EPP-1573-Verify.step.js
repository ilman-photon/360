import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1573.feature"
);

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest.', ({ given, then, and }) => {
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

    and('user enter the First name, Last name.', () => {
      defaultValidation();
    });

    and('user enter the valid Date of birth', () => {
      defaultValidation();
    });

    and('user select the Preferred mode of communication = Email', () => {
      defaultValidation();
    });

    and('user enters the Email id', () => {
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

    and('user view the appointment confirmation message.', () => {
      defaultValidation();
    }); 
  });

  test('EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest and user not providing the purpose of visit.', ({ given, and, then }) => {
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

    and('user not select the purpose of visit', () => {
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

    and('user enter the First name, Last name.', () => {
      defaultValidation();
    });

    and('user enter the valid Date of birth', () => {
      defaultValidation();
    });

    and('user select the Preferred mode of communication = Email', () => {
      defaultValidation();
    });

    and('user enters the Email id', () => {
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

    and('user view the appointment confirmation message.', () => {
      defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest and the user not providing the insurance name.', ({ given, and, then }) => {
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

    and('user not enter the insurance name', () => {
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

    and('user enter the First name, Last name.', () => {
      defaultValidation();
    });

    and('user enter the valid Date of birth', () => {
      defaultValidation();
    });

    and('user select the Preferred mode of communication = Email', () => {
      defaultValidation();
    });

    and('user enters the Email id', () => {
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

    and('user view the appointment confirmation message.', () => {
      defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest and user not providing the purpose of visit and insurance name.', ({ given, and, then }) => {
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

    and('user not select the purpose of visit', () => {
      defaultValidation();
    });

    and('user not enter the insurance name', () => {
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

    and('user enter the First name, Last name.', () => {
      defaultValidation();
    });

    and('user enter the valid Date of birth', () => {
      defaultValidation();
    });

    and('user select the Preferred mode of communication = Email', () => {
      defaultValidation();
    });

    and('user enters the Email id', () => {
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

    and('user view the appointment confirmation message.', () => {
      defaultValidation();
    });
});

});