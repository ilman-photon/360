
Feature: Patient Portal : Appointments - User cannot cancel  appointments beyond a particular time

  @BDDTEST-EPP-4514
  @Authentication
  @P2
  @Patient_Portal
  @Regression
  @Sprint5
  Scenario: EPIC_EPP-3_STORY_EPP-1605-Verify User should not be able to see the option to cancel an optometry appointment 4 hours before the time of appointment
    Scenario: "EPIC_EPP-3_STORY_EPP-1605-Verify User should not be able to see the option to cancel an optometry appointment 4 hours before the time of appointment"
    
    Given user launch the  Patient Portal url		
    When User is logged in to the application
    And User clicks to “Appointments” menu
    Then User navigates to “Appointments” screen
    And User lands on “Appointments” screen
    And User should not be able to see the option to cancel an optometry appointment 4 hours before the time of appointment

  @BDDTEST-EPP-4516
  @Authentication
  @Patient_Portal
  @Sprint5
  Scenario: EPIC_EPP-3_STORY_EPP-1605-Verify User should not be able to see the option to cancel an optometry appointment 4 /24 hours before the time of appointment when user clicks F12 on the console

