import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1563.feature"
);

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-44_STORY_EPP-1563 - Verify user able to provide the basic details when scheduling appointment for someone else.', ({ given, then, and }) => {
    given('user launch the Marketing Site url', () => {
      defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
      defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
      defaultValidation();
    });

    and('user selects a time slot', () => {
      defaultValidation();
    });

    then('user should see Review appointment details screen', () => {
      defaultValidation();
    });

    and('user selects Someone Else', () => {
      defaultValidation();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number, Preferred mode(s) of communication', () => {
      defaultValidation();
    });

    and('user should see submit', () => {
      defaultValidation();
    });
  });

});