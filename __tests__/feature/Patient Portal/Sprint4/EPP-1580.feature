@BDDSTORY-EPP-1580
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Provide wrong format of Email or Phone number to Sync eye exam
  User Story: As a user, I should be able to view an error message when the provided email or phone number is not in correct format.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User schedules an appointment using ‘Continue as Guest’ option  

  And

  User clicks on  'Already have an appointment? Sync your appointment information' CTA from the login page

  WHEN

  User provides Email or Phone number in wrong format

  THEN

  User should be able to see the following error message if email-id/ phone number provided was in incorrect format “Incorrect email or phone number format” 

  @BDDTEST-EPP-2925
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1580 - Verify user able to view inline error message if wrong format Email or Phone number to Sync eye exam is  entered
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    And user click on Continue as a Guest option
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides wrong format "<Email or Phone number>"
    And user should click on submit
    Then user should see error message Incorrect email or phone number format



    Examples:
    |Email or Phone Number|
    |user1@photon|
    |98765200ab|
