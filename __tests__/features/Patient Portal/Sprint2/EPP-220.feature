
Feature:  As a user, I should be able to set a new password, without answering the security questions if they are not set. 

  @BDDTEST-EPP-509
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify user able to navigate to the Select option screen from the Forgot Password Screen when Security questions not set
    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button

  @BDDTEST-EPP-510
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 -Verify should be able to receive reset password link  to the registered Email without answering the security questions if they are not set.
    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Go send link"
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your email” 
    And User should be able to view the message "Check {donj@yahoo.com} for an email to reset your password"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as 
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user click on a reset password link
    Then user should see "Update Password" screen
    
    Example:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-511
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify should be able to receive reset password link to the registered Phone number without answering the security questions if they are not set.
    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Phone Number" 
    When user click on "Go send link"
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your phone number” 
    And User should be able to view the message "Check {(858)218-9989} for a link to reset your password"
    When user access the messages of registered "Phone" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as 
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user click on a reset password link
    Then user should see "Update Password" screen
    
    
    Example:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1116
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify should be able to set a new password using the link received to the registered email without answering the security questions if they are not set
    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen
    And User should not set the "security questions"
    And user should see "Receive link to reset password" button
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options
    Then User should configure "Email" and "Phone" radio button during registration
    And User should see "Email" and "Phone" radio button
    Then user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Go send link"
    Then user should see the page with "Password Reset" heading
    And User should see the "Link sent to your email" text
    And User should see the message "Check {donj@yahoo.com} for an email to reset your password"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as below
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user clicks on a magic link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill the valid "<New Password>" and "<Confirm New Password>" fields
    Then The system should be mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see "Password has been updated" message
    And User should receive an email to their registered email-id regarding password reset
    When User should click the link - Open mail 
    And User Login to the email 
    And The mail will looks like with below format
    |Email subject - Your Patient Portal password has been reset
    |Email/ message body -
    |Hi {username},
    |Your Patient Portal password has been successfully reset. If you did not request a password reset, contact customer support. 
    |Thanks,
    |Admin
    And User should see "Back to Login" button
    When User clicks on "Back to Login" button
    Then User should navigated to "Patient Login" screen
    And User should see "Patient Login" screen
    And User should see "<username>" and "<password>" field
    When User inputs valid "<username>" field
    And User input "<New Password>" field
    Then User should navigated to "Dashboard" screen
    
    Example:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1117
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify should be able to set a new password using the link received to the registered Phone Number without answering the security questions if they are not set
    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should input valid "<Email or Phone Number>"field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Phone Number" 
    When user click on "Go send link"
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your phone number” 
    And User should be able to view the message "Check {(858)218-9989} for a link to reset your password"
    When user access the messages of registered "Phone" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as 
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user click on a magic link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill the valid "<New Password>" and "<Confirm New Password>" fields
    Then The system should be mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see "Password has been updated" message
    And User should receive an email to their registered email-id regarding password reset
    When User should click the link - Open mail 
    And User Login to the email 
    And The mail will looks like with below format
    |Email subject - Your Patient Portal password has been reset
    |Email/ message body -
    |Hi {username},
    |Your Patient Portal password has been successfully reset. If you did not request a password reset, contact customer support. 
    |Thanks,
    |Admin
    And User should see "Back to Login" button
    When User clicks on "Back to Login" button
    Then User should navigated to "Patien Login" screen
    And User should see "Patient Login" screen
    And User should see "<username>" and "<password>" field
    When User inputs valid "<username>" field
    And User input "<New Password>" field
    Then User should navigated to "Dashboard" screen
    
    Example:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1118
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify the error message “Reset password link has been expired” if the user clicks on the link received in email/text to update password 24 hours after it has been sent
    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see Forgot Password screen
    And user should see "<Email or Phone Number>" field
    And user should input valid "<Email or Phone Number>"field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only  "Mode of Communication" as "Email" or "Phone Number"
    When user click on "Go send link"
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your email” 
    And User should be able to view the message "Check {donj@yahoo.com} for an email to reset your password" or  "Check {(858)218-9989} for a link to reset your password“
    When user access the inbox of registered "Email" or message of "Phone" after 24 hours
    Then user should see error message "Reset password link has been expired"
    
    Example:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1162
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify user  is not able to submit "Set New Password" when internet connection is unavailable
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-220 - Verify user  is not able to submit "Set New Password" when internet connection is unavailable"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Go send link"
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your email” 
    And User should be able to view the message "Check {donj@yahoo.com} for an email to reset your password"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as 
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user click on a reset password link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill valid "<New Password>" field
    And  User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then user should see appropriate error message 

    Example:
    |New Password|Confirm New Password|
    |eyeCare12!|eyeCare12!|

  @BDDTEST-EPP-1728
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify User should not copy and paste on <New Password>" and "<Confirm New Password>" fields
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-220 - Verify User should not copy and paste on "<New Password>" and "<Confirm New Password>" fields"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Go send link"
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your email” 
    And User should be able to view the message "Check {donj@yahoo.com} for an email to reset your password"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as 
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user click on a reset password link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    And User should fill valid "<New Password>" field and "<Confirm New Password>" fields
    And User should not copy and paste on "<New Password>" and "<Confirm New Password>" fields

    Example:
    |New Password|Confirm New Password|
    |eyeCare12!|eyeCare12!|

  @BDDTEST-EPP-1729
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify user  is not able to submit "Set New Password" when service is unavailable
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-219 - Verify user  is not able to submit "Set New Password" when service is unavailable"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Go send link"
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your email” 
    And User should be able to view the message "Check {donj@yahoo.com} for an email to reset your password"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as 
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user click on a reset password link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill valid "<New Password>" field
    And  User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then user should see appropriate error message 

    Example:
    |New Password|Confirm New Password|
    |eyeCare12!|eyeCare12!|

  @BDDTEST-EPP-1730
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify user should see "page loading" within 3 seconds
    Scenario Outline: "'PIC_EPP-7_STORY_EPP-220 - Verify user should see "page loading" within 3 seconds"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Go send link"
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your email” 
    And User should be able to view the message "Check {donj@yahoo.com} for an email to reset your password"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as 
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user click on a reset password link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill valid "<New Password>" field
    And  User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see "Password Set" screen
    Then User should see "page loading" within 3 seconds

    Example:
    |New Password|Confirm New Password|
    |eyeCare12!|eyeCare12!|

  @BDDTEST-EPP-1731
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify user should see empty fields when user refresh the page
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-220 - Verify user should see empty fields when user refresh the page"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Go send link"
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your email” 
    And User should be able to view the message "Check {donj@yahoo.com} for an email to reset your password"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as 
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user click on a reset password link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill valid "<New Password>" field
    And  User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User refresh the page
    And User should see empty fields 

    Example:
    |New Password|Confirm New Password|
    |eyeCare12!|eyeCare12!|

  @BDDTEST-EPP-1732
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Verify user should not see any scripts error when after user press F12 on the console
    Scenario outline: "EPIC_EPP-7_STORY_EPP-220 - Verify user should not see any Java scripts error when after user press F12 on the console"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Go send link"
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your email” 
    And User should be able to view the message "Check {donj@yahoo.com} for an email to reset your password"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as 
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user click on a reset password link
    Then user should see "Update Password" screen
    When user press F12 on the console
    Then user should not see any scripts error

    Example:
    | Email or Phone Number|
    | xxxxxxxxx |

  @BDDTEST-EPP-1733
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-220 - Negative tests - Verify user should see "Password does not meet requirements" error message
    Scenario Outline: "EEPIC_EPP-7_STORY_EPP-220 - Verify user should see "Password does not meet requirements" error message"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Receive link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Receive link to reset password" button
    Then user should see "Password Reset" Page
    And user should see "Mode of Communication" options with radio buttons "Email" and "Phone" (if both are configured during registration)
    And user should select only 1 "Mode of Communication" as "Email" 
    When user click on "Go send link"
    Then user should view the page with “Password Reset” heading
    And User should view the text “Link sent to your email” 
    And User should be able to view the message "Check {donj@yahoo.com} for an email to reset your password"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Patient portal password"
    And user should see mail/ message body as 
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user click on a reset password link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill less invalid "<New Password>" field
    And  User should fill invalid "<Confirm New Password>" field
    And user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see error message "Password does not meet requirements"

    Example:
    |New Password|Confirm New Password|
    |eyeCare|eyeCare|
    |3456!|3456!|
    |$%^%#@!*|$%^%#@!*|
    |xxx@mail.com||xxx@mail.com|
    |previous password||previous password|
    |aaa1!|aaa1!|
