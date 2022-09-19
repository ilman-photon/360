
Feature: Patient Portal : Prescription Results - View Prescriptions Screen
  User Story: As a user, I should be able to view the screen with all the prescriptions

  @BDDTEST-EPP-4783
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2702 - To verify whether the patient is able to see the list of Prescriptions in the Prescription page
    Scenario: To verify whether the patient is able to see the list of Prescriptions in the Prescription page

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then patient should view the list of Prescriptions.

  @BDDTEST-EPP-4784
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2702 - To verify whether the patient is able to view the option to Refill the Prescription.
    Scenario : To verify whether the patient is able to view the option to Refill the Prescription.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then patient should see the option to Refill the Prescription.

  @BDDTEST-EPP-4785
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2702 - To verify whether the patient is able to view the Cancel option for cancelling those requested Prescription.
    Scenario: To verify whether the patient is able to view the Cancel option for cancelling those requested Prescription.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then patient should see the option to Cancel the requested Prescription.

  @BDDTEST-EPP-4786
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2702 - To verify whether the patient is able to view the Download option for refilled Prescription.
    Scenario : To verify whether the patient is able to view the Download option for refilled Prescription.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then patient should see the option to download  the refilled Prescription.

  @BDDTEST-EPP-4787
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2702 - To verify whether the patient is able to view the Download option for not expired Prescription.
    Scenario : To verify whether the patient is able to view the Download option for not expired Prescription.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then patient should see the option to download  the not expired Prescription.

  @BDDTEST-EPP-4788
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2702 - To verify whether the patient is not able to view the Download option for expired Prescription.
    Scenario : To verify whether the patient is not able to view the Download option for expired Prescription.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then patient should not see the option to download  the expired Prescription.

  @BDDTEST-EPP-4789
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-2702 - To verify whether the Patient is able to view the verbiage There are no prescriptions when there is no prescription for the Patient.
    Scenario : To verify whether the Patient is able to view the verbiage There are no prescriptions when there is no prescription for the Patient.

    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid new "<username or phone number>" and new "<password>" 
    And clicks  on login button.
    And navigate to the View Prescription page.
    Then patient should see the verbiage There are no prescriptions.
