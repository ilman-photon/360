
Feature: Patient Portal : Form Customization (Documents/ Forms) - Customize form (Admin)
  User Story: As an admin user, I should be able to select a form and customize them.

  @BDDTEST-EPP-5537
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6185 - Verify user should be able to update the content as required (plain text format)

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
    When Admin user selects the portion of the content that needs to be customized
    Then Admin user should be able to update the content as required (plain text format)
    And Admin fills the required contents

  @BDDTEST-EPP-5538
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6185 - Verify Admin user should be able to publish of the content that has been customized

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
    When Admin user selects the portion of the content that needs to be customized
    Then Admin user should be able to update the content as required (plain text format)
    And Admin fills the required contents
    When Admin click on pusblish button
    Then Admin should see latest publish form

  @BDDTEST-EPP-5539
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: PIC_EPP-5256_STORY_EPP-6185 - Verify Admin user should see the following inline error message "This portion of content cannot be blank."

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
    When Admin user selects the portion of the content that needs to be customized
    Then Admin user should be able to update the content as required (plain text format)
    And Admin user tries to publish a form with any portion of content completely blank
    When Admin click on pusblish button
    Then Admin user should see the following inline error message "This portion of content cannot be blank."

  @BDDTEST-EPP-5540
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6185 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when Admin should be able to publish of the content that has been customized

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
    When Admin user selects the portion of the content that needs to be customized
    Then Admin user should be able to update the content as required (plain text format)
    And Admin fills the required contents
    When Admin click on pusblish button
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-5541
  @Admin
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6185 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when Admin should be able to publish of the content that has been customized

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
    When Admin user selects the portion of the content that needs to be customized
    Then Admin user should be able to update the content as required (plain text format)
    And Admin fills the required contents
    When Admin click on pusblish button
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-5549
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6185 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when Admin should see the following inline error message "This portion of content cannot be blank."

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
    When Admin user selects the portion of the content that needs to be customized
    Then Admin user should be able to update the content as required (plain text format)
    And Admin user tries to publish a form with any portion of content completely blank
    When Admin click on pusblish button
    Then Admin user should see the following inline error message "This portion of content cannot be blank."
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-5550
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6185 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when Admin should see the following inline error message "This portion of content cannot be blank."

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
    When Admin user selects the portion of the content that needs to be customized
    Then Admin user should be able to update the content as required (plain text format)
    And Admin user tries to publish a form with any portion of content completely blank
    When Admin click on pusblish button
    Then Admin user should see the following inline error message "This portion of content cannot be blank."
    And the service is unavailable
    Then user should see the appropriate error message
