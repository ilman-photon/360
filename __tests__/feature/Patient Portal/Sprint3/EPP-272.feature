Feature: Patient Portal : Security Questions - Submit security questions
  User Story: As a user, I should be able to answer the list of preset security questions.

  

  @BDDTEST-EPP-2250
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-272 - Verify if user able to answer  security "Question1"
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks  on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    Then user should see the list of 5 security question 
    When user select the security "Question1" field
    Then user answer the question in "Answer1" textfield
    
    Examples:
    |XXXX1?|
    |YYYY1|

  @BDDTEST-EPP-2251
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-272 - Verify if user able to answer  security "Question2"
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
    Then user should see the list of 5 security question 
    When user select the security "Question2" field
    Then user answer the question in "Answer2" textfield
    Examples:
    |XXXX2?|
    |YYYY2|

  @BDDTEST-EPP-2252
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-272 - Verify if user able to answer  security "Question3"
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
    Then user should see the list of 5 security question 
    When user select the security "Question3" field
    Then user answer the question in "Answer3" textfield
    Examples:
    |XXXX3?|
    |YYYY3|

  @BDDTEST-EPP-2253
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-272 - Verify if user able to answer  security "Question4"
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
    Then user should see the list of 5 security question 
    When user select the security "Question4" field
    Then user answer the question in "Answer4" textfield
    Examples:
    |XXXX4?|
    |YYYY4|

  @BDDTEST-EPP-2254
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-272 - Verify if user able to answer  security "Question5"
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks  on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    Then user should see  5 security question 
    When user select the security "Question5" field
    Then user answer the question in "Answer5" textfield
    Examples:
    |XXXX5?|
    |YYYY5|

  @BDDTEST-EPP-2255
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-272 - Verify if user  click submit button after answering all the security question
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
    Then user should see  5 security question 
    And user see the security "Question1,Question2,Question3,Question4,Question5"
    When user enter answer in field "Answer1,Answer2,Answer3,Answer4,Answer5"
    Then user click on "submit" button
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2256
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-272 - Verify if user able to answer  security Question with Number and special character
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks  on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    Then user should see the list of 5 security question 
    And user answer the question with "Number""special character" it should accepted
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1@|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2257
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-272 - Verify if user able to answer  security Question with Maximum length of 20 characters
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks  on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    Then user should see the list of 5 security question 
    And user answer the question with maximum length 20 characters it should accepted
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2258
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-272 - Verify the error message if user answer  security Question with more than 20 characters
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks  on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    Then user should see the list of 5 security question 
    And user answer the question with more than 20 characters  
    And user should see the error message "Approriate Error message"
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2275
  @Authentication
  @Patient_Portal
  @Sprint2
  Scenario Outline:  EPIC_EPP-3_STORY_EPP-272 - Verify the success message after setting up  the security question 
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks  on "Login" button
    And user should prompted to set up Security questions after setup MFA
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    Then user should see the 5 security question 
    And user see the security "Question1,Question2,Question3,Question4,Question5"
    When user enter answer in textfield "Answer1,Answer2,Answer3,Answer4,Answer5"
    Then user click on "submit" button
    And user should see "Security questions set up successfully"
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|
