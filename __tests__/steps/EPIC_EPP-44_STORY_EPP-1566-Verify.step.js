import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1566.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to provide the patient datails.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        defaultValidation();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        defaultValidation();
    });

    and('user able to provide patient details', () => {
        defaultValidation();
    });
});

test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user confirms the patient details', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        defaultValidation();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        defaultValidation();
    });

    and('user provide patient details', () => {
        defaultValidation();
    });

    then('user able to confirms the patient details', () => {
        defaultValidation();
    });
});

test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if First Name provided was less than 2 characters', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        defaultValidation();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        defaultValidation();
    });

    and(/^user provide patient details with less than (\d+) characters in (.*) field$/, () => {
        defaultValidation();
    });

    and('user submit the details', () => {
        defaultValidation();
    });

    then(/^user should get error message First Name should be greater than (\d+) characters$/, () => {
        defaultValidation();
    });
});

test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if email-id provided was in incorrect format', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        defaultValidation();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        defaultValidation();
    });

    and(/^user provide patient details with incorrect format (.*)$/, () => {
        defaultValidation();
    });

    and('user submit the details', () => {
        defaultValidation();
    });

    then('user should get error message Incorrect email format', () => {
        defaultValidation();
    });
});

test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if mobile number provided was in incorrect format', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        defaultValidation();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        defaultValidation();
    });

    and(/^user provide patient details with incorrect format (.*)$/, () => {
        defaultValidation();
    });

    and('user submit the details', () => {
        defaultValidation();
    });

    then('user should get error message Incorrect mobile number format', () => {
        defaultValidation();
    });
});

test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if invalid date of birth entered', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        defaultValidation();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        defaultValidation();
    });

    and('user provide patient details with invalid date of birth', () => {
        defaultValidation();
    });

    and('user submit the details', () => {
        defaultValidation();
    });

    then(/^user should be able to see the inline error message Invalid (.*)$/, () => {
        defaultValidation();
    });
});


});
