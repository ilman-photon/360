Feature: Patient Portal : Session Security Capability - Extend the session
  User Story: As a user, I should be able to extend the session.

 
  @BDDTEST-EPP-2378
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-3_STORY_EPP-275 - Verify that  User should be prompted regarding session time out.
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”

  @BDDTEST-EPP-2379
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario: EPIC_EPP-3_STORY_EPP-275 - Verify that User should be prompted regarding session time out with an option to ‘Stay logged in’ and ‘Log off’
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”
    Then user should validate the message with the option "Stay logged in" and "Log off" Button

  @BDDTEST-EPP-2380
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-3_STORY_EPP-275 - Verify that User should be able to extend the session.
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”
    Then user should validate the message with the option "Stay logged in" and "Log off" Button
    When user clicks the "Stay logged in" Button
    Then validate that user should be able to extend the session.
    And User should stay logged into the patient portal
