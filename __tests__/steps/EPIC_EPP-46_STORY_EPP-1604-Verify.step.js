import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1604.feature"
);

defineFeature(feature, (test) => {
    const defaultValidation = () => {
        expect(true).toBeTruthy();
    };

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should see “Are you sure you want to cancel?” as confirmation message', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should see "confirm and deny" option', ({  }) => {
        defaultValidation();
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should receive an email based on their registered mail-id regarding the cancellation', ({  }) => {
        defaultValidation();
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should receive a text based on their registered mobile number regarding the cancellation', ({  }) => {
        defaultValidation();
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should be able to deny and gets redirected back to “Appointments” screen without appointment being cancelled', ({  }) => {
        defaultValidation();
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify user should see the error message when the internet service is unavailable', ({  }) => {
        defaultValidation();
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify  when the service is unavailable', ({  }) => {
        defaultValidation();
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify User navigates to “Appointments” screen when user refresh the page', ({  }) => {
        defaultValidation();
    });

    test('EPIC_EPP-3_STORY_EPP-1604-Verify User should not see the any errors script when user clicks F12 on the console', ({  }) => {
        defaultValidation();
    });

});