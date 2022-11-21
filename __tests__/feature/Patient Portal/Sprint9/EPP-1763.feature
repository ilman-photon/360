
@EPP_Patient_Sprint_9
@P2
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - Click on option to share my health record
  User Story: As a user, I should be able to click on the option to share my health record.


  @BDDTEST-EPP-5579
  @Automation
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint7
  Scenario: EPIC_EPP-42_STORY_EPP-1763- Verify User should see the pop-up to share their health record
    Scenario: EPIC_EPP-42_STORY_EPP-1763- Verify User should see the pop-up to share their health record

    Given User is logged in the portal
    And User navigates to Health records screen/ User lands on Health record widget in dashboard
    And User lands on the Health records screen/ User lands on the Health record widget in dashboard
    When User clicks on the option to share
    Then  User should see the pop-up to share their health record
