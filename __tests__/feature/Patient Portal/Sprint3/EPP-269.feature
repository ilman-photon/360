
Feature: Patient Portal : MFA - Receive Emails/ Text messages when logged in from different device/ IP address
  User Story: As a user, I should be able to receive emails/ text messages when I login from different devices/ IP addresses.
  
  
  @BDDTEST-EPP-1857
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-269 - Verify User receives an email from registered mail-id when user logs in from different device/IP Address
    Scenario: "EPIC_EPP-3_STORY_EPP-269 - Verify User receives an email from registered mail-id when user logs in from different device/IP Address"

    Given user launch the "XXX" url  
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up on device A
    And user login from device A
    And user should fill valid "<Email or Phone Number>" and "<Password>"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    And user tries to login from another deviceAnd user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Continue" button
    Then user shoud see "Dashboard" screen
    And user login from device B
    When user should fill valid "<Email or Phone Number>" and "<Password>"
    And user clicks on "Continue" button
    Then user receives an email from registered email-id
    And user should see the mail with Email Subject as "Different Device Login Detected"
    And user should see a mail body as 
    |Message - "You have logged in from a different device. If this is not you, please contact Customer support"|

    Examples:
    |Email|Password|
    |abc@gmail.com|*******|

  @BDDTEST-EPP-1858
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-269 - Verify User should be able to receives a text that registered phone number when user logs in from different device/IP Address
    Scenario: "EPIC_EPP-3_STORY_EPP-269 - Verify User should be able to receives a text that registered phone number when user logs in from different device/IP Address"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up on device A
    And user login from device A
    And user should fill valid "<Email or Phone Number>" and "<Password>"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    And user tries to login from another deviceAnd user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Continue" button
    Then user shoud see "Dashboard" screen
    And user login from device B
    When user should fill valid "<Email or Phone Number>" and "<Password>"
    And user clicks on "Continue" button
    Then user receives a text from registered phone number
    And user should see the text with Text Subject as "Different Device Login Detected"
    And user should see a message body as 
    |Message - "You have logged in from a different device. If this is not you, please contact Customer support"|

    Examples:
    |Phone Number|Password|
    |+1xxxxxx|*******|

  @BDDTEST-EPP-1859
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered mail-id
    Scenario: "EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered mail-id"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up on device A
    And user login from device A
    And user should fill valid "<Email or Phone Number>" and "<Password>"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    And user tries to login from another deviceAnd user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Continue" button
    Then user shoud see "Dashboard" screen
    And user login from device B
    When user should fill valid "<Email or Phone Number>" and "<Password>" 
    And user clicks on "Continue" button
    Then user receives an email message with the code to the email
    And user should see the mail with Email Subject as "Different Device Login Detected"
    And user should see a message body as 
    |Message - "You have logged in from a different device. If this is not you, please contact Customer support"|
    Then user receives an email/ text message with the code to the email or mobile number
    And user should see the mail with Email Subject as " Your Verification Code"
    And user should see a message body as 
    |Email/ message body - Hi {username},
    |The temporary code you requested is xxxxxx. Please use this code to complete your request.
    |Thank you, 
    |Admin

    When user lands onto "xxx" screen

    And user should see "<Enter Code>" field
    And user should fill valid "<Enter Code>" fied
    When user clicks on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Email|Password|Enter Code|
    |abc@gmail.com|*******|******|

  @BDDTEST-EPP-1860
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered phone number
    Scenario: "EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered phone number"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up on device A
    And user login from device A
    And user should fill valid "<Email or Phone Number>" and "<Password>"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    And user tries to login from another device
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Continue" button
    Then user shoud see "Dashboard" screen
    And user login from device B
    When user should fill valid "<Email or Phone Number>" and "<Password>" 
    And user clicks on "Continue" button
    Then user receives an email/ text message with the code to the email or mobile number
    And user should see the mail with Email Subject as "Different Device Login Detected"
    And user should see a message body as 
    |Message - "You have logged in from a different device. If this is not you, please contact Customer support"|
    Then user receives a text message with the code to phone number
    And user should see the mail with Email Subject as " Your Verification Code"
    And user should see a message body as 
    |Email/ message body - Hi {username},
    |The temporary code you requested is xxxxxx. Please use this code to complete your request.
    |Thank you, 
    |Admin

    When user lands onto "xxx" screen

    And user should see "<Enter Code>" field
    And user should fill valid "<Enter Code>" fied
    When user clicks on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Phone Number|Password|Enter Code|
    |+1xxxxxx|*******|******|

  @BDDTEST-EPP-1861
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" within "3 seconds" when user logs in from different device/IP Address
    Scenario: "EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" within "3 seconds" when user logs in from different device/IP Address"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up on device A
    And user login from device A
    And user should fill valid "<Email or Phone Number>" and "<Password>"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    And user tries to login from another device
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Continue" button
    Then user shoud see "Dashboard" screen
    And user login from device B
    When user should fill valid "<Email or Phone Number>" and "<Password>" 
    And user clicks on "Continue" button
    Then user receives an email/ text message with the code to the email or mobile number
    And user should see the mail with Email Subject as "Different Device Login Detected"
    And user should see a message body as 
    |Message - "You have logged in from a different device. If this is not you, please contact Customer support"|
    Then user receives a text message with the code to phone number
    And user should see the mail with Email Subject as " Your Verification Code"
    And user should see a message body as 
    |Email/ message body - Hi {username},
    |The temporary code you requested is xxxxxx. Please use this code to complete your request.
    |Thank you, 
    |Admin

    When user lands onto "xxx" screen

    And user should see "<Enter Code>" field
    And user should fill valid "<Enter Code>" fied
    When user clicks on "Submit" button
    Then user should see the page loads within "3 seconds"
    And user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Phone Number|Password|Enter Code|
    |+1xxxxxx|*******|******|

  @BDDTEST-EPP-1862
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-269 - Verify user should not see the any errors script when user clicks F12 on the console when user succes set up MFA due to user logs in from different device/IP Address
    Scenario: "EPIC_EPP-3_STORY_EPP-269 - Verify user should not see the any errors script when user clicks F12 on the console when user succes set up MFA due to user logs in from different device/IP Address"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up on device A
    And user login from device A
    And user should fill valid "<Email or Phone Number>" and "<Password>"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    And user tries to login from another device
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Continue" button
    Then user shoud see "Dashboard" screen
    And user login from device B
    When user should fill valid "<Email or Phone Number>" and "<Password>" 
    And user clicks on "Continue" button
    Then user receives an email/ text message with the code to the email or mobile number
    And user should see the mail with Email Subject as "Different Device Login Detected"
    And user should see a message body as 
    |Message - "You have logged in from a different device. If this is not you, please contact Customer support"|
    Then user receives a text message with the code to phone number
    And user should see the mail with Email Subject as " Your Verification Code"
    And user should see a message body as 
    |Email/ message body - Hi {username},
    |The temporary code you requested is xxxxxx. Please use this code to complete your request.
    |Thank you, 
    |Admin

    When user lands onto "xxx" screen

    And user should see "<Enter Code>" field
    And user should fill valid "<Enter Code>" fied
    When user clicks on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"
    When user clicks on F12 on the console
    Then user should not to see any errors script

    Examples:
    |Phone Number|Password|Enter Code|
    |+1xxxxxx|*******|******|

  @BDDTEST-EPP-1863
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user should see the following error message "Incorrect Code. Please try again." when user logs in from different device/IP Address and receives text alert from a registered mail-id
    Scenario: "EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user should see the following error message "Incorrect Code. Please try again." when user logs in from different device/IP Address and receives text alert from a registered mail-id"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up on device A
    And user login from device A
    And user should fill valid "<Email or Phone Number>" and "<Password>"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    And user tries to login from another device
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Continue" button
    Then user shoud see "Dashboard" screen
    And user login from device B
    When user should fill valid "<Email or Phone Number>" and "<Password>" 
    And user clicks on "Continue" button
    Then user receives an emai with the code to the mobile number
    And user should see the mail with Email Subject as "Different Device Login Detected"
    And user should see a message body as 
    |Message - "You have logged in from a different device. If this is not you, please contact Customer support"|
    Then user receives a text message with the code to phone number
    And user should see the mail with Email Subject as " Your Verification Code"
    And user should see a message body as 
    |Email/ message body - Hi {username},
    |The temporary code you requested is xxxxxx. Please use this code to complete your request.
    |Thank you, 
    |Admin

    When user lands onto "xxx" screen

    And user should see "<Enter Code>" field
    And user should fill invalid "<Enter Code>" fied
    When user clicks on "Submit" button
    Then user should see the following message "Incorrect Code. Please try again."

    Examples:
    |Email|Password|Enter Code|
    |abc@gmail.com|*******|******|

  @BDDTEST-EPP-1864
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user should see the following error message "Incorrect Code. Please try again." when user logs in from different device/IP Address and receives text alert from a registered phone number
    Scenario: "EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify User should see the following error message "Incorrect Code. Please try again." when user Set up Multi Factor Authentication from a different device/IP Address"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up on device A
    And user login from device A
    And user should fill valid "<Email or Phone Number>" and "<Password>"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    And user tries to login from another device
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Continue" button
    Then user shoud see "Dashboard" screen
    And user login from device B
    When user should fill valid "<Email or Phone Number>" and "<Password>" 
    And user clicks on "Continue" button
    Then user receives a text message with the code to the phone number
    And user should see the mail with text Subject as "Different Device Login Detected"
    And user should see a message body as 
    |Message - "You have logged in from a different device. If this is not you, please contact Customer support"|
    Then user receives a text message with the code to phone number
    And user should see the mail with Email Subject as " Your Verification Code"
    And user should see a message body as 
    |Email/ message body - Hi {username},
    |The temporary code you requested is xxxxxx. Please use this code to complete your request.
    |Thank you, 
    |Admin

    When user lands onto "xxx" screen

    And user should see "<Enter Code>" field
    And user should fill invalid "<Enter Code>" fied
    When user clicks on "Submit" button
    Then user should see the following message "Incorrect Code. Please try again."

    Examples:
    |Phone Number|Password|Enter Code|
    |+1xxxxxx|*******|******|

  @BDDTEST-EPP-1865
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user logs in from different device/IP Address and should see the error message when the internet service is unavailable
    Scenario: "EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user logs in from different device/IP Address and should see the error message when the internet service is unavailable"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up on device A
    And user login from device A
    And user should fill valid "<Email or Phone Number>" and "<Password>"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    And user tries to login from another device
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Continue" button
    Then user shoud see "Dashboard" screen
    And user login from device B
    When user should fill valid "<Email or Phone Number>" and "<Password>" 
    And user clicks on "Continue" button
    Then user receives a text message with the code to the phone number
    And user should see the mail with text Subject as "Different Device Login Detected"
    And user should see a message body as 
    |Message - "You have logged in from a different device. If this is not you, please contact Customer support"|
    Then user receives a text message with the code to phone number
    And user should see the mail with Email Subject as " Your Verification Code"
    And user should see a message body as 
    |Email/ message body - Hi {username},
    |The temporary code you requested is xxxxxx. Please use this code to complete your request.
    |Thank you, 
    |Admin

    When user lands onto "xxx" screen

    And user should see "<Enter Code>" field
    And user should fill invalid "<Enter Code>" fied
    When user clicks on "Submit" button
    Then user should see the appropriate error message

    Examples:
    |Phone Number|Password|Enter Code|
    |+1xxxxxx|*******|******|

  @BDDTEST-EPP-1866
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user logs in from different device/IP Address and should see the error message when the service is unavailable
    Scenario: "EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user logs in from different device/IP Address and should see the error message when the service is unavailable"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up on device A
    And user login from device A
    And user should fill valid "<Email or Phone Number>" and "<Password>"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    And user tries to login from another device
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Continue" button
    Then user shoud see "Dashboard" screen
    And user login from device B
    When user should fill valid "<Email or Phone Number>" and "<Password>" 
    And user clicks on "Continue" button
    Then user receives a text message with the code to the phone number
    And user should see the mail with text Subject as "Different Device Login Detected"
    And user should see a message body as 
    |Message - "You have logged in from a different device. If this is not you, please contact Customer support"| 
    Then user receives a text message with the code to phone number
    And user should see the mail with Email Subject as " Your Verification Code"
    And user should see a message body as 
    |Email/ message body - Hi {username},
    |The temporary code you requested is xxxxxx. Please use this code to complete your request.
    |Thank you, 
    |Admin

    When user lands onto "xxx" screen

    And user should see "<Enter Code>" field
    And user should fill invalid "<Enter Code>" fied
    When user clicks on "Submit" button
    Then user should see the appropriate error message

    Examples:
    |Phone Number|Password|Enter Code|
    |+1xxxxxx|*******|******|

  @BDDTEST-EPP-1867
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user logs in from different device/IP Address and should see the blank field when user refresh the page
    Scenario: "EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user logs in from different device/IP Address and should see the error message when the service is unavailable"

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user see "<Email or Phone Number>" and "<Password>" fields that was MFA was set up on device A
    And user login from device A
    And user should fill valid "<Email or Phone Number>" and "<Password>"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    And user tries to login from another device
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Continue" button
    Then user shoud see "Dashboard" screen
    And user login from device B
    When user should fill valid "<Email or Phone Number>" and "<Password>" 
    And user clicks on "Continue" button
    Then user receives a text message with the code to the phone number
    And user should see the mail with text Subject as "Different Device Login Detected"
    And user should see a message body as 
    |Message - "You have logged in from a different device. If this is not you, please contact Customer support"|
    Then user receives a text message with the code to phone number
    And user should see the mail with Email Subject as " Your Verification Code"
    And user should see a message body as 
    |Email/ message body - Hi {username},
    |The temporary code you requested is xxxxxx. Please use this code to complete your request.
    |Thank you, 
    |Admin

    When user lands onto "xxx" screen

    And user should see "<Enter Code>" field
    And user should fill invalid "<Enter Code>" fied
    When user clicks on "Submit" button
    When user refresh the page 
    Then user should see the blank "<Enter Code>" fied

    Examples:
    |Phone Number|Password|Enter Code|
    |+1xxxxxx|*******|              |
