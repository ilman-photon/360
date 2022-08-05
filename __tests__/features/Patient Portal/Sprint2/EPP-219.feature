
Feature: As a user, I should be able to set new password by answering security questions correctly during password reset process. 

  @BDDTEST-EPP-505
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-219 - Verify User should see the entered mask password by default
    Given use launch the "XXX" url
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "Email or Phone Number" field
    And user should enter valid "Email or Phone Number" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions"
    And user should view the text "Answer the following questions to reset your password"
    And user should view the questions fields
    And user should see "Continue" button
    And user should see "Back to Log in" button
    And user fills in "Question1Ans" and "Question2Ans"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password" Page
    And User should see "New Password" and "Confirm New Password" fields
    When User should fill the valid "New Password" and "Confirm New Password" fields
    Then User should see the entered mask password by default
    When User should click on "Update" button
    Then User should see "Password has been updated" success message