
Feature: Patient Portal: Settings– Change Password – SMS communication
  User Story: As a patient, I should be able to receive an SMS if my preferred mode of communication is SMS or both, when my password is updated 

  @BDDTEST-EPP-10949
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9326- Verify User should be navigated to change password page
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page

  @BDDTEST-EPP-10950
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9326- Verify User change the password
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page
    Then user should see Update Password Page
    And User should see New Password and Confirm New Password fields
    When User should fill the valid New Password and Confirm New Password fields
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see Update password button
    Then User should click on Update password button

  @BDDTEST-EPP-10951
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9326- Verify when user has set preferred mode of communication as as SMS or both then user has received SMS for password change
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
    When user has set preferred mode of communication as SMS or both 
    Then user has received SMS for password change
    And The SMS will looks like with below format
    |SMS body -  |
    |You have successfully changed your password.  |
    |If you did not change the username, contact customer support.  |
    |Thanks, |
    |EyeCare Admin|
