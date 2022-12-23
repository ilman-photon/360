
@EPP_Patient_Sprint_9
@P3
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - Provided email or phone number is not in correct format
  User Story: As a user, I should be able to view a error message when the provided email or phone number is not in correct format.



  @BDDTEST-EPP-10179
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7606- Verify User should receive an email message with the following content (ECP to provide content)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see health record/ prescription/ care plan document widget in dashboard
    Then User clicks on the option to share their health record/ prescription/ care plan document
    And User views the pop-up to share their health record/ prescription/ care plan documen
    When User enters the required details and clicks on the option to share
    Then User should receive an email message with the following content (ECP to provide content)
    |Email message content:|
    When User clicks on the link on the email/ text message
    Then User should see a secure link (patient portal link)a

  @BDDTEST-EPP-10180
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7606- Verify User should receive a text message with the following content (ECP to provide content)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see health record/ prescription/ care plan document widget in dashboard
    Then User clicks on the option to share their health record/ prescription/ care plan document
    And User views the pop-up to share their health record/ prescription/ care plan documen
    When User enters the required details and clicks on the option to share
    Then User should receive a text message with the following content (ECP to provide content)
    |Text message content:|
    When User clicks on the link on the email/ text message
    Then User should see a secure link (patient portal link)

  @BDDTEST-EPP-10181
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7606- Verify User should see the message “<Health Record/ Prescription/ Care plan document> is shared successfully.” when the items has been shared

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see health record/ prescription/ care plan document widget in dashboard
    Then User clicks on the option to share their health record/ prescription/ care plan document
    And User views the pop-up to share their health record/ prescription/ care plan documen
    When User enters the required details and clicks on the option to share
    Then User should receive an email/ text message message with the following content (ECP to provide content)
    |email/ text message message content:|
    When User clicks on the link on the email/ text message
    Then User should see a secure link (patient portal link)
    And User should see the message “<Health Record/ Prescription/ Care plan document> is shared successfully.” when the items has been shared

  @BDDTEST-EPP-10182
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7606-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User enters the required details and clicks on the option to share

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see health record/ prescription/ care plan document widget in dashboard
    Then User clicks on the option to share their health record/ prescription/ care plan document
    And User views the pop-up to share their health record/ prescription/ care plan documen
    When User enters the required details and clicks on the option to share
    And the internet service is unavailable
    Then user should see the appropriate error message

  @BDDTEST-EPP-10183
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7606-Negative Test Cases-Verify user should see the error message when the service is unavailable - when User enters the required details and clicks on the option to share

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see health record/ prescription/ care plan document widget in dashboard
    Then User clicks on the option to share their health record/ prescription/ care plan document
    And User views the pop-up to share their health record/ prescription/ care plan documen
    When User enters the required details and clicks on the option to share
    And the service is unavailable
    Then user should see the appropriate error message
