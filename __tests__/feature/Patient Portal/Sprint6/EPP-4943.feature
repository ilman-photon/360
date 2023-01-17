Feature: Patient Portal : Prescription Results - No glasses prescription available
  
  @BDDTEST-EPP-6233
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @included
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4943 - Verify the patient is able to navigate to prescription screen.
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.

  @BDDTEST-EPP-6234
  @P2
  @Patient_Portal
  @Prescription
  @included
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4943 - Verify the default page appearence when prescription page is loaded.
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on glasses section
    And patient should see the Prescriptions title and sub title from top left side in prescription page
    And patient should see the three sections as below<Glasses>,<Contacts>,<Medications>
    And patient should see the three icons for each prescription,<Download>,<Share><Print>
    And patient should see the read format only he or shet cannot edit anything in the page.
    Then patient should be able to view the verbiage <There are no prescriptions for glasses> if there are no glasses prescriptions are available
    And patient should be able to see the Glasses Prescriptions list details if prescriptions are available.

  @BDDTEST-EPP-6235
  @P1
  @Patient_Portal
  @Prescription
  @included
  @Regression
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4943- Verify the patient is able see the verbiage message in glasses section if there are no glasses prescriptions are available.
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on glasses section
    Then patient should be able to view the verbiage <There are no prescriptions for glasses> if there are no glasses prescriptions are available

  @BDDTEST-EPP-6236
  @P1
  @Patient_Portal
  @Prescription
  @Regression
  @included
  @Sprint6
  Scenario: EPIC_EPP-17_STORY_EPP-4943- Verify the patient is able see the glasses prescriptions details in glasses section if prescription details are available in Prescriptions page.
    Given patient launch the browser and enter the patient portal url
    When patient enter valid username or phone number and password
    And click on Sign in button.
    And the dashboard should be displayed.
    And click the View Prescription from the Prescription widget.
    Then patient should see the Prescription page.
    When patient navigates and click on glasses section
    Then patient should be able to see the Glasses Prescriptions list details 
    And patient should see the <Prescribed on> with date <mmddyyyy> 
    And patient should see the <Prescribed by> with Doctor <First and Last Name>
    And patient should see the <Expires on> with date <mmddyyyy>
