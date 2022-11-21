Feature: Patient Portal : Share my Record/ Prescription/ Care plan - Download shared care plan document

  @BDDTEST-EPP-10131
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7617- Verify External user should see the health records downloaded as a pdf file in their local system/ device
    Scenario: EPIC_EPP-42_STORY_EPP-7617- Verify External user should see the health records downloaded as a pdf file in their local system/ device

    Given User (Patient) has shared the patient records to the external user’s email or phone number
    And User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see health record/ prescription/ care plan document widget in dashboard
    Then User clicks on the option to share their health record/ prescription/ care plan document
    And User views the pop-up to share their health record/ prescription/ care plan documen
    When User enters the required details and clicks on the option to share
    Then User should receive an email message with the following content (ECP to provide content)
    |Email message content:|
    When User clicks on the link on the email/ text message
    Then User should see a secure link (patient portal link)
