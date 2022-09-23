
Feature: Patient Portal : View Test/ Lab Results - View test results
  User Story: As a user, I should be able to view my test results

  @BDDTEST-EPP-5177
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to view their test results
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their test results
    Then user lands on the screen to view their test results

  @BDDTEST-EPP-5178
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to view the mentioned details
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their test results
    Then user lands on the screen to view their test results
    And user able to view the following details 
    |Test Type
    |Ordered By
    |Test Date
    |Testing Status

  @BDDTEST-EPP-5179
  @P2
  @Patient_Portal
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-14_STORY_EPP-2697- Verify whether the System will list the tests based on how recent they were taken
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their test results
    Then user lands on the screen to view their test results
    And user able to view the details (Test Type, Ordered By, Test Date and Testing Status)
    And System should list those tests based on how recent they were taken i.e. latest/ recently taken test results to be listed first

  @BDDTEST-EPP-5180
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to download the test results (as pdfs)
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their test results
    Then user lands on the screen to view their test results
    And user able to view the details (Test Type, Ordered By, Test Date and Testing Status)
    And user should be able to download the test results (as pdfs)

  @BDDTEST-EPP-5181
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to see the following message “There are no test results for you now” when there are no tests results
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their test results
    Then user lands on the screen to view their test results
    And user is able to see the following message “There are no test results for you now” when there are no tests results

  @BDDTEST-EPP-5182
  @P2
  @Patient_Portal
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to view the test result in user portal only when it is approved by the provider in E360+ system
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their test results
    Then user lands on the screen to view their test results
    And user is able to view the test result in user portal only when it is approved by the provider in E360+ system
