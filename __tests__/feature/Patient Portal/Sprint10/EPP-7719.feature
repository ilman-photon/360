
Feature: Patient Portal: Settings – Change Username – Cancel CTA
  USER STORY: As a user, I should be able to cancel and come out of the Change username screen or Change password screen or  Set-up/ Update security question screen 

  @BDDTEST-EPP-10957
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7719- Verify User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options - when user Change Username
    Given User has logged into the patient portal 
    And User has navigated to Change username screen 
    When User clicks on Cancel CTA
    Then User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options

  @BDDTEST-EPP-10958
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7719- Verify User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options - when user Change Password
    Given User has logged into the patient portal 
    And User has navigated to Change password screen 
    When User clicks on Cancel CTA
    Then User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options

  @BDDTEST-EPP-10959
  @Admin
  @P1
  @Patient_Portal
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7719- Verify User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options - when user Change Set-up/Update sec. question
    Given User has logged into the patient portal 
    And User has navigated to Set-up/ Update security question screen 
    When User clicks on Cancel CTA
    Then User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options

  @BDDTEST-EPP-10960
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7719- Verify User should be redirected back to Profile screen if ‘yes’ is selected during confirmation
    Given User has logged into the patient portal 
    And User has navigated to Change username screen or User has navigated to Change password screen or User has navigated to Set-up/ Update security question screen 
    When User clicks on Cancel CTA
    Then User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options 
    When User selects on Yes options
    Then User should redirected back to Profile screen

  @BDDTEST-EPP-10961
  @Admin
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-36_STORY_EPP-7719- Verify User should stay in the same screen  if ‘No’ is selected during confirmation
    Given User has logged into the patient portal 
    And User has navigated to Change username screen or User has navigated to Change password screen or User has navigated to Set-up/ Update security question screen 
    When User clicks on Cancel CTA
    Then User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options 
    When User selects on Yes options
    Then User should stay in the same screen  if ‘No’ is selected during confirmation
