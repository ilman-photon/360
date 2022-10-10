@BDDSTORY-EPP-2545
@Appointments
@P1
@Patient_Portal
Feature: Patient Portal : Schedule appointment from Patient Portal - Select time slot for appointment in map view
  User Story: As a user, I should be able to select a time slot of a provider to schedule appointment from map view from patient portal.

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

  User clicks on any pin in Map view

  WHEN

  User selects a time slot of the provider

  THEN

  User should be navigated to review the appointment details  

  @BDDTEST-EPP-3114
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2545-Verify if user able to select a time slot of the provider
    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password 
    And user clicks on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on ‘Search’ menu
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    When user click on pin location in Map view
    Then user should see time slot for provider 
    And user select provider with the time slot available

  @BDDTEST-EPP-3115
  @Appointments
  @P1
  @Patient_Portal
  @Regression
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2545-Verify if user able to navigate to review appointment details

    Given user launch the Patient Portal url	
    When user provides valid Email or Phone Number and password 
    And user clicks on Login button
    Then user navigates to the Patient Portal application	
    When user  clicks on Schedule Appointment menu
    Then user navigates to the search screen
    And user provided location,date of appointment,purpose of visit,insurance and provider
    And user clicks on ‘Search’ menu
    Then user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier
    When user click on pin location in Map view
    Then user should see time slot for provider 
    And user select provider with the time slot available 
    Then user should lands onto review appointment page 
    And user should see Review Appointnment detail
