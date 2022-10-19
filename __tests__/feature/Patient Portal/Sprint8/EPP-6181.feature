
Feature: Patient Portal : Form Customization (Documents/ Forms) - Admin user navigation
  User Story: As an admin user, I should be able to view the form customization option (Navigation).

   @BDDTEST-EPP-6975
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6181 - Verify Admin user should be able to click on the ‘Forms Customization' option
    Given User launch Patient Portal url		
    And Admin user is logged into the portal
    And Admin user lands on the dashboard screen
    And Admin user views the ‘Forms Customization' menu present as part of the global header
    When Admin user clicks on the ‘Forms Customization' option
    Then Admin user lands on the screen to view the list of forms that can be customized

  @BDDTEST-EPP-6976
  @Admin
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6181 - Verify Admin user lands on the screen to view the list of forms that can be customized
    Given User launch Patient Portal url		
    And Admin user is logged into the portal
    And Admin user lands on the dashboard screen
    And Admin user views the ‘Forms Customization' menu present as part of the global header
    When Admin user clicks on the ‘Forms Customization' option
    Then Admin user lands on the screen to view the list of forms that can be customized
