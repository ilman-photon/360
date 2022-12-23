Feature: Patient Portal : Share my Record/ Prescription/ Care plan - View option to share my care plan document

  @BDDTEST-EPP-10090
  @P1
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-1548- VerifyUser should be able to click on the option to share their care plan document

    Given User is logged in the portal		
    When User navigates to Care plan overview screen
    And User should see the option to share the care plan document
    And User should be able to click on the option to share their care plan document
