
Feature: As a user, my account should get locked after 5 consecutive invalid password attempts. 

  @BDDTEST-EPP-600
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 5 consecutive invalid password attempts

Given user user launch the "XXX" url	
And user user navigates to the Patient Portal application
When user user lands onto “Patient Login” screen
And user user provides "<Email or Phone Number>" and "<password>" for "1st time"
And user clicks on "<Login>" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password>" for "2nd time"
And user clicks on "<Login>" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password>" for "3rd time"
And user clicks on "<Login>" button
Then user should  see the message "Invalid username or Password, Please try again"
When  user provides "<Email or Phone Number>" and Invalid "<Password>" for "4th time"
And user clicks on "<Login>" button
Then user should  see the message "Invalid username or Password, Please try again"
When  user provides "<Email or Phone Number>" and Invalid "<Password>" for "5th time"
And user clicks on "<Login>" button
Then user account should get locked					
And user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account” 
And user should receive the mail regarding account lock with below email content.

|Email subject : Your Patient Portal Account is locked
|Email body : 
|Hi {username},
|Your account is locked after too many failed attempts. Please contact customer support to unlock your account. If you did not attempt to log in, contact us.-Customer support’s email/phone number
|Thanks,
|Admin								
Examples:
|Email or Phone Number|Password|
|xxxxxxxxxx|********|
  
  @BDDTEST-EPP-601
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 4 times & valid password attempt for 5th time

Scenario Outline: Verify if user able to login when enter invalid password for 4 times & valid password attempt for 5th time
Given user/admin user launch the 'XXX' url	
And user/ admin user navigates to the Patient Portal application
When user/ admin user lands onto “Patient Login” screen
And user provides "<Email or Phone Number>" and Invalid "<Password> for 1st time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 2nd time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 3rd time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 4th time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and valid "<Password> for 5th time
And user clicks on "Login" button		
Then user lands onto homepage screen	
Examples:
|username|Password|
|XXXX|Invalid YYY|
  
  @BDDTEST-EPP-602
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 1st time & 2nd time, valid password attempt for 3rd time

  Scenario Outline: Verify if user able to login when enter invalid password for 1st time & 2nd time, valid password attempt for 3rd time
Given user/admin user launch the 'XXX' url	
And user/ admin user navigates to the Patient Portal application
When user/ admin user lands onto “Patient Login” screen
And  user provides "<Email or Phone Number>" and Invalid "<Password> for 1st time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides Invalid "<Email or Phone Number>" and "<Password> for 2nd time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides valid "<Email or Phone Number>" and valid "<Password> for 3rd time
And user clicks on "Login" button		
Then user lands onto homepage screen 										
Examples:
|username|Password|
|XXXX|Invalid YYYY|


  @BDDTEST-EPP-1113
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 1st time & valid password attempt for 2nd time

Scenario Outline: Verify if user able to login when enter invalid password for 1st time &  valid password attempt for 2nd time
Given user/admin user launch the 'XXX' url	
And user/ admin user navigates to the Patient Portal application
When user/ admin user lands onto “Patient Login” screen
And user provides "<Email or Phone Number>" and Invalid "<Password> for 1st time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides valid "<Email or Phone Number>" and valid "<Password> for 2nd time
And user clicks on "Login" button		
Then user lands onto homepage screen 	
Examples:
|username|Password|
|XXXX|Invalid YYYY|
  
  @BDDTEST-EPP-1114
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid password for 1st time,2nd time, 3rd time & valid password attempt for 4th time

Scenario Outline: Verify if user able to login when enter invalid password for 1st time,2nd time, 3rd time & valid password attempt for 4th time 
Given user/admin user launch the 'XXX' url	
And user/ admin user navigates to the Patient Portal application
When user/ admin user lands onto “Patient Login” screen
And user provides "<Email or Phone Number>" and Invalid "<Password> for 1st time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides Invalid "<Email or Phone Number>" and "<Password> for 2nd time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides Invalid "<Email or Phone Number>" and "<Password> for 3rd time
  
  @BDDTEST-EPP-1421
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid email and invalid password for 1st time,2nd time, 3rd time & valid phone number and password attempt for 4th time

Scenario Outline: Verify if user able to login when enter invalid email and invalid  password for 1st time,2nd time, 3rd time & valid phone number and password  attempt for 4th time 
Given user launch the 'XXX' url
And user is in Login screen
When user provides Invalid "<username> as email" and Invalid "<Password> for 1st time
And user clicks on "Login" button
Then user should see the message "Invalid username and Password, Please try again"
When user provides Invalid "<username>" as email and invaild "<Password> for 2nd time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides Invalid "<username>"as email and invalid"<Password> for 3rd time
And user clicks on "Login" button
Then user should see the message "Invalid username and Password, Please try again"
When user provides valid "<username>"as phone number and valid "<Password> for 4th time
And user clicks on "Login" button		
Then user lands onto homepage screen
Examples:
|username|Password|
|XXXX|Invalid YYYY|
  
  @BDDTEST-EPP-1424
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid phone number and invalid password for 1st time,2nd time, 3rd time & valid Email id and password attempt for 4th time

