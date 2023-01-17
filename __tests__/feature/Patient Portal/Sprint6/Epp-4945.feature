
Feature: Patient Portal : Prescription Results - No medication prescription available
  
  @BDDTEST-EPP-6241
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4945 - Verify the patient is able to navigate to prescription screen.
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.

  @BDDTEST-EPP-6243
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4945- Verify the patient is able see the verbiage message in Medications section if there are no medication prescriptions are available.
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on medications section
    Then patient should be able to view the verbiage <There are no prescriptions for Medications> if there are no medication prescriptions are available

  @BDDTEST-EPP-6244
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4944 - Verify the patient is able see the medications prescriptions details in medications section if prescription details are available in Prescriptions page.
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on medications section
    Then patient should be able to see the medications Prescriptions list details 
    And patient should see the Active and Past medications under medications section
    And patient should see the <Prescribed on> with date <mmddyyyy> 
    And patient should see the <Prescribed by> with Doctor <First and Last Name>
    And patient should see the <Expires on> with date <mmddyyyy>

  @BDDTEST-EPP-6252
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4945 - Verify the default page appearance when prescription page is loaded.
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on Medications section
    And patient should see the Prescriptions title and sub title from top left side in prescription page
    And patient should see the three sections as below<Glasses>,<Contacts>,<Medications
    And patient should see the three icons for each prescription<Download>,<Share>,<Print>
    And patient should see the read format only, he or shet cannot edit anything in the page.
    Then patient should be able to view the verbiage <There are no prescriptions for Medications> if there are no medications prescriptions are available
    And patient should be able to see the Medications Prescriptions list details if prescriptions are available.
    And patient should see the Filter icon right corner of the screen
    And patient should see the <Request Refill> button on each list at right bottom
