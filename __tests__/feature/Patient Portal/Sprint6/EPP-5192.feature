Feature: Patient Portal : View Test/ Lab Results - View lab results
  User Story: As a user, I should be able to view my lab results.


  @BDDTEST-EPP-5680
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-14_STORY_EPP-5192- Verify whether the user is able to view their test results
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their test results
    Then user lands on the screen to view their test results

  @BDDTEST-EPP-5681
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-14_STORY_EPP-5192- Verify whether the user is able to view the mentioned details for Lab results
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their test results
    Then user lands on the screen to view their test results
    And user able to view the following details 
    |<Lab Test Name>
    |<Lab Test Date>
    |<Lab Test Status>
    |<Ordered By>

  @BDDTEST-EPP-5682
  @P2
  @Patient_Portal
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-14_STORY_EPP-5192- Verify whether the System will list the Lab tests based on how recent they were taken
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their test results
    Then user lands on the screen to view their test results
    And user able to view the details (Lab Test Name, Lab Test Date, Lab Test Status and Ordered By)
    And System should list those Lab tests based on how recent they were taken i.e. latest/ recently taken test results to be listed first

  @BDDTEST-EPP-5683
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-14_STORY_EPP-5192- Verify whether the user  able to view a message - “Your lab results are available. Please reach out to your provider.”
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their test results
    Then user lands on the screen to view their test results
    And User should be able to view a message - “Your lab results are available. Please reach out to your provider.” when the lab results are available

  @BDDTEST-EPP-5684
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-14_STORY_EPP-5192- Verify whether the user  able to see the following message “There are no lab results for you now.”
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their test results
    Then user lands on the screen to view their test results
    And User should be able to see the following message “There are no lab results for you now.” when there are no lab results.
