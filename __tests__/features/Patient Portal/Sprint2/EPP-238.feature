
Feature: As a user, I should see an error message when I have provided incorrect username during ‘forgot password’. 

  @BDDTEST-EPP-513
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-238 - Negative Tests - Verify User should see the error message "Enter a valid Email or Phone Number"
    Given use launch the "XXX" url
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "Email or Phone Number" field
    And user should enter invalid email on "Email or Phone Number" field
    And user clicks on 'Continue' button
    Then User should see the following error message "Enter a valid Email or Phone Number"