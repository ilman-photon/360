
Feature: Patient Portal : View Bills/ Invoices - View details of a invoice
  User Story: As a user, I should be able to view the details of each invoice.

  @BDDTEST-EPP-7098
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to navigate the Dashboard page
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page

  @BDDTEST-EPP-7099
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to navigate the Pay My Bill menu option.
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should navigates to <Pay My Bill> menu part of the global header
    And user should see the <Pay My Bill> menu

  @BDDTEST-EPP-7100
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to view the Invoice History submenu option in Pay My Bill main menu
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    Then user clicks on <Pay My Bill> menu
    And user should see the <Invoice-History> sub-menu

  @BDDTEST-EPP-7101
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to view list of previous invoices in the history page
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    And user clicks on <Pay My Bill> menu
    When user clicks on <Invoice-History> sub-menu
    And user should navigates to Bills/Invoice History page
    And user should should see the list of previous Bills or invoices if available

  @BDDTEST-EPP-7102
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user able to view the list of previous invoices ordered by recent ones at top
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    And user clicks on <Pay My Bill> menu
    When user clicks on <Invoice-History> sub-menu
    And user should navigates to Bills/Invoice History page
    And user should should see the list of previous Bills or invoices
    And user should view the list of previous invoices ordered by recent ones at top

  @BDDTEST-EPP-7103
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to view the details of each invoice along with invoice number
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    And user clicks on <Pay My Bill> menu
    When user clicks on <Invoice-History> sub-menu
    And user should navigates to Bills/Invoice History page
    And user should should see the list of previous Bills or invoices
    And user should view the list of previous invoices ordered by recent ones at top
    And user should view the details of each invoice
    And user should see the <Invoice Number> for each invoice
    And user should be able to view the <Date of Service> for each invoice

  @BDDTEST-EPP-7104
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to view the option to search invoices within a date range
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    And user clicks on <Pay My Bill> menu
    When user clicks on <Invoice-History> sub-menu
    And user should navigates to Bills/Invoice History page
    And user should should see the list of previous Bills or invoices
    And user should view the list of previous invoices ordered by recent ones at top
    And user should see the option to search invoices within a date range

  @BDDTEST-EPP-7105
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to see an option to view the bill against each invoice
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    And user clicks on <Pay My Bill> menu
    When user clicks on <Invoice-History> sub-menu
    And user should navigates to Bills/Invoice History page
    And user should should see the list of previous Bills or invoices
    And user should view the list of previous invoices ordered by recent ones at top
    And user is able to see an option to view the bill against each invoice
    Then user clicks on View button
    And user should navigates to another tab with the bill opened in pdf format like super bill

  @BDDTEST-EPP-7106
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user able to see an option to download each invoice
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    And user clicks on <Pay My Bill> menu
    When user clicks on <Invoice-History> sub-menu
    And user should navigates to Bills/Invoice History page
    And user should should see the “You have no previous invoices.” message when there are no previous invoices for the user

  @BDDTEST-EPP-7107
  @P2
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to view the "You have no previous invoices.” message in the history page.
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    And user clicks on <Pay My Bill> menu
    When user clicks on <Invoice-History> sub-menu
    And user should navigates to Bills/Invoice History page
    And user should should see the list of previous Bills or invoices
    And user should view the list of previous invoices ordered by recent ones at top
    And user should see the option to search invoices within a date range
    And user should see the <we are not able find any invoices with in the date range> message if there are no invoice with in the date range.

  @BDDTEST-EPP-7108
  @P2
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4326 - Verify whether the user is able to view the we are not able find any invoices with in the date range” message in the history page.
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    And user clicks on <Pay My Bill> menu
    When user clicks on <Invoice-History> sub-menu
    And user should navigates to Bills/Invoice History page
    And user should should see the list of previous Bills or invoices
    And user should view the list of previous invoices ordered by recent ones at top
    And user should see the option to search invoices within a date range
    And user should see the <we are not able find any invoices with in the date range> message if there are no invoice with in the date range.
