Feature: As a user, I should be able to view the "User Registration" screen and register myself to the patient portal.

    @BDDTEST-EPP-628
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-2_STORY_EPP-250 - Verify if user able to view the Registration screen

Given User is already a registered user
And User is in the “User Registration” screen
And User fills in all the required details to register
When User clicks on ‘Register’ CTA
Then System should validate the provided registration details against existing users
And User should be able to see the following message “ Existing user! You are already a registered user. Please login to the application using your username and password.” with an option to redirect the user to “Patient Login” screen