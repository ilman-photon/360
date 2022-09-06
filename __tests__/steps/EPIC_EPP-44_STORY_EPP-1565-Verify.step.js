import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1565.feature"
);

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.', ({ given, then, and }) => {
    defaultValidation();
  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify whether user is able to see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user is able to see the timeslot in the Schedule Oppointments screen', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user is able to select the timeslot in the Schedule Oppointments screen', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user lands on the screen to review the appointment details', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user lands on the screen to review the appointment details and proceeds to schedule it', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user lands on the screen to select who the appointment is for after proceed from appointment page', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to see the fields in who the appointment is for screen', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to select Someone else option in who the appointment is for screen', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to see provide patient basic information page', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to view the fields in provide patient basic information page', ({ given, then, and }) => {

  });

  test('EPIC_EPP-44_STORY_EPP-1565 - Verify user able to provide the basic details when scheduling appointment for someone else.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {

    });

    and('user clicks on the Schedule your Eye Exam button', () => {

    });

    then('user navigates to the search screen', () => {

    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {

    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {

    });

    and('user select the timeslot', () => {

    });

    then('user lands on the screen to review the appointment details', () => {

    });

    and('user selects the option proceeds to schedule it', () => {

    });

    and('user select Someone else option', () => {

    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {

    });

    and('user provides valid patient details', () => {

    });

    and('user should see submit', () => {

    });
});

test('EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to view the appointment confirmation message.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {

    });

    and('user clicks on the Schedule your Eye Exam button', () => {

    });

    then('user navigates to the search screen', () => {

    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {

    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {

    });

    and('user select the timeslot', () => {

    });

    then('user lands on the screen to review the appointment details', () => {

    });

    and('user selects the option proceeds to schedule it', () => {

    });

    and('user select Someone else option', () => {

    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {

    });

    and('user provides valid patient details', () => {

    });

    and('user select the submit button', () => {

    });

    and('user should be able to view the appointment confirmation message', () => {

    });
});

});