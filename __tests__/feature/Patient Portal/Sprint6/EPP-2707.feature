
Feature: Patient Portal : Request Refills - Request refill of prescription
  User Story: As a user, I should be able to request refill of a prescription by selecting the option to request for refill

  @BDDTEST-EPP-4800
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-18_STORY_EPP-2707- Verify whether the system is sending the requested Refill to the Provider portal/E360+
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And patient should see the option to Refill the Prescription.
    And request for the refill.
    And Login as Provider.
    Then Patient requested refill should received for the Provider/E360+

  @BDDTEST-EPP-4801
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-18_STORY_EPP-2707- Verify whether the Patient is able to see his/her requested refill against the Prescription
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And patient should see the option to Refill the Prescription.
    And request for the refill.
    Then Patient should see the requested refill.

  @BDDTEST-EPP-4802
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-18_STORY_EPP-2707- Verify whether the Patient is able to see the option to Cancel the requested refill

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And patient should see the option to Refill the Prescription.
    And request for the refill.
    Then Patient should see the Cancel option to cancel the requested refill.

  @BDDTEST-EPP-4803
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-18_STORY_EPP-2707- Verify whether the Patient is receiving the mail regarding refill request based on Preferred mode of communication - Email

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And patient should see the option to Refill the Prescription.
    And request for the refill.
    Then patient should receive the Email regarding refill request.

  @BDDTEST-EPP-4804
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-18_STORY_EPP-2707- Verify whether the Patient is receiving the Text message regarding refill request based on Preferred mode of communication - Phone number
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And patient should see the option to Refill the Prescription.
    And request for the refill.
    Then patient should receive the Text message regarding refill request.

  @BDDTEST-EPP-4805
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-18_STORY_EPP-2707- Verify whether the Email regarding request refill is receiving to the E360+

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    And patient should see the option to Refill the Prescription.
    And request for the refill.
    Then E360+ should receive the Email regarding refill request.
