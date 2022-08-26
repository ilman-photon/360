@BDDSTORY-EPP-1581
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Guest user receives link to set password
  User Story: As a guest user, I should be able to receive a link to my email/ phone number to create password.

  Acceptance Criteria:

  GIVEN

  User clicks on  'Already have an appointment? Sync your appointment information' CTA from the login page

  WHEN

  User provides valid Email or Phone number as in  

  THEN

  User will be requested to select whether the link has to be sent to Email or Phone number if preferred mode of communication is set to both

  And

  User should receive a link to the registered email or phone number based on preferred mode of communication to set new password

  @BDDTEST-EPP-2946
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1581 -Verify user able to view inline error message if Email or Phone Number is not entered
    Given user launch the Marketing Site url		
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides blank Email or Phone number
    And user should click on submit
    Then user should see error message "This field is required"

  @BDDTEST-EPP-2947
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1581 -Verify user able to click only mobile as preferences mode and able to get the link
    Given user launch the Marketing Site url		
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides valid Phone number
    Then user clicks only mobile as preferences mode 
    And user click on submit
    Then user recieves link to phone number

  @BDDTEST-EPP-2948
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1581 -Verify user able to click only email as preferences mode and able to get the link
    Given user launch the Marketing Site url		
    And user clicks on the Already have an appointment? Sync your appointment information link
    And user click on Continue as a Guest option
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides valid email
    Then user clicks only email as preferences mode 
    And user click on submit
    Then user recieves link to email

  @BDDTEST-EPP-2949
  @Appointments
  @P1
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-1581 -Verify user able to click both as preferences mode and able to get the link to create password
    Given user launch the Marketing Site url		
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides valid email or phone number
    Then user clicks only both as preferences mode 
    And user click on submit
    Then user recieves link to email or phone number
