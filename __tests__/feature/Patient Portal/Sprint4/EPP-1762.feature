@BDDSTORY-EPP-1762
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Patient Login Page - Provide existing user's email or phone number in 'Already have an appointment? Sync your appointment information' screen
  User Story: As a registered user, I should be able to view error message when I provide my registered email or phone number to sync appointment information

  Acceptance Criteria:

  GIVEN

  User is a registered user i.e already have an account

  And

  User is on the “Patient Login” screen

  And

  User clicks on  'Already have an appointment? Sync your appointment information' CTA from the login page

  And

  User lands on that screen to enter email or phone number

  WHEN

  User provides their already registered email or phone number

  THEN

  User should be able to see the error message as mentioned in  

  @BDDTEST-EPP-2929
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1762 -  Verify that user is able to enter the registered email or phone number
    Given user launch the Patient Site url	
    Then user lands to Patient Login screen
    Then user clicks on  Already have an appointment? Sync your appointment information
    Then user lands on that screen to enter email or phone number
    Then user provides their already registered email or phone number

  @BDDTEST-EPP-2930
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1762 - Verify that user provides existing user's email or phone number in 'Already have an appointment? Sync your appointment information' screen
    Given user launch the patient portal url
    And user is in login screen
    Then user clicks on  Already have an appointment? Sync your appointment information
    Then user lands on that screen to enter email or phone number
    Then user provides their already registered email or phone number
    And user click on submit button
    Then user should see the message “Existing user You are already a registered user. Please login to the application using your username and password.”
    And user should give the option to redirect to Patient Login screen
    And user lands on to Patient Login screen

  @BDDTEST-EPP-2931
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1762 - Verify that user provides existing user's email in 'Already have an appointment? Sync your appointment information' screen
    Given user launch the patient portal url
    And user is in login screen
    Then user clicks on  Already have an appointment? Sync your appointment information
    Then user lands on that screen to enter email 
    Then user provides their already registered email 
    And user click on submit button
    Then user should see the message Existing user You are already a registered user. Please login to the application using your username and password.
    And user should give the option to redirect to patient login screen
    And user lands on to patient login screen

  @BDDTEST-EPP-2932
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1762 - Verify that user provides existing user's phone number in 'Already have an appointment? Sync your appointment information' screen
    Given user launch the patient portal url
    And user is in login screen
    Then user clicks on  Already have an appointment? Sync your appointment information
    Then user lands on that screen to enter phone number 
    Then user provides their already registered phone number 
    And user click on submit button
    Then user should see the message Existing user You are already a registered user. Please login to the application using your username and password.
    And user should give the option to redirect to patient login screen
    And user lands on to patient login screen
