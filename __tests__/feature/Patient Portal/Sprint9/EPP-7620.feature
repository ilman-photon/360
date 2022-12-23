Feature: Patient Portal : Share my Record/ Prescription/ Care plan - View screen awaiting patient's approval to view patient's record again
 
  @BDDTEST-EPP-10095
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7620- Verify External user should be redirected to that secure link (patient portal URL)

    Given User (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code
    When External user clicks on the secure link received via email/ text message 
    Then External user should be redirected to that secure link (patient portal URL)

  @BDDTEST-EPP-10096
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7620- Verify User should be able to see "You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval."

    Given User (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code
    When External user clicks on the secure link received via email/ text message 
    Then External user should be redirected to that secure link (patient portal URL)
    And External user should be able to see "You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval."

  @BDDTEST-EPP-10097
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7620- Verify External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”

    Given User (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code
    When External user clicks on the secure link received via email/ text message 
    Then External user should be redirected to that secure link (patient portal URL)
    And External user should be able to see "You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval."
    And External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”

  @BDDTEST-EPP-10098
  @P2
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7620- Verify External user should see the option to enter the access code is disabled

    Given User (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code
    When External user clicks on the secure link received via email/ text message 
    Then External user should be redirected to that secure link (patient portal URL)
    And External user should be able to see "You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval."
    And External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”
    When User has not approved the request for share another access code
    Then External user should see the option to enter the access code is disabled

  @BDDTEST-EPP-10099
  @P2
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7620- Verify External user should see the option to resend the access code is disabled

    Given User (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code
    When External user clicks on the secure link received via email/ text message 
    Then External user should be redirected to that secure link (patient portal URL)
    And External user should be able to see "You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval."
    And External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”
    When User has not approved the request for share another access code
    Then External user should see the option to resend the access code is disabled

  @BDDTEST-EPP-10100
  @P2
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7620- Verify External user should see the option to submit the access code is disabled

    Given User (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code
    When External user clicks on the secure link received via email/ text message 
    Then External user should be redirected to that secure link (patient portal URL)
    And External user should be able to see "You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval."
    And External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”
    When User has not approved the request for share another access code
    Then External user should see the option to submit the access code is disabled

  @BDDTEST-EPP-10101
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7620- Verify User should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request

    Given User (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code
    When External user clicks on the secure link received via email/ text message 
    Then External user should be redirected to that secure link (patient portal URL)
    And External user should be able to see ""You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval.""
    And External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”
    When User has approved the request for share another access code
    Then External user should see the option to submit the access code is enabled
    And User should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request
