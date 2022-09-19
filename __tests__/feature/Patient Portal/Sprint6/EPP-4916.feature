
Feature: Patient Portal : Forgot Password - Account locked due to incorrect answers for security questions
  User Story: As a user, my account should get locked when the answers to the security questions are incorrect during password reset process. 

  @BDDTEST-EPP-5200
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-7_STORY_EPP-4916- Verify if the user enters a first-time wrong answer for a security question then the user account gets locked
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
    And Enter the wrong answers
    And clicks on the continue button
    Then the user sees an error message incorrect answer

  @BDDTEST-EPP-5201
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-7_STORY_EPP-4916- Verify if the user enters a 4th-time wrong answer for a security question then the user  sees the error message account gets locked
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
    Then the user sees an error message Your account get locked

  @BDDTEST-EPP-5202
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-7_STORY_EPP-4916- Verify if the user tries to log in to the patient portal after the account locked
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
    Then the user sees an error message Your account get locked
    And clicks on the Back to login button
    And user sees the login page 
    When the user enters a valid username and password 
    And licks on the login button
    Then the user sees the error message Account get locked

  @BDDTEST-EPP-5203
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-7_STORY_EPP-4916- Verify if the user receives an email link after the account gets locked
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
    Then the user sees an error message Your account get locked
    And clicks on the Back to login button
    And user sees the login page 
    When the user enters a valid username and password 
    And licks on the login button
    Then the user sees the error message Account get locked

  @BDDTEST-EPP-5204
  @Authentication
  @P1
  @Patient_Portal
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-7_STORY_EPP-4916- Verify if the user enters a 4th-time correct answer for a security question then check user account gets locked or not.
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
    And Enter the 3 time wrong answers to the security question 
    And 4th-time correct answer the security questions
    Then the user sees update  password page
