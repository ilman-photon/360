@BDDSTORY-EPP-1578
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Provide Email or Phone number to Sync Appointment Information
  User Story: As a user, I should be able to provide my email or phone number that was provided during scheduling appointment to create an account and sync the appointments.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User schedules an appointment using ‘Continue as a Guest’ option  

  WHEN

  User clicks on  'Already have an appointment? Sync your appointment information' CTA from the login page

  THEN

  User should be able to view the following

  | Field Name            | Mandatory                        | Format                  |
  |-----------------------|----------------------------------|-------------------------|
  | Email or Phone number | Yes - this is the username field | abc@mail.com - Format   |
  |                       |                                  | (XXX)-XXX-XXXX - Format |

  And

  User should be able to see the option to submit the same

  And

  User should be prompted with the inline validation error message “This field is required” when all the required fields are not filled

  @BDDTEST-EPP-2956
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1578 - Verify user able to view enter Email or Phone Number to Sync Appointment Information
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    And user click on Continue as a Guest option
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user should see submit
    When user provides "<Email or Phone Number"
    And user click on submit
    Then user should see the Email or Phone Number synced with appointment

    Examples:
    |Email or Phone Number|
    |user1@photon.com|
    |9876543200|

  @BDDTEST-EPP-2957
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario Outline: EPIC_EPP-44_STORY_EPP-1578 -Verify user able to view inline error message if Email or Phone Number is not entered
    Given user launch the Marketing Site url		
    And user clicks on the Schedule your Eye Exam button
    And user click on Continue as a Guest option
    When user click on Already have an appointment? Sync your appointment information button
    Then user should see the Email or Phone number
    And user should see submit
    When user provides "<Email or Phone Number"
    And user click on submit
    Then user should see the Email or Phone Number synced with appointment

    Examples:
    |Email or Phone Number|
    |user1@photon.com|
    |9876543200|
