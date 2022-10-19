
Feature: Patient Portal : View Bills/ Invoices - Download invoice
  User Story: As a user, I should be able to download each invoice

    @BDDTEST-EPP-7075
  @Patient_Portal
  @Payment
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4331 - Verify User should be able to see the invoice downloaded as a pdf document to their local system/ devices
    Given User launch Patient Portal url		
    And User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Invoice History' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    When User clicks on the ‘Invoice History'  option
    And User should be able to see the previous list invoices
    And User view the details of each invoice
    When User clicks on the option to download the invoice
    Then User should be able to see the invoice downloaded as a pdf document to their local system/ devices
