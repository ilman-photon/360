Feature: Patient Portal : Integration with Experian - View error message if user has failed the verification process more than 2 times
  User Story: As an unverified user, I should see an error message and not be able to digitally verify myself if I had failed the verification process more than 2 times. (ECP to confirm the number of times an user can try to digitally verify themselves using Experian - 2)

  @BDDTEST-EPP-8212
  @Experian_Integration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-7253- Verify User should see “You cannot digitally verify yourself from the portal. Please reach out to our customer care support <Number> or visit any of our ECP office locations to verify yourselves.” (ECP to provide verbiage)
    Scenario: EPIC_EPP-6500_STORY_EPP-7253- Verify User should see “You cannot digitally verify yourself from the portal. Please reach out to our customer care support <Number> or visit any of our ECP office locations to verify yourselves.” (ECP to provide verbiage)

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    And User has already tried and failed to digitally verify themselves 2 times
    And User tries to digitally verify themselves for the 3rd time
    Then User should see the following message “You cannot digitally verify yourself from the portal. Please reach out to our customer care support <Number> or visit any of our ECP office locations to verify yourselves.” (ECP to provide verbiage)

  @BDDTEST-EPP-8213
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-6694 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User tries to digitally verify themselves for the 3rd time
    Scenario: EPIC_EPP-26_STORY_EPP-6694 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User tries to digitally verify themselves for the 3rd time

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-8214
  @Experian_Integration
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-26_STORY_EPP-6694 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User tries to digitally verify themselves for the 3rd time
    Scenario: EPIC_EPP-26_STORY_EPP-6694 - Negative Test Cases-Verify user should see the error message when the service is unavailable - when User tries to digitally verify themselves for the 3rd time

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    And the service is unavailable
    Then user should see the appropriate error message
