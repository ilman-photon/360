Feature: As a user, I should see error messages when ‘new password’ and ‘confirm new password’ fields do not match while setting new password. 

  @BDDTEST-EPP-514
  @Authentication
  @Automation
  @Patient_Portal
  @Regression
  @Sprint2
  @included
  Scenario: EPIC_EPP-7_STORY_EPP-239 - Verify user should see the "Passwords do not match" error message
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
    When user click on a magic link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill invalid "<New Password>" field
    And User should fill invalid "<Confirm New Password>" field
    And user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see error message "This field is required"

    Example:
    | Email or Phone Number|New password|Confirm new password|
    | xxxxxxxxx |ABCty!2|ABCty!2|
    |256173!2|256173!2|
    |$%^&*()(|$%^&*()(|
    |username|username|
    |previous password|previous password|
    |aaabbbccc|aaabbbccc|

  @BDDTEST-EPP-515
  @Authentication
  @Patient_Portal
  @Sprint2
  @included
  Scenario: EPIC_EPP-7_STORY_EPP-239 - Verify user should see "page loading" within 3 seconds
    Given use launch the "XXX" url	
    And user navigates to the Patient Portal application
    When user lands onto "Patient Login" screen
    Then user should see "Forgot Password" link
    When user clicks on "Forgot Password" link
    Then user should see "Forgot Password" screen
    And user should see "<Email or Phone Number>" field
    And user should enter valid '<Email or Phone Number>' field
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
    When User should fill valid "<New Password>" field
    And User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see "Password Set" screen
    And User should see "page loading" within 3 seconds

    Example:
    | Email or Phone Number|New password|Confirm new password|
    | xxxxxxxxx |EyeCare8!|EyeCare8!|

  @BDDTEST-EPP-516
  @Authentication
  @Patient_Portal
  @Sprint2
  @excluded
  Scenario: EPIC_EPP-7_STORY_EPP-239 - Verify user should see the empty "<New password>" and "<Confirm new password>" fields when user refresh the page
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-239 - Verify user should see the empty "<New password>" and "<Confirm new password>" fields when user refresh the page"

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
    When user click on a magic link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill valid "<New Password>" field
    And User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User refresh the page
    And User should see the "<New Password>" and "<Confirm New Password>" fields is empty

    Example:
    | Email or Phone Number|New password|Confirm new password|
    | xxxxxxxxx |EyeCare8!|EyeCare8!|

  @BDDTEST-EPP-1739
  @Authentication
  @Patient_Portal
  @Sprint2
  @excluded
  Scenario: EPIC_EPP-7_STORY_EPP-239 - Verify user  is not able to submit during set forgot password "<New password>" and "<Confirm new password>" do not match when service is unavailable
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-239 - Verify user  is not able to submit during set forgot password "<New password>" and "<Confirm new password>" do not match when service is unavailable"

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
    When user click on a magic link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill valid "<New Password>" field
    And User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then user should see appropriate error message 

    Example:
    | Email or Phone Number|New password|Confirm new password|
    | xxxxxxxxx |EyeCare8!|EyeCare8!|

  @BDDTEST-EPP-1740
  @Authentication
  @Patient_Portal
  @Sprint2
  @excluded
  Scenario: EPIC_EPP-7_STORY_EPP-239 - Verify user  is not able to submit during set forgot password "<New password>" and "<Confirm new password>" do not match when internet connection is unavailable
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-239 - Verify user  is not able to submit during set forgot password "<New password>" and "<Confirm new password>" do not match when internet connection is unavailable"

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
    When user click on a magic link
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill valid "<New Password>" field
    And User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then user should see appropriate error message 

    Example:
    | Email or Phone Number|New password|Confirm new password|
    | xxxxxxxxx |EyeCare8!|EyeCare8!|

  @BDDTEST-EPP-1741
  @Authentication
  @Patient_Portal
  @Sprint2
  @excluded
  Scenario: EPIC_EPP-7_STORY_EPP-239 - Verify user should not see any scripts error when after user press F12 on the console
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-239 - Verify user should not see any Java scripts error when after user press F12 on the console"

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
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields 
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user clicks on "Continue" button
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill the valid "<New Password>" field
    And User should fill valid "<Confirm New Password>" field
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see "Update" button
    When User should click on "Update" button
    Then User should see error message "Passwords do not match" 
    When user press F12 on the console
    Then user should not see any scripts error


    Example:
    | Email or Phone Number|Question1Ans|Question2Ans|New password|Confirm new password|
    | xxxxxxxxx|XXXXXX|YYYYYY|*****|***|

  @BDDTEST-EPP-1742
  @Authentication
  @Patient_Portal
  @Sprint2
  @excluded
  Scenario: EPIC_EPP-7_STORY_EPP-239 - Verify User should not copy and paste on <New Password>" and "<Confirm New Password>" fields
    Scenario Outline: "EPIC_EPP-7_STORY_EPP-239 - Verify user should not see any Java scripts error when after user press F12 on the console"

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
    Then user should see "Password Recovery Security Questions" page
    And user should view the text “Answer the following questions to reset your password”
    And user should view the questions fields 
    And user fills in "<Question1Ans>" and "<Question2Ans>"for the security questions they set up
    When user clicks on "Continue" button
    Then user should see "Update Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    And User should fill the valid "<New Password>" and "<Confirm New Password>" fields
    And User should not copy and paste on <New Password>" and "<Confirm New Password>" fields

    Example:
    | Email or Phone Number|Question1Ans|Question2Ans|New password|Confirm new password|
    | xxxxxxxxx|XXXXXX|YYYYYY|*****|***|
