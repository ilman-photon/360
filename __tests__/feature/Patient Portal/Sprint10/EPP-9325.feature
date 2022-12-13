
Feature: Patient Portal: Settings– Change Password – email communication
  User Story: As a patient, I should be able to receive an email if my preferred mode of communication is email or both, when my password is updated 

  @BDDTEST-EPP-10977
  @Admin
  @P1
  @Patient_Portal
  Scenario: EPIC_EPP-37_STORY_EPP-9325- Verify User should be navigated to change password page
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page

  @BDDTEST-EPP-10978
  @Admin
  @P1
  @Patient_Portal
  Scenario: EPIC_EPP-37_STORY_EPP-9325- Verify User change the password
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

  @BDDTEST-EPP-10979
  @Admin
  @P1
  @Patient_Portal
  @Regression
  Scenario: EPIC_EPP-37_STORY_EPP-9325- Verify when user has set preferred mode of communication as email or both then user has received email for password change
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
    When user has set preferred mode of communication as email or both 
    Then user has received email for password change
    And User Login to the email 
    And The mail will looks like with below format
    |Email subject – EyeCare portal – Password changed |
    |Email body -  |
    |Hi <First name>,  |
    |You have successfully changed your password.  |
    |If you did not change the password, contact customer support.   |
    |Thanks,  |
    |EyeCare Admin|
