
@EPP_Patient_Sprint_9
@P2
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - Click on option to share my care plan document
  User Story: As a user, I should be able to click on the option to share my care plan overview document.


  @BDDTEST-EPP-10165
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7258 - Verify user should be able to view share options on each document of Health care
    EPIC_EPP-42_STORY_EPP-7258 - Verify user should be able to view share options on each document of Health care

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    And user click on Health record sub menu
    Then user should be able to view share options on each document of Health care
    |Print
    |Download
    |Share

  @BDDTEST-EPP-10166
  @P2
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-7258 - Verify User should see the pop-up to share their care plan document
    EPIC_EPP-42_STORY_EPP-7258 - Verify User should see the pop-up to share their care plan document 

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    And user click on Health record sub menu
    Then user should be able to view share options on each document of Health care
    When user click on share icon button
    Then User should see the pop-up to share their care plan document
