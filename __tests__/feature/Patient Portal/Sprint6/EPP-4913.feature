
Feature: Patient Portal : Document/ Forms - Download a document/ form
  User Story: As a user, I should be able to download a document/ form

  
  @BDDTEST-EPP-5183
  @Manage_Account
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-9_STORY_EPP-4913- Verify whether the user is able to view the list of documents that can be downloaded
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the screen to view the list of documents that can be downloaded
    Then user should view the list of documents that can be downloaded

  @BDDTEST-EPP-5184
  @Manage_Account
  @P2
  @Patient_Portal
  @Sprint6
  Scenario: EPIC_EPP-9_STORY_EPP-4913- Verify whether the user is able to clicks on the option to download a document
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the screen to view the list of documents that can be downloaded
    Then user should view the list of documents that can be downloaded
    And user is able to clicks on the option to download a document

  @BDDTEST-EPP-5185
  @Manage_Account
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-9_STORY_EPP-4913- Verify whether the user is able to see the document downloaded
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the screen to view the list of documents that can be downloaded
    Then user should view the list of documents that can be downloaded
    And user clicks on the option to download a document
    Then user should see the document downloaded
