
Feature: Patient Portal : Prescription Results - View medication prescriptions with details
  User Story: As a user, I should be able to view each prescriptions for medications with details in medication prescriptions section

  

  @BDDTEST-EPP-6376
  @P1
  @Patient_Portal
  @Prescription
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4940 - Verify if patient is able navigates to medication prescriptions section
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page
    And patient should navigates to medication prescriptions

  @BDDTEST-EPP-6377
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4940 - Verify if patient is able see the medication prescriptions latest in  first row
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page
    And patient should navigates to medication prescriptions 
    And patient should see the medication prescriptions latest  in first row

  @BDDTEST-EPP-6378
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4940 - Verify if patient is able view active medication prescriptions based on the expires date in future
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page
    And patient should navigates to medication prescriptions when patient should see the medication prescriptions latest  first
    Then patient should see the active medication prescriptions on top
    And patien should see the based on expires date in future

  @BDDTEST-EPP-6379
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4940 - Verify if patient is able view past medication prescriptions based on the expires on date
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page
    And patient should navigates to medication prescriptions 
    When patient should see the medication prescriptions latest  first
    Then patient should see the past  medication prescriptions below the active 
    And patient should see past prescriptions based on expires on date

  @BDDTEST-EPP-6380
  @P2
  @Patient_Portal
  @Prescription
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4940 - Verify if  when medications prescription page appearence with default details
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on Medications section
    And patient should see the Prescriptions title and sub title from top left side in prescription page
    And patient should see the three sections 
    Then patient should see the Active medications and past medications with the details <Prescription Type (eg. Medication),<Prescribed on>,<Prescribed by>,<Medication Name>,<Dosage><Frequency>

  @BDDTEST-EPP-6381
  @P2
  @Patient_Portal
  @Prescription
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to view medication prescription Download and Print CTA icons for  each prescription
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on Medications section
    And patient should see the Prescriptions title and sub title from top left side in prescription page
    And patient should see the three sections 
    Then patient should see the Active medications and past medications with the details <Prescription Type (eg. Medication),<Prescribed on>,<Prescribed by>,<Medication Name>,<Dosage><Frequency>
    And patient able to view medication prescription Download and Print CTA icons for  each prescription

  @BDDTEST-EPP-6382
  @P2
  @Patient_Portal
  @Prescription
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to view medication prescription click on Download to download icons for  each prescription as PDF file
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on Medications section
    And patient should see the Prescriptions title and sub title from top left side in prescription page
    And patient should see the three sections 
    Then patient should see the Active medications and past medications with the details <Prescription Type (eg. Medication),<Prescribed on>,<Prescribed by>,<Medication Name>,<Dosage><Frequency>
    And patient able to view medication prescription Download and Print CTA icons for each prescription as PDF file

  @BDDTEST-EPP-6383
  @P2
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to view medication prescription click on print icon to print the prescription
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on Medications section
    And patient should see the Prescriptions title and sub title from top left side in prescription page
    And patient should see the three sections 
    Then patient should see the Active medications and past medications with the details <Prescription Type (eg. Medication),<Prescribed on>,<Prescribed by>,<Medication Name>,<Dosage><Frequency>
    And patient  click on print icon to print the prescription

  @BDDTEST-EPP-6384
  @P2
  @Patient_Portal
  @Prescription
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to view CTA request or cancel refill medication prescription
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on Medications section
    And patient should see the Prescriptions title and sub title from top left side in prescription page
    And patient should see the three sections 
    Then patient should see the Active medications and past medications with the details <Prescription Type (eg. Medication),<Prescribed on>,<Prescribed by>,<Medication Name>,<Dosage><Frequency>
    And patient  should view CTA  medication prescription request or cancel refill

  @BDDTEST-EPP-6386
  @P2
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to see the Filter icon right options selected and able to remove the selected filter options medication prescription
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on Medications section
    And patient should see the Prescriptions title and sub title from top left side in prescription page
    And patient should see the three sections 
    Then patient should see the Active medications and past medications with the details <Prescription Type (eg. Medication),<Prescribed on>,<Prescribed by>,<Medication Name>,<Dosage><Frequency>
    And patient  should see CTA Filter icon right on the corner dropdown
    And patient have option to select prescription section
    And patient have the option to remove the selected filter medication prescription

  @BDDTEST-EPP-6388
  @P2
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario:  EPIC_EPP-17_STORY_EPP-4940 - Verify if patient able to see the Filter icon right options selected the medication prescription
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on Medications section
    And patient should see the Prescriptions title and sub title from top left side in prescription page
    And patient should see the three sections 
    Then patient should see the Active medications and past medications with the details <Prescription Type (eg. Medication),<Prescribed on>,<Prescribed by>,<Medication Name>,<Dosage><Frequency>
    And patient  should see CTA Filter icon right on the corner dropdown
    And patient have option to select prescription section