Scenario Outline: Verify if user able to login when enter invalid phone number and invalid  password for 1st time,2nd time, 3rd time & valid Email id and password  attempt for 4th time 
Given user launch the 'XXX' url
And user is in Login screen
When user provides invaild"<username>" as phone number and Invalid "<Password> for 1st time
And user clicks on "Login" button
Then user should see the message "Invalid username and  invalid  Password, Please try again"
When user provides Invalid "<username>" as phone number and "<Password> for 2nd time
And user clicks on "Login" button
Then user should see the message "Invalid username and invaild Password, Please try again"
When user provides Invalid "<username>"as phone number and "<Password> for 3rd time
And user clicks on "Login" button
Then user should see the message "Invalid username and in vaild Password, Please try again"
When user provides valid "<username>"as email and valid "<Password> for 4th time
And user clicks on "Login" button		
Then user lands onto homepage screen 	
														
Examples:
|username|Password|
|XXXX|Invalid YYYY|
  
  @BDDTEST-EPP-1425
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify if user able to login when enter invalid phone number and invalid password for 1st time,2nd time, & 3 time valid Email id and password

Scenario Outline: Verify if user able to login when enter invalid phone number and invalid  password for 1st time,2nd time,  & 3 time valid Email id and password  
Given user launch the 'XXX' url
And user is in Login screen
When user provides invaild"<username>" as phone number and Invalid "<Password> for 1st time
And user clicks on "Login" button
Then user should see the message "Invalid username and  invalid  Password, Please try again"
When user provides Invalid "<username>" as phone number and "<Password> for 2nd time
And user clicks on "Login" button
Then user should see the message "Invalid username and invaild Password, Please try again"
When user provides valid "<username>"as email and vaild"<Password> for 3rd time
And user clicks on "Login" button	
Then user lands onto homepage screen 	
														
Examples:
|username|Password|
|XXXX|Invalid YYYY|
  
  @BDDTEST-EPP-1462
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 5 consecutive invalid username attempts

Scenario Outline: Verify if user account get locked after 5 consecutive invalid username attempts
Given user launch the 'XXX' url
And user is in Login screen
When user provides Invalid "<username>" and valid "<Password> for 1st time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides Invalid"<username>" and valid "<Password> for 2nd time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides Invalid"<username>" and valid "<Password> for 3rd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides Invalid"<username>" and valid "<Password> for 4rd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides Invalid"<username>" and valid "<Password> for 5rd time
And user clicks on "Login" button
Then user account should get locked					
And user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account” 
And user should receive the mail regarding account lock with below email content.
|Email subject : Your Patient Portal Account is locked
|Email body : 
|Hi {username},
|Your account is locked after too many failed attempts. Please contact customer support to unlock your account. If you did not attempt to log in, contact us.-Customer support’s email/phone number
|Thanks,
|Admin								
Examples:
|username|Password|
|Invaild XXXX|valid YYYY|

  @BDDTEST-EPP-1464
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 2 times invalid username & 3 times invalid password attempts

Scenario Outline: Verify if user account get locked after 2 times invalid username & 3 times invalid password attempts
Given user launch the 'XXX' url
And user is in Login screen
When user provides Invalid "<username>" and valid "<Password> for 1st time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides Invalid"<username>" and valid "<Password> for 2nd time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides valid"<username>" and invalid "<Password> for 3rd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When  user provides valid"<username>" and invalid "<Password> for 4rd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When  user provides valid"<username>" and invalid "<Password> for 5rd time
And user clicks on "Login" button
Then user account should get locked					
And user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account” 
And user should receive the mail regarding account lock with below email content.
|Email subject : Your Patient Portal Account is locked
|Email body : 
|Hi {username},
|Your account is locked after too many failed attempts. Please contact customer support to unlock your account. If you did not attempt to log in, contact us.-Customer support’s email/phone number
|Thanks,
|Admin								
Examples:
|Username|Password|
|Valid XXXX or Invalid XXXX|Valid YYYY or Invalid YYYY|
  
    @BDDTEST-EPP-1465
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify if user account get locked after 3 times invalid username & 2 times invalid password attempts

Scenario Outline: Verify if user account get locked after 3 times invalid username & 2 times invalid password attempts
Given user launch the 'XXX' url
And user is in Login screen
When user provides Invalid "<username>" and valid "<Password> for 1st time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides Invalid"<username>" and valid "<Password> for 2nd time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides Invalid"<username>" and valid "<Password> for 3rd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When  user provides valid"<username>" and invalid "<Password> for 4rd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When  user provides valid"<username>" and invalid "<Password> for 5rd time
And user clicks on "Login" button
Then user account should get locked					
And user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account” 
And user should receive the mail regarding account lock with below email content.
|Email subject : Your Patient Portal Account is locked
|Email body : 
|Hi {username},
|Your account is locked after too many failed attempts. Please contact customer support to unlock your account. If you did not attempt to log in, contact us.-Customer support’s email/phone number
|Thanks,
|Admin								
Examples:
|Username|Password|
|Valid XXXX or Invalid XXXX|Valid YYYY or Invalid YYYY|
  
    @BDDTEST-EPP-1480
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-4_STORY_EPP-210 - Verify the error message when internet and service are unavailable

Scenario Outline: Verify the error message when internet and service are unavailable  
Given user launch the 'XXX' url
And user is in Login screen
When user provides "<username>" and Invalid "<Password> for 1st time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides "<username>" and Invalid "<Password> for 2nd time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides "<username>" and Invalid "<Password> for 3rd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When  user provides "<username>" and Invalid "<Password> for 4rd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides "<username>" and Invalid "<Password> for 5rd time
And user clicks on "Login" button When Internet/Service unavailable
Then user should see "Appropriate error message" for Internet/service unavailable							
Examples:
|username|Password|
|XXXX|Invalid YYYY|