
Feature: Patient Portal: Navigation Menu – Top navigation menu for logged in patient
  User Story: As a user, I should be able to view top navigation menu with navigation options available for logged in patient

  @BDDTEST-EPP-8280
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7206 - Verify User should be able to view Top Navigation Menu
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

  @BDDTEST-EPP-8281
  @P2
  @Patient_Portal
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7206 - Verify User should be able to view active default of Top Navigation Menu is Dashboard
    Given user launch Patient Portal url		
    And user is logged into the portal
    And user lands on the dashboard screen
    And user should see Top Navigation Menu default is Dashboard

  @BDDTEST-EPP-8282
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7206 - Verify User should be able to view Sub Menu of Health Chart
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
    When User Click on Health Chart menu
    Then Sub menu is displayed such as Prescriptions, Test & Lab Results, Care Plan Overview

  @BDDTEST-EPP-8283
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7206 - Verify User should be able to view Sub Menu of Pay My Bill
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

  @BDDTEST-EPP-8284
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7206 - Verify User should be able to view Sub Menu of Document
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
    When User Click on Document menu
    Then Sub menu is displayed such as Intake Forms, Insurance Forms,  Health records, Education Documents
