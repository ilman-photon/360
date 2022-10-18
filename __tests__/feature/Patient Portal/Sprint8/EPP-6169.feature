
Feature: Patient Portal : Messaging - Navigation
  User Story: As a user, I should be able to view the messaging option (Navigation)

   @BDDTEST-EPP-6699
  @Provider_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6169-Verify User should be able to navigate to the Messaging center
    Given User logged in to the patient portal 
    And User lands on the dashboard screen
    And User views the 'Message Center' menu present as part of the global header
    And User Clicks on Message Center Option

  @BDDTEST-EPP-6700
  @Provider_Portal
  @Sprint8
  Scenario: EPIC_EPP-23_STORY_EPP-6169-Verify User should be able to click on Message Center Option
    Given User logged in to the patient portal 
    And User lands on the dashboard screen
    And User views the 'Message Center' menu present as part of the global header
