@BDDSTORY-EPP-2549
@Appointments
@EPP_Sprint_4
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal  - Change Insurance during review
  User Story: As a user, I should be able to change the 'Insurance carrier' while reviewing the appointment from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  And

  User has selected a time slot

  And

  User lands on the screen to review the appointment details as in  

  WHEN

  User selects the option to change the insurance career 

  THEN

  User should get navigated to the screen to select an insurance career as in  

  And

  System might have to remove the selection made for purpose of visit, location, date of appointment and time slot of provider if the updated insurance carrier does not support them and inform the user

  And

  User has to once again review the appointment details as in  

  @BDDTEST-EPP-3477
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2549 - Verify the user able to change the 'Insurance carrier' while reviewing the appointment from patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks to Appointments menu
    Then user navigates to Appointments screen
    And user lands on 'Appointments' screen
    And user views the schedule new appointments link
    And user clicks on the schedule new appointments
    Then user navigates to the search screen
    And user enters the location
    And user selects the date of appointment
    And user chooses the purpose of the visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
    And user views the Appointment details section
    And user clicks on the Edit link
    And user views the Purpose of the Visit
    And user enters the insurance name
    And user clicks on the Search button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

  @BDDTEST-EPP-3478
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2549 - Verify the user able to add the 'Insurance carrier' while reviewing the appointment from patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on the schedule new appointments and land on search screen
    And user not enters insurance name and click on the seach button
    And user selects the time slot and review the appoiment details
    And user views the Appointment details section
    And user clicks on the Edit link
    And user views the Purpose of the Visit
    And user enters the insurance name
    And user clicks on the Continue button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details

  @BDDTEST-EPP-3479
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2549 - Verify the user able to Remove the 'Insurance carrier' while reviewing the appointment from patient portal.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user clicks on the schedule new appointments and land on search screen
    And user enters insurance name and click on the seach button
    And user selects the time slot and review the appoiment details
    And user views the Appointment details section
    And user clicks on the Edit link
    And user views the Purpose of the Visit
    And user remove the insurance name
    And user clicks on the continue button
    And user views the results in the Schedule Appointments screen
    And user selected a time slot
    And user lands on the review of the appointment details
