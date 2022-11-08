Feature: Patient Portal : Changes to records - Logs changes made to authentication records
  User Story: System should be able to log the changes made to Patient portal and send it to a system external to portal.
 
  @BDDTEST-EPP-1940
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-6_STORY_EPP-278-Verify that the log is capturing whether the Patient is able to login with Email and valid Password.
    Given user launch the "XXX" url
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Email or Phone Number>" and valid"<password>"
    And user click "Login" button.
    Then user should view Home/Dashboard page
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp

  @BDDTEST-EPP-1941
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-6_STORY_EPP-278-Verify that the log is capturing whether the Patient is able to login with phone number and valid Password.
    Given user launch the "XXX" url
    And user navigates to the Patient Portal application
    When user lands onto “Patient Login” screen
    And user provides valid "<Phone Number>" and valid"<password>"
    And user click "Login" button.
    Then user should view Home/Dashboard page
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    

  @BDDTEST-EPP-1942
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing whether then Login using Magic link option is displaying along with the error message "Your password has expired. Please reset your password."
    Given user launch the "XXX" url		
    When user see the Login screen
    And user  provides "<Email or Phone>" and expired "<Password>"		
    Then user should be able to see the following message “Your password has expired. Please reset your password." along with "Login using one-time" link.
    Then user get the log file in the location/tool
    Then the user can view the log details with time stamp
    

  @BDDTEST-EPP-1943
  @Authentication
  @Patient_Portal
  @Regression
  @Sprint3
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing data's, when user edit the Personal information in the profile information.
    And admin clicks on the "Delete" link
    And admin can see the  insurance should delete successfully message
    Then admin should see error screen when service is unavailable
    Then admin get the log file in the location/tool
    Then the admin can view the log details with time stamp
    

  @BDDTEST-EPP-2274
  @Authentication
  @Patient_Portal
  @Sprint3
  Scenario: EPIC_EPP-6_STORY_EPP-278 - Verify the log to capturing  the error screen when the admin update and before saving the internet is unavailable
    Given admin launch the "XXX" url 
    And admin navigates to the Patient Portal application
    When admin lands onto “Patient Login” screen
    Then admin see "email/phone" field and "<Password>" field
    And admin should enter valid "<email/phone>" and valid "<Password>"
    When admin clicks on "Continue" button
    Then admin shoud see set MFA screen
    And admin should see screen title written as "Set Multi-Factor Authentication"
    And admin should see screen subtitle written as "Select a delivery method to identify your identity."
    And admin should see "Select a method" section with radio button selected on "Email: m********@yahoo.com"
    And admin unchecked the "remember me" checkbox
    When admin click on "Confirm" button
    Then admin should see "second of set MFA" screen
    And admin should see message "Success " and text "see Multi factor Authentication has been set successfully"
    And admin should receive a email with code
    And admin see the "Email Subject - Your Verification Code"
    Then admin see the Email/ message body - Hi {adminname},
    Then admin see the message "The temporary code you requested is xxxxxx. Please use this code to complete your request. Thank you,  Admin"
    And admin should see "<Enter code>" field
    And admin fill "<Enter code>" field with invalid code
    When admin click on "Confirm" button
    Then admin should see error screen when internet is unavailable
    Then admin gets the log file in the location/tool
    Then the admin can view the log details with time stamp