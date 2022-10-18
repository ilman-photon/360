@BDDSTORY-EPP-6179
@Manage_Account
@PPP_Phase_2
@Patient_Portal
Feature: Patient Portal : Form Customization (Documents/ Forms) - E-sign forms
  User Story: As a user, I should be able to e-sign the required forms.

  Acceptance Criteria:

  GIVEN

  User is logged into the portal

  And

  User lands on the screen to view the list of forms that can be filled out online (refer -  )

  And

  User selects a form to be filled out

  WHEN

  User lands on the form to fill in the details

  THEN

  User fills in all the required details

  And

  User should be able to e-sign the form (E-sign integration to happen for the following forms)

  | Form                                                               | E-sign integration |
  |--------------------------------------------------------------------|--------------------|
  | Consent to Treat Patient Fin Responsibility Assignment of Benefits | Yes                |
  |--------------------------------------------------------------------|--------------------|
  | ECP Notice of Privacy Practices                                    | No                 |
  |--------------------------------------------------------------------|--------------------|
  | Medical vs Vision Refractions Prescription Release                 | Yes                |
  |--------------------------------------------------------------------|--------------------|
  | Authorization to Disclose Information about my Care                | Yes                |
  |--------------------------------------------------------------------|--------------------|
  | Consent to Treat Minor                                             | Yes                |
  |--------------------------------------------------------------------|--------------------|
  | Contact Lens Prescription Release                                  | Yes                |
  |--------------------------------------------------------------------|--------------------|
  | Consent Form_Update 04.2022                                        | Yes                |
  |--------------------------------------------------------------------|--------------------|
  | Consent Form_Update 04.2022_V3                                     | Yes                |
  |--------------------------------------------------------------------|--------------------|
  | Insurance vs. Private Pay Consent                                  | Yes                |

  what would be the e-sign tool?

  And

  User should see an error message “You need to e-sign the form to submit.” when the patient does not e-sign the form but click on the option to submit



  Note: Please refer to these 9 forms - 

  @BDDTEST-EPP-7054
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6179 - Verify User should be able to view error message "You need to e-sign the form to submit" when user submit without E-sign the form.
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on one of form
    Then user should see the patient-related details being pre-populated in the selected form
    And user filled-out form
    When user click on Submit button
    Then user should be able to view error message "You need to e-sign the form to submit"

  @BDDTEST-EPP-7055
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6179 - Verify User should be able to view error message "You need to e-sign the form to submit" when user submit without filled-out the form.
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on one of form
    Then user should see the patient-related details being pre-populated in the selected form
    And user is not filled-out form
    When user click on Submit button
    Then user should be able to view error message "You need to e-sign the form to submit"

  @BDDTEST-EPP-7056
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6180 - Verify User should redirect to fill out forms online
    Given user already created an Appointment
    And user should see Appointment Confirmation overlay
    Then user should see Fill forms button
    When user click on Fill forms
    Then user should lands on to fill out forms online
