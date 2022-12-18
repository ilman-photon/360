Feature: Patient Portal : Dashboard - Health Records Widget
  User Story: As a user, I should be able to view Health Record widget in the dashboard.

  @BDDTEST-EPP-10711
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4930 - Verify user should be able to view Health Record widget in the dashboard.
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Health Record widget in the dashboard.

  @BDDTEST-EPP-10712
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4930 - Verify user should be able to view Health Record widget in the dashboard with details
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Health Record widget in the dashboard.
    And user should be able to view widget with details
    |Health record name
    |Last updated date

  @BDDTEST-EPP-10713
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4930 - Verify User should see the message “You do not have any health record.” when there are no health records available
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Health Record widget in the dashboard.
    And user should see the message “You do not have any health record.” when there are no health records available

  @BDDTEST-EPP-10714
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4930 - Verify User should see options to doing some actions
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Health Record widget in the dashboard.
    And user should see the message “You do not have any health record.” when there are no health records available
