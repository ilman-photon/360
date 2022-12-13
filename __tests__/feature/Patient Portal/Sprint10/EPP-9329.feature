
Feature: Patient Portal: Settings– Setup/update security questions – Update security questions
  USER STORY: As a user, I should be able to update the security questions & answers which are already set up 

  @BDDTEST-EPP-10910
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9329- Verify User should be able to change the answer for any of the questions
    Scenario: EPIC_EPP-38_STORY_EPP-9329- Verify User should be able to change the answer for any of the questions

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to change the answer for any of the questions

  @BDDTEST-EPP-10911
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9329- Verify User should be able to select a new question from the list of questions available instead of the existing question
    Scenario: EPIC_EPP-38_STORY_EPP-9329- Verify User should be able to select a new question from the list of questions available instead of the existing question

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to change the answer for any of the questions
    And User should be able to select a new question from the list of questions available instead of the existing question

  @BDDTEST-EPP-10912
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9329- Verify User should be able to view the field for answer as blank once the new question is selected
    Scenario: EPIC_EPP-38_STORY_EPP-9329- Verify User should be able to view the field for answer as blank once the new question is selected

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to change the answer for any of the questions
    And User should be able to select a new question from the list of questions available instead of the existing question
    And User should be able to view the field for answer as blank once the new question is selected

  @BDDTEST-EPP-10913
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9329- Verify User should be able to answer the new question
    Scenario: EPIC_EPP-38_STORY_EPP-9329- Verify User should be able to answer the new question

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to change the answer for any of the questions
    And User should be able to select a new question from the list of questions available instead of the existing question
    And User should be able to view the field for answer as blank once the new question is selected
    And  User should be able to answer the new question
