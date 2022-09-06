import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1567.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-44_STORY_EPP-1567-To verify whether the user is able to choose Appointment for Someone else', ({ given, and, when, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation();
    });

    and('user navigates to the schedule appointment screen', () => {
      defaultValidation();
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      defaultValidation();
    });

    and('click on Search button', () => {
      defaultValidation();
    });

    and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
      defaultValidation();
    });

    and('select any available Time slot', () => {
      defaultValidation();
    });

    and('user should see the Review Appointment details page', () => {
      defaultValidation();
    });

    and('user clicks on Continue, it should display the option Myself and Someone else.', () => {
      defaultValidation();
    });

    then('user should able to choose Someone else', () => {
      defaultValidation();
    });
  });

  test('Verify whether the user is able to add the appointment to calender and check whether its added in the calender.', ({ given, and, when, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation();
    });

    and('user navigates to the schedule appointment screen', () => {
      defaultValidation();
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      defaultValidation();
    });

    and('click on Search button', () => {
      defaultValidation();
    });

    and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
      defaultValidation();
    });

    and('select any available Time slot', () => {
      defaultValidation();
    });

    and('user should see the Review Appointment details page', () => {
      defaultValidation();
    });

    and('user clicks on Continue, it should display the option Myself and Someone else.', () => {
      defaultValidation();
    });

    then('user should able to choose Someone else', () => {
      defaultValidation();
    });

    then('mentioned fields should get displayed.', () => {
      defaultValidation();
    });
  });

  test('Verify whether the text Is this the medical emergency? is displaying', ({ given, when, and, then }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation();
    });

    and('user navigates to the schedule appointment screen', () => {
      defaultValidation();
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      defaultValidation();
    });

    and('click on Search button', () => {
      defaultValidation();
    });

    and('user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.', () => {
      defaultValidation();
    });

    and('select any available Time slot', () => {
      defaultValidation();
    });

    and('user should see the Review Appointment details page', () => {
      defaultValidation();
    });

    and('user clicks on Continue, it should display the option Myself and Someone else.', () => {
      defaultValidation();
    });

    and('user should click Someone else', () => {
      defaultValidation();
    });

    and('user should provide all those basic details of patient and click Schedule Appointment.', () => {
      defaultValidation();
    });

    then('user should see the text Is this the medical emergency?', () => {
      defaultValidation();
    });
});

test('Verify whether the text If this is a medical emergency, please call 911 is displaying when we mouse hover the text Is this the medical emergency?', ({ given, when, and, then }) => {
  given('user launch the Marketing Site url', () => {
      defaultValidation();
  });

  when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation();
  });

  and('schedule the appointment.', () => {
      defaultValidation();
  });

  and('mouse hover the text  Is this the medical emergency?', () => {
      defaultValidation();
  });

  then(/^user should see the text If this is a medical emergency, please call (\d+).$/, (arg0) => {
      defaultValidation();
  });
});

test('Verify whether the user having the option to redirect to Patient portal home page after appointment schedule.', ({ given, when, and, then }) => {
  given('user launch the Marketing Site url', () => {
      defaultValidation();
  });

  when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation();
  });

  and('schedule the appointment.', () => {
      defaultValidation();
  });

  then('user should see the option to redirect to Patient portal home page.', () => {
      defaultValidation();
  });
});

test('Verify whether the Confirmation Email is receiving to the user after successful appointment schedule. (Preferred mode = Email)', ({ given, when, and, then }) => {
  given('user launch the Marketing Site url', () => {
      defaultValidation();
  });

  when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation();
  });

  and('schedule the appointment.', () => {
      defaultValidation();
  });

  then('the user should receive the Confirmation Email for successful Appointment schedule.', () => {
      defaultValidation();
  });
});

test('Verify whether the Confirmation Text Message is receiving to the user after successful appointment schedule. (Preferred mode = Phone number)', ({ given, when, and, then }) => {
  given('user launch the Marketing Site url', () => {
      defaultValidation();
  });

  when('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation();
  });

  and('schedule the appointment.', () => {
      defaultValidation();
  });

  then('the user should receive the Confirmation Text message for successful Appointment schedule.', () => {
      defaultValidation();
  });
});

});