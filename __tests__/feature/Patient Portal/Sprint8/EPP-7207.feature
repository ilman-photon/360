
Feature: Patient Portal: Navigation Menu – Top navigation sub menu options for Health Chart for logged in patient
  User Story: As a user, I should be able to view sub menu options for Health Chart for logged in patient

  @BDDTEST-EPP-8285
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7207 - Verify User should be able to view Sub Menu of Health Chart
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

  @BDDTEST-EPP-8286
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7207 - Verify User should navigate to prescriptions screen
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
    When user click on Prescriptions sub menu
    Then user should navigated to Prescriptions screen

  @BDDTEST-EPP-8287
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7207 - Verify User should to navigate to Care Plan Overview screen
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
    When user click on Care Plan Overview sub menu
    Then user should navigated to Care Plan Overview screen
