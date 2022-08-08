
Feature: Provider Portal - Login - View and login
  

  @BDDTEST-EPP-484
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-190-Verify whether ECP Provider able to Login into provider portal
    Given ECP Provider  launch the "XXX" url
    When ECP Provider provides  "<username>" and "<password>" 
    And ECP Provider clicks on "Login" button
    Then ECP Provider should see the Home page
    
    Examples:
    |username|password|
    | XXX|YYY|

  @BDDTEST-EPP-485
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Referring Provider Login Page consisting of following attributes: username, password, Not a member? Create an account, Login,  Forgot username, Forgot password
    Given Referring Provider  launch the "XXX" url
    When Referring Provider checks for "username","password" text boxes,"Not a member? Create an account" link & "login" button in the Login page
    Then Referring Provider verifies "forgot username" & "forgot password" link present in the Login page

  @BDDTEST-EPP-486
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-190-Verify whether ECP Provider is able to input on username field
    Given ECP Provider  launch the "XXX" url
    And ECP Provider provides input on "<username>" textbox
    Examples:
    |username|
    | XXX|

  @BDDTEST-EPP-487
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-190-Verify whether ECP Provider is able to input on password field
    Given ECP Provider  launch the "XXX" url
    And ECP Provider provides input on "<password>" textbox  
    Examples:
    |password|
    | yyy|

  @BDDTEST-EPP-488
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether ECP Provider is able to click on login button
    Given ECP Provider  launch the "XXX" url
    And ECP Provider clicks on "login" button

  @BDDTEST-EPP-491
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether ECP Provider is able to click on forgot username link
    Given ECP Provider  launch the "XXX" url
    When ECP Provider verifies "forgot username" link in login page
    Then ECP Provider clicks on  the "forgot username" link in login page

  @BDDTEST-EPP-492
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether ECP provider is able to click on forgot password link
    Given ECP provider  launch the "XXX" url
    When ECP provider should  see "forgot password" link in login page
    Then ECP provider clicks on the "forgot password" link in login page

  @BDDTEST-EPP-493
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-verify whether ECP provider navigates to forgot username page upon clicking the link
    Given ECP provider  launch the "XXX" url
    When ECP provider verifies "forgot username" link in login page
    And ECP provider clicks on the "Forgot usename" link
    Then ECP provider lands on forgot username page

  @BDDTEST-EPP-494
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-verify whether ECP provider navigates to forgot password page upon clicking the link
    Given ECP provider  launch the "XXX" url
    When ECP provider should see "forgot password" link in login page
    Then ECP provider clicks on "Forgot password" link
    And ECP provider lands on forgot password page

  @BDDTEST-EPP-495
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-190-Verify whether Referring Provider is able to Login into the provider portal
    Given Referring Provider launch the "XXX" url
    When Referring Provider provides  "<username>" and "<password>" 
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the Home/Dashboard page
    
    Examples:
    |username|password|
    | xxxx|yyyyy|

  @BDDTEST-EPP-496
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-190-Verify whether Referring provider is able to input on the username text box
    Given Referring provider  launch the "XXX" url
    And Referring provider provides input on "<username>" textbox
    Examples:
    |username|
    | XXXX|

  @BDDTEST-EPP-497
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-190-Verify whether Referring provider is able to input on password text box
    Given Referring provider  launch the "XXX" url
    And Referring provider provides input on "<password>" textbox  
    Examples:
    |password|
    | yyyy|

  @BDDTEST-EPP-498
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Referring provider is able to click on login button
    Given Referring provider  launch the "XXX" url
    And Referring provider clicks on "login" button

  @BDDTEST-EPP-501
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Referring Provider is able to click on forgot username link
    Given Referring Provider  launch the "XXX" url
    When Referring Provider verifies "forgot username" link in login page
    Then Referring Provider clicks on  the "forgot username" link in login page

  @BDDTEST-EPP-502
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Referring provider is able to click on forgot password link
    Given Referring provider  launch the "XXX" url
    When Referring provider  should see "forgot password" link in login page
    Then Referring provider clicks on the "forgot password" link in login page

  @BDDTEST-EPP-503
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-verify whether Referring provider navigates to forgot username page upon clicking the link
    Given Referring provider  launch the "XXX" url
    When Referring provider verifies "forgot username" link in login page
    And Referring provider  clicks on the "Forgot usename" option
    Then Referring provider lands on forgot username page

  @BDDTEST-EPP-504
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-verify whether Referring provider navigates to forgot password page upon clicking the link
    Given Referring provider launch the "XXX" url
    When Referring provider should see "forgot password" link in login page
    Then Referring provider clicks on  "Forgot password" link
    And Referring provider lands on forgot password page

  @BDDTEST-EPP-934
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190- Verify whether ECP Provider is able to click on Not a member? Create an account link
    Given ECP Provider launch the "XXX" url
    When ECP Provider verifies "Not a member? Create an account" link in login page
    Then ECP Provider clicks on the "Not a member? Create an account" link in login page

  @BDDTEST-EPP-935
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190- Verify whether Reffering Provider is able to click on Not a member? Create an account link
    Given Reffering Provider launch the "XXX" url
    When Reffering Provider verifies "Not a member? Create an account" link in login page
    Then Reffering Provider clicks on the  "Not a member? Create an account" link in login page

  @BDDTEST-EPP-936
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190- verify whether ECP provider navigates to “Registration” screen upon clicking the link
    Given ECP provider  launch the "XXX" url
    When ECP provider should see "Not a member? Create an account" link in login page
    Then ECP provider clicks on "Not a member? Create an account" link
    And ECP provider lands on Registration screen

  @BDDTEST-EPP-937
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190- verify whether Referring provider navigates to “Registration” screen upon clicking the link
    Given Referring provider  launch the "XXX" url
    When Referring provider should see "Not a member? Create an account" link in login page
    Then Referring provider clicks, "Not a member? Create an account" link
    And Referring provider lands on “Registration” screen

  @BDDTEST-EPP-1100
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190- Verify whether Admin is able to click on Not a member? Create an account link
    Given admin launch the "XXX" url
    When admin verifies "Not a member? Create an account" link in login page
    Then admin clicks on the  "Not a member? Create an account" link in login page

  @BDDTEST-EPP-1101
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190- verify whether Admin navigates to “Registration” screen upon clicking the link
    Given admin  launch the "XXX" url
    When admin should see "Not a member? Create an account" link in login page
    Then admin clicks on "Not a member? Create an account" link
    And admin lands on “Registration” screen

  @BDDTEST-EPP-1102
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-190-Verify whether Admin able to Login into provider portal
    Given admin  launch the "XXX" url
    When admin provides  "<username>" and "<password>" 
    And admin clicks on "Login" button
    Then admin should see the Home page
    
    
    Examples:
    |username|password|
    | XXX|YYY|

  @BDDTEST-EPP-1103
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-190-Verify whether Admin is able to input on username field
    Given admin  launch the "XXX" url
    And admin provides input on "<username>" textbox
    Examples:
    |username|
    | XXX|

  @BDDTEST-EPP-1104
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-190-Verify whether Admin is able to input on password field
    Given admin  launch the "XXX" url
    And admin provides input on "<password>" textbox  
    Examples:
    |password|
    | YYY|

  @BDDTEST-EPP-1105
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-190-Verify whether Admin is able to click on login button
    Given admin  launch the "XXX" url
    And admin clicks on "login" button
    
    
    Examples:
    |username|password|
    | XXX|YYY|

  @BDDTEST-EPP-1106
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Admin  is able to click on forgot username link
    Given Admin  launch the "XXX" url
    When Admin verifies forgot username link in login page
    Then Admin clicks on  "the forgot username" link in login page

  @BDDTEST-EPP-1107
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Admin is able to click on forgot password link
    Given admin  launch the "XXX" url
    When admin should see "forgot password" link in login page
    Then admin clicks on the "forgot password" link in login page

  @BDDTEST-EPP-1108
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-verify whether Admin navigates to forgot username page upon clicking the link
    Given Admin  launch the "XXX" url
    When Admin verifies "forgot username" link in login page
    And Admin clicks on the "forgot username" option
    Then Admin lands on "forgot username" page

  @BDDTEST-EPP-1110
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-verify whether Admin navigates to forgot password page upon clicking the link
    Given admin  launch the "XXX" url
    When admin should see "forgot password" link in login page
    Then admin clicks on "Forgot password" link
    And admin lands on "Forgot password" page

  @BDDTEST-EPP-1429
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether ECP Provider Login Page consisting of following attributes: username, password, Not a member? Create an account, Login,  Forgot username, Forgot password
    Given ECP Provider  launch the "XXX" url
    When ECP Provider checks for username,"password" text boxes,"Not a member? Create an account" link & "login" button in the Login page
    Then ECP Provider verifies "forgot username" & "forgot password" link present in the Login page

  @BDDTEST-EPP-1430
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Admin Login Page consisting of following attributes: username, password, Not a member? Create an account, Login,  Forgot username, Forgot password
    Given Admin  launch the "XXX" url
    When Admin checks for "username","password" text boxes,"Not a member? Create an account" link & "login" button in the Login page
    Then Admin verifies "forgot username" & "forgot password" link present in the Login page

  @BDDTEST-EPP-1439
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Referring provider is able to view Empty Text Box once the Page is refreshed
    Given Referring Provider launch the "XXX" url
    When Referring Provider provides  "<username>" and "<password>" 
    When Referring Provider clicks the "Refresh" button
    Then Referring Provider must validate that "<username>" field and "<password>" field must be emptied

  @BDDTEST-EPP-1448
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether ECP provider is able to view Empty Text Box once the Page is refreshed
    Given Referring Provider launch the "XXX" url
    When Referring Provider provides  "<username>" and "<password>" 
    When Referring Provider clicks the "Refresh" button
    Then Referring Provider must validate that "username" field and "password" field must be emptied

  @BDDTEST-EPP-1451
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Admin is able to view Empty Text Box once the Page is refreshed
    Given Admin launch the "XXX" url
    When Admin provides  "<username>" and "<password>" 
    When Admin clicks the "Refresh" button
    Then Admin must validate that "username" field and "password" field must be emptied

  @BDDTEST-EPP-1463
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Admin is able to view Dev Tools When F12 is clicked
    Given Admin launch the "XXX" url
    When Admin provides  "<username>" and "<password>" 
    When Admin clicks the "F12" button 
    Then Admin must validate whether the Dev Tools are Displayed
    Then Admin must validate that there should be no error in displaying dev tools

  @BDDTEST-EPP-1466
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether ECP Provider is able to view Dev Tools When F12 is clicked
    Given ECP Provider launch the "XXX" url
    When ECP Provider provides  "<username>" and "<password>" 
    When ECP Provider clicks the "F12" button 
    Then ECP Provider must validate whether the Dev Tools are Displayed

  @BDDTEST-EPP-1467
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Referring Provider is able to view Dev Tools When F12 is clicked
    Given Referring Provider launch the "XXX" url
    When Referring Provider provides  "<username>" and "<password>" 
    When Referring Provider clicks the "F12" button 
    Then Referring Provider must validate whether the Dev Tools are Displayed

  @BDDTEST-EPP-1468
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Referring Provider Login page loads within 3 seconds
    Given Referring Provider launch the "XXX" url
    When Referring Provider provides  "<username>" and "<password>" 
    When Referring Provider clicks the "login" button 
    Then Referring Provider Validates whether page loads within "3 seconds"
    And Referring Provider navigates to Home Page

  @BDDTEST-EPP-1470
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether ECP Provider Login page loads within 3 seconds
    Given ECP Provider launch the "XXX" url
    When ECP Provider provides  "<username>" and "<password>" 
    When ECP Provider clicks the "login" button 
    Then ECP Provider Validates whether page loads within "3 seconds"
    And ECP Provider navigates to Home Page

  @BDDTEST-EPP-1471
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-190-Verify whether Admin Login page loads within 3 seconds
    Given Admin launch the "XXX" url
    When Admin provides  "<username>" and "<password>" 
    When Admin clicks the "login" button 
    Then Admin Validates whether page loads within "3 seconds"
    And Admin navigates to Home Page
