Feature:  As a user, I should be able to initiate password reset by answering the security questions I had set. 

  @BDDTEST-EPP-542
  @Authentication
  @Patient_Portal
  @Automation
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-217 - Verify user should be able to reset the old password by answering the security questions if  "one-time link" is not received
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
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields 
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password" screen
    And user should see update password fields
    And user fills "<NewPassword>" and "<ConfirmNewPassword>" field
    And user should see text "Password length should range from 8 to 20 characters"
    And user should see text "Password should contain at least one alphabet (a-z)"
    And user should see text "Password should contain at least one special character"
    And user should see text "Password should not contain your username"
    And user should see text "Password should not be match with your previously used password"
    And user should see text "Password should not contain 3 or more identical characters consecutively (ex. Employee, Sys@@@tem, abcabcabc, 123123123, etc.)" 
    And user should see "Update" button
    When user click on "Update" button
    Then user should see text "Password has been updated"
    And user should see "Back to login" button
    Then user should see error message "This field is required"

    
    Examples:
    | Email or Phone Number |Question1Ans|Question1Ans|
    | xxxxxxxxxxxxxxxx |XXX|XXX|

  @BDDTEST-EPP-543
  @Authentication
  @Patient_Portal
  @Automation
  @Regression
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-217 - Verify user should be able to reset the old password by answering the security questions via "Answer security questions" mode

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "Email or Phone Number"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions" page
    And user should view the text "Answer the following questions to reset your password"
    And user should view the questions fields
    And user fills in "Question1Ans" and "Question2Ans" for the security questions they set up
    When user click on "Continue" button
    And user should see "Back to login" button
    
    Examples:
    | Email or Phone Number | Question1Ans | Question1Ans | NewPassword | ConfirmNewPassword |
    | xxxxxxxxxxxxxxxx |XXX|XXX|XXX|XXX|

  @BDDTEST-EPP-1109
  @Authentication
  @Patient_Portal
  @Automation
  @Regression
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-217 - Verify the error message if user does not answer the security questions via "Answer security questions" mode
    Given use launch the 'XXX' url
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "Email or Phone Number"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions" page
    And user should view the text "Answer the following questions to reset your password"
    And user should view the questions fields
    When user does not fills in "Question1Ans" and "Question2Ans"for the security questions they set up
    And user click on "Continue" button
    Then user should see error message "This field is required"
    
    Examples:
    | Email or Phone Number |Question1Ans|Question1Ans|
    | xxxxxxxxxxxxxxxx |XXX|XXX|

  @BDDTEST-EPP-1158
  @Authentication
  @Patient_Portal
  @Automation
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-217 - Verify user should be able to reset the old password using "one-time link"
    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Received link to reset password" button(if security questions is not set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    And user should see the mail with Email Subject
    When user click on "Link" on email
    Then user should see "Update Password" screen
    And user should see update password fields
    And user fills "<NewPassword>" and "<ConfirmNewPassword>" field
    And user should see text "Password length should range from 8 to 20 characters"
    And user should see text "Password should contain at least one alphabet (a-z)"
    And user should see text "Password should contain at least one special character"
    And user should see text "Password should not contain your username"
    And user should see text "Password should not be match with your previously used password"
    And user should see text "Password should not contain 3 or more identical characters consecutively (ex. Employee, Sys@@@tem, abcabcabc, 123123123, etc.)" 
    And user should see "Update" button
    When user click on "Update" button
    Then user should see text "Password has been updated"
    And user should see "Back to login" button
    
    Examples:
    | Email or Phone Number |NewPassword|ConfirmNewPassword|
    | xxxxxxxxxxxxxxxx |XXX|XXX|

  @BDDTEST-EPP-1159
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-217  - Verify user  is not able to view "Password Recovery Security Questions" page on clicking "Answer security question" when Internet connection is unavailable
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
    When user click on "Login with magic link" button 
    And user click on "Answer security questions" button
    Then user should see appropriate error message 
    
    Examples:
    | Email or Phone Number |Question1Ans|Question1Ans|
    | xxxxxxxxxxxxxxxx |XXX|XXX|

  @BDDTEST-EPP-1638
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-217  - Verify user  is not able to view "Password Recovery Security Questions" page on clicking "Answer security question" when service is unavailable
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
    When user click on "Login with magic link" button 
    And user click on "Answer security questions" button
    Then user should see appropriate error message 
    
    Examples:
    | Email or Phone Number |Question1Ans|Question1Ans|
    | xxxxxxxxxxxxxxxx |XXX|XXX|

  @BDDTEST-EPP-1639
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-217 - Verify user should see And user should see update password screen with blank field when user refresh the screen

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user fills in "<Question1Ans>" and "<Question2Ans>" for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password" screen
    And user should see update password fields
    And user fills "<NewPassword>" field and "<ConfirmNewPassword>" field
    When user click on reload page 
    Then user should see update password screen fields blank

    Examples:
    | Email or Phone Number | Question1Ans | Question1Ans | NewPassword | ConfirmNewPassword |
    | xxxxxxxxxxxxxxxx |XXX|XXX|XXX|XXX|

  @BDDTEST-EPP-1647
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7_STORY_EPP-216 - Verify user should see Update Password screen loaded within 3 seconds

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user fills in "<Question1Ans>" and "<Question2Ans>" for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password" screen
    And user click F12 on keyboard
    And user should not see any error after click on F12

  @BDDTEST-EPP-1650
  @Authentication
  @Patient_Portal
  @Sprint2
@included
  Scenario: EPIC_EPP-7 _STORY_EPP-217 - Verify user should not see any error after click on F12

    Given use launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user clicks on 'Forgot Password' link
    And user should enter valid "<Email or Phone Number>"
    And user clicks on "Continue" button
    Then user should see "Select an option" screen 
    And user should see "Answer security questions" button (if security questions is set)
    And user should see "Login with magic link" button
    And user should see "Back to Log in" button
    When user click on "Answer security questions" button
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields
    And user fills in "<Question1Ans>" and "<Question2Ans>" for the security questions they set up
    When user click on "Continue" button
    Then user should see "Update Password" screen
    And user should see "Update Password" screen loaded less than 3 seconds

    Example:
    | Email or Phone Number | Question1Ans | Question1Ans |
