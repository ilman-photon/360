Feature: As a referring provider, I should be able to view the error message shown by the system, upon the provided inputs for password doesn’t satisfy the password requirements 

   @BDDTEST-EPP-546
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200 -Verify if ECP Provider able to login to the provider portal after entering the valid username and valid password
  
Given ECP Provider launch the 'xxx' url
And ECP provider navigates to "login" page
When ECP Provider enters the valid "<username>" and valid "<password>"
And ECP Provider clicks the "Sign in" button
Then ECP Provider should be loged in provider portal  
And ECP Provider should see the home page of provider portal
Examples:
|username|password|

  
     @BDDTEST-EPP-547
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200- Verify if Referring provider able to login to the provider portal after entering the valid username and valid password

Given Referring provider launch the 'xxx' url 
And Referring provider navigates to "login" page
When Referring provider enters the valid inputs for "<username>" and valid "<password>" fields
And Referring provider clicks the "Sign in" button
Then Referring provider should be loged in provider portal  
And Referring provider should see the home page of provider portal
Examples:
|username|password|
  
     @BDDTEST-EPP-548
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200- Verify if admin able to login to the provider portal after entering the valid username and valid password

Given admin launch the 'xxx' url 
And admin navigates to "login" page
When admin enters the valid "<username>" and valid  "<password>"
And admin clicks the "Sign in" button
Then admin should be loged in provider portal  
And admin should see the home page of provider portal
Examples:
|username|password|
  
     @BDDTEST-EPP-549
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200 -Verify whether the filled username and password fields are blank when the referring provider refreshes the page

Given Referring provider launch the 'xxx' url 
And Referring provider navigates to "login" page
When Referring provider enters the input for "<username>" and "<password>" fields
And Referring provider refresh the page without clicking the "Sign in" button
Then Referring provider should see the blank "<username>" and "<password>" fields
Examples:
|username|password|
  
     @BDDTEST-EPP-550
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200 -Verify whether the filled username and password fields are blank when admin refreshes the page

Given admin launch the 'xxx' url 
And admin navigates to "login" page
When admin enters the input for "<username>" and "<password>" fields
And admin refresh the page without clicking the "Sign in" button
Then admin should see the blank "<username>" and "<password>" fields
Examples:
|username|password|

@BDDTEST-EPP-551
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200 -Verify whether the filled username and password fields are blank when ECP provider refreshes the page
Given ECP provider launches the 'xxx' url 
And ECP provider navigates to "login" page
When ECP provider enters the input for "<username>" and "<password>" fields
And ECP provider refresh the page without clicking the "Sign in" button
Then ECP provider should see the blank "<username>" and "<password>" fields
Examples:
|username|password|
  
     @BDDTEST-EPP-1509
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200- Verify whether admin can see the error message when the internet service is unavailable

Given admin launch the 'xxx' url 
And admin navigates to "login" page
When admin enters the input for "<username>" and "<password>" fields
And admin clicks the "Sign in" button
Then admin should be prompted with an error message"Please check your connection"
Examples:
|username|password|
  
  
  
     @BDDTEST-EPP-1510
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200- Verify whether referring provider can see the error message when the internet service is unavailable

Given Referring provider launch the 'xxx' url 
And Referring provider navigates to "login" page
When Referring provider enters the input for "<username>" and "<password>" fields
And Referring provider clicks the "Sign in" button
Then Referring provider should be prompted with an error message"Please check your connection"
Examples:
|username|password|
  
     @BDDTEST-EPP-1511
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200- Verify whether ECP provider can see the error message when the internet service is unavailable

Given ECP provider launch the 'xxx' url 
And ECP provider navigates to "login" page
When ECP provider enters the input for "<username>" and "<password>" fields
And ECP provider clicks the "Sign in" button
Then ECP provider should be prompted with an error message"Please check your connection"
Examples:
|username|password|
  
     @BDDTEST-EPP-1619
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200- Verify whether admin can see the error message when the server is down

Given admin launch the 'xxx' url 
And admin navigates to "login" page
When admin enters the input for "<username>" and "<password>" fields
And admin clicks the "Sign in" button
Then admin should see "Service unavailable" error message"
Examples:
|username|password|
  
  @BDDTEST-EPP-1620
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200- Verify whether referring provider can see the error message when the server is down

Given referring provider launch the 'xxx' url 
And referring provider navigates to "login" page
When referring provider enters the input for "<username>" and "<password>" fields
And referring provider clicks the "Sign in" button
Then referring provider should provider see "Service unavailable" error message"
Examples:
|username|password|
  
  @BDDTEST-EPP-1621
  @Authentication
  @Patient_Portal
  @Sprint2
  
  Scenario: EPIC_EPP-121_STORY_EPP-200- Verify whether ECP provider can see the error message when the server is down

Given ECP provider launch the 'xxx' url 
And ECP provider navigates to "login" page
When ECP provider enters the input for "<username>" and "<password>" fields
And ECP provider clicks the "Sign in" button
Then ECP provider should see "Service unavailable" error message
Examples:
|username|password|