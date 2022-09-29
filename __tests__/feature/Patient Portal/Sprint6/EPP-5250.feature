
Feature: Patient Portal : Prescription Results - Navigation to Prescriptions Screen
  @BDDTEST-EPP-5685
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-5250- To verify whether the patient is able navigate to Prescription screen.
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
