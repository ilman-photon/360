
Feature: Patient Portal : View Bills/ Invoices - View list of invoices
  User Story: As a user, I should be able to view the screen that lists my invoices.

  @BDDTEST-EPP-7087
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4326 - Verify whether the user is able to navigate the Dashboard page
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page

  @BDDTEST-EPP-7088
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4326 - Verify whether the user is able to navigate the Pay My Bill menu option.
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should navigates to <Pay My Bill> menu part of the global header
    And user should see the <Pay My Bill> menu

  @BDDTEST-EPP-7089
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4326 - Verify whether the user is able to view the Invoice History submenu option in Pay My Bill main menu
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    Then user clicks on <Pay My Bill> menu
    And user should see the <Invoice-History> sub-menu

  @BDDTEST-EPP-7090
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4326 - Verify whether the user is able to view the list of previous invoices in the history page
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    And user clicks on <Pay My Bill> menu
    When user clicks on <Invoice-History> sub-menu
    And user should navigates to Bills/Invoice History page
    And user should should see the list of previous Bills or invoices if available

  @BDDTEST-EPP-7091
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4326 - Verify whether the user able to view the list of previous invoices ordered by recent ones at top
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

  @BDDTEST-EPP-7092
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4326 - Verify whether the user is able to view the details of each invoice
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
    Then user clicks on Invoice
    And user should view the details of each invoice

  @BDDTEST-EPP-7093
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4326 - Verify whether the user is able to view the option to search invoices within a date range
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

  @BDDTEST-EPP-7094
  @P2
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4326 - Verify whether the user is able to view the "You have no previous invoices.” message in the history page.
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    And user clicks on <Pay My Bill> menu
    When user clicks on <Invoice-History> sub-menu
    And user should navigates to Bills/Invoice History page
    And user should should see the “You have no previous invoices.” message when there are no previous invoices for the user

  @BDDTEST-EPP-7095
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
    And user should should see the “You have no previous invoices.” message when there are no previous invoices for the user
