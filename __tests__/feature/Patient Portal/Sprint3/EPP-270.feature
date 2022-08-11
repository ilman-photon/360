Feature: Patient Portal : Security Questions - Security questions set up - View
  User Story: As a user, I should be prompted to set up security questions when I login for the first time (OR) Existing ECP Patient user logs in for the first time

    @BDDTEST-EPP-2011
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if New user able to navigate to “Set up Security questions” screen after MFA setup through EMAIL
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user should see screen subtitle written as "Confirm your email below and we’ll send a code to set-up multi-factor authentication."
    And user should see text  "Email: m********@gmail.com"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up "Security questions"
    Then  user land on to "Set up Security questions" screen
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2012
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if New user able to navigate to “Set up Security questions” screen after MFA setup through phone
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user should see screen subtitle written as "Confirm your phone below and we’ll send a code to set-up multi-factor authentication."
    And user should see text "Phone: (8***)***-***31"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up "Security questions"
    Then  user land on to "Set up Security questions" screen
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2013
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if New user able to navigate to “Set up Security questions” screen after MFA setup through both Email,Phone number
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see default selection on Email
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up "Security questions"
    Then  user land on to "Set up Security questions" screen
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2014
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if  Existing user able to navigate to “Set up Security questions” screen after MFA setup through EMAIL
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user should see screen subtitle written as "Confirm your email below and we’ll send a code to set-up multi-factor authentication."
    And user should see text  "Email: m********@yahoo.com"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up "Security questions"
    Then  user land on to "Set up Security questions" screen
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2015
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view list of preset security Questions
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
    And user should prompted to set up "Security questions "
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    Then user should see the  of 5 security question 
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2016
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view list of preset security Questions 1 and Answer1 field
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
    And user should prompted to set up Security questions 
    Then user land on to “Set up Security questions” screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    Then user should see the "Question1" text dropdown field 
    And user should see "Answer1" text field below "Question1" field
    Examples:
    |XXXX1?|
    |YYYY1|

  @BDDTEST-EPP-2017
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view list of preset security Question2 and Answer2 field
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
    Then user should see the "Question2" text dropdown field 
    And user should see "Answer1" text field below  "Question2" field
    Examples:
    |XXXX2?|
    |YYYY2|

  @BDDTEST-EPP-2018
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view list of preset security questions 3and answer3field
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
    Then user should see the "Question3" text dropdown field 
    And user should see "Answer3" text field below  "Question3" field
    Examples:
    |XXXX3?|
    |YYYY3|

  @BDDTEST-EPP-2019
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view list of preset security Question4 and Answer4 field
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
    Then user should see the "Question4" text dropdown field 
    And user should see "Answer4" text field below  "Question4" field
    Examples:
    |XXXX4?|
    |YYYY4|

  @BDDTEST-EPP-2020
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view list of preset security Question5 and Answer5 field
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
    And user should prompted to set up "Security questions"
    Then user land on to "Set up Security questions" screen
    When user mouse over to "Question" dropdown field
    And user click on dropdown field
    Then user should see the "Question5" dropdown field 
    And user should see "Answer5" text field below  "Question5" field
    Examples:
    |XXXX5?|
    |YYYY5|

  @BDDTEST-EPP-2022
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view ‘Submit’ button
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user setup MFA successfully 
    Then user login with "<Email or MobileNumber>" and "<Password>
    And user clicks on "Login" button
    And user should prompted to set up "Security questions" 
    Then  user land on to “Set up Security questions” screen
    And  user should see the ‘Submit’ button

  @BDDTEST-EPP-2024
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if user able to ‘Skip’ security question by clicking  skip button
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
    And user should prompted to set up "Security questions" 
    Then  user land on to "Set up Security questions" screen
    And user should see the "Skip" button 
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2025
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-270 - Verify the error msg  when internet connection unavailable
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user login with "<username>" and "<password>"
    And user clicks on "Login" button
    And user should prompted to set up "Security questions" after setup MFA
    When  user loss the Internet connection 
    Then user should see error message "Please check your internet connection"

  @BDDTEST-EPP-2026
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-270 - Verify if user given Empty Text Box once the Page is refreshed
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user login with "<username>" and "<password>"
    And user clicks on "Login" button
    And user should prompted to set up "Security questions" after setup MFA
    When user click the Refresh button
    Then user must see field must be emptied

  @BDDTEST-EPP-2027
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-270 - Verify the error msg  when server down
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user login with "<username>" and "<password>"
    And user clicks  on "Login" button
    And user should prompted to set up "Security questions" after setup MFA
    When user click  on submit button 
    Then user should see Service unavailable error message

  @BDDTEST-EPP-2028
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view Dev Tools When F12 is clicked
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user login with "<username>" and "<password>"
    And user "<clicks>" on "Login" button
    And user should prompted to set up "Security questions" after setup MFA
    When user clicks  the "<F12>" button 
    Then user must "validate" whether the Dev Tools are Displayed

  @BDDTEST-EPP-2029
  @Authentication
  @Patient_Portal
  @Sprint3
  @excluded
  Scenario: EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view security question screen loaded within 3 seconds
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    Then user login with "<username>" and "<password>"
    And user clicks  on "Login" button
    And user should prompted to set up "Security questions" after setup MFA
    When user click  on submit button 
    Then user should validate whether security question  screen loaded within 3 seconds

  @BDDTEST-EPP-2162
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if Existing user able to navigate to “Set up Security questions” screen after MFA setup through Phone
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user should see screen subtitle written as "Confirm your phone below and we’ll send a code to set-up multi-factor authentication."
    And user should see text "Phone: (8***)***-***31"
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up "Security questions"
    Then  user land on to "Set up Security questions" screen
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2194
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline: EPIC_EPP-3_STORY_EPP-270 - Verify if Existing user able to navigate to “Set up Security questions” screen after MFA setup through both Email,Phone number
    Given user launch the 'XXX' url	
    And user navigates to the Patient Portal application
    Then user lands onto “Patient Login” screen
    When user clicks on the "Create an Account" CTA in the"Patient Login" screen
    Then user lands on the "User Registration" screen 
    When user provides all mandatory field and register successfully
    Then user should see MFA Setup screen
    And user should see "Select a method" section with radio button with below detail "Email: m********@yahoo.com" and "Phone: (8***)***-***31"
    And user should see default selection on Email
    And user should see checkbox section "Remember me"
    And user should see description of check box written as "This means you won’t have to authenticate at every sign-in"
    And user should see "Confirm" & "Back to Login" button
    Then user login with "<Email or MobileNumber>" and "<Password>"
    And user clicks on "Login" button
    And user should prompted to set up "Security questions"
    Then  user land on to "Set up Security questions" screen
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|

  @BDDTEST-EPP-2195
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  @excluded
  Scenario Outline:  EPIC_EPP-3_STORY_EPP-270 - Verify if user able to view ‘Skip’ button 
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
    And user should prompted to set up "Security questions" 
    Then  user land on to "Set up Security questions" screen
    And user should see the "Skip" button 
    Examples:
    |XXXX1?|XXXX2?|XXXX3?|XXXX4?|XXXX5?|
    |YYYY1|YYYY2|YYYY3|YYYY4|YYYY5|
