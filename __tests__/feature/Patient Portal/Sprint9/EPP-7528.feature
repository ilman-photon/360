Feature: Patient Portal: Admin – View security questions and answers CTA
  
  @BDDTEST-EPP-10473
  @Admin
  @P1
  @Patient_Portal
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7528- Verify User should be able to view the security questions and answers set by the patient
    Given User has logged into the patient portal 
    And User is logged in as Admin 
    And User lands on the Recover username/reset password screen 
    And User searches for the patient 
    When User clicks on security question & answers CTA 
    Then User should be able to view the security questions and answers set by the patient

  @BDDTEST-EPP-10474
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint9
  Scenario: EPIC_EPP-30_STORY_EPP-7528- Verify User should be able to view the message” No security question &Answers”
    Given User has logged into the patient portal 
    And User is logged in as Admin 
    And User lands on the Recover username/reset password screen 
    And User searches for the patient 
    When User clicks on security question & answers CTA 
    And The patient has not set the  security question &Answers
    Then User should be able to view the message” No security question &Answers”
