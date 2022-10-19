
Feature: Patient Portal : Outstanding Payments - Pay the outstanding amount
  User Story: As a user, I should be able to pay the outstanding amount in the open invoice

   @BDDTEST-EPP-7035
  @3rd_Party_PaymentIntegration
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-4333 -To verify whether User navigates to the screen to view the list of open invoices
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    Then user lands on the screen to view the list open invoices

  @BDDTEST-EPP-7036
  @3rd_Party_PaymentIntegration
  @P2
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-4333-Verify if user  able to click on the pay option it redirect to 3rd party payment vendor
    Given user launch Patient Portal url		
    When user is logged into the application
    Then user lands on the dashboard
    And user navigated to appointment screen
    Then user schedules  appointment for Ophthalmology
    And user should see option to pay for the appointment scheduled
    When user click on the payment option 
    Then user redirect to 3rd party payment vendor

  @BDDTEST-EPP-7037
  @3rd_Party_PaymentIntegration
  @P2
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-4333 - Verify if user get payment status either success or failure
    Given user launch Patient Portal url		
    When user is logged into the application
    Then user lands on the dashboard
    And user navigated to appointment screen
    Then user schedules  appointment for Ophthalmology
    And user should see option to pay for the appointment scheduled
    When user click on the payment option 
    Then user should fill the required detail for payment (managed by the 3rd party payment vendor)
    And user should get update on payment status either sucesss or failure

  @BDDTEST-EPP-7038
  @3rd_Party_PaymentIntegration
  @P2
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-4333 - verify if System should update the invoices accordingly
    Given user launch Patient Portal url		
    When user is logged into the application
    Then user lands on the dashboard
    And user navigated to appointment screen
    Then user schedules  appointment for Ophthalmology
    And user should see option to pay for the appointment scheduled
    When user click on the payment option 
    Then user should fill the required detail for payment (managed by the 3rd party payment vendor
    Then 3rd party vender will update success message when payment is sucessfully completed 
    And user should view message“Success! Payment complete.”
    Then System should update the invoices
