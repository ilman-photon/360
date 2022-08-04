
Feature: Patient Portal : As a user, I should see error messages when the answers to the security questions are incorrect during password reset process. 

  @BDDTEST-EPP-544
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-218 - Verify the error message if user enter 3 times wrong/incorrect answer the security questions via "Answer security questions" mode
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields 
    And user should see "Back to Log in" button
    When user fills in wrong "<Question1Ans>" and "<Question2Ans>"for the security questions they set up 3 times
    Then user should see error message "Your account has been locked. Please contact Customer Support to unlock your account."
    
    
    
    Example:
    | Email or Phone Number |Question1Ans|Question1Ans|
    | xxxxxxxxxxxxxxxx |XXX|XXX|

  @BDDTEST-EPP-545
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-218 - Verify the error message if user enter 3 times wrong/incorrect answer the security questions via "Received link to Reset Password" mode
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Login with magic link" button
    Then user should see "one-time link" screen
    And user should see "Choose a mode of communication where we should send you the magic link." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user clicks on "Send magic link" button
    Then user should see heading "Magic link sent" 
    And user should see text "Success magic link is sent"
    And user should see message "Click on the magic link sent to your email or phone number to access your account"
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Click on the magic link sent to your email or phone number to access your account (enter) If you did not receive the link, try to answer security questions."
    When user click on "Answer security questions" button
    Then user should see "Select an option - 2" screen 
    And user should see "Receive link to reset password"
    And user should see "Login with magic link" button
    When user click on "Receive link to reset password"
    And user should see "Choose a mode of communication where we should send you the link to reset your password." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should see "Send link" button
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Send link" button
    Then user should receive a magic link mail
    And user should see the mail with Email Subject
    When user click on "Magic link"
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields 
    When user fills in wrong "<Question1Ans>" and "<Question2Ans>"for the security questions they set up 3 times
    When user click on "Continue" button
    Then user should see "Password Recovery Security Questions" page
    And user should see error message "Your account has been locked. Please contact Customer Support to unlock your account."
    
    
    Example:
    | Email or Phone Number |Question1Ans|Question1Ans|
    | xxxxxxxxxxxxxxxx |XXX|XXX|

  @BDDTEST-EPP-1160
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-218 - Verify the error message if user enter wrong/incorrect answer the security questions via "Answer security questions" mode
    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields 
    And user should see "Back to Log in" button
    When user fills in wrong "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    Then user should see error message "Incorrect answer(s)” 
    
    
    
    Example:
    | Email or Phone Number |Question1Ans|Question1Ans|
    | xxxxxxxxxxxxxxxx |XXX|XXX|

  @BDDTEST-EPP-1161
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-218 - Verify the error message if user does not answer the security questions via "Login with magic link" mode
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Login with magic link" button
    Then user should see "one-time link" screen
    And user should see "Choose a mode of communication where we should send you the magic link." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user clicks on "Send magic link" button
    Then user should see heading "Magic link sent" 
    And user should see text "Success magic link is sent"
    And user should see message "Click on the magic link sent to your email or phone number to access your account"
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Click on the magic link sent to your email or phone number to access your account (enter) If you did not receive the link, try to answer security questions."
    When user click on "Answer security questions" button
    Then user should see "Select an option - 2" screen 
    And user should see "Receive link to reset password"
    And user should see "Login with magic link" button
    When user click on "Receive link to reset password"
    And user should see "Choose a mode of communication where we should send you the link to reset your password." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should see "Send link" button
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Send link" button
    Then user should receive a magic link mail
    And user should see the mail with Email Subject
    When user click on "Magic link"
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields 
    When user fills in wrong "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    Then user should see error message "Incorrect answer(s)” 
    
    Example:
    | Email or Phone Number |Question1Ans|Question1Ans|
    | xxxxxxxxxxxxxxxx |XXX|XXX|

  @BDDTEST-EPP-1653
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-218 - Verify user should see Forgot password screen with empty field when reload the page
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Login with magic link" button
    Then user should see "one-time link" screen
    And user should see "Choose a mode of communication where we should send you the magic link." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user clicks on "Send magic link" button
    Then user should see heading "Magic link sent" 
    And user should see text "Success magic link is sent"
    And user should see message "Click on the magic link sent to your email or phone number to access your account"
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Click on the magic link sent to your email or phone number to access your account (enter) If you did not receive the link, try to answer security questions."
    When user click on "Answer security questions" button
    Then user should see "Select an option - 2" screen 
    And user should see "Receive link to reset password"
    And user should see "Login with magic link" button
    When user click on "Receive link to reset password"
    And user should see "Choose a mode of communication where we should send you the link to reset your password." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should see "Send link" button
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Send link" button
    Then user should receive a magic link mail
    And user should see the mail with Email Subject
    When user click on "Magic link"
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields 
    When user fills in wrong "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    And user click on reload 
    Then user should see Forgot password screen with empty field when reload the page

    Example:
    | Email or Phone Number |Question1Ans|Question1Ans|
    | xxxxxxxxxxxxxxxx |XXX|XXX|

  @BDDTEST-EPP-1654
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7 _STORY_EPP-218 - Verify user should not see any error after click on F12
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Login with magic link" button
    Then user should see "one-time link" screen
    And user should see "Choose a mode of communication where we should send you the magic link." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user clicks on "Send magic link" button
    Then user should see heading "Magic link sent" 
    And user should see text "Success magic link is sent"
    And user should see message "Click on the magic link sent to your email or phone number to access your account"
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Click on the magic link sent to your email or phone number to access your account (enter) If you did not receive the link, try to answer security questions."
    When user click on "Answer security questions" button
    Then user should see "Select an option - 2" screen 
    And user should see "Receive link to reset password"
    And user should see "Login with magic link" button
    When user click on "Receive link to reset password"
    And user should see "Choose a mode of communication where we should send you the link to reset your password." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should see "Send link" button
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Send link" button
    Then user should receive a magic link mail
    And user should see the mail with Email Subject
    When user click on "Magic link"
    Then user should see "Password Recovery Security Questions" page
    And user click F12 on keyboard
    And user should not see any error after click on F12

    Example:
    | Email or Phone Number |Question1Ans|Question1Ans|
    | xxxxxxxxxxxxxxxx |XXX|XXX|

  @BDDTEST-EPP-1655
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-218 - Verify user should see user should see "Password Recovery Security Questions" page loaded within 3 seconds
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Login with magic link" button
    Then user should see "one-time link" screen
    And user should see "Choose a mode of communication where we should send you the magic link." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user clicks on "Send magic link" button
    Then user should see heading "Magic link sent" 
    And user should see text "Success magic link is sent"
    And user should see message "Click on the magic link sent to your email or phone number to access your account"
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Click on the magic link sent to your email or phone number to access your account (enter) If you did not receive the link, try to answer security questions."
    When user click on "Answer security questions" button
    Then user should see "Select an option - 2" screen 
    And user should see "Receive link to reset password"
    And user should see "Login with magic link" button
    When user click on "Receive link to reset password"
    And user should see "Choose a mode of communication where we should send you the link to reset your password." text
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should see "Send link" button
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Send link" button
    Then user should receive a magic link mail
    And user should see the mail with Email Subject
    When user click on "Magic link"
    Then user should see "Password Recovery Security Questions" page
    And user should see "Password Recovery Security Questions" page loaded within 3 second

    Example:
    | Email or Phone Number |Question1Ans|Question1Ans|
    | xxxxxxxxxxxxxxxx |XXX|XXX|
