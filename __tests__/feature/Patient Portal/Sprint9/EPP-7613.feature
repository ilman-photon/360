
@EPP_Patient_Sprint_9
@P1
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - Enter access code to view shared care plan document
  User Story: As an external user with whom the care plan document are shared, I should be able to enter the access code to view the shared Care plan document.


  @BDDTEST-EPP-10208
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-4913 - Verify External user should be able to view the following fields
    EPIC_EPP-42_STORY_EPP-4913 - Verify External user should be able to view the following fields

    Given external user click on URL on the email that sent by system
    Then external user should navigated to Access Code to view shared care plan document
    And external user received email containing OTP code
    When external user enter valid OTP code
    And click on Submit button
    Then external navigated to Shared care plan document contains below
    |Title written as care plan document shared by: xxx (dynamic)
    |"<care plan document name>" field
    |"<Last updated date>" field

  @BDDTEST-EPP-10209
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-4913 - Verify External user should have the provision to view the care plan document which when clicked will open the care plan document in pdf format in another tab


  @BDDTEST-EPP-10210
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-42_STORY_EPP-4913 - Verify External user should be able to view the option to download the care plan document
    EPIC_EPP-42_STORY_EPP-4913 - Verify External user should be able to view the option to download the care plan document

    Given external user click on URL on the email that sent by system
    Then external user should navigated to Access Code to view shared care plan document
    And external user received email containing OTP code
    When external user enter valid OTP code
    And click on Submit button
    Then external navigated to Shared care plan document contains below
    |Title written as care plan document shared by: xxx (dynamic)|
    |"<care plan document name>" field|
    |"<Last updated date>" field|
    And External user should be able to view the option to download the care plan document
