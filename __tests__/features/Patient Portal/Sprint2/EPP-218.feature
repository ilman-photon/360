
Feature: Patient Portal : As a user, I should see error messages when the answers to the security questions are incorrect during password reset process. 

  @BDDTEST-EPP-544
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-218 - Verify the error message if user enter 3 times wrong/incorrect answer the security questions via "Answer security questions" mode
    Given use launch the 'XXX' url
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "Email or Phone Number"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions" page
    And user should view the text "Answer the following questions to reset your password"
    And user should view the questions fields
    And user should see "Back to Log in" button
    When user fills in wrong "Question1Ans" and "Question2Ans" for the security questions they set up 3 times
    Then user should see error message "Your account has been locked. Please contact Customer Support to unlock your account."