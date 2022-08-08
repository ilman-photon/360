Feature: Provider Portal: Forgot Password - Back to login CTA
  As a Referring Provider / Internal Provider / Internal Staff, I should be able to cancel the user validation process for resetting the password and return to the login page 


  @BDDTEST-EPP-814
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-244- Verify whether internal provider is able to see the appropriate attributes on forgot password page
    Given user launch the "XXX" URL 
    When  user is in "Login" screen
    Then user should see  the "forgot Username" link  
    When user clicks on "forgot Password" link 
    Then user lands on Reset Password page
    Then user should see "username" textbox
    And user should see "Submit" button
    And user should see "Back to Login" button

  @BDDTEST-EPP-1478
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-244- Verify whether ECP Provider is able to click on 'Back to Login' button
    Given ECP Provider launch the "XXX" URL 
    When  ECP Provider is in "Login" screen
    Then ECP Provider should see  the "forgot Username" link  
    When ECP Provider clicks on "forgot Password" link 
    Then ECP Provider lands on Reset Password page
    And ECP Provider should see "Submit" button
    And ECP Provider should see "Back to Login" button
    When ECP Provider clicks on "Back to Login" button
    Then ECP Provider should see "Login" screen
    And Password Reset should be aborte

  @BDDTEST-EPP-1479
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-244- Verify whether Referring Provider is able to click on 'Back to Login' button
    Given Referring Provider launch the "XXX" URL 
    When  Referring Provider is in "Login" screen
    Then Referring Provider should see  the "forgot Username" link  
    When Referring Provider clicks on "forgot Password" link 
    Then Referring Provider lands on Reset Password page
    And Referring Provider should see "Submit" button
    And Referring Provider should see "Back to Login" button
    When Referring Provider clicks on "Back to Login" button
    Then Referring Provider should see "Login" screen
    And Password Reset should be aborted

  @BDDTEST-EPP-1481
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-244-Verify whether Admin is able to view Dev Tools When F12 is clicked
    Given Admin launch the "XXX" URL 
    When  Admin is in "Login" screen
    When Admin clicks the "F12" button 
    Then Admin must "validate" whether the Dev Tools are Displayed

  @BDDTEST-EPP-1482
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-244-Verify whether ECP Provider is able to view Dev Tools When F12 is clicked
    Given ECP Provider launch the "XXX" URL 
    When  ECP Provider is in "Login" screen
    When ECP Provider clicks the "F12" button 
    Then ECP Provider must "validate" whether the Dev Tools are Displayed

  @BDDTEST-EPP-1483
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-244-Verify whether Referring Provider is able to view Dev Tools When F12 is clicked
    Given Referring Provider launch the "XXX" URL 
    When  Referring Provider is in "Login" screen
    When Referring Provider clicks the "F12" button 
    Then Referring Provider must "validate" whether the Dev Tools are Displayed

  @BDDTEST-EPP-1484
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-244-Verify whether Referring Provider Login page loads within 3 seconds
    Given Referring Provider launch the "XXX" URL 
    When  Referring Provider is in "Login" screen
    Then Referring Provider should see  the "forgot Username" link  
    When Referring Provider clicks on "forgot Password" link 
    Then Referring Provider lands on Reset Password page
    And Referring Provider should see "Submit" button
    And Referring Provider should see "Back to Login" button
    When Referring Provider clicks on "Back to Login" button
    Then Referring Provider Validates whether page loads within "3 seconds"
    Then Referring Provider should see "Login" screen

  @BDDTEST-EPP-1486
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-244-Verify whether Admin Login page loads within 3 seconds
    Given Admin launch the "XXX" URL 
    When  Admin is in "Login" screen
    Then Admin should see  the "forgot Username" link  
    When Admin clicks on "forgot Password" link 
    Then Admin lands on Reset Password page
    And Admin should see "Submit" button
    And Admin should see "Back to Login" button
    When Admin clicks on "Back to Login" button
    Then Admin Validates whether page loads within "3 seconds"
    Then Admin should see "Login" screen

  @BDDTEST-EPP-1487
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario: EPIC_EPP-121_STORY_EPP-244-Verify whether ECP Provider Login page loads within 3 seconds
    Given ECP Provider launch the "XXX" URL 
    When  ECP Provider is in "Login" screen
    Then ECP Provider should see  the "forgot Username" link  
    When ECP Provider "clicks" on "forgot Password" link 
    Then ECP Provider lands on Reset Password page
    And ECP Provider should see "Submit" button
    And ECP Provider should see "Back to Login" button
    When ECP Provider "clicks" on "Back to Login" button
    Then ECP Provider Validates whether page loads within "3 seconds"
    Then ECP Provider should see "Login" screen
