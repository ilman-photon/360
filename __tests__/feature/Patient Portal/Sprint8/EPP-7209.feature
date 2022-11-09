
Feature: Patient Portal: Navigation Menu – Top navigation sub menu options for Documents for logged in patient
  User Story: As a user, I should be able to view sub menu options for Health Chart for logged in patient

  @BDDTEST-EPP-8420
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7209 - Verify User should be able to view Sub Menu of Document
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

  @BDDTEST-EPP-8421
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7209 - Verify User should be navigate to patient intake forms screen
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
    When user click on Intake Forms sub menu
    Then user should be navigate to patient intake forms screen

  @BDDTEST-EPP-8422
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7209 - Verify User should be navigate to patient Insurance Forms screen
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
    When user click on Insurance Forms sub menu
    Then user should be navigate to patient Insurance Forms screen

  @BDDTEST-EPP-8423
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7209 - Verify User should be navigate to patient Health records screen
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
    When user click on Health records sub menu
    Then user should be navigate to patient Health records screen

  @BDDTEST-EPP-8424
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  @Top_Navigation_Menu
  Scenario: EPIC_EPP-7205_STORY_EPP-7209 - Verify User should be navigate to patient Education Documents screen
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
    When user click on Education Documents sub menu
    Then user should be navigate to patient Education Documents screen
