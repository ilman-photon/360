Feature: As a user, I should be able to view "Forgot Password" screen 

  @BDDTEST-EPP-468
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-25 - Verify user should see inline error below Email or Phone Number field if Email or Phone Number is blank
    Given user launch the 'XXX' url
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see 'Email or Phone Number' field
    And user should see 'Continue' button
    And user should see 'Back to Login' link