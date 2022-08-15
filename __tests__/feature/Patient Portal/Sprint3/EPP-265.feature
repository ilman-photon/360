Feature: Patient Portal : MFA - Provide details to receive code

  @BDDTEST-EPP-2307
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-265 - Verify user should see second MFA screen with all of components (Prefered Mode of Communication both)
    Feature: Authentication - MFA

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ mobile number
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
    And user receives an email/text message with a link to their registered email/phone number
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    And user should see "Back to Login" link

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2308
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-265 - Verify user should see second MFA screen with all of component (Prefered Mode of Communication Email)
    Feature: Authentication - MFA

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
    When user click on "Confirm" button
    And user receives an email/text message with a link to their registered email
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    And user should see "Back to Login" link

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2309
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-265 - Verify user should see second MFA screen with all of component (Prefered Mode of Communication Phone)
    Feature: Authentication - MFA

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
    And user should see text  "Phone: (8***)***-***31"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    When user click on "Confirm" button
    And user receives an email/text message with a link to their registered Phone number
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Submit" & "Resend code" button
    And user should see "Back to Login" link

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2310
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication both)
    Feature: Authentication - MFA

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ mobile number
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
    And user receives an email/text message with a link to their registered email/phone number
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see "Submit" & "Resend code" button
    When user click on "Resend code" button
    Then user receives an email/text message with a link to their registered email/phone number

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|Enter Code|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|*******|

  @BDDTEST-EPP-2311
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario: EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication Email)
    Feature: Authentication - MFA

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
    When user click on "Confirm" button
    And user receives an email/text message with a link to their registered email
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see "Submit" & "Resend code" button
    When user click on "Resend code" button
    Then user receives an email/text message with a link to their registered email

  @BDDTEST-EPP-2312
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication Phone)
    Feature: Authentication - MFA

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
    And user should see text  "Phone: (8***)***-***31"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    When user click on "Confirm" button
    And user receives an email/text message with a link to their registered Phone number
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user should see "Submit" & "Resend code" button
    When user click on "Resend code" button
    Then user receives an email/text message with a link to their registered phone number

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|Enter Code|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|*******|

  @BDDTEST-EPP-2313
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-265 - Verify user should lands onto “Patient Login” screen when user click on "Back to Login" link
    Feature: Authentication - MFA

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ mobile number
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
    And user receives an email/text message with a link to their registered email/phone number
    Then user should see "second MFA" screen with all of component
    And user should see "Back to Login" link
    When user click on Back to Login" link

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2314
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-265 - Verify user should see "<Enter Code>" field is blank after reload the screen
    Feature: Authentication - MFA

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
    And user should see text  "Phone: (8***)***-***31"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    When user click on "Confirm" button
    And user receives an email/text message with a link to their registered Phone number
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    When user fiil in  "<Enter code>" field
    Then user should see text in "<Enter code>" field
    When user reload the page
    Then user should see "<Enter code>" field blank

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|Enter Code|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|*******|

  @BDDTEST-EPP-2315
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-265 - Verify user see error screen when internet is unavailable
    Feature: Authentication - MFA

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
    And user should see text  "Phone: (8***)***-***31"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    When user click on "Confirm" button
    And user receives an email/text message with a link to their registered Phone number
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    When user fiil in  "<Enter code>" field
    Then user should see text in "<Enter code>" field
    When user click on "Resend code" button
    Then user should see error screen

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|Enter Code|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|*******|

  @BDDTEST-EPP-2316
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-265 - Verify user see error screen when service is unavailable
    Feature: Authentication - MFA

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
    And user should see text  "Phone: (8***)***-***31"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    When user click on "Confirm" button
    And user receives an email/text message with a link to their registered Phone number
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    When user fiil in  "<Enter code>" field
    Then user should see text in "<Enter code>" field
    When user click on "Resend code" button
    Then user should see error screen

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|Enter Code|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|*******|

  @BDDTEST-EPP-2317
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-265 - Verify user should not see any error when user tap on F12 keyboard in console
    Feature: Authentication - MFA

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
    And user should see text  "Phone: (8***)***-***31"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    When user click on "Confirm" button
    And user receives an email/text message with a link to their registered Phone number
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    When user tap on F12 on keyboard
    Then user should not see any error in console when user tap on F12 keyboard

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|Enter Code|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|*******|

  @BDDTEST-EPP-2318
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-265 - Verify user should see "second MFA" screen within 3 second
    Feature: Authentication - MFA

    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all madantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ mobile number
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
    And user receives an email/text message with a link to their registered email/phone number
    Then user should see "second MFA" screen with all of component
    And user should see "second MFA" screen within 3 second

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|
