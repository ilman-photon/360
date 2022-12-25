
@EPP_Patient_Sprint_9
@P1
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - Enter access code to view shared health record
  User Story: As an external user with whom the health record are shared, I should be able to enter the access code to view the shared health records.

  @BDDTEST-EPP-10205
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-4912 - Verify External user should be able to view the following fields
    Given external user click on URL on the email that sent by system
    Then external user should navigated to Access Code to view shared Health record screen
    And external user received email containing OTP code
    When external user enter valid OTP code
    And click on Submit button
    Then external navigated to Shared Health Record screen 

  @BDDTEST-EPP-10206
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-4912 - Verify External user should have the provision to view the health record which when clicked will open the health record in pdf format in another tab
    Given external user click on URL on the email that sent by system
    Then external user should navigated to Access Code to view shared Health record screen
    And external user received email containing OTP code
    When external user enter valid OTP code
    And click on Submit button
    Then external navigated to Shared Health Record screen 
    When external user click options to view document
    Then external user should be able to view health record in pdf format in another tab

  @BDDTEST-EPP-10207
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-4912 - Verify External user should be able to view the option to download the care plan document
    Given external user click on URL on the email that sent by system
    Then external user should navigated to Access Code to view shared Health record screen
    And external user received email containing OTP code
    When external user enter valid OTP code
    And click on Submit button
    Then external navigated to Shared Health Record screen 
    And External user should be able to view the option to download the care plan document
