
@EPP_Patient_Sprint_9
@P2
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - Click on option to share my prescriptions
  User Story: As a user, I should be able to click on the option to share my prescriptions.



  @BDDTEST-EPP-10167
  @Dashboard_Widget
  @P2
  @Patient_Portal
  Scenario: EPIC_EPP-42_STORY_EPP-7259 - Verify User should see the pop-up to share their care plan document
    EPIC_EPP-42_STORY_EPP-7259 - Verify User should see the pop-up to share their care plan document 

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Document navigation menu
    When user click on Document navigation menu
    And user click on Health record sub menu
    Then user should be able to view share options on each document of Health care
    When user click on share icon button
    Then User should see the pop-up to share their care plan document

  @BDDTEST-EPP-10168
  @Dashboard_Widget
  @P2
  @Patient_Portal
  Scenario: EPIC_EPP-42_STORY_EPP-7259 - Verify User should see the pop-up to share their prescriptions
    EPIC_EPP-42_STORY_EPP-7259 - Verify User should see the pop-up to share their prescriptions 

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Health Chart navigation menu
    When user click on Health Chart menu
    And user click on prescriptions sub menu
    Then user should be able to view share options on each document of prescriptions
    When user click on share icon button
    Then User should see the pop-up to share their prescriptions

  @BDDTEST-EPP-10169
  @Dashboard_Widget
  @P2
  @Patient_Portal
  Scenario: EPIC_EPP-42_STORY_EPP-7259 - Verify User should see the pop-up to share their Test & Lab Result
    EPIC_EPP-42_STORY_EPP-7259 - Verify User should see the pop-up to share their Test & Lab Result

    Given User launch Patient Portal url		
    And user is logged into the portal as admin
    And user lands on the Dashboard screen
    And user should be able to view Health Chart navigation menu
    When user click on Health Chart menu
    And user click on Test & Lab Result sub menu
    Then user should be able to view share options on each document of Test & Lab Result
    When user click on share icon button
    Then User should see the pop-up to share their Test & Lab Result
