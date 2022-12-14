
Feature: Patient Portal: Settings– Setup/update security questions – Error messages
  USER STORY: As a user, I should be able to view the error messages while updating the security questions & answers 

  @BDDTEST-EPP-10921
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9331- Verify User should be able to view the error message “You must answer all security questions”

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User has selected one or more new question & answer or has changed the answer to one or more question
    When User clicks on Update CTA 
    And User are not answered the 5 security questions
    Then User should be able to view the error message “You must answer all security questions”

  @BDDTEST-EPP-10922
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9331- Verify User should be able to view the error message “No updated made” if the questions or answers are not changed

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User has not changed the answer to one or more question
    When User clicks on Update CTA 
    Then User should be able to view the error message “No updated made”
