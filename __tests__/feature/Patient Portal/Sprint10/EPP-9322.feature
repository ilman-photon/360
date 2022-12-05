
Feature: Patient Portal: Settings – Input new password option 
  USER STORY: As a user, I should be able to input the new password of patient portal  

  @BDDTEST-EPP-10945
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9322- Verify User should be navigated to change password page
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page

  @BDDTEST-EPP-10946
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9322- Verify User change the password
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

  @BDDTEST-EPP-10947
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9322- Verify User should unmask the entered password
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
    Then User should see Password has been updated success message

  @BDDTEST-EPP-10948
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-37_STORY_EPP-9322- Verify User is able to view Cancel Button
    Given User launch Patient Portal url		
    And user is logged into patient portal
    Then user lands on the Dashboard screen
    Then user navigates to change password page
    Then user should see Update Password Page
    And User should see New Password and Confirm New Password fields
    When User should fill the valid New Password and Confirm New Password fields
    Then user should see mask the entered password along with an option to unmask it by default
    And User should see Update password button and Cancel Button
