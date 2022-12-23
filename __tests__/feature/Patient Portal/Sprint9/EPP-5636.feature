
@EPP_Patient_Sprint_9
@P1
@PPP_Phase_2
@Patient_Portal
@Share_my_Record/Prescription
Feature: Patient Portal : Share my Record/ Prescription/ Care plan - View option to share my prescriptions
  User Story: As a user, I should be able to view the option to share my prescriptions.



  @BDDTEST-EPP-6164
  @Automation
  @Patient_Portal
  @Regression
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-5636- Verify User should see the option to share their prescription (Glasses, Medication and Contact lens)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see Prescriptions widget in dashboard
    When User clicks on Prescriptions widget in dashboard
    Then User lands on the Prescriptions screen/ User lands on the Prescription widget in dashboard
    And User should see the option to share their prescription (Glasses, Medication and Contact lens)

  @BDDTEST-EPP-6165
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-5636- Verify User should see the pop-up to share their prescription (Glasses)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see Prescriptions widget in dashboard
    When User clicks on Prescriptions widget in dashboard
    Then User lands on the Prescriptions screen/ User lands on the Prescription widget in dashboard
    And User should see the option to share their prescription (Glasses)
    When User clicks on the option to share their prescription (Glasses)
    Then User should see the pop-up to share their prescription (Glasses)

  @BDDTEST-EPP-6166
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-5636- Verify User should see the pop-up to share their prescription (Medication)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see Prescriptions widget in dashboard
    When User clicks on Prescriptions widget in dashboard
    Then User lands on the Prescriptions screen/ User lands on the Prescription widget in dashboard
    And User should see the option to share their prescription (Medication)
    When User clicks on the option to share their prescription (Medication)
    Then User should see the pop-up to share their prescription (Medication)

  @BDDTEST-EPP-6167
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-5636- Verify User should see the pop-up to share their prescription (Contact lens)

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see Prescriptions widget in dashboard
    When User clicks on Prescriptions widget in dashboard
    Then User lands on the Prescriptions screen/ User lands on the Prescription widget in dashboard
    And User should see the option to share their prescription (Contact lens)
    When User clicks on the option to share their prescription (Contact lens)
    Then User should see the pop-up to share their prescription (Contact lens)

  @BDDTEST-EPP-6168
  @Patient_Portal
  @Share_my_Record/Prescription
  @Sprint9
  Scenario: EPIC_EPP-42_STORY_EPP-5636-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on Prescriptions widget in dashboard

    Given User launch Patient Portal url		
    When User is logged in to the application
    Then User lands to the "Dashboard" screen
    And User should be able to see Prescriptions widget in dashboard
    When User clicks on Prescriptions widget in dashboard
    And the internet service is unavailable
    Then user should see the appropriate error message
