
Feature: Patient Portal : Form Customization (Documents/ Forms) - View list of forms
  User Story: As a user, I should be able to view the list of forms that can be filled out online.

   @BDDTEST-EPP-7040
  @Form_Customization
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6171 - Verify User should be able to view list of e-form that can be edit
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    And user should see list of e-form
    And the total e-form will be displayed is 9
