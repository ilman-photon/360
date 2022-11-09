
Feature: Patient Portal : Education Materials - Download a education material
  User Story:  As a user, I should be able to download an education material.

  @BDDTEST-EPP-8150
  @PPP_Phase_2
  @Patien_Education
  @Patient_Education
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-27_STORY_EPP-6690 - Verify whether the user is able to navigate the Dashboard page
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page

  @BDDTEST-EPP-8151
  @PPP_Phase_2
  @Patien_Education
  @Patient_Education
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-27_STORY_EPP-6690 - Verify whether the User views the ‘Education Materials' sub-menu under the ‘Documents’ menu
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page
    When user clicks on Documents menu
    Then user views Education Materials menu

  @BDDTEST-EPP-8152
  @PPP_Phase_2
  @Patien_Education
  @Patient_Education
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-27_STORY_EPP-6690 - Verify whether the User is able to view the list of education materials
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page
    When user clicks on Documents menu
    Then user views Education Materials menu
    When user clicks on Education Materials 
    Then user is able to view the list of education materials

  @BDDTEST-EPP-8153
  @PPP_Phase_2
  @Patien_Education
  @Patient_Education
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-27_STORY_EPP-6690 - Verify whether the User is able to view Image, Name and Description
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page
    When user clicks on Documents menu
    Then user views Education Materials menu
    When user clicks on Education Materials 
    Then user is able to view the list of education materials
    Then user must be able to view Image
    Then user must be able to view Name
    Then user must be able to view a short Description

  @BDDTEST-EPP-8154
  @PPP_Phase_2
  @Patien_Education
  @Patient_Education
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-27_STORY_EPP-6690 - Verify whether the User is able to download the education material document
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page
    When user clicks on Documents menu
    Then user views Education Materials menu
    When user clicks on Education Materials 
    Then user is able to view the list of education materials
    Then user must be able to view Image
    Then user must be able to view Name
    Then user must be able to view a short Description 
    Then user must be to view Download option
    When user clicks on Download option 
    Then user must be able to download the education material document

  @BDDTEST-EPP-8155
  @PPP_Phase_2
  @Patien_Education
  @Patient_Education
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-27_STORY_EPP-6690 - Verify whether the User is able to download the document as a pdf to their local system/ device
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page
    When user clicks on Documents menu
    Then user views Education Materials menu
    When user clicks on Education Materials 
    Then user is able to view the list of education materials
    Then user must be able to view Image
    Then user must be able to view Name
    Then user must be able to view a short Description 
    Then user must be to view Download option
    When user clicks on Download option 
    Then user must be able to download the education material document
    Then user must validate that the document must be downloaded as pdf format in local system
