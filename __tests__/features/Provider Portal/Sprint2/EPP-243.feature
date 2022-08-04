Feature: As an internal provider / internal staff, I should be able to view message that instructs me to contact E360+ system administrator for reset password  

  @BDDTEST-EPP-575
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-243-Verify whether  internal provider / internal staff has provided valid username in the field
    Given user launch the 'XXX' URL 
    And user is in "Login" screen
    When user clicks on the "forgot password" link in login page 
    And navigates to Reset password page
    Then user provides"<Email>" field
    And user clicks on the "Submit" button
    Then system validates the username provided by user
    
    Examples:
    |Email|
    | XXX|

  @BDDTEST-EPP-576
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-243-Verify whether  internal provider / internal staff is provided with contact admin message after successful username validation
    Given user launch the 'XXX' URL 
    And user is in "Login" screen
    When user clicks on the "forgot password" link in login page 
    And navigates to Reset password page
    Then user provides"<Email>" field
    And user clicks on the "Submit" button
    Then system validates the username provided by user
    And user should see message as "A link has been sent to your registered email to reset your password. Please check.
    
    Examples:
    |Email|
    | XXX|

  @BDDTEST-EPP-577
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-243-Verify whether internal provider / internal staff is redirecting to login page from forgot password page 
    Given user launch the 'XXX' URL 
    And user is in "Login" screen
    When user clicks on the "forgot password" link in login page 
    And navigates to Reset password page
    Then user provides"<Email>" field
    And user clicks on the "Submit" button
    Then system validates the username provided by user
    And user should see message as "A link has been sent to your registered email to reset your password. Please check.
    And user 
    
    Examples:
    |Email|
    | XXX|

  @BDDTEST-EPP-1111
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-243- Verify whether link to reset password has been send to registered mail id post validation
    Given user  launch the 'XXX' url
    When user clicks on the "forgot password" link in login page 
    And user navigates to forgot password page
    Then user provides  "<username>" in the field
    When user clicks on the "submit" button
    And system validates the username provided by user
    Then user is provided with message as "‘A link has been sent to your registered email to reset your password. Please check.’"
    And User receives link to their registered email id to reset password
    Examples:
    |username|
    | XXX|

  @BDDTEST-EPP-1725
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-243-Verify application behavior when internet is disconnected upon clicking on link forgot password in login page
    Given user is clicks on the forgot password link  
    
    Then user navigates to forgot password page 
    
    And user data disconnected 
    
    And User sees "This page cannot be reached" error

  @BDDTEST-EPP-1726
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-243-Verify the application response when service is unavailable while clicking on forgot password link in login page
    Given user is clicks on the forgot password link  
    
    Then user navigates to forgot password page 
    
    And user sees service unavailable page

  @BDDTEST-EPP-1727
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-243-Verify whether dev tool is opening upon clicking on F12 button from forgot password page
    Given user is navigated to password reset page when clicks forgot password link 
    
    When user verifies the "Email" ,  "back to login" , "submit" attributes in reset password page 
    
    When user clicks the "F12" button  
    
    Then user should see whether the Dev Tools are Displayed
