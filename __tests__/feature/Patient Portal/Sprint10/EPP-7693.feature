
Feature: Patient Portal : Form Customization (Documents/ Forms) - View list of submitted forms

  @BDDTEST-EPP-10722
  @Manage_Account
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint10
  Scenario: EPIC_EPP-5256_STORY_EPP-7693- Verify User should be able to view the list of submitted forms i.e name of each form listed
    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When User clicks on the ‘Intake Forms’ option
    Then User lands on the screen to view the list of forms that can be filled online
    And User should be able to view the list of forms and its details
    When User clicks on the Submitted forms tab
    Then User should be able to view the list of submitted forms i.e name of each form listed

  @BDDTEST-EPP-10723
  @Manage_Account
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint10
  Scenario: EPIC_EPP-5256_STORY_EPP-7693- Verify User should be able to view only the latest submitted form of those 9 forms that have been filled online
    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When User clicks on the ‘Intake Forms’ option
    Then User lands on the screen to view the list of forms that can be filled online
    And User should be able to view the list of forms and its details
    When User clicks on the Submitted forms tab
    Then User should be able to view the list of submitted forms i.e name of each form listed
    And User should be able to view only the latest submitted form of those 9 forms that have been filled online

  @BDDTEST-EPP-10724
  @Manage_Account
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint10
  Scenario: EPIC_EPP-5256_STORY_EPP-7693- Verify User should be able to view the last submitted date for each of the submitted form
    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When User clicks on the ‘Intake Forms’ option
    Then User lands on the screen to view the list of forms that can be filled online
    And User should be able to view the list of forms and its details
    When User clicks on the Submitted forms tab
    Then User should be able to view the list of submitted forms i.e name of each form listed
    And User should be able to view only the latest submitted form of those 9 forms that have been filled online 
    And User should be able to view the last submitted date for each of the submitted form

  @BDDTEST-EPP-10725
  @Manage_Account
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint10
  Scenario: EPIC_EPP-5256_STORY_EPP-7693- Verify User should be able to view the option to download each submitted form
    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When User clicks on the ‘Intake Forms’ option
    Then User lands on the screen to view the list of forms that can be filled online
    And User should be able to view the list of forms and its details
    When User clicks on the Submitted forms tab
    Then User should be able to view the list of submitted forms i.e name of each form listed
    And User should be able to view only the latest submitted form of those 9 forms that have been filled online 
    And User should be able to view the last submitted date for each of the submitted form
    And User should be able to view the option to download each submitted form
