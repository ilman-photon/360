Feature: Patient Portal : Prescription Results - View glasses prescriptions with details
  User Story: As a user, I should be able to view each prescriptions for glasses with details in glasses prescriptions section

  @BDDTEST-EPP-4790
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2703 - To verify whether the Prescription type is displaying correctly in the Glass prescription.
    Scenario: To verify whether the Prescription type is displaying correctly in the Glass prescription.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then the Patient should see the correct Type of prescription.

  @BDDTEST-EPP-4791
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2703 - To verify whether the Prescribed on is displaying the Prescribed date correctly in the Glass prescription.
    Scenario: To verify whether the Prescribed on is displaying the Prescribed date correctly in the Glass prescription.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then the Patient should see the correct date of prescription.

  @BDDTEST-EPP-4792
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2703 - To verify whether the Expiry date is displaying  correctly in the Glass prescription.
    Scenario: To verify whether the Expiry date is displaying  correctly in the Glass prescription.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then the Patient should see the correct expiry date of Glass prescription.

  @BDDTEST-EPP-4793
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2703 - To verify whether the Doctor's name is displaying  correctly in the Prescribed by.
    Scenario: To verify whether the Doctor's name is displaying  correctly in the Prescribed by.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then the Patient should see the correct prescribed Doctor's name in the Prescribed by.

  @BDDTEST-EPP-4839
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2703 - To verify whether the below mentioned details are displaying in the each Prescription under Glass prescription
    Scenario: To verify whether the below mentioned details are displaying in the each Prescription under Glass prescription.
    
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And select any prescription for Glasses
    Then below mentioned details should see by the user
    
    |Prescription Type(Ex. Glasses)
    |Prescribed on
    |Expires on
    |Prescribed by
    |Eye - Sph - Cyl - Axis - Add

  @BDDTEST-EPP-4840
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2703 - To verify whether the below mentioned details are displaying in the each Prescription under Glass prescription
    Scenario: To verify whether the below mentioned details are displaying in the each Prescription under Glass prescription.
    
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And select any prescription for Glasses
    Then below mentioned details should see by the user
    |Prescription Type(Ex. Glasses),Prescribed on,Expires on,Prescribed by
    |Eye - Sph - Cyl - Axis - Add
