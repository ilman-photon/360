
Feature: Patient Portal : Form Customization (Documents/ Forms) - Select and view form
  User Story: As a user, I should be able to select a form to view them.

  @BDDTEST-EPP-6990
  @ManageAccount
  @P1.Regression
  @Patient_portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6173-To verify whether the Patient is able to view the list of open forms which can be filled out online
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the Documents menu.
    Then Patient should see the list of forms.

  @BDDTEST-EPP-6991
  @ManageAccount
  @P1.Regression
  @Patient_portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6173-To verify whether the Patient is able to view the contents of the form if we click any form
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the Documents menu.
    And Patient should see the list of forms.
    And click any form to view
    Then Patient should see the contents of the form.

  @BDDTEST-EPP-6992
  @ManageAccount
  @P1.Regression
  @Patient_portal
  @Sprint8
  Scenario Outline: EPIC_EPP-5256_STORY_EPP-6173-To verify whether the Patient is able to view the below mentioned fields in the form which can be filled by the patient
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the Documents menu.
    And Patient should see the list of forms.
    And select any form
    Then patient should see the below mentioned fields

    Examples:
    Consent to Treat Patient Fin Responsibility Assignment of Benefits
    ECP Notice of Privacy Practices
    Medical vs Vision Refractions Prescription Release
    Authorization to Disclose Information about my Care
    Consent to Treat Minor
    Contact Lens Prescription Release
    Consent Form_Update 04.2022
    Consent Form_Update 04.2022_V3
    Insurance vs. Private Pay Consent

  @BDDTEST-EPP-6993
  @ManageAccount
  @P1.Regression
  @Patient_portal
  @Sprint8
  Scenario Outline: EPIC_EPP-5256_STORY_EPP-6173-To verify whether the mentioned fields are prepopulated in the form
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the Documents menu.
    And Patient should see the list of forms.
    And select any form
    Then patient should see the below mentioned fields with Prepopulated values.

    Examples:
    Consent to Treat Patient Fin Responsibility Assignment of Benefits
    ECP Notice of Privacy Practices
    Medical vs Vision Refractions Prescription Release
    Authorization to Disclose Information about my Care
    Consent to Treat Minor
    Contact Lens Prescription Release
    Consent Form_Update 04.2022
    Consent Form_Update 04.2022_V3
    Insurance vs. Private Pay Consent

  @BDDTEST-EPP-6994
  @ManageAccount
  @P1.Regression
  @Patient_portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6173-To verify whether the Patient is able to e-Sign the form option is available.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the Documents menu.
    And Patient should see the list of forms.
    And select any form
    And the patient should see the e-Sign option.

  @BDDTEST-EPP-6995
  @ManageAccount
  @P1.Regression
  @Patient_portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6173-To verify whether the patient is able to download the form 'ECP Notice of Privacy Practices' and view offline.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the Documents menu.
    And Patient should see the list of forms.
    And select any form
    And click the download of 'ECP Notice of Privacy Practices' and view in offline.
