
Feature: Patient Portal: Settings– Change Password – Error messages
  USER STORY: As a user, I should be able to view the error messages while updating the password of patient portal  

  @BDDTEST-EPP-10969
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9324- Verify User should be navigated to change password page
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page

  @BDDTEST-EPP-10970
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9324- Verify User updates the password and view the success message
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page
    Then user should see Update Password Page
    And User should see New Password and Confirm New Password fields
    When User should fill the valid New Password and Confirm New Password fields
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see Update button
    When User should click on Update button
    Then User should be able to view the confirmation message Are you sure to change password along with Yes and No options 
    When user clicks Yes
    Then user should see Password has been updated success message Password changed successfully

  @BDDTEST-EPP-10971
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9324- Verify User should unmask the entered password
    "Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page
    Then user should see Update Password Page
    And User should see New Password and Confirm New Password fields
    When User should fill the valid New Password and Confirm New Password fields
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see Password Eye icon
    When User clicks on Password Eye icon
    Then User should see the entered password
    And User should see Update button
    When User should click on Update button
    Then User should be able to view the confirmation message Are you sure to change password along with Yes and No options 
    When user clicks Yes
    Then user should see Password has been updated success message Password changed successfully

  @BDDTEST-EPP-10972
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9324- Verify User should Login using new Password
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page
    Then user should see Update Password Page
    And User should see New Password and Confirm New Password fields
    When User should fill the valid New Password and Confirm New Password fields
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see Update button
    When User should click on Update button
    Then User should be able to view the confirmation message Are you sure to change password along with Yes and No options 
    When user clicks Yes
    Then user should see Password has been updated success message Password changed successfully
    Then User should navigated to Patien Login screen
    And User should see Patient Login screen
    And User should see username and password field
    When User inputs valid username field
    And User input New Password field
    Then User should navigated to Dashboard screen

  @BDDTEST-EPP-10973
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9324- Verify User should not copy and paste on New Password and Confirm New Password fields
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page
    Then user should see Update Password Page
    And User should see New Password and Confirm New Password fields
    When User should fill the valid New Password and Confirm New Password fields
    Then User should not copy and paste on New Password and Confirm New Password fields
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see Password Eye icon
    When User clicks on Password Eye icon
    Then User should see the entered password
    And User should see Update button
    When User should click on Update button
    Then User should see Password has been updated success message
    Then User should navigated to Patien Login screen
    And User should see Patient Login screen
    And User should see username and password field
    When User inputs valid username field
    And User input New Password field
    Then User should navigated to Dashboard screen

  @BDDTEST-EPP-10974
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9324- Verify user should see the inline error This field is required when user emptied New Password and Confirm New Password fields
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page
    Then user should see Update Password Page
    And User should see New Password and Confirm New Password fields
    When user emptied New Password and Confirm New Password fields
    Then user should see the inline error This field is required

  @BDDTEST-EPP-10975
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9324- Verify user should see "Password does not meet requirements" error message
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page
    Then user should see Update Password Page
    And User should see New Password and Confirm New Password fields
    When User should fill invalid New Password field
    And  User should fill invalid Confirm New Password field
    And user should see mask the entered password along with an option to unmask it by default
    And User should see Update button
    When User should click on Update button
    Then User should see error message Password does not meet requirements below Confirm Password

  @BDDTEST-EPP-10976
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9324- Verify user should see "Password do not match" error message
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page
    Then user should see Update Password Page
    And User should see New Password and Confirm New Password fields
    When User should fill valid New Password field
    And  User should fill invalid Confirm New Password field
    And user should see mask the entered password along with an option to unmask it by default
    And User should see Update button
    When User should click on Update button
    Then User should see error message Password do not match below Confirm Password
