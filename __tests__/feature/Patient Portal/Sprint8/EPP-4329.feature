
Feature: Patient Portal : View Bills/ Invoices - Search invoices based on date range and invoice number
  User Story: As a user, I should be able to search for invoices based on date range and invoice number.

   @BDDTEST-EPP-7079
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range
    Given User launch Patient Portal url		
    And User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Invoice History' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    When User clicks on the ‘Invoice History'  option
    And User should be able to see the previous list invoices
    And User views the option to search/ filter invoices with in a particular date range as well as search by invoice number
    And User enters in a valid date range/ invoice number (max 50 char)
    When User clicks on the option to search for invoices within that date range
    Then User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range

  @BDDTEST-EPP-7080
  @Patient_Portal
  @Payment
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to see the lists down the invoices whose ‘Invoice Number’ are within Invoice number that matches the searched invoice number
    Given User launch Patient Portal url		
    And User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Invoice History' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    When User clicks on the ‘Invoice History'  option
    And User should be able to see the previous list invoices
    And User views the option to search/ filter invoices with in a particular date range as well as search by invoice number
    And User enters in a valid date range/ invoice number (max 50 char)
    When User clicks on the option to search for invoices within that matches that invoice number
    Then User should be able to see the lists down the invoices whose ‘Invoice Number’ are within Invoice number that matches the searched invoice number

  @BDDTEST-EPP-7081
  @Patient_Portal
  @Payment
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to see the lists down the invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’
    Given User launch Patient Portal url		
    And User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Invoice History' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    When User clicks on the ‘Invoice History'  option
    And User should be able to see the previous list invoices
    And User views the option to search/ filter invoices with in a particular date range as well as search by invoice number
    And User enters in a valid date range/ invoice number (max 50 char)
    When User clicks on the option to search for invoices within that date range/ matches that invoice number
    Then User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range/ Invoice number that matches the searched invoice number
    And User should be able to see the lists down the invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’

  @BDDTEST-EPP-7082
  @Patient_Portal
  @Payment
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to input date range only in the format of ‘MM/DD/YYYY’
    Given User launch Patient Portal url		
    And User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Invoice History' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    When User clicks on the ‘Invoice History'  option
    And User should be able to see the previous list invoices
    And User views the option to search/ filter invoices with in a particular date range as well as search by invoice number
    And User enters in a valid date range/ invoice number (max 50 char)
    When User clicks on the option to search for invoices within that date range
    Then User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range/ Invoice number that matches the searched invoice number
    And User should be able to see the lists down the invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’
    And User should be able to input date range only in the format of ‘MM/DD/YYYY’

  @BDDTEST-EPP-7083
  @Patient_Portal
  @Payment
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to view a message “We were not able to find any invoices. Please try with a different date range” (if there are no invoices for the provided date range)
    Given User launch Patient Portal url		
    And User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Invoice History' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    When User clicks on the ‘Invoice History'  option
    And User should be able to see the previous list invoices
    And User views the option to search/ filter invoices with in a particular date range as well as search by invoice number
    And User enters in a valid date range/ invoice number (max 50 char)
    When User clicks on the option to search for invoices within that date range/ matches that invoice number
    Then User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range/ Invoice number that matches the searched invoice number
    And User should be able to see the lists down the invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’
    And User should be able to input date range only in the format of ‘MM/DD/YYYY’
    When There are no invoices for the provided date range
    Then User should be able to view a message “We were not able to find any invoices. Please try with a different date range”

  @BDDTEST-EPP-7084
  @Patient_Portal
  @Payment
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to view a message “We were not able to find any invoices. Please try with a different invoice number” (if the entered invoice number does not match the user’s list of invoice number)
    Given User launch Patient Portal url		
    And User is logged into the portal
    And User lands on the dashboard screen
    And User views the ‘Invoice History' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    When User clicks on the ‘Invoice History'  option
    And User should be able to see the previous list invoices
    And User views the option to search/ filter invoices with in a particular date range as well as search by invoice number
    And User enters in a valid date range/ invoice number (max 50 char)
    When User clicks on the option to search for invoices within that matches that invoice number
    Then User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range/ Invoice number that matches the searched invoice number
    And User should be able to see the lists down the invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’
    And User should be able to input date range only in the format of ‘MM/DD/YYYY’
    When User enters invoice number does not match the user’s list of invoice number
    Then User should be able to view a message “We were not able to find any invoices. Please try with a different invoice number”
