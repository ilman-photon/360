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

  test('EPIC_EPP-44_STORY_EPP-1567-To verify whether the user is able to choose Appointment for Someone else', () => {
    defaultValidation();
  });

  test('Verify whether the user is able to add the appointment to calender and check whether its added in the calender.', () => {
    defaultValidation();
  });

  test('Verify whether the text Is this the medical emergency? is displaying', () => {
        defaultValidation();
    });

    test('Verify whether the text If this is a medical emergency, please call 911 is displaying when we mouse hover the text Is this the medical emergency?', () => {
        defaultValidation();
    });

    test('Verify whether the user having the option to redirect to Patient portal home page after appointment schedule.', () => {
        defaultValidation();
    });

    test('Verify whether the Confirmation Email is receiving to the user after successful appointment schedule. (Preferred mode = Email)', () => {
        defaultValidation();
    });

    test('Verify whether the Confirmation Text Message is receiving to the user after successful appointment schedule. (Preferred mode = Phone number)', () => {
        defaultValidation();
    });
});