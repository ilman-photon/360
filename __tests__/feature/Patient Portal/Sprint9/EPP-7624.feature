Feature: Patient Portal : Share my Record/ Prescription/ Care plan - User clicks on approve option for the external user to access my patient records

  @BDDTEST-EPP-10126
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7624- Verify External user receives an email/ text message with the message “<Patient name> has approved your request. Please access the <patient record> from using the following access code <access code>.”
    Scenario: EPIC_EPP-42_STORY_EPP-7624- Verify User should be able to click on the option to approve the request of generating another access code

    Given User (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code shared earlier
    When External user clicks on the secure link received via email/ text message again to access the patient records again
    Then User (patient) will receive an email/ text message with the option to approve/ deny the external user’s request of generating another access code 
    When User clicks on the option to approve the request of generating another access code
    Then External user receives an email/ text message with the message “<Patient name> has approved your request. Please access the <patient record> from using the following access code <access code>.”

  @BDDTEST-EPP-10127
  @P1
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7624- Verify External user should be able to access the patient records
    Scenario: EPIC_EPP-42_STORY_EPP-7624- Verify External user should be able to access the patient records

    Given User (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code shared earlier
    When External user clicks on the secure link received via email/ text message again to access the patient records again
    Then User (patient) will receive an email/ text message with the option to approve/ deny the external user’s request of generating another access code 
    When User clicks on the option to approve the request of generating another access code
    Then External user receives an email/ text message with the message “<Patient name> has approved your request. Please access the <patient record> from using the following access code <access code>.” 
    And External user should be able to access the patient records
