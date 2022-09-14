@BDDSTORY-EPP-1576
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Patient Login Page - View 'Already have an appointment? Sync your appointment information' CTA
  User Story: As a user/ admin user, I should be able to view 'Already have an appointment? Sync your appointment information' CTA in the "Patient Login" page.

  Acceptance Criteria:

  GIVEN

  User/ admin user navigates to the Patient Portal application

  WHEN

  User/ admin user lands onto “Patient Login” screen

  THEN

  User should be able to view the options as in  

  And

  User should be able to view ‘Already have an appointment? Sync your appointment information' CTA instead of 'Continue as Guest’ CTA (Not applicable for Admin)  

  @BDDTEST-EPP-2969
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1576 - Verify user able to  view 'Already have an appointment? Sync your appointment information' CTA in the "Patient Login" page.
    Given user launch Patient Portal url	
    And user lands on the patient login screen
    And user views the user name and Password fields
    And user views the Forgot password link
    And user views the login button
    And user views the Continue as a guest button
    And user views the Create Account button
    And user views the 'Already have an appointment? Sync your appointment information' button

  @BDDTEST-EPP-2970
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1576 - Verify that the admin able to  view 'Already have an appointment? Sync your appointment information' CTA in the "Patient Login" page.
    Given admin launch Patient Portal url	
    And admin lands on the patient login screen
    And admin views the user name and Password fields
    And admin views the Forgot password link
    And admin views the login button
    And admin views the Continue as a guest button
    And admin views the Create Account button
    And admin views the 'Already have an appointment? Sync your appointment information' button
