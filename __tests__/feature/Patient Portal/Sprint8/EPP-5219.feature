
Feature: Patient Portal : Outstanding Payments - View list of open invoices
  User Story: As a user, I should be able to view the list of open invoices.

    @BDDTEST-EPP-6917
  @Outstanding_Payments
  @P2
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-5219 -To verify whether User navigates to the screen to view the list of open invoices
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    Then user lands on the screen to view the list open invoices

  @BDDTEST-EPP-6918
  @Outstanding_Payments
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the list of open invoices ordered by recent ones at top
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    When user lands on the screen to view the list open invoices 
    Then User should be able to view the list of open invoices ordered by recent ones at top

  @BDDTEST-EPP-6919
  @Outstanding_Payments
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the “Invoice Number” against each invoice
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    When user lands on the screen to view the list open invoices 
    Then User should be able to view the list of open invoices ordered by recent ones at top
    And User should be able to view the “Invoice Number” against each invoice

  @BDDTEST-EPP-6920
  @Outstanding_Payments
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the “Date of Service” against each invoice
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    When user lands on the screen to view the list open invoices 
    Then User should be able to view the list of open invoices ordered by recent ones at top
    And User should be able to view the “Date of Service” against each invoice

  @BDDTEST-EPP-6921
  @Outstanding_Payments
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the “Account Credit Balance” against each invoice
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    When user lands on the screen to view the list open invoices 
    Then User should be able to view the list of open invoices ordered by recent ones at top
    And User should be able to view the “Account Credit Balance” against each invoice

  @BDDTEST-EPP-6922
  @Outstanding_Payments
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the “Patient Due” against each invoice
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    When user lands on the screen to view the list open invoices 
    Then User should be able to view the list of open invoices ordered by recent ones at top
    And User should be able to view the “Patient Due” against each invoice

  @BDDTEST-EPP-6923
  @Outstanding_Payments
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to see an option to view details of each open invoice
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    When user lands on the screen to view the list open invoices 
    Then User should be able to view the list of open invoices ordered by recent ones at top
    And User should be able to see an option to view details of each open invoice

  @BDDTEST-EPP-6924
  @Outstanding_Payments
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the option to pay the outstanding amount against each open invoice
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    When user lands on the screen to view the list open invoices 
    Then User should be able to view the list of open invoices ordered by recent ones at top
    And User should be able to view the option to pay the outstanding amount against each open invoice

  @BDDTEST-EPP-6925
  @Outstanding_Payments
  @P1
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the message “You do not have any open invoices.”
    Given user launch Patient Portal url		
    When user is logged in to the application
    And user lands on the dashboard screen
    And user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header
    And user clicks on the ‘View & Pay Open Invoices'  option
    Then user should able to view the message “You do not have any open invoices.” when there are no open invoices for the user

 