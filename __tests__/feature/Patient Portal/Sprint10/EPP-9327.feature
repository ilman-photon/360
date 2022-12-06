
Feature: Patient Portal: Settings– Setup/update security questions – Setup security questions
  USER STORY: As a user, I should be able to set up the security questions if not done during registration  

  @BDDTEST-EPP-10939
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9327- Verify User should be able to view Set security questions& answers CTA if security questions are not set by user during registration
    Scenario: EPIC_EPP-38_STORY_EPP-9327- Verify User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has not setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration

  @BDDTEST-EPP-10940
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9327- Verify User should be able to click on the Set security questions& answers CTA
    Scenario: EPIC_EPP-38_STORY_EPP-9327- Verify User should be able to click on the Set security questions& answers CTA

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has not setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    And User should be able to click on the Set security questions& answers CTA

  @BDDTEST-EPP-10941
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-38_STORY_EPP-9327- Verify User should be navigated to Set security questions& answers screen
    Scenario: EPIC_EPP-38_STORY_EPP-9327- Verify User should be navigated to Set security questions& answers screen

    Given User has logged into the patient portal 
    And User has logged in as patient
    And User has not setup the security question & answers
    When User lands on Set-up/ Update Security Question screen 
    Then User should be able to view Set security questions& answers CTA if security questions are not set by user during registration 
    When User clicks on the Set security questions& answers CTA
    Then User should be navigated to Set security questions& answers screen
