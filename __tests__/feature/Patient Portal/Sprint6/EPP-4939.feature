
Feature: Patient Portal : Prescription Results - View contact lens prescriptions with details

  @BDDTEST-EPP-6370
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @included
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4939- To verify whether the patient is able navigate to Prescription screen.
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.

  @BDDTEST-EPP-6371
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @included
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4939- To verify whether the user should be able to view each prescriptions for contact lens
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    And patient should be able to view each prescriptions for contact lens

  @BDDTEST-EPP-6372
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @included
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4939- To verify whether the  user should be able to view each prescriptions for contact lens with details in contact lens prescriptions section
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    And patient should be able to view each prescriptions for contact lens with details in contact lens prescriptions section

  @BDDTEST-EPP-6373
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @included
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4939- To verify whether the  user should be able to view details/fields for contact lens prescriptions
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    And patient should be able to view each prescriptions for contact lens with details in contact lens prescriptions sectionSnoFields1Prescription Type (eg. Contact Lens),Prescribed on,3Expires on,Prescribed by,EyeSphere (i.e. Sph)BCCylinder (i.e. CYL)AXIS(With values under them)

  @BDDTEST-EPP-6374
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @included
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4939- To verify whether the User should be able to view Download and Print CTA for contact lens prescriptions
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    And patient should be able to view each prescriptions for contact lens with details in contact lens prescriptions section
    Then user should be able to view Download and Print CTA for contact lens prescriptions

  @BDDTEST-EPP-6375
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @included
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4939- To verify whether the User should be able to view Downloaded PDF file
    Given Patient Launch  the browser and enter the Patient portal URL
    When Patient enter valid "<username or phone number>" and "<password>" 
    And clicks  on login button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    And patient should be able to view each prescriptions for contact lens with details in contact lens prescriptions section
    Then user should be able to view Download and Print CTA for contact lens prescriptions
    And user should be able view the Downloaded Pdf file
