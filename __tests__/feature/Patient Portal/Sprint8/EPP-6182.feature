
Feature: Patient Portal : Form Customization (Documents/ Forms) - View list of customizable forms (Admin)
  User Story: As an admin user, I should see the list of customizable forms.

 
  @BDDTEST-EPP-6980
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6182 - Verify Admin user lands on the screen to view the list of forms that can be customized
    Given User launch Patient Portal url		
    And Admin user is logged into the portal
    And Admin user lands on the dashboard screen
    And Admin user views the ‘Forms Customization' menu present as part of the global header
    When Admin user clicks on the ‘Forms Customization' option
    Then Admin user lands on the screen to view the list of forms that can be customized

  @BDDTEST-EPP-6981
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6182 - Verify Admin user views the list of 8 forms displayed one below the other
    Given User launch Patient Portal url		
    And Admin user is logged into the portal
    And Admin user lands on the dashboard screen
    And Admin user views the ‘Forms Customization' menu present as part of the global header
    When Admin user clicks on the ‘Forms Customization' option
    Then Admin user lands on the screen to view the list of forms that can be customized
    And Admin user views the list of 8 forms displayed one below the other

  @BDDTEST-EPP-6982
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6182 - Verify Admin user should be able to select a form to customize
    Given User launch Patient Portal url		
    And Admin user is logged into the portal
    And Admin user lands on the dashboard screen
    And Admin user views the ‘Forms Customization' menu present as part of the global header
    When Admin user clicks on the ‘Forms Customization' option
    Then Admin user lands on the screen to view the list of forms that can be customized
    And Admin user views the list of 8 forms displayed one below the other
    And Admin user should be able to select a form to customize

  @BDDTEST-EPP-6983
  @Admin
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6182 - Verify Admin user need not view this form “Consent to Treat Minor” here as there is no customization required for this form
    Given User launch Patient Portal url		
    And Admin user is logged into the portal
    And Admin user lands on the dashboard screen
    And Admin user views the ‘Forms Customization' menu present as part of the global header
    When Admin user clicks on the ‘Forms Customization' option
    Then Admin user lands on the screen to view the list of forms that can be customized
    And Admin user views the list of 8 forms displayed one below the other
    And Admin user should be able to select a form to customize
    And Admin user need not view this form “Consent to Treat Minor” here as there is no customization required for this form
