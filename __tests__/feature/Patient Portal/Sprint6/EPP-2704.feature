
Feature: Patient Portal : Prescription Results - View filters for medication prescriptions
  User Story: As a user, I should be able to view filters in medication prescriptions section

 

  @BDDTEST-EPP-4841
  @P3
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2704 - To verify whether the patient is able to view the below mentioned filters in the Prescription page
      
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then the Patient should see the filters for the below mentioned details
    
    |Refill status,Provider,Prescription Type(Glass, Lens, Medications),Expiry date
