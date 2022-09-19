Feature: Patient Portal : Schedule appointment from Patient Portal - Select time slot for Appointment

  @BDDTEST-EPP-3211
  @Appointments
  @Patient_Portal
  @included
  @Sprint4
  Scenario: EPIC_EPP-44_STORY_EPP-2543-Verify User should be navigated to "Schedule Appointment" screen with the selected data
    Given User launch the "Marketing Site" url
    When User clicks on the "Schedule your Eye Exam" button
    Then User should navigated to the search screen
    And User should fill the location
    And User should select the date of appointment 
    And User should select the purpose of the visit
    And User should fill the insurance name
    And User should see the option to Search
    When User clicks on the option to Search
    Then User should navigated on "Schedule Appointment" screen 
    And User should see the selected location
    And User should see the selected date
    And User should see the purpose of visit (if provided) 
    And And User should see the insurance carrier (if provided)