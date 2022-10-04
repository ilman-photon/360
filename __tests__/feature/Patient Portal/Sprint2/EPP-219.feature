
Feature: As a user, I should be able to set new password by answering security questions correctly during password reset process. 

  @BDDTEST-EPP-505
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-7_STORY_EPP-219 - Verify User should see the entered mask password by default
    Given use launch the "XXX" url
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "Email or Phone Number" field
    And user should enter valid "Email or Phone Number" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions"
    And user should view the text "Answer the following questions to reset your password"
    And user should view the questions fields
    And user should see "Continue" button
    And user should see "Back to Log in" button
    And user fills in "Question1Ans" and "Question2Ans"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password" Page
    And User should see "New Password" and "Confirm New Password" fields
    When User should fill the valid "New Password" and "Confirm New Password" fields
    Then User should see the entered mask password by default
    When User should click on "Update" button
    Then User should see "Password has been updated" success message
    @BDDTEST-EPP-506
  @Authentication
  @Patient_Portal
  @Automation
  @Sprint2
  Scenario Outline: EPIC_EPP-7_STORY_EPP-219 - Verify User should receive an email to their registered email-id that the entered in the username field, regarding password reset 

    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button(
    Then user should see "Password Recovery Security Questions"
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user should see "Continue" button
    And user should see "Back to Log in" button
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password Page" 
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill the valid "<New Password>" and "<Confirm New Password>" fields
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see "Password has been updated" success message
    And User should receive an email to their registered email-id regarding password reset
    When User Open mail and click the link 
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
    Then User should navigated to "Login" screen

    Examples:
    |username|Question1Ans |Question2Ans|New Password|Confirm New Password|
    |xxx@mail.com|XXXXXXXX|YYYYYYYY|******|******|

  @BDDTEST-EPP-507
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: "EPIC_EPP-7_STORY_EPP-219 - Verify User should unmask the entered password"

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
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions"
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user should see "Continue" button
    And user should see "Back to Log in" button
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password" Page
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill the valid "<New Password>" and "<Confirm New Password>" fields
    Then User should see the entered mask password by default
    And User should see "Password Eye" icon
    When User clicks on "Password Eye" icon
    Then User should see the entered password

    Examples:
    |username|security questions|New Password|Confirm New Password|
    |xxx@mail.com|XXXXXXXX|******|******|

  @BDDTEST-EPP-508
  @Authentication
  @Patient_Portal
  @Automation
  @Sprint2
  Scenario Outline: EPIC_EPP-7_STORY_EPP-219 - Verify User should receive a text to their registered Phone number  regarding password reset
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-219 - Verify User should receive a text to their registered mobile number that the entered in the username field, regarding password reset"

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
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions"
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user should see "Continue" button
    And user should see "Back to Log in" button
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password Page" 
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill the valid "<New Password>" and "<Confirm New Password>" fields
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see "Password has been updated" success message
    And User should receive an email to their registered email-id regarding password reset
    When User Open message on phone and click the link 
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
    Then User should navigated to "Login" screen

    Examples:
    |username|Question1Ans |Question2Ans|New Password|Confirm New Password|
    |xxx@mail.com|XXXXXXXX|YYYYYYYY|******|******|

  @BDDTEST-EPP-1112
  @Authentication
  @Patient_Portal
  @Automation
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-7_STORY_EPP-219 - Verify User should Login using new Password

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    And user should see "Back to Log in" button
    Then User should navigated to "Select an Option" screen
    And User should see the "Answer sequrity questions" button
    When User clicks on the "Answer sequrity questions" button
    Then User should navigated to "Password Recovery Security Question" screen
    And User should see "<security questions>" fields
    Then User answers all the valid "<security questions>" fields
    And User should see "Continue" button
    When User should click on "Continue" button
    Then User should navigated to "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill the valid "<New Password>" and "<Confirm New Password>" fields
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see "Password has been updated" success message
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

    Examples:
    |username|security questions|New Password|Confirm New Password|
    |xxx@mail.com|XXXXXXXX|******|******|

  @BDDTEST-EPP-1115
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: "EPIC_EPP-7_STORY_EPP-219 - Verify User should not copy and paste on "<New Password>" and "<Confirm New Password>" fields"

    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then User should navigated to "Select an Option" screen
    And User should see the "Answer sequrity questions" button
    When User clicks on the "Answer sequrity questions" button
    Then User should navigated to "Password Recovery Security Question" screen
    And User should see "<security questions>" fields
    Then User answers all the valid "<security questions>" fields
    And User should see "Continue" button
    And user should see "Back to Log in" button
    When User should click on "Continue" button
    Then User should navigated to "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    And User should fill valid "<New Password>" and "<Confirm New Password>" fields
    Then User should not copy and paste on "<New Password>" and "<Confirm New Password>" fields

    Examples:
    |username|security questions|
    |xxx@mail.com|XXXXXXXX|

  @BDDTEST-EPP-1702
  @Authentication
  @Patient_Portal
  @Automation
  @Sprint2
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-219 - Verify user should see the inline error "This field is required" when user emptied "<New Password>" field"

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid "<Email or Phone Number>" field
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions"
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user should see "Continue" button
    And user should see "Back to Log in" button
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password Page" 
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should empty "<New Password>" and "<Confirm New Password>" fields
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then user should see the inline error "This filed is required"

    Examples:
    |username|Question1Ans |Question2Ans|New Password|Confirm New Password|
    |xxx@mail.com|XXXXXXXX|YYYYYYYY|           |                 |

  @BDDTEST-EPP-1703
  @Authentication
  @Patient_Portal
  @Automation
  @Sprint2
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-219 - Verify user should see "Password does not meet requirements" error message"

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
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions"
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user should see "Continue" button
    And user should see "Back to Log in" button
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password Page" 
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill invalid "<New Password>" field
    And  User should fill invalid "<Confirm New Password>" field
    And user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see error message "Password does not meet requirements" 

    Examples:
    |New Password|Confirm New Password|
    |eyeCare|eyeCare|
    |3456!|3456!|
    |$%^%#@!*|$%^%#@!*|
    |xxx@mail.com|xxx@mail.com|
    |previous password|previous password|
    |aaa1!|aaa1!|

  @BDDTEST-EPP-1704
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: "EPIC_EPP-7_STORY_EPP-219 - Verify user should see "page loading" as 3 seconds"

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
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions"
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user should see "Continue" button
    And user should see "Back to Log in" button
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password Page" 
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill valid "<New Password>" field
    And  User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see "Password Set" screen
    And user should see "page loading" within 3 seconds

    Examples:
    |username|Question1Ans |Question2Ans|New Password|Confirm New Password|
    |xxx@mail.com|XXXXXXXX|YYYYYYYY|EyeCare12!|EyeCare12!|

  @BDDTEST-EPP-1705
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: "EPIC_EPP-7_STORY_EPP-219 - Verify user  is not able to submit "Reset Password" when service is unavailable"

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
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions"
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user should see "Continue" button
    And user should see "Back to Log in" button
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password Page" 
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill valid "<New Password>" field
    And  User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then user should see appropriate error message 

    Examples:
    |username|Question1Ans |Question2Ans|New Password|Confirm New Password|
    |xxx@mail.com|XXXXXXXX|YYYYYYYY|aaa1!|aaa1!|

  @BDDTEST-EPP-1706
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline: "EPIC_EPP-7_STORY_EPP-219 - Verify user  is not able to submit "Reset Password" when Internet connection is unavailable"

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
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions"
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user should see "Continue" button
    And user should see "Back to Log in" button
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password Page" 
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill valid "<New Password>" field
    And  User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then user should see appropriate error message 

    Examples:
    |username|Question1Ans |Question2Ans|New Password|Confirm New Password|
    |xxx@mail.com|XXXXXXXX|YYYYYYYY|aaa1!|aaa1!|

  @BDDTEST-EPP-1707
  @Authentication
  @Patient_Portal
  @Sprint2
 Scenario Outline: "EPIC_EPP-7_STORY_EPP-219 - Verify user should not see any Java scripts error when after user press F12 on the console"

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
    And user should see "Answer security questions" button(if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions"
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user should see "Continue" button
    And user should see "Back to Log in" button
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password Page" 
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill valid "<New Password>" field
    And  User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see "Password Set" screen
    And User should see "Password has been updated" success message
    When user press F12 on the console
    Then user should not see any scripts error

    Examples:
    |username|Question1Ans |Question2Ans|New Password|Confirm New Password|
    |xxx@mail.com|XXXXXXXX|YYYYYYYY|aaa1!|aaa1!|
