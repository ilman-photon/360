
Feature: Patient Portal : Link to E-commerce - Redirection to e-commerce site
  User Story: As a user, I should be able to click on the link to get redirected to e-commerce site

  @BDDTEST-EPP-5194
  @Automation
  @Link_to_Ecommerce
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-53_STORY_EPP-2713- Verify whether the user is able to lands on Dashboard/ Prescription screen
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to Dashboard/ Prescription screen

  @BDDTEST-EPP-5195
  @Automation
  @Link_to_Ecommerce
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-53_STORY_EPP-2713- Verify whether the user is able to clicks on the link
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to Dashboard/ Prescription screen
    Then user lands on Dashboard/ Prescription screen
    And user should be able to view a link and able to clicks on the link

  @BDDTEST-EPP-5196
  @Automation
  @Link_to_Ecommerce
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-53_STORY_EPP-2713- Verify whether the user will redirect to an e-commerce site in a new tab
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to Dashboard/ Prescription screen
    Then user lands on Dashboard/ Prescription screen
    And user should be able to view a link and able to clicks on the link
    And user should get redirected to the user to an e-commerce site in a new tab
