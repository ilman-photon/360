@BDDSTORY-EPP-7622
@EPP_Patient_Sprint_9
@P2
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - External user views a message that the patient has denied access to view their records 
  User Story: As an external user with whom the patient records are shared, I should see a message that the patient has denied access to view their records

  Acceptance Criteria:

  GIVEN

  User (Patient) has shared the patient record to the external user’s email or phone number

  And

  System send out the patient record via a secure link to the external user’s email or phone number as in 

  And

  External user has already accessed the patient records once using the access code

  And

  External user clicks on the secure link received via email/ text message again to access the patient records again

  And

  External user is awaiting approval from the patient to share another access code

  WHEN

  User (Patient) denies the request of generating another access code for the external user to access the patient records again (refer -  )

  THEN

  External user receives an email/ text message with the message “<Patient name> has denied your request.”

  And

  System should expire the secure link (patient portal URL) shared to access the patient records for the external user

  And

  External user will not be able to access the patient records 

  @BDDTEST-EPP-10121
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-30_STORY_EPP-7622- Verify External user receives an email/ text message with the message “<Patient name> has denied your request.”
    EPIC_EPP-42_STORY_EPP-7622- Verify External user receives an email/ text message with the message “<Patient name> has denied your request.”

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
    When User should be able to click on deny option on email/ text message
    Then external user views a message that the patient has denied access to view their records

  @BDDTEST-EPP-10122
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-30_STORY_EPP-7622- Verify External user should be able to view that shared link is expire
    EPIC_EPP-42_STORY_EPP-7622- Verify External user should be able to view that shared link is expire

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
    When User should be able to click on deny option on email/ text message
    Then external user views a message that the patient has denied access to view their records 
    When user click on link again
    Then  xternal user should be able to view that shared link is expired
