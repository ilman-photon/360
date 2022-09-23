
Feature: Patient Portal : Link to E-commerce - View
  User Story: As a user, I should be able to view a link to e-commerce <Where?>

 
  @BDDTEST-EPP-5197
  @Link_to_Ecommerce
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-53_STORY_EPP-2712- Verify whether the user is able to lands on Dashboard/ Prescription screen
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to Dashboard/ Prescription screen
    Then user lands on Dashboard/ Prescription screen

  @BDDTEST-EPP-5198
  @Link_to_Ecommerce
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-53_STORY_EPP-2712- Verify whether the user is able to view a link
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to Dashboard/ Prescription screen
    Then user lands on Dashboard/ Prescription screen
    And user should be able to view a link

  @BDDTEST-EPP-5199
  @Link_to_Ecommerce
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-53_STORY_EPP-2712- Verify whether the user will redirect to an e-commerce site in a new tab
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to Dashboard/ Prescription screen
    Then user lands on Dashboard/ Prescription screen
    And user should be able to view a link
    And clicking on link which will redirect the user to an e-commerce site in a new tab
