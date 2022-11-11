
Feature: Patient Portal: Top Header – Schedule Appointment CTA
  User Story: As a user, I should be able to view schedule appointment CTA in top header for users logged in as patients and non-logged in users 

  @BDDTEST-EPP-8425
  @Menu
  @P2
  @Patient_Portal
  Scenario: EPIC_EPP-7205_STORY_EPP-7211 - Verify User should be able to view CTA for schedule appointment in top header
    Given User launch Patient Portal url		
    And User is logged into the portal as admin
    And user lands on the Dashboard screen
    And User should be able to view CTA for schedule appointment in top header

  @BDDTEST-EPP-8426
  @Menu
  @P1
  @Patient_Portal
  @Regression
  Scenario: EPIC_EPP-7205_STORY_EPP-7211 - Verify User should be able to navigated to schedule appointment screen - Logged in as User
    Given User launch Patient Portal url		
    And User is logged into the portal as admin
    And user lands on the Dashboard screen
    And User should be able to view CTA for schedule appointment in top header
    When User clicks on schedule appointment CTA
    Then User should be able to navigated to schedule appointment screen

  @BDDTEST-EPP-8427
  @Menu
  @P1
  @Patient_Portal
  @Regression
  Scenario: EPIC_EPP-7205_STORY_EPP-7211 - Verify User should be able to navigated to schedule appointment screen - as Guest User
    Given User launch Patient Portal url	
    And User lands on the Dashboard screen
    And User should be able to view CTA for schedule appointment in top header
    When User clicks on schedule appointment CTA
    Then User should be able to navigated to schedule appointment screen
