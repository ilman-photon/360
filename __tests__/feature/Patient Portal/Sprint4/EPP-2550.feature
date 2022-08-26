@BDDSTORY-EPP-2550
@Appointments
@EPP_Sprint_4
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal - Change provider during review 
  User Story: As a user, I should be able to change the provider while reviewing the appointment from patient portal.

  Acceptance Criteria:

  GIVEN

  User clicks on “Schedule Appointment” CTA from patient portal

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on ‘Search’ CTA

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  And

  User has selected a time slot

  And

  User lands on the screen to review the appointment details as in  

  WHEN

  User selects the option to change the provider 

  THEN

  User should get navigated to the screen to select a provider with time-slot as in  

  And

  System might have to remove the selection made for time-slot as updating the provider would change that

  And

  User has to once again review the appointment details as in  

  @BDDTEST-EPP-3480
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2550 - Verify the user able to change the provider while reviewing the appointment from patient portal.
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
    And user selects the Provider
    And user selected a time slot
    And user lands on the review of the appointment details
    And user views the Location section
    And user views the selected Provider and time slot
    And user clicks on the Location section Edit link
    And user views the results in the Schedule Appointments screen
    And user selects the Provider 
    And user selects the time slot
    And user lands on the review of the appointment details
