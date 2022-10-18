
Feature: Patient Portal : 3rd Party Payment Integration - Payment for open invoices
  User Story: As a user, I should be able to make payment for Outstanding payments using 3rd party payment systems

  @BDDTEST-EPP-6931
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6492 -To verify whether User navigates to the screen to view the list of open invoices
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    Then user lands on the screen to view the list open invoices

  @BDDTEST-EPP-6932
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6492 - verify if 3rd party vendor will update if the payment is success or failure
    Given user launch Patient Portal url		
    When user is logged into the application
    Then user lands on the dashboard
    And user navigated to appointment screen
    Then user schedules  appointment for Ophthalmology
    And user should see option to pay for the appointment scheduled
    When user click on the payment option 
    Then user should fill the required detail for payment (managed by the 3rd party payment vendor
    And payment is sucessfully completed 3rd party vender will update sucesss or failure

  @BDDTEST-EPP-6933
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6492 - verify if user able to view success message when payement is successfully completed
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

  @BDDTEST-EPP-6934
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6491 - verify if user able to view failure message when payement is not successfully completed
    Given user launch Patient Portal url		
    When user is logged into the application
    Then user lands on the dashboard
    And user navigated to appointment screen
    Then user schedules  appointment for Ophthalmology
    And user should see option to pay for the appointment scheduled
    When user click on the payment option 
    Then user should fill the required detail for payment (managed by the 3rd party payment vendor
    Then 3rd party vender will update failure message when payment is not sucessfully completed
    And user should view message “Failure! Please try again.”

  @BDDTEST-EPP-6935
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6492 - verify if System should update the invoices accordingly

