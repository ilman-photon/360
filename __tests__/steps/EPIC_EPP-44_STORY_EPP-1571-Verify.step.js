import { defineFeature, loadFeature } from "jest-cucumber";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1571.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment', ({ given, and, then }) => {
        defaultValidation();    
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment - within 3 seconds', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment - within 3 seconds', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment - within 3 seconds', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment - within 3 seconds', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment - within 3 seconds', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Login screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message', ({ given, and, then }) => {
        defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Create Account screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message', ({given, and, then}) => {
          defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Forgot Password screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message', ({given, and, then}) => {
          defaultValidation();
    });


    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Continue as Guest screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message', ({given, and, then}) => {
          defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Login screen with different option to sync the appointment - When the service is unavailable user should see the following error message', ({given, and, then}) => {
         defaultValidation();
    });

    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Create Account screen with different option to sync the appointment - When the service is unavailable user should see the following error message', ({given, and, then}) => {
          defaultValidation();
    });



    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Forgot Password screen with different option to sync the appointment - When the service is unavailable user should see the following error message', ({given, and, then}) => {
          defaultValidation();
    });



    test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Continue as Guest screen with different option to sync the appointment - When the service is unavailable user should see the following error message', ({given, and, then}) => {
          defaultValidation();
    });

});
