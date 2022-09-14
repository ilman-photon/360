@BDDSTORY-EPP-2539
@Appointments
@EPP_Sprint_4
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal - Change the date of appointment in schedule appointment screen
  User Story: As a user, I should be able to change the date of appointment in schedule appointment screen from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  WHEN

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  THEN

  User should be able to change the date of appointment 

  And

  User should not be able to select past dates (< today)

  And

  System should not allow the user to select a date that is 3 months greater than today’s date

  @BDDTEST-EPP-3403
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2539 - Verify user able to change the date of appointment in schedule appointment screen from patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on the schedule new appointments search button 
    And user views the results in the Schedule Appointments screen
    And user views the doctors  details and availability
    And user selected a time slot
    And user lands on the review of the appointment details
    And user view the location
    And user view the date of appointment
    Then user clicks on the edit to change the date
    And user select the date of appointment 
    And user select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

  @BDDTEST-EPP-3404
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2539 - Verify the user is not able to select past dates on the date of appointment in the schedule appointment screen from the patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on the schedule new appointments search button 
    And user views the results in the Schedule Appointments screen
    And user views the doctors  details and availability
    And user selected a time slot
    And user lands on the review of the appointment details
    And user view the location
    And user view the date of appointment
    Then user clicks on the edit to change the date
    And user is not allowed to enter the past days from today
    And  user views the error message "Please enter the valid date"
    And user select the valid date of appointment 
    And user select the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

  @BDDTEST-EPP-3405
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2539 - Verify the user is not allowed to select a date that is 3 months greater than today’s date of appointment in the schedule appointment screen from the patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on the schedule new appointments search button 
    And user views the results in the Schedule Appointments screen
    And user views the doctors  details and availability
    And user selected a time slot
    And user lands on the review of the appointment details
    And user views the location
    And user views the date of the appointment
    Then user clicks on the edit to change the date
    And user is not allowed to 3 months greater than today’s date
    And  user views the error message "Please enter the valid date"
    And user selects the valid date of appointment 
    And user selects the purpose of the visit
    And user selects the date of appointment 
    And user selects the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
