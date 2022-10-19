
Feature: Patient Portal : View Bills/ Invoices - Navigation
  User Story: As a user, I should be able to view the option (Navigation) to view old invoices.

  @BDDTEST-EPP-7066
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4328 - Verify whether the user is able to navigate the Dashboard page
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user should navigates to the dashboard page

  @BDDTEST-EPP-7067
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4328 - Verify whether the user is able to navigate the Pay My Bill menu option.
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should navigates to <Pay My Bill> menu part of the global header
    And user should see the <Pay My Bill> menu

  @BDDTEST-EPP-7068
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4328 - Verify whether the user is able to view the Invoice History submenu option in Pay My Bill main menu
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    Then user clicks on <Pay My Bill> menu
    And user should see the <Invoice-History> sub-menu

  @BDDTEST-EPP-7069
  @P1
  @PPP_Phase_2
  @Patient_Portal
  @Payment
  @Sprint8
  Scenario: EPIC_EPP-54_STORY_EPP-4328 - Verify whether the user is able to navigate the View Bills/Invoices page from dashboard
    Given user launch the browser and enter the patient portal url
    When user enter valid username or phone number and password
    And user click on Sign in button.
    And user lands the dashboard page
    And user should see the <Pay My Bill> menu part of the global header
    And user clicks on <Pay My Bill> menu
    When user clicks on <Invoice-History> sub-menu
    And user should navigates to Bills/Invoice History page
    And user should should see the list of Bills or invoices
