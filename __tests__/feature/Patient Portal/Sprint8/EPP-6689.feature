
Feature: Patient Portal : Education Materials - View list of education materials
  User Story: As a user, I should be able to view the list of education materials.

  @BDDTEST-EPP-8144
  @PPP_Phase_2
  @Patien_Education
  @Patient_Portal
  Scenario: EPIC_EPP-27_STORY_EPP-6689 - Verify whether the user is able to navigate the Dashboard page
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

  @BDDTEST-EPP-8145
  @PPP_Phase_2
  @Patien_Education
  @Patient_Portal
  Scenario: EPIC_EPP-27_STORY_EPP-6689 - Verify whether the User views the ‘Education Materials' sub-menu under the ‘Documents’ menu
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page
    When user clicks on Documents menu
    Then user views Education Materials menu

  @BDDTEST-EPP-8146
  @PPP_Phase_2
  @Patien_Education
  @Patient_Portal
  Scenario: EPIC_EPP-27_STORY_EPP-6689 - Verify whether the User is able to view the list of education materials
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page
    When user clicks on Documents menu
    Then user views Education Materials menu
    When user clicks on Education Materials 
    Then user is able to view the list of education materials

  @BDDTEST-EPP-8147
  @PPP_Phase_2
  @Patien_Education
  @Patient_Portal
  Scenario: EPIC_EPP-27_STORY_EPP-6689 - Verify whether the User is able to view Image, Name and Description
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

  @BDDTEST-EPP-8148
  @PPP_Phase_2
  @Patien_Education
  @Patient_Portal
  @Regression
  Scenario: EPIC_EPP-27_STORY_EPP-6689 - Verify whether the User is able to download the education material document and also Print the education material document
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
    Then user must be to view Print option
    When user clicks on Print option 
    Then user must be able to Print the education material document

  @BDDTEST-EPP-8149
  @PPP_Phase_2
  @Patien_Education
  @Patient_Portal
  @Regression
  Scenario: EPIC_EPP-27_STORY_EPP-6689 - Verify whether the User is able to view There is no educational material document when there is no education material documents for the user
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page
    When user clicks on Documents menu
    Then user views Education Materials menu
    Then user clicks on Education Materials 
    When user has no education material documents
    Then User is able to view There is no educational material document
