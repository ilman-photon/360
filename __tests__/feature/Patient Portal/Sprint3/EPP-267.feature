Feature: Patient Portal : MFA - Set up Multi Factor Authentication

  @BDDTEST-EPP-2353
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration (Prefered Mode of Communication both)
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see default selection on Email
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2354
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should be able to choose other preferred mode(s) of communication
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see default selection on Email
    When user click on Phone radio button
    Then user should see radio button is selected on Phone radio button

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2355
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration (Prefered Mode of Communication Email)
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Confirm your email below and we’ll send a code to set-up multi-factor authentication."
    And user should see text  "Email: m********@yahoo.com"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2356
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration (Prefered Mode of Communication Phone)
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Confirm your phone below and we’ll send a code to set-up multi-factor authentication."
    And user should see text "Phone: (8***)***-***31"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2357
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see second MFA screen with all of components (Prefered Mode of Communication both)
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
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
    |Email or Phone Number|Password|Confirm Password|Enter code|
    |abc@gmail.com|*******|*******|xxx|

  @BDDTEST-EPP-2358
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in  user should see second MFA screen with all of component (Prefered Mode of Communication Email)
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Confirm your email below and we’ll send a code to set-up multi-factor authentication."
    And user should see text  "Email: m********@yahoo.com"
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
    |Email or Phone Number|Password|Confirm Password|Enter code|
    |abc@gmail.com|*******|*******|xxx|

  @BDDTEST-EPP-2359
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see second MFA screen with all of component (Prefered Mode of Communication Phone)
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Confirm your phone below and we’ll send a code to set-up multi-factor authentication."
    And user should see text "Phone: (8***)***-***31"
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
    |Email or Phone Number|Password|Confirm Password|Enter code|
    |abc@gmail.com|*******|*******|xxx|

  @BDDTEST-EPP-2360
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify user is successfully logged-in into their account after setup MFA (Prefered Mode of Communication both)
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
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
    And user fill  "<Enter code>" field
    When user click on "submit" button
    Then user should see Homescreen as Logged-in user

    Examples:
    |Email or Phone Number|Password|Confirm Password|Enter code|
    |abc@gmail.com|*******|*******|xxx|

  @BDDTEST-EPP-2361
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify user is successfully logged-in into their account after setup MFA (Prefered Mode of Communication Email)
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Confirm your email below and we’ll send a code to set-up multi-factor authentication."
    And user should see text  "Email: m********@yahoo.com"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    When user click on "Confirm" button
    And user receives an email/text message with a link to their registered email/phone number
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user fill  "<Enter code>" field
    When user click on "submit" button
    Then user should see Homescreen as Logged-in user

    Examples:
    |Email or Phone Number|Password|Confirm Password|Enter code|
    |abc@gmail.com|*******|*******|xxx|

  @BDDTEST-EPP-2362
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify user is successfully logged-in into their account after setup MFA (Prefered Mode of Communication Phone)
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Confirm your phone below and we’ll send a code to set-up multi-factor authentication."
    And user should see text "Phone: (8***)***-***31"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    When user click on "Confirm" button
    And user receives an email/text message with a link to their registered email/phone number
    Then user should see "second MFA" screen with all of component
    And user should see "<Enter code>" field
    And user fill  "<Enter code>" field
    When user click on "submit" button
    Then user should see Homescreen as Logged-in user

    Examples:
    |Email or Phone Number|Password|Confirm Password|Enter code|
    |abc@gmail.com|*******|*******|xxx|

  @BDDTEST-EPP-2363
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify user see error screen when internet is unavailable
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
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
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2364
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify user see error screen when service is unavailable
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
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
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2365
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-267 - Verify user should not see any error when user tap on F12 keyboard in console


  @BDDTEST-EPP-2366
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see "MFA" screen with default selection preferred mode(s) of communication
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
    Then user should see set MFA screen
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button selected on "Email: m********@yahoo.com"
    And user click on other radio button
    And user checked the "remember me" checkbox
    When user click on "Reload" in browser
    Then user should see "MFA" screen with default selection preferred mode(s) of communication

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-2367
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario Outline: EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration within 3 second
    Feature: Authentication - MFA

    Given user launch the "XXX" url		
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user see "<Email or Phone Number>" field and "<Password>" field
    And user should enter valid "<Email or Phone Number>" and valid "<Password>"
    When user clicks on "Continue" button
    Then user should see set MFA screen
    Then user should see set MFA screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button selected on "Email: m********@yahoo.com"
    And user click on other radio button
    And user checked the "remember me" checkbox
    When user click on "Reload" in browser
    Then user should see "MFA" screen with default selection preferred mode(s) of communication

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|
