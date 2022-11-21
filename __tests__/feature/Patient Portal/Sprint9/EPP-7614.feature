
@EPP_Patient_Sprint_9
@P1
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - Enter access code to view shared prescription
  User Story: As an external user with whom the prescription (Medication or glasses or contact lens) are shared, I should be able to enter the access code to view the shared prescription.


  @BDDTEST-EPP-10211
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-7614 - Verify External user should be able to view the following fields
    EPIC_EPP-42_STORY_EPP-7614 - Verify External user should not be able to resend code for the next 30 mins

    Given external user click on URL on the email that sent by system
    Then external user should navigated to Access Code to view shared prescriptions
    And external user received email containing OTP code
    When external user enter valid OTP code
    And click on Submit button
    Then external navigated to Shared prescriptions contains below
    |Title written as prescriptions shared by: xxx (dynamic)
    |"<prescriptions name>" field
    |"<Last updated date>" field

  @BDDTEST-EPP-10212
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-7614 - Verify External user should have the provision to view the prescriptions which when clicked will open the prescriptions in pdf format in another tab
    EPIC_EPP-42_STORY_EPP-7614 - Verify External user should have the provision to view the prescriptions which when clicked will open the prescriptions in pdf format in another tab

    Given external user click on URL on the email that sent by system
    Then external user should navigated to Access Code to view shared prescriptions
    And external user received email containing OTP code
    When external user enter valid OTP code
    And click on Submit button
    Then external navigated to Shared prescriptions contains below
    |Title written as prescriptions shared by: xxx (dynamic)
    |"<prescriptions name>" field
    |"<Last updated date>" field
    When external user click options to view document
    Then external user should be able to view prescriptions in pdf format in another tab

  @BDDTEST-EPP-10213
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-7614 - Verify External user should be able to view the option to download the prescriptions
    EPIC_EPP-42_STORY_EPP-7614 - Verify External user should be able to view the option to download the prescriptions

    Given external user click on URL on the email that sent by system
    Then external user should navigated to Access Code to view shared prescriptions
    And external user received email containing OTP code
    When external user enter valid OTP code
    And click on Submit button
    Then external navigated to Shared prescriptions contains below
    |Title written as prescriptions shared by: xxx (dynamic)
    |"<prescriptions name>" field
    |"<Last updated date>" field
    And External user should be able to view the option to download the prescriptions
