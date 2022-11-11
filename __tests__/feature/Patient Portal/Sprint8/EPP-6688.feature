
Feature: Patient Portal : Education Materials - Navigation
  User Story: As a user, I should be able to see the navigation option to view the education materials.

  @BDDTEST-EPP-8141
  @PPP_Phase_2
  @Patien_Education
  @Patient_Portal
  Scenario: EPIC_EPP-27_STORY_EPP-6688 - Verify whether the user is able to navigate the Dashboard page
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page

  @BDDTEST-EPP-8142
  @PPP_Phase_2
  @Patien_Education
  @Patient_Portal
  Scenario: EPIC_EPP-27_STORY_EPP-6688 - Verify whether the User views the ‘Education Materials' sub-menu under the ‘Documents’ menu
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page
    When user clicks on Documents menu
    Then user views Education Materials menu

  @BDDTEST-EPP-8143
  @PPP_Phase_2
  @Patien_Education
  @Patient_Portal
  @Regression
  Scenario: EPIC_EPP-27_STORY_EPP-6688 - Verify whether the User is able to view the list of education materials
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page
    When user clicks on Documents menu
    Then user views Education Materials menu
    When user clicks on Education Materials 
    Then user is able to view the list of education materials
