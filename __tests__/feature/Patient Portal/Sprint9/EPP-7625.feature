Feature: Patient Portal : Share my Record/ Prescription/ Care plan - User clicks on deny option for the external user to access my patient records
 
  @BDDTEST-EPP-10128
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7625- Verify External user receives an email/ text message with the message “<Patient name> has denied your request.”
    Scenario: EPIC_EPP-42_STORY_EPP-7625- Verify External user receives an email/ text message with the message “<Patient name> has denied your request.”

    Given User (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code shared earlier
    When External user clicks on the secure link received via email/ text message again to access the patient records again
    Then User (patient) will receive an email/ text message with the option to approve/ deny the external user’s request of generating another access code 
    When User clicks on the option to deny the request
    Then External user receives an email/ text message with the message “<Patient name> has denied your request.”

  @BDDTEST-EPP-10129
  @P2
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7625- Verify External user should not be able to access the patient records as the link should get expired once the user (patient) rejects the request
    Scenario: EPIC_EPP-42_STORY_EPP-7625- Verify External user should not be able to access the patient records as the link should get expired once the user (patient) rejects the request

    Given User (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code shared earlier
    When External user clicks on the secure link received via email/ text message again to access the patient records again
    Then User (patient) will receive an email/ text message with the option to approve/ deny the external user’s request of generating another access code 
    When User clicks on the option to deny the request
    Then External user receives an email/ text message with the message “<Patient name> has denied your request.”
    And External user should not be able to access the patient records as the link should get expired once the user (patient) rejects the request
