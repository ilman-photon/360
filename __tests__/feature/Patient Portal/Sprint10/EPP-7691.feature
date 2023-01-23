
Feature: Patient Portal : Form Customization (Documents/ Forms) - View option to download the online form before filling them online
  User Story: As a user, I should be able to view the option to download the online form (Before filling).

  @BDDTEST-EPP-10720
  @Manage_Account
  @P1
  @Patient_Portal
  @Regression
  @included
  @Sprint10
  Scenario: EPIC_EPP-5256_STORY_EPP-7691- Verify User should be able to view the option to download each form to fill them offline
    Given User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When User clicks on the ‘Intake Forms’ option
    Then User lands on the screen to view the list of forms that can be filled online
    And User should be able to view the list of forms and its details
    And User should be able to view the option to download each form to fill them offline
