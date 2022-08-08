Feature: Provider Portal: Login - Account lock
  As a referring provider, I should get locked out by the system, if I continuously attempt to login with incorrect password and reach maximum no. of allowed attempts defined by admin

  
  @BDDTEST-EPP-560
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223-verify whether user is notified about the account lock through registered email
    Given user  launch the 'XXX' url
    When user provides  "<username>" and "<password>" 
    And user clicks on   "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When user tries five consecutive times with valid username and invalid password
    Then user prompted with the error message as ‘Your account is locked due to invalid login attempts. Please try again later’
    And user remains on login page itself
    Then user notifies via registered mail about account lock issue
    And the mail body looks alike in below format "Email Subject: Your Provider Portal account is locked!Email Body :Hi {First Name Last Name},Your account has been locked for 15 minutes due to multiple invalid login attempts. You can try login again after 15 minutes.If you did not attempt to log in, please contact Admin. Thanks,Admin"
    
    Examples:
    |Username|Password|
    | XXX|invalidYYY|

  @BDDTEST-EPP-561
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223-verify whether Referring provider is not allowed to login into the portal for next 15 minutes
    Given user  launch the 'XXX' url
    When user provides  "<username>" and "<password>" 
    And user clicks on   "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When user tries five consecutive times with valid username and invalid password
    Then user prompted with the error message as ‘Your account is locked due to invalid login attempts. Please try again later’
    And user is not allowed to login into portal for next 15 minutes
    
    Examples:
    |Username|Password|
    | XXX|invalidYYY|

  @BDDTEST-EPP-562
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223-verify whether Referring provider is prompted with error message about account lock
    Given user  launch the 'XXX' url
    When user provides  "<username>" and "<password>" 
    And user clicks on   login button
    Then user prompted with the error message as Incorrect password . Please try again.
    When user provides  "<username>" and "<password>" 
    And user clicks on  login button
    Then user prompted with the error message as Incorrect password . Please try again.
    When User provides  "<username>" and "<password>" 
    And user clicks on  login button
    Then user prompted with the error message as "Your account is locked due to invalid login attempts. Please contact administrator to unlock your account"
    And user remains on login page itself
    And user notified via registered e-mail about account lock
    
    Examples:
    |Username|Password|
    | XXX|invalidYYY|

  @BDDTEST-EPP-563
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223- verify whether Referring provider is notified about the account lock through registered mobile number
    Given user  launch the 'XXX' url
    When user provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When User provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When user provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user prompted with the error message as "Your account is locked due to invalid login attempts. Please contact administrator to unlock your account"
    And user remains on login page itself
    And user notified via registered mobile number about account lock
    
    Examples:
    |Username|Password|
    | XXX|invalidYYY|

  @BDDTEST-EPP-564
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223-verify whether Referring provider is able to login into the application with unsuccessful login attempts before, when the attempt didn't reach maximum count defined by the admin
    Given user  launch the 'XXX' url
    When user provides  "<username>" and "<password>"
    And user clicks on  "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When User provides  "<username>"and "<password>"
    And user clicks on  "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When user provides  "<username>" and "<password>"
    And user clicks on "login" button
    Then user verify the home page with unsuccessful login attempts before, when the attempt didn't reach maximum count defined by the admin 
    
    Examples:
    |Username|Password|username|password|username|password|
    | XXX|invalidYYY|XXX|invalidYYY|XXX|YYY|

  @BDDTEST-EPP-565
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223-verify whether ECP Provider is prompted with error message when account is locked
    Given user  launch the 'XXX' url
    When user provides  "<username>" and "<password>" 
    And user clicks on "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When User provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When user provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user is prompted with the error message as "Your account is locked due to invalid login attempts. Please contact ECP helpdesk to unlock your account"
    
    Examples:
    |username|Password|username|Password|username|Password|
    | XXX|invalidYYY| XXX|invalidYYY| XXX|invalidYYY|

  @BDDTEST-EPP-566
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-223-verify whether ECP Provider is not allowed to login into the portal till the admin unlocks his/her account
    Given user  launch the 'XXX' url
    When User provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When User provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When user provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    And user prompted with the error message as Incorrect password . Please try again.
    Then user prompted with the error message as "Your account is locked due to invalid login attempts. Please contact administrator to unlock your account"
    And user remains on login page itself

  @BDDTEST-EPP-567
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223-verify whether ECP Provider is notified about the account lock through registered email
    Given user  launch the 'XXX' url
    When user provides  "<username>" and "<password>" 
    And user clicks on   "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When user provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user prompted with the error message as Incorrect password . Please try again.
    When User provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user prompted with the error message as "Your account is locked due to invalid login attempts. Please contact administrator to unlock your account"
    And user remains on login page itself
    Then user notified via registered e-mail about account lock
    And The email body looks alike in below format"Hi {First Name Last Name},Your account has been locked due to multiple invalid login attempts. If you did not attempt to log in, please contact Admin.Thanks,"
    
    Examples:
    |Username|Password|
    | XXX|invalidYYY|

  @BDDTEST-EPP-568
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223-verify whether ECP Provider is notified about the account lock through registered mobile number
    Given user  launch the 'XXX' url
    When user provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user prompted with the error message as "Incorrect password . Please try again".
    When User provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user prompted with the error message as "Incorrect password . Please try again".
    When user provides  "<username>" and "<password>" 
    And user clicks on  "login" button
    Then user prompted with the error message as "Your account is locked due to invalid login attempts. Please contact administrator to unlock your account"
    And user remains on login page itself
    And user notified via registered mobile number about account lock
    
    Examples:
    |Username|Password|
    | XXX|invalidYYY|

  @BDDTEST-EPP-569
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223-verify whether ECP Provider is able to login into the application with unsuccessful login attempts before, when the attempt didn't reach maximum count defined by the admin
    Given user  launch the "XXX" url
    When user provides  "<username>" and "<password>"" 
    And user clicks on  "login" button
    Then user prompted with the error message as "Incorrect password . Please try again".
    When User provides  "<username>"and "<password>"
    And user clicks on  "login" button
    Then user prompted with the error message as "Incorrect password . Please try again".
    When user provides  "<username>" and "<password>"
    And user clicks on "login" button
    Then user verify the home page with unsuccessful login attempts before, when the attempt didn't reach maximum count defined by the admin 
    
    Examples:
    |Username|Password|Username|Password|Username|Password|
    | XXX|invalidYYY|XXX|invalidYYY|XXX|YYY|

  @BDDTEST-EPP-943
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223-  verify whether Referring provider is able to login into portal post 15 minutes of account lock period
    Given user  launch the 'XXX' url
    When user provides  "<username>" and "<password>" 
    And user clicks on   "login" button
    Then user prompted with the error message as "Incorrect password . Please try again".
    When user tries five consecutive times with valid username and invalid password
    Then user prompted with the error message as "‘Your account is locked due to invalid login attempts. Please try again later’"
    And user remains on login page itself 
    When user tries to login into portal post "15" minutes
    Then user lands on the main dashboard/Home page
    
    Examples:
    |Username|Password|
    | XXX|invalidYYY|

  @BDDTEST-EPP-944
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223- verify whether ECP provider is able to login into portal post admin unlocks the account
    Given user  launch the 'XXX' url
    When user provides  "<username>" and "<password>" 
    And user clicks on   "login" button
    Then user prompted with the error message as "Incorrect password . Please try again".
    When user tries five consecutive times with valid username and invalid password
    Then user prompted with the error message as "‘Your account is locked due to invalid login attempts. Please try again later’"
    And user remains on login page itself 
    When Admin unlocks the account
    Then user provides  "<username>" and "<password>" 
    And user clicks on   "login" button
    Then user lands on the main dashboard/Home page
    
    Examples:
    |Username|Password|Username|Password|
    | XXX|invalidYYY|XXX|YYY|

  @BDDTEST-EPP-1609
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223- Verify if Referring Provider account get locked after 5 consecutive invalid password attempts
    Given Referring Provider launch the 'XXX' url	
    And Referring Provider  navigates to the Patient Portal application
    When Referring Provider lands onto “Patient Login” screen
    And Referring Provider provides "<Email or Phone Number>" and "<password>" for "1st time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When Referring Provider provides "<Email or Phone Number>" and Invalid "<Password>" for "2nd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides "<Email or Phone Number>" and Invalid "<Password>" for "3rd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When  Referring Provider provides "<Email or Phone Number>" and Invalid "<Password>" for "4th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When  Referring Provider provides "<Email or Phone Number>" and Invalid "<Password>" for "5th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider account should get locked					
    And user should see the message "Your account is locked due to invalid login attempts. Please try again later” 
    And user should receive the mail regarding account lock with below email content.
    
    |Email subject : Your Provider Portal Account is locked
    |Email body : 
    |Hi {username},
    |Email Subject: Your Provider Portal account is locked!
    |Email Body :
    |Hi {First Name Last Name},
    |Your account has been locked for 15 minutes due to multiple invalid login attempts. You can try login again after 15 minutes. 
    |If you did not attempt to log in, please contact Admin. 
    |Thanks,
    |Admin
    								
    Examples:
    |Email or Phone Number|Password|
    |xxxxxxxxxx|********|

  @BDDTEST-EPP-1616
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223- Verify if Referring Provider able to login when enter invalid password for 4 times & valid password attempt for 5th time
    Given Referring Provider launch the 'XXX' url	
    And Referring Provider navigates to the Referring Provider Portal application
    When Referring Provider lands onto “Referring Provider Login” screen
    And Referring Provider provides "<Email or Phone Number>" and Invalid "<Password>" for "1st time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides "<Email or Phone Number>" and Invalid "<Password>" for "2nd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides "<Email or Phone Number>" and Invalid "<Password>" for "3rd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides "<Email or Phone Number>" and Invalid "<Password>" for "4th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides "<Email or Phone Number>" and valid "<Password>" for "5th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider lands onto homepage screen	
    Examples:
    |username|Password|
    |XXXX|Invalid YYY|

  @BDDTEST-EPP-1628
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223- Verify if Referring Provider able to login when enter invalid password for 1st time & 2nd time, valid password attempt for 3rd time
    Given Referring Provider launch the 'XXX' url	
    And Referring Provider navigates to the Referring Provider Portal application
    When Referring Provider lands onto “Referring Provider Login” screen
    And  Referring Provider provides "<Email or Phone Number>" and Invalid "<Password>" for "1st time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides Invalid "<Email or Phone Number>" and "<Password>" for "2nd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides valid "<Email or Phone Number>" and valid "<Password>" for "3rd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider lands onto homepage screen 										
    Examples:
    |username|Password|
    |XXXX|Invalid YYYY|

  @BDDTEST-EPP-1635
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223- Verify if Referring Provider able to login when enter invalid password for 1st time & valid password attempt for 2nd time
    Given Referring Provider launch the 'XXX' url	
    And Referring Provider navigates to the Referring Provider Portal application
    When Referring Provider lands onto "Referring Provider Login" screen
    And Referring Provider provides "<Email or Phone Number>" and Invalid "<Password>" for "1st time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides valid "<Email or Phone Number>" and valid "<Password>" for "2nd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider lands onto homepage screen 	
    Examples:
    |username|Password|
    |XXXX|Invalid YYYY|

  @BDDTEST-EPP-1643
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223- Verify if Referring Provider able to login when enter invalid password for 1st time,2nd time, 3rd time & valid password attempt for 4th time
    Given Referring Provider launch the 'XXX' url	
    And Referring Provider navigates to the Referring Provider Portal application
    When Referring Provider lands onto "Referring Provider Login" screen
    And Referring Provider provides "<Email or Phone Number>" and Invalid "<Password>" for "1st time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides Invalid "<Email or Phone Number>" and "<Password>" for "2nd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides Invalid "<Email or Phone Number>" and "<Password>" for "3rd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides valid "<Email or Phone Number>" and valid "<Password>" for "4th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider lands onto homepage screen 	
    Examples:
    |username|Password|
    |XXXX|Invalid YYYY|

  @BDDTEST-EPP-1646
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223- Verify if Referring Provider able to login when enter invalid email and invalid password for 1st time,2nd time, 3rd time & valid phone number and password attempt for 4th time
    Given Referring Provider launch the 'XXX' url	
    And Referring Provider navigates to the Referring Provider Portal application
    When Referring Provider lands onto "Referring Provider Login" screen
    And Referring Provider provides Invalid "<Email or Phone Number>" and Invalid "<Password>" for "1st time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides Invalid "<Email or Phone Number>" and Invalid "<Password>" for "2nd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides Invalid "<Email or Phone Number>" and Invalid "<Password>" for "3rd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides valid "<Email or Phone Number>" and valid "<Password>" for "4th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider lands onto homepage screen 	
    Examples:
    |username|Password|
    |Invalid XXXX|Invalid YYYY|

  @BDDTEST-EPP-1656
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223- Verify if Referring Provider account get locked after 5 consecutive invalid username attempts
    Given Referring Provider launch the 'XXX' url	
    And Referring Provider  navigates to the Referring Provider Portal application
    When Referring Provider lands onto "Referring Provider Login" screen
    And Referring Provider provides Invalid "<Email or Phone Number>" and valid "<password>" for "1st time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When Referring Provider provides Invalid "<Email or Phone Number>" and valid "<Password>" for "2nd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides Invalid "<Email or Phone Number>" and valid "<Password>" for "3rd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When  Referring Provider provides Invalid "<Email or Phone Number>" and valid "<Password>" for "4th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When  Referring Provider provides Invalid "<Email or Phone Number>" and valid "<Password>" for "5th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider account should get locked					
    And user should see the message "Your account is locked due to invalid login attempts. Please try again later” 
    And user should receive the mail regarding account lock with below email content.
    
    |Email subject : Your Provider Portal Account is locked
    |Email body : 
    |Hi {username},
    |Email Subject: Your Provider Portal account is locked!
    |Email Body :
    |Hi {First Name Last Name},
    |Your account has been locked for 15 minutes due to multiple invalid login attempts. You can try login again after 15 minutes. 
    |If you did not attempt to log in, please contact Admin. 
    |Thanks,
    |Admin
    								
    Examples:
    |Email or Phone Number|Password|
    |Invalid xxxxxxxxxx|valid ********|

  @BDDTEST-EPP-1657
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223- Verify if Referring Provider account get locked after 2 times invalid username & 3 times invalid password attempts
    Given Referring Provider launch the 'XXX' url	
    And Referring Provider  navigates to the Referring Provider Portal application
    When Referring Provider lands onto "Referring Provider Login" screen
    And Referring Provider provides Invalid "Email or Phone Number" and valid "password" for "1st time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When Referring Provider provides Invalid "Email or Phone Number" and valid "Password" for "2nd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides Valid "Email or Phone Number" and Invalid "Password" for "3rd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When  Referring Provider provides Valid "Email or Phone Number" and Invalid "Password" for "4th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When  Referring Provider provides Valid "Email or Phone Number" and Invalid "Password" for "5th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider account should get locked					
    And user should see the message "Your account is locked due to invalid login attempts. Please try again later” 
    And user should receive the mail regarding account lock with below email content.
    
    |Email subject : Your Provider Portal Account is locked
    |Email body : 
    |Hi {username},
    |Email Subject: Your Provider Portal account is locked!
    |Email Body :
    |Hi {First Name Last Name},
    |Your account has been locked for 15 minutes due to multiple invalid login attempts. You can try login again after 15 minutes. 
    |If you did not attempt to log in, please contact Admin. 
    |Thanks,
    |Admin
    								
    Examples:
    |Email or Phone Number|Password|
    |Invalid xxxxxxxxxx|valid ********|"Login"

  @BDDTEST-EPP-1658
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-223- Verify if Referring Provider account get locked after 3 times invalid username & 2 times invalid password attempts
    Given Referring Provider launch the "XXX" url	
    And Referring Provider  navigates to the Referring Provider Portal application
    When Referring Provider lands onto "Referring Provider Login" screen
    And Referring Provider provides Invalid "<Email or Phone Number>" and valid "<password>" for "1st time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When Referring Provider provides Invalid "<Email or Phone Number>" and valid "<Password>" for "2nd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should see the message "Invalid username or Password, Please try again"
    When Referring Provider provides Invalid "<Email or Phone Number>" and valid "<Password>" for "3rd time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When  Referring Provider provides Valid "<Email or Phone Number>" and Invalid "<Password>" for "4th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider should  see the message "Invalid username or Password, Please try again"
    When  Referring Provider provides Valid "<Email or Phone Number>" and Invalid "<Password>" for "5th time"
    And Referring Provider clicks on "Login" button
    Then Referring Provider account should get locked					
    And user should see the message "Your account is locked due to invalid login attempts. Please try again later” 
    And user should receive the mail regarding account lock with below email content.
    
    |Email subject : Your Provider Portal Account is locked
    |Email body : 
    |Hi {username},
    |Email Subject: Your Provider Portal account is locked!
    |Email Body :
    |Hi {First Name Last Name},
    |Your account has been locked for 15 minutes due to multiple invalid login attempts. You can try login again after 15 minutes. 
    |If you did not attempt to log in, please contact Admin. 
    |Thanks,
    |Admin
    								
    Examples:
    |Email or Phone Number|Password|
    |Invalid xxxxxxxxxx|valid ********|
