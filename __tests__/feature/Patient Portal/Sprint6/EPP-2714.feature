
Feature: Patient Portal : Document/ Forms - View list that can be downloaded
  User Story: As a user, I should be able to view the list of forms that I can download

  @BDDTEST-EPP-5186
  @Manage_Account
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-9_STORY_EPP-2714- Verify whether the user is able to view the list of documents that can be downloaded
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the screen to view the list of documents that can be downloaded
    Then user should view the list of documents that can be downloaded

  @BDDTEST-EPP-5187
  @Manage_Account
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-9_STORY_EPP-2714- Verify whether the user is able to view the list of documents with an option to download them as pdfs
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the screen to view the list of documents that can be downloaded
    Then user should view the list of documents that can be downloaded
    And user should be able to view the list of documents with an option to download them as pdfs

  @BDDTEST-EPP-5188
  @Manage_Account
  @P2
  @Patient_Portal
  @Sprint6
  Scenario: EPIC_EPP-9_STORY_EPP-2714- Verify whether the System should bring the list of documents from a folder in the backend
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the screen to view the list of documents that can be downloaded
    Then user should view the list of documents that can be downloaded
    And user should be able to view the list of documents with an option to download them as pdfs
    And System should bring the list of documents from a folder in the backend

  @BDDTEST-EPP-5189
  @Manage_Account
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-9_STORY_EPP-2714- Verify whether the user is able to view the file name of the document added in the backend as the display name for that document in front end
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the screen to view the list of documents that can be downloaded
    Then user should view the list of documents that can be downloaded
    And user should be able to view the list of documents with an option to download them as pdfs
    And user should be able to view the file name of the document added in the backend as the display name for that document in front end

  @BDDTEST-EPP-5190
  @Manage_Account
  @P2
  @Patient_Portal
  @Sprint6
  Scenario: EPIC_EPP-9_STORY_EPP-2714- Verify whether the user is able to view the forms at all the times i.e. not based on appointment scheduled
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the screen to view the list of documents that can be downloaded
    Then user should view the list of documents that can be downloaded
    And user should be able to view the list of documents with an option to download them as pdfs
    And user should be able to view the file name of the document added in the backend as the display name for that document in front end
    And user should be able to view the above forms at all the times i.e. not based on appointment scheduled
