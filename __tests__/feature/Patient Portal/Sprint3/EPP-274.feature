
Feature: Patient Portal : Session Security Capability - Session time out prompt
  User Story: As a user, I should be prompted regarding session time out.

 
  @BDDTEST-EPP-2385
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-274 - Verify that  User should be prompted regarding session time out.
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message "Your session is about to time-out. You will be logged out in 60 seconds”

  @BDDTEST-EPP-2386
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-274 - Verify that User should be prompted regarding session time out with an option to ‘Stay logged in’ and ‘Log off’
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”
    Then user should validate the message with the option "Stay logged in" and "Log off" Button

  @BDDTEST-EPP-2387
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-274 - Verify that User should be prompted Session Expired message after the given time
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”
    Then user should validate the message with the option "Stay logged in" and "Log off" Button
    When Session is Expired after the given Time
    Then user should validate the message "Your session expired. Please login again" with  "OK" Button

  @BDDTEST-EPP-2388
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-274 - Verify that when user clicks "OK" button, system should logout the user
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”
    Then user should validate the message with the option "<Stay logged in>" and "Log off" Button
    When Session is Expired after the given Time
    Then user should validate the message "Your session expired. Please login again" with  "OK" Button
    When  user clicks "OK" button
    Then user must be logged out

  @BDDTEST-EPP-2389
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-274 - Verify that when user clicks "OK" button, system should logout the user and lands on the Patient Portal login page
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”
    Then user should validate the message with the option "Stay logged in" and "Log off" Button
    When Session is Expired after the given Time
    Then user should validate the message "Your session expired. Please login again" with  "OK" Button
    When  user clicks the "OK" button
    Then  validate that user must be navigated to Patient Portal login page

  @BDDTEST-EPP-2390
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-274 - Verify that when user clicks "OK" button, system should logout within 3 seconds
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”
    Then user should validate the message with the option "Stay logged in" and "Log off" Button
    When Session is Expired after the given Time
    Then user should validate the message "Your session expired. Please login again" with  "OK" Button
    When  user clicks the "OK" button. 
    Then user  validates whether page loads within "3 seconds"
    Then  user must  be navigated to Patient Portal login page

  @BDDTEST-EPP-2391
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-274 - Verify that when user should validate the 60 seconds
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user is idle for 20 mins
    Then user should be prompted regarding session time out.
    Then user should validate the message “Your session is about to time-out. You will be logged out in 60 seconds”
    Then user should validate for 60 seconds

  @BDDTEST-EPP-2394
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-274 - Verify when the server is down during 60 seconds timer, the user must be shown therror message as well as the timer will be running in background
    Given user launch the "XXX" url
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    When user is idle for 18 mins
    When there is any error from Backend
    Then user should see "Service unavailable" error message
    And user should validate the timer must be running in background

  @BDDTEST-EPP-2395
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-274 -Verify whether user can see the error message when the internet service is unavailable as well as the timer will be running in background
    Given user launch the "XXX" url
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    When user is idle for 18 mins
    When the user doesn’t have Internet connection 
    Then user should be prompted with an error message "Please check your connection"
    And user should validate the timer must be running in background

  @BDDTEST-EPP-2396
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-274 - Verify that when user logs off and logs in back within 15 mins the user must be logged in
    Given user launch the "XXX" url	
    When user provides  "<username or phone number>" and "<password>" 
    And user clicks on "Login" button
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    When user minimise the screen
    Then user must be logged off 
    When user logs in back within 20 minutes 
    Then user must reopen the Application
    And user must remain logged in the same  Patient Portal application
