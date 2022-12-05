
Feature: Patient Portal: Settings– Change Password –Update Password CTA
  USER STORY: As a user, I should be able to update the password of patient portal 

  @BDDTEST-EPP-10962
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9323- Verify User should be navigated to change password page
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page

  @BDDTEST-EPP-10963
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9323- Verify User updates the password and view the success message
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

  @BDDTEST-EPP-10964
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9323- Verify User should unmask the entered password
    Given User launch Patient Portal url		
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

  @BDDTEST-EPP-10965
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9323- Verify User should Login using new Password
    Given User launch Patient Portal url		
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
    Then User should navigated to Patien Login screen
    And User should see Patient Login screen
    And User should see username and password field
    When User inputs valid username field
    And User input New Password field
    Then User should navigated to Dashboard screen

  @BDDTEST-EPP-10966
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9323- Verify User should not copy and paste on New Password and Confirm New Password fields
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
    Then User should be able to view the confirmation message Are you sure to change password along with Yes and No options 
    When user clicks Yes
    Then user should see Password has been updated success message Password changed successfully
    Then User should navigated to Patien Login screen
    And User should see Patient Login screen
    And User should see username and password field
    When User inputs valid username field
    And User input New Password field
    Then User should navigated to Dashboard screen

  @BDDTEST-EPP-10967
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9323- Verify the password should not be changed if No is selected during confirmation by the user
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
    Then User should be able to view the confirmation message Are you sure to change password along with Yes and No options 
    When user clicks No
    Then password should not be changed

  @BDDTEST-EPP-10968
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9323- Verify the patient should receive the alert in preferred mode of communication  on password change
    Given User launch Patient Portal url		
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
    Then user must recieve the alert in preferred mode of communication  on password change
