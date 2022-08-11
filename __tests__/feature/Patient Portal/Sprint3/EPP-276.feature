Feature: Patient Portal : Session Security Capability - Cancel the session
  User Story: As a user, I should be able to cancel the session.

  @BDDTEST-EPP-2291
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-276 - Verify that  User should be prompted regarding session time out.
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”

  @BDDTEST-EPP-2292
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-276 - Verify that User should be prompted regarding session time out with an option to ‘Stay logged in’ and ‘Log off’
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”
    Then user should validate the message with the option "<Stay logged in>" and "<Log off>" Button

  @BDDTEST-EPP-2294
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-276 - Verify that User should be logged out of the patient portal and land on Patient login page
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”
    Then user should validate the message with the option "<Stay logged in>" and "<Log off>" Button
    When user clicks the "<Log off>" Button
    Then validate that system should cancel the user’s session 
    And User should be logged out of the patient portal and land on Patient login page
