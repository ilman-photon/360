
Feature: Patient Portal : Form Customization (Documents/ Forms) - Customize and publish form (Admin)
  User Story: As an admin user, I should be able to customize the form and publish them.


  @BDDTEST-EPP-7096
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6186 - Verify Admin user should be able to view all the contents of the form
    Given User launch Patient Portal url		
    And Admin user is logged into the portal
    And Admin user lands on the dashboard screen
    And Admin user views the ‘Forms Customization' menu present as part of the global header
    When Admin user clicks on the ‘Forms Customization' option
    Then Admin user lands on the screen to view the list of forms that can be customized
    When Admin user selects a form
    Then Admin user should be able to view all the contents of the form

  @BDDTEST-EPP-7097
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6186 - Verify Admin user should be able to view the latest to publish the form
    Given User launch Patient Portal url		
    And Admin user is logged into the portal
    And Admin user lands on the dashboard screen
    And Admin user views the ‘Forms Customization' menu present as part of the global header
    When Admin user clicks on the ‘Forms Customization' option
    Then Admin user lands on the screen to view the list of forms that can be customized
    When Admin user selects a form
    Then Admin user should be able to view all the contents of the form 
    And Admin should be able to view the heading of each form customizable which when changed by the admin will also change the display name of the form (eg. if the heading was “A”, then the form’s display name when patient or admin view would be “A”. If the heading is changed to “B”, then the display name of form also changes to “B”)
    And Admin user should be able to view the portions that can be customized within the form which the admin user can update/ change
    And Admin user should be able to view the fields in the form which can be filled in by the patient or pre-populated (Non editable for Admin)
    And Admin user should be able to view the option to publish the form
    When Admin click on pusblish button
    Then Admin should see latest publish form
