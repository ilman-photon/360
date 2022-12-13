
Feature: Patient Portal : Dashboard - Pay My Bill Widget 
  User Story: As a user, I should be able to view the Pay my Bill widget which provides the invoice details in the dashboard.

  @BDDTEST-EPP-10703
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4928 - Verify User should be able to view the Pay my Bill widget with details
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Pay my Bill widget with details
    |Invoice Number
    |Date of Service
    |Provider (Name of the provider)
    |Account Credit Balance (for that invoice)
    |Balance (for that invoice)
    |View CTA
    |Pay CTA

  @BDDTEST-EPP-10704
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4928 - Verify User should be able to view ‘View Open Invoices’ CTA which when clicked will redirect the user to View & Pay Open Invoices screen
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Pay my Bill widget with details
    |Invoice Number
    |Date of Service
    |Provider (Name of the provider)
    |Account Credit Balance (for that invoice)
    |Balance (for that invoice)
    |View CTA
    |Pay CTA
    When user click on View Open Invoice CTA
    Then user should be able to view & pay Open invoice screen

  @BDDTEST-EPP-10705
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  @Sprint10
  Scenario: EPIC_EPP-1_STORY_EPP-4928 - Verify User should be able to click on the ‘View’ CTA which when clicked will open the bill as pdf in another tab
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Pay my Bill widget with details
    |Invoice Number
    |Date of Service
    |Provider (Name of the provider)
    |Account Credit Balance (for that invoice)
    |Balance (for that invoice)
    |View CTA
    |Pay CTA
    When user click on View Open Invoice CTA
    Then user should be able to view & pay Open invoice screen
    And user should be able to click on the ‘View’ CTA which when clicked will open the bill as pdf in another tab

  @BDDTEST-EPP-10706
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  Scenario: EPIC_EPP-1_STORY_EPP-4928 - Verify User should be able to click on the ‘Pay’ CTA which when clicked will allow the user to make payment
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Pay my Bill widget with details
    |Invoice Number
    |Date of Service
    |Provider (Name of the provider)
    |Account Credit Balance (for that invoice)
    |Balance (for that invoice)
    |View CTA
    |Pay CTA
    When user click on Pay CTA
    Then user should be able to make payment

  @BDDTEST-EPP-10707
  @Dashboard_Widget
  @P1
  @Patient_Portal
  @Regression
  Scenario: EPIC_EPP-1_STORY_EPP-4928 - Verify User should be able to view copy text "You do not have any open invoices." on widget
    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Pay my Bill widget
    And user should be able to view copy text "You do not have any open invoices." on widget
