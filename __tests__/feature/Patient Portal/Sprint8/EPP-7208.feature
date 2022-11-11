
Feature: Patient Portal: Navigation Menu – Top navigation sub menu options for Pay My Bill for logged in patient
  User Story: As a user, I should be able to view sub menu options for Pay My Bill for logged in patient

  @BDDTEST-EPP-8288
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7208 - Verify User should be able to view Sub Menu of Pay My Bill
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard
    |Appointments
    |Health Chart
    |My Care Team
    |Pay My Bill
    |Messaging
    |Documents
    When User Click on Pay My Bill menu
    Then Sub menu is displayed such as Invoice History, View & Pay Open Invoices

  @BDDTEST-EPP-8289
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7208 - Verify User should navigate to invoice history screen
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard
    |Appointments
    |Health Chart
    |My Care Team
    |Pay My Bill
    |Messaging
    |Documents
    When User Click on Pay My Bill menu
    Then Sub menu is displayed such as Invoice History, View & Pay Open Invoices
    When user click on History sub menu
    Then user should navigate to invoice history screen

  @BDDTEST-EPP-8290
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7208 - Verify User should navigate to open invoice screen
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu such as
    |Dashboard
    |Appointments
    |Health Chart
    |My Care Team
    |Pay My Bill
    |Messaging
    |Documents
    When User Click on Pay My Bill menu
    Then Sub menu is displayed such as Invoice History, View & Pay Open Invoices
    When user click on View & Pay Open Invoices sub menu
    Then user should navigate to open invoice screen
