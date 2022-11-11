
Feature: Patient Portal: Navigation Menu – Top navigation menu for logged in admin
  User Story: As an Admin, I should be able to view top navigation menu with navigation options available for logged in admin

  @BDDTEST-EPP-8428
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7212 - Verify User should be able to view Top Navigation Menu
    Given Admin launch Patient Portal url		
    And Admin is logged into the portal
    And Admin lands on the dashboard screen
    And Admin should see Top Navigation Menu such as
    |Dashboard
    |Appointments
    |Health Chart
    |My Care Team
    |Pay My Bill
    |Messaging
    |Documents

  @BDDTEST-EPP-8429
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7212 - Verify User should be able to view Sub Menu of Document
    Given Admin launch Patient Portal url		
    And Admin is logged into the portal
    And Admin lands on the dashboard screen
    And Admin should see Top Navigation Menu such as
    |Dashboard
    |Appointments
    |Health Chart
    |My Care Team
    |Pay My Bill
    |Messaging
    |Documents
    When Admin click on Document menu
    Then Admin should see sub menu option “Intake Forms”
