@BDDSTORY-EPP-2512
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Select time slot for appointment in map view
  User Story: As a user, I should be able to select a time slot of a provider to schedule appointment from map view.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  And

  User clicks on any pin in Map view

  WHEN

  User selects a time slot of the provider

  THEN

  User should be navigated to review the appointment details  

  @BDDTEST-EPP-3041
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2512-Verify if user able to select a time slot of the provider


  @BDDTEST-EPP-3042
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2512-Verify if user able to navigate to review appointment details
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    Then user lands on to the screen
    When user click on pin location in Map view
    Then user should see time slot for provider 
    And user select provider with the time slot available 
    Then user should lands onto review appointment page 
    And user should see Review Appointnment detail
