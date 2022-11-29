Feature: Patient Portal : Share my Record/ Prescription/ Care plan - External user can access the patient record multiple times until the link expires

  @BDDTEST-EPP-10092
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-40_STORY_EPP-7619 - Verify External user should not be able open the shared prescriptions when link is expired
    EPIC_EPP-40_STORY_EPP-7619 - Verify External user should not be able open the shared document when link is expired

    Given external user click on URL on the email that sent by system
    Then external user should navigated to Access Code to view shared prescriptions
    And external user received email containing OTP code
    When external user enter valid OTP code
    And click on Submit button
    Then external navigated windows that contains link are expired

  @BDDTEST-EPP-10093
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-40_STORY_EPP-7619 - Verify External user should not be able open the shared health record when link is expired
    EPIC_EPP-40_STORY_EPP-7619 - Verify External user should not be able open the shared health record when link is expired

    Given external user click on URL on the email that sent by system
    Then external user should navigated to Access Code to view  health record prescriptions
    And external user received email containing OTP code
    When external user enter valid OTP code
    And click on Submit button
    Then external navigated windows that contains link are expired

  @BDDTEST-EPP-10094
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  Scenario: EPIC_EPP-40_STORY_EPP-7619 - Verify External user should not be able open the shared care plan when link is expired
    EPIC_EPP-40_STORY_EPP-7619 - Verify External user should not be able open the shared care plan when link is expired

    Given external user click on URL on the email that sent by system
    Then external user should navigated to Access Code to view shared care plan
    And external user received email containing OTP code
    When external user enter valid OTP code
    And click on Submit button
    Then external navigated windows that contains link are expired
