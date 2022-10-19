
Feature: Patient Portal : Outstanding Payments - Navigation
  User Story: As a user, I should be able to view the option (Navigation) to view open invoices.

   @BDDTEST-EPP-7070
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4970 - Verify User lands on the screen to view the list open invoices
    Given User launch Patient Portal url		
    And User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Invoice History' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    When User clicks on the ‘View & Pay Open Invoices'  option
    Then User lands on the screen to view the list open invoices
