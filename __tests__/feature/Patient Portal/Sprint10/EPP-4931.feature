
Feature: Patient Portal : Dashboard - Patient Education Widget
  User Story: As a user, I should be able to view Patient Education widget in the dashboard.

  @BDDTEST-EPP-10715
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4931 - Verify user should be able to view Education Materials widget in the dashboard.
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Education Materials widget in the dashboard.

  @BDDTEST-EPP-10716
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4931 - Verify user should be able to view Education Materials widget in the dashboard with details
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Education Materials widget in the dashboard.
    And user should be able to view widget with details
    |Image (Image of that education material)
    |Name (Education Material name eg. Understanding Cataracts)
    |Description (Short description for that education material eg. Offer patients helpful, updated facts about this common vision problem, including how it is treated. Features easy-to-understand artwork and current information about the causes of cataracts, eye physiology,)

  @BDDTEST-EPP-10717
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4931 - Verify User should see the message “You do not have any Education Materials.” when there are no Education Materialss available
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Education Materials widget in the dashboard.
    And user should see the message “You do not have any Education Materials.” when there are no Education Materialss available

  @BDDTEST-EPP-10718
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4931 - Verify User should see options to doing some actions
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Education Materials widget in the dashboard.
    And user should see the message “You do not have any Education Materials.” when there are no Education Materialss available
