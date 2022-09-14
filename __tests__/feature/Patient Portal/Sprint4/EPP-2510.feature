@BDDSTORY-EPP-2510
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule Appointment from marketing site - Select time slot for appointment
  User Story: As a user, I should be able to select a time slot of a provider to schedule appointment.

  Acceptance Criteria:

  GIVEN

  User clicks 'Schedule your Eye Exam' CTA from Marketing site

  And

  User provides location, select the date of appointment as well as purpose of visit and insurance

  And

  User clicks on the option to Search

  And

  User lands on “Schedule Appointment” screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided) along with relevant results already present there as in  

  WHEN

  User selects a time slot of the provider

  THEN

  User should be navigated to review the appointment details  

  @BDDTEST-EPP-3093
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2510-Verify whether the Time slot is available in the Schedule Appointment view screen
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location
    And user should select the Date of Appointment
    And user should select the Purpose of visit
    And user should select the Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    Then user should see the time slots of each doctor.

  @BDDTEST-EPP-3094
  @Appointments
  @Authentication
  @P2
  @Patient_Portal
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2510-Verify whether the user is able to select any time slot.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location
    And user should select the Date of Appointment
    And user should select the Purpose of visit
    And user should select the Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    And user is able to select any available time slot with their desired Provider.
    Then user should see the Appointment details review page.

  @BDDTEST-EPP-3095
  @Appointments
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2510-Verify whether the user is navigated to appointment details review page after selecting the time slot.
    Given user launch the Marketing Site url		
    When user clicks on the Schedule your Eye Exam button
    And user navigates to the schedule appointment screen
    And user should select the location
    And user should select the Date of Appointment
    And user should select the Purpose of visit
    And user should select the Insurance carrier.
    And click on Search button
    And user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.
    Then user is able to select any available time slot with their desired Provider.
