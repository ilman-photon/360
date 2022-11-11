Feature: Patient Portal : Integration with Experian - View the set of questions from experian
  User Story: As an unverified user, I should be able to view the set of questions from Experian.

  @BDDTEST-EPP-8202
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Verify User views a list of five multiple choice questions from Experian
    Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Verify User views a list of five multiple choice questions from Experian

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And User should be prompted with a set of question from Experian
    And User views a list of five multiple choice questions from Experian

  @BDDTEST-EPP-8203
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Verify User should be able to select the answers
    Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Verify User should be able to select the answers

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And User should be prompted with a set of question from Experian
    And User views a list of five multiple choice questions from Experian
    And User should be able to select the answers

  @BDDTEST-EPP-8204
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Verify User should be able to view the option to submit them
    Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Verify User should be able to view the option to submit them

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And User should be prompted with a set of question from Experian
    And User views a list of five multiple choice questions from Experian
    And User should be able to select the answers
    And User should be able to view the option to submit them

  @BDDTEST-EPP-8205
  @Experian_Integration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Verify User should see the option to cancel the verification process
    Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Verify User should see the option to cancel the verification process 

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And User should be prompted with a set of question from Experian
    And User views a list of five multiple choice questions from Experian
    And User should be able to select the answers
    And User should be able to view the option to submit them
    And User should see the option to cancel the verification process

  @BDDTEST-EPP-8206
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - When User clicks 'Verify Identity Digitally' CTA
    Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - When User clicks 'Verify Identity Digitally' CTA

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And User should be prompted with a set of question from Experian
    And User views a list of five multiple choice questions from Experian
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-8207
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Negative Test Cases-Verify user should see the error message when the service is unavailable - When User clicks 'Verify Identity Digitally' CTA
    Scenario: EPIC_EPP-6500_STORY_EPP-6693 - Negative Test Cases-Verify user should see the error message when the service is unavailable - When User clicks 'Verify Identity Digitally' CTA

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And User should be prompted with a set of question from Experian
    And User views a list of five multiple choice questions from Experian
    And the service is unavailable
    Then user should see the appropriate error message
