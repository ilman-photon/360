
Feature: Patient Portal: Settings– Setup/update security questions – View update security questions option
  USER STORY: As a user, I should be able to view the option to update the security questions & answers which are already set up 

  @BDDTEST-EPP-10942
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9328- Verify User should be able to view all the 5 security questions and answers already set up

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up

  @BDDTEST-EPP-10943
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9328- Verify User should be able to view Update CTA

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to view Update CTA

  @BDDTEST-EPP-10944
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9328- Verify User should be able to view Cancel CTA

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
    And User should be able to view all the 5 security questions and answers already set up 
    And User should be able to view Update CTA
    And User should be able to view Cancel CTA
