Feature: Patient Portal : Integration with Experian - User verification by other verification methods
  User Story: As an unverified user, I should be able to verify myself by other verification methods and access the portal completely.

  @BDDTEST-EPP-8215
  @Experian_Integration
  @Patient_Portal
  @Regression
  @Sprint8
  Scenario: EPIC_EPP-6500_STORY_EPP-7261- Verify ECP staff or ECP customer care person should be able to verify the user and update the same in their System (E360+)
    Scenario: EPIC_EPP-6500_STORY_EPP-7261- Verify ECP staff or ECP customer care person should be able to verify the user and update the same in their System (E360+)

    Given User is an unverified user
    And User is logged into the portal
    When user lands on the dashboard screen
    Then User should be able to view the 'Verify Identity Digitally' CTA
    When User clicks 'Verify Identity Digitally' CTA
    And User has already tried and failed to digitally verify themselves 2 times
    And User tries to digitally verify themselves for the 3rd time
    Then User should see the following message “You cannot digitally verify yourself from the portal. Please reach out to our customer care support <Number> or visit any of our ECP office locations to verify yourselves.” (ECP to provide verbiage)
    When User visit any of the ECP office or call the customer care number to verify themselves
    Then ECP staff or ECP customer care person should be able to verify the user and update the same in their System (E360+)
    And User should be able to login to the Patient Portal
