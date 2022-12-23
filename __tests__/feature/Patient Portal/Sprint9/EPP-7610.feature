Feature: Patient Portal : Share my Record/ Prescription/ Care plan - View screen to enter the access code

  @BDDTEST-EPP-10566
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7610- Verify External user should be redirected to patient portal URL with following message “Please enter the access code that you would have received separately to access the Patient records.”

    Given User (Patient) has shared the patient records to the external user’s email or phone number
    And External user received a secure link (patient portal link) with the email/ text message
    And External user should receive another email/ text message with the access code
    When External user clicks on the secure link received via email or phone number
    Then External user should be redirected to patient portal URL with following message “Please enter the access code that you would have received separately to access the Patient records.”

  @BDDTEST-EPP-10567
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7610- Verify External user should see the option to enter the access code code

    Given User (Patient) has shared the patient records to the external user’s email or phone number
    And External user received a secure link (patient portal link) with the email/ text message
    And External user should receive another email/ text message with the access code
    When External user clicks on the secure link received via email or phone number
    Then External user should be redirected to patient portal URL with following message “Please enter the access code that you would have received separately to access the Patient records.”
    And External user should see the option to enter the access code code

  @BDDTEST-EPP-10568
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7610- Verify External user should see the option to resend the access code

    Given User (Patient) has shared the patient records to the external user’s email or phone number
    And External user received a secure link (patient portal link) with the email/ text message
    And External user should receive another email/ text message with the access code
    When External user clicks on the secure link received via email or phone number
    Then External user should be redirected to patient portal URL with following message “Please enter the access code that you would have received separately to access the Patient records.”
    And External user should see the option to enter the access code code
    And External user should see the option to resend the access code

  @BDDTEST-EPP-10569
  @P1
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7610- Verify External user should see the option to submit the access code

    Given User (Patient) has shared the patient records to the external user’s email or phone number
    And External user received a secure link (patient portal link) with the email/ text message
    And External user should receive another email/ text message with the access code
    When External user clicks on the secure link received via email or phone number
    Then External user should be redirected to patient portal URL with following message “Please enter the access code that you would have received separately to access the Patient records.”
    And External user should see the option to enter the access code code
    And External user should see the option to resend the access code
    And External user should see the option to submit the access code
