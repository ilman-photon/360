Feature: Patient Portal : MFA - View multi factor authentication set up - (P1)
 
  @BDDTEST-EPP-2267
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-264 - Verify user should see set MFA screen after completing registration (Prefered Mode of Communication both)
    Feature: Authentication

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ phone number
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with either as email-id or Phone Number by default
    And user should able to view and fill the following fields 
    |"<Password>" field
    |"<Confirm Password>" field
    When user provide the same password details to the field  "<Password>","< Confirm Password>" 
    And user click on "Create Account" CTA
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see default selection on Email
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2276
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-264 - Verify user should be able to choose other preferred mode(s) of communication
    Feature: Authentication

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ phone number
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with either as email-id or Phone Number by default
    And user should able to view and fill the following fields 
    |"<Password>" field
    |"<Confirm Password>" field
    When user provide the same password details to the field  "<Password>","< Confirm Password>" 
    And user click on "Create Account" CTA
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see default selection on Email
    When user click on Phone radio button
    Then user should see radio button is selected on Phone radio button

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2277
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-264 - Verify user should see set MFA screen after completing registration (Prefered Mode of Communication Email)
    Feature: Authentication
     
    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose email
    And user receives an email/text message with a link to their registered email id
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with email-id by default
    And user should able to view and fill the following fields 
    |"<Password>" field
    |"<Confirm Password>" field
    When user provide the same password details to the field  "<Password>","< Confirm Password>" 
    And user click on "Create Account" CTA
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Confirm your email below and we’ll send a code to set-up multi-factor authentication."
    And user should see text  "Email: m********@yahoo.com"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2278
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-264 - Verify user should see set MFA screen after completing registration (Prefered Mode of Communication Phone)
    Feature: Authentication

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose phone
    And user receives an email/text message with a link to their registered phone
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with phone by default
    And user should able to view and fill the following fields 
    |"<Password>" field
    |"<Confirm Password>" field
    When user provide the same password details to the field  "<Password>","< Confirm Password>" 
    And user click on "Create Account" CTA
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Confirm your phone below and we’ll send a code to set-up multi-factor authentication."
    And user should see text "Phone: (8***)***-***31"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2279
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-264 - Verify user should see "MFA" screen with default selection preferred mode(s) of communication
    Feature: Authentication

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ phone number
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with either as email-id or Phone Number by default
    And user should able to view and fill the following fields 
    |"<Password>" field
    |"<Confirm Password>" field
    When user provide the same password details to the field  "<Password>","< Confirm Password>" 
    And user click on "Create Account" CTA
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see default selection on Email
    When user click on Phone radio button
    Then user should see radio button is selected on Phone radio button
    When user click on "Reload" in browser
    Then user should see "MFA" screen with default selection on Email

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2280
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-264 - Verify user see error screen when internet is unavailable
    Feature: Authentication

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ phone number
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with either as email-id or Phone Number by default
    And user should able to view and fill the following fields 
    |"<Password>" field
    |"<Confirm Password>" field
    When user provide the same password details to the field  "<Password>","< Confirm Password>" 
    And user click on "Create Account" CTA
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see default selection on Email
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    When user click on "Confirm" button
    Then user should see error screen

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2281
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-264 - Verify user see error screen when service is unavailable
    Feature: Authentication

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ phone number
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with either as email-id or Phone Number by default
    And user should able to view and fill the following fields 
    |"<Password>" field
    |"<Confirm Password>" field
    When user provide the same password details to the field  "<Password>","< Confirm Password>" 
    And user click on "Create Account" CTA
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see default selection on Email
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    When user click on "Confirm" button
    Then user should see error screen

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2282
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-264 - Verify user should not see any error when user tap on F12 keyboard in console
    Feature: Authentication

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ phone number
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with either as email-id or Phone Number by default
    And user should able to view and fill the following fields 
    |"<Password>" field
    |"<Confirm Password>" field
    When user provide the same password details to the field  "<Password>","< Confirm Password>" 
    And user click on "Create Account" CTA
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see default selection on Email
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    When user tap on F12 on keyboard
    Then user should not see any error in console when user tap on F12 keyboard

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2283
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-264 - Verify user see set MFA screen within 3 second
    Feature: Authentication

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ phone number
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with either as email-id or Phone Number by default
    And user should able to view and fill the following fields 
    |"<Password>" field
    |"<Confirm Password>" field
    When user provide the same password details to the field  "<Password>","< Confirm Password>" 
    And user click on "Create Account" CTA
    Then user should see set MFA screen
    And user should see set MFA screen within 3 second

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|
