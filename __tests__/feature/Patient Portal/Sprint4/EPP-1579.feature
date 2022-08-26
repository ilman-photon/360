@BDDSTORY-EPP-1579
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Provide invalid Email or Phone number to Sync eye exam
  User Story: As a user, I should be able to view a error message when the provided email or phone number is invalid.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User schedules an appointment using ‘Continue as Guest’ option  

  And

  User clicks on  'Already have an appointment? Sync your appointment information' CTA from the login page

  WHEN

  User provides invalid Email or Phone number

  THEN

  User should be able to view the error message “Invalid Email or Phone number” when the provided email or phone number is not present in the system 

  @BDDTEST-EPP-2927
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1579 - Verify user able to view inline error message if invalid Email or Phone number to Sync eye exam is  entered
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    And user click on Continue as a Guest option
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user provides invalid "<Email or Phone number>"
    And user should click on submit
    Then user should see error message Invalid Email or Phone number



    Examples:
    |Email or Phone Number|
    |user@photon.com|
    |98765200|
