
Feature: Patient Portal : 3rd Party Payment Integration - Payment for OPH appointments
  User Story: As a user, I should be able to make payment for Ophthalmology appointments using 3rd party payment systems
  @BDDTEST-EPP-7014
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6491 - verify if user able to view the confirmation for OPH appointment in upcoming appointment screen
    Given user launch Patient Portal url		
    When user is logged into the application
    Then user lands on the dashboard
    And user navigated to appointment screen
    Then user schedules  appointment for Ophthalmology
    And user should see the appointment confirmation date and time and doctor name in the  upcoming appointment screen

  @BDDTEST-EPP-7015
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6491 - verify if user able to view option to pay for the appointment scheduled
    Given user launch Patient Portal url		
    When user is logged into the application
    Then user lands on the dashboard
    And user navigated to appointment screen
    Then user schedules  appointment for Ophthalmology
    And user should see option to pay for the appointment scheduled

  @BDDTEST-EPP-7016
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6491 - verify if user  able to click on the pay option it redirect to 3rd party payment vendor
    Given user launch Patient Portal url		
    When user is logged into the application
    Then user lands on the dashboard
    And user navigated to appointment screen
    Then user schedules  appointment for Ophthalmology
    And user should see option to pay for the appointment scheduled
    When user click on the payment option 
    Then user redirect to 3rd party payment vendor

  @BDDTEST-EPP-7017
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6491 - verify if user  able to fill the payment required details (managed by the 3rd party payment vendor)
    Given user launch Patient Portal url		
    When user is logged into the application
    Then user lands on the dashboard
    And user navigated to appointment screen
    Then user schedules  appointment for Ophthalmology
    And user should see option to pay for the appointment scheduled
    When user click on the payment option 
    Then user should fill the required detail for payment (managed by the 3rd party payment vendor

  @BDDTEST-EPP-7018
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6491 - verify if 3rd party vendor will update if the payment is success or failure
    Given user launch Patient Portal url		
    When user is logged into the application
    Then user lands on the dashboard
    And user navigated to appointment screen
    Then user schedules  appointment for Ophthalmology
    And user should see option to pay for the appointment scheduled
    When user click on the payment option 
    Then user should fill the required detail for payment (managed by the 3rd party payment vendor
    And payment is sucessfully completed 3rd party vender will update sucesss or failure

  @BDDTEST-EPP-7019
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6491 - verify if user able to view success message when payement is successfully completed
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

  @BDDTEST-EPP-7020
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Regression
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

  @BDDTEST-EPP-7021
  @3rd_Party_PaymentIntegration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-57_STORY_EPP-6491 - verify if System should not show option to pay after the payement successfully completed
    Given user launch Patient Portal url		
    When user is logged into the application
    Then user lands on the dashboard
    And user navigated to appointment screen
    Then user schedules  appointment for Ophthalmology
    And user should see option to pay for the appointment scheduled
    When user click on the payment option 
    Then user should fill the required detail for payment (managed by the 3rd party payment vendor
    Then 3rd party vender will update failure message when payment is sucessfully completed
    And system should not show option to pay after the payement successfully completed in upcoming appointment screen
