
Feature: Patient Portal : Form Customization (Documents/ Forms) - Select and view form

  @BDDTEST-EPP-6990
  @ManageAccount
  @P1.Regression
  @Patient_portal
  @included
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
  @included
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
  @included
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6173-To verify whether the Patient is able to view the below mentioned fields in the form which can be filled by the patient
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the Documents menu.
    And Patient should see the list of forms.
    And select any form
    Then patient should see the below mentioned fields

  @BDDTEST-EPP-6993
  @ManageAccount
  @P1.Regression
  @Patient_portal
  @included
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6173-To verify whether the mentioned fields are prepopulated in the form
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the Documents menu.
    And Patient should see the list of forms.
    And select any form
    Then patient should see the below mentioned fields with Prepopulated values.

  @BDDTEST-EPP-6994
  @ManageAccount
  @P1.Regression
  @Patient_portal
  @included
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
  @included
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6173-To verify whether the patient is able to download the form 'ECP Notice of Privacy Practices' and view offline.
    Given user launch Patient Portal url		
    When user is logged in to the application
    And click the Documents menu.
    And Patient should see the list of forms.
    And select any form
    And click the download of 'ECP Notice of Privacy Practices' and view in offline.
