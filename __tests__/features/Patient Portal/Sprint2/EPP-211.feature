
Feature:  As a user, I should not be able to login when my account is locked.

  @BDDTEST-EPP-621
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  @included
  Scenario: EPIC_EPP-4_STORY_EPP-211 - Verify if user is not able to login with valid credentials when account is locked.

Scenario Outline: Verify if user not able to login with valid credentials when account is locked.
Given user/admin user launch the 'XXX' url	
And user/ admin user navigates to the Patient Portal application
When user/ admin user lands onto “Patient Login” screen
And user provides "<username>" and Invalid "<Password>" for 1st time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides "<username>" and Invalid "<Password> for 2nd time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides "<username>" and Invalid "<Password> for 3rd time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides "<username>" and Invalid "<Password> for 4st time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides "<username>" and Invalid "<Password> for 5nd time
And user clicks on "Login" button
Then user account should get locked						
And user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account” 
When user provides valid  "<username>" and "<Password>" in Login Screen
And user clicks on "Login" button
Then user should not able to login
And user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”																		
Examples:
|Email or Phone Number|Password|
|xxxxxxxxxx|********|
  
  
  @BDDTEST-EPP-622
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  @excluded
  Scenario: EPIC_EPP-4_STORY_EPP-211 - Verify if patient user should not be able to login with invalid credentials when my account is locked.

Scenario Outline: Verify if user not be able to login with invalid credentials when account is locked.
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
When user provides "<Email or Phone Number>" and Invalid "<Password> for 4st time
And user clicks on "Login" button
Then user should see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 5nd time
And user clicks on "Login" button
Then user account should get locked						
And user should see the message "Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account” 
When user provides invalid  "<Email or Phone Number>" and "<Password> 
And user clicks on "Login" button
Then user should not able to login 
And user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account"									
Examples:
|Email or Phone Number|Password|
|Invalid XXXX|Invalid YYYY|
  
  
  
  
  @BDDTEST-EPP-623
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  @excluded
  Scenario: EPIC_EPP-4_STORY_EPP-211 - "Verify if user not be able to login with Invalid Email or Phone Number & valid Password when account is locked".

Scenario Outline: Verify if user should not be able to login with Invalid username & valid Password when account is locked.
Given user/admin user launch the 'XXX' url	
And user/ admin user navigates to the Patient Portal application
When user/ admin user lands onto “Patient Login” screen
And user provides "<username>" and Invalid "<Password> for 1st time
And user clicks on "Login" button
Then user should be able to see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 2nd time
And user clicks on "Login" button
Then user should be able to see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 3rd time
Then user should  see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 4rd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 5rd time
And user clicks on "Login" button
Then user account should get locked						
And user should see the message "Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account” 
When user provides Invalid  "<Email or Phone Number>" and valid "<Password> 
And user clicks on "Login" button
Then user should not able to login		
And user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account”
Examples:
|Email or Phone Number|Password|
|Invalid XXXX|Valid YYYY|


 
  @BDDTEST-EPP-755
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  @excluded
  Scenario: EPIC_EPP-4_STORY_EPP-211 - Verify if user not be able to login with valid Email or Phone Number & Invalid Password when account is locked.

Scenario Outline: Verify if user should not be able to login with valid username & Invalid Password when account is locked.
Given user/admin user launch the 'XXX' url	
And user/ admin user navigates to the Patient Portal application
When user/ admin user lands onto “Patient Login” screen
And user provides "<Email or Phone Number>" and Invalid "<Password> for 1st time
And user clicks on "Login" button
Then user should  to see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 2nd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 3rd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 4rd time
And user clicks on "Login" button
Then user should  see the message "Invalid username or Password, Please try again"
When user provides "<Email or Phone Number>" and Invalid "<Password> for 5rd time
And user clicks on "Login" button
Then user account should get locked						
And user should see the message "Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account” 
When user provides valid  "<Email or Phone Number>" and invalid "<Password> 
And user clicks on "Login" button
Then user should not able to login 
And user should see the message “Your account has been locked after too many failed attempts. Please contact Customer Support to unlock your account” 				
Examples:
|Email or Phone Number|Password|
|Valid XXXX|Invalid YYY|