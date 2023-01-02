@BDDSTORY-EPP-7204
@EPP_Patient_Sprint_8
@EPP_Sprint_8
@P2
@PPP_Phase_2
@Patient_Portal
@Payment
Feature: Patient Portal : Outstanding Payments - Search invoices based on date range and invoice number
  User Story: As a user, I should be able to search for invoices based on date range and invoice number.

  GIVEN
  User is logged into the portal
  And
  User is logged in as patient
  And
  User has past invoices

  WHEN
  User is on open invoices tab

  THEN
  User should be able to view the option to search/filter invoices with in a particular date range
  And
  User should be able to view the option to search/filter invoices by invoice number
  And
  User should be able to enter in a valid date range to initiate the search
  And
  System allows date range only in the format of ‘MM/DD/YYYY’ otherwise throws the following error “Incorrect date format”.
  And
  User should be able to enter in an invoice number (max 50 char) to initiate the search
  And
  User should be able to initiate search to view list of open invoices whose ‘Date of Service’ are within that date range
  And
  User should be able to initiate search to view list of open invoices whose Invoice number that matches the searched invoice number
  And
  System lists down the invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’
  And
  User should be able to view a message “We were not able to find any invoices. Please try with a different date range” when there are no invoices for the provided date range
  And
  User should be able to view a message “We were not able to find any invoices. Please try with a different invoice number” when the entered invoice number does not match the user’s list of invoice number

  @BDDTEST-EPP-8171
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To verify if  User  open invoices tab
    Scenario: To verify if  User  open invoices tab
    
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    Then user should see invoice

  @BDDTEST-EPP-8172
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To verify if  User able to view the option to search/filter invoices with in a particular date range
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    Then user should view the option to  search/filter invoices with data range

  @BDDTEST-EPP-8173
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To verify if  User able to view the option to search/filter invoices by invoice number
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    Then user should view the option to  search/filter invoices by invoice number

  @BDDTEST-EPP-8174
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To verify if  User able to enter  a valid date range to initiate the search
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    Then user should enter a valid data range to intiate the search

  @BDDTEST-EPP-8175
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To verify if  User able to enter  a valid date range and System allows date range in the format of ‘MM/DD/YYYY’
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    Then user should enter a valid data range 
    And System allows date range in the format of ‘MM/DD/YYYY’

  @BDDTEST-EPP-8176
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To verify the error message when invalid date format other than ‘MM/DD/YYY
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    Then user enter a invalid data range 
    And System throws the error meassage when invalid  date format other than ‘MM/DD/YYYY’ Incorrect date format”

  @BDDTEST-EPP-8177
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To verify if  User able to enter invoice number maximum of  50 character
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    Then user should enter invoice number maximux of 50 character

  @BDDTEST-EPP-8178
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To verify if User able to initiate search to list of open invoices whose ‘Date of Service’ are within that date range
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    When user should search list of open invoices 
    Then 'Date of service' are within that date range

  @BDDTEST-EPP-8179
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To verify if User able to initiate search to view list of open invoices whose Invoice number that matches the searched invoice number
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    When user should search list of open invoices 
    Then Invoice number should matches the searched invoice number

  @BDDTEST-EPP-8180
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To verify if User able to view invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    When user should search list of open invoices 
    Then Invoice ordered by recent ones at top 
    And system should display Date of service in descending order

  @BDDTEST-EPP-8181
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To check message when there are no invoices for the provided date range
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    When user should search list of open invoices 
    And there are no invoices for the provided date range
    Then user should see error message “We were not able to find any invoices. Please try with a different date range”

  @BDDTEST-EPP-8182
  @OutstandingPayments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-7204 -To check message when the entered invoice number does not match the user’s list of invoice number
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user  has past invoices
    And user open invoices tab
    When user should search list of open invoices 
    And user entered invoice number does not match the user’s list of invoice number
    Then user should see error message “We were not able to find any invoices. Please try with a different invoice number”
