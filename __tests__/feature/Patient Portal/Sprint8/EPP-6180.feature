
Feature: Patient Portal : Form Customization (Documents/ Forms) - Fill forms after scheduling appointment
  User Story: As a user, I should be able to see the option to fill out forms after scheduling an appointment in the appointment confirmation screen/ Upcoming appointment screen.


  @BDDTEST-EPP-7056
  @Form_Customization
  @Patient_Portal
  @Sprint8
  Scenario: EPIC_EPP-5256_STORY_EPP-6180 - Verify User should redirect to fill out forms online
    Given user already created an Appointment
    And user should see Appointment Confirmation overlay
    Then user should see Fill forms button
    When user click on Fill forms
    Then user should lands on to fill out forms online
