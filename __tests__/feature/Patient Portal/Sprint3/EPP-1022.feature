
Feature: Patient Portal : MFA - 'Remember Me' validity has expired
  User Story: As a user, I should not be able to login if my MFA ‘Remember me’ device/IP address provided, has expired


  @BDDTEST-EPP-2369
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id
    Scenario: "EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the email
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has exipred
    When user clicks on "Continue" button
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email and mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Email or Phone Number|Password|Enter code|
    |abc@gmail.com|*******|******|

  @BDDTEST-EPP-2370
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds
    Scenario: "EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the email
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has exipred
    When user clicks on "Continue" button
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email and mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the page loads within "3 seconds"
    And user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Email or Phone Number|Password|Enter code|
    |abc@gmail.com|*******|******|

  @BDDTEST-EPP-2371
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id without any errors script when user clicks F12 on the console
    Scenario: "EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id without any errors script when user clicks F12 on the console"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the email
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has exipred
    When user clicks on "Continue" button
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email and mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the page loads within "3 seconds"
    And user should see the following message "Multi factor Authentication has been set successfully"
    When user clicks on F12 on the console
    Then user should not to see any errors script

    Examples:
    |Email or Phone Number|Password|Enter code|
    |abc@gmail.com|*******|******|

  @BDDTEST-EPP-2372
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device using registered mail-id
    Scenario: "EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device using registered mail-id"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the email
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has exipred
    When user clicks on "Continue" button
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email and mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the appropriate error message

    Examples:
    |Email or Phone Number|Password|Enter code|
    |abc@gmail.com|*******|******|

  @BDDTEST-EPP-2373
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail-id
    Scenario: "EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail-id"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the email
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has exipred
    When user clicks on "Continue" button
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email and mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the appropriate error message

    Examples:
    |Email or Phone Number|Password|Enter code|
    |abc@gmail.com|*******|******|

  @BDDTEST-EPP-2374
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using phone number
    Scenario: "EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using phone number"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the Phone Number
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has exipred
    When user clicks on "Continue" button
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email and mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Email or Phone Number|Password|Enter code|
    |+1xxxxx|*******|******|

  @BDDTEST-EPP-2375
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered phone number within 3 seconds
    Scenario: "EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using phone number"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the Phone Number
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has exipred
    When user clicks on "Continue" button
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email and mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the page loads within "3 seconds"
    And user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Email or Phone Number|Password|Enter code|
    |+1xxxxx|*******|******|

  @BDDTEST-EPP-2376
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered phone number


  @BDDTEST-EPP-2377
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-1022-Negative -Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device without being asked for MFA using registered phone number
    Scenario: "EPIC_EPP-3_STORY_EPP-1022-Negative -Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device without being asked for MFA using registered phone number"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the Phone Number
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has exipred
    When user clicks on "Continue" button
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email and mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the appropriate error message

    Examples:
    |Email or Phone Number|Password|Enter code|
    |+1xxxxx|*******|******|

  @BDDTEST-EPP-2381
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id without any errors script when user clicks F12 on the console
    Scenario: "EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using phone number"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up
    And user should fill valid "<Email or Phone Number>" field with the Phone Number
    And user should fill valid "<Password>" field
    And user should see the "Remember me" option has been selected that Remember me has exipred
    When user clicks on "Continue" button
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email and mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    When user clicks on F12 on the console
    Then user should not to see any errors script

    Examples:
    |Email or Phone Number|Password|Enter code|
    |+1xxxxx|*******|******|
