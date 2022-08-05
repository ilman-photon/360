
Feature:  As a user, I should be able to initiate password reset by answering the security questions I had set. 

  @BDDTEST-EPP-543
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-217 - Verify user should be able to reset the old password by answering the security questions via "Answer security questions" mode
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
    And user fills in "Question1Ans" and "Question2Ans" for the security questions they set up
    When user click on "Continue" button
    And user should see "Back to login" button
  @BDDTEST-EPP-1109
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-217 - Verify the error message if user does not answer the security questions via "Answer security questions" mode
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
    When user does not fills in "Question1Ans" and "Question2Ans"for the security questions they set up
    And user click on "Continue" button
    Then user should see error message "This field is required"