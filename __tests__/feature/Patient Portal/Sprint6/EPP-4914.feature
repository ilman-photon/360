
Feature: Patient Portal : Patient account gets locked
  User Story: As a user, my account should get locked after 5 consecutive invalid password attempts during login

  @BDDTEST-EPP-5205
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-4_STORY_EPP-4914- Verify if when the user enters a first-time wrong password in the password field account gets locked or not
    Given the use launch the XXX URL	
    And user navigates to the Patient Portal application
    And user lands on the Patient Login screen
    When the user enters a valid username in the username test field
    And User enters an invalid password in a password in the password field
    And clicks on the login button
    Then user sees an error message Invalid Username or Password

  @BDDTEST-EPP-5206
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-4_STORY_EPP-4914- Verify if when the user enters a 4th-time wrong password in the password field and clicks on login button account gets locked or not
    Given the use launch the XXX URL	
    And user navigates to the Patient Portal application
    And user lands on the Patient Login screen
    When the user enters a valid username in the username test field
    And User enters consecutively 4th time an invalid password in the password field
    And clicks on the login button
    Then user sees an error message Invalid Username or Password

  @BDDTEST-EPP-5207
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-4_STORY_EPP-4914- Verify if when the user enters a 5th-time wrong password in the password field and clicks on the login button user sees the message Your account has been locked after too many failed attempts.
    Given the use launch the XXX URL	
    And user navigates to the Patient Portal application
    And user lands on the Patient Login screen
    When the user enters a valid username in the username test field
    And User enters consecutively 5th time an invalid password in the password field
    And clicks on the login button
    Then user sees an error message Your account has been locked after too many failed attempts.

  @BDDTEST-EPP-5208
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-4_STORY_EPP-4914- Verify if the user receives an email link after the account gets locked
    Given the use launch the XXX URL	
    And user navigates to the Patient Portal application
    And user lands on the Patient Login screen
    When the user enters a valid username in the username test field
    And User enters consecutively 5th time an invalid password in the password field
    And clicks on the login button
    And user sees an error message Your account has been locked after too many failed attempts.
    When user preferred a mode of communication email
    Then the user receives an email with the password reset link

  @BDDTEST-EPP-5209
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-4_STORY_EPP-4914- Verify if the user receives a text message and password reset link to registred mobile number after the account gets locked
    Given the use launch the XXX URL	
    And user navigates to the Patient Portal application
    And user lands on the Patient Login screen
    When the user enters a valid username in the username test field
    And User enters consecutively 5th time an invalid password in the password field
    And clicks on the login button
    And user sees an error message Your account has been locked after too many failed attempts.
    When user preferred a mode of communication mobile number
    Then the user receives an text message with the password reset link
