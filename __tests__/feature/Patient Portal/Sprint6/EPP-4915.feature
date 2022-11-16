Feature: Patient Portal : Patient receives link to reset password to login when account gets locked
  User Story: As a user, I should receive a link to reset password when my account gets locked

  @BDDTEST-EPP-5687
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-4_STORY_EPP-4915- Verify if when the user account get locked after enters a 5th-time wrong password in the password field
    Given the use launch the XXX URL	
    And user navigates to the Patient Portal application
    And user lands on the Patient Login screen
    When the user enters a valid username in the username test field
    And User enters consecutively 5th time an invalid password in the password field
    And clicks on the login button
    Then the user sees an error message Your account has been locked after too many failed attempts.

  @BDDTEST-EPP-5688
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-4_STORY_EPP-4915- Verify if the user receives an email with a reset password link when the account gets locked with invalid password attempts
    Given the use launch the XXX URL	
    And user navigates to the Patient Portal application
    And user lands on the Patient Login screen
    When the user enters a valid username in the username test field
    And User enters consecutively 5th time an invalid password in the password field
    And clicks on the login button
    Then the user sees an error message Your account has been locked after too many failed attempts.
    And user receives a reset password link in registred emai
    
  @BDDTEST-EPP-5689
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-4_STORY_EPP-4915- Verify if the user receives an email with a reset password link when the account gets locked when user worng answer the security quection
    Given the use launch the XXX URL	
    And user navigates to the Patient Portal application
    And user lands on the Patient Login screen
    Then the user should see the "Forgot Password" link
    When the user clicks on the Forgot Password link
    Then the user should see Forgot Password screen
    And the user should see the Email or Phone Number field
    And the user should enter a valid Email or Phone Number field
    And user clicks on the "Continue" button
    Then the user should see the Select an option screen 
    And the user clicks on the Answer security questions button
    Then Password Recovery Security Questions page is opened
    And Enter the 4th time wrong answers
    And clicks on the continue button
    And the user sees an error message Your account gets locked
    Then the user receives a password reset link to registered email 
    