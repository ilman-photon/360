
Feature:  As a user, I should be able to set a new password, without answering the security questions if they are not set. 

@BDDTEST-EPP-509
  @Authentication
  @Patient_Portal
  @Automation
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify user able to navigate to the Select option screen from the Forgot Password Screen when Security questions not set
    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button

  @BDDTEST-EPP-510
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 -Verify should be able to receive reset password link  to the registered Email without answering the security questions if they are not set.
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
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your email”
    And User should be able to view the message "Check {donj@yahoo.com} for an email to reset your password"
    When user access the inbox of registered "Email"
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as
    When user click on a reset password link
    Then user should see "Update Password" screen