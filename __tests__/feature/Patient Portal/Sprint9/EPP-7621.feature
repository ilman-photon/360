Feature: Patient Portal : Share my Record/ Prescription/ Care plan - External user access the patient records post patient's approval

  @BDDTEST-EPP-10119
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-7621- Verify External user receives an email/ text message with the message “<Patient name> has approved your request. Please access the <patient record> from using the following access code <access code>.”
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
    When user should be able to click on approve option on email/ text message
    Then External user receives an email/ text message with the message “<Patient name> has approved your request. Please access the <patient record> from using the following access code <access code>.”

  @BDDTEST-EPP-10120
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-7621- Verify External user will be able to access the patient records again using the new access code received
    EPIC_EPP-42_STORY_EPP-7621- Verify External user will be able to access the patient records again using the new access code received 

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
    When user should be able to click on approve option on email/ text message
    Then External user receives an email/ text message with the message “<Patient name> has approved your request. Please access the <patient record> from using the following access code <access code>.” 
    When External user clicks on the secure link 
    And enter access code on "<Access code>" field
    Then External user will be able to access the patient records again using the new access code received

    Example:
    |Access code|
    |xxxx|
