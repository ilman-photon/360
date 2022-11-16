
Feature: Patient Portal : MFA - Resend code during multi factor authentication
  User Story: As a user, I should be able to request for the code to be resent during multi factor authentication.
  
  
  @BDDTEST-EPP-1868
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive an email/text message with the code to the email and mobile number when user clicks "Resend Code" button (Preferred Mode of Communication both)
    Given user launch "XXX" URL
    And user is in "Patient Login" screen
    When user clicks on the "Create an Account" button in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all mandantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ mobile number
    When user clicks on the link 
    Then user lands onto "Set New Username and Password" screen
    And user should see the updated Username field with either as email-id or Phone Number by default
    And user should see and fill the following fields "<Password>" and "<Confirm Password>"
    When user provides the same password details to the fields "<Password>" and "<Confirm Password>" 
    And user clicks on "Create Account" button
    Then user should see "MFA" screen
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
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email and mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1869
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive an email with the code to the email when user clicks "Resend Code" button (Preferred Mode of Communication Email)
    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all mandantory details and option to choose email
    And user receives an email/text message with a link to their registered email id
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with email-id by default
    And user should able to view and fill the following fields 
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
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1870
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive a text message with the code to the mobile number when user clicks "Resend Code" button (Prefered Mode of Communication Phone)
    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all mandantory details and option to choose phone number
    And user receives an email/text message with a link to their registered phone number
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with email-id by default
    And user should able to view and fill the following fields 
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
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1871
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Negative Test Cases - Register User - Verify User should see the following error message "Code sent multiple times. Please try again after 30 minutes." (Preferred Mode of Communication both)
    Given user launch "XXX" URL
    And user is in "Patient Login" screen
    When user clicks on the "Create an Account" button in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all mandantory details and option to choose both
    And user receives an email/text message with a link to their registered email id/ mobile number
    When user clicks on the link 
    Then user lands onto "Set New Username and Password" screen
    And user should see the updated Username field with either as email-id or Phone Number by default
    And user should see and fill the following fields 
    When user provides the same password details to the fields "<Password>" and "<Confirm Password>" 
    And user clicks on "Create Account" button
    Then user should see "MFA" screen
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
    When user clicks on "Resend Code" button for 3 times
    Then user should see the following error message "Code sent multiple times. Please try again after 30 minutes."

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1872
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Negative Test Cases - Register User - Verify User should see the following error message "Code sent multiple times. Please try again after 30 minutes." (Prefered Mode of Communication Phone)
    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all mandantory details and option to choose phone number
    And user receives an email/text message with a link to their registered phone number
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with email-id by default
    And user should able to view and fill the following fields 
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
    When user clicks on "Resend code" button for 3 times
    Then user should see the following error message "Code sent multiple times. Please try again after 30 minutes."

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1873
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication both)
    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should able to fill all mandantory details and option to choose both
    And user receives an email/text message with a link to their registered email and phone number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-1874
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Prefered Mode of Communication email)
    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should able to fill all mandantory details and option to choose email
    And user receives an email/text message with a link to their registered email
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-1875
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication mobile number)
    Given user is on second MFA screen	
    And user should see "second MFA" screen with all of component
    And user should able to fill all mandantory details and option to choose phone number
    And user receives an email/text message with a link to their registered phone number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Enter code|
    |xxx|

  @BDDTEST-EPP-1876
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Register User - Verify user should see the error message when the internet service is unavailable (Preferred Mode of Communication Email)
    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all mandantory details and option to choose email
    And user receives an email/text message with a link to their registered email id
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with email-id by default
    And user should able to view and fill the following fields 
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
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"
    And the internet service is unavailable
    Then user should see the appropriate error message

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1877
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Register User - Verify user should see the error message when the service is unavailable (Prefered Mode of Communication Email)
    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all mandantory details and option to choose email
    And user receives an email/text message with a link to their registered email id
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with email-id by default
    And user should able to view and fill the following fields 
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
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    And the service is unavailable
    Then user should see the appropriate error message

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1878
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should see the following message "Multi factor Authentication has been set successfully" within 3 seconds during resend code request (Prefered Mode of Communication Email)
    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all mandantory details and option to choose email
    And user receives an email/text message with a link to their registered email id
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with email-id by default
    And user should able to view and fill the following fields 
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
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the page loads within "3 seconds"
    And user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1879
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should not see the any errors script when user clicks F12 on the console (Prefered Mode of Communication Email)
    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all mandantory details and option to choose email
    And user receives an email/text message with a link to their registered email id
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with email-id by default
    And user should able to view and fill the following fields 
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
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"
    When user clicks on F12 on the console
    Then user should not to see any errors script

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1880
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Existing User - Verify User should receive an email/text message with the code to the email and mobile number when user clicks "Resend Code" button (Preferred Mode of Communication both)
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
    And user select on "Both" radio button
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Resend Code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email and mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1881
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Existing User - Verify User should receive an email with the code to the email when user clicks "Resend Code" button (Prefered Mode of Communication Email)
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
    And user select on "Email" radio button
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Resend Code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the email
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1882
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Existing User - Verify User should receive a text message with the code to the mobile number when user clicks "Resend Code" button (Prefered Mode of Communication Phone)
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
    And user select on "Mobile Number" radio button
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Resend Code" button
    When user clicks on "Resend code" button
    Then user receives an email/text message with the code to the mobile number
    And user should see "<Enter code>" field
    And user fill "<Enter code>" field with valid code
    When user click on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1883
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Existing User - Verify User should see the following error message "Code sent multiple times. Please try again after 30 minutes." (Preferred Mode of Communication both)
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
    And user select on "Mobile Number" radio button
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Resend Code" button
    When user clicks on "Resend code" button for 3 times
    Then user receives an email/text message with the code to the mobile number

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1884
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Existing User - Verify User should see the following error message "Code sent multiple times. Please try again after 30 minutes." (Preferred Mode of Communication email)
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
    And user select on "Mobile Number" radio button
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Resend Code" button
    When user clicks on "Resend code" button for 3 times
    Then user receives an email/text message with the code to the mobile number

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1885
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Existing User - Verify User should see the following error message "Code sent multiple times. Please try again after 30 minutes." (Preferred Mode of Communication Phone)
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
    And user select on "Mobile Number" radio button
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Resend Code" button
    When user clicks on "Resend code" button for 3 times
    Then user receives an email/text message with the code to the mobile number

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1886
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Existing User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Prefered Mode of Communication both)
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
    And user select on "Mobile Number" radio button
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Resend Code" button
    When user clicks on "Resend code" button for 3 times
    Then user receives an email/text message with the code to the mobile number

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1887
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Existing User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication email)
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
    And user select on "Mobile Number" radio button
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Resend Code" button
    When user clicks on "Resend code" button for 3 times
    Then user receives an email/text message with the code to the mobile number

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1888
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Existing User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication mobile number)
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
    And user select on "Mobile Number" radio button
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Resend Code" button
    When user clicks on "Resend code" button for 3 times
    Then user receives an email/text message with the code to the mobile number

    Examples:
    |Email or Phone Number|Password|Confirm Password|
    |abc@gmail.com|*******|*******|

  @BDDTEST-EPP-1889
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Existing User - Verify user should see the error message when the internet service is unavailable
    Given use launch the  "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    And user should able to view the  "Don’t have an account?" texts along with "Create Account" button  
    And user clicks on the "Create an Account" button
    And user lands onto "User Registration" screen 
    Then user should see user registration screen		
    And user fills the valid "<First Name>","<Last Name>","<Date of Birth>","<Email>","<Password>" and "<Mobile number>" fields
    Then user should see default "Preferred mode(s) of communication" as an Email
    When users click on "Register" button
    Then user shoud see set "MFA" screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Confirm" button
    Then user receives an email/ text message with the code to the email or mobile number
    And user should see the code on their an email/ text message
    And user should see "<Enter Code>" field
    And user should see "Resend Code" button
    When user clicks on "Resend Code" button
    And the internet service is unavailable
    Then user should see the appropriate error message

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|Enter Code|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|****|

  @BDDTEST-EPP-1890
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Existing User - Verify user should see the error message when the service is unavailable
    Given use launch the  "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    And user should able to view the  "Don’t have an account?" texts along with "Create Account" button  
    And user clicks on the "Create an Account" button
    And user lands onto "User Registration" screen 
    Then user should see user registration screen		
    And user fills the valid "<First Name>","<Last Name>","<Date of Birth>","<Email>","<Password>" and "<Mobile number>" fields
    Then user should see default "Preferred mode(s) of communication" as an Email
    When users click on "Register" button
    Then user shoud see set "MFA" screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Confirm" button
    Then user receives an email/ text message with the code to the email or mobile number
    And user should see the code on their an email/ text message
    And user should see "<Enter Code>" field
    And user should see "Resend Code" button
    When user clicks on "Resend Code" button
    And the service is unavailable
    Then user should see the appropriate error message

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|Enter Code|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|****|

  @BDDTEST-EPP-1891
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Existing User - Verify User should see the following message "Multi factor Authentication has been set successfully" within 3 seconds during resend code request
    Given use launch the  "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    And user should able to view the  "Don’t have an account?" texts along with "Create Account" button  
    And user clicks on the "Create an Account" button
    And user lands onto "User Registration" screen 
    Then user should see user registration screen		
    And user fills the valid "<First Name>","<Last Name>","<Date of Birth>","<Email>","<Password>" and <Mobile number>" fields
    Then user should see default "Preferred mode(s) of communication" as an Email
    When users click on "Register" button
    Then user shoud see set "MFA" screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Confirm" button
    Then user receives an email/ text message with the code to the email or mobile number
    And user should see the code on their an email/ text message
    And user should see "<Enter Code>" field
    And user should see "Resend Code" button
    When user clicks on "Resend Code" button
    Then user receives an email/ text message with the code to the email or mobile number
    And user should see the code on their an email/ text message
    And user should see "<Enter Code>" field
    And user should fill valid "<Enter Code>" field
    When user clicks on "Submit" button
    Then user should see the page loads within "3 seconds"
    And user should see the following message "Multi factor Authentication has been set successfully"

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|Enter Code|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|****|

  @BDDTEST-EPP-1892
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Existing User - Verify User should not see the any errors script when user clicks F12 on the console
    Given use launch the  "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    And user should able to view the  "Don’t have an account?" texts along with "Create Account" button  
    And user clicks on the "Create an Account" button
    And user lands onto "User Registration" screen 
    Then user should see user registration screen		
    And user fills the valid "<First Name>","<Last Name>","<Date of Birth>","<Email>","<Password>" and <Mobile number>" fields
    Then user should see default "Preferred mode(s) of communication" as an Email
    When users click on "Register" button
    Then user shoud see set "MFA" screen
    And user should see screen title written as "Set Multi-Factor Authentication"
    And user should see screen subtitle written as "Select a delivery method to identify your identity."
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see "Remember me" option
    When user checklist the "Remember me" option
    Then user should see the "Remember me" option has been selected
    When user clicks on "Confirm" button
    Then user receives an email/ text message with the code to the email or mobile number
    And user should see the code on their an email/ text message
    And user should see "<Enter Code>" field
    And user should see "Resend Code" button
    When user clicks on "Resend Code" button
    Then user receives an email/ text message with the code to the email or mobile number
    And user should see the code on their an email/ text message
    And user should see "<Enter Code>" field
    And user should fill valid "<Enter Code>" field
    When user clicks on "Submit" button
    Then user should see the following message "Multi factor Authentication has been set successfully"
    When user clicks on F12 on the console
    Then user should not to see any errors script

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|Enter Code|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|****|

  @BDDTEST-EPP-2328
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-3_STORY_EPP-280 - Negative Test Cases - Register User - Verify the User should see the following error message "Code sent multiple times. Please try again after 30 minutes." (Preferred Mode of Communication both)
    Given user launch "XXX" URL
    And user is in “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "Registration" screen 
    And user should able to fill all mandantory details and option to choose email
    And user receives an email/text message with a link to their registered email id
    When user click on the link 
    Then user lands onto “Set New Username and Password” screen
    And user should able to view Username field updated with email-id by default
    And user should able to view and fill the following fields 
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
    When user clicks on "Resend code" button for 3 times
    Then user should see the following error message "Code sent multiple times. Please try again after 30 minutes."

    Examples:
    |First Name|Last Name|Date of Birth|Email|Mobile number|User name|Password|Confirm Password|
    |XXXX|YYYY|abc@gmail.com|DDMMYYYY|5555551234|abc@gmail.com|*******|*******|
