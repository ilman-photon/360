
Feature: Patient Portal : Message/ Alerts - Receive alerts for the following
  User Story: As a user, I should receive alerts for the following actions.

    @BDDTEST-EPP-5680
  @Message_Center
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view upcoming appointment types of alerts
    Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view upcoming appointment types of alerts

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view upcoming appointment types of alerts
    |"<You have an <purpose of visit/ test/ procedure> appointment in 3 days.>" field as 3 Days before appointment|
    |"<You have an <purpose of visit/ test/ procedure> appointment tomorrow.>" field as 1 Day1 before appointment|

  @BDDTEST-EPP-5681
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view test/ lab result is available types of alerts
    Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view test/ lab result is available types of alerts

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view test/ lab result is available types of alerts
    |"<Your <test/ lab name> test results are available now>" field as test/ lab result is available|

  @BDDTEST-EPP-5682
  @Message_Center
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view visit summary is available types of alerts
    Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view visit summary is available types of alerts

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view visit summary is available types of alerts
    |"<Your visit summary for your appointment on <appointment date> is available now.>" field as visit summary is available|

  @BDDTEST-EPP-5683
  @Message_Center
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view prescription refill is available for download types of alerts
    Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view prescription refill is available for download types of alerts

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view prescription refill is available for download types of alerts
    |"<Your prescription refill is available now>" field as prescription refill is available for download|

  @BDDTEST-EPP-5684
  @Message_Center
  @Patient_Portal
  @Regression
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view new message is received types of alerts
    Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view new message is received types of alerts

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view new message is received types of alerts
    |"<You have received a new message from <Provider name>>" field as new message is received|

  @BDDTEST-EPP-6590
  @Message_Center
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view new glass or lens prescription is available types of alerts
    Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view new glass or lens prescription is available types of alerts

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view new glass or lens prescription is available types of alerts
    |"<You have your <Glasses/ Contact Lens> prescription available now.>" field as new glass or lens prescription is available|

  @BDDTEST-EPP-6591
  @Message_Center
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view new medication prescription is available types of alerts
    Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view new medication prescription is available types of alerts

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view new medication prescription is available types of alerts
    |"<Your <medication name> prescription is now available.>" field as new medication prescription is available|

  @BDDTEST-EPP-6671
  @Message_Center
  @Patient_Portal
  @Sprint7
  Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view contact lens or glasses is available for pick up types of alerts
    Scenario: EPIC_EPP-22_STORY_EPP-1590 - Verify User should be able to view contact lens or glasses is available for pick up types of alerts

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User is able to view the alerts option on the global header (like notifications)
    When User clicks on the alerts option 
    Then User should be able to view contact lens or glasses is available for pick up types of alerts
    |"<Your <Contact Lens/ Glasses> are available for pickup.>" field as contact lens or glasses is available for pick up|
