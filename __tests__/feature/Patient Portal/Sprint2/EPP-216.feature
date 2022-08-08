
Feature: As a user, I should be able to login into the patient portal without username & password using the one-time link 

  @BDDTEST-EPP-538
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-216 - Verify user should be able to login into the patient portal without username & password using the magic link received to my registered mail id.
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "Email or Phone Number"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen
    And user should see "Answer security questions" button (if security questions is set or not)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Login with magic link" button
    Then user should see One-time link page
    And user should see "Choose a mode of communication where we should send you the magic link." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email"
    When user clicks on "Send magic link" button
    Then user should see heading "Magic link sent"
    And user should see text "Success magic link is sent"
    And user should see message "Click on the magic link sent to your email or phone number to access your account"
    When user access the inbox of registered "Email"
    And user should receive a magic link mail
    And user should see the mail with Email Subject as "Your Patient Portal Magic link"
    And user should see mail/ message body as
    And user should see "Back to Log in" button