
Feature: Patient Portal : Request Refills - View
  User Story: As a user, I should be able to view an option to Request Refill for medical  prescriptions 

 
  @BDDTEST-EPP-4798
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-18_STORY_EPP-2706 - To verify whether the patient is able to view the option to Refill the Prescription.
    Scenario : To verify whether the patient is able to view the option to Refill the Prescription.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then patient should see the option to Refill the Prescription.

  @BDDTEST-EPP-4799
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-18_STORY_EPP-2706- To verify whether the Patient is not able to request for the expired prescription.
    Scenario : To verify whether the Patient is not able to request for the expired prescription.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And patient should see the option to Refill the Prescription.
    And request for the expired prescription.
    Then Patient should not able to request for the expired prescription.
