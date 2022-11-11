Feature: Patient Portal : Integration with Experian - Click on the option to digitally verify 
  User Story: As an unverified user, I should be able to click on the option to digitally verify myself.

  @BDDTEST-EPP-8199
  @Experian_Integration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6692 - Verify User should be prompted with a set of question from Experian
    Scenario: EPIC_EPP-6500_STORY_EPP-6692 - Verify User should be prompted with a set of question from Experian

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And User should be prompted with a set of question from Experian

  @BDDTEST-EPP-8200
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6692 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - User clicks 'Verify Identity Digitally' CTA
    Scenario: EPIC_EPP-6500_STORY_EPP-6692 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - User clicks 'Verify Identity Digitally' CTA

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-8201
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6692 - Negative Test Cases-Verify user should see the error message when the service is unavailable - User clicks 'Verify Identity Digitally' CTA
    Scenario: EPIC_EPP-6500_STORY_EPP-6692 - Negative Test Cases-Verify user should see the error message when the service is unavailable - User clicks 'Verify Identity Digitally' CTA

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And the service is unavailable
    Then user should see the appropriate error message
