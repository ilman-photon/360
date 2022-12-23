Feature: Patient Portal : Share my Record/ Prescription/ Care plan - User receives email/ text message to approve/ deny the external user's request to access patient records
  
  @BDDTEST-EPP-10123
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-7623- Verify user should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request

    Given user (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code
    When External user clicks on the secure link received via email/ text message 
    Then External user should be redirected to that secure link (patient portal URL)
    And External user should be able to see ""You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval.""
    And External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”
    When user has approved the request for share another access code
    Then External user should see the option to submit the access code is enabled
    And user should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request

  @BDDTEST-EPP-10124
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-7623- Verify user should be able to click on approve option on email/ text message
    EPIC_EPP-42_STORY_EPP-7623- Verify user should be able to click on approve option on email/ text message

    Given user (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code
    When External user clicks on the secure link received via email/ text message 
    Then External user should be redirected to that secure link (patient portal URL)
    And External user should be able to see ""You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval.""
    And External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”
    When user has approved the request for share another access code
    Then External user should see the option to submit the access code is enabled
    And user should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request
    And user should be able to click on approve option on email/ text message

  @BDDTEST-EPP-10125
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-7623- Verify user should be able to click on deny option on email/ text message
    EPIC_EPP-42_STORY_EPP-7623- Verify user should be able to click on approve option on email/ text message

    Given user (Patient) has shared the patient record to the external user’s email or phone number
    And External user should receive an email/ text message with the following content 
    And External user has already accessed the patient records once using the access code
    When External user clicks on the secure link received via email/ text message 
    Then External user should be redirected to that secure link (patient portal URL)
    And External user should be able to see ""You have requested to share another access code. Please try accessing with the new access code shared post the patient’s approval.""
    And External user should view the following message “Please enter the access code that you would have received separately to access the Patient records.”
    When user has approved the request for share another access code
    Then External user should see the option to submit the access code is enabled
    And user should received an email/ text message to the user (patient) with option to approve/ reject the external user’s request
    And user should be able to click on deny option on email/ text message
