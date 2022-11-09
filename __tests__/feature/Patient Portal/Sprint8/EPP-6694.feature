Feature: Patient Portal : Integration with Experian - Answer the set of questions from experian
  User Story: As an unverified user, I should be able to answer the set of questions from Experian.

  @BDDTEST-EPP-8208
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6694 - Verify User should be able to submit them
    Scenario: EPIC_EPP-6500_STORY_EPP-6694 - Verify User should be able to submit them

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And User should be prompted with a set of question from Experian
    And User views a list of five multiple choice questions from Experian
    When User should be able to valid select answers for those 5 questions 
    And User should be able to submit them

  @BDDTEST-EPP-8209
  @Experian_Integration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6694 - Verify User should see the inline error message “This field is required”
    Scenario: EPIC_EPP-6500_STORY_EPP-6694 - Verify User should see the inline error message “This field is required”

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And User should be prompted with a set of question from Experian
    And User views a list of five multiple choice questions from Experian
    When User has not provided answers to all the 5 questions
    And User should be able to submit them
    Then User should see the inline error message “This field is required”

  @BDDTEST-EPP-8210
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6694 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User click on submit
    Scenario: EPIC_EPP-6500_STORY_EPP-6694 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User click on submit

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And User should be prompted with a set of question from Experian
    And User views a list of five multiple choice questions from Experian
    When User should be able to valid select answers for those 5 questions 
    And User should be able to submit them
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-8211
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-6694 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User click on submit
    Scenario: EPIC_EPP-6500_STORY_EPP-6694 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User click on submit

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    Then User should be navigated to the Experian digital verification process
    And User should be able to see the message “New users will have to verify themselves digitally in order to access all the features in the portal.”
    And User should be prompted with a set of question from Experian
    And User views a list of five multiple choice questions from Experian
    When User should be able to valid select answers for those 5 questions 
    And User should be able to submit them
    And the service is unavailable
    Then user should see the appropriate error message
