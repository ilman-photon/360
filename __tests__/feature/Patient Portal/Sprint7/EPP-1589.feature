
Feature: Patient Portal : Message/ Alerts - View
  User Story: As a user, I should be able to view the list of alerts in the global header.

   @BDDTEST-EPP-6569
  @Message_Center
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1589 - Verify User should be able to view the unread alerts listed one below the other with an option against each to dismiss
    Scenario: EPIC_EPP-22_STORY_EPP-1589 - Verify User should be able to view the unread alerts listed one below the other with an option against each to dismiss

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view the unread alerts listed one below the other with an option against each to dismiss

  @BDDTEST-EPP-6570
  @Message_Center
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1589 - Verify User should see list unread alerts on how recent they are i.e. recent alerts will be on top
    Scenario: EPIC_EPP-22_STORY_EPP-1589 - Verify User should see list unread alerts on how recent they are i.e. recent alerts will be on top

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view the unread alerts listed one below the other with an option against each to dismiss
    And User should see list unread alerts on how recent they are i.e. recent alerts will be on top

  @BDDTEST-EPP-6571
  @Message_Center
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1589 - Verify User should have the option to clear all alerts
    Scenario: EPIC_EPP-22_STORY_EPP-1589 - Verify User should have the option to clear all alerts

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view the unread alerts listed one below the other with an option against each to dismiss
    And User should see list unread alerts on how recent they are i.e. recent alerts will be on top
    And User should have the option to clear all alerts

  @BDDTEST-EPP-6572
  @Message_Center
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1589 - Verify User should be able to view alerts being removed from the list of alerts as and when they are read
    Scenario: EPIC_EPP-22_STORY_EPP-1589 - Verify User should be able to view alerts being removed from the list of alerts as and when they are read

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view the unread alerts listed one below the other with an option against each to dismiss
    And User should see list unread alerts on how recent they are i.e. recent alerts will be on top
    And User should be able to view alerts being removed from the list of alerts as and when they are read

  @BDDTEST-EPP-6573
  @Message_Center
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1589 -Negative Test Cases-Verify  when the service is unavailable
    Scenario: EPIC_EPP-22_STORY_EPP-1589 -Negative Test Cases-Verify  when the service is unavailable

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    And the service is unavailable
    Then user should see the appropriate error message
