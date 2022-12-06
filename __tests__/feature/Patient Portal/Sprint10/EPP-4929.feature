Feature: Patient Portal : Dashboard - Test / Lab Reports Widget 
  User Story: As a user, I should be able to view Test/ Lab reports widget in the dashboard.

  @BDDTEST-EPP-10709
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4929 - Verify user should be able to view Test/ Lab reports widget in the dashboard with details
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Test/ Lab reports widget in the dashboard.
    And user should be able to view widget with details
    |Test Name
    |Ordered by
    |Test Date
    |Test Status

  @BDDTEST-EPP-10710
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4929 - Verify user should see the message “You do not have any test/lab reports.” when there are no test/lab reports available
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Test/ Lab reports widget in the dashboard.
    And user should see the message “You do not have any test/lab reports.” when there are no test/lab reports available
