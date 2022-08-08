Feature: Provider Portal: Forgot Password - User validation success
  As a referring provider, I should be able to submit my username and get a link to reset my login password.  

  @BDDTEST-EPP-894
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-245- Verify that referring provider should be able to submit the username in Forgot Password Screen
    Given referring provider launch the "XXX" URL 
    When  referring provider is in "Login" screen
    Then referring provider should see  the "forgot Username" link  
    And referring provider should see the "forgot Password" link 
    When referring provider clicks on "forgot Password" link 
    Then referring provider lands on Reset Password page
    And referring provider should see "Submit" button
    And referring provider the valid "<Email>" 
    When referring provider clicks on "Submit" Button
    Then referring provider should see message "A link has been sent to your registered email to reset your password. Please check." 
    Then referring provider should validate that the password is reset within 24 hours
    
    Examples:
    |Email|
    |abcdefg |

  @BDDTEST-EPP-895
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-245- Verify that Referring Provider should be able to submit my username and get a link to reset my login password.  
    Given Referring Provider launch the "XXX" URL 
    When  Referring Provider is in "Login" screen
    Then Referring Provider should see  the "forgot Username" link  
    And Referring Provider should see the "forgot Password" link 
    When Referring Provider clicks on "forgot Password" link 
    Then Referring Provider lands on Reset Password page
    And Referring Provider should see "Submit" button
    And Referring Provider enter the valid "<Email>" 
    When Referring Provider clicks on "Submit" Button
    Then Referring Provider should see message "A link has been sent to your registered email to reset your password. Please check." 
    Then Referring Provider should validate that the password is reset within 24 hours
    Then Referring Provider should validate the email received to the username or email filled in username field 
    When Referring Provider clicks on mail which is recieved to reset the password
    Then Referring Provider should validate the email referring Email subject - "Reset your Provider portal password"
    And Referring Provider should validate email referring Email body - "Hi {username},'We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.Thanks,Admin"
    
    Examples:
    |Email|
    |abcdefg@abc.com|

  @BDDTEST-EPP-901
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-245-verify that referring provider should be navigated to the login page of provider portal once after clicking the link in email received 
    Given referring provider launch the "XXX" URL 
    When  referring provider is in "Login" screen
    Then referring provider should see  the "forgot Username" link  
    And referring provider should see the "forgot Password" link 
    When referring provider clicks on "forgot Password" link 
    Then referring provider lands on Reset Password page
    And referring provider should see "Submit" button
    And referring provider the valid "<Email>" 
    When referring provider clicks on "Submit" Button
    Then referring provider should see message "A link has been sent to your registered email to reset your password. Please check." 
    Then referring provider should validate that the password is reset within "24 hours"
    Then referring provider should validate the email received to the username or email filled in username field 
    When referring provider clicks on mail which is recieved to reset the password
    Then referring provider should validate the email referring Email subject - "Reset your Provider portal password"
    And referring provider should validate email referring Email body - "Hi {username},'We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.Thanks,Admin"
    When referring provider clicks on the link from mail
    Then referring provider should see "Create New Password" screen
    
    
    Examples:
    |Email|
    |abcdefg |
    
    
    Examples:
    |username|

  @BDDTEST-EPP-905
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-245-Verify that Referring provider should not receive the link when the user provides invalid username
    Given Referring provider launch the "XXX" URL 
    When  Referring provider is in "Login" screen
    Then Referring provider should see  the "forgot Username" link  
    And Referring provider should see the "forgot Password" link 
    When Referring provider clicks on "forgot Password" link 
    Then Referring provider lands on Reset Password page
    And Referring provider should see "Submit" button
    And Referring provider the Invalid "<Email>" 
    When Referring provider clicks on "Submit" Button
    Then Referring provider should see error message "Invalid email.Please try again."
    Then Referring provider should not receive password reset link
