
Feature: Patient Portal : Prescription Results - Select and Apply filters
  User Story: As a user, I should be able to select and apply filters for medication prescriptions

  
  @BDDTEST-EPP-4794
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2705 - Verify whether the Refill status is filtering correctly.
    Scenario : Verify whether the Refill status is filtering correctly.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And filter the Refill status
    Then patient should able to see the correct filter result.

  @BDDTEST-EPP-4795
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2705 - Verify whether the Provider is filtering correctly.
    Scenario : Verify whether the Provider is filtering correctly.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And filter the Provider
    Then patient should able to see the correct filter result.

  @BDDTEST-EPP-4796
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2705 - Verify whether the Prescription type(Glass, Lens, Medications) is filtering correctly.
    Scenario : Verify whether the Prescription type (Glass, Lens, Medications) is filtering correctly.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And filter the Prescription type such as Glass/Lens/ Medications
    Then patient should able to see the correct filter result.

  @BDDTEST-EPP-4797
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2705 - Verify whether the clear option is available once applied the filter
    Scenario: Verify whether the clear option is available once applied the filter.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And filter the Refill status.
    Then Patient should view the Clear option.
