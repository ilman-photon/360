Feature: Patient Portal : Security Questions - Security questions to be set up
  User Story: As a user, I should see an error message when I do not answer for at-least two all 5 security questions.

  @BDDTEST-EPP-2319
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave all the Answer field blank
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    Then  user see the  security Question "Question1,Question2,Question3,Question4,Question5"
    When user leave the field blank "Answer1,Answer2,Answer3,Answer4,Answer5"
    Then user click on "submit" button
    And user should see the error msg "You must answer all security questions"
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    ||||||

  @BDDTEST-EPP-2320
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question 1
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    When user see the  security Question "Question1"
    When user leave "Answer1" field blank 
    And user enter the "Answer2,Answer3,Answer4,Answer5"
    Then user click on "submit" button
    And user should see the error msg "You must answer all security questions"
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    ||YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2321
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question 2
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    When user see the  security Question "Question2"
    When  user leave "Answer2" field blank 
    And user enter the "Answer1,Answer3,Answer4,Answer5"
    Then user click on "submit" button
    And user should see the error msg "You must answer all security questions”
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1||YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2322
  @Authentication
  @Patient_Portal
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question 3
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    When user see the  security Question "Question3"
    When user leave "Answer3" field blank
    And user enter the "Answer1,Answer2,Answer4,Answer5"
    Then user click on "submit" button
    And user should see the error msg "You must answer all security questions"
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2||YYYY4|YYYY5|

  @BDDTEST-EPP-2323
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question 4
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    When user see the  security Question "Question4"
    When user leave "Answer4" field blank
    And user enter the "Answer1,Answer2,Answer3 Answer5"
    Then user click on "submit" button
    And user should see the error msg "You must answer all security questions"
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3||YYYY5|

  @BDDTEST-EPP-2324
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question5
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    When user see the  security Question "Question5"
    When user leave "Answer5" field blank
    And user enter the "Answer1,Answer2,Answer3,Answer4"
    Then user click on "submit" button
    And user should see the error msg "You must answer all security questions"
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4||

  @BDDTEST-EPP-2325
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question 1 and Question 2 and Answer for Question 3, Question4, Question5
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    When user see the  security Question 
    When user leave "Answer1", "Answer2" field blank
    And user enter the "Answer3","Answer4","Answer5"
    Then user click on "submit" button
    And user should see the error msg "You must answer all security questions”
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |||YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2326
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @included
  Scenario Outline: EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question 1 and Question 3 and Answer for Question 2, Question4, Question5
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question dropdown field"
    And user click on dropdown field
    When user see the  security Question 
    When user leave "Answer1" "Answer3" field blank
    And user enter the "Answer2","Answer4","Answer5"
    Then user click on "submit" button
    And user should see the error msg "You must answer all security questions"
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    ||YYYY2||YYYY4|YYYY5|

  @BDDTEST-EPP-2397
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-273 - Verify the error message when user leave the Answer fields blank for Question 3 and Question 4 and Answer for Question 1, Question 2, Question 5
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account"CTA in the"Patient Login"screen
    Then user lands on the "User Registration"screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>"and"<Password>"
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question dropdown field
    And user click on dropdown field
    When user see the  security Question 
    When user leave "Answer3","Answer4" field blank
    And user enter the "Answer1","Answer2","Answer5"
    Then user click on "submit" button
    And user should see the error msg "You must answer all security questions"
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|||YYYY5|
