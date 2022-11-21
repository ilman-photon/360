Feature: Patient Portal : Share my Record/ Prescription/ Care plan - View option to share my health record
 
  @BDDTEST-EPP-5565
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-1546- Verify User should be able to click on the option to share their health record
    Scenario: EPIC_EPP-42_STORY_EPP-1546- Verify User should be able to click on the option to share their health record

    Given User launch Patient Portal url		
    When User is logged in to the application
    And User navigates to Health records screen/ User lands on Health record widget in dashboard
    And User lands on the Health records screen/ User lands on the Health record widget in dashboard
    And User should see the option to share their health record
    And User should be able to click on the option to share their health record
