Feature: As a referring provider, I should be able to view the error message shown by the system when Passwords do not match 

  @BDDTEST-EPP-512
  @Authentication
  @Patient_Portal
  @Regression
  Scenario Outline: EPIC_EPP-121_STORY_EPP-247-Verify referring provider should see "This is required field" error message when "<Confirm New Password>" field emptied
    Scenario: "EPIC_EPP-121_STORY_EPP-247-Verify User should see "This is required field" error message when "<Confirm New Password>" field emptied"

    Given use launch the "XXX" url	
    And user navigates to the Provider Portal application
    When user lands onto "Portal Login" screen
    Then user should see "Forgot Password or Username?" link
    When user clicks on "Forgot Password or Username?" link
    Then user should see "Reset Password" screen
    And user should see "Reset Password" as a title
    And user should see "Please enter your email below to reset password"
    And user should see "<Email>" field
    And user should enter valid "<Email or Phone Number>" field
    When user clicks on "Submit" button
    Then user should see "A link has been sent to your email to reset your password. Please check"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Provider portal password"
    And user should see mail/ message body as below
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user clicks on a link
    Then user should see "Create New Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill the valid "<New Password>" field
    And User should empty "<Confirm New Password>" field
    When User should see "Submit" button
    Then User should see "This is required field" error message

    Examples:
    |email|New Password| Confirm New Password|
    |xxx@mail.com|******|         |

  @BDDTEST-EPP-756
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-247-Verify referring provider should see the New password and Confirm Password field is available in the Create New Password page
    Scenario: "EPIC_EPP-121_STORY_EPP-247-Verify user should see the New password and Confirm Password field is available in the Create New Password page"

    Given referring provider launch the "XXX" url	
    And referring provider navigates to the Provider Portal application
    When referring provider lands onto "Portal Login" screen
    Then referring provider should see "Forgot Password or Username?" link
    When referring provider clicks on "Forgot Password or Username?" link
    Then referring provider should see "Reset Password" screen
    And referring provider should see "Reset Password" as a title
    And referring provider should see "Please enter your email below to reset password" textfield
    And referring provider should see "<Email>" field
    And referring provider should enter valid "<Email>" field
    When referring provider clicks on "Submit" button
    Then referring provider should see "A link has been sent to your email to reset your password. Please check"
    When referring provider access the inbox of registered "Email" 
    Then referring provider should receive a link mail to reset password
    And referring provider should see the mail with Email Subject as "Reset your Provider portal password"
    And referring provider should see mail/ message body as below
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When referring provider clicks on a link
    Then referring provider should see "Create New Password" screen
    And referring provider should see "<New Password>" and "<Confirm New Password>" fields

    Examples:
    |email|
    |xxx@mail.com|

  @BDDTEST-EPP-757
  @Authentication
  @Provider_Portal
  @Regression
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-247-Verify referring provider should see "Password does not meet requirements" error message
    Scenario: "EPIC_EPP-121_STORY_EPP-247-Verify User should see "Password does not meet requirements" error message"

    Given use launch the "XXX" url	
    And user navigates to the Provider Portal application
    When user lands onto "Portal Login" screen
    Then user should see "Forgot Password or Username?" link
    When user clicks on "Forgot Password or Username?" link
    Then user should see "Reset Password" screen
    And user should see "Reset Password" as a title
    And user should see "Please enter your email below to reset password" textfield
    And user should see "<Email>" field
    Then user should enter valid "<Email>" field
    When user clicks on "Submit" button
    Then user should see "A link has been sent to your email to reset your password. Please check"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Provider portal password"
    And user should see mail/ message body as below
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user clicks on a link
    Then user should see "Create New Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    Then User should input number on "<New Password>" field
    And User should input number on "<Confirm New Password>" field
    Then The system should be mask the entered password along with an option to unmask it by default
    And User should see "Submit" button
    When User clicks on "Submit" button
    Then User should see error message "Passwords do not match. Try again" 

    Examples:
    |email|New Password| Confirm New Password|
    |xxx@mail.com|1234|1234|

  @BDDTEST-EPP-758
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-247-Verify referring provider should see error message "Passwords do not match. Try again" when "<New Password>" is not same as "<Confirm New Password>"
    Scenario: "EPIC_EPP-121_STORY_EPP-247-Verify User should see error message "Passwords do not match. Try again" when "<New Password>" is not same as "<Confirm New Password>""

    Given referring provider launch the "XXX" url	
    And referring provider navigates to the Provider Portal application
    When referring provider lands onto "Portal Login" screen
    Then referring provider should see "Forgot Password or Username?" link
    When referring provider clicks on "Forgot Password or Username?" link
    Then referring provider should see "Reset Password" screen
    And referring provider should see "Reset Password" as a title
    And referring provider should see "Please enter your email below to reset password" textfield
    And referring provider should see "<Email>" field
    Then referring provider should enter valid "<Email>" field
    When referring provider clicks on "Submit" button
    Then referring provider should see "A link has been sent to your email to reset your password. Please check"
    When referring provider access the inbox of registered "Email" 
    Then referring provider should receive a link mail to reset password
    And referring provider should see the mail with Email Subject as "Reset your Provider portal password"
    And referring provider should see mail/ message body as below
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When referring provider clicks on a link
    Then referring provider should see "Create New Password" screen
    And referring provider should see "<New Password>" and "<Confirm New Password>" fields
    Then referring provider should input valid "<New Password>" field
    And referring provider should input invalid  "<Confirm New Password>" field
    Then The system should be mask the entered password along with an option to unmask it by default
    And referring provider should see "Submit" button
    When referring provider clicks on "Submit" button
    Then referring provider should see error message "Passwords do not match. Try again" 

    Examples:
    |email|New Password| Confirm New Password|
    |xxx@mail.com|******|***|

  @BDDTEST-EPP-759
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-247-Verify referring provider should see the entered mask "<New Password>" and "<Confirm Password>" by default
    Scenario: "EPIC_EPP-121_STORY_EPP-247-Verify User should see the entered mask "<New Password>" and "<Confirm Password>" by default"

    Given referring provider launch the "XXX" url	
    And referring provider navigates to the Provider Portal application
    When referring provider lands onto "Portal Login" screen
    Then referring provider should see "Forgot Password or Username?" link
    When referring provider clicks on "Forgot Password or Username?" link
    Then referring provider should see "Reset Password" screen
    And referring provider should see "Reset Password" as a title
    And referring provider should see "Please enter your email below to reset password"
    And referring provider should see "<Email>" field
    And referring provider should enter valid "<Email or Phone Number>" field
    When referring provider clicks on "Submit" button
    Then referring provider should see "A link has been sent to your email to reset your password. Please check"
    When referring provider access the inbox of registered "Email" 
    Then referring provider should receive a link mail to reset password
    And referring provider should see the mail with Email Subject as "Reset your Provider portal password"
    And referring provider should see mail/ message body as below
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When referring provider clicks on a link
    Then referring provider should see "Create New Password" screen
    And referring provider should see "<New Password>" and "<Confirm New Password>" fields
    When referring provider should fill the valid "<New Password>" and "<Confirm New Password>" fields
    Then referring provider should see the entered mask "<New Password>" and "<Confirm Password>" by default"

    Examples:
    |email|
    |xxx@mail.com|

  @BDDTEST-EPP-760
  @Authentication
  @Provider_Portal
  @Sprint2
  Scenario Outline: EPIC_EPP-121_STORY_EPP-247-Verify referring provider should unmask the entered password
    Scenario: "EPIC_EPP-121_STORY_EPP-247-Verify User should unmask the entered password"

    Given use launch the "XXX" url	
    And user navigates to the Provider Portal application
    When user lands onto "Portal Login" screen
    Then user should see "Forgot Password or Username?" link
    When user clicks on "Forgot Password or Username?" link
    Then user should see "Reset Password" screen
    And user should see "Reset Password" as a title
    And user should see "Please enter your email below to reset password"
    And user should see "<Email>" field
    And user should enter valid "<Email or Phone Number>" field
    When user clicks on "Submit" button
    Then user should see "A link has been sent to your email to reset your password. Please check"
    When user access the inbox of registered "Email" 
    Then user should receive a link mail to reset password
    And user should see the mail with Email Subject as "Reset your Provider portal password"
    And user should see mail/ message body as below
    |Hi {username},
    |We received a request to reset your password. Click here to reset - {link}. If you did not request to reset, contact Customer support.
    |Thanks,
    |Admin
    When user clicks on a link
    Then user should see "Create New Password" screen
    And User should see "<New Password>" and "<Confirm New Password>" fields
    When User should fill the valid "<New Password>" and "<Confirm New Password>" fields
    Then User should see the entered mask "<New Password>" and "<Confirm Password>" by default"
    And User should see "Password Eye" icon
    When User clicks on "Password Eye" icon
    Then User should see the entered password

    Examples:
    |email|
    |xxx@mail.com|
