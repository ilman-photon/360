
Feature: Patient Portal : Share My Record/ Prescription - View shared history
  User Story: As a user, I should be able to view the history for the record/ prescription shared.

    @BDDTEST-EPP-5584
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should be navigated to the screen to share their record
    Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should be navigated to the screen to share their record

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record
    And User should see the page loads within 3 seconds

  @BDDTEST-EPP-5585
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User lands on the screen to share their record
    Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User lands on the screen to share their record

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record
    And User lands on the screen to share their record

  @BDDTEST-EPP-5586
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should be able to view the history for the record shared with the following details
    Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should be able to view the history for the record shared with the following details

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record
    And User lands on the screen to share their record
    And User should be able to view the history for the record shared with the following details:
    |"<Date (The date the record/ prescription was shared)>" field|
    |"<Shared with (Recipient’s Direct Messaging Address or Email)>" field|
    |"<Delivery Status (Delivered, Pending & Failed) - Based on Tech team feasibility>" field|

  @BDDTEST-EPP-5587
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should not have the option to edit or delete the history; just view
    Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should not have the option to edit or delete the history; just view

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record
    And User lands on the screen to share their record
    And User should be able to view the history for the record shared with the following details:
    |"<Date (The date the record/ prescription was shared)>" field|
    |"<Shared with (Recipient’s Direct Messaging Address or Email)>" field|
    |"<Delivery Status (Delivered, Pending & Failed) - Based on Tech team feasibility>" field|
    And User should not have the option to edit or delete the history; just view

  @BDDTEST-EPP-5588
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should be navigated to the screen to share their record - Within 3 seconds
    Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should be navigated to the screen to share their record - Within 3 seconds

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record
    And User should see the page loads within 3 seconds

  @BDDTEST-EPP-5589
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should not see the any errors script when user clicks F12 on the console - When User navigated to the screen to share their record
    Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should not see the any errors script when user clicks F12 on the console - When User navigated to the screen to share their record 

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record
    And User should see the page loads within 3 seconds
    When user clicks on F12 on the console
    Then user should not to see any errors script

  @BDDTEST-EPP-5590
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4886 Negative Test Cases-Verify user should see the error message when the internet service is unavailable - When User navigated to the screen to share their record
    Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should be navigated to the screen to share their record

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-5591
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-20_STORY_EPP-4886 Negative Test Cases-Verify user should see the error message when the service is unavailable - When User navigated to the screen to share their record
    Scenario: EPIC_EPP-20_STORY_EPP-4886 - Verify User should be navigated to the screen to share their record

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should see "Shared History"  menu
    When User selects the "Shared History" menu 
    Then User should be navigated to the screen to share their record
    And the service is unavailable
    Then user should see the appropriate error message
