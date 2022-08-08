Feature: As a referring provider, I should be able to  view and access password reset screen, upon clicking on the link received through email 

  @BDDTEST-EPP-849
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246-verify whether user has received the link through registered mail
    Given user launch the browser
    When user opens the registered mail
    And user verifies the  received  link through registered mail

  @BDDTEST-EPP-850
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246-verify whether the user has received the link through the registered phone number
    Given user opens the registered  phone number
    Then user verifies the received  link through the registered phone number

  @BDDTEST-EPP-851
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246-verify whether the link received through email is enabled and clickable
    Given user launch the browser
    When user opens the registered mail
    And user verifies the received  link through registered mail
    Then user verifies the link is enabled and clickable

  @BDDTEST-EPP-852
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246-verify whether the link received through mobile number is enabled and clickable
    Given user opens the registered mobile phone 
    When user verifies the received  link through the registered phone number
    Then user verifies the link is enabled and clickable

  @BDDTEST-EPP-854
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246-verify whether the user is redirected to password reset page upon clicking the link received through mail
    Given user launch the browser
    When user opens the registered mail
    Then user verifies the received  link through registered mail
    And user clicks on the link
    Then user is redirected to password reset page

  @BDDTEST-EPP-855
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246-verify whether user can able to view <new password>,<confirm password>,cancel and submit attributes in reset password page
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword","confirmpassword","back to login","submit" attributes in reset password page

  @BDDTEST-EPP-856
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246-verify whether <new password>, <confirm new password> fields are mandatory
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "cancel" , "submit" attributes in reset password page
    And user verifies whether "new password", "confirm new password" fields are mandatory

  @BDDTEST-EPP-857
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246-verify whether eye icon is present near new password, confirm new password fields
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "back to login" , "submit" attributes in reset password page
    Then user verifies eye icon is presents near new password and confirm new password fields

  @BDDTEST-EPP-858
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-246-verify whether user is able to provide input in <new password> & <confirm password> text boxes
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "back to login" , "submit" attributes in reset password page
    Then User provides input on "<new password>" & "<Confirm Password>" textboxes

    Examples:
    |new password|confirm password|
    | XXX|XXX|

  @BDDTEST-EPP-859
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-246-verify whether new password & confirm new password fields are encrypted by default
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "back to login" , "submit" attributes in reset password page
    Then User provides input on "<new password>" & "<Confirm Password>" textboxes
    And user verifies password entered are encrypted

    Examples:
    |new password|confrim password|
    | XXX|XXX|

  @BDDTEST-EPP-860
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-246-verify whether password is visible to user upon clicking on eye icon
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "back to login" , "submit" attributes in reset password page
    Then user provides input on "<new password>" & "<Confirm Password>" textboxes
    And user verifies password entered are visible upon clicking the eye icon present nearby the field

    Examples:
    |new password|confrim password|
    | XXX|XXX|

  @BDDTEST-EPP-861
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-246-verify whether user is prompted with error message when new password and confirm new password fields doesn't match
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "back to login" , "submit" attributes in reset password page
    Then user provides input on "<new password>" & "<Confirm Password>" textboxes
    And user clicks on the "submit" button
    And user is prompted with error message as "Password doesnot match try again"

    Examples:
    |new password|confrim password|
    | XXX|XXXX|

  @BDDTEST-EPP-871
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-246-verify whether user is able to click on submit button after filling all the mandatory fields appropriately
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "back to login" , "submit" attributes in reset password page
    Then user provides input on "<new password>" & "<Confirm Password>" and  filling all the mandatory fields appropriately
    And user  clicks on the "submit" button

    Examples:
    |new password|confirm password|
    | XXX|XXX|

  @BDDTEST-EPP-872
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-246-verify whether user is displayed with success message when submit button is clicked
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "back to login" , "submit" attributes in reset password page
    Then user provides input on "<new password>" & "<Confirm Password>" textboxes 
    And user clicks on the "submit" button
    And user should see the success message as "“Your password was reset successfully” "

    Examples:
    |new password|confirm password|
    | XXX|XXX|

  @BDDTEST-EPP-873
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-246-verify whether user redirects to login page upon clicking on 'back to login' button
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "cancel" , "submit" attributes in reset password page
    Then user provides invalid input on "<new password>" & "<Confirm Password>" textboxes
    And user clicks on "submit" button
    And user clicks on "Back to login" button
    Then user redirects to login screen

    Examples:
    |new password|confirm password|
    | XXX|XXX|

  @BDDTEST-EPP-1418
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-246- Verify whether data's from password and confirm password fields are wiped out upon refreshing the page
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "back to login" , "submit" attributes in reset password page
    Then user provides input on "<new password>" & "<Confirm Password>" textboxes 
    And user refresh the page without submitting
    And user sees data wiped out from screen
    Examples:
    |new password|confirm password|
    | XXX|XXX|

  @BDDTEST-EPP-1420
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-246- Verify whether user receives success response within 3 seconds
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "back to login" , "submit" attributes in reset password page
    Then user provides input on "<new password>" & "<Confirm Password>" textboxes 
    And user clicks on the "submit" button
    And user should see Page loads in 3 seconds 
    And user sees the success message as "“Your password was reset successfully” 


    Examples:
    |new password|confirm password|
    | XXX|XXX|

  @BDDTEST-EPP-1426
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-246- Verify whether password and new password field doesn't allow copy & paste
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "back to login" , "submit" attributes in reset password page
    Then user provides input on "<new password>" & "<Confirm Password>" textboxes 
    And user copies inputs from "<new password>" & "<Confirm Password>" textboxes and paste it in notepad
    And user should see inputs are not being pasted

    Examples:
    |new password|confirm password|
    | XXX|XXX|

  @BDDTEST-EPP-1469
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246- verify whether forgot password page loads in 3 seconds when user clicks on the link received in mail
    Given user is clicks on the received link 
    Then user sees page loads in 3 seconds
    And user lands on forgot password page

  @BDDTEST-EPP-1472
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246- Verify whether link received through mail redirects to forgot password page
    Given user is clicks on the received link 
    Then user navigates to forgot password page
    And user lands on forgot password page

  @BDDTEST-EPP-1473
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246- Verify the application response when service is unavailable while clicking on forgot password  received through mail
    Given user is clicks on the received link 
    Then user navigates to forgot password page
    And user sees service unavailable page

  @BDDTEST-EPP-1476
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246- Verify application behavior when internet is disconnected upon clicking on link received through mail 
    Given user is clicks on the received link 
    Then user navigates to forgot password page
    And user data disconnected
    And User sees "This page cannot be reached" error

  @BDDTEST-EPP-1477
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-246- Verify whether dev tool is opening upon clicking on F12 button from forgot password page
    Given user is redirected to password reset page when clicks on the received link 
    When user verifies the "newpassword" , "confirmpassword" , "back to login" , "submit" attributes in reset password page
    When user clicks the "F12" button 
    Then user should see whether the Dev Tools are Displayed
