
Feature: Patient Portal : Outstanding Payments - View details of an open invoice
  User Story: As a user, I should be able to view the details of an open invoice.

   @BDDTEST-EPP-7109
  @Outstanding_Payments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-4332 -To verify whether User navigates to the screen to view the list of open invoices
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    Then user lands on the screen to view the list open invoices

  @BDDTEST-EPP-7110
  @Outstanding_Payments
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-4332 -To verify whether User able to view the mentioned fields
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    Then user lands on the screen to view the list open invoices 
    When User clicks on the option to view the details of an open invoice
    Then User should be able to view the following fields
    |<Date of Service>
    |<Provider Name>
    |<Description>
    |<Total Charges>
    |<Total Allowed>
    |<Insurance Paid>
    |<Patient Paid>
    |<Balance Due>

  @BDDTEST-EPP-7111
  @Outstanding_Payments
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view an option to pay the outstanding amount
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    Then user lands on the screen to view the list open invoices 
    When User clicks on the option to view the details of an open invoice
    Then User should be able to view the following fields
    |<Date of Service>
    |<Provider Name>
    |<Description>
    |<Total Charges>
    |<Total Allowed>
    |<Insurance Paid>
    |<Patient Paid>
    |<Balance Due>

    And User should be able to view an option to pay the outstanding amount
