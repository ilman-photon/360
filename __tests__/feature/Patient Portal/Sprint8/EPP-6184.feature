Feature: Patient Portal : Form Customization (Documents/ Forms) - Select and view form to be customized (Admin)
  User Story: As an admin user, I should be able to select and view the form that can be customized.


  @BDDTEST-EPP-6584
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
    Scenario: EPIC_EPP-5256_STORY_EPP-6184 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when Admin user clicks on cancel button

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
    And Admin user should be able to view the option to discard changes
    When Admin user clicks on cancel button
    And the service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6585
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
    Scenario: EPIC_EPP-5256_STORY_EPP-6184 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when Admin user clicks on cancel button

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
    And Admin user should be able to view the option to discard changes
    When Admin user clicks on cancel button
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-6586
  @Admin
  @Manage_Account
  @Patient_Portal
  @Regression
  @Sprint8
    Scenario: EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin user clicked will cancel the changes made and revert the contents of the form to the previous published version; navigate the admin user to list of customizable forms

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
    And Admin user should be able to view the option to discard changes
    When Admin user clicked will cancel the changes made and revert the contents of the form to the previous published version; navigate the admin user to list of customizable forms

  @BDDTEST-EPP-6587
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
    Scenario: EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin user should be able to view the option to discard changes

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
    And Admin user should be able to view the option to discard changes

  @BDDTEST-EPP-6589
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
    Scenario: EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin user should be able to view the option to publish the form

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

  @BDDTEST-EPP-6978
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
    Scenario: EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin user should be able to view the portions that can be customized within the form which the admin user can update/ change

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

  @BDDTEST-EPP-6984
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
    Scenario: EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin should be able to view the heading of each form customizable which when changed by the admin will also change the display name of the form

    Given User launch Patient Portal url		
    And Admin user is logged into the portal
    And Admin user lands on the dashboard screen
    And Admin user views the ‘Forms Customization' menu present as part of the global header
    When Admin user clicks on the ‘Forms Customization' option
    Then Admin user lands on the screen to view the list of forms that can be customized
    When Admin user selects a form
    Then Admin user should be able to view all the contents of the form 
    And Admin should be able to view the heading of each form customizable which when changed by the admin will also change the display name of the form (eg. if the heading was “A”, then the form’s display name when patient or admin view would be “A”. If the heading is changed to “B”, then the display name of form also changes to “B”)

  @BDDTEST-EPP-6985
  @Admin
  @Manage_Account
  @Patient_Portal
  @Sprint8
    Scenario: EPIC_EPP-5256_STORY_EPP-6184 - Verify Admin user should be able to view all the contents of the form 

    Given User launch Patient Portal url		
    And Admin user is logged into the portal
    And Admin user lands on the dashboard screen
    And Admin user views the ‘Forms Customization' menu present as part of the global header
    When Admin user clicks on the ‘Forms Customization' option
    Then Admin user lands on the screen to view the list of forms that can be customized
    When Admin user selects a form
    Then Admin user should be able to view all the contents of the form
