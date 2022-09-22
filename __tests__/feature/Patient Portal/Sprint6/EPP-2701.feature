
Feature: Patient Portal : Care Plan Overview - View
  User Story: As a user, I should be able to view the care plan overview document

  
  @BDDTEST-EPP-5173
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-16_STORY_EPP-2701- Verify whether the user is able to lands on the screen to view Care Plan Overview
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their Care Plan Overview
    Then user lands on the screen to view Care Plan Overview

  @BDDTEST-EPP-5174
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-16_STORY_EPP-2701- Verify whether the user is able to view the mentioned details
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their Care Plan Overview
    Then user lands on the screen to view Care Plan Overview
    And user view the fallowing details
    |Procedure Date
    |Procedure Name

  @BDDTEST-EPP-5175
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-16_STORY_EPP-2701- Verify whether the user is  able to see an option to download the care plan overview document (as pdf) which when clicked downloads the document
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their Care Plan Overview
    Then user lands on the screen to view Care Plan Overview
    And user view the fallowing details
    |Procedure Date
    |Procedure Name
    And user should be able to see an option to download the care plan overview document (as pdf) which when clicked downloads the document

  @BDDTEST-EPP-5176
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  @Test_and_Procedure
  Scenario: EPIC_EPP-16_STORY_EPP-2701- Verify whether the user is able to view the following verbiage “There is no care plan overview document.” when there is no care plan overview documents for the user
    Given user Launch  the browser and enter the user portal URL
    When user enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And user navigates to the screen to view their Care Plan Overview
    Then user lands on the screen to view Care Plan Overview
    And user able to view the following verbiage “There is no care plan overview document.” when there is no care plan overview documents for the user
