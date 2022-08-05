
Feature:  As a user, I should be able to provide the Username to initiate reset password process. 


  @BDDTEST-EPP-535
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-215 - Verify user able to navigate to the Select option screen from the Forgot Password Screen on entering valid Email or Phone Number
    Given use launch the "XXX" url
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see 'Forgot Password' link
    When user clicks on 'Forgot Password' link
    Then user should see Forgot Password screen
    And user should see "Email or Phone Number" field
    And user should enter valid "Email or Phone Number"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
