
Feature: Patient Portal : MFA - Login without MFA with remembered device / IP address
  User Story: As a user, I should be able to login without being asked for multi factor authentication if I login using ‘Remember me’ device/IP address within validity
  
  @BDDTEST-EPP-2344
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail id
    
    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the email
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has not expired
    When user clicks on "Continue" button
    Then user should see "Dashboard" screen

  @BDDTEST-EPP-2345
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device without being asked for MFA using registered mail id within 3 seconds
    
    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the email
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has not expired
    When user clicks on "Continue" button
    Then user should see the page loads within "three seconds"
    And user should see "Dashboard" screen

  @BDDTEST-EPP-2346
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-281 - user should be able to see login from device without being asked for MFA using registered mail id without any errors script when user clicks on the console
    
    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the phone number
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has not expired
    When user clicks on "Continue" button
    And user clicks on the console
    Then user should not to see the errors script

  @BDDTEST-EPP-2347
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-281 - Negative user should user should see the error message when the internet service is unavailable when user logs in from device using registered mail id
    
    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the email
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has not expired
    When user clicks on "Continue" button
    Then user should see the appropriate error message

  @BDDTEST-EPP-2348
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-281 - Negative user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail id
    
    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the email
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has not expired
    When user clicks on "Continue" button
    Then user should see the appropriate error message

  @BDDTEST-EPP-2349
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using phone number
    
    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the phone number
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has not expired
    When user clicks on "Continue" button
    Then user should see "Dashboard" screen

  @BDDTEST-EPP-2350
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device without being asked for MFA using registered phone number within 3 seconds
    
    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the phone number
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has not expired
    When user clicks on "Continue" button
    Then user should see the page loads within "three seconds"
    And user should see "Dashboard" screen

  @BDDTEST-EPP-2351
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-281 - Negative user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered phone number
    
    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the phone number
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has not expired
    When user clicks on "Continue" button
    Then user should see the appropriate error message

  @BDDTEST-EPP-2352
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-281 - Negative user should user should see the error message when the internet service is unavailable when user logs in from device without being asked for MFA using registered phone number
    
    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the phone number
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has not expired
    When user clicks on "Continue" button
    Then user should see the appropriate error message

  @BDDTEST-EPP-2368
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-281 - user should be able to login from device without being asked for MFA using registered mail id without any errors script when user clicks on the console
    
    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the email
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has not expired
    When user clicks on "Continue" button
    Then user should see the page loads within "three seconds"
    And user should see "Dashboard" screen
    When user clicks on the console
    Then user should not to see any errors script

