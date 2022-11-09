
Feature: Patient Portal : Form Customization (Documents/ Forms) - Patient details auto-fill in forms
  User Story: As a user, I should be able to view my personal details being auto-filled when I open an online form.
 
 @BDDTEST-EPP-7045
  @Form_Customization
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6178 - Verify User should see the patient-related details being pre-populated in the selected form
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on one of form
    Then user should see the patient-related details being pre-populated in the selected form

  @BDDTEST-EPP-7046
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6178 - Verify User should not be able to edit the pre-populated fields
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on one of form
    Then user should see the patient-related details being pre-populated in the selected form
    When user click on field
    Then user should see field is disable
    And user should not be able to edit the field

  @BDDTEST-EPP-7047
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6178 - Verify user should see field to be prepopulated on Consent to Treat Patient Fin Responsibility Assignment of Benefits form
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on related form
    Then user should see field to be prepopulated on Consent to Treat Patient Fin Responsibility Assignment of Benefits form below
    | Patient Name
    | Date (Today’s date)
    | Date of Birth (Patient DOB)

  @BDDTEST-EPP-7048
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6178 - Verify user should see field to be prepopulated on Medical vs Vision Refractions Prescription Release form
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on related form
    Then user should see field to be prepopulated on Medical vs Vision Refractions Prescription Release form below
    | Date (Today’s date)

  @BDDTEST-EPP-7049
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6178 - Verify user should see field to be prepopulated on Authorization to Disclose Information about my Care form
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on related form
    Then user should see field to be prepopulated on Authorization to Disclose Information about my Care form below
    | Date (Today’s date)

  @BDDTEST-EPP-7050
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6178 - Verify user should see field to be prepopulated on Consent to Treat Minor form
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on related form
    Then user should see field to be prepopulated on Consent to Treat Minor form below
    | Patient’s Name (All 2)
    | Date (Today’s date)

  @BDDTEST-EPP-7051
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6178 - Verify user should see field to be prepopulated on Contact Lens Prescription Release form
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on related form
    Then user should see field to be prepopulated on Contact Lens Prescription Release form below
    | Date (Today’s date)

  @BDDTEST-EPP-7052
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6178 - Verify user should see field to be prepopulated on Consent Form_Update 04.2022 form
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on related form
    Then user should see field to be prepopulated on Consent Form_Update 04.2022 form below
    | Date (Today’s date)
    | Patient Name
    | Date of Birth
    | Date (Today’s date) (Electronics communication section)
    | Date (Today’s date) (Designation of Agent section)

  @BDDTEST-EPP-7053
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6178 - Verify user should see field to be prepopulated on Consent Form_Update 04.2022_V3 form
    Given user launch Patient Portal url		
    And user is logged in to the application
    And user lands on the dashboard
    And user views the ‘Intake Forms' sub-menu under the ‘Documents’ menu present as part of the global header
    When user click on the ‘Intake Forms’ option
    Then user lands on the screen to view the list of forms that can be filled online
    When user click on related form
    Then user should see field to be prepopulated on Consent Form_Update 04.2022_V3 form below
    |Date (Today’s date)
    |Patient Name
    |Date of Birth
    |Date (Today’s date) (Designation of Agent section)
